"use client"; // Ensure this component runs only on the client

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { MayWeOfferData } from "@/utils/home-data";

export default function MayWeOfferSlider() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl">
          <span className="italic">May</span> we offer a little persuasion?
        </h2>

        <div className="flex justify-between items-center mt-2">
          <p>A few tempting reasons that might allow us to welcome you soon.</p>
          <p className="flex text-[#DA7B25] items-center cursor-pointer">
            VIEW ALL OFFERS
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
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 8000 }}
        effect="slide"
        navigation
        className="w-full"
      >
        {MayWeOfferData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto mt-10 relative">
              <Image
                src={slide.image}
                width={800}
                height={800}
                className="w-full md:h-[40vh]"
              />
              <div className="">
                <p className="font-thin text-lg">{slide.imagetitle}</p>
                <p className="font-semibold">{slide.title}</p>
                <p className="">{slide.caption}</p>
              </div>
              <div className="flex gap-5 mt-5">
                <Link href="" className="text-[#6AB8D8] flex gap-3">
                  EXPLORE
                  <Image
                    src="/home/svgviewer-output (1).svg"
                    alt="Explore Icon"
                    width={15}
                    height={15}
                  />
                </Link>
                <Link href="" className="text-[#DA7B25] flex gap-3">
                  BOOK NOW
                  <Image
                    src="/home/svgviewer-output.svg"
                    alt="Explore Icon"
                    width={15}
                    height={15}
                    className="text-[#DA7B25]"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
