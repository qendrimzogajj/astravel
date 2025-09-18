"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import Trust from "@/components/Trust";
import Offers from "@/components/Offers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookingSteps from "@/components/BookingSteps";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import HolidayTypes from "@/components/HolidayTypes";
import MultiCentre from "@/components/MultiCentre";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <main className="w-full relative">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden">
        {/* Background video wrapper with rounded corners */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide"
          >
            Book Now, Travel Later
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-base md:text-lg lg:text-2xl text-red-400 font-semibold"
          >
            Secure your dream holiday with AS Travel
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6"
          >
            <Button
              size="lg"
              className="bg-red-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-red-700 text-base md:text-lg"
            >
              Plan Your Next Holiday
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Offers */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Offers />
      </motion.div>

      {/* Holiday Types */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HolidayTypes />
      </motion.div>

      {/* Multi-Centre Holidays */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-1"
      >
        <MultiCentre />
      </motion.div>

      {/* Booking Steps */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="-mt-12"
      >
        <BookingSteps />
      </motion.div>

      {/* Enquiry Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="-mt-12"
      >
        <EnquiryForm />
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-4"
      >
        <WhyChooseUs />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="-mt-12"
      >
        <Testimonials />
      </motion.div>

      {/* Subscribe */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="-mt-12"
      >
        <Subscribe />
      </motion.div>

      {/* Divider between Subscribe and Footer */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          className="absolute bottom-0 w-full h-16 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
