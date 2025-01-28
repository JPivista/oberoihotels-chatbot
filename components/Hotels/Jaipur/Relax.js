"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { RelaxData } from "@/utils/jaipur-data";

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
          <span className="italic">Relax.</span> Replenish. Rejuvenate.
        </h2>

        <div className="flex justify-between items-center mt-2">
          <p>
            Oberoi spa experiences, just for you. A temperature controlled pool
            and an air conditioned fitness centre.
          </p>
        </div>
      </div>
      <Slider {...settings} className="w-full container mx-auto">
        {RelaxData.map((slide, index) => (
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
              <p>{slide.caption}</p>

              {/* Conditionally render Length if available */}
              {slide.length && <p>Length: {slide.length}</p>}

              {/* Conditionally render Timings if available */}
              {slide.timings && <p>Timings: {slide.timings}</p>}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
