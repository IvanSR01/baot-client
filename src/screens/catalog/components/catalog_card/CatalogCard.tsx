"use client"
import CarouselDefault from "@/shared/ui/carousel/Carousel.tsx";
import img from "@/assets/img/Rectangle 28.png";
import imgT from "@/assets/img/Rectangle 2821.png";
import imgD from "@/assets/img/Rectangle 2231.png";
import favIcon from "@/assets/img/heart.png";
import React, {useState} from "react";
import c from "./style.module.scss";
import {boatLine, favoriteActive, peoples, ship, star, tablerBed, timer} from "@/assets/icons";
import styles from "@/screens/home/home-card/HomeCard.module.scss";
export const CatalogCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className={`relative block ${c.card}`}>
            <div>
                <CarouselDefault
                    imgs={[img.src, imgT.src, imgD.src, img.src, imgT.src]}
                />
            </div>
            <div className="absolute top-[18px] right-[20px]">
                <button type="button" onClick={() => setIsFavorite(!isFavorite)} className={styles.fav}>
                    {
                        isFavorite ? <img src={favoriteActive.src} alt='' /> : <img src={favIcon.src} alt='' />
                    }
                </button>
            </div>
            <div className={`${c.content} py-[1rem] px-[2rem] border border-solid border-t-0 border-b-[1px] border-r-[1px] border-l-[1px] rounded-b-[1.25rem]`}>
                <div className="flex items-center mb-[1rem]">
                    <img src={star.src} alt=""/>
                    <span className="ml-[4px] text-[#18292D] text-[12px] font-semibold tracking-3% leading-[1.25rem]">4.9 (50)</span>

                    <img src={timer.src} className="ml-[20px]" alt=""/>
                    <span className="ml-[4px] text-[#18292D] text-[12px] font-semibold tracking-3% leading-[1.25rem]">Ожидание: 1-2 часа</span>
                </div>
                <hr/>
                <div className="flex items-center justify-between py-[1rem]">
                    <h3 className="font-bold tracking-4% leading-[31.2px] text-[26px] text-[#18292D]">Porshe Panamera</h3>
                    <div>
                        <div className="flex gap-[12px] justify-end">
                            <div className="mt-[4px] tracking-3% text-[#00748C] leading-[1.125rem] text-[12px] h-fit font-medium">от</div>
                            <b className="tracking-1% text-[#00748C] inline text-[1.5rem] font-bold leading-[28.8px]">1400</b>
                        </div>
                        <div className="text-[#00748C] text-right leading-[1.125rem]">₽/час</div>
                    </div>
                </div>
                <hr/>
                <ul className="mt-[1rem] flex flex-col gap-[1rem]">
                    <li className="flex items-center">
                        <img src={peoples.src} alt=""/>
                        <span className="text-[12px] font-medium leading-[1.125rem] tracking-3% ml-[.5rem]">Количество пассажиров</span>
                        <span className="text-[12px] font-semibold leading-[1.125rem] tracking-3% ml-auto">8-10</span>
                    </li>
                    <li className="flex items-center">
                        <img src={tablerBed.src} alt=""/>
                        <span className="text-[12px] font-medium leading-[1.125rem] tracking-3% ml-[.5rem]">Количество кают</span>
                        <span className="text-[12px] font-semibold leading-[1.125rem] tracking-3% ml-auto">8-10</span>
                    </li>
                    <li className="flex items-center">
                        <img src={ship.src} alt=""/>
                        <span className="text-[12px] font-medium leading-[1.125rem] tracking-3% ml-[.5rem]">Тип судна</span>
                        <span className="text-[12px] font-semibold leading-[1.125rem] tracking-3% ml-auto">Boat type</span>
                    </li>
                    <li className="flex items-center">
                        <img src={boatLine.src} alt=""/>
                        <span className="text-[12px] font-medium leading-[1.125rem] tracking-3% ml-[.5rem]">Длина лодки</span>
                        <span className="text-[12px] font-semibold leading-[1.125rem] tracking-3% ml-auto">4 м</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}