"use client";

import Image from "next/image";

export default function MultiCentre() {
  return (
    <section className="pt-8 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto">

      {/* Title */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-wide text-gray-500 text-sm">
          Multi-Centre Holidays
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Roam, Sweet Roam
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover our exciting multi-centre holidays or book an appointment
          with us to plan your perfect getaway.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mauritius */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/mauritius.jpg"
              alt="Mauritius Twin Centre"
              width={600}
              height={400}
              className="object-cover w-full h-60"
            />
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
              Multi-centre
            </span>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Multi-Centre
            </p>
            <h3 className="text-xl font-bold mt-1">Mauritius Twin Centre</h3>
            <p className="text-gray-600 mt-2">
              Mauritius shares the reputation for stunning beaches, excellent
              diving and fabulous beach resorts that you'll find on other
              Indian Ocean islands.
            </p>
          </div>
        </div>

        {/* Sri Lanka */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/srilanka.jpg"
              alt="Sri Lanka Itinerary"
              width={600}
              height={400}
              className="object-cover w-full h-60"
            />
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
              Suggested Itinerary
            </span>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Suggested Itinerary
            </p>
            <h3 className="text-xl font-bold mt-1">A Taste of Sri Lanka</h3>
            <p className="text-gray-600 mt-2">
              If it’s your first visit to Sri Lanka, this week-long journey of
              the “Teardrop Island” is the ideal trip to get a glimpse of its
              ancient culture and natural wonders.
            </p>
          </div>
        </div>

        {/* Thailand */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/thailand.jpg"
              alt="Thailand Journey"
              width={600}
              height={400}
              className="object-cover w-full h-60"
            />
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
              Adventure
            </span>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Adventure
            </p>
            <h3 className="text-xl font-bold mt-1">Thailand Discovery</h3>
            <p className="text-gray-600 mt-2">
              From vibrant Bangkok to tropical islands and ancient temples,
              Thailand offers a mix of culture, adventure and relaxation that
              makes every journey unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
