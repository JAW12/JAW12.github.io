"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { VitrineCard } from "@/components/VitrineCard";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

export function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-24 relative overflow-hidden bg-transparent">
      {/* Wing 02: Astrolabe Observatory Core Backdrop with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="astrolabe" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header Bar: /ABOUT & 02/08 Counter */}
        <ScrollReveal variant="telemetry">
          <div className="relative flex items-start justify-between border-b border-white/10 pb-8 mb-12 sm:mb-16">
            <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.045] select-none pointer-events-none tracking-widest blur-[1px]">
              ABOUT
            </span>
            <div className="flex items-baseline gap-2 sm:gap-3 relative z-10">
              <span className="font-serif-editorial text-5xl sm:text-8xl lg:text-9xl font-light text-[#d4af37] leading-none select-none">
                /
              </span>
              <h2 className="font-serif-editorial text-5xl sm:text-7xl lg:text-9xl font-normal text-white uppercase tracking-tight leading-none">
                ABOUT
              </h2>
            </div>
            <div className="text-right shrink-0">
              <span className="font-mono text-sm sm:text-base text-zinc-400 tracking-widest block font-medium">
                02 / 06
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#ebdca4] uppercase tracking-wider font-semibold">
                {t.common.chapterIndex}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Space Museum Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Exhibition Monolith / Core Philosophy (5 cols) */}
          <ScrollReveal delay={0.08} variant="stagger-left" className="lg:col-span-5">
            <div className="space-y-8 lg:sticky lg:top-28">
              {/* Clean Section Marker */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span className="tracking-widest uppercase font-medium">
                  {language === "zh" ? "核心哲学" : language === "id" ? "FILOSOFI SISTEM" : "CORE PHILOSOPHY"}
                </span>
              </div>

              {/* Core Philosophy Quote */}
              <blockquote className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-zinc-100 font-light leading-snug border-l-2 border-[#d4af37]/80 hover:border-[#d4af37] transition-colors pl-6 py-1">
                &ldquo;{t.about.quote}&rdquo;
              </blockquote>

              {/* Quiet Museum Metadata Plaque in Vitrine Card */}
              <VitrineCard glowColor="gold" className="p-6 space-y-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 uppercase tracking-widest">
                    {language === "zh" ? "坐标基点" : language === "id" ? "Lokasi" : "Base"}
                  </span>
                  <span className="text-zinc-300 font-medium">Surabaya, Indonesia (UTC+7)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 uppercase tracking-widest">
                    {language === "zh" ? "核心方向" : language === "id" ? "Fokus Utama" : "Focus"}
                  </span>
                  <span className="text-zinc-300 font-medium">
                    {language === "zh"
                      ? "业务系统与 AI 工作流"
                      : language === "id"
                      ? "Sistem Bisnis & Alur Kerja AI"
                      : "Business Systems & AI Workflows"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 uppercase tracking-widest">
                    {language === "zh" ? "工作状态" : language === "id" ? "Ketersediaan" : "Status"}
                  </span>
                  <span className="text-[#ebdca4] font-medium">
                    {language === "zh" ? "开放承接 Remote / Hybrid" : language === "id" ? "Tersedia: Remote / Hybrid" : "Open: Remote & Hybrid"}
                  </span>
                </div>
              </VitrineCard>
            </div>
          </ScrollReveal>

          {/* Right Column: Smoked Obsidian Glass Vitrine (7 cols) */}
          <ScrollReveal delay={0.16} variant="vitrine-dock" className="lg:col-span-7">
            <VitrineCard glowColor="gold" className="p-7 sm:p-10 space-y-6">
              {/* Vitrine Header Hairline */}
              <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-white/10 text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                  <span className="uppercase tracking-widest text-[#ebdca4] font-semibold">
                    {language === "zh" ? "背景与历程" : language === "id" ? "LATAR BELAKANG" : "BACKGROUND"}
                  </span>
                </div>
                <span className="text-zinc-500 tracking-wider">2010 — PRESENT</span>
              </div>

              {/* The 3 Grounded, Smart-Casual Narrative Paragraphs */}
              <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
                <p className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-zinc-200">
                  {t.about.p1}
                </p>
                <p>
                  {t.about.p2}
                </p>
                <p>
                  {t.about.p3}
                </p>
              </div>

              {/* Clean Bottom Status Line */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2.5 text-zinc-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="uppercase tracking-wider">
                    {t.common.statusAvailable}
                  </span>
                </div>
                <span className="text-[#ebdca4] font-medium whitespace-nowrap">
                  {t.common.statusLocation}
                </span>
              </div>
            </VitrineCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
