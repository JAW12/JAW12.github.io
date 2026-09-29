"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowUpRight, GraduationCap, Bot, ShieldCheck, LineChart } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InteractiveTiltCard } from "@/components/InteractiveTiltCard";

export function HighlightsSection() {
  const { language, t } = useLanguage();

  const getHighlightIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-[#d4af37]" />;
      case 1:
        return <Bot className="w-5 h-5 text-[#d4af37]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <LineChart className="w-5 h-5 text-[#dc2626]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="highlights" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono uppercase tracking-widest text-[#ebdca4]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{t.highlights.sectionTag}</span>
            </div>
            
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-white leading-tight">
              {t.highlights.title}
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.highlights.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Highlight Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.highlights.items.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <InteractiveTiltCard maxTilt={9} roundedClassName="rounded-2xl" className="h-full">
                <div
                  className="p-8 rounded-2xl bg-[#111114] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group h-full"
                >
                  {/* Ambient Micro Glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-2xl group-hover:bg-[#d4af37]/15 transition-all duration-500 pointer-events-none" />

                  {/* Top Row: Tag & Icon */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-300 font-medium">
                      {item.tag}
                    </span>
                    <span className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-transform">
                      {getHighlightIcon(idx)}
                    </span>
                  </div>

                  {/* Metric & Title */}
                  <div className="space-y-3 relative z-10">
                    <div className="space-y-1">
                      <span className="font-serif-editorial text-4xl sm:text-5xl text-white font-light group-hover:text-gold-gradient transition-colors">
                        {item.metric}
                      </span>
                      <div className="text-xs font-mono text-[#d4af37]">
                        {item.metricLabel}
                      </div>
                    </div>

                    <h3 className="font-serif-editorial text-xl sm:text-2xl text-white font-medium leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Hairline Footer Indicator */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10">
                    <span>
                      {language === "zh"
                        ? item.tag === "AKADEMIK" || item.tag === "ACADEMIC" || item.tag === "学术卓越"
                          ? "100% 实证学术卓越"
                          : "已审计核心交付物"
                        : language === "id"
                        ? item.tag === "AKADEMIK" || item.tag === "ACADEMIC"
                          ? "100% Distingsi Terverifikasi"
                          : "Deliverable Terverifikasi"
                        : item.tag === "AKADEMIK" || item.tag === "ACADEMIC"
                        ? "100% Verified Distinction"
                        : "Auditable Deliverable"}
                    </span>
                    <span className="text-zinc-500 font-bold">#0{idx + 1}</span>
                  </div>
                </div>
              </InteractiveTiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
