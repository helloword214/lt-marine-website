"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

export default function WhyChooseUs() {
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
              back={card.back}
              image={card.image}
              color={card.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function getRefinedText(title: string): string {
  switch (title) {
    case "Excellence in Training":
      return "We invest in skills that elevate safety and leadership at sea.";
    case "Global Network":
      return "Connecting fleets and crews with world-class partnerships.";
    case "Human-Centered Values":
      return "We prioritize dignity, growth, and long-term crew well-being.";
    default:
      return "We stand for maritime excellence and ethical crewing.";
  }
}

function FlipCard({
  title,
  back,
  image,
  color,
}: {
  title: string;
  back: string;
  image: string;
  color: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="transition-transform duration-300 cursor-pointer perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-96 transform-style preserve-3d transition-transform duration-700 ease-in-out ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white rounded-lg shadow-lg backface-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${color}cc, ${color}88), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-sm font-light">{back}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center p-6 text-center text-white transform rounded-lg shadow-xl rotate-y-180 backface-hidden"
          style={{ backgroundColor: color }}
        >
          <p className="font-medium leading-relaxed text-md">
            {getRefinedText(title)}
          </p>
        </div>
      </div>
    </div>
  );
}
