"use client";
import img from "@/assets/img/Rectangle 2692.png";
import iconPrev from "@/assets/svg/arrow-prev-black.svg";
import iconNext from "@/assets/svg/arrow-next-black.svg";
import Footer from "@/compenents/footer/Footer";
import Header from "@/compenents/header/Header";
import Intro from "@/compenents/intro/Intro";
import clsx from "clsx";
import { FC, useRef, useState } from "react";
import styles from "./Home.module.scss";
import type { TypePropsHome } from "./Home.type";
import Category from "./category/Category";
import Esc from "./esc/Esc";
import HomeCard from "./home-card/HomeCard";
import Bottom from "./shared/Bottom";
import City from "./shared/City";
import Heading from "./shared/Heading";
import Workshops from "./workshops/Workshops";
import YatchCard from "./yatch-card/YatchCard";
import Wrapper from "@/compenents/wrapper/Wrapper";
import Image from "next/image";
import HomeModal from "./shared/HomeModal";
import { useSize } from "@/hook/useSize";
import SearchFilter from "@/compenents/search-filter/SearchFilter";
import Link from "next/link";

const Home: FC<TypePropsHome> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const width = useSize();
  const scrollUp = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;

      // Карточка представляет собой половину контейнера
      const cardWidth =
        width <= 1200 ? containerWidth / 2.06 : containerWidth / 3.06;

      // Добавляем gap между карточками (в данном случае, 9.74px)
      const gap = 9.74;

      const totalCardWidth = cardWidth + gap * 2;

      containerRef.current.scrollLeft -= totalCardWidth;
    }
  };

  const scrollDown = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;

      // Карточка представляет собой половину контейнера
      const cardWidth =
        width <= 1200 ? containerWidth / 2.06 : containerWidth / 3.06;

      // Добавляем gap между карточками (в данном случае, 9.74px)
      const gap = 9.74;

      const totalCardWidth = cardWidth + gap * 2;

      containerRef.current.scrollLeft += totalCardWidth;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <Intro>
        <div className={styles.intro}>
          <h2 className="min-1200px:mb-[48px] min-1200px:leading-[61px] max-1200px:mb-[32px] max-835px:mb-[19px] tracking-4% max-1200px:px-[3px] !font-normal">
            Откройте новые <span>горизонты праздника</span> с нашими яхтами и
            лодками
          </h2>
          <SearchFilter />
        </div>
      </Intro>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.section}>
            <Image
              src={iconPrev}
              alt="prev"
              className={styles.arrowPrev}
              onClick={() => scrollUp()}
            />
            <Image
              src={iconNext}
              alt="next"
              className={styles.arrowNext}
              onClick={() => scrollDown()}
            />
            <h1>
              Аренда яхты{" "}
              <span className="max-1200px:whitespace-pre">
                в <City />
              </span>
            </h1>
            <Category
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <div className={styles.arrow}>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7064 5.84801C12.8577 5.72184 13.0324 5.62672 13.2205 5.56808C13.4086 5.50945 13.6064 5.48845 13.8027 5.50628C13.9989 5.52411 14.1897 5.58042 14.3641 5.672C14.5386 5.76358 14.6933 5.88863 14.8194 6.04001L18.1524 10.04C18.2841 10.1905 18.3843 10.3659 18.4473 10.5558C18.5102 10.7456 18.5345 10.9461 18.5188 11.1455C18.5031 11.3449 18.4476 11.5392 18.3558 11.7168C18.2639 11.8945 18.1374 12.0519 17.9837 12.18C17.8301 12.308 17.6523 12.4041 17.461 12.4624C17.2697 12.5208 17.0687 12.5403 16.8697 12.5198C16.6708 12.4993 16.4779 12.4392 16.3025 12.3431C16.1271 12.2469 15.9727 12.1167 15.8484 11.96L12.5144 7.96001C12.2599 7.65443 12.1372 7.2603 12.1732 6.86426C12.2092 6.46822 12.401 6.10268 12.7064 5.84801Z"
                    fill="#00748C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7064 16.152C12.401 15.8973 12.2092 15.5318 12.1732 15.1357C12.1372 14.7397 12.2599 14.3456 12.5144 14.04L15.8484 10.04C16.1062 9.74527 16.4691 9.56306 16.8595 9.53229C17.2499 9.50152 17.6368 9.62463 17.9376 9.87532C18.2384 10.126 18.4293 10.4844 18.4694 10.8739C18.5096 11.2635 18.3958 11.6532 18.1524 11.96L14.8194 15.96C14.6933 16.1114 14.5386 16.2364 14.3641 16.328C14.1897 16.4196 13.9989 16.4759 13.8027 16.4937C13.6064 16.5116 13.4086 16.4906 13.2205 16.4319C13.0324 16.3733 12.8577 16.2782 12.7064 16.152Z"
                    fill="#00748C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5 11C16.5 11.3978 16.342 11.7794 16.0607 12.0607C15.7794 12.342 15.3978 12.5 15 12.5H7C6.60218 12.5 6.22064 12.342 5.93934 12.0607C5.65804 11.7794 5.5 11.3978 5.5 11C5.5 10.6022 5.65804 10.2206 5.93934 9.93934C6.22064 9.65804 6.60218 9.5 7 9.5H15C15.3978 9.5 15.7794 9.65804 16.0607 9.93934C16.342 10.2206 16.5 10.6022 16.5 11Z"
                    fill="#00748C"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8468 5.61601C11.9486 5.53118 12.08 5.49027 12.212 5.50227C12.3441 5.51427 12.4659 5.5782 12.5508 5.68001L15.8838 9.68001C15.9649 9.78226 16.0029 9.91219 15.9895 10.042C15.9761 10.1719 15.9125 10.2913 15.8122 10.3749C15.7119 10.4585 15.5829 10.4995 15.4528 10.4892C15.3227 10.479 15.2017 10.4183 15.1158 10.32L11.7828 6.32001C11.698 6.21815 11.657 6.08678 11.669 5.95476C11.681 5.82275 11.745 5.7009 11.8468 5.61601Z"
                  fill="#00748C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8468 14.384C11.745 14.2991 11.681 14.1773 11.669 14.0452C11.657 13.9132 11.698 13.7819 11.7828 13.68L15.1158 9.68C15.2017 9.58176 15.3227 9.52102 15.4528 9.51076C15.5829 9.50051 15.7119 9.54154 15.8122 9.62511C15.9125 9.70867 15.9761 9.82813 15.9895 9.95798C16.0029 10.0878 15.9649 10.2177 15.8838 10.32L12.5508 14.32C12.4659 14.4218 12.3441 14.4857 12.212 14.4977C12.08 14.5097 11.9486 14.4688 11.8468 14.384Z"
                  fill="#00748C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 10C16 10.1326 15.9473 10.2598 15.8536 10.3536C15.7598 10.4473 15.6326 10.5 15.5 10.5H5.5C5.36739 10.5 5.24021 10.4473 5.14645 10.3536C5.05268 10.2598 5 10.1326 5 10C5 9.86739 5.05268 9.74021 5.14645 9.64645C5.24021 9.55268 5.36739 9.5 5.5 9.5H15.5C15.6326 9.5 15.7598 9.55268 15.8536 9.64645C15.9473 9.74021 16 9.86739 16 10Z"
                  fill="#00748C"
                />
              </svg>
            </div>
            <div className={styles.itemsLayout} ref={containerRef}>
              <div className={styles.items}>
                {[...Array(5)].map((_, i) => (
                  <HomeCard status={i % 2 === 1 ? "promo" : "sale"} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Esc />
      <Wrapper>
        <div className={clsx(styles.container, styles.mb)}>
          <div className={styles.max}>
            <Heading heading="Прокат лодок" link="лодки" />
            <div className={clsx(styles.itemsYatch)}>
              {[...Array(3)].map((_, i) => (
                <YatchCard
                  type="'dada"
                  img={img}
                  className={styles.rental}
                  key={i}
                />
              ))}
            </div>
            <Bottom link="лодки" />
          </div>
        </div>
      </Wrapper>
      <Workshops />
      <Wrapper>
        <div className={clsx(styles.container, styles.mb)}>
          <div className={styles.max}>
            <Heading heading="Яхтклубы" link="яхтклубы" />
            <div className={clsx(styles.itemsYatch, styles.mb)}>
              {[...Array(2)].map((_, i) => (
                <YatchCard className={styles.yatch} img={img} key={i} />
              ))}
            </div>
            <Bottom link="яхтклубы" />
          </div>
        </div>
      </Wrapper>
      <HomeModal />
      <Footer />
    </div>
  );
};

export default Home;
