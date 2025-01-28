"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";


// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhereWouldYouData } from "@/utils/jaipur-data";

export default function WhereWouldYouSlider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

      <Slider {...settings} className="w-full">
        {WhereWouldYouData.map((slide, index) => (
          <div key={index}>
            <div className="flex mx-auto mt-10 relative justify-center items-center gap-5">
              <Image
                src={slide.image}
                width={800}
                height={800}
                className="w-full"
              />
              <div className="">
                <p className="font-semibold text-2xl py-3">{slide.title}</p>
                <p className="md:w-[70%]">{slide.description}</p>
                <div className="gap-5 justify mt-5 flex">
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
                VIEW MENU
                <Image
                  src="/home/svgviewer-output.svg"
                  alt="Explore Icon"
                  width={15}
                  height={15}
                  className="text-[#DA7B25]"
                />
              </Link>
             
                </div>
               <div className="flex items-center mt-5">
                <Image src="/jaipur/where-would-you/svgviewer-output.svg" width={20} height={20}/>
               <p>+91 141 3610101</p>
               </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
