import React from "react";
import { moreOffers } from "../../utils/special-offers-data";
import Link from "next/link";
import Image from "next/image";

const MoreOffers = () => {
  return (
    <div className="mx-auto container">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-serif">
          <i>More</i> Offers.
        </h2>
      </div>

      {/* Offers Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {moreOffers.map((offer, index) => (
          <div key={index} className="flex flex-col items-start">
            <Image
              src={offer.image}
              alt={offer.title}
              width={500}  // Adjust width as needed
              height={300} // Adjust height as needed
              className="w-full rounded-0 shadow-lg"
            />
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500 uppercase">
                {offer.subtitle}
              </p>
              <h3 className="text-lg font-serif italic text-gray-800 mt-1">
                {offer.title}
              </h3>
              <p className="text-gray-600 mt-2 min-h-14">{offer.description}</p>
              <Link
                href={`/special-offers/${offer.slug}`}
                className="text-[#65B6D7] font-medium text-base flex items-center hover:no-underline"
              >
                EXPLORE <span className="ml-1 text-[#65B6D7]">›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreOffers;
