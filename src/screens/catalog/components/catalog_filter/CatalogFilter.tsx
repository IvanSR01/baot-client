"use client"
import Wrapper from "@/compenents/wrapper/Wrapper.tsx";
import {Button} from "@/compenents/button";
import {
    faSolidList,
    faSolidListBlack,
    filter,
    filterWhite,
    materialSymbolsMap,
    materialSymbolsMapBlack
} from "@/assets/icons"
import {Checkbox} from "@/compenents/checkbox";
import {FC, useState} from "react";
import clsx from "clsx";
import {CatalogModal} from "@/screens/catalog/components/catalog_modal/CatalogModal.tsx";
import {useCatalog} from "@/screens/catalog";
import Media from "react-media";

export const CatalogFilter: FC<{className?: string}> = ({className = ""}) => {
    const [filterActive, setFilterActive] = useState<boolean>(false);
    const {mapActive, setMapActive} = useCatalog();

    return (
        <>
            <div className={clsx("w-[100%] bg-[#FAFAFA]")}>
                <Wrapper>
                    {
                        !filterActive ? <></> :
                            <div className="py-[60px] flex justify-between max-680px:flex-col max-1060px:gap-[44px] max-1060px:justify-center">
                                <div className="grid grid-cols-3 max-1060px:grid-cols-2 max-1060px:gap-x-[44px] max-680px:!grid-cols-2 gap-x-[120px] gap-y-[2rem] max-680px:!gap-y-[40px]">
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-[1rem] leading-[23px] font-bold tracking-2% mb-[8px]">Основное</p>
                                        <Checkbox>с капитаном</Checkbox>
                                        <Checkbox>без капитана</Checkbox>
                                        <Checkbox>с егерем</Checkbox>
                                        <Checkbox>с поваром</Checkbox>
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-[1rem] leading-[23px] font-bold tracking-2% mb-[8px]">Комфорт</p>
                                        <Checkbox>обогреватель</Checkbox>
                                        <Checkbox>кондиционер</Checkbox>
                                        <Checkbox>камбуз(кухня)</Checkbox>
                                        <Checkbox>холодильник</Checkbox>
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-[1rem] leading-[23px] font-bold tracking-2% mb-[8px]">Депозит</p>
                                        <Checkbox>Обеспечение безопасности</Checkbox>
                                        <Checkbox>CWD</Checkbox>
                                        <Checkbox>от несчастных случаев</Checkbox>
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-[1rem] leading-[23px] font-bold tracking-2% mb-[8px]">Ресурсы</p>
                                        <Checkbox>GPS</Checkbox>
                                        <Checkbox>Детское кресло</Checkbox>
                                        <Checkbox>Дополнительные водители</Checkbox>
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-[1rem] leading-[23px] font-bold tracking-2% mb-[8px]">Аренда</p>
                                        <Checkbox>на сутки</Checkbox>
                                        <Checkbox>на неделю </Checkbox>
                                        <Checkbox>почасовая</Checkbox>
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-[1rem] leading-[23px] font-bold tracking-2% mb-[8px]">Категории</p>
                                        <Checkbox>Ящик для инструментов</Checkbox>
                                        <Checkbox>Запасная шина</Checkbox>
                                        <Checkbox>Разрушитель</Checkbox>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-[12px] ml-[27px] max-1060px:ml-0">
                                        <p className="text-[1rem] leading-[23px] font-bold tracking-2% mb-[8px]">Конструктив</p>
                                        <Checkbox>для вейкбординга</Checkbox>
                                        <Checkbox>фишплатформа</Checkbox>
                                        <Checkbox>с поваром</Checkbox>
                                        <Checkbox>кабина</Checkbox>
                                        <Checkbox>каюта</Checkbox>
                                        <Checkbox>с парусом</Checkbox>
                                    </div>
                                    <Media query="(min-width: 1061px)">
                                        <div className="whitespace-nowrap mt-[50px]">
                                            <Button onClick={() => setFilterActive(false)}>
                                                <img src={filterWhite.src} className="min-w-[24px] min-h-[24px]" alt=""/>
                                                Свернуть фильтры
                                            </Button>
                                        </div>
                                    </Media>
                                </div>
                            </div>
                    }
                </Wrapper>
            </div>
            <div className={clsx("w-[100%] shadow-[0px_3px_4px_0px_#999BA826]", className, mapActive ? "!mb-0" : "")}>
                <Wrapper>
                    <div className="py-[1.5rem] flex items-center gap-[12px]">
                        <div className="w-fit">
                            {
                                !filterActive ?
                                    <Button onClick={() => setFilterActive(true)} colorTheme="transparent-primary" size="medium">
                                        <img src={filter.src} alt=""/>
                                        Фильтры
                                    </Button> :
                                    <Button onClick={() => setFilterActive(false)} colorTheme="secondary" size="medium">
                                        <img src={filter.src} alt=""/>
                                        Свернуть фильтры
                                    </Button>
                            }
                        </div>
                        <div className="w-fit ml-auto">
                            {
                                mapActive ?
                                    <Button onClick={() => setMapActive(false)} colorTheme="transparent-black" size="small">
                                        <img src={faSolidListBlack.src} alt=""/>
                                        Список
                                    </Button> :
                                    <Button colorTheme="secondary" size="small">
                                        <img src={faSolidList.src} alt=""/>
                                        Список
                                    </Button>
                            }
                        </div>
                        <div className="w-fit">
                            {
                                !mapActive ?
                                    <Button onClick={() => setMapActive(true)} colorTheme="transparent-black" size="small" className="max-834px:!p-[12.5px]">
                                        <img src={materialSymbolsMapBlack.src} alt=""/>
                                        <span className="max-834px:hidden">Посмотреть на карте</span>
                                    </Button> :
                                    <Button colorTheme="secondary" size="small" className="max-834px:!p-[12.5px]">
                                        <img src={materialSymbolsMap.src} alt=""/>
                                        <span className="max-834px:d-none max-834px:hidden">Посмотреть на карте</span>
                                    </Button>
                            }

                        </div>
                    </div>
                </Wrapper>
            </div>
            {
                mapActive ? <CatalogModal /> : <></>
            }
        </>
    )
}