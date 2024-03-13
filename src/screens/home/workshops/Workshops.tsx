import icon from "@/assets/img/Ellipse 1.png";
import { FC } from "react";
import Bottom from "../shared/Bottom";
import Heading from "../shared/Heading";
import styles from "./Workshops.module.scss";
import iconT from "@/assets/star.svg";
import Wrapper from "@/compenents/wrapper/Wrapper";
const Workshops: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Wrapper>
        <div className={styles.max}>
          <Heading
            style={styles.heading}
            heading="Популярные мастерские"
            link="популярные мастерские"
          />
          <div className={styles.items}>
            {[...Array(6)].map((_, i) => (
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
      </Wrapper>
    </div>
  );
};

export default Workshops;
