"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  {
    name: "Capt. Norrel Tapia",
    title: "Marine Operations Superintendent, DPA/CSO – MK Marine",
    bio: `Capt. Tapia sailed with Jo, Broström, and Maersk Tankers, and served as captain for Furetank Rederi AB. He is the first Filipino captain in FT’s Vinga Series Fleet — recognized globally for eco-friendly vessels. He leads audits, port state inspections, and maritime seminars.`,
    img: "/employee-1.jpg",
  },
  {
    name: "C.E. Genesis Pelagio",
    title: "Technical Superintendent, Chief Engineer – Oil-Chem Vessels",
    bio: `C.E. Pelagio has sailed across LPG, heavy lift, and cargo vessels. He’s a Maritime Academy Instructor and certified in Danish Para 16, Simulator Instruction, and onboard training. He also works as a Marine Surveyor and Internal Auditor.`,
    img: "/employee-2.jpg",
  },
  {
    name: "C.E. Elizsa Chomi",
    title: "Chief Engineer – Oil/Chem Vessels",
    bio: `Since 2009, C.E. Chomi has sailed with Laurin Maritime, Synergy Group, and Unitankers. She’s a panelist for AMOSUP, PCG, ITF, ILO, and IMO. As the first female MAAP Chief Engineer graduate, she advocates maritime inclusion.`,
    img: "/employee-3.jpg",
  },
  {
    name: "Capt. Rhey Calayo",
    title: "Marine Superintendent / Compliance Specialist",
    bio: `Capt. Calayo specializes in training and maritime safety. He has served on bulk and OBO tankers, and is a MARINA panel expert. He’s currently pursuing a Master’s in Ship Management at PMMA.`,
    img: "/employee-4.jpg",
  },
  {
    name: "Diane Tapia",
    title: "Maritime Executive / Crew Operations Strategist",
    bio: `Diane leads crew planning and operational systems, now serving as COO at Vesa Ship Management. She’s known for streamlining compliance and leading high-performance teams.`,
    img: "/employee-5.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="px-6 pb-24">
      {/* 🔶 Intro */}
      <section className="max-w-4xl pt-24 mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-[#FF6600]"
        >
          A New Direction Under New Leadership
        </motion.h1>
        <p className="text-lg leading-relaxed text-gray-700">
          LT Marine is transitioning from a digital-only platform to a
          full-service, face-to-face crewing agency. We believe in human
          connection, hands-on accountability, and decisions guided by real
          maritime experience. Our leadership has lived life at sea — and now
          they lead with purpose, empathy, and integrity.
        </p>
      </section>

      {/* ✨ Mission & Vision Section */}
      <section className="grid max-w-5xl gap-10 mx-auto mt-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-l-4 border-[#FF6600] shadow p-6 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-[#FF6600] mb-2">
            Our Mission
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Our mission is to connect the world’s fleets with the heart and
            skill of Filipino seafarers by delivering ethical, people-first
            crewing solutions. <br />
            <br />
            We are committed to the highest standards of integrity, safety, and
            service — empowering seafarers, supporting their families, and
            building long-term partnerships based on trust, respect, and shared
            success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white border-l-4 border-[#00B284] shadow p-6 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-[#00B284] mb-2">Our Vision</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Our vision is to shape a maritime future where Filipino seafarers
            are celebrated not just for their excellence, but for the values
            they bring to every voyage. <br />
            <br />
            We envision a world where crewing goes beyond service — becoming a
            commitment to human dignity, professional growth, and a more
            inclusive and sustainable global maritime industry.
          </p>
        </motion.div>
      </section>

      {/* 👥 Meet Our Team */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 text-center bg-white rounded-lg shadow-md"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#FF6600]">
                {person.name}
              </h3>
              <p className="mb-2 text-sm italic text-gray-500">
                {person.title}
              </p>
              <p className="text-sm text-gray-700">{person.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
