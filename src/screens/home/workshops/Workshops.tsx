import icon from "@/assets/img/Ellipse 1.png";
import { FC } from "react";
import Bottom from "../shared/Bottom";
import Heading from "../shared/Heading";
import styles from "./Workshops.module.scss";
import iconT from "@/assets/star.svg";
const Workshops: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Heading
          style={styles.heading}
          heading="Популярные мастерские"
          link="популярные мастерские"
        />
        <div className={styles.items}>
          {[...Array(8)].map((_, i) => (
            <div className={styles.item} key={i}>
              <div>
                <img src={icon.src} alt="" />
              </div>
              <h3>Remstyle</h3>
              <div className={styles.star}>
                <img src={iconT.src} alt="" />
                <p>4.9 (50)</p>
              </div>
              <span>Пластиковые лодки и комплектующие</span>
            </div>
          ))}
        </div>
        <Bottom link="популярные мастерские" />
      </div>
    </div>
  );
};

export default Workshops;
