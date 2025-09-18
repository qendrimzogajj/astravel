import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-purple-50 via-white to-purple-50 py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand + Social */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary">AS Travel</h2>
          <p className="mt-3 text-sm text-foreground/70 max-w-xs mx-auto md:mx-0">
            Book your trip in minutes, get full control for much longer.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="#">Help / FAQ</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h3 className="font-semibold mb-3">More</h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="#">Airline Fees</a></li>
            <li><a href="#">Airline</a></li>
            <li><a href="#">Low Fare Tips</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} AS Travel. All rights reserved.
      </div>
    </footer>
  );
}
