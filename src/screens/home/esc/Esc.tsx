import icon from "@/assets/img/Mask group.svg";
import CustomLink from "@/shared/ui/custom-link/CustomLink";
import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Esc.module.scss";
import FullEsc from "./FullEsc/FullEsc";
import { ESC } from "@/shared/var/esc";
import Wrapper from "@/compenents/wrapper/Wrapper";
import img from "@/assets/img/image 20.png";
import Image from "next/image";

const Esc: FC = () => {
  return (
    <>
      <section className={styles.excursion}>
        <Wrapper>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <h2>Экскурсии</h2>
              <div className={styles.items}>
                {ESC.map((item, i) => (
                  <div className={styles.item} key={i}>
                    <div className={styles.subItem}>
                      <Image src={item.svg} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                    <IoIosArrowDown />
                  </div>
                ))}
              </div>
              <CustomLink path="/">Все яхтклубы в москве</CustomLink>
            </div>
            
            <FullEsc />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Esc;
