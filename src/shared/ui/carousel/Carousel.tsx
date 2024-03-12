/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel, IconButton } from "@material-tailwind/react";
import { FC, Fragment } from "react";
import { TypePropsCarousel } from "./Carousel.type";
import iconPrev from "@/assets/svg/arrow-prev.svg";
import iconNext from "@/assets/svg/arrow-next.svg";
import Image from "next/image";
import styles from "./Carousel.module.scss";
const CarouselDefault: FC<TypePropsCarousel> = ({ imgs }) => {
  return (
    <Carousel
      className="rounded-t-xl"
      placeholder={undefined}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className="block cursor-pointer rounded-full transition-colors content-[''] bg-white"
              style={{
                width: 8,
                height: 8,
                opacity: (100 - Math.abs(i - activeIndex) * 20) / 100,
              }}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <div className="!absolute top-2/4 left-4 -translate-y-2/4 text-lg">
          <Image
            src={iconPrev}
            alt="prev"
            onClick={handlePrev}
            height={10}
            width={10}
						className={styles.arrow}
          />
        </div>
      )}
      nextArrow={({ handleNext }) => (
        <div className="!absolute top-2/4 right-4 -translate-y-2/4 text-lg">
          <Image
            src={iconNext}
            alt="prev"
            onClick={handleNext}
            height={10}
            width={10}
						className={styles.arrow}
          />
        </div>
      )}
    >
      {imgs.map((item, i) => (
        <Fragment key={i}>
          <img
            src={item}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </Fragment>
      ))}
    </Carousel>
  );
};

export default CarouselDefault;
