export const roomData = [
  {
    id: 1,
    title: "Deluxe",
    subtitle: "Rooms.",
    description1: "Designed with your utmost comfort in mind.",
    description2:
      "With heritage style and modern comforts in equal measure, these rooms with 22.3 - 24.5 square metres interiors, feature hand-carved one king-size two-poster bed, a richly upholstered sofa and armchair, a classic leather-topped writing desk and handmade rugs.",
    totalRoomSize: "36.9 - 42 square metres",
    sizeNote:
      "The size includes both interior and exterior private space of the room.",
    imageUrl: "/shimla/shimla_image_1.webp", // Replace with the correct path
    exploreLink: "#",
    bookLink: "#",
    bedType: "King size or Twin",
    slug: "deluxe-rooms",
  },
  {
    id: 2,
    title: "Luxury ",
    subtitle: "Rooms.",
    description1: "Heritage style and all modern comforts.",
    description2:
      "These classically appointed rooms are punctuated with cavalry and flag designs that pay homage to Shimla’s military history from the colonial era. Handpicked furnishings include a one king size two poster bed, a comfortable armchair and sofa, a leather topped writing desk and a hand carved chair. Classic touches that are distinctly Oberoi.",
    totalRoomSize: "34.38 - 35.6 square metres",
    sizeNote: "",
    imageUrl: "/shimla/shimla_image_2.webp", // Replace with the correct path
    exploreLink: "#",
    bookLink: "#",
    bedType: "King size",
    slug: "luxury-rooms",
  },
  {
    id: 3,
    title: "Premier Valley View",
    subtitle: "Rooms.",
    description1: "Comfortable, stylish and unmistakably Oberoi.",
    description2:
      "Unwind after a day of sightseeing around Shimla. These rooms with 36.25 - 39.9 square metres interiors, are classically furnished with a two poster king size bed, a plush armchair and sofa, a leather topped writing desk and a hand carved chair. They also include a walk in wardrobe and an ensuite bathroom.",
    view: "Himalayas and Shimla valley",
    totalRoomSize: "34.38 - 35.6 square metres",
    sizeNote: "",
    imageUrl: "/shimla/shimla_image_3.webp", // Replace with the correct path
    exploreLink: "#",
    bookLink: "#",
    bedType: "King size",
    slug: "premier-valley-view-rooms",
  },
  {
    id: 4,
    title: "Deluxe ",
    subtitle: "Suites.",
    description1: "With a private terrace.",
    description2:
      "These spacious suites with 51.2 - 53.9 square metres interiors, feature a grand, brass ornamented, two poster king size bed and an ensuite bathroom with a full size bathtub. The comfortable living room, furnished with a sofa and armchairs, is the perfect space to relax in.",
    view: "",
    totalRoomSize: "55.48 square metres",
    sizeNote:
      "The size includes both interior and exterior private space of the room.",
    imageUrl: "/shimla/shimla_image_4.webp", // Replace with the correct path
    exploreLink: "#",
    bookLink: "#",
    bedType: "King size",
    slug: "deluxe-suites",
  },
  {
    id: 5,
    title: "Luxury ",
    subtitle: "Suites.",
    description1: "Where classic design meets Oberoi luxury.",
    description2:
      "These spacious suites with 55.4 square metres interiors, have a master bedroom with a two poster king size bed, a comfortable living room and a bathroom with a bathtub, a separate shower, twin wash basins and a vanity counter for your convenience. Original artefacts and classic design features provide authentic touches.",
    view: "Himalayas and Shimla valley",
    totalRoomSize: "65.6 square metres",
    sizeNote:
      "The size includes both interior and exterior private space of the room.",
    imageUrl: "/shimla/shimla_image_6.webp", // Replace with the correct path
    exploreLink: "#",
    bookLink: "#",
    bedType: "King size",
    slug: "luxury-suites",
  },
];

export const amenitiesData = [
  {
    roomId: 1,
    category: "Room",
    items: [
      "Air conditioned rooms",
      '12" pillow top mattress',
      "Pillow menu features a range to suit every personal preference",
      "24 hour in room dining",
      "Fully stocked personal bar",
      "Walk in wardrobe and separate luggage space",
      "Turndown service",
      "24 hour express laundry service",
      "Interconnecting room option available at extra charge",
    ],
  },
  {
    roomId: 1,
    category: "Technology",
    items: [
      "Electronic safe for valuables",
      "High speed internet for up to four devices",
      "Direct dial telephone line",
      '49" LED television',
      "Wide range of national and international news, sports and film channels",
    ],
  },

  {
    roomId: 1,
    category: "Bathroom",
    items: [
      "High pressure shower with multiple settings",
      "Sunken wash basin",
      "Toiletries with natural ingredients, especially blended for Oberoi Hotels",
      "Hair dryer",
      "100% cotton bathrobes and towels",
      "Moveable shaving mirror",
    ],
  },

  //Luxury Rooms.
  {
    roomId: 2,
    category: "Room",
    items: [
      "Air conditioned rooms",
      "12\" pillow top mattress",
      "Pillow menu features a range to suit every personal preference",
      "24 hour in room dining",
      "Fully stocked personal bar",
      "Walk in wardrobe and separate luggage space",
      "Turndown service",
      "24 hour express laundry service",
      "Interconnecting room option available at extra charge",
    ],
  },

  {
    roomId: 2,
    category: "Technology",
    items: [
      "Electronic safe for valuables",
      "High speed internet for up to four devices",
      "Direct dial telephone line",
      "49\" LED television",
      "Wide range of national and international news, sports and film channels",
    ],
  },

  {
    roomId: 2,
    category: "Bathroom",
    items: [
      "High pressure shower with multiple settings",
      "Sunken wash basin",
      "Toiletries with natural ingredients, especially blended for Oberoi Hotels",
      "Hair dryer",
      "100% cotton bathrobes and towels",
      "Moveable shaving mirror",
    ],
  },


// Premier Valley View Rooms.
  {
    roomId: 3,
    category: "Room",
    items: [
      "Premier Valley View Rooms come with or without private balcony",
      "Air conditioned rooms",
      "12\" pillow top mattress",
      "Pillow menu features a range to suit every personal preference",
      "24 hour in room dining",
      "Fully stocked personal bar",
      "Turndown service",
      "24 hour express laundry service",
      "Walk in wardrobe and separate luggage space",
    ],
  },

  {
    roomId: 3,
    category: "Technology",
    items: [
      "Electronic safe for valuables",
      "High speed internet for up to four devices",
      "Direct dial telephone line",
      "49\" LED television",
      "Wide range of national and international news, sports and film channels",
    ],
  },

  {
    roomId: 3,
    category: "Bathroom",
    items: [
      "High pressure shower with multiple settings",
      "Sunken wash basin",
      "Toiletries with natural ingredients, especially blended for Oberoi Hotels",
      "Hair dryer",
      "100% cotton bathrobes and towels",
      "Moveable shaving mirror",
    ],
  },

// Deluxe Suites.

  {
    roomId: 4,
    category: "Room",
    items: [
      "Includes a master bedroom, living room, private terrace (in some rooms), walk-in wardrobe, bath and separate shower cubicle",
      "Air conditioned rooms",
      "12\" pillow top mattress",
      "Pillow menu features a range to suit every personal preference",
      "24 hour in room dining",
      "Fully stocked personal bar",
      "Turndown service",
      "24 hour express laundry service",
      "Walk in wardrobe and separate luggage space",
    ],
  },

  {
    roomId: 4,
    category: "Technology",
    items: [
      "Electronic safe for valuables",
      "High speed internet for up to four devices",
      "Direct dial telephone line",
      "49\" LED television",
      "Wide range of national and international news, sports and film channels",
    ],
  },

  {
    roomId: 4,
    category: "Bathroom",
    items: [
      "Full length enamel bathtub with fitted shower",
      "Frosted glass shower cubicle, with multi-setting shower",
      "Sunken wash basin",
      "Toiletries with natural ingredients, especially blended for Oberoi Hotels",
      "Hair dryer",
      "100% cotton bathrobes and towels",
      "Moveable shaving mirror",
    ],
  },



  {
    roomId: 5,
    category: "Room",
    items: [
      "Includes a master bedroom, living room, private terrace (in some rooms), walk-in wardrobe, bath and separate shower cubicle",
      "Air conditioned rooms",
      "12\" pillow top mattress",
      "Pillow menu features a range to suit every personal preference",
      "24 hour in room dining",
      "Fully stocked personal bar",
      "Turndown service",
      "24 hour express laundry service",
      "Walk in wardrobe and separate luggage space",
    ],
  },

  {
    roomId: 5,
    category: "Technology",
    items: [
      "Electronic safe for valuables",
      "High speed internet for up to four devices",
      "Direct dial telephone line",
      "49\" LED television",
      "Wide range of national and international news, sports and film channels",
    ],
  },

  {
    roomId: 5,
    category: "Bathroom",
    items: [
      "Full length enamel bathtub with fitted shower",
      "Frosted glass shower cubicle, with multi-setting shower",
      "Double wash basins",
      "Vanity table",
      "Toiletries with natural ingredients, especially blended for Oberoi Hotels",
      "Hair dryer",
      "100% cotton bathrobes and towels",
      "Moveable shaving mirror",
    ],
  },

];
