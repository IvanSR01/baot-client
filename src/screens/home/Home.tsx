'use client'
import img from '@/assets/img/Rectangle 2692.png'
import iconPrev from '@/assets/svg/arrow-prev-black.svg'
import iconNext from '@/assets/svg/arrow-next-black.svg'
import Footer from '@/compenents/footer/Footer'
import Header from '@/compenents/header/Header'
import Intro from '@/compenents/intro/Intro'
import clsx from 'clsx'
import { FC, useRef, useState } from 'react'
import styles from './Home.module.scss'
import type { TypePropsHome } from './Home.type'
import Category from './category/Category'
import Esc from './esc/Esc'
import HomeCard from './home-card/HomeCard'
import Bottom from './shared/Bottom'
import City from './shared/City'
import Heading from './shared/Heading'
import Workshops from './workshops/Workshops'
import YatchCard from './yatch-card/YatchCard'
import Wrapper from '@/compenents/wrapper/Wrapper'
import Image from 'next/image'
import HomeModal from './shared/HomeModal'
import { useSize } from '@/hook/useSize'
import SearchFilter from '@/compenents/search-filter/SearchFilter'
import Link from "next/link";
const Home: FC<TypePropsHome> = () => {
	const [selectedCategory, setSelectedCategory] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)
	const width = useSize()
	const scrollUp = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft -=
				width <= 1200 ? width * 0.45 : width * 0.25 // Измените значение, чтобы увеличить скорость прокрутки
		}
	}

  const scrollDown = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;

      // Карточка представляет собой половину контейнера
      const cardWidth =
        width <= 1200 ? containerWidth / 2 : containerWidth / 3.005;

      // Добавляем gap между карточками (в данном случае, 9.74px)
      const gap = 9.74;

      const totalCardWidth = cardWidth + gap;

      containerRef.current.scrollLeft += totalCardWidth;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <Intro>
        <div className={styles.intro}>
          <h2 className="min-1200px:mb-[48px] min-1200px:leading-[61px] max-1200px:mb-[32px] max-834px:mb-[19px] tracking-4% max-1200px:px-[3px] !font-normal">Откройте новые горизонты праздника с нашими яхтами и лодками</h2>
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
            <h1 className="">
              Аренда яхты{" "}
              <span className="max-1200px:whitespace-pre">
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
          <div className={styles.max}>
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
        </div>
      </Wrapper>
      <Workshops />
      {/* <Wrapper>
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
      </Wrapper> */}
      <HomeModal />
      <Footer />
    </div>
  );
};

export default Home
