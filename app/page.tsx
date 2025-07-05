"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import MissionSection from "../components/WhatWeOfferSection";
import WhySailWithUsSection from "../components/WhySailWithUsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HiringCrew from "@/components/HiringCrewSection";
import SeafarerSection from "@/components/SeafarerJobCards";
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
      <WhySailWithUsSection />
      <HiringCrew />
      <SeafarerSection />
      <VisionMissionSection />
      <CTASection />
      <Footer />
    </>
  );
}
