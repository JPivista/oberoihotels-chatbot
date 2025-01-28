"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExploringData } from "@/utils/jaipur-data";

export default function ExperienceSlider() {
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
          <span className="italic">Exploring</span> Jaipur.
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p>
            A hill top fortress, sprawling palaces, vibrant bazaars and
            astrology abound in the “Pink City”.
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

      <Slider {...settings} className="w-full">
        {ExploringData.map((slide, index) => (
          <div key={index}>
            <div className="flex mx-auto mt-10 relative justify-center items-center gap-5">
              <div className="container mx-auto px-20">
                <p className="font-semibold text-2xl py-3">{slide.title}</p>
                <p className="md:w-[70%]">{slide.description}</p>
                <p className=" py-3">
                  <span className="font-semibold">Distance from the hotel</span>{" "}
                  {slide.km} kilometres
                </p>
                <p className=" ">
                  <span className="font-semibold">Driving time </span>{" "}
                  {slide.time} minutes
                </p>
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
                </div>
              </div>
              <Image
              alt="slide image"
                src={slide.image}
                width={800}
                height={800}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
