"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { solutions, Solution } from "@/lib/mocks/solution";
import { FaTools } from "react-icons/fa";

export default function WhatWeOfferSection() {
  return (
    <motion.section
      className="relative px-6 pb-[11rem] text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #f63d5e, #fc434e, #ff4d3c, #ff5927, #ff6600)",
        clipPath: "polygon(0 10%, 100% 0, 100% 85%, 0 100%)",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl pt-32 pb-20 mx-auto text-center"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-orange-200 uppercase">
            <FaTools className="text-lg" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Unmatched Maritime Solutions
          </h2>
        </div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-orange-100">
          We deliver a full suite of maritime solutions — tailored to elevate
          your fleet’s performance, safety, and people-first values.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
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
              <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-lg">
                <CardHeader className="flex flex-col items-center pt-6">
                  <Icon className="mb-3 text-4xl text-white" />
                  <CardTitle className="text-xl font-semibold text-white">
                    {sol.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 leading-relaxed text-orange-100">
                    {sol.description}
                  </p>
                  <a
                    href={sol.link}
                    className="inline-block font-medium text-white hover:underline"
                  >
                    {sol.linkLabel} →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
