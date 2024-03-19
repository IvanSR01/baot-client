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
      <Wrapper className="">
        <div className={styles.max}>
          <Heading
            style={styles.heading}
            heading="Популярные мастерские"
            link="популярные мастерские"
            className="min-1260px:!mb-[52px] min-475px:!mb-[32px] max-475px:!mb-[32px]"
          />
          <div className={styles.items}>
            {[...Array(6)].map((_, i) => (
              <div className={styles.item} key={i}>
                <div className="w-fit">
                  <img src={icon.src} alt="" />
                </div>
                <h3 className="font-bold text-[20px] leading-[24px] tracking-4%">Remstyle</h3>
                <div className={styles.star}>
                  <img src={iconT.src} alt="" className="w-[13px] h-[13px]" />
                  <p className="font-semibold tracking-3% leading-[18px] text-[12px]">4.9 (50)</p>
                </div>
                <span className="leading-[23px] tracking-2% text-[#728487] ">Пластиковые лодки и комплектующие</span>
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
