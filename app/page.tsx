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
import WeAreHiringAccrossFleetSection from "@/components/WeAreHiringAcrossFleetSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VissionMissionSection";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });

    const timeout = setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhatWeOfferSection />
      <WhySailWithUsSection />
      <HiringCrewSection />
      <WeAreHiringAccrossFleetSection />
      <VisionMissionSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
