"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import MissionSection from "../components/WhatWeOfferSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HiringCrew from "@/components/HiringCrewSection";
import HiringSection from "@/components/HiringSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VissionMissionSection";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <>
      <Hero />
      <ServicesSection />

      <MissionSection />
      <WhyChooseUs />
      <HiringCrew />
      <HiringSection />
      <VisionMissionSection />
      <CTASection />

      <Footer />
    </>
  );
}
