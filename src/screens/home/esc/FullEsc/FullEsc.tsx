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
            {width <= 800? (
                <></>
            ) : (
                <div className={styles.right}>
                    <div className={styles.upper}>
                        <img src={icon.src} alt=""/>
                    </div>
                    <div className={styles.img}></div>
                    <div className={styles.row}>
                        <div>
                            <h3 className="font-semibold tracking-1% max-835px:!text-[14px]">Porshe Panamera</h3>
                            <div className={styles.star}>
                                <img src={iconT.src}/>
                                <p className="font-semibold tracking-3% text-[12px]">4.9 (50)</p>
                            </div>
                        </div>
                        <p className={styles.price}>
                            <div>
                                <sup className="font-semibold tracking-3% max-835px:!text-[12px]">от </sup>
                                <b className="tracking-3% font-bold max-835px:!text-[18px]">1400</b>
                            </div>
                            <span className="tracking-3% font-semibold max-835px:!text-[12px]">₽/час</span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default FullEsc;
