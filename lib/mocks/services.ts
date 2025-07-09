import {
  ShieldCheck,
  Users,
  FileText,
  GraduationCap,
  Wrench,
  BookOpen,
  Wallet,
  HeartHandshake,
  Plane,
} from "lucide-react";

const services = [
  {
    title: "Targeted Crew Recruitment",
    description:
      "End-to-end crew recruitment with strict vetting of certified Filipino seafarers.We match skillsets to vessel types with safety, compliance, and performance in mind.",
    icon: Users,
  },
  {
    title: "Full-Service Ship Management",
    description:
      "Technical and operational support for shipowners — including crew oversight, maintenance, and safety compliance for smooth global operations.",
    icon: Wrench,
  },
  {
    title: "Career Development Programs",
    description: "Structured maritime career paths for seafarers — offering growth, upskilling, and long-term planning for officer and rating advancement.",
    icon: GraduationCap,
  },
  {
    title: "Cadetship & Training Schemes",
    description:
      "Training pipelines for aspiring maritime officers and engineers. Built to align with STCW standards and modern fleet requirements.",
    icon: BookOpen,
  },
  {
    title: "Payroll & Financial Reporting",
    description:
      "Transparent, compliant payroll management for onboard personnel. Includes remittance, tax handling, and cost reporting for shipowners.",
    icon: Wallet,
  },
  {
    title: "Protection & Indemnity Claims",
    description:
      "P&I claims handling from incident reporting to settlement — ensuring fast, compliant resolution with international legal standards.",
    icon: ShieldCheck,
  },
  {
    title: "Seafarer Welfare & Benefits",
    description: "Support services for crew and dependents — covering health, insurance, repatriation, and wellness programs aligned with MLC 2006.",
    icon: HeartHandshake,
  },
  {
    title: "Visa & Travel Management",
    description:
      "Global visa, documentation, and travel coordination for smooth deployment. Focused on speed, accuracy, and hassle-free logistics.",
    icon: Plane,
  },
  {
    title: "Maritime Compliance & Audit Support",
    description:
      "Advisory and documentation for flag state inspections, certifications, and audits — ensuring vessels and crew remain fully compliant.",
    icon: FileText,
  },
];

export default services;
