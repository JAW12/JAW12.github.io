"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { experiencesData } from "@/data/experiences";
import {
  Building2,
  MapPin,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InteractiveTiltCard } from "@/components/InteractiveTiltCard";

export function ExperienceTimelineChronology() {
  const { language } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [clickedIds, setClickedIds] = useState<Record<string, boolean>>({});

  const toggleClick = (id: string) => {
    setClickedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const experienceBadges: Record<string, { en: string; id: string; zh: string }> = {
    kbt: {
      en: "COLD CHAIN & INDUSTRIAL PACKAGING",
      id: "RANTAI DINGIN & KEMASAN INDUSTRI",
      zh: "冷链物流与工业包装制造",
    },
    "sailly-advanced-group": {
      en: "VOLUNTEER CRYPTO MENTORSHIP",
      id: "MENTORSHIP TRADING VOLUNTEER",
      zh: "志愿加密量化交易导师",
    },
    enevti: {
      en: "WEB3 COMMUNITY & AGILE SCRUM",
      id: "KOMUNITAS WEB3 & AGILE SCRUM",
      zh: "WEB3 社区运营与敏捷开发",
    },
    qlp: {
      en: "VOLUNTEER BACKEND & 3NF DB",
      id: "VOLUNTEER BACKEND & DATABASE",
      zh: "志愿后端与数据库范式化",
    },
    "the-fresh": {
      en: "FARM-TO-DOOR E-COMMERCE & LOGISTICS",
      id: "E-COMMERCE PERTANIAN & LOGISTIK",
      zh: "生鲜电商直采与末端配送",
    },
    "screening-sdm": {
      en: "C# .NET AUTOMATION & PSYCHOMETRICS",
      id: "OTOMASI C# .NET & PSIKOMETRI",
      zh: "C# .NET 自动化与心理测评系统",
    },
  };

  // Helper to get prominent year for milestone pin (Latest first)
  const getYearBadge = (period: string) => {
    if (period.toLowerCase().includes("present") || period.toLowerCase().includes("sekarang") || period.includes("至今")) {
      return language === "id" ? "AKTIF" : language === "zh" ? "在职" : "PRESENT";
    }
    const parts = period.match(/\b(20\d\d)\b/g);
    if (parts && parts.length > 0) {
      return parts[parts.length - 1];
    }
    return "2026";
  };

  return (
    <div className="relative py-12 max-w-6xl mx-auto">
      {/* 1. CENTRAL ILLUMINATED SPINE AXIS (Left on phone/tablet, Centered on desktop lg+) */}
      <div className="absolute top-0 bottom-0 left-7 sm:left-9 lg:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#d4af37]/50 via-white/20 to-[#d4af37]/40 pointer-events-none" />

      <div className="space-y-10 sm:space-y-14">
        {experiencesData.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          const yearBadge = getYearBadge(exp.period);
          const isExpanded = hoveredId === exp.id || !!clickedIds[exp.id];
          const bullets = language === "zh" && exp.bulletsZh ? exp.bulletsZh : language === "id" ? exp.bulletsId : exp.bullets;
          const role = language === "zh" && exp.roleZh ? exp.roleZh : language === "id" ? exp.roleId : exp.role;
          const company = language === "zh" && exp.companyZh ? exp.companyZh : language === "id" ? exp.companyId : exp.company;
          const period = language === "zh" && exp.periodZh ? exp.periodZh : language === "id" ? exp.periodId : exp.period;
          const description = language === "zh" && exp.descriptionZh ? exp.descriptionZh : language === "id" ? exp.descriptionId : exp.description;
          const badgeText = experienceBadges[exp.id]?.[language] || experienceBadges[exp.id]?.en;

          return (
            <div
              key={exp.id}
              className={`relative flex flex-col lg:flex-row items-start ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 lg:gap-8 group`}
            >
              {/* CHRONOLOGICAL NODE PIN & YEAR PILL (Centered on spine, never clips off-screen) */}
              <div className="absolute left-7 sm:left-9 lg:left-1/2 -translate-x-1/2 top-7 z-20 flex flex-col items-center select-none pointer-events-none">
                <div
                  className={`w-5 h-5 rounded-full bg-[#09090b] border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? "border-[#d4af37] shadow-[0_0_20px_#d4af37,0_0_8px_#ffffff] scale-125"
                      : "border-[#d4af37]/60 shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:border-[#d4af37]"
                  }`}
                >
                  <div
                    className={`rounded-full bg-[#d4af37] transition-all duration-300 ${
                      isExpanded ? "w-2.5 h-2.5 bg-[#fffdf5]" : "w-2 h-2"
                    }`}
                  />
                </div>
                {/* Year Pill Tag with Depth Backdrop */}
                <span
                  className={`mt-1.5 px-2.5 py-0.5 rounded-full bg-[#111114]/90 backdrop-blur-md border font-mono text-[10px] sm:text-[11px] transition-all duration-300 shadow-lg ${
                    isExpanded
                      ? "border-[#d4af37] text-white font-bold ring-1 ring-[#d4af37]/50 shadow-[0_0_14px_rgba(212,175,55,0.3)]"
                      : "border-[#d4af37]/50 text-[#ebdca4] font-semibold"
                  }`}
                >
                  {yearBadge}
                </span>
              </div>

              {/* CARD CONTAINER (Full-width with comfortable margin on phone/tablet, alternating 50% on desktop) */}
              <div
                className={`w-full lg:w-[calc(50%-44px)] pl-14 sm:pl-16 lg:pl-0 ${
                  isEven ? "lg:text-right lg:pr-6" : "lg:text-left lg:pl-6"
                }`}
              >
                <ScrollReveal delay={idx * 0.1}>
                  <InteractiveTiltCard maxTilt={4} roundedClassName="rounded-2xl sm:rounded-3xl" className="w-full">
                    <div
                      onMouseEnter={() => setHoveredId(exp.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => toggleClick(exp.id)}
                      className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl backdrop-blur-2xl border transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)] cursor-pointer relative overflow-hidden group/card ${
                        isExpanded
                          ? "border-[#d4af37]/80 bg-[#0c0c10]/95 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] ring-1 ring-[#d4af37]/30"
                          : "border-white/10 hover:border-[#d4af37]/40 bg-[#0c0c10]/85 hover:bg-[#101014]/90"
                      }`}
                    >
                      {/* Ambient Specular Sheen Glow */}
                      <div
                        className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none transition-colors duration-500 ${
                          isExpanded ? "from-[#d4af37]/[0.08]" : "group-hover/card:from-[#d4af37]/[0.03]"
                        }`}
                      />

                      {/* 1. DECLUTTERED CORE HEADER */}
                      <div className="space-y-2 relative z-10">
                        
                        {/* Domain Badge & Period */}
                        <div
                          className={`flex flex-wrap items-center gap-2.5 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          {badgeText && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#ebdca4] font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
                              <Sparkles className="w-3 h-3 text-[#d4af37]" />
                              <span>{badgeText}</span>
                            </span>
                          )}
                          <span className="text-xs sm:text-sm font-mono text-zinc-400 font-medium">
                            {period}
                          </span>
                        </div>

                        {/* Role Title */}
                        <h4 className="font-serif-editorial text-2xl sm:text-3xl text-white font-medium group-hover/card:text-[#ebdca4] transition-colors pt-0.5">
                          {role}
                        </h4>

                        {/* Company & Location */}
                        <div
                          className={`flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-zinc-300 pt-0.5 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          <span className="flex items-center gap-1.5 text-zinc-100 font-medium">
                            <Building2 className="w-4 h-4 text-[#d4af37]" />
                            {company}
                          </span>
                          <span className="flex items-center gap-1 text-zinc-400">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* 2. CORE NARRATIVE & PRIMARY DELIVERABLES (Visible by default) */}
                      <div className="pt-4 mt-3 border-t border-white/[0.08] space-y-3.5 relative z-10 text-left">
                        {/* Narrative Description */}
                        <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                          {description}
                        </p>

                        {/* Verified Milestones Sub-heading */}
                        <div className="space-y-2 pt-1">
                          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block font-semibold">
                            {language === "id" ? "BUKTI PENCAPAIAN TERVERIFIKASI" : language === "zh" ? "已审计成就里程碑" : "VERIFIED MILESTONES"}
                          </span>

                          {/* Top 2 Primary Bullets */}
                          <div className="space-y-2">
                            {bullets.slice(0, 2).map((b, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 font-light leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 3. EXPANDABLE CONTAINER (Remaining Bullets & Core Competencies) */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden space-y-4 pt-1"
                            >
                              {/* Remaining Bullets */}
                              {bullets.length > 2 && (
                                <div className="space-y-2">
                                  {bullets.slice(2).map((b, bIdx) => (
                                    <motion.div
                                      key={bIdx + 2}
                                      initial={{ opacity: 0, y: 4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.2, delay: bIdx * 0.04 }}
                                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 font-light leading-relaxed"
                                    >
                                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                                      <span>{b}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              )}

                              {/* Tech Stack / Competencies */}
                              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block font-medium">
                                  {language === "id" ? "KOMPETENSI & TOOLS" : language === "zh" ? "核心能力与工具栈" : "CORE COMPETENCIES"}
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {exp.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2.5 py-1 rounded bg-white/[0.06] border border-white/10 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/15 hover:text-[#ebdca4] text-xs font-mono text-zinc-300 transition-colors cursor-default font-medium"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* 4. EXPAND / COLLAPSE ACTION BAR */}
                        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleClick(exp.id);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-[#ebdca4] transition-colors py-1 group/btn focus:outline-none"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-3.5 h-3.5 text-[#d4af37] transition-transform group-hover/btn:-translate-y-0.5" />
                                <span>
                                  {language === "id"
                                    ? "Tutup Detail Tambahan"
                                    : language === "zh"
                                    ? "收起额外详情"
                                    : "Collapse Additional Details"}
                                </span>
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-3.5 h-3.5 text-[#d4af37] transition-transform group-hover/btn:translate-y-0.5" />
                                <span>
                                  {language === "id"
                                    ? `Lihat ${bullets.length - 2} Hasil Lainnya & Kompetensi`
                                    : language === "zh"
                                    ? `展开其余 ${bullets.length - 2} 项成果与技术栈`
                                    : `View ${bullets.length - 2} More Deliverables & Tech Stack`}
                                </span>
                              </>
                            )}
                          </button>

                          <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline-block">
                            {bullets.length} {language === "id" ? "Pencapaian" : language === "zh" ? "项交付" : "Milestones"}
                          </span>
                        </div>
                      </div>

                    </div>
                  </InteractiveTiltCard>
                </ScrollReveal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
