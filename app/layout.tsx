"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar setShowModal={setOpenContact} />
        {/* ✅ Just render children normally */}
        {children}
        <ContactModal open={openContact} onOpenChange={setOpenContact} />
      </body>
    </html>
  );
}
