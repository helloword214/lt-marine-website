"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HiringCrewSection() {
  return (
    <motion.section
      className="relative px-6 py-24 overflow-hidden text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #f63d5e, #fc434e, #ff4d3c, #ff5927, #ff6600)",
        clipPath: "polygon(0 10%, 100% 0, 100% 85%, 0 100%)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          Hiring for a Crew?
        </motion.h2>

        <p className="max-w-2xl mb-8 text-lg text-orange-100">
          Talk to our Crewing Support Team and get matched with top-tier
          Filipino seafarers.
        </p>

        <Image
          src="/seafarer.jpg"
          alt="Crewing Support"
          width={480}
          height={280}
          className="mb-8 rounded-lg shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="bg-white text-[#FF6600] hover:bg-orange-100 font-semibold px-8 py-3 rounded-full transition shadow-md"
          >
            Contact Crewing Support →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
