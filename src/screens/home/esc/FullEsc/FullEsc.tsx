"use client";
import React from "react";
import styles from "../Esc.module.scss";
import img from "@/assets/img/image 20.png";
import iconT from '@/assets/star.svg'
import {useSize} from "@/hook/useSize";
import icon from "@/assets/img/BigTag.png";

const FullEsc = () => {
    const width = useSize();

    return (
        <>
            {width <= 700 ? (
                <></>
            ) : (
                <div className={styles.right}>
                    <div className={styles.upper}>
                        <img src={icon.src} alt=""/>
                    </div>
                    <div className={styles.img}></div>
                    <div className={styles.row}>
                        <div>
                            <h3 className="font-semibold tracking-1%">Porshe Panamera</h3>
                            <div className={styles.star}>
                                <img src={iconT.src}/>
                                <p className="font-semibold tracking-3% text-[12px]">4.9 (50)</p>
                            </div>
                        </div>
                        <p className={styles.prive}>
                            <sup className="font-semibold tracking-3% text-[12px] leading-[31.2px] top-[-1em] mr-[12px]">от </sup>
                            <b className="tracking-3% font-bold text-[26px] leading-[31.2px] tracking-4%">1400</b> <span className="mt-[-.45rem] block tracking-3% font-semibold text-[12px] leading-[18px]">₽/чел</span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default FullEsc;
