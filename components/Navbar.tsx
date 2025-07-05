"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({
  setShowModal,
}: {
  setShowModal: (value: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Apply", href: "/apply" },
    { label: "Contact", href: "#", onClick: () => setShowModal(true) },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 shadow-sm bg-white/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden transition-all duration-300 rounded-full group-hover:scale-110 group-hover:shadow-lg">
            <Image
              src="/logo.png"
              alt="LT Marine Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-[#FF6600] hidden sm:inline group-hover:text-orange-600 transition">
            LT Marine
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-4 md:flex">
          {navLinks.map((link) =>
            link.href !== "#" ? (
              <Link
                key={link.label}
                href={link.href}
                className="transition-all duration-200 hover:scale-105 hover:text-[#FF6600] font-medium text-sm px-2 py-1"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.onClick}
                className="transition-all duration-200 hover:scale-105 hover:text-[#FF6600] font-medium text-sm px-2 py-1"
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#FF6600] hover:bg-[#FF6600]/10 hover:rounded-full hover:p-2 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.href !== "#" ? (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium text-[#FF6600] hover:text-orange-500 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      link.onClick?.();
                      setIsOpen(false);
                    }}
                    className="block text-sm font-medium text-[#FF6600] hover:text-orange-500 transition"
                  >
                    {link.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
