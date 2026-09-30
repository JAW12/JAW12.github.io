"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { educationData, awardsData, certificationsData, leadershipData } from "@/data/credentials";
import {
  Award,
  GraduationCap,
  FileCheck,
  CheckCircle2,
  Maximize2,
  X,
  Star,
  Languages,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Users,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InteractiveTiltCard } from "@/components/InteractiveTiltCard";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

interface LightboxItem {
  title: string;
  titleId?: string;
  titleZh?: string;
  issuer: string;
  year: string;
  image: string;
  category?: string;
  credentialUrl?: string;
  subject?: string;
  subjectId?: string;
  subjectZh?: string;
}

export function CredentialsSection() {
  const { language, t } = useLanguage();
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build a unified list of viewable certificates (Awards & Certifications that have an image)
  const allViewableItems: LightboxItem[] = [
    ...awardsData
      .filter((a) => typeof a.image === "string" && a.image.trim().length > 0)
      .map((a) => ({
        title: a.title,
        titleId: a.titleId,
        titleZh: a.titleZh,
        issuer: a.issuer,
        year: a.year,
        image: a.image!,
        category: "Academic Award",
        subject: a.subject,
        subjectId: a.subjectId,
        subjectZh: a.subjectZh,
      })),
    ...certificationsData
      .filter((c) => typeof c.image === "string" && c.image.trim().length > 0)
      .map((c) => ({
        title: c.title,
        titleId: c.titleId,
        titleZh: c.titleZh,
        issuer: c.issuer,
        year: c.year,
        image: c.image!,
        category: c.category,
        credentialUrl: c.credentialUrl,
      })),
  ];

  const selectedItem = selectedItemIndex !== null ? allViewableItems[selectedItemIndex] : null;

  const openLightboxByImage = (imagePath: string) => {
    const idx = allViewableItems.findIndex((item) => item.image === imagePath);
    if (idx !== -1) {
      setSelectedItemIndex(idx);
    }
  };

  const handlePrevItem = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev !== null ? (prev - 1 + allViewableItems.length) % allViewableItems.length : 0
    );
  };

  const handleNextItem = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev !== null ? (prev + 1) % allViewableItems.length : 0
    );
  };

  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedItemIndex(null);
        if (e.key === "ArrowLeft") handlePrevItem();
        if (e.key === "ArrowRight") handleNextItem();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedItemIndex]);

  const languagesList = [
    {
      name: "Bahasa Indonesia",
      nameEn: "Indonesian",
      nameZh: "印度尼西亚语 (印尼语)",
      level: "Penutur Asli (Native / Bilingual)",
      levelEn: "Native or Bilingual Proficiency",
      levelZh: "母语 / 双语精通 (Native)",
      badge: "Native",
      badgeId: "Bahasa Ibu",
      badgeZh: "母语",
      detail: "Bahasa ibu, komunikasi lisan & penulisan formal profesional.",
      detailEn: "Mother tongue, professional verbal & written communication.",
      detailZh: "母语，具备高阶商务口语与专业公文写作能力。",
    },
    {
      name: "Bahasa Inggris",
      nameEn: "English",
      nameZh: "英语",
      level: "Kecakapan Kerja Profesional",
      levelEn: "Professional Working Proficiency",
      levelZh: "专业工作流利水准 (Professional)",
      badge: "Professional Working",
      badgeId: "Kerja Profesional",
      badgeZh: "专业商务水准",
      detail: "Berlatar kurikulum Cambridge A-Level (University of Cambridge). Digunakan aktif dalam riset teknis, repositori open-source, dan komunikasi remote internasional.",
      detailEn: "Cambridge A-Level curriculum foundation (University of Cambridge). Actively used in technical research, open-source repositories, and global remote collaboration.",
      detailZh: "英国剑桥大学国际考试局 A-Level 体系背景。深度应用于高阶技术文献研发、开源代码库维护与全球跨国协作。",
    },
    {
      name: "Bahasa Mandarin",
      nameEn: "Mandarin / Chinese",
      nameZh: "中文 (普通话)",
      level: "Kecakapan Kerja Terbatas (HSK 4)",
      levelEn: "Working Proficiency (HSK 4)",
      levelZh: "商务工作能力 (HSK 4级 247/300)",
      badge: "HSK Level 4 (247/300)",
      badgeId: "HSK Level 4 (247/300)",
      badgeZh: "HSK 4级 (247/300)",
      detail: "Sertifikasi resmi HSK Level 4 dari Confucius Institute Headquarters / Hanban (Skor: 247 / 300, 2017).",
      detailEn: "Official HSK Level 4 certification from Confucius Institute Headquarters / Hanban (Score: 247 / 300, 2017).",
      detailZh: "中国国家汉办 / 孔子学院总部官方 HSK 4级认证 (官方成绩: 247 / 300, 2017)。具备流利的听说读写能力。",
    },
  ];

  return (
    <section id="credentials" className="scroll-mt-24 py-24 relative overflow-hidden bg-transparent">
      {/* Wing 08: Polaris Zenith & Academic Horizon with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="zenith" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.045] select-none pointer-events-none tracking-widest blur-[1px]">
              CREDENTIALS
            </span>
            <div className="space-y-4 max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono uppercase tracking-widest text-[#ebdca4]">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{t.credentials.sectionTag}</span>
              </div>
              
              <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-white leading-tight">
                {t.credentials.title}
              </h2>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {t.credentials.subtitle}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="font-mono text-sm sm:text-base text-zinc-400 tracking-widest block font-medium">
                06 / 06
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#ebdca4] uppercase tracking-wider font-semibold">
                {language === "id" ? "KREDENSIAL AKADEMIK" : language === "zh" ? "学术资质与认证" : "ACADEMIC CREDENTIALS"}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 1. Formal Education Cards: 70% / 30% Layered Stack */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>{t.credentials.educationTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* 70% Primary Undergraduate Degree: S1 iSTTS */}
            {educationData[0] && (
              <div className="lg:col-span-8">
                <InteractiveTiltCard maxTilt={5} roundedClassName="rounded-2xl" className="h-full">
                  <div className="p-7 sm:p-9 rounded-2xl bg-[#0c0c10]/90 backdrop-blur-2xl border border-[#d4af37]/40 hover:border-[#d4af37]/70 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden group h-full">
                    {/* Subtle Gold Ambient Glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/[0.035] rounded-full blur-3xl pointer-events-none" />

                    <div className="space-y-4 relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs sm:text-sm font-mono text-[#d4af37] uppercase tracking-wider font-semibold">
                          {educationData[0].period}
                        </span>
                        <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono font-bold bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#ebdca4]">
                          {language === "id" ? "IPK" : "GPA"}: {educationData[0].gpa}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif-editorial text-2xl sm:text-4xl text-white font-medium group-hover:text-[#ebdca4] transition-colors leading-tight">
                          {language === "zh" && educationData[0].degreeZh ? educationData[0].degreeZh : language === "id" ? educationData[0].degreeId : educationData[0].degree}
                        </h3>
                        <div className="text-sm sm:text-base font-mono text-zinc-300 pt-1.5">
                          {language === "zh" && educationData[0].institutionZh ? educationData[0].institutionZh : language === "id" ? educationData[0].institutionId : educationData[0].institution}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-medium text-[#dc2626] bg-[#dc2626]/10 border border-[#dc2626]/30">
                        <span>✦ {language === "zh" && educationData[0].honorsZh ? educationData[0].honorsZh : language === "id" ? educationData[0].honorsId : educationData[0].honors}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light pt-1">
                        {language === "zh" && educationData[0].descriptionZh ? educationData[0].descriptionZh : language === "id" ? educationData[0].descriptionId : educationData[0].description}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-white/10 relative z-10">
                      {(language === "zh" && educationData[0].highlightsZh ? educationData[0].highlightsZh : language === "id" ? educationData[0].highlightsId : educationData[0].highlights).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </InteractiveTiltCard>
              </div>
            )}

            {/* 30% Secondary Foundational Education: Xin Zhong Pre-University & Cambridge A-Level */}
            {educationData[1] && (
              <div className="lg:col-span-4">
                <InteractiveTiltCard maxTilt={6} roundedClassName="rounded-2xl" className="h-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#09090d]/80 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)] relative overflow-hidden group h-full">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                          {educationData[1].period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-zinc-300">
                          Cambridge Standards
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif-editorial text-xl sm:text-2xl text-white font-medium group-hover:text-[#ebdca4] transition-colors leading-snug">
                          {language === "zh" && educationData[1].degreeZh ? educationData[1].degreeZh : language === "id" ? educationData[1].degreeId : educationData[1].degree}
                        </h3>
                        <div className="text-xs sm:text-sm font-mono text-zinc-400 pt-1">
                          {language === "zh" && educationData[1].institutionZh ? educationData[1].institutionZh : language === "id" ? educationData[1].institutionId : educationData[1].institution}
                        </div>
                      </div>

                      <div className="inline-block text-xs font-mono text-[#d4af37]">
                        ✦ {language === "zh" && educationData[1].honorsZh ? educationData[1].honorsZh : language === "id" ? educationData[1].honorsId : educationData[1].honors}
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {language === "zh" && educationData[1].descriptionZh ? educationData[1].descriptionZh : language === "id" ? educationData[1].descriptionId : educationData[1].description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-white/5">
                      {(language === "zh" && educationData[1].highlightsZh ? educationData[1].highlightsZh : language === "id" ? educationData[1].highlightsId : educationData[1].highlights).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <span className="text-[#d4af37] text-xs mt-0.5">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </InteractiveTiltCard>
              </div>
            )}
          </div>
        </div>

        {/* 2. 4x Best Academic Practitioner Awards */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dc2626] font-semibold">
            <Star className="w-4 h-4" />
            <span>{t.credentials.awardsTitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardsData.map((award, idx) => (
              <InteractiveTiltCard key={idx} maxTilt={9} roundedClassName="rounded-xl" className="h-full">
                <div className="group rounded-xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-[#dc2626]/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.6)] h-full">
                  {/* Certificate Preview Image */}
                  {typeof award.image === "string" && award.image.trim().length > 0 && (
                    <div
                      className="relative aspect-[4/3] w-full bg-zinc-950 overflow-hidden cursor-pointer"
                      onClick={() => openLightboxByImage(award.image!)}
                    >
                      <Image
                        src={award.image}
                        alt={language === "zh" && award.titleZh ? award.titleZh : language === "id" ? award.titleId : award.title}
                        fill
                        loading="lazy"
                        quality={75}
                        className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                      <div className="absolute top-2 left-2 px-2.5 py-1 rounded text-xs font-mono bg-black/80 text-[#d4af37] border border-white/15 font-semibold">
                        {award.year}
                      </div>
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider font-semibold">
                        {award.issuer}
                      </span>
                      <h4 className="font-serif-editorial text-lg text-white font-medium group-hover:text-[#fca5a5] transition-colors leading-snug">
                        {language === "zh" && award.titleZh ? award.titleZh : language === "id" ? award.titleId : award.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 font-mono">
                        {language === "zh" && award.subjectZh ? award.subjectZh : language === "id" ? award.subjectId : award.subject}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-2 border-t border-white/5">
                      {language === "zh" && award.descriptionZh ? award.descriptionZh : language === "id" ? award.descriptionId : award.description}
                    </p>
                  </div>
                </div>
              </InteractiveTiltCard>
            ))}
          </div>
        </div>

        {/* 3. Leadership & Academic Organizational Roles (Campus & Student Executive Experience) */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span>{t.credentials.leadershipTitle}</span>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {language === "id"
                ? `[ ${leadershipData.length} Peran Kepemimpinan Kampus · iSTTS SIB ]`
                : language === "zh"
                ? `[ 共 ${leadershipData.length} 项校园学术领导职务 · iSTTS ]`
                : `[ ${leadershipData.length} Campus Leadership Roles · iSTTS SIB ]`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {leadershipData.map((item, idx) => {
              const role = language === "zh" && item.roleZh ? item.roleZh : language === "id" ? item.roleId : item.role;
              const company = language === "zh" && item.companyZh ? item.companyZh : language === "id" ? item.companyId : item.company;
              const period = language === "zh" && item.periodZh ? item.periodZh : language === "id" ? item.periodId : item.period;
              const description = language === "zh" && item.descriptionZh ? item.descriptionZh : language === "id" ? item.descriptionId : item.description;
              const bullets = language === "zh" && item.bulletsZh ? item.bulletsZh : language === "id" ? item.bulletsId : item.bullets;

              return (
                <InteractiveTiltCard key={item.id || idx} maxTilt={6} roundedClassName="rounded-2xl" className="h-full">
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0c10]/85 backdrop-blur-2xl border border-white/10 hover:border-[#d4af37]/60 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)] relative overflow-hidden group h-full">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/[0.03] rounded-full blur-2xl pointer-events-none group-hover:bg-[#d4af37]/[0.08] transition-colors" />

                    <div className="space-y-3 relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider font-semibold">
                          {period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-zinc-300">
                          {item.type}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-serif-editorial text-xl sm:text-2xl text-white font-medium group-hover:text-[#ebdca4] transition-colors leading-snug">
                          {role}
                        </h4>
                        <div className="text-xs sm:text-sm font-mono text-[#ebdca4] pt-1">
                          {company}
                        </div>
                        <div className="text-xs font-mono text-zinc-400 pt-0.5">
                          {item.location}
                        </div>
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed font-light pt-1">
                        {description}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-white/10 relative z-10">
                      {bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 relative z-10">
                      {(language === "zh" && item.tagsZh
                        ? item.tagsZh
                        : language === "id" && item.tagsId
                        ? item.tagsId
                        : item.tags
                      ).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </InteractiveTiltCard>
              );
            })}
          </div>
        </div>

        {/* 4. Industry Certifications (Chronological Latest to Oldest, Clean Cards, Click-to-Lightbox) */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4af37]">
              <FileCheck className="w-4 h-4 text-[#d4af37]" />
              <span>{t.credentials.certificationsTitle}</span>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {language === "id"
                ? `[ ${certificationsData.length} Sertifikasi Resmi · Terurut dari Terbaru ]`
                : language === "zh"
                ? `[ 共 ${certificationsData.length} 项权威认证 · 按时间倒序 ]`
                : `[ ${certificationsData.length} Verified Certifications · Sorted Latest to Oldest ]`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert, idx) => {
              const hasImage = Boolean(cert.image && cert.image.trim().length > 0);
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (hasImage) {
                      openLightboxByImage(cert.image!);
                    }
                  }}
                  className={`p-5 rounded-xl bg-[#0c0c10]/80 backdrop-blur-2xl border transition-all duration-300 flex flex-col justify-between gap-4 group shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${
                    hasImage
                      ? "border-white/10 hover:border-[#d4af37]/60 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                      : "border-white/10"
                  }`}
                >
                  <div className="space-y-2 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-[#ebdca4] font-medium">
                        {cert.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 font-semibold">{cert.year}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-white group-hover:text-[#ebdca4] transition-colors leading-snug pt-1">
                      {language === "zh" && cert.titleZh ? cert.titleZh : language === "id" ? cert.titleId : cert.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono">
                    <span className="text-zinc-400">{cert.issuer}</span>
                    <div className="flex items-center gap-3">
                      {hasImage && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightboxByImage(cert.image!);
                          }}
                          className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors cursor-pointer group-hover:text-[#ebdca4]"
                          title={language === "id" ? "Klik untuk melihat sertifikat" : language === "zh" ? "点击查看证书原件" : "Click to view certificate"}
                        >
                          <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span className="underline decoration-dotted">{language === "id" ? "Lihat" : language === "zh" ? "查看" : "View"}</span>
                        </button>
                      )}

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[#d4af37] hover:text-[#ebdca4] hover:underline font-semibold transition-colors cursor-pointer"
                          title={language === "id" ? "Buka Verifikasi Resmi Dicoding" : language === "zh" ? "打开官方验证" : "Verify Credential"}
                        >
                          <span>{language === "id" ? "Verifikasi" : language === "zh" ? "验证" : "Verify"}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Certified Language Proficiency (Trilingual) */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4af37]">
            <Languages className="w-4 h-4 text-[#d4af37]" />
            <span>{t.credentials.languagesTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languagesList.map((langItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 space-y-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-editorial text-xl sm:text-2xl text-white font-medium group-hover:text-[#ebdca4] transition-colors">
                    {language === "zh" ? langItem.nameZh : language === "id" ? langItem.name : langItem.nameEn}
                  </h4>
                  <span className="px-3 py-1 rounded text-xs font-mono uppercase bg-[#d4af37]/10 text-[#ebdca4] border border-[#d4af37]/30 font-bold">
                    {language === "zh" && langItem.badgeZh
                      ? langItem.badgeZh
                      : language === "id" && langItem.badgeId
                      ? langItem.badgeId
                      : langItem.badge}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#ebdca4] font-semibold">
                  {language === "zh" ? langItem.levelZh : language === "id" ? langItem.level : langItem.levelEn}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-1">
                  {language === "zh" ? langItem.detailZh : language === "id" ? langItem.detail : langItem.detailEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Unified Certificate & Award Lightbox Modal with Gallery Controls */}
      {mounted && selectedItem && selectedItemIndex !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItemIndex(null)}
        >
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevItem();
            }}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 sm:bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-xl z-20 cursor-pointer flex items-center justify-center"
            title={language === "id" ? "Sertifikat Sebelumnya (←)" : language === "zh" ? "上一张 (←)" : "Previous Certificate (←)"}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextItem();
            }}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 sm:bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-xl z-20 cursor-pointer flex items-center justify-center"
            title={language === "id" ? "Sertifikat Berikutnya (→)" : language === "zh" ? "下一张 (→)" : "Next Certificate (→)"}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3">
              <span className="font-mono text-xs text-[#ebdca4]">
                [ 0{selectedItemIndex + 1} / 0{allViewableItems.length} ] · {selectedItem.category === "Academic Award" ? (language === "zh" ? "最佳实训先锋" : language === "id" ? "PRAKTIKAN TERBAIK" : "BEST ACADEMIC PRACTITIONER") : (language === "zh" ? "官方认证证书" : language === "id" ? "SERTIFIKASI RESMI" : "VERIFIED CERTIFICATION")}
              </span>
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white cursor-pointer transition-colors"
                title={language === "id" ? "Tutup (Esc)" : language === "zh" ? "关闭 (Esc)" : "Close (Esc)"}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {typeof selectedItem.image === "string" && selectedItem.image.trim().length > 0 && (
              <div className="relative w-full h-[65vh] rounded-xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  priority
                  quality={75}
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
            )}

            <div className="mt-4 text-center space-y-2">
              <p className="font-serif-editorial text-lg sm:text-xl text-white font-medium">
                {language === "zh" && selectedItem.titleZh ? selectedItem.titleZh : language === "id" ? selectedItem.titleId : selectedItem.title}
              </p>
              <p className="font-mono text-xs sm:text-sm text-zinc-300">
                {selectedItem.issuer} ({selectedItem.year})
                {selectedItem.subject ? ` · ${language === "zh" && selectedItem.subjectZh ? selectedItem.subjectZh : language === "id" ? selectedItem.subjectId : selectedItem.subject}` : ""}
              </p>

              {selectedItem.credentialUrl && (
                <div className="pt-1">
                  <a
                    href={selectedItem.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#ebdca4] hover:bg-[#d4af37]/30 transition-colors"
                  >
                    <span>{language === "id" ? "Buka Halaman Verifikasi Resmi" : language === "zh" ? "打开官方验证页面" : "Open Official Verification Page"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <p className="text-xs font-mono text-zinc-400 pt-1">
                {language === "id"
                  ? "Gunakan panah ← / → atau klik tombol untuk navigasi · [Esc] untuk menutup"
                  : language === "zh"
                  ? "使用 ← / → 方向键或两侧按钮翻页 · 按 [Esc] 关闭"
                  : "Use ← / → keys or buttons to navigate · Press [Esc] to close"}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
