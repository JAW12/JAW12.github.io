"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { CelestialStar } from "@/components/CelestialStar";

interface NavbarProps {
  onOpenPdfModal?: () => void;
  onOpenCheatSheet?: () => void;
}

export function Navbar({ onOpenCheatSheet }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { language, setLanguage, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track reading progress percentage (0 - 100)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      if (isHome) {
        const sections = ["contact", "credentials", "skills", "experience", "projects", "about", "hero"];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250) {
              setActiveSection(`#${section}`);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: isHome ? "#about" : "/#about", id: "#about", label: t.nav.about },
    { href: isHome ? "#projects" : "/#projects", id: "#projects", label: t.nav.projects },
    { href: isHome ? "#experience" : "/#experience", id: "#experience", label: t.nav.experience },
    { href: isHome ? "#skills" : "/#skills", id: "#skills", label: t.nav.skills },
    { href: isHome ? "#credentials" : "/#credentials", id: "#credentials", label: t.nav.credentials },
    { href: isHome ? "#contact" : "/#contact", id: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      {/* 1. Global Reading Scroll Progress Indicator (Pure Gold Luxury Hairline) */}
      <div className="fixed top-0 left-0 right-0 h-[1.5px] bg-white/[0.04] z-[55] pointer-events-none">
        <div
          className="h-full bg-[#d4af37]/90 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(212,175,55,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Mobile Backdrop Overlay when Menu is Open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 pointer-events-auto lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          <div
            className={`px-4 sm:px-5 py-2 rounded-full bg-[#0c0c10]/80 backdrop-blur-2xl border transition-all duration-300 pointer-events-auto shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex items-center justify-between gap-3 sm:gap-4 ${
              scrolled
                ? "border-[#d4af37]/40 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.08)]"
                : "border-white/10"
            }`}
          >
            {/* Brand Wordmark (Guaranteed No Wrap) */}
            {isHome ? (
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center shrink-0 select-none pr-1"
              >
                <span className="font-serif-editorial text-lg sm:text-xl font-light tracking-wide text-white group-hover:text-[#d4af37] transition-colors whitespace-nowrap">
                  Jem Angkasa<span className="text-[#dc2626]">.</span>
                </span>
              </a>
            ) : (
              <Link
                href="/"
                className="group flex items-center shrink-0 select-none pr-1"
              >
                <span className="font-serif-editorial text-lg sm:text-xl font-light tracking-wide text-white group-hover:text-[#d4af37] transition-colors whitespace-nowrap">
                  Jem Angkasa<span className="text-[#dc2626]">.</span>
                </span>
              </Link>
            )}

          {/* Desktop Navigation Links with Active Scroll Spy */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 shrink-0">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.id;
              return isHome ? (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative py-1 text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group/link whitespace-nowrap shrink-0"
                >
                  <span className={isActive ? "text-white font-semibold" : "font-medium"}>
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_6px_#d4af37]" />
                  )}
                </a>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  className="relative py-1 text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-1 group/link whitespace-nowrap shrink-0"
                >
                  <span className="font-medium">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Actions: Trilingual Toggle & PDF Export Button (Capsule Style) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* Trilingual Direct Switcher Pill */}
            <div className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 rounded-full text-zinc-200 shrink-0">
              <Globe className="w-3.5 h-3.5 text-[#d4af37] mr-0.5 shrink-0" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  language === "en" ? "text-[#d4af37] font-bold bg-white/10" : "text-zinc-400 hover:text-white"
                }`}
                title="English"
              >
                EN
              </button>
              <span className="text-zinc-600 select-none">/</span>
              <button
                onClick={() => setLanguage("id")}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  language === "id" ? "text-[#d4af37] font-bold bg-white/10" : "text-zinc-400 hover:text-white"
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <span className="text-zinc-600 select-none">/</span>
              <button
                onClick={() => setLanguage("zh")}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  language === "zh" ? "text-[#d4af37] font-bold bg-white/10" : "text-zinc-400 hover:text-white"
                }`}
                title="中文 (Simplified Chinese)"
              >
                中文
              </button>
            </div>

            {/* Recruiter Cheat Sheet & Documents Trigger Pill */}
            {onOpenCheatSheet && (
              <button
                onClick={onOpenCheatSheet}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono tracking-wider bg-[#d4af37]/15 hover:bg-[#d4af37]/25 border border-[#d4af37]/60 hover:border-[#d4af37] text-[#ebdca4] rounded-full transition-all shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] group whitespace-nowrap shrink-0 cursor-pointer font-medium"
                title={
                  language === "zh"
                    ? "30秒快速概览 · 一键获取官方 CV 与 PDF 图录"
                    : language === "id"
                    ? "Ringkasan 30 Detik · Unduh CV ATS & PDF Portofolio"
                    : "30-Sec Executive Scan · Download ATS CV & Portfolio PDF"
                }
              >
                <CelestialStar className="w-3.5 h-3.5 text-[#d4af37] group-hover:rotate-45 group-hover:scale-110 transition-transform duration-500" />
                <span className="font-semibold">
                  {language === "zh"
                    ? "速查 · CV & 作品集"
                    : language === "id"
                    ? "Cheat Sheet · CV & Portofolio"
                    : "Cheat Sheet · CV & Portfolio"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              </button>
            )}
          </div>

          {/* Mobile & Tablet Navigation Toggle (Visible on screens < lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="sm:hidden p-1 px-2.5 text-xs font-mono font-semibold bg-white/5 border border-white/10 rounded-full text-[#d4af37] cursor-pointer"
              title="Toggle Language (EN / ID / 中文)"
            >
              {language === "zh" ? "中文" : language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 border border-white/10 bg-[#09090b]/95 backdrop-blur-2xl rounded-3xl space-y-3 pointer-events-auto shadow-2xl animate-in fade-in duration-200">
            {navLinks.map((link) => (
              isHome ? (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm text-zinc-300 hover:text-white tracking-wide border-b border-white/5 last:border-b-0"
                >
                  <span>{link.label}</span>
                </a>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm text-zinc-300 hover:text-white tracking-wide border-b border-white/5 last:border-b-0"
                >
                  <span>{link.label}</span>
                </Link>
              )
            ))}

            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <span className="text-xs font-mono text-zinc-400">Language:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full text-xs font-mono cursor-pointer ${
                    language === "en"
                      ? "bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#ebdca4] font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("id")}
                  className={`px-3 py-1 rounded-full text-xs font-mono cursor-pointer ${
                    language === "id"
                      ? "bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#ebdca4] font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage("zh")}
                  className={`px-3 py-1 rounded-full text-xs font-mono cursor-pointer ${
                    language === "zh"
                      ? "bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#ebdca4] font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  中文
                </button>
              </div>
            </div>

            <div className="pt-2">
              {onOpenCheatSheet && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCheatSheet();
                  }}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 text-xs font-mono font-medium bg-[#d4af37]/15 border border-[#d4af37]/50 text-[#ebdca4] rounded-2xl cursor-pointer hover:bg-[#d4af37]/25 transition-colors shadow-lg"
                >
                  <CelestialStar className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <div className="text-left">
                    <span className="font-bold block text-white">
                      Recruiter Cheat Sheet (CV &amp; Portfolio)
                    </span>
                    <span className="text-[10px] text-zinc-300 block font-light">
                      {language === "zh"
                        ? "30秒快速概览 · 官方 CV 与作品集"
                        : language === "id"
                        ? "Ringkasan 30 Detik · Unduh CV ATS & Portofolio PDF"
                        : "30-Sec Overview · ATS CV & PDF Portfolio"}
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
