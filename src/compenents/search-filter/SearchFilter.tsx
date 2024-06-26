"use client";
import icon from "@/assets/img/arrow.svg";
import img from "@/assets/img/calendar@1x.svg";
import locationIcon from "@/assets/location (3).svg";
import {useAppDispatch, useAppSelector} from "@/hook/useActions";
import {useSize} from "@/hook/useSize";
import Button from "@/shared/ui/button/Button";
import Select from "@/shared/ui/select/Select";
import {
  categorys,
  city,
  subCategorys,
  typeCategory,
} from "@/shared/var/categorys";
import {setLocation} from "@/store/slice/search.slice";
import clsx from "clsx";
import {FC, useEffect, useRef, useState} from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {CiSearch} from "react-icons/ci";
import MyCalendar from "../calendar/Calendar";
import styles from "./Search.module.scss";
import formatDate from "@/shared/utils/format-date";
import {
  arrowActive,
  calendarActive,
  calendarSmall,
  locationActive,
  locationSmall,
  searchFilter,
} from "@/assets/icons";
import Link from "next/link";

interface ISearchFilterProps {
  compact?: boolean;
  className?: string;
  variant?: "catalogFilter" | "homeFilter";
}

const SearchFilter: FC<ISearchFilterProps> = ({
  className,
  compact = false,
  variant
}) => {
  const width = useSize();
  const [type, setType] = useState("");
  const dispatch = useAppDispatch();
  const {location} = useAppSelector((state) => state.search);
  const [dateRange, setDateRange] = useState<Date[] | null[]>([null, null]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedTypeCategory, setSelectedTypeCategory] = useState("");
  const ref = useRef(null);
  const openRef = useRef(null);
  useEffect(() => {
    const handleClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if(!path.includes(ref.current) && !path.includes(openRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.addEventListener("click", handleClick);
    };
  }, []);

  const NotCompactFilterSelects = () => (
    <>
      <div
        className={clsx(
          className,
          styles.selectLayout,
          "min-1200px:!max-w-[288px]"
        )}
      >
        <Select
          selected={selectedSubCategory}
          options={subCategorys}
          setAction={(i) => setSelectedSubCategory(subCategorys[i as number])}
          placeholder="Подкатегория"
          img={icon.src}
          variant={variant}
          className={clsx(styles.max288px, "min-1200px:!max-w-[288px]")}
          imgActive={arrowActive.src}
        />
      </div>
      <div className={clsx(styles.border)}></div>
      <div
        className={"max-1200px:w-[100%] min-w-1200px:l-[-10px]"}
        style={{
          position: "relative",
        }}
      >
        <div
          className={clsx(width > 1200 ? styles.dateLayout : styles.selectLayout, "cursor-pointer")}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          ref={openRef}
        >
          {dateRange[0] && dateRange[1] ? (
            <div
              className={clsx(
                styles.date,
                isOpen && styles.focusDate,
                {[styles.headingIsActive]: dateRange[0]},
                `min-1200px:!px-[16px] max-1200px:!max-w-[100%] max-1200px:!min-h-[unset] max-1200px:!h-[unset] max-1200px:!p-[8px_12px] min-1200px:!max-w-[300px]`
              )}
            >
              <div>
                <span className="text-[16px] leading-[23px] tracking-2% !font-normal max-1200px:!text-[12px] max-1200px:!leading-[12px] !text-[#728487]">
                  Дата начала аренды
                </span>
                <p className={clsx(styles.homeRange,  "whitespace-nowrap capitalize" +
                  " text-[18px] !font-semibold leading-[21.6px] tracking-1% mt-[4px] max-1200px:!text-[14px]" +
                  " max-1200px:!leading-[16.8px]" )}>
                  {formatDate(dateRange[0])} - {formatDate(dateRange[1])}
                </p>
              </div>
              {isOpen ? (
                <img
                  className="max-1200px:w-[16px] max-1200px:-h-[16px]"
                  src={calendarActive.src}
                  alt=""
                />
              ) : (
                <img
                  className="max-1200px:w-[16px] max-1200px:-h-[16px]"
                  src={img.src}
                  alt=""
                />
              )}
            </div>
          ) : (
            <div
              className={clsx(
                styles.date,
                isOpen && styles.focusDate,
                `max-1200px:!max-w-[100%] max-1200px:!min-h-[unset] max-1200px:!h-[unset] max-1200px:!p-[8px_12px] min-1200px:!max-w-[300px]`
              )}
            >
              <p className="text-[18px] leading-[23px] tracking-2% !font-semibold max-1200px:!text-[14px] max-1200px:!leading-[16.8px]">
                Дата начала аренды
              </p>
              {isOpen ? (
                <img
                  className="max-1200px:w-[16px] max-1200px:-h-[16px]"
                  src={calendarActive.src}
                  alt=""
                />
              ) : (
                <img
                  className="max-1200px:w-[16px] max-1200px:-h-[16px]"
                  src={img.src}
                  alt=""
                />
              )}
            </div>
          )}
        </div>
        {isOpen && (
          <div ref={ref} className={clsx(styles.calendar)}>
            <MyCalendar
              className="min-1200px:!top-[72px] min-1200px:!w-[300px] max-1200px:!top-[calc(100%-2px)]"
              setShow={setIsOpen}
              date={dateRange}
              setDate={setDateRange}
            />
          </div>
        )}
      </div>
      <div className={clsx(styles.border, "")}></div>
      <div className={clsx(styles.selectLayout, "w-[100%]")}>
        <Select
          selected={location}
          options={city}
          setAction={(i) => dispatch(setLocation(city[i as number]))}
          placeholder="Локация"
          img={locationIcon.src}
          imgActive={locationActive}
          variant={variant}
          className="min-1330px:!max-w-[341px]"
        />
      </div>
      <div className={clsx(styles.border, "")}></div>
      <div
        className={clsx(
          styles.buttonLayout,
          "!ml-[auto] max-1200px:!w-[100%] max-1200px:!pt-[0] min-1200px:max-w-[54px] max-1200px:!mt-[6px]"
        )}
      >
        <Link href="/catalog" className=" block">
          <Button className="!font-medium min-w-[54px] max-1200px:!gap-[15px]">
            <CiSearch className="max-1200px:w-[20px] max-1200px:h-[20px]" />{" "}
            {width >= 1200 ? <></> : <>Поиск</>}
          </Button>
        </Link>
      </div>
    </>
  );

  return (
    <div className={clsx(styles.wrapper, compact ? styles.compact : "")}>
      {width >= 1200 && !compact && (
        <div className={clsx(styles.categorys)}>
          {categorys.map((item, i) => (
            <button
              className={clsx(
                "leading-[23px] tracking-2% pt-[1rem] pb-[14px]",
                styles.item,
                i === selectedCategory && styles.active
              )}
              onClick={() => setSelectedCategory(i)}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div
        className={clsx(
          styles.content,
          `!justify-start !pl-[46px] !pr-[54px] ${
            !compact
              ? "max-1200px:!p-[12px] max-1200px:gap-[6px] max-475px:px-12 min-1330px:!grid min-1330px:grid-cols-[288px_2px_272px_2px_341px_2px_54px] min-1330px:!gap-[25.41px] min-1200px:pt-[20px] min-1200px:pb-[17px]"
              : ""
          }`
        )}
      >
        {width < 1200 && !compact ? (
          <div className={styles.selectLayout}>
            <Select
              selected={type}
              variant={variant}
              options={categorys}
              setAction={(i) => {
                setType(categorys[i as number]);
                setSelectedCategory(i as number);
              }}
              placeholder="Категория"
              img={icon.src}
            />
            <div className={clsx(styles.border)}></div>
          </div>
        ) : (
          <></>
        )}
        {!compact ? (
          <>
            <NotCompactFilterSelects />
          </>
        ) : (
          <div className="grid grid-cols-[fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] justify-center items-center max-w-[800px]">
            <div className="rounded-l-[8px] h-[44px] pr-[1rem] border-t-[1px] border-b-[1px] border-l-[1px]">
              <Select
                compact={compact}
                variant={variant}
                selected={selectedTypeCategory}
                options={typeCategory}
                setAction={(i) =>
                  setSelectedTypeCategory(typeCategory[i as number])
                }
                placeholder="Тип"
                img={icon.src}
                className="rounded-[8px]"
              />
            </div>
            <div className="h-[44px] pr-[1rem] border-t-[1px] border-b-[1px] border-l-[1px]">
              <Select
                compact={compact}
                selected={selectedSubCategory}
                options={subCategorys}
                variant={variant}
                setAction={(i) =>
                  setSelectedSubCategory(subCategorys[i as number])
                }
                placeholder="Подкатегория"
                img={icon.src}
              />
            </div>
            <div className="h-[44px] pr-[1rem] border-t-[1px] border-b-[1px] w-fit border-l-[1px] relative">
              <div>
                <div
                  className={clsx(
                    styles.selectLayout,
                    styles.compact,
                    "!p-0 !w-fit !min-w-[250px] cursor-pointer"
                  )}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  ref={openRef}
                >
                  {dateRange[0] && dateRange[1] ? (
                    <div
                      className={clsx(
                        styles.date,
                        isOpen && styles.focusDate,
                        "!min-h-[42px] !h-[42px] !text-[14px] !w-fit !m-0 gap-[1.5rem]"
                      )}
                    >
                      <p className={clsx(styles.range, {[styles.homeRange]: variant === "homeFilter"}, "whitespace-nowrap")}>
                        {formatDate(dateRange[0])} - {formatDate(dateRange[1])}
                      </p>
                      <img src={calendarSmall.src} alt="" />
                    </div>
                  ) : (
                    <div
                      className={clsx(
                        styles.date,
                        isOpen && styles.focusDate,
                        "!min-h-[42px] !h-[42px] !text-[14px] !w-fit !m-0 gap-[1.5rem]"
                      )}
                    >
                      <p className="font-bold tracking-3%">
                        Даты начала аренды
                      </p>
                      {isOpen ? (
                        <img
                          src={calendarActive.src}
                          className="w-[16px] h-[16px]"
                          alt=""
                        />
                      ) : (
                        <img
                          src={calendarSmall.src}
                          className="w-[16px] h-[16px]"
                          alt=""
                        />
                      )}
                    </div>
                  )}
                </div>
                {isOpen && (
                  <div
                    ref={ref}
                    className={clsx(
                      styles.calendar,
                      "min-w-[350px] absolute top-[-40px]"
                    )}
                  >
                    <MyCalendar
                      setShow={setIsOpen}
                      date={dateRange}
                      setDate={setDateRange}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="h-[44px] pr-[1rem] border-solid border-t-[1px] border-b-[1px] border-l-[1px]">
              <Select
                compact={compact}
                variant={variant}
                selected={location}
                options={city}
                setAction={(i) => dispatch(setLocation(city[i as number]))}
                placeholder="Локация"
                img={locationSmall.src}
                imgActive={locationActive.src}
              />
            </div>
            <button className="w-fit bg-[#FA1153] p-[13px] rounded-[8px] ml-[-5px] min-w-[42px]">
              <img width="18px" height="18px" src={searchFilter.src} alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchFilter;
