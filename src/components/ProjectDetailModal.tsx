"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/data/projects";
import { X, ExternalLink, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Terminal, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectLightboxViewer } from "@/components/ProjectLightboxViewer";
import { ProjectAudioVitrine } from "@/components/ProjectAudioVitrine";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { language } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (project) {
      setActiveImageIndex(0);
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && !lightboxOpen) onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [project, onClose, lightboxOpen]);

  if (!mounted || !project) return null;

  const validImages = (project.images || []).filter(
    (img): img is string => typeof img === "string" && img.trim().length > 0
  );

  const images = validImages.length > 0
    ? validImages
    : ["/assets/projects/secret-of-life/white_desk.png"];

  const safeIndex =
    activeImageIndex >= 0 && activeImageIndex < images.length
      ? activeImageIndex
      : 0;
  const currentImageSrc = images[safeIndex] || "/assets/projects/secret-of-life/white_desk.png";

  return createPortal(
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl bg-[#111114] border border-[#d4af37]/30 shadow-2xl p-4 sm:p-8 space-y-5 sm:space-y-7 max-h-[92vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4 sm:pb-5">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 text-[#ebdca4] font-mono text-xs uppercase tracking-wider border border-[#d4af37]/30 font-semibold">
                    {project.year} · {project.category.toUpperCase()}
                  </span>
                  <span className="text-zinc-500 font-mono text-xs">/</span>
                  <span className="text-zinc-400 font-mono text-xs">
                    {language === "zh" && project.roleZh ? project.roleZh : language === "id" ? project.roleId : project.role}
                  </span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-4xl text-white font-medium">
                  {language === "zh" && project.titleZh ? project.titleZh : language === "id" ? project.titleId : project.title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/10 shrink-0 ml-2"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Hero Preview & Carousel / Audio Vitrine */}
            <div className="space-y-3">
              {project.audioTracks && project.audioTracks.length > 0 ? (
                <ProjectAudioVitrine project={project} />
              ) : (
                <>
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 group">
                    {currentImageSrc.toLowerCase().endsWith(".mp4") ||
                    currentImageSrc.toLowerCase().endsWith(".webm") ||
                    currentImageSrc.toLowerCase().endsWith(".mov") ? (
                      <video
                        src={currentImageSrc}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={currentImageSrc}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 850px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                        quality={75}
                      />
                    )}

                    {/* Fullscreen Zoom Trigger Button */}
                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-xl bg-black/75 hover:bg-black/90 text-white border border-white/20 transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 flex items-center gap-1.5 sm:gap-2 text-xs font-mono cursor-pointer shadow-md z-10"
                      title="Expand to Fullscreen Lightbox"
                    >
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37]" />
                      <span>ZOOM</span>
                    </button>

                    {/* Left / Right Carousel Chevrons */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer z-10"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer z-10"
                          aria-label="Next Image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  {images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto py-1">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                            safeIndex === idx
                              ? "border-[#d4af37] ring-1 ring-[#d4af37]"
                              : "border-white/10 opacity-60 hover:opacity-100"
                          }`}
                        >
                          {img.toLowerCase().endsWith(".mp4") ? (
                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                              <span className="text-[9px] font-mono text-[#ebdca4] font-bold">VIDEO</span>
                            </div>
                          ) : (
                            <Image
                              src={img || currentImageSrc}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              loading="lazy"
                              sizes="80px"
                              quality={75}
                              className="object-cover"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Structured Dossier Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* DESCRIPTION & ARCHITECTURAL SUMMARY */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="font-mono text-xs text-[#d4af37] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {language === "zh" ? "架构摘要与技术概述" : language === "id" ? "RINGKASAN ARSITEKTUR" : "ARCHITECTURAL SUMMARY"}
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {language === "zh" && project.descriptionZh ? project.descriptionZh : language === "id" ? project.descriptionId || project.taglineId : project.description || project.tagline}
                </p>
                {project.client && (
                  <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-zinc-500">
                      {language === "zh" ? "归属企业 / 委托方:" : language === "id" ? "KLIEN / AFILIASI:" : "CLIENT / AFFILIATION:"}
                    </span>
                    <span className="text-[#ebdca4]">
                      {language === "zh" && project.clientZh ? project.clientZh : project.client}
                    </span>
                  </div>
                )}
              </div>

              {/* ENGINEERING HIGHLIGHTS & ARCHITECTURE */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="font-mono text-xs text-[#ebdca4] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Terminal className="w-3.5 h-3.5 text-[#d4af37]" />
                  {language === "zh" ? "核心工程亮点" : language === "id" ? "SOROTAN REKAYASA SISTEM" : "ENGINEERING HIGHLIGHTS"}
                </span>
                <div className="space-y-2">
                  {(language === "zh" && project.highlightsZh ? project.highlightsZh : language === "id" ? project.highlightsId : project.highlights).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-light leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* BLUEPRINT SYSTEM FLOW IF AVAILABLE */}
            {project.blueprintFlow && project.blueprintFlow.length > 0 && (
              <div className="p-5 rounded-2xl bg-[#09090b] border border-[#d4af37]/20 space-y-3">
                <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  {language === "zh" ? "系统蓝图执行流" : language === "id" ? "ALUR BLUEPRINT SISTEM" : "SYSTEM BLUEPRINT FLOW"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {project.blueprintFlow.map((step, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-xs font-mono text-[#d4af37] block font-bold">
                        {language === "zh" ? `步骤 0${sIdx + 1}` : language === "id" ? `LANGKAH 0${sIdx + 1}` : `STEP 0${sIdx + 1}`}
                      </span>
                      <h5 className="font-mono text-xs text-white font-medium">
                        {language === "zh" && step.stepZh ? step.stepZh : language === "id" ? step.stepId : step.step}
                      </h5>
                      <p className="text-xs text-zinc-300 font-light leading-snug">
                        {language === "zh" && step.detailZh ? step.detailZh : language === "id" ? step.detailId : step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TECH STACK CHIPS */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block font-medium">
                {language === "zh" ? "已验证核心技术栈" : language === "id" ? "STACK TEKNOLOGI TERVERIFIKASI" : "VERIFIED TECH STACK"}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-200 hover:border-[#d4af37]/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#d4af37] hover:bg-[#ebdca4] text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-colors shadow-lg cursor-pointer"
                  >
                    <span>{language === "zh" ? "访问生产级实装" : language === "id" ? "KUNJUNGI SISTEM LIVE" : "LIVE PRODUCTION"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{language === "zh" ? "代码仓库" : language === "id" ? "REPOSITORI KODE" : "REPOSITORY"}</span>
                  </a>
                )}
              </div>

              <span className="text-xs font-mono text-zinc-400 font-medium">
                {language === "zh" ? "已审计与实证 · iSTTS 理学学士 (S.Kom.)" : language === "id" ? "TERVERIFIKASI & TER-AUDIT · S.KOM iSTTS" : "AUDITED & VERIFIED · S.KOM iSTTS"}
              </span>
            </div>

          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Lightbox Image Viewer */}
      <ProjectLightboxViewer
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        initialIndex={activeImageIndex}
        projectTitle={project.title}
      />
    </>,
    document.body
  );
}
