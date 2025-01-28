"use client"; // Ensure this component runs only on the client

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { JaipurData } from "../../../utils/jaipur-data";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WelcomeSlider() {
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
      <div className="container mx-auto mt-10 px-4">
        <h2 className="text-3xl">
          <span className="italic">Experiences</span> that linger, often forever.
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

      <div className="flex justify-center container mx-auto">
        <Slider {...settings} className="container mx-auto w-1/2">
          {JaipurData.map((slide, index) => (
            <div key={index} className="w-1/2 sm:w-1/2 lg:w-1/3 px-4">
              <div className="flex mx-auto mt-10 relative justify-center items-center gap-5">
                <Image
                alt="image"
                  src={slide.image}
                  width={800}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
     

      <div className="container mx-auto px-4 py-10">
        <div className="w-full px-4">
          <p className="font-semibold text-2xl py-3">Welcome to Jaipur.</p>
          <p className="md:w-[70%]">
            The famous walled capital city of Rajasthan. Jaipur has been fondly
            known as the &rdquo;Pink City&rdquo;            since it was painted pink in 1876 as a sign
            of the people&lsquo;s hospitality towards the visiting Queen Victoria of
            England and the Prince of Wales.
          </p>
          <p>
            Experience a sincerely warm welcome when you stay with us at our 5
            star resort in Jaipur: The Oberoi Rajvilas. Spread over 1,29,499
            square metres of beautifully landscaped gardens, with traditional
            architecture, flaming mashaal torches, and reflection pools.
          </p>
          <p>
            Exquisite accommodation, including luxury tents inspired by the era of
            Maharajas, fine restaurants serving authentic Rajasthani and
            international cuisines, specially curated romantic experiences for
            couples, and our sincere hospitality. The perfect setting for the
            holiday of a lifetime at the best 5-star luxury resort in Jaipur.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
