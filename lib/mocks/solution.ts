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
      "Rigorous crew selection ensuring skilled, safety-first Filipino seafarers for your fleet.",
    type: "link",
    link: "/apply",
    linkLabel: "Learn More",
  },
  {
    icon: FaTools,
    title: "Vessel Management",
    description:
      "Comprehensive technical and operational management to keep your vessels sailing smoothly.",
    type: "modal", // 👈 This one opens the contact modal
    linkLabel: "Talk To Us",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Maritime Training",
    description:
      "Tailored programs from certifications to advanced skill development for your crew.",
    type: "link",
    link: "/apply",
    linkLabel: "View Programs",
  },
  {
    icon: FaHandshake,
    title: "Welfare & Benefits",
    description:
      "Support packages and programs dedicated to seafarer welfare and family care.",
    type: "link",
    link: "/apply",
    linkLabel: "Discover Benefits",
  },
];
