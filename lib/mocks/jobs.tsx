import {
  FaAnchor,
  FaHardHat,
  FaShip,
  FaTools,
  FaUserNurse,
  FaClipboardList,
} from "react-icons/fa";

export const vesselColors: Record<string, string> = {
  Tanker: "#f97316",
  "Bulk Carrier": "#3b82f6",
  "General Cargo": "#10b981",
  Passenger: "#6366f1",
  "LPG Pressurized": "#facc15",
  Bunkering: "#ec4899",
  "Ethylene Carrier": "#8b5cf6",
};

export const iconMap: Record<string, React.ReactNode> = {
  engineer: <FaTools size={48} className="text-orange-500" />,
  anchor: <FaAnchor size={48} className="text-blue-500" />,
  captain: <FaHardHat size={48} className="text-yellow-500" />,
  medic: <FaUserNurse size={48} className="text-green-500" />,
  checklist: <FaClipboardList size={48} className="text-purple-500" />,
  ship: <FaShip size={48} className="text-indigo-500" />,
};

export const jobs = [
  {
    title: "2nd Engineer",
    vessels: ["Tanker", "Bulk Carrier", "Ethylene Carrier"],
    icon: "engineer",
    href: "/jobs/2nd-engineer",
  },
  {
    title: "Able Seaman (AB)",
    vessels: ["General Cargo", "Passenger"],
    icon: "anchor",
    href: "/jobs/able-seaman",
  },
  {
    title: "Chief Officer",
    vessels: ["Tanker", "LPG Pressurized", "Bunkering"],
    icon: "captain",
    href: "/jobs/chief-officer",
  },
  {
    title: "Ship Medic",
    vessels: ["Passenger", "General Cargo"],
    icon: "medic",
    href: "/jobs/medic",
  },
  {
    title: "Deck Cadet",
    vessels: ["Bulk Carrier", "Tanker"],
    icon: "checklist",
    href: "/jobs/cadet",
  },
  {
    title: "Oiler",
    vessels: ["Tanker", "Bunkering"],
    icon: "ship",
    href: "/jobs/oiler",
  },
];
