"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../components/HeroSection";
import WhatWeOfferSection from "../components/WhatWeOfferSection";
import WhySailWithUsSection from "../components/WhySailWithUsSection";
import CTASection from "../components/CTASection";
import FooterSection from "../components/FooterSection";
import HiringCrewSection from "@/components/HiringCrewSection";
import SeafarerSection from "@/components/SeafarerJobCards";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VissionMissionSection";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhatWeOfferSection />
      <WhySailWithUsSection />
      <HiringCrewSection />
      <SeafarerSection />
      <VisionMissionSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
