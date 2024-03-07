"use client";
import img from "@/assets/img/Rectangle 2692.png";
import iconPrev from "@/assets/svg/arrow-prev-black.svg";
import iconNext from "@/assets/svg/arrow-next-black.svg";
import Footer from "@/compenents/footer/Footer";
import Header from "@/compenents/header/Header";
import Intro from "@/compenents/intro/Intro";
import clsx from "clsx";
import { FC, useState } from "react";
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
const Home: FC<TypePropsHome> = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Intro />
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.section}>
            <IconButton
              placeholder="<"
              size="lg"
              color="white"
              variant="text"
              onClick={() => setSelectedCategory(selectedCategory - 1)}
              disabled={selectedCategory === 0}
              className={styles.arrowPrev}
            >
              <Image src={iconPrev} alt="prev" />
            </IconButton>
            <IconButton
              placeholder=">"
              size="lg"
              color="black"
              variant="text"
              onClick={() => setSelectedCategory(selectedCategory + 1)}
              disabled={selectedCategory === 4}
              className={styles.arrowNext}
            >
              <Image src={iconNext} alt="next" />
            </IconButton>
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
            <div className={styles.itemsLayout}>
              <div className={styles.items}>
                {[...Array(3)].map((_, i) => (
                  <HomeCard status={i == 1 ? "promo" : "sale"} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Esc />
      <Wrapper>
        <div className={styles.container}>
          <Heading heading="Прокат лодок" link="лодки" />
          <div className={clsx(styles.itemsYatch, styles.gap)}>
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
        <div className={styles.container}>
          <div className={clsx(styles.section, styles.mb, styles.mt)}>
            <div className={styles.heading}>
              <Heading heading="Яхтклубы" link="яхтклубы" />
            </div>
            <div className={clsx(styles.itemsYatch, styles.gap)}>
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
