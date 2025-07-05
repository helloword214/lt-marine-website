"use client";

import { motion } from "framer-motion";
import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/mocks/jobs";

export default function SeafarerJobCards() {
  return (
    <section className="px-6 py-20 text-gray-800 bg-grey-50">
      <div className="mx-auto text-center mx-w- max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          ⚓ Were Hiring Across Fleets
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-10 text-gray-600"
        >
          Choose from multiple roles deployed across tanker, cargo, and
          passenger vessels.
        </motion.p>

        {/* Job Cards Grid */}
        <div className="grid items-stretch grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <JobCard {...job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
