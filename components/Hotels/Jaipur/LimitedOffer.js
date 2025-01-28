import React from "react";

const LimitedOffer = () => {
  return (
    <>
      <div className="container shadow-lg mx-auto p-5">
        <div className="flex gap-4 justify-center items-center">
          <div>
            <h2 className="">Limited Period Offer </h2>
          </div>
          <div className="text-center">
            <h3>Enjoy 15% Savings</h3>
            <p className=" flex justify-center items-center">
                <span className="border-b border-[#DA7B25] h-2 w-32"></span>
            </p>
            
            <p className="">
              Exclusive offer for Oberoi One members for reservations made
              between 23rd and 30th January for stays until 30th September,
              2025.
            </p>
          </div>
          <div className="text-center">
            <h3 className="bg-[#DA7B25] text-white p-2">Know more</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitedOffer;
