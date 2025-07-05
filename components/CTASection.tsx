"use client";

import { motion } from "framer-motion";

export default function CTASection({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  return (
    <section className="px-6 py-20 text-center bg-gray-50">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl"
        >
          Ready to Navigate With Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 text-lg text-gray-700"
        >
          {`Whether you're a shipping company looking for reliable crew or a seafarer ready to set sail, we're here to support you every step of the voyage.`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            onClick={onOpenContact}
            className="inline-block bg-[#FF6600] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:scale-105"
          >
            Get in Touch →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
