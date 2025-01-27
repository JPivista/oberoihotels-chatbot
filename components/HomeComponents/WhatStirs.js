import { Span } from "next/dist/trace";
import React from "react";
import HotelSlider from "./HotelSlider"
const WhatStirs = () => {
  return (
   <>
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl"><span className="italic">What</span> stirs the traveller in you?</h2>
      <p className="mt-2">
        An idyllic beach on a faraway island? Shopping for rare treasures in an
        ancient city?
      </p>
      <p>
        A picnic in the Himalayas? A leisurely cruise on the Nile or a jungle
        adventure?
      </p>
    </div>
    <div>
        <HotelSlider/>
    </div>
   </>
  );
};

export default WhatStirs;
