"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplyPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ff6600] to-[#ff3c00] text-white py-28 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold md:text-5xl"
        >
          Start Your Maritime Career With Us
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg">
          Create your account and begin your online application in just a few
          steps.
        </p>
        <div className="mt-8">
          <a
            href="https://dashboard.lt-marine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#FF6600] font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-100 transition"
          >
            Go to Applicant Portal
          </a>
          <p className="mt-4 text-sm italic text-orange-100">
            Already have an account? Just log in — no need to register again.
          </p>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="max-w-5xl px-6 py-20 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Online Application Progress
          </h2>
          <p className="text-gray-600">
            {"Here's how you'll move through the hiring pipeline."}
          </p>
        </div>

        {/* Progress Line with Steps */}
        <div className="relative w-full max-w-5xl mx-auto mt-20">
          {/* Line */}
          <div className="absolute top-[10px] left-0 w-full h-1 bg-gray-300 z-0" />

          {/* Steps */}
          <div className="relative z-10 flex items-start justify-between px-2 md:px-4">
            {[
              "Create Account",
              "Complete Profile",
              "Apply",
              "Get Screened",
            ].map((label, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="w-5 h-5 rounded-full bg-[#FF6600] border-4 border-white shadow-md"
                />
                {/* Label */}
                <span className="text-sm text-gray-700 font-medium max-w-[80px] mt-3 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 text-center bg-gray-50">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Ready to Begin?
        </h2>
        <p className="mb-6 text-gray-600">
          Log in or register to start your seafarer journey with LT Marine.
        </p>
        <Link
          href="https://dashboard.lt-marine.com/"
          className="inline-block bg-[#FF6600] text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-500 transition"
          target="_blank"
        >
          Access Applicant Dashboard →
        </Link>
      </section>
    </main>
  );
}
