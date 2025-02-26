import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <Image
        src="/shimla/shimla-cecil-banner.png" // Replace with your image path
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />

    </div>
  );
};

export default Banner;
