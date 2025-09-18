import MainLogo from "@/public/LogoAS.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-8 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={MainLogo}
            alt="AS Travel Logo"
            width={180}
            height={180}
            className="w-40 h-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-10 text-gray-800 font-semibold text-lg">
          <Link
            href="/destinations"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Destinations
          </Link>
          <Link
            href="/holiday-types"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Holiday Types
          </Link>
          <Link
            href="/offers"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Offers
          </Link>
          <Link
            href="/about"
            className="hover:text-red-600 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Book Now Button */}
        <Button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300">
          Book Now
        </Button>
      </div>
    </nav>
  );
}
