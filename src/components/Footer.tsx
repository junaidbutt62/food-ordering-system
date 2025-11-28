import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="Contact" className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">FoodieHub</h2>
          <p className="text-sm">
            Fresh, tasty food delivered fast. Quality ingredients, top flavors,
            and a great experience every time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => {
                const el = document.getElementById("Menu");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Menu
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => {
                const el = document.getElementById("About");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              About Us
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => {
                const el = document.getElementById("Contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@foodiehub.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Location: Rawalpindi, Pakistan</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6 hover:text-white cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-white cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} FoodieHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
