"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { PageTransitionProvider } from "@/components/PageTransitionCurtain";
import { CosmicAtmosphere } from "@/components/CosmicAtmosphere";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  categoryEcosystems,
  getCategoryShowcaseProjects,
  ProjectItem,
} from "@/data/projects";
import { translateTech, translateActionLabel } from "@/data/techDictionary";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Home,
  Layers,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Pause,
  Disc,
  Volume2,
  VolumeX,
  Music,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectAudioVitrine } from "@/components/ProjectAudioVitrine";

interface CategoryShowcaseClientProps {
  ecosystemId: string;
}

function CleanProjectMediaPlaceholder({ project }: { project: ProjectItem }) {
  const { language } = useLanguage();
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#111114] via-[#141418] to-[#0c0c10] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between group">
      <div className="space-y-3">
        <span className="font-mono text-[11px] text-[#ebdca4] uppercase tracking-wider block font-semibold">
          {language === "zh" && project.roleZh ? project.roleZh : language === "id" && project.roleId ? project.roleId : project.role}
        </span>
        <h4 className="font-serif-editorial text-2xl sm:text-3xl text-white font-medium">
          {language === "zh" && project.titleZh ? project.titleZh : language === "id" && project.titleId ? project.titleId : project.title}
        </h4>
        <p className="font-mono text-xs text-zinc-300 leading-relaxed line-clamp-3">
          {language === "zh" && project.taglineZh ? project.taglineZh : language === "id" && project.taglineId ? project.taglineId : project.tagline}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
        <span className="text-[#d4af37] font-medium">
          {project.techStack.slice(0, 3).join(" · ")}
        </span>
        <span>{project.year}</span>
      </div>
    </div>
  );
}

function isVideoAsset(src: string): boolean {
  if (!src) return false;
  const lower = src.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".mov") || lower.endsWith(".ogg");
}

function ProjectMediaVitrine({ project }: { project: ProjectItem }) {
  const { language } = useLanguage();

  if (project.audioTracks && project.audioTracks.length > 0) {
    return <ProjectAudioVitrine project={project} />;
  }

  const validImgs = (project.images || []).filter(
    (img) => typeof img === "string" && img.trim().length > 0
  );
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasMultiple = validImgs.length > 1;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? validImgs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === validImgs.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsLightboxOpen(false);
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isLightboxOpen, validImgs.length]);

  if (validImgs.length === 0) {
    return <CleanProjectMediaPlaceholder project={project} />;
  }

  const currentImg = validImgs[activeIdx] || validImgs[0];
  const isCurVideo = isVideoAsset(currentImg);

  return (
    <>
      <div className="space-y-3">
        {/* Main Image / Video Vitrine */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group/img cursor-pointer select-none"
        >
          {isCurVideo ? (
            <video
              src={currentImg}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster={
                project.videoPoster?.[currentImg] ??
                validImgs.find((img) => !img.match(/\.(mp4|webm|mov)$/i))
              }
              className="object-cover w-full h-full group-hover/img:scale-105 transition-transform duration-700"
            />
          ) : (
            <Image
              src={currentImg}
              alt={project.title}
              fill
              loading="lazy"
              className="object-cover group-hover/img:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={75}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

          {/* Top Control Bar with Image Counter & Expand Button */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            {hasMultiple ? (
              <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#ebdca4] font-semibold flex items-center gap-1.5 shadow-md">
                <Layers className="w-3 h-3 text-[#d4af37]" />
                <span>0{activeIdx + 1} / 0{validImgs.length}</span>
              </span>
            ) : isCurVideo ? (
              <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#ebdca4] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>VIDEO PREVIEW</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300">
                PREVIEW
              </span>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="p-1.5 rounded-lg bg-black/75 hover:bg-black/95 backdrop-blur-md border border-white/20 text-white hover:text-[#ebdca4] transition-all cursor-pointer shadow-md"
              title="Fullscreen Lightbox"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bottom Inscription Ribbon */}
          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between z-10 shadow-lg">
            <div className="min-w-0 pr-2">
              <span className="font-serif-editorial text-sm text-white font-medium block truncate">
                {language === "zh" && project.roleZh ? project.roleZh : language === "id" && project.roleId ? project.roleId : project.role}
              </span>
              <span className="text-[11px] font-mono text-zinc-400 block truncate">
                {language === "zh" && project.clientZh ? project.clientZh : project.client || (language === "zh" ? "自主研发系统架构" : language === "id" ? "Arsitektur Sistem Mandiri" : "Proprietary Architecture")}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails Strip */}
        {hasMultiple && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {validImgs.map((img, idx) => {
              const isThumbVideo = isVideoAsset(img);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                    activeIdx === idx
                      ? "border-[#d4af37] ring-1 ring-[#d4af37] opacity-100 scale-105"
                      : "border-white/10 opacity-50 hover:opacity-100"
                  }`}
                >
                  {isThumbVideo ? (
                    <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center">
                      <video src={img} muted preload="none" className="object-cover w-full h-full opacity-60 pointer-events-none" />
                      <span className="absolute text-[8px] font-mono font-bold text-[#ebdca4] bg-black/80 px-1 py-0.5 rounded">
                        VIDEO
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={img}
                      alt={`${project.title} Preview ${idx + 1}`}
                      fill
                      loading="lazy"
                      sizes="64px"
                      quality={75}
                      className="object-cover"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* PORTAL LIGHTBOX MODAL */}
      {mounted && isLightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 sm:bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-xl z-20 cursor-pointer flex items-center justify-center"
              title="Gambar Sebelumnya (←)"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/70 sm:bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-xl z-20 cursor-pointer flex items-center justify-center"
              title="Gambar Berikutnya (→)"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="w-full flex items-center justify-between pb-3">
              <span className="font-mono text-xs text-[#ebdca4]">
                [ 0{activeIdx + 1} / 0{validImgs.length} ] · {project.category.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white cursor-pointer transition-colors"
                title={language === "zh" ? "关闭 (Esc)" : language === "id" ? "Tutup (Esc)" : "Close (Esc)"}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Viewport Box */}
            <div className="relative w-full h-[60vh] sm:h-[65vh] rounded-xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl flex items-center justify-center">
              {isVideoAsset(validImgs[activeIdx]) ? (
                <video
                  src={validImgs[activeIdx]}
                  controls
                  autoPlay
                  playsInline
                  preload="none"
                  poster={
                    project.videoPoster?.[validImgs[activeIdx]] ??
                    validImgs.find((img) => !img.match(/\.(mp4|webm|mov)$/i))
                  }
                  className="max-h-full max-w-full rounded-lg"
                />
              ) : (
                <Image
                  src={validImgs[activeIdx]}
                  alt={`${project.title} - Asset ${activeIdx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  quality={75}
                />
              )}
            </div>

            {/* Footer Information */}
            <div className="mt-4 text-center space-y-1 max-w-2xl px-2">
              <p className="font-serif-editorial text-lg sm:text-xl text-white font-medium">
                {language === "zh" && project.titleZh ? project.titleZh : language === "id" && project.titleId ? project.titleId : project.title}
              </p>
              <p className="font-mono text-xs sm:text-sm text-zinc-300">
                {language === "zh" && project.roleZh ? project.roleZh : language === "id" && project.roleId ? project.roleId : project.role} · {language === "zh" && project.clientZh ? project.clientZh : project.client || (language === "zh" ? "自主研发系统架构" : language === "id" ? "Arsitektur Sistem Mandiri" : "Proprietary Architecture")}
              </p>
              <p className="text-xs font-mono text-zinc-400 pt-1">
                {language === "zh"
                  ? "使用 ← / → 箭头或点击按钮切换 · [Esc] 关闭"
                  : language === "id"
                  ? "Gunakan panah ← / → atau klik tombol untuk navigasi · [Esc] untuk menutup"
                  : "Use ← / → keys or buttons to navigate · Press [Esc] to close"}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function CategoryShowcaseInner({ ecosystemId }: CategoryShowcaseClientProps) {
  const { language } = useLanguage();

  const ecosystem = categoryEcosystems.find((c) => c.id === ecosystemId) || categoryEcosystems[0];
  const allProjects = getCategoryShowcaseProjects(ecosystem.id);

  const categoryName =
    language === "id"
      ? ecosystem.categoryNameId
      : language === "zh"
      ? ecosystem.categoryNameZh
      : ecosystem.categoryName;

  const currentIdx = categoryEcosystems.findIndex((c) => c.id === ecosystem.id);
  const nextEcosystem = categoryEcosystems[(currentIdx + 1) % categoryEcosystems.length];
  const prevEcosystem = categoryEcosystems[(currentIdx - 1 + categoryEcosystems.length) % categoryEcosystems.length];

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#d4af37]/30 selection:text-[#ebdca4] relative">
      <CosmicAtmosphere />
      <MouseSpotlight />

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-20 relative z-10">
        
        {/* 1. Breadcrumb Navigation Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>{language === "zh" ? "首页" : language === "id" ? "Beranda" : "Home"}</span>
            </Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-white transition-colors">
              {language === "zh" ? "项目总览" : language === "id" ? "Proyek" : "Projects"}
            </Link>
            <span>/</span>
            <span className="text-[#d4af37] font-semibold">{categoryName}</span>
          </nav>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === "zh" ? "返回概览" : language === "id" ? "Kembali ke Overview" : "Back to Overview"}</span>
          </Link>
        </div>

        {/* 2. Category Hero Header */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#111114] via-[#141418] to-[#0c0c10] border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs font-mono uppercase tracking-widest text-[#ebdca4] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{language === "zh" ? `领域 0${currentIdx + 1} / 05` : language === "id" ? `BIDANG 0${currentIdx + 1} / 05` : `DISCIPLINE 0${currentIdx + 1} / 05`}</span>
            </div>

            <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight">
              {categoryName}
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              {language === "zh"
                ? `关于 ${categoryName} 领域的工程实践与系统架构归档。以下每个项目均详细记载了核心系统架构、技术栈以及具体的工程成果。`
                : language === "id"
                ? `Dokumentasi dan arsip portofolio implementasi sistem dalam bidang ${categoryName}. Setiap proyek di bawah ini memuat rincian arsitektur, teknologi, dan pencapaian teknis nyata.`
                : `Portfolio documentation of systems engineering in ${categoryName}. Every project below outlines the core architecture, tech stack, and practical deliverables.`}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="text-[#ebdca4] font-semibold">
                {allProjects.length} {language === "zh" ? "项系统实现与工程项目" : language === "id" ? "Proyek & Implementasi Sistem" : "Systems & Projects"}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Detailed Showcases for Every Project in this Category */}
        <div className="space-y-28">
          {allProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="pt-10 pb-6 border-t border-white/10 relative group overflow-visible space-y-8"
              >
                {/* Project Header Bar */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#ebdca4] bg-[#d4af37]/20 border border-[#d4af37]/50 px-3.5 py-1 rounded-full tracking-widest shadow-sm">
                      0{idx + 1} / 0{allProjects.length}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest hidden sm:inline font-semibold">
                      // {categoryName.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest hidden md:inline">
                      {project.year}
                    </span>
                    <span className="font-serif-editorial text-2xl text-white/30 tracking-widest select-none">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Main 2-Column Editorial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  
                  {/* Column 1: Typographic Hierarchy, Narrative & Deliverables */}
                  <div
                    className={`space-y-6 ${
                      isEven ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
                    }`}
                  >
                    {/* Role & Date Subhead */}
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-semibold text-[#d4af37] uppercase tracking-widest block">
                        {language === "zh" && project.roleZh ? project.roleZh : language === "id" && project.roleId ? project.roleId : project.role}
                      </span>
                      <span className="font-mono text-xs text-zinc-400 block">
                        {language === "zh" && project.clientZh ? project.clientZh : project.client ? project.client : "Proprietary Architecture"} · {project.year}
                      </span>
                    </div>

                    {/* Master Headline */}
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                      {language === "zh" && project.titleZh ? project.titleZh : language === "id" && project.titleId ? project.titleId : project.title}
                    </h2>

                    {/* Tagline */}
                    <p className="font-mono text-sm sm:text-base text-[#ebdca4] leading-relaxed font-medium">
                      {language === "zh" && project.taglineZh ? project.taglineZh : language === "id" && project.taglineId ? project.taglineId : project.tagline}
                    </p>

                    {/* Narrative Description */}
                    <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed">
                      {language === "zh" && project.descriptionZh ? project.descriptionZh : language === "id" && project.descriptionId ? project.descriptionId : project.description}
                    </p>

                    {/* Deliverables Highlights List */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block font-semibold">
                          {language === "zh" ? "核心产出与成果" : language === "id" ? "PENCAPAIAN & DELIVERABLE" : "KEY DELIVERABLES"}
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-zinc-200 font-light">
                          {(language === "zh" && project.highlightsZh ? project.highlightsZh : language === "id" && project.highlightsId ? project.highlightsId : project.highlights).map(
                            (hl, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="text-[#d4af37] mt-0.5 shrink-0">✦</span>
                                <span className="leading-relaxed">{hl}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {(language === "zh" && project.techStackZh
                        ? project.techStackZh
                        : language === "id" && project.techStackId
                        ? project.techStackId
                        : project.techStack
                      ).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-200 font-medium"
                        >
                          {translateTech(tech, language)}
                        </span>
                      ))}
                    </div>

                    {/* Action Callouts */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      {project.demoLinks && project.demoLinks.length > 0 ? (
                        project.demoLinks.map((demo, dIdx) => (
                          <a
                            key={dIdx}
                            href={demo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#d4af37]/50 text-white hover:text-[#ebdca4] font-mono text-xs uppercase tracking-wider transition-all duration-300 font-semibold"
                          >
                            <span>
                              {language === "zh" && demo.labelZh
                                ? demo.labelZh
                                : language === "id" && demo.labelId
                                ? demo.labelId
                                : translateActionLabel(demo.label, language)}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                          </a>
                        ))
                      ) : (
                        project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#d4af37]/50 text-white hover:text-[#ebdca4] font-mono text-xs uppercase tracking-wider transition-all duration-300 font-semibold"
                          >
                            <span>{language === "zh" ? "在线演示" : language === "id" ? "Demo Langsung" : "Live Demo"}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                          </a>
                        )
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#d4af37]/50 text-white hover:text-[#ebdca4] font-mono text-xs uppercase tracking-wider transition-all duration-300 font-semibold"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{language === "zh" ? "GitHub 源码仓库" : language === "id" ? "Repositori GitHub" : "GitHub Repository"}</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Visual Vitrine / Media & Metric Inscription Cards */}
                  <div
                    className={`space-y-4 ${
                      isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
                    }`}
                  >
                    {/* Media Container: Photo Vitrine */}
                    <ProjectMediaVitrine project={project} />

                    {/* Metric Inscription Cards */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                        {project.metrics.map((m, mIdx) => {
                          const label = language === "zh" && m.labelZh ? m.labelZh : language === "id" ? m.labelId : m.label;
                          const val = language === "zh" && m.valueZh ? m.valueZh : language === "id" && m.valueId ? m.valueId : m.value;

                          return (
                            <div
                              key={mIdx}
                              title={`${label}: ${val}`}
                              className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#d4af37]/30 transition-all text-xs font-mono space-y-1"
                            >
                              <span className="text-[#d4af37] block font-semibold uppercase text-[10px] tracking-wider truncate">
                                {label}
                              </span>
                              <span className="text-white text-xs sm:text-sm font-bold block leading-snug break-words">
                                {val}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* 4. Next & Previous Category Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-16 border-t border-white/10">
          <Link
            href={`/projects/${prevEcosystem.id}`}
            className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                {language === "zh" ? "上一领域" : language === "id" ? "Kategori Sebelumnya" : "Previous Discipline"}
              </span>
              <span className="font-serif-editorial text-xl text-white group-hover:text-[#d4af37] transition-colors font-medium">
                {language === "zh" ? prevEcosystem.categoryNameZh : language === "id" ? prevEcosystem.categoryNameId : prevEcosystem.categoryName}
              </span>
            </div>
            <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:-translate-x-1 transition-transform" />
          </Link>

          <Link
            href={`/projects/${nextEcosystem.id}`}
            className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group text-right"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                {language === "zh" ? "下一领域" : language === "id" ? "Kategori Selanjutnya" : "Next Discipline"}
              </span>
              <span className="font-serif-editorial text-xl text-white group-hover:text-[#d4af37] transition-colors font-medium">
                {language === "zh" ? nextEcosystem.categoryNameZh : language === "id" ? nextEcosystem.categoryNameId : nextEcosystem.categoryName}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export function CategoryShowcaseClient({ ecosystemId }: CategoryShowcaseClientProps) {
  return (
    <LanguageProvider>
      <PageTransitionProvider>
        <CategoryShowcaseInner ecosystemId={ecosystemId} />
      </PageTransitionProvider>
    </LanguageProvider>
  );
}
