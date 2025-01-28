import { roomData, amenitiesData } from "../../../../utils/data";
import Link from "next/link";
import Image from "next/image";  // Import Next.js Image component

const RoomDetail = ({ params }) => {
  const { slug } = params;

  // Find the room data based on the slug
  const room = roomData.find((room) => room.slug === slug);

  if (!room) {
    return <p>Room not found!</p>;
  }

  // Filter amenities based on the room's ID
  const roomAmenities = amenitiesData.filter(
    (amenity) => amenity.roomId === room.id
  );

  // Find the current room index
  const currentIndex = roomData.findIndex((r) => r.slug === slug);

  // Get the next three rooms (looping around using modulus operator)
  const nextRooms = [
    roomData[(currentIndex + 1) % roomData.length],
    roomData[(currentIndex + 2) % roomData.length],
    roomData[(currentIndex + 3) % roomData.length],
  ];

  return (
    <div className="container mx-auto">
      <div className="py-5">
        <Link
          href="/hotels-in-shimla-cecil/rooms-suites/"
          className="font-bold text-black hover:text-[#D8741B] transition-colors duration-300"
        >
          ˂ All Rooms & Suites
        </Link>
      </div>
      <h1 className="text-5xl font-serif italic">
        {room.title} {room.subtitle}
      </h1>
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        {room.description1}
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={room.imageUrl}
            alt={room.title}
            className="shadow-md w-full h-full object-cover"
            width={600} // Adjust based on your image dimensions
            height={400} // Adjust based on your image dimensions
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full">
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {room.description2}
          </p>
          {room.view && room.view.trim() !== "" && (
            <div className="flex mb-4">
              <p className="text-gray-700 font-semibold text-base">View:</p>
              <p className="text-gray-600 font-normal text-base w-1/2 ms-[109px]">
                {room.view}
              </p>
            </div>
          )}

          <div className="flex mb-5">
            <p className="text-gray-700 font-semibold text-base">Bed type:</p>
            <div className="w-1/2 ms-20">
              <p className="text-gray-600 font-normal text-base">
                {room.bedType}
              </p>
            </div>
          </div>

          <div className="flex mb-5">
            <p className="text-gray-700 font-semibold text-base">
              Total Room Size:
            </p>
            <div className="w-1/2 ms-7">
              <p className="text-gray-600 font-normal text-base">
                {room.totalRoomSize}
              </p>
              {room.sizeNote && room.sizeNote.trim() !== "" && (
                <p className="text-gray-600 text-base mt-2">{room.sizeNote}</p>
              )}
            </div>
          </div>

          <Link
            href={room.bookLink}
            className="text-[#D8741B] font-medium text-base flex items-center hover:no-underline"
          >
            BOOK NOW <span className="ml-1 text-[#D8741B]">›</span>
          </Link>
        </div>
      </div>

      {/* Amenities Section */}
      {roomAmenities.length > 0 && (
        <div className="py-10">
          <p className="text-3xl font-serif mb-4 italic">Amenities</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
            {roomAmenities.map((category, index) => (
              <div key={index}>
                <h2 className="font-bold text-lg">{category.category}</h2>
                <ul className="mt-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="list-disc ml-4 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Rooms Section */}
      <div className="pb-10">
        <p className="text-3xl font-serif mb-4 italic">More rooms</p>
        <div className="flex gap-10 overflow-x-auto">
          {nextRooms.map((nextRoom) => (
            <div key={nextRoom.id} className="w-1/3">
              <Link href={`/rooms/${nextRoom.slug}`}>
                <Image
                  src={nextRoom.imageUrl}
                  alt={nextRoom.title}
                  className="w-full h-[200px] object-cover rounded-lg shadow-md"
                  width={600} // Adjust based on your image dimensions
                  height={400} // Adjust based on your image dimensions
                />
                <h3 className="text-lg font-serif mt-2 flex items-center italic">
                  {nextRoom.title} {nextRoom.subtitle}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {nextRoom.description1}
                </p>
              </Link>
              {/* Explore Link */}
              <Link
                href={`/hotels-in-shimla-cecil/rooms-suites/${nextRoom.slug}`}
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

export default RoomDetail;
