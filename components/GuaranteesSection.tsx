"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaHeadset,
  FaUserTie,
  FaMoneyBillWave,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

const guarantees = [
  {
    icon: FaGlobe,
    title: "Online Crewing Portal",
    text: "Effortlessly manage your document profiles and updates on your schedule.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    text: "Our team is always on standby — ready to assist you any time of day.",
  },
  {
    icon: FaUserTie,
    title: "Professional Crew",
    text: "We recruit skilled, well-trained personnel to meet your highest standards.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Transparent Fees",
    text: "Competitive and clear pricing tailored to your operation’s needs.",
  },
  {
    icon: FaLightbulb,
    title: "Innovative Solutions",
    text: "We pioneer smart approaches to enhance maritime crew services.",
  },
  {
    icon: FaCheckCircle,
    title: "Certified Partners",
    text: "We collaborate only with certified and compliant service providers.",
  },
];

export default function GuaranteesSection() {
  return (
    <motion.section
      className="px-6 py-20 bg-gray-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What We Guarantee</h2>
        <p className="mt-4 text-gray-600">
          Count on us for integrity, innovation, and excellence in every service
          we provide.
        </p>
      </div>

      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {guarantees.map((g, idx) => (
          <motion.div
            key={g.title}
            className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <g.icon className="text-4xl text-[#FF6600] mb-4" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {g.title}
            </h3>
            <p className="text-gray-600">{g.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
