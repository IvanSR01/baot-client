/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel, IconButton } from "@material-tailwind/react";
import { FC, Fragment } from "react";
import { TypePropsCarousel } from "./Carousel.type";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CarouselDefault: FC<TypePropsCarousel> = ({ imgs }) => {
  return (
    <Carousel
      className="rounded-t-xl"
      placeholder={undefined}
      navigation= {({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className="block cursor-pointer rounded-full transition-colors content-[''] bg-white"
              style={{
                width: 8,
                height: 8,
                opacity: (100 - Math.abs(i - activeIndex) * 20) / 100
              }}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      // prevArrow={({ loop, handlePrev, firstIndex }) => (
      //   <IconButton
      //     placeholder=">"
      //     onClick={handlePrev}
      //     disabled={!loop && firstIndex}
      //     style={{
      //       position: 'absolute',
      //       top: '50%',
      //       left: '20px',
      //       transform: 'translateY(-50%)',
      //       background: 'none',
      //     }}
      //   >
      //     <MdChevronLeft size="24" color="#fff" />
      //   </IconButton>
      // )}
      // nextArrow={({ loop, handleNext, lastIndex }) => (
      //   <IconButton
      //     placeholder=">"
      //     onClick={handleNext}
      //     disabled={!loop && lastIndex}
      //     style={{
      //       position: 'absolute',
      //       top: '50%',
      //       right: '20px',
      //       transform: 'translateY(-50%)',
      //       background: 'none',
      //     }}
      //   >
      //     <MdChevronRight size="24" color="#fff" />
      //   </IconButton>
      // )}
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
