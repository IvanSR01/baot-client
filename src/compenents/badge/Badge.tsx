import React, { FC } from "react";
import styles from "./Badge.module.scss";
import popularIcon from "@/assets/img/medal-star.svg";
import saleIcon from "@/assets/img/solar_sale-bold.svg";
import Image from "next/image";

interface BadgeProps {
  type: 'sale' | 'popular'
}

const Badge: FC<BadgeProps> = ({ type }) => {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      {type === 'sale' && <><Image src={saleIcon.src} width={18} height={18} alt="Акция" /> Акция</>}
      {type === 'popular' && <><Image src={popularIcon.src} width={18} height={18} alt="Популярно" /> Популярно</>}
    </div>
  );
};

export default Badge;
