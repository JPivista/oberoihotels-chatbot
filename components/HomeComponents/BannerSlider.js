"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlider() {
  const slides = [
    {
      image: "/home/slider-1.webp",
      caption: "The Oberoi, Marrakech Ranked Number 1 Resort in North Africa & the Middle East",
      subcaption: "Travel + Leisure World’s Best Awards, 2023",
    },
    {
      image: "/home/slider-2.webp",
      caption: "The Oberoi Beach Resort, Al Zorah Ranked Number 1 Hotel in Middle East",
      subcaption: "Hemispheres Readers’ Choice Awards, United Airlines, 2023",
    },
    {
      image: "/home/slider-3.jpg",
      caption: "Good Morning. Welcome to Oberoi.",
      subcaption: "",
    },
    {
      image: "/home/slider-4.webp",
      caption: "The Oberoi Amarvilas, Agra Featured in The World’s 50 Best Hotels.",
      subcaption: "The World’s 50 Best Hotels Academy, 2023",
    },
    {
      image: "/home/slider-5.webp",
      caption: "Oberoi Hotels & Resorts, Travel + Leisure’s USA Hall of Fame, 2023",
      subcaption: "World’s Best Awards",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    
  };

  return (
    <Slider {...settings} className="w-full">
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full h-[75vh] sm:h-[80vh] lg:h-[70vh]">
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 md:top-[450px] top-96 text-center w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 sm:px-16 py-4 text-white">
            <h2 className="text-xl sm:text-3xl font-bold">{slide.caption}</h2>
            <p className="text-sm sm:text-lg italic">{slide.subcaption}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
