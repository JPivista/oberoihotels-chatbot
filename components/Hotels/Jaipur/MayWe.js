"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { MayWeData } from "@/utils/jaipur-data";


export default function MayWeSlider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Set this to false if you don't want arrows
    prevArrow: (
      <button className="slick-prev swiper-button-prev">Previous</button>
    ),
    nextArrow: <button className="slick-next swiper-button-next">Next</button>,
    spaceBetween: 10,
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl">
          <span className="italic">May</span> we show you to your room?
        </h2>

        <div className="flex justify-between items-center mt-2">
          <p>
            All our rooms and villas offer garden views and a sense of
            yesteryear.<br/> Design inspired by Rajasthani traditional architecture
            blends perfectly with modern conveniences.
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
      <Slider {...settings} className="w-full container mx-auto">
        {MayWeData.map((slide, index) => (
          <div key={index} className="container mx-auto mt-10 relative">
            <Image
            alt="slide image"
              src={slide.image}
              width={800}
              height={800}
              className="w-full md:h-[60vh]"
            />
            <div className="">
              <p className="font-semibold">{slide.place}</p>
              <p className="">{slide.caption}</p>
            </div>
            <div className="flex gap-5 justify-end">
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
