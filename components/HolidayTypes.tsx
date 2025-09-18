"use client";

import Image from "next/image";

const holidayTypes = [
  {
    title: "Safaris",
    subtitle: "Wild and Free",
    img: "/safari.jpg", // replace with your safari image
  },
  {
    title: "Family Holidays",
    subtitle: "Passport to Playtime",
    img: "/family.jpg", // replace with your family holiday image
  },
  {
    title: "Honeymoons",
    subtitle: "Cuddle Up, Adventure Out",
    img: "/honeymoon.jpg", // replace with your honeymoon image
  },
  {
    title: "Beach Holidays",
    subtitle: "Boat Shoes or Barefoot?",
    img: "/beach.jpg", // replace with your beach holiday image
  },
  {
    title: "All-Inclusive",
    subtitle: "Unwind, Redefined",
    img: "/allinclusive.jpg", // replace with your all-inclusive image
  },
  {
    title: "Tropical Bliss",            // ✅ Zanzibar without naming it
    subtitle: "Unwind where palm trees meet the ocean",
    img: "/zanzibar.jpg", // replace with your Zanzibar photo
  },
];

export default function HolidayTypes() {
  return (
    <section className="mt-12 mb-8 px-4 md:px-8 lg:px-16 max-w-[1600px] mx-auto">

      {/* Title + Subtitle */}
      <div className="text-center mb-10">
        <p className="uppercase text-sm tracking-widest text-gray-500">
          Holiday Types
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Experience Everything, Miss Nothing
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Longing for shared memories, cosy togetherness, or to hit refresh?
          We’ve got you covered with family breaks, wellness retreats, wildlife
          tours, exotic escapes, and more!
        </p>
      </div>

      {/* Grid of Holiday Types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {holidayTypes.map((holiday, i) => (
          <div
            key={i}
            className="relative overflow-hidden group h-[320px] rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* Background Image */}
            <Image
              src={holiday.img}
              alt={holiday.title}
              width={900}
              height={600}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p className="text-white text-sm uppercase tracking-wide drop-shadow-md">
                {holiday.subtitle}
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                {holiday.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
