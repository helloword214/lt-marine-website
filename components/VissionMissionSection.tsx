"use client";

import { motion } from "framer-motion";

export default function VissionMissionSection() {
  return (
    <main className="px-6 pb-14">
      {/* 🔶 Intro */}
      <section className="max-w-4xl pt-24 mx-auto text-center">
        <section className="max-w-4xl pt-24 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-4xl font-bold mb-4 text-[#FF6600]"
          >
           A New Direction in Maritime Crewing — Led by Seafarers, Built for Shipowners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-lg leading-relaxed text-gray-700"
          >
            LT Marine is evolving from a digital-first company into a full-service,
            face-to-face manning agency based in the Philippines.
            Our leadership team brings decades of real maritime experience,
            grounded in life at sea — guiding ethical recruitment, hands-on accountability, and people-first crewing for global shipping companies.
          </motion.p>
        </section>
      </section>

      {/* ✨ Mission & Vision Section */}
      <section className="grid max-w-5xl gap-10 mx-auto mt-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-l-4 border-[#FF6600] shadow p-6 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-[#FF6600] mb-2">
            Our Mission
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Our mission is to connect the world’s fleets with the heart and skill of
            Filipino seafarers by delivering ethical, people-first crewing solutions. <br />
            <br />
           At LT Marine, we deliver crew management solutions built on safety, compliance, and trust.
           We empower seafarers, support families, and foster lasting partnerships with shipowners and international shipping companies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white border-l-4 border-[#00B284] shadow p-6 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-[#00B284] mb-2">Our Vision</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Our vision is to shape a maritime future where Filipino seafarers
            are celebrated not just for their excellence, but for the values
            they bring to every voyage. <br />
            <br />
            LT Marine aims to redefine crewing in the maritime industry — with a commitment to human dignity,
            professional development, and sustainable, inclusive manning practices that serve both crew and shipowners.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
