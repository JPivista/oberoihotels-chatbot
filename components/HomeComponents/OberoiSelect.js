import Image from "next/image";
import React from "react";

const OberoiSelect = () => {
  return (
    <>
      <div className="container flex justify-center mt-10 items-center mx-auto">
        <div className="flex">
          <div className="w-[40%] bg-[#1b1649] flex items-center justify-center">
            <Image
            alt="oberoi"
              src="/home/ob-select-logo-marketing-assets2.png"
              width={200}
              height={200}
            />
          </div>
          <div className="w-[60%] flex flex-col justify-center items-center text-center border p-7">
            <h2 className="text-[#ae8b35] text-2xl">INTRODUCING OBEROI SELECT</h2>
            <p className="text-xl mt-3">
              Pre-purchase hotel credit and enjoy enhanced benefits at Oberoi
              Hotels & Resorts in India.
            </p>
            <Image alt="know more" src="/home/know-more-os-button.png" width={200} height={200} className="pt-5"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OberoiSelect;
