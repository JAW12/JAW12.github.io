"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  flagshipProjects,
  categoryEcosystems,
  comprehensiveCategoryProjects,
  ProjectItem,
} from "@/data/projects";
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Maximize2,
  X,
} from "lucide-react";
import Link from "next/link";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";
import { ScrollReveal } from "@/components/ScrollReveal";

const projectAssetCaptions: Record<string, { en: string; id: string; zh: string }[]> = {
  "secret-of-life": [
    {
      en: "Offset Print Gold-Foil Hardcover — Executive White Desk Edition",
      id: "Sampul Hardcover Foil Emas Standar Cetak Offset — Edisi Meja Eksekutif",
      zh: "符合胶印标准的烫金精装书封面 — 典雅白色展示台实拍",
    },
    {
      en: "Luxury Black Marble Layout Showcase — Custom Foil Typography",
      id: "Tata Letak Edisi Marmer Hitam Mewah — Tipografi Foil Emas Kustom",
      zh: "黑色大理石豪华排版展示 — 高精度定制烫金字体设计",
    },
    {
      en: "150+ Page Compilation Layout Generated via Multi-Stage AI Pipeline",
      id: "Kompilasi 150+ Halaman Otomatis dari Pipeline Python & Prompt LLM",
      zh: "基于多阶段 AI 编排管线全自动编译生成的 150+ 页书籍内页排版",
    },
    {
      en: "Close-Up Geometric Spine Binding & Foil Precision Calibration",
      id: "Detail Geometri Punggung Buku & Kalibrasi Presisi Foil Emas",
      zh: "书脊几何装订线与烫金工艺高精校准特写",
    },
    {
      en: "Hermes CLI Deterministic Orchestrator Command Center & Agent State Monitor",
      id: "Pusat Komando Orkestrator Deterministik Hermes & Monitor State Agen",
      zh: "Hermes CLI 确定性智能体编排指挥中枢与状态监控看板",
    },
    {
      en: "Hermes Multi-Stage Synthesis Engine & Automated Chapter Assembly Queue",
      id: "Engine Sintesis Multi-Tahap Hermes & Antrean Kompilasi Bab Otomatis",
      zh: "Hermes 多阶段合成引擎与自动化章节装配执行队列",
    },
    {
      en: "Hermes Core Agent System Architecture & Deterministic Workflow Execution",
      id: "Arsitektur Sistem Agen Hermes & Eksekusi Alur Kerja Deterministik",
      zh: "Hermes 核心智能体系统架构与确定性工作流执行界面",
    },
  ],
  "cocokga": [
    {
      en: "Multi-Dimensional Compatibility Analysis & Affinity Index Breakdown",
      id: "Rincian Analisis Kompatibilitas Multi-Dimensi & Indeks Afinitas Pasangan",
      zh: "多维契合度深度分析报告与亲和度指数解析看板",
    },
    {
      en: "Arcade Mode Scoring Engine — Instant Client-Side Computation (<15ms)",
      id: "Engine Penilaian Mode Arcade — Komputasi Sisi Klien Instan (<15ms)",
      zh: "街机模式即时评分引擎 — 纯前端本地瞬时计算 (<15ms)",
    },
    {
      en: "Official CocokGa Brand Mark & Algorithmic Emblem",
      id: "Identitas Merek Resmi & Emblem Algoritmik CocokGa",
      zh: "CocokGa 官方品牌标识与算法架构徽标",
    },
  ],
  "nangka-premium": [
    {
      en: "Export-Grade Vacuum-Sealed Jackfruit Single Packaging Render",
      id: "Render Kemasan Vakum Nilon Food-Grade Nangka Tunggal Berstandar Ekspor",
      zh: "出口级食品级尼龙单袋真空速冻菠萝蜜包装三维渲染",
    },
    {
      en: "Bulk Commercial Wholesale Case Packaging (-18°C Cold-Chain Logistics)",
      id: "Kemasan Karton Distribusi Grosir Komersial (Logistik Rantai Dingin -18°C)",
      zh: "大宗商业批发箱装规格包装设计 (-18°C 全程温控冷链物流)",
    },
    {
      en: "Official PT. Karya Buah Tropis Corporate Digital B2B Showcase",
      id: "Portal Digital Showcase B2B Resmi PT. Karya Buah Tropis",
      zh: "PT. Karya Buah Tropis 官方企业级 B2B 数字化展示门户",
    },
  ],
  "catatcrypto": [
    {
      en: "Master Portfolio Dashboard — Real-Time Equity Valuation & Holdings Distribution",
      id: "Dashboard Utama Portofolio — Valuasi Ekuitas Real-Time & Distribusi Aset",
      zh: "主资产控制看板 — 实时权益资产估值与多币种持仓分布分布",
    },
    {
      en: "Multi-Exchange Crypto Wallet — Weighted DCA Cost Averaging & Balance Tracking",
      id: "Dompet Kripto Multi-Bursa — Kalkulasi DCA Rata-Rata Tertimbang & Saldo",
      zh: "多交易所加密钱包 — 加权 DCA 定投持仓均价与资产余额跟踪",
    },
    {
      en: "Live Market Intelligence Hub — Multi-Asset Tickers & Volume Analytics",
      id: "Pusat Intelijen Pasar — Ticker Multi-Aset & Analisis Volume Perdagangan",
      zh: "实时市场行情中枢 — 多资产实时价格走势与量价异动分析",
    },
    {
      en: "Technical Indicators & Quantitative Risk Suite — Drawdown & Win-Rate Models",
      id: "Indikator Teknikal & Analitik Risiko — Model Drawdown & Kalkulasi Win-Rate",
      zh: "技术指标与量化风控套件 — 最大回撤模型与胜率盈亏比量化分析",
    },
    {
      en: "Undergraduate Thesis Defense Grade A Poster — iSTTS S1 Academic Research",
      id: "Poster Sidang Skripsi Nilai A Sempurna — Riset Akademik S1 iSTTS",
      zh: "本科毕业设计满分 A 答辩官方学术海报 — iSTTS 商业信息系统专业学术成果",
    },
  ],
  "nasi-goreng-janok": [
    {
      en: "Greaseproof Food-Grade Die-Cut Takeaway Packaging (Glue-Free Lock Tabs)",
      id: "Pola Pisau Kemasan Dus Takeaway Anti-Minyak Food-Grade (Kunci Tanpa Lem)",
      zh: "食品级防油免胶锁扣外卖纸盒刀版结构设计（环保透气防软化）",
    },
    {
      en: "Official 26-Branch Franchise Partnership & ROI Investment Brochure",
      id: "Brosur Resmi Penawaran Kemitraan Waralaba 26 Cabang & Simulasi ROI/BEP",
      zh: "26家连锁加盟门店官方招商加盟投资手册与 ROI 回本测算模型",
    },
    {
      en: "Standardized Multi-Tier Spice Level Taxonomy & Restaurant Menu Engineering",
      id: "Menu Engineering Terstandarisasi & Taksonomi Tingkat Pedas Bertingkat",
      zh: "标准化分级辣度体系与连锁餐饮工程化菜单架构",
    },
    {
      en: "Official Jan'Ok Flame-Wok Brand Mark & Visual Identity System",
      id: "Logo Resmi Wajan Berapi & Sistem Identitas Visual Merek Jan'Ok",
      zh: "Jan'Ok 烈焰铁锅官方品牌标识与全套视觉识别系统 (VI)",
    },
  ],
};

interface ProjectMediaCarouselProps {
  projectId: string;
  images: string[];
  title: string;
  role?: string;
  roleId?: string;
  roleZh?: string;
  client?: string;
  clientZh?: string;
  categoryName?: string;
  language: string;
}

function ProjectMediaCarousel({
  projectId,
  images,
  title,
  role,
  roleId,
  roleZh,
  client,
  clientZh,
  categoryName,
  language,
}: ProjectMediaCarouselProps) {
  const validImages = images.filter((img) => typeof img === "string" && img.trim().length > 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasMultiple = validImages.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handlePrev();
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleNext();
  };

  const goToSlide = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(idx);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  // Keyboard navigation & body scroll lock for Lightbox
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
  }, [isLightboxOpen, validImages.length]);

  if (validImages.length === 0) {
    return (
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 font-mono text-xs">
        No preview available
      </div>
    );
  }

  const captions = projectAssetCaptions[projectId] || [];
  const activeCaptionObj = captions[currentIndex];
  const activeCaption = activeCaptionObj
    ? language === "zh"
      ? activeCaptionObj.zh
      : language === "id"
      ? activeCaptionObj.id
      : activeCaptionObj.en
    : null;

  return (
    <>
      <div
        onClick={openLightbox}
        className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl group/carousel select-none cursor-pointer"
      >
        {/* Animated Image Viewport */}
        {validImages.map((img, idx) => {
          const isNearby =
            idx === currentIndex ||
            Math.abs(idx - currentIndex) <= 1 ||
            (currentIndex === 0 && idx === validImages.length - 1) ||
            (currentIndex === validImages.length - 1 && idx === 0);
          if (!isNearby) return null;
          return (
            <div
              key={img + idx}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                idx === currentIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10"
              }`}
            >
              <Image
                src={img}
                alt={`${title} - Asset ${idx + 1}`}
                fill
                className="object-cover group-hover/carousel:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
                loading={idx === 0 ? "eager" : "lazy"}
                quality={75}
              />
            </div>
          );
        })}

        {/* Atmospheric Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none z-10" />

        {/* Top Badges: Counter + Expand Icon */}
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
          {hasMultiple && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono text-white/90 shadow-md">
              <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>
                0{currentIndex + 1} / 0{validImages.length}
              </span>
            </div>
          )}
          <button
            type="button"
            onClick={openLightbox}
            aria-label="Expand image in lightbox"
            className="p-1.5 rounded-full bg-black/65 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all shadow-md"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#ebdca4]" />
          </button>
        </div>

        {/* Left Navigation Chevron Button */}
        {hasMultiple && (
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 hover:border-[#d4af37]/60 backdrop-blur-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 active:scale-95 shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        )}

        {/* Right Navigation Chevron Button */}
        {hasMultiple && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 hover:border-[#d4af37]/60 backdrop-blur-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 active:scale-95 shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        )}

        {/* Bottom Inscription Ribbon + Pagination Indicators */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 z-20 flex items-center justify-between gap-3 shadow-lg">
          <div className="min-w-0 pr-2">
            <span className="font-serif-editorial text-sm sm:text-base text-white font-medium block truncate">
              {language === "zh" && roleZh ? roleZh : language === "id" && roleId ? roleId : role}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-300 block truncate">
              {language === "zh" && clientZh ? clientZh : client || "Proprietary Architecture"}
            </span>
          </div>

          {/* Clickable Pill/Dot Carousel Indicators */}
          {hasMultiple && (
            <div className="flex items-center gap-1.5 shrink-0 bg-white/5 px-2.5 py-1.5 rounded-full border border-white/10">
              {validImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => goToSlide(dotIdx, e)}
                  aria-label={`Jump to image ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex
                      ? "w-5 bg-[#d4af37] shadow-[0_0_8px_#d4af37]"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* PORTAL LIGHTBOX MODAL (Matching Certificates Lightbox Architecture) */}
      {mounted && isLightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Previous Button */}
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

          {/* Next Button */}
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
            {/* Header Inscription */}
            <div className="w-full flex items-center justify-between pb-3">
              <span className="font-mono text-xs text-[#ebdca4]">
                [ 0{currentIndex + 1} / 0{validImages.length} ] · {categoryName ? categoryName.toUpperCase() : "PROJECT EXHIBITION"}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white cursor-pointer transition-colors"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Viewport Box */}
            <div className="relative w-full h-[60vh] sm:h-[65vh] rounded-xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl">
              <Image
                src={validImages[currentIndex]}
                alt={`${title} - Asset ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                quality={75}
              />
            </div>

            {/* Contextual Technical Caption & Details */}
            <div className="mt-4 text-center space-y-1.5 max-w-2xl px-2">
              <p className="font-serif-editorial text-lg sm:text-xl text-white font-medium">
                {title}
              </p>
              <p className="font-mono text-xs sm:text-sm text-zinc-300">
                {language === "zh" && roleZh ? roleZh : language === "id" && roleId ? roleId : role} · {language === "zh" && clientZh ? clientZh : client || "Proprietary Architecture"}
              </p>
              {activeCaption && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-xs font-mono text-[#ebdca4] font-medium mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{activeCaption}</span>
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
    </>
  );
}

function ProjectWatermarkPlanet({ idx, isEven }: { idx: number; isEven: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], isEven ? [-70, 70] : [70, -70]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], isEven ? [-12, 12] : [12, -12]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y: parallaxY, rotate: parallaxRotate }}
      aria-hidden="true"
      className={`absolute top-1/6 ${
        isEven
          ? "-right-8 sm:-right-20 md:-right-28 lg:-right-36 xl:-right-48"
          : "-left-8 sm:-left-20 md:-left-28 lg:-left-36 xl:-left-48"
      } w-80 sm:w-[460px] lg:w-[540px] h-80 sm:h-[460px] lg:h-[540px] pointer-events-none select-none opacity-[0.25] group-hover:opacity-[0.45] transition-all duration-700 -z-0 flex items-center justify-center will-change-transform transform-gpu`}
    >
      {/* Continuous Organic Floating Physics Container */}
      <div
        className={`w-full h-full flex items-center justify-center ${
          isEven
            ? "[animation:floatingPlanet_14s_ease-in-out_infinite]"
            : "[animation:floatingPlanetAlt_16s_ease-in-out_infinite_1.5s]"
        }`}
      >
        {/* PROJECT 01: URANUS (AI & Automation - The Secret of Life) */}
        {idx === 0 && (
          <div className="relative w-52 sm:w-72 h-52 sm:h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[35px]" />
            <div className="relative w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-tr from-[#031522] via-[#092d47] to-cyan-300/70 border border-cyan-400/50 shadow-[inset_-20px_-20px_45px_rgba(0,0,0,0.95),0_0_40px_rgba(6,182,212,0.35)] overflow-hidden">
              <div className="absolute top-[28%] inset-x-0 h-3 bg-cyan-200/15 rotate-[82deg]" />
              <div className="absolute top-[48%] inset-x-0 h-4 bg-sky-400/15 rotate-[82deg]" />
              <div className="absolute top-[68%] inset-x-0 h-2 bg-teal-300/15 rotate-[82deg]" />
            </div>
            {/* Steep Vertical Tilted Ring of Uranus (82° axial tilt) */}
            <div className="absolute -inset-10 sm:-inset-14 rounded-[100%] border-2 border-cyan-300/40 rotate-[82deg] shadow-[0_0_15px_rgba(6,182,212,0.25)]" />
            <div className="absolute -inset-5 sm:-inset-8 rounded-[100%] border border-dashed border-sky-200/30 rotate-[82deg]" />
            <div className="absolute top-3 left-8 w-2.5 h-2.5 rounded-full bg-cyan-100 shadow-[0_0_8px_#38bdf8]" />
          </div>
        )}

        {/* PROJECT 02: SATURNUS (Software Development - CocokGa V4.0) */}
        {idx === 1 && (
          <div className="relative w-52 sm:w-72 h-52 sm:h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-[35px]" />
            <div className="relative w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-tr from-[#0e0903] via-[#2c1d08] to-[#ffd875]/70 border border-amber-400/45 shadow-[inset_-22px_-22px_45px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.3)] overflow-hidden">
              <div className="absolute top-[32%] inset-x-0 h-3 bg-amber-200/10 rotate-[-22deg]" />
              <div className="absolute top-[48%] inset-x-0 h-4 bg-amber-400/15 rotate-[-22deg]" />
              <div className="absolute top-[62%] inset-x-0 h-2 bg-amber-300/10 rotate-[-22deg]" />
            </div>
            {/* Majestic Golden Dual Accretion Rings */}
            <div className="absolute -inset-10 sm:-inset-14 rounded-[100%] border-2 border-amber-300/45 rotate-[-22deg] shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
            <div className="absolute -inset-5 sm:-inset-8 rounded-[100%] border border-dashed border-amber-400/30 rotate-[-22deg]" />
            <div className="absolute top-2 right-6 w-3 h-3 rounded-full bg-amber-100 shadow-[0_0_8px_#ffd875]" />
          </div>
        )}

        {/* PROJECT 03: JUPITER (Business Development - Nangka Premium & PT. Karya Buah Tropis) */}
        {idx === 2 && (
          <div className="relative w-52 sm:w-72 h-52 sm:h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-amber-600/20 blur-[35px]" />
            <div className="relative w-42 sm:w-60 h-42 sm:h-60 rounded-full bg-gradient-to-tr from-[#160a03] via-[#3a1d0c] to-amber-300/65 border border-amber-500/50 shadow-[inset_-24px_-24px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(245,158,11,0.35)] overflow-hidden">
              {/* Massive Horizontal Storm Bands */}
              <div className="absolute top-[22%] inset-x-0 h-3 bg-amber-950/45 rotate-[1.5deg]" />
              <div className="absolute top-[36%] inset-x-0 h-4 bg-orange-900/35 rotate-[2deg]" />
              <div className="absolute top-[52%] inset-x-0 h-3.5 bg-amber-900/40 rotate-[1deg]" />
              <div className="absolute top-[68%] inset-x-0 h-3 bg-amber-950/50 rotate-[2deg]" />
              
              {/* Great Red Spot Storm Vortex */}
              <div className="absolute bottom-8 right-10 w-7 h-5 rounded-full bg-orange-600/60 blur-[1px] border border-orange-400/40 shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
            </div>
            <div className="absolute -inset-8 sm:-inset-12 rounded-full border border-dashed border-amber-300/30" />
            <div className="absolute -inset-12 sm:-inset-16 rounded-[100%] border border-amber-400/20 rotate-[28deg]" />
          </div>
        )}

        {/* PROJECT 04: MERKURIUS (Market Research & Data Analysis - CatatCrypto) */}
        {idx === 3 && (
          <div className="relative w-52 sm:w-72 h-52 sm:h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-slate-400/15 blur-[35px]" />
            <div className="relative w-36 sm:w-52 h-36 sm:h-52 rounded-full bg-gradient-to-tr from-[#080b12] via-[#1a2336] to-slate-200/70 border border-slate-300/45 shadow-[inset_-20px_-20px_45px_rgba(0,0,0,0.95),0_0_30px_rgba(148,163,184,0.3)] overflow-hidden">
              {/* Precision Crater Formations */}
              <div className="absolute top-6 left-8 w-5 h-5 rounded-full border border-slate-400/40 bg-black/40" />
              <div className="absolute bottom-8 right-12 w-7 h-7 rounded-full border border-cyan-400/30 bg-black/50" />
              <div className="absolute top-14 right-8 w-4 h-4 rounded-full border border-slate-400/30 bg-black/40" />
            </div>
            {/* Precision Coordinate Crosshairs & Reticles */}
            <div className="absolute -inset-10 sm:-inset-14 rounded-[100%] border-2 border-slate-300/35 rotate-[45deg] shadow-[0_0_15px_rgba(148,163,184,0.2)]" />
            <div className="absolute -inset-5 sm:-inset-8 rounded-[100%] border border-dashed border-cyan-300/30 rotate-[-45deg]" />
            <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_6px_#38bdf8]" />
          </div>
        )}

        {/* PROJECT 05: VENUS (Multimedia & Brand Design - Nasi Goreng Jan'Ok) */}
        {idx === 4 && (
          <div className="relative w-52 sm:w-72 h-52 sm:h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-[35px]" />
            <div className="relative w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-tr from-[#140602] via-[#351404] to-amber-200/80 border border-amber-400/60 shadow-[inset_-22px_-22px_45px_rgba(0,0,0,0.95),0_0_45px_rgba(251,191,36,0.4)] overflow-hidden">
              {/* Luminous Sulfuric Atmosphere Mantle */}
              <div className="absolute top-4 inset-x-4 h-5 bg-amber-300/20 blur-[2px] rotate-[-12deg]" />
              <div className="absolute top-1/2 inset-x-6 h-6 bg-amber-400/25 blur-[3px] rotate-[-8deg]" />
              <div className="absolute bottom-8 inset-x-6 h-4 bg-orange-400/20 blur-[2px] rotate-[-15deg]" />
            </div>
            <div className="absolute -inset-10 sm:-inset-14 rounded-[100%] border-2 border-amber-300/40 rotate-[-18deg] shadow-[0_0_15px_rgba(245,158,11,0.25)]" />
            <div className="absolute -inset-6 sm:-inset-9 rounded-[100%] border border-dashed border-amber-200/30 rotate-[-18deg]" />
            <div className="absolute bottom-3 left-6 w-3 h-3 rounded-full bg-amber-100 shadow-[0_0_8px_#ffd875]" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
  const { language, t } = useLanguage();

  // 5 Canonical Flagship Projects representing 5 Core Disciplines & Celestial Themes
  const allEditorialProjects: ProjectItem[] = [...flagshipProjects];

  return (
    <section id="projects" className="scroll-mt-24 py-24 relative overflow-x-clip bg-transparent">
      {/* Wing 03: Interstellar Earth Terrestrial Orbit & Deep Vault with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="nebula" />
      
      {/* Subtle Ambient Radial Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d4af37]/[0.03] blur-[150px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[450px] bg-[#d4af37]/[0.02] blur-[160px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. SECTION HEADER (Architectural Chapter Marker: / PROJECTS · 03/08) */}
        <ScrollReveal>
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.045] select-none pointer-events-none tracking-widest blur-[1px]">
              PROJECTS
            </span>
            <div className="space-y-4 max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono uppercase tracking-widest text-[#ebdca4] font-semibold">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span>{t.featuredProjects.sectionTag}</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-serif-editorial text-6xl sm:text-8xl font-light text-[#d4af37] leading-none select-none">
                  /
                </span>
                <h2 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl font-normal text-white uppercase tracking-tight leading-none">
                  PROJECTS
                </h2>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {language === "id"
                  ? "5 rumpun rekayasa sistem terverifikasi: AI & Otomasi, Rekayasa Perangkat Lunak, Ekspansi Bisnis, Riset Pasar Kuantitatif, dan Desain Komunikasi Visual."
                  : language === "zh"
                  ? "五大经过实证审计的工程领域：人工智能与自动化、软件工程、商业拓展、量化市场研究与品牌多媒体设计。"
                  : "5 verified systems engineering disciplines: AI & Automation, Software Development, Business Operations, Quantitative Market Research, and Multimedia Brand Design."}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="font-mono text-sm sm:text-base text-zinc-400 tracking-widest block font-medium">
                03 / 06
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#ebdca4] uppercase tracking-wider font-semibold">
                {language === "id" ? "5 RUMPUN PROYEK" : language === "zh" ? "五大工程体系" : "5 CORE DISCIPLINES"}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. CURATED EDITORIAL SPREADS EXHIBITION */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36 pt-4">
          {allEditorialProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const ecosystem = categoryEcosystems.find(
              (c) => c.featuredId === project.id || c.id === project.category
            ) || categoryEcosystems[idx];

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="scroll-mt-24 pt-12 pb-8 border-t border-white/10 relative group overflow-visible"
              >
                {/* 1. BESPOKE CELESTIAL WATERMARK PLANET OVERLAY FLANKING LEFT/RIGHT (With Smooth Parallax Scroll Motion) */}
                <ProjectWatermarkPlanet idx={idx} isEven={isEven} />

                {/* 2. Architectural Project Header Bar: Clean Category Badge & Production Year */}
                <ScrollReveal variant="telemetry">
                  <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#ebdca4] bg-[#d4af37]/20 border border-[#d4af37]/50 px-3.5 py-1 rounded-full tracking-widest shadow-sm">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-[#ebdca4] uppercase tracking-widest font-semibold">
                        // {ecosystem
                          ? language === "id"
                            ? ecosystem.categoryNameId
                            : language === "zh"
                            ? ecosystem.categoryNameZh
                            : ecosystem.categoryName
                          : project.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-medium">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                  
                  {/* COLUMN 1: Typographic Hierarchy, Narrative & Empirical Deliverables (5 cols) */}
                  <ScrollReveal
                    variant={isEven ? "stagger-left" : "stagger-right"}
                    className={`relative space-y-5 sm:space-y-6 ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-2"}`}
                  >
                    {/* Master Headline */}
                    <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.12] tracking-tight">
                      {language === "zh" && project.titleZh ? project.titleZh : language === "id" ? project.titleId : project.title}
                    </h3>

                    {/* Tagline & Subheading */}
                    <p className="font-mono text-sm sm:text-base text-[#ebdca4] leading-relaxed font-medium">
                      {language === "zh" && project.taglineZh ? project.taglineZh : language === "id" ? project.taglineId : project.tagline}
                    </p>

                    {/* Factual Narrative Paragraph */}
                    <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed">
                      {language === "zh" && project.descriptionZh ? project.descriptionZh : language === "id" ? project.descriptionId : project.description}
                    </p>

                    {/* Verified Deliverables List */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block font-semibold">
                          {t.common.verifiedDeliverables}
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-200 font-light">
                          {(language === "zh" && project.highlightsZh ? project.highlightsZh : language === "id" && project.highlightsId ? project.highlightsId : project.highlights)
                            .slice(0, 3)
                            .map((hl, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#d4af37] mt-0.5 shrink-0">✦</span>
                                <span>{hl}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links & Category Deep Link */}
                    <div className="pt-4 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#d4af37]/50 text-white hover:text-[#ebdca4] font-mono text-xs uppercase tracking-wider transition-all duration-300 font-semibold"
                          >
                            <span>{language === "zh" ? "在线演示" : language === "id" ? "DEMO LANGSUNG" : "LIVE DEMO"}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#d4af37]/50 text-white hover:text-[#ebdca4] font-mono text-xs uppercase tracking-wider transition-all duration-300 font-semibold"
                          >
                            <span>{language === "zh" ? "源码仓库" : language === "id" ? "KODE SUMBER" : "SOURCE CODE"}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                          </a>
                        )}
                      </div>

                      {/* Direct Inline Link to Category Showcase */}
                      {ecosystem && (
                        <div className="pt-2 border-t border-white/[0.06]">
                          <Link
                            href={`/projects/${ecosystem.id}`}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#ebdca4] hover:text-[#d4af37] transition-colors group/catlink font-medium"
                          >
                            <span>
                              {language === "id"
                                ? `Lihat seluruh proyek ${ecosystem.categoryNameId} (${comprehensiveCategoryProjects[ecosystem.id]?.length || (ecosystem.relatedProjects.length + 1)} Proyek)`
                                : language === "zh"
                                ? `查看所有 ${ecosystem.categoryNameZh} 项目 (${comprehensiveCategoryProjects[ecosystem.id]?.length || (ecosystem.relatedProjects.length + 1)} 个项目)`
                                : `View all ${ecosystem.categoryName} systems (${comprehensiveCategoryProjects[ecosystem.id]?.length || (ecosystem.relatedProjects.length + 1)} Projects)`}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover/catlink:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>

                  {/* COLUMN 2: Master Interactive Media Vitrine / Carousel + 3 Horizontal Metric Cards Underneath (7 cols) */}
                  <ScrollReveal
                    delay={0.14}
                    variant="vitrine-dock"
                    className={`space-y-4 ${isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7 lg:order-1"}`}
                  >
                    {/* Master Media Carousel Vitrine */}
                    <ProjectMediaCarousel
                      projectId={project.id}
                      images={project.images || []}
                      title={language === "zh" && project.titleZh ? project.titleZh : language === "id" ? project.titleId : project.title}
                      role={project.role}
                      roleId={project.roleId}
                      roleZh={project.roleZh}
                      client={project.client}
                      clientZh={project.clientZh}
                      categoryName={
                        ecosystem
                          ? language === "id"
                            ? ecosystem.categoryNameId
                            : language === "zh"
                            ? ecosystem.categoryNameZh
                            : ecosystem.categoryName
                          : project.category
                      }
                      language={language}
                    />

                    {/* 3 Horizontal Metric Inscription Cards Directly Underneath */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                        {project.metrics.slice(0, 3).map((metric, mIdx) => {
                          const label = language === "zh" && metric.labelZh ? metric.labelZh : language === "id" ? metric.labelId : metric.label;
                          const val = language === "zh" && metric.valueZh ? metric.valueZh : language === "id" && metric.valueId ? metric.valueId : metric.value;

                          return (
                            <div
                              key={mIdx}
                              title={`${label}: ${val}`}
                              className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#d4af37]/30 transition-all space-y-1 text-left"
                            >
                              <span className="text-[10px] sm:text-[11px] font-mono text-[#d4af37] uppercase tracking-wider block font-semibold truncate">
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
                  </ScrollReveal>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}


