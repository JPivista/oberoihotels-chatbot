import { moreOffers } from "../../../utils/special-offers-data";
import Link from "next/link";
import Image from "next/image";

const SpecialOfferDetails = ({ params }) => {
  const { slug } = params;

  // Find the offer data based on the slug
  const offer = moreOffers.find((offer) => offer.slug === slug);

  if (!offer) {
    return <p>Special Offer not found!</p>;
  }

  // Find the current offer index
  const currentIndex = moreOffers.findIndex((o) => o.slug === slug);

  // Get the next three offers (looping around using modulus operator)
  const nextOffers = [
    moreOffers[(currentIndex + 1) % moreOffers.length],
    moreOffers[(currentIndex + 2) % moreOffers.length],
    moreOffers[(currentIndex + 3) % moreOffers.length],
  ];

  return (
    <div className="container mx-auto">
      <div className="py-5">
        <Link
          href="/special-offers/"
          className="font-bold text-black hover:text-[#D8741B] transition-colors duration-300"
        >
          ˂ All Offers
        </Link>
      </div>
      <h1 className="text-5xl font-serif italic py-2">
        {offer.title} 
      </h1>
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        {offer.description}
      </p>

      {/* Special Offer Details Section */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={offer.image}
            alt={offer.title}
            className="shadow-md w-full h-full object-cover"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full">
          <p className="font-bold py-2">{offer.subtitle}</p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {offer.content1}
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {offer.content2}
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {offer.content3}
          </p>

          {/* Conditionally render the heading and offers items as a list */}
          {offer.offersitems && offer.offersitems.length > 0 && (
            <>
              <p className="font-semibold text-gray-800 mt-4">Offer Inclusions:</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                {offer.offersitems.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </>
          )}

          <Link
            href={offer.link}
            className="text-[#D8741B] font-medium text-base flex items-center hover:no-underline"
          >
            BOOK NOW <span className="ml-1 text-[#D8741B]">›</span>
          </Link>
        </div>
      </div>

      {/* Next Offers Section */}
      <div className="py-10">
        <p className="text-3xl font-serif mb-4 italic">More Offers</p>
        <div className="flex gap-10 overflow-x-auto">
          {nextOffers.map((nextOffer) => (
            <div key={nextOffer.slug} className="w-1/3">
              <Link href={`/special-offers/${nextOffer.slug}`}>
                <Image
                  src={nextOffer.image}
                  alt={nextOffer.title}
                  className="w-full h-[200px] object-cover shadow-md"
                  width={500} // Adjust width as needed
                  height={200} // Adjust height as needed
                />
                <h3 className="text-lg font-serif mt-2 flex items-center italic">
                  {nextOffer.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {nextOffer.description}
                </p>
              </Link>
              {/* Explore Link */}
              <Link
                href={`/special-offers/${nextOffer.slug}`}
                className="text-[#65B6D7] font-medium text-base hover:no-underline mt-2 block"
              >
                EXPLORE <span className="ml-1 text-[#65B6D7]">›</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferDetails;
