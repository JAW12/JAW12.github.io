"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, Download, ArrowUpRight, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { usePortfolioPdfAvailability } from "@/hooks/usePortfolioPdfAvailability";

export interface FooterProps {
  onOpenPdfModal?: () => void;
}

export function Footer({ onOpenPdfModal }: FooterProps) {
  const { t } = useLanguage();
  const { isChecking, handleDownloadOrPrint } = usePortfolioPdfAvailability(onOpenPdfModal);

  return (
    <footer className="pt-16 pb-12 bg-[#070709] relative overflow-hidden selection:bg-[#d4af37] selection:text-zinc-950 border-t border-white/10">
      
      {/* 1. Top Bar: Persona Statement & Action Directives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-serif-editorial text-2xl sm:text-4xl font-light text-white tracking-tight">
              {t.footer.name}<span className="text-[#d4af37]">.</span>
            </h3>
            <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* 1. Download CV Button (Direct PDF Download) */}
            <a
              href="/assets/CV_Jem_Angkasa_Wijaya_2026.pdf"
              download="CV_Jem_Angkasa_Wijaya_2026.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#d4af37] hover:bg-[#ebdca4] text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-md group cursor-pointer"
              title={t.footer.downloadCv}
            >
              <Download className="w-3.5 h-3.5 text-zinc-950 group-hover:scale-110 transition-transform" />
              <span>{t.footer.downloadCv}</span>
            </a>

            {/* 2. Download Portfolio Button (Smart Download / Fallback Print) */}
            <button
              type="button"
              onClick={handleDownloadOrPrint}
              disabled={isChecking}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 hover:border-[#d4af37]/50 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-md group cursor-pointer disabled:opacity-50"
              title={t.footer.downloadPortfolio}
            >
              {isChecking ? (
                <Loader2 className="w-3.5 h-3.5 text-[#d4af37] animate-spin" />
              ) : (
                <FileText className="w-3.5 h-3.5 text-[#d4af37] group-hover:scale-110 transition-transform" />
              )}
              <span>{t.footer.downloadPortfolio}</span>
            </button>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
              <span>{t.footer.availabilityStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 3-COLUMN EDITORIAL SITEMAP WITH RADIAL-MASKED MONUMENTAL WORDMARK OVERLAY */}
      <div className="relative w-full overflow-hidden border-b border-white/10 group py-12 sm:py-16">
        
        {/* Background Overlay: Monumental Ghost Typography with Vignette Radial Mask */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-0 opacity-20 sm:opacity-25 transition-all duration-700 group-hover:opacity-35"
          style={{
            maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,1) 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,1) 85%)",
          }}
        >
          <svg
            viewBox="0 0 1600 160"
            className="w-full h-auto min-w-[1000px] block select-none pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              textLength="1540"
              lengthAdjust="spacing"
              fill="rgba(255, 255, 255, 0.015)"
              stroke="rgba(212, 175, 55, 0.35)"
              strokeWidth="1.0"
              className="font-serif-editorial font-black uppercase transition-all duration-700 group-hover:stroke-[#d4af37]"
              style={{
                fontFamily: '"Cormorant Garamond", "Cinzel", "Playfair Display", Georgia, serif',
                fontWeight: 900,
                fontSize: "126px",
              }}
            >
              JEM ANGKASA WIJAYA
            </text>
          </svg>
        </div>

        {/* Foreground: 3-Column Editorial Sitemap */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Navigation (Anchor Links) */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block font-bold">
              {t.footer.navTitle}
            </span>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm font-mono">
              <a href="#hero" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.navHome}</span>
              </a>
              <a href="#about" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.navAbout}</span>
              </a>
              <a href="#projects" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.navProjects}</span>
              </a>
              <a href="#process" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.navProcess}</span>
              </a>
              <a href="#contact" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.navContact}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Specializations (Interactive Category Routes) */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block font-bold">
              {t.footer.specTitle}
            </span>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm font-mono">
              <Link href="/projects/software-development" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.specFullstack}</span>
              </Link>
              <Link href="/projects/ai-automation" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.specAi}</span>
              </Link>
              <Link href="/projects/business-development" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.specOperations}</span>
              </Link>
              <Link href="/projects/market-research" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.specQuant}</span>
              </Link>
              <Link href="/projects/multimedia-brand-design" className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300">
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span>{t.footer.specPackaging}</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Connect (Verified Channels & Location) */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block font-bold">
              {t.footer.connectTitle}
            </span>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm font-mono">
              <a
                href="https://github.com/JAW12"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300"
              >
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span className="flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover/link:text-[#ebdca4]" />
                  <span>GitHub (@JAW12)</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/jem-angkasa-wijaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300"
              >
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span className="flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400 group-hover/link:text-[#ebdca4]" />
                  <span>LinkedIn Profile</span>
                </span>
              </a>
              <a
                href="mailto:jemangkasa.work@gmail.com"
                className="group/link inline-flex items-center gap-2 text-zinc-400 hover:text-[#ebdca4] hover:translate-x-1.5 transition-all duration-300"
              >
                <span className="text-[#d4af37] opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">›</span>
                <span className="truncate">jemangkasa.work@gmail.com</span>
              </a>
              <span className="text-zinc-500 pt-1 font-medium block">
                {t.footer.locationTimezone}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar: Clean Copyright & Craftsmanship Credit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} {t.footer.name}. {t.footer.copyright}
        </div>
        <div className="text-zinc-500">
          {t.footer.techCredit}
        </div>
      </div>

    </footer>
  );
}
