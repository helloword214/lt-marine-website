"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FlipCard } from "./FlipCard"; // This is the function of the cards fliiping

const cards = [
  {
    title: "Excellence in Training",
    back: "We cultivate top-tier maritime professionals.",
    image: "/training.jpg",
    color: "#FF6600",
  },
  {
    title: "Global Network",
    back: "We connect with global fleets and agencies.",
    image: "/network.jpg",
    color: "#00B284",
  },
  {
    title: "Human-Centered Values",
    back: "Dignity, transparency, and long-term growth.",
    image: "/people.jpg",
    color: "#6A8CFF",
  },
];

export default function WhySailWithUsSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section className="relative px-6 text-gray-900 pb-28 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl px-6 pt-24 pb-20 mx-auto text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Why Sail With Us?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
          At LT Marine, we don’t just crew ships — we crew futures.
        </p>
      </div>

      {/* Card Grid */}
      <div className="relative z-10 grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
        {cards.map((card, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <FlipCard
              title={card.title}
              backText={card.back}
              image={card.image}
              color={card.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
