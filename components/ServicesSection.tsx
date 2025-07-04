"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  FileText,
  GraduationCap,
  Wrench,
  BookOpen,
  Wallet,
  HeartHandshake,
  BarChart3,
  Plane,
} from "lucide-react";

const services = [
  {
    title: "Targeted Crew Recruitment",
    description:
      "Rigorous screening and evaluation to ensure the right fit for every vessel.",
    icon: Users,
  },
  {
    title: "Full-Service Ship Management",
    description:
      "Oversight of crew, compliance, maintenance, safety, and technical operations.",
    icon: Wrench,
  },
  {
    title: "Career Development Programs",
    description: "Tiered growth tracks tailored for maritime professionals.",
    icon: GraduationCap,
  },
  {
    title: "Cadetship & Training Schemes",
    description:
      "Customized development pathways for aspiring officers and engineers.",
    icon: BookOpen,
  },
  {
    title: "Payroll & Financial Reporting",
    description:
      "Timely, transparent management of onboard compensation and finance.",
    icon: Wallet,
  },
  {
    title: "Protection & Indemnity Claims",
    description:
      "End-to-end P&I claims handling with precision and efficiency.",
    icon: ShieldCheck,
  },
  {
    title: "Seafarer Welfare & Benefits",
    description: "Competitive support packages for crew and their dependents.",
    icon: HeartHandshake,
  },
  {
    title: "Performance Monitoring",
    description:
      "Reliable systems for onboard assessments and progress tracking.",
    icon: BarChart3,
  },
  {
    title: "Visa & Travel Management",
    description:
      "Hassle-free handling of international travel documents and crew logistics.",
    icon: Plane,
  },
  {
    title: "Maritime Compliance & Audit Support",
    description:
      "Assistance with inspections, certifications, and adherence to international maritime standards.",
    icon: FileText,
  },
];

export default function ServicesPage() {
  return (
    <main className="px-6 py-20 bg-grey-50">
      <section className="max-w-6xl mx-auto mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#FF6600]"
        >
          Our Services
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          From recruitment to compliance — our maritime solutions are built on
          experience, ethics, and efficiency.
        </p>
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
