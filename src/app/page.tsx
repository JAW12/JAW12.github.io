"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";
import { PdfExportOptions } from "@/components/PdfExportModal";

const PdfExportModal = dynamic(
  () => import("@/components/PdfExportModal").then((mod) => mod.PdfExportModal),
  { ssr: false }
);

const RecruiterCheatSheetModal = dynamic(
  () => import("@/components/RecruiterCheatSheetModal").then((mod) => mod.RecruiterCheatSheetModal),
  { ssr: false }
);

const PrintableDocument = dynamic(
  () => import("@/components/PrintableDocument").then((mod) => mod.PrintableDocument),
  { ssr: false }
);

import { SectionTickerTape } from "@/components/SectionTickerTape";
import { PageTransitionProvider } from "@/components/PageTransitionCurtain";
import { FloatingScrollProgress } from "@/components/FloatingScrollProgress";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { CosmicAtmosphere } from "@/components/CosmicAtmosphere";

export default function Home() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [exportOptions, setExportOptions] = useState<PdfExportOptions>({
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
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
            onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
          />
          <main>
            {/* 1. Hero */}
            <HeroSection
              onOpenPdfModal={() => setIsPdfModalOpen(true)}
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
          <Footer onOpenPdfModal={() => setIsPdfModalOpen(true)} />

          {/* Floating Luxury Back to Top & Reading Progress Capsule */}
          <FloatingScrollProgress />

          {/* Notion-Style Granular PDF Exporter Modal */}
          {isPdfModalOpen && (
            <PdfExportModal
              isOpen={isPdfModalOpen}
              onClose={() => setIsPdfModalOpen(false)}
              exportOptions={exportOptions}
              setExportOptions={setExportOptions}
            />
          )}

          {/* Recruiter Cheat Sheet Modal */}
          {isCheatSheetOpen && (
            <RecruiterCheatSheetModal
              isOpen={isCheatSheetOpen}
              onClose={() => setIsCheatSheetOpen(false)}
              onOpenPdfModal={() => {
                setIsCheatSheetOpen(false);
                setIsPdfModalOpen(true);
              }}
            />
          )}
        </div>

        {/* Dedicated Print Only Document Container */}
        <PrintableDocument exportOptions={exportOptions} />

      </div>
      </PageTransitionProvider>
    </LanguageProvider>
  );
}
