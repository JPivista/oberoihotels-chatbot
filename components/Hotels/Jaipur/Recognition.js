import Image from "next/image";

export default function Awards() {
  const awards = [
    {
      title: "Top 20 Hotels in India (Ranked 1st)",
      year: "2024",
      description: "Conde Nast Traveller, UK, Readers’ Choice Awards",
    },
    {
      title: "Top 10 Hotels in India",
      year: "2024",
      description: "Conde Nast Traveler, USA, Readers’ Choice Awards",
    },
    {
      title: "Best Hotel in the World (Ranked 1st)",
      year: "2024",
      description:
        "Travel + Leisure, World's Best Awards",
    },
    {
      title: "50 Greatest Luxury Hotels",
      year: "2023",
      description: "Robb Report",
    },
  ];

  return (
    <>
      <div className="text-center">
        <h2 className="font-semibold text-3xl pt-14 italic py-2">
          Recognition.
        </h2>
        <p>For which we thank our guests and our people.</p>
      </div>
      <p className="flex justify-end container text-[#DA7B25] items-center cursor-pointer">
        VIEW ALL AWARDS
        <Image
          src="/home/svgviewer-output.svg"
          alt="Explore Icon"
          width={15}
          height={15}
          className="ml-2"
        />
      </p>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-l border-r border-[#DA7B25]">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center px-4 border-l border-[#DA7B25]"
              >
                <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                <p className="text-xl font-semibold mb-2">{award.year}</p>
                <p className="text-gray-700">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
