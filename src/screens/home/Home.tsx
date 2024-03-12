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
import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import HomeModal from "./shared/HomeModal";
import { useSize } from "@/hook/useSize";
import SearchFilter from "@/compenents/search-filter/SearchFilter";
const Home: FC<TypePropsHome> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const width = useSize();
  const scrollUp = () => {
    console.log(containerRef?.current?.scrollLeft);
    if (containerRef.current) {
      containerRef.current.scrollLeft -=
        width <= 1200 ? width * 0.45 : width * 0.25; // Измените значение, чтобы увеличить скорость прокрутки
    }
  };

  const scrollDown = () => {
    console.log(containerRef?.current?.scrollLeft);
    if (containerRef.current) {
      containerRef.current.scrollLeft +=
        width <= 1200 ? width * 0.45 : width * 0.25; // Измените значение, чтобы увеличить скорость прокрутки
    }
  };
  return (
    <div className={styles.wrapper}>
      <Header />
      <Intro>
        <div className={styles.intro}>
          <h2>Откройте новые горизонты праздника с нашими яхтами и лодками</h2>
          <SearchFilter />
        </div>
      </Intro>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.section}>
            {/* <IconButton
              placeholder="<"
              size="lg"
              color="white"
              // ripple={true}
              variant="text"
              onClick={() => scrollUp()}
              // disabled={selectedCategory === 0}
              className={styles.arrowPrev}
            > */}
            <Image
              src={iconPrev}
              alt="prev"
              className={styles.arrowPrev}
              onClick={() => scrollUp()}
            />
            {/* </IconButton> */}
            {/* <IconButton
              placeholder=">"
              size="lg"
              color="black"
              variant="text"
              onClick={() => scrollDown()}
              // disabled={selectedCategory === 4}
              className={styles.arrowNext}
            >
              <Image src={iconNext} alt="next" />
            </IconButton> */}
            <Image
              src={iconNext}
              alt="next"
              className={styles.arrowNext}
              onClick={() => scrollDown()}
            />
            <h1>
              Аренда яхты{" "}
              <span>
                в <City />
              </span>
            </h1>
            <Category
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
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
          <Heading heading="Прокат лодок" link="лодки" />
          <div className={clsx(styles.itemsYatch, styles.mb)}>
            {[...Array(3)].map((_, i) => (
              <YatchCard
                type="'dada"
                img={img}
                className={styles.procat}
                key={i}
              />
            ))}
          </div>
          <Bottom link="лодки" />
        </div>
      </Wrapper>
      <Workshops />
      <Wrapper>
        <div className={clsx(styles.container, styles.mb)}>
          <Heading heading="Яхтклубы" link="яхтклубы" />
          <div className={clsx(styles.itemsYatch, styles.mb)}>
            {[...Array(2)].map((_, i) => (
              <YatchCard className={styles.yatch} img={img} key={i} />
            ))}
          </div>
          <Bottom link="яхтклубы" />
        </div>
      </Wrapper>
      <HomeModal />
      <Footer />
    </div>
  );
};

export default Home;
