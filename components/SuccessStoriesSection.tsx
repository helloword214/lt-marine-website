"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Chief Officer Marlo A. Verzosa",
    role: "Chief Officer",
    quote: `I've been working under LT MARINE since 2010 up to present. They've been very supportive in every aspect of my career. From AB to Chief Officer now — behind this success is a company like LT Marine who trusts and supports you.`,
    img: "/people-1.jpg",
  },
  {
    name: "Captain Erickson Barangan",
    role: "Captain",
    quote: `In my 10 years with LT Marine, I feel the importance as a seafarer. I am treated like family. Their crew processing system is smooth, fast, and very convenient.`,
    img: "/people-2.jpg",
  },
  {
    name: "Fitter Fuego",
    role: "Fitter",
    quote: `LT Marine gave me stability, better compensation, and full support for my family. As a second-generation seafarer, I found my long-term career path through this agency.`,
    img: "/people-3.jpg",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="px-6 py-20 text-gray-800 bg-gray-50">
      <div className="mx-auto mb-12 text-center max-w-7xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          What Our Seafarers Say
        </h2>
        <p className="mt-2 text-gray-600">
          Stories of trust, growth, and real success at sea.
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-6 text-left bg-white border border-gray-200 rounded-md"
          >
            <p className="mb-4 italic text-gray-700">"{t.quote}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
