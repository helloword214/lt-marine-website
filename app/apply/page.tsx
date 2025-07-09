"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState for modal control

export default function ApplyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF7043] to-[#FF5722] text-white py-28 text-center px-6 relative rounded-xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold leading-tight md:text-5xl"
        >
          Start Your Maritime Career With Us
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg opacity-80">
          Create your account and begin your online application in just a few
          steps.
        </p>
        <div className="mt-8">
          {/* Button for Opening Modal */}
          <button
            onClick={openModal}
            className="inline-block bg-white text-[#FF5722] font-semibold px-8 py-4 rounded-full shadow-md hover:bg-orange-100 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go to Applicant Portal
          </button>
          <p className="mt-4 text-sm italic text-orange-100">
            Already have an account? Just log in — no need to register again.
          </p>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="max-w-5xl px-6 py-20 mx-auto mt-16 text-center">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Online Application Progress
          </h2>
          <p className="text-gray-600">
            Here’s how you’ll move through the hiring pipeline.
          </p>
        </div>

        {/* Progress Line with Steps */}
        <div className="relative w-full max-w-5xl mx-auto mt-20">
          <div className="absolute top-[10px] left-0 w-full h-1 bg-gray-300 z-0" />

          <div className="relative z-10 flex items-start justify-between px-4">
            {[
              "Create Account",
              "Complete Profile",
              "Apply",
              "Get Screened",
            ].map((label, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="w-6 h-6 rounded-full bg-[#FF7043] border-4 border-white shadow-md"
                />
                <span className="mt-3 text-sm font-medium text-gray-700">
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
          className="inline-block bg-[#FF5722] text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-500 transition"
          target="_blank"
        >
          Access Applicant Dashboard →
        </Link>
      </section>

      {/* Custom Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Site Under Construction
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are working on something amazing. Please check back later!
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-3 mt-6 text-white transition bg-red-500 rounded-full hover:bg-red-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
