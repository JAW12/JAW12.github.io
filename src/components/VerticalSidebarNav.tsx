"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface NavItem {
  id: string;
  labelEn: string;
  labelId: string;
  labelZh: string;
}

const navItems: NavItem[] = [
  { id: "hero", labelEn: "HOME", labelId: "BERANDA", labelZh: "首页" },
  { id: "about", labelEn: "ABOUT", labelId: "TENTANG", labelZh: "关于" },
  { id: "projects", labelEn: "PROJECTS", labelId: "PROYEK", labelZh: "项目" },
  { id: "experience", labelEn: "EXPERIENCE", labelId: "PENGALAMAN", labelZh: "经历" },
  { id: "services", labelEn: "SERVICES", labelId: "LAYANAN", labelZh: "方案" },
  { id: "skills", labelEn: "SKILLS", labelId: "KEAHLIAN", labelZh: "技能" },
  { id: "contact", labelEn: "CONTACTS", labelId: "KONTAK", labelZh: "联系" },
];

export function VerticalSidebarNav() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Vertical Section Navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-7 select-none pointer-events-auto"
    >
      {/* Hairline Spine Track */}
      <div className="absolute top-0 bottom-0 right-[7px] w-[1px] bg-white/[0.08] -z-10" />

      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const label = language === "zh" ? item.labelZh : language === "id" ? item.labelId : item.labelEn;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className="group relative flex items-center justify-end py-1 text-right focus:outline-none"
          >
            {/* Expanded Tooltip / Label on Left */}
            <span
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              className={`font-mono text-xs tracking-[0.25em] transition-all duration-300 mr-3 uppercase ${
                isActive
                  ? "text-[#ebdca4] font-bold opacity-100"
                  : "text-zinc-400 opacity-70 group-hover:text-zinc-200 group-hover:opacity-100"
              }`}
            >
              {label}
            </span>

            {/* Indicator Node / Dot */}
            <div className="relative flex items-center justify-center w-3.5 h-3.5">
              {isActive ? (
                <>
                  <motion.span
                    layoutId="activeVerticalDotGlow"
                    className="absolute inset-0 rounded-full bg-[#d4af37]/30 animate-ping"
                  />
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                </>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors" />
              )}
            </div>
          </a>
        );
      })}
    </aside>
  );
}
