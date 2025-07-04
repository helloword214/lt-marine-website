"use client"; // TEMPORARY while no backend is used
import "./globals.css"; // ✅ import Tailwind styles here
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "@/components/Navbar";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
