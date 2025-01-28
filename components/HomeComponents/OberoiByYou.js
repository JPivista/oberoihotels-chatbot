"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Image from "next/image";
import Link from "next/link";
import { OberoiByYouData } from "@/utils/home-data";

export default function OberoiByYouSlider() {
  const settings = {
    dots: true, // Optional: display navigation dots
    infinite: true, 
    speed: 500,
    slidesToShow: 6, // Display six slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, 
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      
      <Slider {...settings} className="container mx-auto">
        {OberoiByYouData.map((slide, index) => (
          <div key={index} className="relative container mx-auto mt-10 px-1">
            {/* Image */}
            <Image
            alt="image"
              src={slide.image}
              width={800}
              height={800}
              className="w-full md:h-[25vh] object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end text-black px-1">
              <p className="font-semibold bg-[#DFD9D4] p-2">{slide.title}</p>
              <p>{slide.caption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
