"use client";

import { motion } from "framer-motion";
import services from "@/lib/mocks/services";

export default function ServicesPage() {
  return (
    <main className="px-4 py-16 sm:px-6 sm:py-20 bg-gray-50">
      {/* Section Title */}
      <section className="max-w-6xl px-2 mx-auto mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF6600]"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-2xl mx-auto mt-4 text-sm text-gray-600 sm:text-base"
        >
          From crew recruitment to maritime compliance — we deliver trusted,
           efficient, and ethical manning solutions tailored for global shipping companies.
        </motion.p>
      </section>

      {/* Service Cards */}
      <div className="grid max-w-6xl grid-cols-1 gap-6 px-2 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-5 transition-transform border border-gray-200 shadow-md sm:p-6 rounded-xl bg-white/70 backdrop-blur-md hover:shadow-lg hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#FF6600]/10 text-[#FF6600] rounded-full mb-4 mx-auto">
              <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-center text-gray-800 sm:text-xl">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-center text-gray-600 sm:text-base">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
