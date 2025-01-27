"use client"; // Ensure this component runs only on the client

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExperienceData } from "@/utils/home-data";

export default function ExperienceSlider() {
  

  return (
    <>
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl">
          <span className="italic">Experiences</span> that linger, often
          forever.
        </h2>
        <p className="mt-2">A barbeque under the stars?</p>
        <div className="flex justify-between items-center mt-2">
          <p>A trek through a tropical paradise?</p>
          <p className="flex text-[#DA7B25] items-center cursor-pointer">
            VIEW ALL EXPERIENCES
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
        autoplay={{ delay: 8000 }}
        effect="slide"
        navigation
        className="w-full"
      >
        {ExperienceData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex mx-auto mt-10 relative justify-center items-center gap-5">
              <Image
                src={slide.image}
                width={800}
                height={800}
                className="w- md:h-[60vh]"
              />
              <div className="">
                <p className="font-semibold text-2xl py-3">{slide.title}</p>
                <p className="md:w-[70%]">{slide.description}</p>
                <div className=" gap-5 justify-end mt-5">
                  <Link href="" className="text-[#6AB8D8] flex gap-3">
                    EXPLORE
                    <Image
                      src="/home/svgviewer-output (1).svg"
                      alt="Explore Icon"
                      width={15}
                      height={15}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
