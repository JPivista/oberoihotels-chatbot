import React from "react";
import { offers } from "../../utils/special-offers-data"; // Import the offers data
import Link from "next/link";
import Image from "next/image";

const SpecialOffers = () => {
  return (
    <div className=" py-12 mx-auto container">
      {/* Header */}
      <div className=" mb-8">
        <h1 className="text-4xl font-serif">
          <i>Special</i> Offers.
        </h1>
        <p className="text-base text-gray-600 mt-2">
          A few tempting reasons that might allow us to welcome you soon.
        </p>
      </div>

      {/* Featured Offers Section */}
      <div>
        <h2 className="text-4xl font-serif mb-8">
          <i>Featured</i> Offers.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Main offer */}
          <div>
            <Image
              src={offers[0].image}
              alt={offers[0].title}
              width={500} // Set a width for optimization
              height={300} // Set a height for optimization
              className="w-full rounded-0 shadow-lg"
            />
            <div className="mt-4">
              <p className="mb-2 uppercase text-gray-600">
                {offers[0].subtitle}
              </p>
              <h3 className="text-3xl font-serif italic text-gray-800 mb-2">
                {offers[0].title}
              </h3>
              <p className="text-gray-600">{offers[0].description}</p>
              <Link
                href={offers[0].link}
                className="text-[#65B6D7] font-medium text-base flex items-center hover:no-underline"
              >
                Explore <span className="ml-1 text-[#65B6D7]">›</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Other offers */}
          <div className="space-y-8">
            {offers.slice(1).map((offer, index) => (
              <div className="flex items-start space-x-4" key={index}>
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={240} // Set a width for optimization
                  height={160} // Set a height for optimization
                  className="w-60 h-40 rounded-0 shadow-md"
                />
                <div>
                  <p className="mb-2 uppercase text-gray-600">
                    {offer.subtitle}
                  </p>
                  <h4 className="text-base font-serif italic text-gray-800">
                    {offer.title}
                  </h4>
                  <p className="text-gray-600">{offer.description}</p>
                  <Link
                    href={offer.link}
                    className="text-[#65B6D7] font-medium text-base flex items-center hover:no-underline"
                  >
                    Explore <span className="ml-1 text-[#65B6D7]">›</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
