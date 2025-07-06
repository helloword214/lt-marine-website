"use client";

import Link from "next/link";
import { iconMap, vesselColors } from "@/lib/mocks/jobs";

type JobCardProps = {
  title: string;
  vessels: string[];
  icon: string;
};

export default function JobCard({ title, vessels, icon }: JobCardProps) {
  return (
    <div className="flex flex-col w-full h-full p-6 text-center transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
      <div className="items-center justify-center mx-auto mb-4 w-14 h-14 ">
        {iconMap[icon]}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {vessels.map((vessel) => (
          <span
            key={vessel}
            className="px-2 py-1 text-xs font-medium text-white rounded-full"
            style={{ backgroundColor: vesselColors[vessel] || "#6b7280" }}
          >
            {vessel}
          </span>
        ))}
      </div>
      <Link
        href="/apply"
        className="inline-block text-[#FF6600] font-semibold text-sm hover:underline mt-auto"
      >
        See Details →
      </Link>
    </div>
  );
}
