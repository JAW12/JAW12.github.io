"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase } from "lucide-react";
import { ExperienceTimelineChronology } from "@/components/ExperienceTimelineChronology";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

export function ExperienceSection() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-24 py-24 relative overflow-hidden bg-transparent">
      {/* Wing 04: Spaceflight Trajectory & Chronology with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="trajectory" />
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#d4af37]/[0.025] blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Giant Ghost Watermark */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.04] select-none pointer-events-none tracking-widest blur-[1px]">
            EXPERIENCE
          </span>
          <div className="relative space-y-4 max-w-3xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono uppercase tracking-widest text-[#ebdca4]">
              <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{t.experience.sectionTag}</span>
            </div>
            
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-white leading-tight">
              <span className="text-[#d4af37] mr-1.5 font-normal">/</span>
              {t.experience.title}
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.experience.subtitle}
            </p>
          </div>

          {/* Right-aligned Chapter Badge */}
          <div className="shrink-0 pb-1 relative z-10 text-right hidden sm:block">
            <span className="font-mono text-sm sm:text-base text-zinc-400 tracking-widest block font-medium">
              04 / 06
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold text-[#ebdca4] uppercase tracking-wider">
              {language === "zh" ? "职业生涯总账" : language === "id" ? "REKAM JEJAK" : "CAREER LEDGER"}
            </span>
          </div>
        </div>

        {/* Unified Complete Experience Timeline Chronology */}
        <ExperienceTimelineChronology />

      </div>
    </section>
  );
}
