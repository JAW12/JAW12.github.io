"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Code2,
  Cpu,
  Compass,
  Activity,
  Wrench,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

export function ServicesSection() {
  const { language, t } = useLanguage();

  const getServiceIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-[#d4af37]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Compass className="w-5 h-5 text-[#dc2626]" />;
      case 3:
        return <Activity className="w-5 h-5 text-blue-400" />;
      default:
        return <Wrench className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  const serviceVisuals = [
    {
      primary: "/assets/projects/secret-of-life/white_desk.png",
      secondary: "/assets/projects/secret-of-life/black_innovative_1.png",
      alt: "Full-Stack Architecture & Design Systems",
      badge: "PRODUCTION-READY SYSTEMS",
      badgeId: "SISTEM PRODUCTION-READY",
      badgeZh: "生产就绪级系统架构",
    },
    {
      primary: "/assets/projects/ai-automation/rag.png",
      secondary: "/assets/projects/ai-automation/whatsapp-chatbot.png",
      alt: "AI Workflows & LLM Orchestration",
      badge: "AI PIPELINES & SYNTHESIS",
      badgeId: "PIPELINE AI & SINTESIS",
      badgeZh: "本地AI管线与知识库编排",
    },
    {
      primary: "/assets/projects/branding/kbt-packaging.jpg",
      secondary: "/assets/projects/nangka-premium/pack_banyak_1.png",
      alt: "Industrial Dielines & Physical Packaging Specs",
      badge: "DIELINE & FOOD-GRADE NYLON",
      badgeId: "DIELINE & NILON FOOD-GRADE",
      badgeZh: "食品级尼龙包装与刀模工程",
    },
    {
      primary: "/assets/projects/ai-automation/invoice-batch.png",
      secondary: "/assets/projects/branding/kbt-brosur.jpg",
      alt: "Enterprise Automation & Operational Systems",
      badge: "DESKTOP SUITES & AUDIT READY",
      badgeId: "SUITE DESKTOP & SIAP AUDIT",
      badgeZh: "企业桌面套件与可审计系统",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 py-24 border-t border-white/10 relative overflow-hidden bg-transparent">
      {/* Wing 06: Prismatic Solutions & Interactive Lunar Phase Exhibit with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="prism" />
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/[0.03] blur-3xl rounded-full pointer-events-none -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Giant Ghost Watermark */}
        <ScrollReveal>
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-3xl">
              <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.045] select-none pointer-events-none tracking-widest blur-[1px]">
                SERVICES
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono uppercase tracking-widest text-[#ebdca4] relative z-10">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{t.services?.sectionTag || "Pilar Layanan & Spesialisasi"}</span>
              </div>
              
              <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-white leading-tight relative z-10">
                <span className="text-[#d4af37] mr-1.5 font-normal">/</span>
                {t.services?.title || "Pilar Solusi & Rekayasa Solusi"}
              </h2>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed relative z-10">
                {t.services?.subtitle || "Menggabungkan ketajaman kode rekayasa modern dengan pemahaman mendalam operasional bisnis nyata."}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="font-mono text-sm sm:text-base text-zinc-400 tracking-widest block font-medium">
                06 / 08
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#ebdca4] uppercase tracking-wider font-semibold">
                {language === "id" ? "PILAR SOLUSI" : language === "zh" ? "核心服务方案" : "SERVICES & SOLUTIONS"}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Clean, Full-Visibility Architectural Showcase Cards */}
        <div className="space-y-8 sm:space-y-12">
          {t.services?.items?.map((service, idx) => {
            const visuals = serviceVisuals[idx] || serviceVisuals[0];

            return (
              <ScrollReveal key={idx}>
                <div
                  id={`service-pillar-${idx}`}
                  className="rounded-2xl bg-[#0c0c10]/85 backdrop-blur-2xl border border-white/10 hover:border-[#d4af37]/45 p-6 sm:p-8 lg:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.6)] transition-all duration-500 relative overflow-hidden group"
                >
                  {/* Subtle Corner Accent Glow */}
                  <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#d4af37]/[0.04] blur-3xl pointer-events-none group-hover:bg-[#d4af37]/[0.08] transition-all duration-700" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 shrink-0 group-hover:border-[#d4af37]/40 transition-colors">
                        {getServiceIcon(idx)}
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2 sm:gap-4 min-w-0">
                        <span className="font-mono text-xs sm:text-sm text-zinc-500 font-semibold shrink-0">
                          #0{idx + 1}
                        </span>
                        <h3 className="font-serif-editorial text-2xl sm:text-3xl text-white font-medium tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                        <span>{language === "zh" ? "已就绪" : language === "id" ? "TERSEDIA" : "ACTIVE"}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 relative z-10">
                    
                    {/* Left Column: Narrative, Empirical Proof & Tags (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                        {service.description}
                      </p>

                      {/* Empirical Metric Callout */}
                      {service.metric && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/30 transition-all space-y-2">
                          <div className="flex items-baseline justify-between gap-4">
                            <span className="font-serif-editorial text-3xl sm:text-4xl text-white font-light text-gold-gradient">
                              {service.metric}
                            </span>
                            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#ebdca4] font-semibold text-right">
                              {service.metricLabel}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-mono text-zinc-300">
                            {service.metricSub}
                          </p>
                        </div>
                      )}

                      {/* Highlights / Verified Features */}
                      <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold block">
                          {language === "zh" ? "已验证工程能力" : language === "id" ? "KAPABILITAS TERVERIFIKASI" : "VERIFIED CAPABILITIES"}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-200 font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>

                        {/* Direct Case Study Implementation Link */}
                        <div className="pt-2">
                          <a
                            href={
                              idx === 0
                                ? "#project-secret-of-life"
                                : idx === 1
                                ? "#project-cocokga"
                                : idx === 2
                                ? "#project-nangka-premium"
                                : "#experience"
                            }
                            className="inline-flex items-center gap-2 text-xs font-mono text-[#d4af37] hover:text-[#ebdca4] transition-colors py-1 group/link"
                          >
                            <span className="underline underline-offset-4 decoration-[#d4af37]/40 group-hover/link:decoration-[#d4af37]">
                              {language === "zh"
                                ? idx === 0
                                  ? "↳ 查看实际工程案例：The Secret of Life & CocokGa →"
                                  : idx === 1
                                  ? "↳ 查看实际工程案例：本地 RAG 与 AI 知识库管线 →"
                                  : idx === 2
                                  ? "↳ 查看实际工程案例：PT KBT & 特级菠萝蜜包装系统 →"
                                  : "↳ 查看实际工程案例：SqueeCapsule ERP 与 人才初筛系统 →"
                                : language === "id"
                                ? idx === 0
                                  ? "↳ Lihat Bukti Implementasi: The Secret of Life & CocokGa →"
                                  : idx === 1
                                  ? "↳ Lihat Bukti Implementasi: Local RAG & AI Pipelines →"
                                  : idx === 2
                                  ? "↳ Lihat Bukti Implementasi: PT KBT & Nangka Premium →"
                                  : "↳ Lihat Bukti Implementasi: SqueeCapsule ERP & Screening SDM →"
                                : idx === 0
                                  ? "↳ View Implementation: The Secret of Life & CocokGa →"
                                  : idx === 1
                                  ? "↳ View Implementation: Local RAG & AI Pipelines →"
                                  : idx === 2
                                  ? "↳ View Implementation: PT KBT & Nangka Premium →"
                                  : "↳ View Implementation: SqueeCapsule ERP & Screening SDM →"}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Tilted Floating Mockup Showcase (5 cols) */}
                    <div className="lg:col-span-5 relative flex justify-center py-4">
                      <div className="relative w-full max-w-sm sm:max-w-md group/mockup">
                        
                        {/* Layered Secondary Mockup Behind (Tilted -4deg) */}
                        {visuals.secondary && (
                          <div className="absolute -top-3 -left-4 w-4/5 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl opacity-60 transform -rotate-4 group-hover/mockup:-rotate-6 transition-all duration-500 bg-zinc-950">
                            <Image
                              src={visuals.secondary}
                              alt="Secondary Blueprint Mockup"
                              fill
                              loading="lazy"
                              quality={75}
                              className="object-cover filter contrast-[1.05]"
                              sizes="300px"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                          </div>
                        )}

                        {/* Primary Foreground Mockup (Tilted +3deg) */}
                        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 group-hover/mockup:border-[#d4af37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform rotate-2 group-hover/mockup:rotate-0 transition-all duration-500 bg-zinc-950">
                          <Image
                            src={visuals.primary}
                            alt={visuals.alt}
                            fill
                            loading="lazy"
                            quality={75}
                            className="object-cover filter contrast-[1.03]"
                            sizes="(max-width: 768px) 100vw, 450px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                          {/* On-Mockup Spec Badge */}
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                            <span className="text-xs font-mono uppercase tracking-wider text-[#ebdca4] font-semibold">
                              {language === "zh" ? visuals.badgeZh : language === "id" ? visuals.badgeId : visuals.badge}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
