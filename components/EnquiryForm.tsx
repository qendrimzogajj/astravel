"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    dates: "",
    groupSize: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    alert("Thank you! We’ll get back to you shortly.");
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-red-600 to-red-700 text-white relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Quick Enquiry
        </motion.h2>
        <p className="mb-12 text-lg text-red-100 max-w-2xl mx-auto">
          Tell us your travel dreams and we’ll design <br />{" "}
          <span className="font-semibold">The Great Journey</span> just for you.
        </p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition"
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Preferred Destination"
            value={formData.destination}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition"
          />
          <input
            type="text"
            name="dates"
            placeholder="Travel Dates"
            value={formData.dates}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition"
          />
          <input
            type="number"
            name="groupSize"
            placeholder="Number of Travelers"
            value={formData.groupSize}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition md:col-span-2"
          />
          <div className="md:col-span-2 flex flex-col items-center">
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-4 px-6 text-lg font-semibold rounded-lg shadow-md w-full md:w-auto"
            >
              Submit Enquiry
            </Button>
            {/* Subtle trust note */}
            <p className="text-sm text-gray-600 text-center mt-4">
              Every enquiry is handled by our dedicated travel experts —
              crafted to fit you, not the brochure.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
