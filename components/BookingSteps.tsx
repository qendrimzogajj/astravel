"use client";

import { CheckCircle, CreditCard, Plane } from "lucide-react";
import Image from "next/image";

export default function BookingSteps() {
  const steps = [
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Choose Destination",
      desc: "Pick Maldives as your dream escape to turquoise lagoons and white sandy beaches.",
      bg: "bg-yellow-400",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Make Payment",
      desc: "Securely complete your booking online in minutes.",
      bg: "bg-red-400",
    },
    {
      icon: <Plane className="w-6 h-6 text-white" />,
      title: "Reach Airport",
      desc: "Pack your bags and fly directly to the Maldives on your selected dates.",
      bg: "bg-blue-500",
    },
  ];

  return (
    <section className="py-8 px-6 md:px-12 bg-white relative z-10 mt-6 mb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Steps */}
        <div>
          <p className="text-sm text-yellow-600 font-semibold mb-2">Easy and Fast</p>
          <h2 className="text-4xl font-bold text-[#14183e] mb-8 leading-snug">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${step.bg}`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trip Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <Image
            src="/maldives.jpg"
            alt="Maldives"
            width={600}
            height={400}
            className="object-cover w-full h-56"
          />
          <div className="p-6">
            <h3 className="font-semibold text-xl text-[#14183e]">Trip to Maldives</h3>
            <p className="text-gray-500 text-sm">14–29 July · by AS Travel Club</p>
            <p className="mt-2 text-yellow-600 text-sm font-medium">✈️ 20 people going</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-600 mb-1">Booking Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-purple-500 h-2 rounded-full w-[40%]"></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">40% completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
