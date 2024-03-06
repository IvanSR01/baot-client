'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCard from "@/screens/home/home-card/HomeCard";
import { IoIosArrowDown } from "react-icons/io";

const MySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <IoIosArrowDown />,
    prevArrow: <IoIosArrowDown />,
		maxWidth: '300px',
  };

  return (
    <Slider {...settings}>
      {[...Array(3)].map((_, i) => (
				<HomeCard key={i} status="none"/>
			))}
      {/* Добавьте дополнительные карточки, как необходимо */}
    </Slider>
  );
};

export default MySlider;
