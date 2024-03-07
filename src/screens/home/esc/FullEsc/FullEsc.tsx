"use client";
import React from "react";
import styles from "../Esc.module.scss";
import img from "@/assets/img/image 20.png";
import iconT from '@/assets/star.svg'
import { useSize } from "@/hook/useSize";
import icon from "@/assets/img/BigTag.png";
const FullEsc = () => {
  const width = useSize();

  return (
    <div className={styles.right}>
      {width <= 700 ? (
        <></>
      ) : (
        <>
          <div className={styles.upper}>
            <img src={icon.src} alt="" />
          </div>
          <div className={styles.img}></div>
          <div className={styles.row}>
            <div>
              <h3>Porshe Panamera</h3>
              <div className={styles.star}>
								<img src={iconT.src}/>
                <p>4.9 (50)</p>
              </div>
            </div>
            <p className={styles.prive}>
              <sup>от </sup>
              <b>1400</b> ₽/час
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FullEsc;
