"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlider() {
  const slides = [
    {
      image: "/jaipur/banner-slide-1.jpg",
      caption: "Best Hotel in the World",
      subcaption: "Travel + Leisure, World’s Best Awards, 2024",
    },
    {
      image: "/jaipur/banner-slide-2.webp",
      caption: "The Oberoi Rajvilas, Jaipur Ranked Number 1 in Top 20 Hotels in India",
      subcaption: "Conde Nast Traveller, UK, Readers’ Choice Awards, 2024.",
    },
    {
      image: "/jaipur/banner-slide-3.webp",
      caption: "Oberoi Hotels & Resorts, Travel + Leisure’s USA Hall of Fame, 2023",
      subcaption: "World’s Best Awards",
    },
    {
      image: "/jaipur/banner-slide-4.webp",
      caption: "Unforgettable Holidays.",
      subcaption: "Stay in our luxury resort in Jaipur.",
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
