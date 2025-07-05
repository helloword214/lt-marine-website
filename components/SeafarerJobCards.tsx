"use client";

import Link from "next/link";
import { jobs, iconMap, vesselColors } from "@/lib/mocks/jobs";

function JobCard({
  title,
  vessels,
  icon,
  href,
}: {
  title: string;
  vessels: string[];
  icon: string;
  href: string;
}) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm p-6 text-center transition bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
      <div className="mb-4">{iconMap[icon]}</div>
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
        href={href}
        className="inline-block text-[#FF6600] font-semibold text-sm hover:underline mt-auto"
      >
        See Details →
      </Link>
    </div>
  );
}

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
            <JobCard key={job.href} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
