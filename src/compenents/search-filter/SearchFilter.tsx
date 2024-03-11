"use client";
import icon from "@/assets/img/arrow.svg";
import img from "@/assets/img/calendar@1x.svg";
import locationIcon from "@/assets/location (3).svg";
import { useAppDispatch, useAppSelector } from "@/hook/useActions";
import { useSize } from "@/hook/useSize";
import Button from "@/shared/ui/button/Button";
import Select from "@/shared/ui/select/Select";
import { categorys, city, subCategorys } from "@/shared/var/categorys";
import { setLocation } from "@/store/slice/search.slice";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CiSearch } from "react-icons/ci";
import MyCalendar from "../calendar/Calendar";
import styles from "./Search.module.scss";
import formatDate from "@/shared/utils/format-date";
const SearchFilter: FC = () => {
  const width = useSize();
  const [type, setType] = useState("");
  const dispatch = useAppDispatch();
  const { location } = useAppSelector((state) => state.search);
  const [dateRange, setDateRange] = useState<Date[] | null[]>([null, null]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const ref = useRef(null);
  const openRef = useRef(null);
  useEffect(() => {
    const handleClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(ref.current) && !path.includes(openRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.addEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      {width >= 1200 && (
        <div className={styles.categorys}>
          {categorys.map((item, i) => (
            <div
              className={clsx(
                styles.item,
                i === selectedCategory && styles.active
              )}
              onClick={() => setSelectedCategory(i)}
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
      )}
      <div className={styles.content}>
        {width < 1200 ? (
          <div className={styles.selectLayout}>
            <Select
              selected={type}
              options={categorys}
              setAction={(i) => {
                setType(categorys[i as number]);
                setSelectedCategory(i as number);
              }}
              placeholder="Категория"
              img={icon.src}
            />
            <div className={styles.border}></div>
          </div>
        ) : (
          <></>
        )}
        <div className={styles.selectLayout}>
          <Select
            selected={selectedSubCategory}
            options={subCategorys}
            setAction={(i) => setSelectedSubCategory(subCategorys[i as number])}
            placeholder="Подкатегория"
            img={icon.src}
          />
        </div>
        <div className={styles.border}></div>
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            className={styles.selectLayout}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            ref={openRef}
          >
            {dateRange[0] && dateRange[1] ? (
              <div className={clsx(styles.date, isOpen && styles.focusDate)}>
                <div>
                  <span>Дата начала аренды</span>
                  <p className={styles.range}>
                    {formatDate(dateRange[0])} - {formatDate(dateRange[1])}
                  </p>
                </div>
                <img src={img.src} alt="" />
              </div>
            ) : (
              <div className={clsx(styles.date, isOpen && styles.focusDate)}>
                <p>Дата начала аренды</p>
                <img src={img.src} alt="" />
              </div>
            )}
          </div>
          {isOpen && (
            <div ref={ref} className={styles.calendar}>
              {/* <div className={styles.layout}> */}
              <MyCalendar
                setShow={setIsOpen}
                date={dateRange}
                setDate={setDateRange}
              />
              {/* </div> */}
            </div>
          )}
        </div>
        <div className={styles.border}></div>
        <div className={styles.selectLayout}>
          <Select
            selected={location}
            options={city}
            setAction={(i) => dispatch(setLocation(city[i as number]))}
            placeholder="Локация"
            img={locationIcon.src}
          />
        </div>
        <div className={styles.border}></div>
        <div className={styles.buttonLayout}>
          <Button>
            <CiSearch /> {width >= 1200 ? <></> : <>Поиск</>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
