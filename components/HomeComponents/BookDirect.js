import Image from "next/image";
import React from "react";

const BookDirect = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="border-r border-[#E7D496]">
            <Image src="/home/book-direct-logo.webp" width={200} height={200} />
            <p>Enjoy the benefits of booking directly on Oberoihotels.com</p>
          </div>
          <div className="border-r border-[#E7D496]">
            <Image src="/home/best-rate-guarantee-logo-02.png" width={50} height={50} />
            <p>Best Rate Guarantee</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDirect;
