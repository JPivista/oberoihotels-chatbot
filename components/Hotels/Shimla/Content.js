import React from "react";
import { roomData } from "../../../utils/data"; // Adjust the path based on your folder structure
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";

const Rooms = () => {
  return (
    <div className="px-8 py-16 lg:px-24 lg:py-20">
      <div className=" ">
        {/* Header */}
        <h1 className="text-5xl font-serif mb-4">
          <i>
            Rooms <span className="italic">& Suites.</span>
          </i>
        </h1>
        <p className="text-gray-500 text-base mb-3">
          Classic furnishings, teak wood floors, and garden or valley views.
        </p>
        {/* Filters */}
        <div className="flex items-start mb-5">
          <Link href="" className="px-6 py-2 font-medium ">
            Filters
          </Link>
          <Link href="" className="px-6 py-2 font-medium border-0">
            Room Type ⌄
          </Link>
        </div>
        {/* Room Cards */}
        {roomData.length > 0 &&
          roomData.map((room) => (
            <div
              key={room.id}
              className="grid lg:grid-cols-2 gap-10 items-start mb-16"
            >
              {/* Image */}
              <Image
              width={300}
              height={300}
                src={room.imageUrl}
                alt={room.title}
                className="rounded-0 shadow-md w-full h-full object-cover"
              />
              {/* Content */}
              <div>
                <h2 className="text-4xl font-serif font-medium mb-6">
                  <span className="italic "></span>
                  {room.title} {room.subtitle}
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {room.description1}
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {room.description2}
                </p>

                {/* Conditionally render View section */}
                {room.view && room.view.trim() !== "" && (
                  <div className="flex mb-4">
                    <p className="text-gray-700 font-semibold text-base w-1/2">
                      View:
                    </p>
                    <p className="text-gray-600 font-normal text-base w-1/2">
                      {room.view}
                    </p>
                  </div>
                )}

                <div className="flex mb-5">
                  <p className="text-gray-700 font-semibold text-base w-1/2">
                    Total Room Size:
                  </p>
                  <div className="w-1/2">
                    <p className="text-gray-600 font-normal text-base">
                      {room.totalRoomSize}
                    </p>
                    {room.sizeNote && room.sizeNote.trim() !== "" && (
                      <p className="text-gray-600 text-base mt-2">
                        {room.sizeNote}
                      </p>
                    )}
                  </div>
                </div>

                {/* Link Table without lines */}
                <div className="flex items-center space-x-8 ">
                  <Link
                    href={room.exploreLink}
                    className="text-[#65B6D7] font-medium text-base flex items-center hover:no-underline"
                  >
                    EXPLORE <span className="ml-1 text-[#65B6D7]">›</span>
                  </Link>

                  <Link
                    href={room.bookLink}
                    className="text-[#D8741B] font-medium text-base flex items-center hover:no-underline"
                  >
                    BOOK <span className="ml-1 text-[#D8741B] ">›</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rooms;
