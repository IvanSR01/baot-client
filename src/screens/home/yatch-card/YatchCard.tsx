import React, { FC } from "react";
import styles from "./YatchCard.module.scss";
import clsx from "clsx";
import Image from "next/image";
import icon from "@/assets/location.svg";
import iconT from "@/assets/star.svg";
import { IoIosArrowDown } from "react-icons/io";
import { TypeYatchCard } from "./YatchCard.type";
const YatchCard: FC<TypeYatchCard> = ({ img, className, type }) => {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={clsx(styles.upper, "")}></div>
      <div className={clsx(styles.img)}>
        <Image src={img} alt={""} width={0} height={0}  className="max-h-[300px] max-375px:max-h-[330px]" />
      </div>

      <div className={styles.row}>
        {type ? (
          <div>
            <h4>ПВХ с мотором</h4>
            <div className={styles.item}>
              <p
                style={{
                  fontWeight: "300",
                  color: "#787878",
                }}
              >
                Measure and report{" "}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h4>Ореховая Бухта</h4>
            <div className={styles.item}>
              <div className={styles.star}>
                <img src={iconT.src} alt="" />
                <p>4.9 (50)</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.star}>
                <img src={icon.src} alt="" />
                <p>Морской причал</p>
              </div>
            </div>
          </div>
        )}
        <div className={styles.arrow}>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default YatchCard;
