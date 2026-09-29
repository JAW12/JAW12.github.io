"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDownRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { InteractiveTiltCard } from "@/components/InteractiveTiltCard";
import { CelestialStar } from "@/components/CelestialStar";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

interface HeroSectionProps {
  onOpenPdfModal?: () => void;
  onOpenCheatSheet?: () => void;
}

export function HeroSection({ onOpenCheatSheet }: HeroSectionProps) {
  const { language, t } = useLanguage();

  return (
    <section
      id="hero"
      className="scroll-mt-24 relative min-h-screen min-h-[100dvh] pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden flex flex-col justify-between"
    >
      {/* Wing 01: Low Orbit Horizon Backdrop with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="horizon" />
      {/* Decorative Atmosphere Hairline Accents */}
      <div className="ambient-glow absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-24 left-8 w-[1px] h-64 bg-gradient-to-b from-white/10 via-[#d4af37]/20 to-transparent" />
        <div className="absolute top-48 right-8 w-[1px] h-96 bg-gradient-to-b from-white/10 via-[#d4af37]/15 to-transparent" />
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#d4af37]/[0.03] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Subtle Kinetic Typography Texture Behind Subject */}
      <div className="kinetic-typography absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden z-0 opacity-[0.04] transition-opacity duration-500">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.35)",
                  color: "transparent",
                }}
                className="font-serif-editorial text-[10vw] font-black uppercase tracking-tight"
              >
                JEM ANGKASA WIJAYA
              </span>
              <span className="text-[3vw] text-[#d4af37]">✱</span>
              <span className="font-mono text-[6vw] font-bold uppercase tracking-widest text-[#ebdca4]">
                BUSINESS SYSTEMS
              </span>
              <span className="text-[3vw] text-[#d4af37]">✱</span>
              <span className="font-serif-editorial italic text-[8vw] font-light text-zinc-400">
                AI WORKFLOWS
              </span>
              <span className="text-[3vw] text-[#d4af37]">✱</span>
              <span className="font-mono text-[6vw] font-bold uppercase tracking-widest text-zinc-300">
                FULL-STACK WEB
              </span>
              <span className="text-[3vw] text-[#d4af37]">✱</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto py-2 sm:py-4">
          
          {/* Left Column: Headline & Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 relative">
            
            {/* Salutation */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#d4af37] inline-block" />
                <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#d4af37] font-medium">
                  {t.hero.salutation}
                </h2>
                <span className="h-[1px] w-12 bg-[#d4af37]/40" />
              </div>

              {/* Master Headline: Two-Tone Hairline Gold Stroke + Solid White Editorial Serif */}
              <div className="relative select-none">
                <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-5 gap-y-1">
                  <span
                    style={{ WebkitTextStroke: "1.5px #d4af37", color: "transparent" }}
                    className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight select-none"
                  >
                    JEM
                  </span>
                  <span className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white font-normal tracking-tight">
                    ANGKASA<span className="text-[#dc2626]">.</span>
                  </span>
                </div>
              </div>

              {/* Master Editorial Title Subheading */}
              <h1 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-200 leading-[1.2] pt-1">
                {t.hero.titleFirst}{" "}
                <span className="italic font-normal text-gold-gradient">
                  {t.hero.titleHighlight}
                </span>{" "}
                {t.hero.titleLast}
              </h1>
            </div>

            {/* Subheading Narrative (Grounded, Anti-Hyperbole, Field-Proven Roots) */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
              {t.hero.subheading}
            </p>

            {/* Call to Actions & Direct Links */}
            <div className="space-y-4 pt-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#ebdca4] transition-all shadow-md group cursor-pointer"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowDownRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </a>

                {onOpenCheatSheet && (
                  <button
                    type="button"
                    onClick={onOpenCheatSheet}
                    className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#0c0c10]/80 backdrop-blur-2xl hover:bg-[#18181f] border border-[#d4af37]/45 hover:border-[#d4af37] text-[#ebdca4] font-mono text-xs uppercase tracking-wider transition-all shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] font-semibold cursor-pointer group"
                    title="Recruiter Cheat Sheet · 30-sec Overview & CV/Portfolio PDF"
                  >
                    <CelestialStar className="w-4 h-4 text-[#d4af37] group-hover:rotate-45 group-hover:scale-110 transition-transform duration-500" />
                    <span>
                      {language === "zh"
                        ? "招聘官速查 · CV & 作品集"
                        : language === "id"
                        ? "Recruiter Cheat Sheet · CV & Portofolio"
                        : "Recruiter Cheat Sheet · CV & Portfolio"}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#ebdca4] font-medium border border-[#d4af37]/40">
                      30s
                    </span>
                  </button>
                )}
              </div>

              {/* Quick Social & Direct Contact Capsules */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="https://github.com/JAW12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-[#d4af37]/40 text-xs font-mono text-zinc-300 hover:text-white hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jem-angkasa-wijaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-[#d4af37]/40 text-xs font-mono text-zinc-300 hover:text-white hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:jemangkasa.work@gmail.com"
                  className="rounded-full px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-[#d4af37]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait with Interactive 3D Mouse Tilt (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractiveTiltCard maxTilt={8} roundedClassName="rounded-2xl" className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[380px]">
              <div className="relative w-full group cursor-pointer">
                {/* Outer Editorial Accent Frame with Subtle Hover Intensification */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#d4af37]/20 via-transparent to-[#dc2626]/10 border border-white/10 blur-sm pointer-events-none group-hover:from-[#d4af37]/35 group-hover:blur-md transition-all duration-500" />

                {/* Card Container */}
                <div className="relative rounded-2xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 group-hover:border-[#d4af37]/40 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] p-2.5 transition-colors duration-500">
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#18181b] to-[#09090b]">
                    <Image
                      src="/assets/avatar/profile-quarter.png"
                      alt="Jem Angkasa Wijaya, S.Kom."
                      fill
                      priority
                      className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    
                    {/* Subtle Gradient Vignette at Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111114] via-[#111114]/60 to-transparent" />

                    {/* Dignified Card Inscription (Pure name and degree, no loud pulsing badges) */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 space-y-0.5 shadow-2xl">
                      <div className="font-serif-editorial text-base sm:text-lg text-white font-medium">
                        {language === "zh" ? "Jem Angkasa Wijaya (范永安)" : "Jem Angkasa Wijaya"}
                      </div>
                      <p className="text-xs text-[#ebdca4] font-mono">
                        {language === "zh" ? "iSTTS · 业务信息系统学士 (S.Kom.)" : "iSTTS · Sarjana Komputer (S.Kom.)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveTiltCard>
          </div>

        </div>

        {/* Quiet, Single-Line Editorial Metadata Footer */}
        <div className="mt-auto pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-zinc-300">
            <span>Surabaya, Indonesia</span>
            <span className="text-zinc-600">·</span>
            <span>Trilingual (Indonesian · English · Mandarin)</span>
            <span className="text-zinc-600">·</span>
            <span className="text-[#ebdca4]">Open for Remote Systems & Web Roles</span>
          </div>

          <a
            href="#projects"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#d4af37] transition-colors group cursor-pointer shrink-0"
          >
            <span className="uppercase tracking-widest text-[11px]">
              {language === "zh" ? "浏览精选工程" : language === "id" ? "LIHAT MONOGRAF" : "EXPLORE WORKS"}
            </span>
            <span className="text-xs text-[#d4af37] font-bold group-hover:translate-y-0.5 transition-transform">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
