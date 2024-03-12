"use client"
import {useHeader} from "@/compenents/header/HeaderProvider.tsx";
import {calendarSmall, locationSmall, materialSymbolsClose, searchHeader} from "@/assets/icons";
import {Dispatch, FC, Fragment, SetStateAction, useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hook/useActions.ts";
import {categorys, city, subCategorys} from "@/shared/var/categorys.ts";
import icon from "@/assets/img/arrow.svg";
import MyCalendar from "@/compenents/calendar/Calendar.tsx";
import formatDate from "@/shared/utils/format-date.ts";
import {setLocation} from "@/store/slice/search.slice.ts";
import {Button} from "@/compenents/button";
import {CiSearch} from "react-icons/ci";

export const ModalFilter = () => {
    const {modalActive, setModalActive} = useHeader();
    const ref = useRef(null);
    const [type, setType] = useState("");
    const dispatch = useAppDispatch();
    const {location} = useAppSelector((state) => state.search);
    const [dateRange, setDateRange] = useState<Date[] | null[]>([null, null]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedSubCategory, setSelectedSubCategory] = useState(0);
    const [selectedTypeCategory, setSelectedTypeCategory] = useState(0);
    const [dateOpened, setDateOpened] = useState<boolean>(false);

    useEffect(() => {
        const handleClick = (event: any) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(ref.current) && !path.includes(ref.current)) {
                setDateOpened(false);
            }
        };
        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.addEventListener("click", handleClick);
        };
    }, []);

    return (
        <div>
            <button
                type="button"
                className="flex gap-[31px] items-center px-[16px] py-[8px] border-solid border-[1px] border-[#EEEEEE] rounded-[8px]"
                onClick={() => {
                    setModalActive(true)
                    document.body.style.overflowY = "hidden"
                }}
            >
                <div>
                    <span className="block font-semibold leading-[12px] tracking-2% text-[12px] text-[#00748C]">Аренда яхт без капитана</span>
                    <span className="block mt-[2px] leading-[12px] tracking-2% text-[10px] text-left text-[#728487]">16 января•Москва</span>
                </div>
                <img src={searchHeader.src} width={14} height={14} alt=""/>
            </button>
            {
                !modalActive ?
                    <></> :
                    <div className="fixed w-[100%] h-[100%] bg-white left-0 top-0 px-[20px] pt-[56px] pb-[51px] z-10">
                        <button
                            className="absolute top-[22px] right-[20px]"
                            onClick={() => {
                                setModalActive(false)
                                document.body.style.overflowY = "visible"
                            }}
                        >
                            <img src={materialSymbolsClose.src} alt=""/>
                        </button>
                        <ModalFilterSelect
                            iconSrc={icon.src}
                            placeholder="Выберите категорию"
                            items={categorys}
                            label="Категория"
                            onChange={setSelectedCategory}
                            selected={selectedCategory}
                        />
                        <ModalFilterSelect
                            iconSrc={icon.src}
                            placeholder="Выберите подкатегорию"
                            items={subCategorys}
                            label="Подкатегория"
                            onChange={setSelectedSubCategory}
                            selected={selectedSubCategory}
                        />
                        <div ref={ref}>
                            <div
                                onClick={() => setDateOpened(true)}
                                className="cursor-pointer flex items-center justify-between my-[8px] py-[16px] border-solid border-b-[1px] border-b-[#EEEEEE]"
                            >
                                <div>
                                    <span className="text-[12px] tracking-2% leading-[12px] text-[#728487]">Даты начала аренды</span>
                                    <p className="text-[14px] leading-[16.8px] tracking-1% font-semibold text-[#18292D]">
                                        {
                                            dateRange[0] && dateRange[1] ?
                                                <>{formatDate(dateRange[0])} - {formatDate(dateRange[1])}</> :
                                                <>Выберите дату</>
                                        }
                                    </p>
                                </div>
                                <img src={calendarSmall.src} className="w-[16px] h-[16px]" alt=""/>
                            </div>
                            <div>
                                {
                                    !dateOpened ?
                                        <></> :
                                        <MyCalendar
                                            className="!relative !top-[16px]"
                                            date={dateRange}
                                            setDate={setDateRange}
                                        />
                                }
                            </div>
                        </div>

                        <ModalFilterSelect
                            iconSrc={locationSmall.src}
                            placeholder="Выберите локацию"
                            items={city}
                            label="Локация"
                            onChange={(i) => dispatch(setLocation(city[i as number]))}
                            selected={location}
                        />

                        <Button onClick={() => {setModalActive(false)}} className="!border-[#FA1153] !bg-[#FA1153] mt-[12px] !rounded-[16px] !text-[16px] !font-medium !leading-[19.2px]">
                            <CiSearch width="20px" height="20px" />
                            Поиск
                        </Button>
                    </div>
            }
        </div>
    )
}

interface IModalFilterSelectProps {
    items: string[];
    selected: number | string;
    onChange: Dispatch<SetStateAction<number>>;
    iconSrc: string;
    placeholder: string;
    label: string;
}

const ModalFilterSelect: FC<IModalFilterSelectProps> = (props) => {
    const [active, setActive] = useState<boolean>(false);
    const {
        items,
        selected,
        onChange,
        iconSrc,
        label,
        placeholder
    } = props;

    return (
        <div className={`relative ${active ? "pb-[16px] border-solid border-b-[1px] border-b-[#EEEEEE]" : ""}`}>
            <div
                onClick={() => setActive(true)}
                className="cursor-pointer flex items-center justify-between my-[8px] py-[16px] border-solid border-b-[1px] border-b-[#EEEEEE]"
            >
                <div>
                    <span className="text-[12px] tracking-2% leading-[12px] text-[#728487]">{label}</span>
                    <p className="text-[14px] leading-[16.8px] tracking-1% font-semibold text-[#18292D]">
                        {
                            typeof selected === "string" && selected.length > 0 ? selected : items[selected as number] ?? placeholder
                        }
                    </p>
                </div>
                <img src={iconSrc} width={16} height={16} alt=""/>
            </div>
            <div
                className={`transition ${active ? "visible" : "hidden"} border-[1px] border-[#EEEEEE] border-solid flex flex-col rounded-[8px] p-[8px] mt-[4px]`}>
                {
                    items.map(
                        (el, ind) =>
                            <Fragment key={ind}>
                                <button
                                    className="text-[14px] leading-[21px] text-left py-[12px] px-[16px]"
                                    onClick={() => {
                                        onChange(ind)
                                        setActive(false)
                                    }}
                                >{el}</button>
                            </Fragment>
                    )
                }
            </div>
        </div>
    )
}