// components/FlipCard.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function FlipCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-64 transform-style transition-transform duration-700 ${
          flipped ? "rotateY-180" : ""
        }`}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 flex items-center justify-center p-6 text-xl font-semibold text-blue-800 shadow-lg backface-hidden">
          <CardContent className="text-center">{front}</CardContent>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 flex items-center justify-center p-6 text-center text-white bg-blue-900 shadow-lg rotateY-180 backface-hidden">
          <CardContent className="text-center">{back}</CardContent>
        </Card>
      </div>
    </div>
  );
}
