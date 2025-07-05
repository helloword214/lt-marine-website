// components/FlipCard.tsx
"use client";

import { useState } from "react";

interface FlipCardProps {
  title: string;
  backText: string;
  image: string;
  color: string;
}

export function FlipCard({ title, backText, image, color }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-96 transform-style preserve-3d transition-transform duration-[1200ms] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white rounded-lg shadow-lg backface-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${color}cc, ${color}88), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-sm font-light">{backText}</p>
        </div>

        {/* Back Side */}
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
