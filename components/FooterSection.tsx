"use client";

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-[#1A1C2D] text-white py-10 mt-20">
      <div className="flex flex-col items-center justify-between gap-4 px-6 mx-auto text-sm max-w-7xl md:flex-row">
        {/* Left: Branding & Credit */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">© 2025 LT Marine</p>
          <p className="text-gray-400">
            Crafted with care by{" "}
            <span className="text-[#FF6600] font-medium">
              John Michael Benito
            </span>
          </p>
        </div>

        {/* Right: Footer Links */}
        <div className="flex gap-5 text-gray-400">
          <Link
            href="/privacy-policy"
            className="hover:text-[#FF6600] transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#FF6600] transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#FF6600] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
