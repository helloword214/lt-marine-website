"use client";

import { useEffect } from "react";
import {
  FaUserCheck,
  FaTools,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: FaUserCheck,
    title: "Maritime Recruitment",
    description:
      "Rigorous crew selection ensuring skilled, safety-first Filipino seafarers for your fleet.",
    link: "/services",
    linkLabel: "Learn More",
  },
  {
    icon: FaTools,
    title: "Vessel Management",
    description:
      "Comprehensive technical and operational management to keep your vessels sailing smoothly.",
    link: "/services",
    linkLabel: "Talk To Us",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Maritime Training",
    description:
      "Tailored programs from certifications to advanced skill development for your crew.",
    link: "/services",
    linkLabel: "View Programs",
  },
  {
    icon: FaHandshake,
    title: "Welfare & Benefits",
    description:
      "Support packages and programs dedicated to seafarer welfare and family care.",
    link: "/services",
    linkLabel: "Discover Benefits",
  },
];

export default function MissionSection() {
  return (
    <motion.section
      className="px-6 py-20 bg-gray-50"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[#FF6600] font-semibold tracking-wide uppercase text-sm">
            <FaTools className="text-lg" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Unmatched Maritime Solutions
          </h2>
        </div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-700">
          We deliver a full suite of maritime solutions — tailored to elevate
          your fleet’s performance, safety, and people-first values.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((sol, idx) => (
          <motion.div
            key={sol.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="h-full transition duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-lg">
              <CardHeader className="flex flex-col items-center pt-6">
                <sol.icon className="text-4xl text-[#FF6600] mb-3" />
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {sol.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 leading-relaxed text-gray-700">
                  {sol.description}
                </p>
                <a
                  href={sol.link}
                  className="inline-block text-[#FF6600] font-medium hover:underline"
                >
                  {sol.linkLabel} →
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
