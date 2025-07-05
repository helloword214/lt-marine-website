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
  link: string;
  linkLabel: string;
};

export const solutions: Solution[] = [
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
