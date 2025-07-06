"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, FilePlus, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({
  setShowModal,
}: {
  setShowModal: (value: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Apply", href: "/apply", icon: FilePlus },
    {
      label: "Contact",
      href: "#",
      icon: Mail,
      onClick: () => setShowModal(true),
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 shadow-sm bg-white/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden transition duration-300 rounded-full group-hover:scale-110 group-hover:shadow-lg">
              <Image
                src="/logo.png"
                alt="LT Marine Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline text-xl font-bold text-[#FF6600] group-hover:text-orange-600 transition">
              LT Marine
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden gap-4 md:flex">
            {navLinks.map((link) =>
              link.href !== "#" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-2 py-1 text-sm font-medium transition hover:scale-105 hover:text-[#FF6600]"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="px-2 py-1 text-sm font-medium transition hover:scale-105 hover:text-[#FF6600]"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Hamburger Icon */}
          {/* Hamburger Icon (only when menu is closed) */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-[#FF6600] p-2 rounded-full hover:bg-orange-100 transition z-[60]"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end px-4 pt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#FF6600] p-2 rounded-full hover:bg-orange-100 transition"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 pt-6 text-[#FF6600] text-base font-semibold">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li className="my-2 border-t border-orange-100" key={link.label}>
                {link.href !== "#" ? (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 transition hover:text-orange-500"
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      link.onClick?.();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 transition hover:text-orange-500"
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
