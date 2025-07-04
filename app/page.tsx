"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Guarantee from "@/components/GuaranteesSection";
import HiringCrew from "@/components/HiringCrewSection";
import HiringSection from "@/components/HiringSection";
import SuccessStories from "@/components/SuccessStoriesSection";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <>
      <Hero />
      <MissionSection />
      <WhyChooseUs />
      <Guarantee />
      <HiringCrew />
      <HiringSection />
      <SuccessStories />
      <CTASection />
      <Footer />
    </>
  );
}
