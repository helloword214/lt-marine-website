// lib/mocks/solutions.ts
import {
  FaUserCheck,
  FaTools,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";

export type Solution = {
  icon: React.ElementType;
  title: string;
  description: string;
  type: "link" | "modal"; // 👈 Add type
  link?: string; // 👈 Optional now, only required for type === "link"
  linkLabel: string;
};

export const solutions: Solution[] = [
  {
    icon: FaUserCheck,
    title: "Maritime Recruitment",
    description:
      "Certified Filipino crew recruitment tailored for global shipping companies. Our selection process ensures skill, compliance, and vessel compatibility.",
    type: "link",
    link: "/apply",
    linkLabel: "Learn More",
  },
  {
    icon: FaTools,
    title: "Vessel Management",
    description:
      "Full-service ship management covering crew, technical operations, safety systems, and regulatory compliance — keeping your fleet efficient and seaworthy.",
    type: "modal", // 👈 This one opens the contact modal
    linkLabel: "Talk To Us",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Maritime Training",
    description:
      "STCW-compliant training programs, certifications, and upskilling for Filipino officers and ratings — built for international maritime standards.",
    type: "link",
    link: "/apply",
    linkLabel: "View Programs",
  },
  {
    icon: FaHandshake,
    title: "Welfare & Benefits",
    description:
      "Seafarer-centered benefits, repatriation assistance, health support, and family welfare services in line with MLC 2006 requirements.",
    type: "link",
    link: "/apply",
    linkLabel: "Discover Benefits",
  },
];
