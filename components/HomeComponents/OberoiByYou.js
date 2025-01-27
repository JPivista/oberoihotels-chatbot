"use client"; // Ensure this component runs only on the client

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { OberoiByYouData } from "@/utils/home-data";

export default function OberoiByYouSlider() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h2 className="">
          <span className="text-3xl">
            <span className="italic">Oberoi</span> by you.
          </span>
          <p className="">Staying at the Oberoi, as captured by our guests.</p>
        </h2>

        <div className="flex justify-between items-center mt-4">
          <p>
            Share your own experiences with <span className="font-bold">#MyOberoi.</span>
          </p>
          <p className="flex text-[#DA7B25] items-center cursor-pointer">
            VIEW ALL
            <Image
              src="/home/svgviewer-output.svg"
              alt="Explore Icon"
              width={15}
              height={15}
              className="ml-2"
            />
          </p>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        slidesPerView={6} // Updated to display six slides
        spaceBetween={10}
        autoplay={{ delay: 8000 }}
        effect="slide"
        navigation
        className="w-"
      >
        {OberoiByYouData.map((slide, index) => (
          <SwiperSlide key={index}>
          <div className="relative container mx-auto mt-10">
            {/* Image */}
            <Image
              src={slide.image}
              width={800}
              height={800}
              className="w-full md:h-[25vh] object-cover"
            />
        
            {/* Text Overlay */}
            <div className="absolute inset-0  flex flex-col justify-end  text-black">
              
              <p className="font-semibold bg-[#DFD9D4]  p-2">{slide.title}</p>
              
              <p>{slide.caption}</p>
            </div>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </>
  );
}
