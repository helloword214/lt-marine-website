"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const offset = window.scrollY;
      bgRef.current.style.transform = `translateY(${offset * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
      }}
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/hero-image.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #f63d5e, #fc434e, #ff4d3c, #ff5927, #ff6600)",
            opacity: 0.85,
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-24 pb-16 text-center text-white sm:pt-32 sm:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl drop-shadow-lg"
        >
          Empowering Seafarers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-lg mt-4 mb-6 text-base sm:max-w-xl sm:text-lg md:text-2xl drop-shadow-md"
        >
          We bridge skilled Filipino crew with global fleets — ethically,
          safely, and with pride.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link
            href="/apply"
            className="animate-pulse bg-white text-[#FF6600] hover:bg-orange-100 font-semibold px-6 py-3 rounded-full transition text-sm sm:text-base"
          >
            Join Our Crew
          </Link>
        </motion.div>
      </div>

      {/* Scroll-down Indicator */}
      <div className="absolute z-10 transform -translate-x-1/2 bottom-6 left-1/2">
        <div className="w-4 h-4 rotate-45 border-b-2 border-r-2 border-white sm:w-5 sm:h-5 animate-bounce" />
      </div>
    </section>
  );
}
