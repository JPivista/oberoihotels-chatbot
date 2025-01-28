"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { StoriesData } from "@/utils/home-data";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StoriesSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    nextArrow: <div className="slick-arrow-next">Next</div>,
    prevArrow: <div className="slick-arrow-prev">Prev</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <h2 className="">
          <span className="font-thin">THE OBEROI MAGAZINE </span>
        </h2>

        <div className="flex justify-between items-center mt-2">
          <p className="text-2xl">
            <span className="italic">Stories</span> to inspire new journeys
          </p>
          <p className="flex text-[#DA7B25] items-center cursor-pointer">
            VIEW ALL STORIES
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
        {StoriesData.map((slide, index) => (
          <div key={index} className="container mx-auto mt-10 px-4">
            <Image
            alt="image"
              src={slide.image}
              width={800}
              height={800}
              className="w-full md:h-[40vh]"
            />
            <div className="">
              <p className="font-thin text-lg">{slide.imagetitle}</p>
              <p className="font-semibold">{slide.title}</p>
              <p className="font-thin py-2">{slide.author}</p>
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
        ))}
      </Slider>
    </>
  );
}
