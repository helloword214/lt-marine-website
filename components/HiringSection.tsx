"use client";

import Link from "next/link";
import {
  FaAnchor,
  FaHardHat,
  FaShip,
  FaTools,
  FaUserNurse,
  FaClipboardList,
} from "react-icons/fa";

const vesselColors: Record<string, string> = {
  Tanker: "#f97316",
  "Bulk Carrier": "#3b82f6",
  "General Cargo": "#10b981",
  Passenger: "#6366f1",
  "LPG Pressurized": "#facc15",
  Bunkering: "#ec4899",
  "Ethylene Carrier": "#8b5cf6",
};

const iconMap: Record<string, JSX.Element> = {
  engineer: <FaTools size={48} className="text-orange-500" />,
  anchor: <FaAnchor size={48} className="text-blue-500" />,
  captain: <FaHardHat size={48} className="text-yellow-500" />,
  medic: <FaUserNurse size={48} className="text-green-500" />,
  checklist: <FaClipboardList size={48} className="text-purple-500" />,
  ship: <FaShip size={48} className="text-indigo-500" />,
};

const jobs = [
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

export default function SeafarerJobCards() {
  return (
    <section className="px-6 py-20 text-gray-800 bg-grey-50">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          ⚓ We’re Hiring Across Fleets
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-gray-600">
          Choose from multiple roles deployed across tanker, cargo, and
          passenger vessels.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {jobs.map((job) => (
            <div
              key={job.href}
              className="flex flex-col items-center w-full max-w-sm p-6 text-center transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="mb-4">{iconMap[job.icon]}</div>

              <h3 className="mb-2 text-xl font-bold">{job.title}</h3>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {job.vessels.map((vessel) => (
                  <span
                    key={vessel}
                    className="px-2 py-1 text-xs font-medium text-white rounded-full"
                    style={{
                      backgroundColor: vesselColors[vessel] || "#6b7280",
                    }}
                  >
                    {vessel}
                  </span>
                ))}
              </div>

              <Link
                href={job.href}
                className="inline-block text-[#FF6600] font-semibold text-sm hover:underline mt-auto"
              >
                See Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
