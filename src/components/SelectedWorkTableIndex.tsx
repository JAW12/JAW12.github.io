"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";

interface TableProjectItem {
  id: string;
  name: string;
  nameId?: string;
  nameZh?: string;
  role: string;
  roleId?: string;
  roleZh?: string;
  year: string;
  category: string;
  categoryId?: string;
  categoryZh?: string;
  previewImage: string;
  metricBadge: string;
  metricBadgeId?: string;
  metricBadgeZh?: string;
  summary: string;
  summaryId: string;
  summaryZh?: string;
  liveUrl?: string;
}

export function SelectedWorkTableIndex() {
  const { language, t } = useLanguage();

  const projects: TableProjectItem[] = [
    {
      id: "secret-of-life",
      name: "The Secret of Life",
      nameId: "The Secret of Life",
      nameZh: "The Secret of Life",
      role: "Lead Systems Architect & Packaging",
      roleId: "Arsitek Sistem & Kemasan",
      roleZh: "系统首席架构师与包装工程师",
      year: "2026",
      category: "PHYSICAL & ARCHITECTURE",
      categoryId: "ARSITEKTUR FISIK & BUKU",
      categoryZh: "实体出版与系统架构",
      previewImage: "/assets/projects/secret-of-life/white_desk.png",
      metricBadge: "OFFSET HARDCOVER · PROPRIETARY",
      metricBadgeId: "HARDCOVER OFFSET · HAK MILIK",
      metricBadgeZh: "定制胶印精装 · 自研私有系统",
      summary: "Comprehensive hardcover engineering monograph, custom offset die proofing, and digital archive architecture.",
      summaryId: "Monograf rekayasa sampul keras komprehensif, proofing die offset kustom, dan arsitektur arsip digital.",
      summaryZh: "精装工程专论、定制胶印刀模打样与数字化归档系统架构。",
      liveUrl: "https://thesecretoflife.id",
    },
    {
      id: "cocokga",
      name: "CocokGa",
      nameId: "CocokGa",
      nameZh: "CocokGa",
      role: "Full-Stack Software Engineer",
      roleId: "Perekayasa Software Full-Stack",
      roleZh: "全栈软件架构师",
      year: "2026",
      category: "HIGH-PERFORMANCE COMPUTE",
      categoryId: "KOMPUTASI BERPERFORMA TINGGI",
      categoryZh: "高性能本地即时计算",
      previewImage: "/assets/projects/cocokga/cocokga_bg_affinity.jpg",
      metricBadge: "SUB-15MS LATENCY · ZERO SERVER COST",
      metricBadgeId: "LATENSI <15MS · BIAYA SERVER NOL",
      metricBadgeZh: "<15MS 极速响应 · 零服务器开销",
      summary: "High-performance relationship compatibility assessment tool executing computations client-side.",
      summaryId: "Aplikasi penilaian kompatibilitas relasi berkinerja tinggi dengan komputasi deterministik di sisi klien.",
      summaryZh: "极高并发关系匹配度评估工具，全量确定性计算于客户端本地毫秒级执行。",
      liveUrl: "https://cocokga.my.id",
    },
    {
      id: "nangka-premium",
      name: "Nangka Packaging Systems",
      nameId: "Sistem Kemasan Nangka",
      nameZh: "南菠萝工业包装系统",
      role: "Packaging & Brand Engineering",
      roleId: "Rekayasa Kemasan & Merek",
      roleZh: "工业包装与品牌工程",
      year: "2024",
      category: "COMMERCIAL PACKAGING",
      categoryId: "KEMASAN KOMERSIAL",
      categoryZh: "商业出口级工业包装",
      previewImage: "/assets/projects/nangka-premium/pack_satu_1.png",
      metricBadge: "FOOD-GRADE BARRIER · EXPORT READY",
      metricBadgeId: "BARRIER FOOD-GRADE · SIAP EKSPOR",
      metricBadgeZh: "食品级高阻隔 · 出口认证就绪",
      summary: "Moisture-barrier agricultural export packaging with Pantone-calibrated offset dielines and retail batch coding.",
      summaryId: "Kemasan ekspor pertanian penahan kelembaban dengan dieline cetak offset terkalibrasi Pantone dan pengkodean batch ritel.",
      summaryZh: "耐湿农业出口级包装，经Pantone精准调色之胶印刀线与零售批次编码规范。",
      liveUrl: "https://www.nangkapremium.id",
    },
    {
      id: "kbt-cold-chain",
      name: "KBT Cold-Chain Packaging",
      nameId: "Kemasan Rantai Dingin KBT",
      nameZh: "KBT 极寒冷链包装工程",
      role: "Industrial Packaging Engineer",
      roleId: "Perekayasa Kemasan Industri",
      roleZh: "工业包装工程师",
      year: "2023",
      category: "INDUSTRIAL PACKAGING",
      categoryId: "KEMASAN INDUSTRI",
      categoryZh: "工业级冷冻阻隔包装",
      previewImage: "/assets/projects/branding/kbt-packaging.jpg",
      metricBadge: "-25°C NYLON · PANTONE VERIFIED",
      metricBadgeId: "NILON -25°C · TERVERIFIKASI PANTONE",
      metricBadgeZh: "-25°C 尼龙复合 · PANTONE 认证",
      summary: "Industrial food packaging engineered for -25°C blast-freeze storage, tensile dieline tolerance, and 10,000+ retail rollout.",
      summaryId: "Kemasan pangan industri dirancang untuk penyimpanan beku -25°C, toleransi dieline tensil, dan distribusi 10.000+ unit ritel.",
      summaryZh: "-25°C急冻冷链食品级包装，抗拉伸高抗裂公差，10,000+套零售分销实绩。",
    },
    {
      id: "catatcrypto",
      name: "CatatCrypto & Quant Research",
      nameId: "CatatCrypto & Riset Kuantitatif",
      nameZh: "CatatCrypto 与量化研究模型",
      role: "Full-Stack Developer (S1 Thesis)",
      roleId: "Pengembang Full-Stack (Skripsi S1)",
      roleZh: "全栈开发者 (学士毕业论文)",
      year: "2023",
      category: "FINANCIAL QUANT ENGINE",
      categoryId: "ENGINE KUANTITATIF FINANSIAL",
      categoryZh: "量化金融交易与核算引擎",
      previewImage: "/assets/projects/branding/kbt-brosur.jpg",
      metricBadge: "GRADE A THESIS · 3NF RELATIONAL",
      metricBadgeId: "SKRIPSI NILAI A · RELASIONAL 3NF",
      metricBadgeZh: "满分A级本科论文 · 3NF 数据库范式",
      summary: "Undergraduate thesis project featuring DCA cost tracking, floating PnL, win-rate metrics, and drawdown curves.",
      summaryId: "Skripsi S1 iSTTS dengan pelacakan DCA otomatis, unrealized PnL, metrik win rate, dan kurva drawdown.",
      summaryZh: "iSTTS本科满分毕业论文，含自动DCA定投追踪、浮动盈亏、胜率模型与回撤曲线。",
    },
    {
      id: "squeecapsule",
      name: "SqueeCapsule Hotel Frontdesk ERP",
      nameId: "ERP Frontdesk Hotel SqueeCapsule",
      nameZh: "SqueeCapsule 胶囊旅馆 ERP",
      role: "Lead Software Architect",
      roleId: "Arsitek Software Utama",
      roleZh: "首席软件架构师",
      year: "2021",
      category: "ENTERPRISE DESKTOP ERP",
      categoryId: "ERP DESKTOP ENTERPRISE",
      categoryZh: "企业级桌面 ERP 管理系统",
      previewImage: "/assets/projects/software/Untitled 19.png",
      metricBadge: "INTERACTIVE BED MAP · THERMAL BILLING",
      metricBadgeId: "PETA KAMAR DINAMIS · STRUK TERMAL",
      metricBadgeZh: "动态可视化床位图 · 热敏票据打印",
      summary: "Desktop enterprise ERP software featuring visual color-coded capsule bed selection and thermal invoice printing.",
      summaryId: "Perangkat lunak desktop ERP dengan peta denah kamar kapsul interaktif berbasis warna dan cetak struk kasir termal.",
      summaryZh: "胶囊旅馆桌面级ERP软件，支持可视化床位动态状态图与热敏小票账单打印。",
    },
  ];

  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  const getName = (item: TableProjectItem) => {
    if (language === "zh" && item.nameZh) return item.nameZh;
    if (language === "id" && item.nameId) return item.nameId;
    return item.name;
  };

  const getCategory = (item: TableProjectItem) => {
    if (language === "zh" && item.categoryZh) return item.categoryZh;
    if (language === "id" && item.categoryId) return item.categoryId;
    return item.category;
  };

  const getMetricBadge = (item: TableProjectItem) => {
    if (language === "zh" && item.metricBadgeZh) return item.metricBadgeZh;
    if (language === "id" && item.metricBadgeId) return item.metricBadgeId;
    return item.metricBadge;
  };

  const getSummary = (item: TableProjectItem) => {
    if (language === "zh" && item.summaryZh) return item.summaryZh;
    if (language === "id") return item.summaryId;
    return item.summary;
  };

  const getRole = (item: TableProjectItem) => {
    if (language === "zh" && item.roleZh) return item.roleZh;
    if (language === "id" && item.roleId) return item.roleId;
    return item.role;
  };

  return (
    <div className="pt-20 pb-16 border-t border-white/10">
      
      {/* Chapter Marker Header */}
      <div className="relative flex items-center justify-between pb-8 border-b border-white/10 mb-10 overflow-hidden">
        <span className="absolute -top-4 sm:-top-6 left-0 text-6xl sm:text-8xl font-serif-editorial font-light text-white/[0.04] select-none pointer-events-none tracking-widest blur-[1px]">
          INDEX
        </span>
        <div className="flex items-center gap-3 relative z-10">
          <div className="flex items-center gap-1 text-[#d4af37]">
            <span className="w-2 h-2 bg-[#d4af37] inline-block" />
            <span className="w-2 h-2 bg-[#d4af37] inline-block" />
          </div>
          <h3 className="font-serif-editorial text-2xl sm:text-3xl text-white uppercase tracking-tight">
            {language === "id" ? "INDEKS KARYA PILIHAN" : language === "zh" ? "精选作品索引" : "SELECTED WORK INDEX"}
          </h3>
        </div>
        <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest hidden sm:inline relative z-10 font-medium">
          {language === "id" ? "[ 06 MONOGRAF UTAMA · 100% TERVERIFIKASI ]" : language === "zh" ? "[ 06 核心专论 · 100% 可审计 ]" : "[ 06 FLAGSHIPS · 100% AUDITABLE ]"}
        </span>
      </div>

      {/* SPLIT SCREEN LAYOUT (Ethan Mercer Reference 03) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Dynamic Sticky Artwork Preview with Corner Crop Brackets (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
          <div className="relative rounded-2xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/15 p-4 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] group">
            
            {/* Corner Crop Marks (Ethan Mercer Architectural Motif: ┌ ┐ └ ┘) */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20" />

            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeProject.previewImage}
                    alt={getName(activeProject)}
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Inscription Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between z-10">
                <div className="space-y-1 min-w-0 pr-2">
                  <span className="font-mono text-xs text-[#ebdca4] uppercase tracking-wider block truncate font-semibold">
                    {getCategory(activeProject)}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white font-medium block truncate">
                    {getMetricBadge(activeProject)}
                  </span>
                </div>
                {activeProject.liveUrl ? (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#ebdca4] hover:text-white transition-colors shrink-0"
                    title="Open Live System"
                  >
                    <ExternalLink className="w-4 h-4 text-[#d4af37]" />
                  </a>
                ) : (
                  <span className="text-sm text-[#d4af37] shrink-0">✦</span>
                )}
              </div>
            </div>

            {/* Narrative Micro-Summary */}
            <p className="text-sm text-zinc-300 font-light leading-relaxed pt-2 px-1">
              {getSummary(activeProject)}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Minimalist Interactive Table with Inverting Hover Pill (7 cols) */}
        <div className="lg:col-span-7 space-y-2">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 sm:gap-4 px-3 sm:px-4 py-2.5 text-xs font-mono text-zinc-400 uppercase tracking-widest border-b border-white/10 select-none font-semibold">
            <span className="col-span-8 sm:col-span-6">{t.common.tableProjectScope}</span>
            <span className="hidden sm:block sm:col-span-4">{t.common.tableRole}</span>
            <span className="col-span-4 sm:col-span-2 text-right">{t.common.tableYear}</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-1.5 pt-1">
            {projects.map((item) => {
              const isActive = item.id === activeId;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`grid grid-cols-12 gap-2 sm:gap-4 items-center px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-xl font-medium"
                      : "bg-white/[0.02] text-zinc-300 hover:bg-white/[0.06] border border-white/[0.04]"
                  }`}
                >
                  {/* Column 1: Project Name + Active Marker */}
                  <div className="col-span-8 sm:col-span-6 flex items-center gap-2.5 min-w-0">
                    {isActive ? (
                      <div className="flex items-center gap-1 text-zinc-950 shrink-0">
                        <span className="w-1.5 h-1.5 bg-zinc-950 inline-block" />
                        <span className="w-1.5 h-1.5 bg-zinc-950 inline-block" />
                      </div>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                    )}
                    <div className="min-w-0 truncate">
                      <span className={`font-mono text-xs sm:text-sm tracking-wide truncate block ${isActive ? "font-bold text-zinc-950" : "text-white"}`}>
                        {getName(item)}
                      </span>
                      <span className={`font-mono text-[11px] truncate block sm:hidden ${isActive ? "text-zinc-700" : "text-zinc-400"}`}>
                        {getRole(item)}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Role (Tablet & Desktop) */}
                  <div className="hidden sm:block sm:col-span-4 min-w-0">
                    <span className={`font-mono text-xs sm:text-sm truncate block ${isActive ? "text-zinc-800 font-medium" : "text-zinc-400"}`}>
                      {getRole(item)}
                    </span>
                  </div>

                  {/* Column 3: Year */}
                  <div className="col-span-4 sm:col-span-2 text-right">
                    <span className={`font-mono text-xs sm:text-sm ${isActive ? "font-bold text-zinc-950" : "text-zinc-400"}`}>
                      {item.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}
