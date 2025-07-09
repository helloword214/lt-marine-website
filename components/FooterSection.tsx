"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-[#1A1C2D] text-white py-10 mt-20">
      <div className="flex flex-col justify-between gap-4 px-6 mx-auto text-sm max-w-7xl md:flex-row">
        {/* Left: Branding & Address */}
        <div className="text-left flex-1">
          <p className="font-semibold text-white">© 2025 LT Marine</p>
          <p className="mt-2 text-gray-400">
            4/F Five E-Com Center Building, Palm Coast Ave. Corner Pacific Drive,<br />
            Mall of Asia Complex, Pasay City
          </p>
          <p className="text-gray-400 mt-1">
            License No.: <span className="font-semibold">POEA-119-SB-121420-R-MLC</span>
          </p>
          <p className="text-xs text-gray-500 mt-4">Crafted by John Michael Benito</p>
        </div>

        {/* Right side: Links + Social */}
        <div className="flex flex-col items-center md:items-end gap-2 text-gray-400">
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#FF6600]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#FF6600]">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#FF6600]">
              Contact
            </Link>
          </div>

          {/* Social Icons below the links */}
        <div className="flex gap-5 mt-4">
  <a
    href="https://www.facebook.com/ltmarineph"
    target="_blank"
    rel="noopener noreferrer"
    title="Facebook"
    className="text-white bg-[#1877F2] hover:scale-110 transition-transform p-2 rounded-full text-2xl"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/ltmarineph?igsh=aW5zczBsYnRpeXBl"
    target="_blank"
    rel="noopener noreferrer"
    title="Instagram"
    className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110 transition-transform p-2 rounded-full text-2xl"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
    className="text-white bg-[#0A66C2] hover:scale-110 transition-transform p-2 rounded-full text-2xl"
  >
    <FaLinkedinIn />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
