"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const offers = [
  {
    title: "Winter Sun Deals",
    subtitle: "Winter Escapes",
    img: "/maldives2.jpg",
    button: "View offers",
  },
  {
    title: "Late Holiday Deals",
    subtitle: "Time for Take Off",
    img: "/maldives3.jpg",
    button: "Take a look",
  },
  {
    title: "Indian Ocean",
    subtitle: "Your Next Great Escape",
    img: "/maldives4.jpg",
    button: "Feel inspired",
  },
  {
    title: "Egypt",
    subtitle: "The Best Trip You’ve Never Had",
    img: "/egypt2.jpg",
    button: "Plan ahead",
  },
];

export default function Offers() {
  return (
    <section className="mt-6 mb-10 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="relative overflow-hidden group h-[340px] shadow-md hover:shadow-xl transition-all duration-500 rounded-xl"
          >
            {/* Image */}
            <Image
              src={offer.img}
              alt={offer.title}
              width={1200}
              height={800}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 rounded-xl"
            />

            {/* Gradient Overlay - always visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-transparent to-blue-500/30 flex flex-col justify-end p-5 rounded-xl">
              <p className="text-white text-sm md:text-base uppercase tracking-wide drop-shadow-sm">
                {offer.subtitle}
              </p>
              <h3 className="text-white text-2xl font-bold drop-shadow-md">
                {offer.title}
              </h3>
              <Button className="mt-3 bg-red-600 text-white font-medium px-4 py-2 text-sm hover:bg-red-700 transition-all duration-300">
                {offer.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
