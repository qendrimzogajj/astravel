"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutHighlight() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden">
      {/* Left (Curved Red Background with Text) */}
      <div className="relative flex flex-col justify-center px-10 py-16 lg:w-1/2 z-10 bg-red-600 text-white">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
            We call it The Great Journey because it’s more than travel — it’s a
            way of making every step unforgettable.
          </h2>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-md text-lg font-semibold">
            About Us
          </Button>
        </div>
        {/* Curved red shape */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[120px] bg-red-600">
          <div className="h-full w-full bg-red-600 rounded-l-[100%]"></div>
        </div>
      </div>

      {/* Right (Image fills other half) */}
      <div className="relative lg:w-1/2 h-[350px] lg:h-auto">
        <Image
          src="/plane-sunset.jpg"
          alt="Sunset plane"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
