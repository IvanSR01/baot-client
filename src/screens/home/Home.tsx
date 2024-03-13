'use client'
import img from '@/assets/img/Rectangle 2692.png'
import iconPrev from '@/assets/svg/arrow-prev-black.svg'
import iconNext from '@/assets/svg/arrow-next-black.svg'
import Footer from '@/compenents/footer/Footer'
import Header from '@/compenents/header/Header'
import Intro from '@/compenents/intro/Intro'
import clsx from 'clsx'
import {FC, useRef, useState} from 'react'
import styles from './Home.module.scss'
import type {TypePropsHome} from './Home.type'
import Category from './category/Category'
import Esc from './esc/Esc'
import HomeCard from './home-card/HomeCard'
import Bottom from './shared/Bottom'
import City from './shared/City'
import Heading from './shared/Heading'
import Workshops from './workshops/Workshops'
import YatchCard from './yatch-card/YatchCard'
import Wrapper from '@/compenents/wrapper/Wrapper'
import {IconButton} from '@material-tailwind/react'
import Image from 'next/image'
import HomeModal from './shared/HomeModal'
import {useSize} from '@/hook/useSize'
import SearchFilter from '@/compenents/search-filter/SearchFilter'
import Link from "next/link";

const Home: FC<TypePropsHome> = () => {
    const [selectedCategory, setSelectedCategory] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const width = useSize()
    const scrollUp = () => {
        console.log(containerRef?.current?.scrollLeft)
        if (containerRef.current) {
            containerRef.current.scrollLeft -=
                width <= 1200 ? width * 0.45 : width * 0.25 // Измените значение, чтобы увеличить скорость прокрутки
        }
    }

    const scrollDown = () => {
        console.log(containerRef?.current?.scrollLeft)
        if (containerRef.current) {
            containerRef.current.scrollLeft +=
                width <= 1200 ? width * 0.45 : width * 0.25 // Измените значение, чтобы увеличить скорость прокрутки
        }
    }
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Intro>
                <div className={styles.intro}>
                    <h2 className="tracking-2% text-[60px] leading-[61px] mb-[48px] max-475px:-tracking-4%">Откройте
                        новые горизонты праздника с нашими яхтами и лодками</h2>
                    <SearchFilter/>
                </div>
            </Intro>
            <Wrapper>
                <div className={styles.container}>
                    <div className={styles.section}>
                        <IconButton
                            placeholder='<'
                            size='lg'
                            color='white'
                            variant='text'
                            onClick={() => scrollUp()}
                            // disabled={selectedCategory === 0}
                            className={styles.arrowPrev}
                        >
                            <Image src={iconPrev} alt='prev'/>
                        </IconButton>
                        <IconButton
                            placeholder='>'
                            size='lg'
                            color='black'
                            variant='text'
                            onClick={() => scrollDown()}
                            // disabled={selectedCategory === 4}
                            className={styles.arrowNext}
                        >
                            <Image src={iconNext} alt='next'/>
                        </IconButton>
                        <h2 className="text-[48px] leading-[57.6px] mb-[30px] tracking-2% font-medium max-1260px:text-[36px] max-1260px:leading-[43.2px] max-1260px:mb-[32px] max-475px:!mb-[20px] max-475px:!text-[26px] max-475px:!leading-[31.2px]">
                            Аренда яхты{' '}
                            <Link href="/catalog">
                            <span>
                                    в <City/>
							</span>
                            </Link>
                        </h2>
                        <Category
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        <div className={styles.itemsLayout} ref={containerRef}>
                            <div className={styles.items}>
                                {[...Array(5)].map((_, i) => (
                                    <HomeCard status={i % 2 === 1 ? 'promo' : 'sale'} key={i}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Esc/>
            <Wrapper>
                <div className={clsx(styles.container, styles.mb, "!mb-[150px] max-475px:!mb-[90px]")}>
                    <Heading heading='Прокат лодок' link='лодки'
                             className="min-1260px:!mb-[30px] min-475px:!mb-[32px] max-475px:!mb-[24px]"/>
                    <div className={clsx(styles.itemsYatch, "")}>
                        {[...Array(3)].map((_, i) => (
                            <YatchCard
                                type="'dada"
                                img={img}
                                className={styles.procat}
                                key={i}
                            />
                        ))}
                    </div>
                    <div className="max-475px:mt-[80px] max-475px:ml-[0] max-475px:w-[100%]">
                        <Bottom link='лодки'/>
                    </div>
                </div>
            </Wrapper>
            <Workshops/>
            <Wrapper>
                <div className={clsx(styles.container, styles.mb)}>
                    <Heading heading='Яхтклубы' link='яхтклубы'
                             className="min-1260px:!mb-[36px] min-475px:!mb-[32px] max-475px:!mb-[24px]"/>
                    <div className={clsx(styles.itemsYatch, styles.mb)}>
                        {[...Array(2)].map((_, i) => (
                            <YatchCard className={styles.yatch} img={img} key={i}/>
                        ))}
                    </div>
                    <Bottom link='яхтклубы'/>
                </div>
            </Wrapper>
            <HomeModal/>
            <Footer/>
        </div>
    )
}

export default Home
