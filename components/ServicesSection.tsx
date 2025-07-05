"use client";

import { motion } from "framer-motion";
import services from "@/lib/mocks/services"; // ✅ uses the external mock

export default function ServicesPage() {
  return (
    <main className="px-6 py-20 bg-grey-50">
      <section className="max-w-6xl mx-auto mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#FF6600]"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-2xl mx-auto mt-4 text-gray-600"
        >
          From recruitment to compliance — our maritime solutions are built on
          experience, ethics, and efficiency.
        </motion.p>
      </section>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 transition-transform transform border border-gray-200 shadow-md rounded-xl bg-white/70 backdrop-blur-md hover:shadow-lg hover:-translate-y-2"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-[#FF6600]/10 text-[#FF6600] rounded-full mb-4 mx-auto">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
