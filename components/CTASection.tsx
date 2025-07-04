"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
      className="px-6 py-20 text-center bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          Ready to Navigate With Us?
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          Whether you're a shipping company looking for reliable crew or a
          seafarer ready to set sail, we're here to support you every step of
          the voyage.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#FF6600] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:scale-105"
        >
          Get in Touch →
        </Link>
      </div>
    </motion.section>
  );
}
