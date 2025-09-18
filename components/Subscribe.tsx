"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Subscribe() {
  return (
    <section className="mt-20 bg-purple-50 rounded-2xl p-10 relative overflow-hidden">
      <div className="relative z-10 text-center">
        <h2 className="heading-2 mb-6 max-w-2xl mx-auto">
          Subscribe to get travel deals, latest news and exclusive offers from{" "}
          <span className="text-primary">AS Travel</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white"
          />
          <Button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Decorative Icon */}
      <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
        <Send className="w-6 h-6" />
      </div>
    </section>
  );
}
