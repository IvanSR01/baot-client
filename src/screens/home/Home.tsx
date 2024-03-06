import img from "@/assets/img/Rectangle 2692.png";
import Footer from "@/compenents/footer/Footer";
import Header from "@/compenents/header/Header";
import Intro from "@/compenents/intro/Intro";
import SearchFilter from "@/compenents/search-filter/SearchFilter";
import clsx from "clsx";
import { FC } from "react";
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
import MySlider from "@/shared/ui/slider/slider";
import HomeModal from "./shared/HomeModal";

const Home: FC<TypePropsHome> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Intro>
        <div className={styles.intro}>
          <h2>Откройте новые горизонты праздника с нашими яхтами и лодками</h2>
          <SearchFilter />
        </div>
      </Intro>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1>
            Аренда яхты{" "}
            <span>
              в <City />
            </span>
          </h1>
          <Category />
          <div className={styles.itemsLayout}>
            <div className={styles.items}>
              {[...Array(4)].map((_, i) => (
                <HomeCard status={i == 1 ? "promo" : "sale"} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Esc />
      <div className={styles.container}>
        <div className={clsx(styles.section, styles.mb)}>
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
      </div>
      <Workshops />
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
      {/* <MySlider/> */}
      <HomeModal />
      <Footer />
    </div>
  );
};

export default Home;
