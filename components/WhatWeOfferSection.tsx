"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { solutions, Solution } from "@/lib/mocks/solution";
import { FaTools } from "react-icons/fa";
import ContactModal from "@/components/ContactModal";

export default function WhatWeOfferSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <motion.section
      className="relative px-4 pt-32 pb-32 text-white sm:px-6 sm:pt-40 sm:pb-32 min-h-[100vh]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #f63d5e, #fc434e, #ff4d3c, #ff5927, #ff6600)",
        clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
      }}
    >
      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-orange-200 uppercase sm:text-sm"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaTools className="text-base sm:text-lg" />
          <span>What We Offer</span>
        </motion.div>

        <motion.h2
          className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Unmatched Maritime Solutions
        </motion.h2>

        <motion.p
          className="max-w-2xl px-2 mx-auto mt-4 text-sm text-orange-100 sm:text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We deliver a full suite of maritime solutions — tailored to elevate
          your fleet’s performance, safety, and people-first values.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-6 px-2 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:mt-12">
        {solutions.map((sol: Solution, idx: number) => {
          const Icon = sol.icon;
          return (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full p-4 sm:p-6 bg-white/10 backdrop-blur-md border shadow-sm rounded-2xl border-white/10 text-white transition duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-lg">
                <CardHeader className="flex flex-col items-center pt-4">
                  <Icon className="mb-3 text-3xl text-white sm:text-4xl" />
                  <CardTitle className="text-lg font-semibold text-center text-white sm:text-xl">
                    {sol.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-4 text-sm leading-relaxed text-orange-100 sm:text-base">
                    {sol.description}
                  </p>
                  {sol.type === "modal" ? (
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-block text-sm font-medium text-white hover:underline"
                    >
                      {sol.linkLabel} →
                    </button>
                  ) : (
                    <a
                      href={sol.link}
                      className="inline-block text-sm font-medium text-white hover:underline"
                    >
                      {sol.linkLabel} →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
