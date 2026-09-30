"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import dynamic from "next/dynamic";
import { PdfExportOptions } from "@/components/PdfExportModal";
import { PageTransitionProvider } from "@/components/PageTransitionCurtain";

// ─── Eager: above-the-fold critical UI ───────────────────────────────────────
import { CosmicAtmosphere } from "@/components/CosmicAtmosphere";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { SectionTickerTape } from "@/components/SectionTickerTape";

// ─── Lazy: below-the-fold heavy sections — code-split, loaded on demand ──────
// Each becomes its own JS chunk, browser only parses when section enters viewport area

const FeaturedProjectsSection = dynamic(
  () => import("@/components/FeaturedProjectsSection").then((m) => m.FeaturedProjectsSection),
  { ssr: false }
);

const ExperienceSection = dynamic(
  () => import("@/components/ExperienceSection").then((m) => m.ExperienceSection),
  { ssr: false }
);

const SkillsSection = dynamic(
  () => import("@/components/SkillsSection").then((m) => m.SkillsSection),
  { ssr: false }
);

const CredentialsSection = dynamic(
  () => import("@/components/CredentialsSection").then((m) => m.CredentialsSection),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import("@/components/ContactSection").then((m) => m.ContactSection),
  { ssr: false }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((m) => m.Footer),
  { ssr: false }
);

const FloatingScrollProgress = dynamic(
  () => import("@/components/FloatingScrollProgress").then((m) => m.FloatingScrollProgress),
  { ssr: false }
);

const RecruiterCheatSheetModal = dynamic(
  () => import("@/components/RecruiterCheatSheetModal").then((m) => m.RecruiterCheatSheetModal),
  { ssr: false }
);

const PrintableDocument = dynamic(
  () => import("@/components/PrintableDocument").then((m) => m.PrintableDocument),
  { ssr: false }
);

export default function Home() {
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [exportOptions] = useState<PdfExportOptions>({
    track: "all",
    includeHero: true,
    includeAbout: true,
    includeHighlights: true,
    includeExperience: true,
    includeFeatured: true,
    includeSkills: true,
    includeCredentials: true,
    includeContact: true,
  });

  const handleDirectPrint = () => {
    window.print();
  };

  // Global 'C' hotkey for Recruiter Cheat Sheet
  React.useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (
        (e.key === "c" || e.key === "C") &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName) &&
        !e.metaKey &&
        !e.ctrlKey
      ) {
        setIsCheatSheetOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <LanguageProvider>
      <PageTransitionProvider>
        <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#d4af37]/30 selection:text-[#ebdca4] relative">
          
          {/* Authentic Space Museum Cosmic Atmosphere (Observatory Grid, Star Dust, Nebula Haze, Tactile Grain & Lens Vignette) */}
          <CosmicAtmosphere />

          {/* Interactive Mouse Spotlight Torch */}
          <MouseSpotlight />

          {/* Screen Only Interactive Website */}
        <div className="print-hidden">
          <Navbar
            onOpenPdfModal={handleDirectPrint}
            onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
          />
          <main>
            {/* 1. Hero */}
            <HeroSection
              onOpenPdfModal={handleDirectPrint}
              onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
            />

            {/* 2. About */}
            <AboutSection />

            {/* 3. Featured Projects (Curated Flagships & Works Index) */}
            <FeaturedProjectsSection />

            {/* 4. Experiences (Career Chronology & Deep Records) */}
            <ExperienceSection />

            {/* Section Ticker Tape Kinetic Ribbon Transition */}
            <SectionTickerTape />

            {/* 5. Skills & Auditable Matrix */}
            <SkillsSection />

            {/* 8. Education, Certificates & Languages */}
            <CredentialsSection />

            {/* 9. Contacts */}
            <ContactSection />
          </main>
          <Footer onOpenPdfModal={handleDirectPrint} />

          {/* Floating Luxury Back to Top & Reading Progress Capsule */}
          <FloatingScrollProgress />

          {/* Recruiter Cheat Sheet Modal */}
          {isCheatSheetOpen && (
            <RecruiterCheatSheetModal
              isOpen={isCheatSheetOpen}
              onClose={() => setIsCheatSheetOpen(false)}
              onOpenPdfModal={() => {
                setIsCheatSheetOpen(false);
                setTimeout(() => {
                  handleDirectPrint();
                }, 150);
              }}
            />
          )}
        </div>

        {/* Dedicated Print Only Document Container — hidden on screen, visible only when printing */}
        <div className="hidden print:block">
          <PrintableDocument exportOptions={exportOptions} />
        </div>


      </div>
      </PageTransitionProvider>
    </LanguageProvider>
  );
}
