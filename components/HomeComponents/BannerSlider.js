"use client"; // Ensure this component runs only on the client

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

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

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      autoplay={{ delay: 8000 }}
      effect="fade"
      navigation
      className="w-full h-[75vh] sm:h-[80vh] lg:h-[70vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute bottom-0 md:top-[450px] top-96 text-center w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 sm:px-16 py-4 text-white">
              <h2 className="text-xl sm:text-3xl font-bold">{slide.caption}</h2>
              <p className="text-sm sm:text-lg italic">{slide.subcaption}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
