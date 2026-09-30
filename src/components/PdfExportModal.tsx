"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  Printer,
  CheckSquare,
  Square,
  FileCheck,
  Info,
  ChevronDown,
  ChevronUp,
  Cpu,
  TrendingUp,
  Package,
  Layers,
  FileText,
  Sparkles,
} from "lucide-react";

export type ExportTrack = "all" | "it" | "business" | "multimedia" | "compact";

export interface PdfExportOptions {
  track: ExportTrack;
  includeHero: boolean;
  includeAbout: boolean;
  includeHighlights: boolean;
  includeExperience: boolean;
  includeFeatured: boolean;
  includeSkills: boolean;
  includeCredentials: boolean;
  includeContact: boolean;
}

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  exportOptions: PdfExportOptions;
  setExportOptions: React.Dispatch<React.SetStateAction<PdfExportOptions>>;
}

export function PdfExportModal({
  isOpen,
  onClose,
  exportOptions,
  setExportOptions,
}: PdfExportModalProps) {
  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showAdvancedCustomizer, setShowAdvancedCustomizer] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const handleSelectTrack = (track: ExportTrack) => {
    if (track === "compact") {
      setExportOptions({
        track: "compact",
        includeHero: true,
        includeAbout: true,
        includeHighlights: false,
        includeExperience: true,
        includeFeatured: false,
        includeSkills: false,
        includeCredentials: true,
        includeContact: true,
      });
    } else if (track === "it") {
      setExportOptions({
        track: "it",
        includeHero: true,
        includeAbout: true,
        includeHighlights: true,
        includeExperience: true,
        includeFeatured: true,
        includeSkills: true,
        includeCredentials: true,
        includeContact: true,
      });
    } else if (track === "business") {
      setExportOptions({
        track: "business",
        includeHero: true,
        includeAbout: true,
        includeHighlights: true,
        includeExperience: true,
        includeFeatured: true,
        includeSkills: true,
        includeCredentials: true,
        includeContact: true,
      });
    } else if (track === "multimedia") {
      setExportOptions({
        track: "multimedia",
        includeHero: true,
        includeAbout: true,
        includeHighlights: true,
        includeExperience: false,
        includeFeatured: true,
        includeSkills: false,
        includeCredentials: true,
        includeContact: true,
      });
    } else {
      // all
      setExportOptions({
        track: "all",
        includeHero: true,
        includeAbout: true,
        includeHighlights: true,
        includeExperience: true,
        includeFeatured: true,
        includeSkills: true,
        includeCredentials: true,
        includeContact: true,
      });
    }
  };

  const toggleOption = (key: keyof Omit<PdfExportOptions, "track">) => {
    setExportOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectAll = (select: boolean) => {
    setExportOptions((prev) => ({
      ...prev,
      includeHero: select,
      includeAbout: select,
      includeHighlights: select,
      includeExperience: select,
      includeFeatured: select,
      includeSkills: select,
      includeCredentials: select,
      includeContact: select,
    }));
  };

  const handleTriggerPrint = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 250);
  };

  const masterTrack = {
    id: "all" as ExportTrack,
    title: language === "zh" ? "完整工程履历总档 (Master Portfolio)" : language === "id" ? "Portofolio Lengkap (Master Portfolio)" : "Complete Master Portfolio",
    subtitle: language === "zh" ? "横版A4完整作品集 · 全领域全覆盖 (强烈推荐)" : language === "id" ? "Dokumen Portofolio Lengkap A4 Lanskap Tanpa Kompromi (Direkomendasikan)" : "Full Comprehensive A4 Landscape Spreads · All Disciplines (Recommended)",
    badge: language === "zh" ? "⭐ 完整作品集" : language === "id" ? "⭐ PORTOFOLIO LENGKAP" : "⭐ FULL PORTFOLIO",
    desc:
      language === "zh"
        ? "包含完整总览工程文档：涵盖Next.js系统案例、确定性AI与RAG知识库、-25°C极寒冷链包装、6段职业履历总账、20+真实工程项目归档、技能矩阵与4.00满绩荣誉学位。"
        : language === "id"
        ? "Dokumen portofolio komprehensif tanpa potongan: mencakup seluruh studi kasus web Next.js, pipeline AI RAG, kemasan industri -25°C, buku besar 6 pengalaman karier, 20+ arsip proyek, matriks keahlian, dan ijazah IPK 4.00 murni."
        : "Complete master compendium portfolio without compromise: covers all Next.js systems, deterministic AI RAG, -25°C cold-chain packaging, 6 career roles ledger, 20+ project ledger, skills matrix, and verified 4.00 GPA honors.",
    icon: <Layers className="w-5 h-5 text-[#ebdca4]" />,
  };

  const roleTracks = [
    {
      id: "it" as ExportTrack,
      title: language === "zh" ? "IT 与系统架构专线" : language === "id" ? "IT & Arsitektur Sistem" : "IT & Systems Architecture",
      subtitle: language === "zh" ? "软件工程与 AI 自动化管线" : language === "id" ? "Software Engineering & AI Pipelines" : "Software Engineering & AI Pipelines",
      badge: language === "zh" ? "8-10 页精选" : language === "id" ? "8-10 SLIDES" : "8-10 SLIDES",
      desc:
        language === "zh"
          ? "聚焦于 Next.js Web 系统、确定性 AI 管线、算法推演、数学优化及 4.00 满分绩点实证。"
          : language === "id"
          ? "Fokus pada rekayasa web Next.js, pipeline AI deterministik, algoritma, optimasi matematis, dan IPK 4.00 murni."
          : "Focuses on Next.js web systems, deterministic AI pipelines, algorithmic rigor, mathematical optimization, and flawless GPA.",
      icon: <Cpu className="w-5 h-5 text-[#d4af37]" />,
      accentColor: "border-[#d4af37]",
    },
    {
      id: "business" as ExportTrack,
      title: language === "zh" ? "商业系统与 ERP 运营专线" : language === "id" ? "Operasional Bisnis & ERP" : "Business Systems & Operations",
      subtitle: language === "zh" ? "商业信息系统与 B2B 企业总账" : language === "id" ? "Sistem Informasi Bisnis & B2B Ledger" : "B2B Ledgers & Enterprise ERP",
      badge: language === "zh" ? "8-10 页精选" : language === "id" ? "8-10 SLIDES" : "8-10 SLIDES",
      desc:
        language === "zh"
          ? "聚焦于 PT KBT 实际商业运作 (90+ SKU)、桌面 ERP 管理软件及 iSTTS 商业信息系统理学学士学位。"
          : language === "id"
          ? "Fokus pada operasional bisnis nyata PT KBT (90+ SKU), perangkat lunak desktop ERP, dan gelar S1 SIB iSTTS."
          : "Focuses on commercial B2B operations at PT KBT (90+ SKU), desktop ERP suites, and SIB iSTTS business degree.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      accentColor: "border-emerald-500",
    },
    {
      id: "multimedia" as ExportTrack,
      title: language === "zh" ? "工业包装与创意媒体专线" : language === "id" ? "Kemasan Industri & Multimedia" : "Packaging & Creative Media",
      subtitle: language === "zh" ? "实体包装刀模制造与专论校样" : language === "id" ? "Manufaktur Dieline Fisik & Monograf" : "Physical Packaging & Monograph Proofing",
      badge: language === "zh" ? "8-10 页精选" : language === "id" ? "8-10 SLIDES" : "8-10 SLIDES",
      desc:
        language === "zh"
          ? "聚焦于 -25°C 急冻高阻隔尼龙包装、Pantone色彩校准、胶印工艺规范及《生命之书》精装出版。"
          : language === "id"
          ? "Fokus pada kemasan nilon tahan beku -25°C, kalibrasi warna Pantone, layout cetak offset, dan buku The Secret of Life."
          : "Focuses on -25°C blast-freeze barrier nylon, Pantone-calibrated offset dielines, and The Secret of Life hardcover print.",
      icon: <Package className="w-5 h-5 text-[#dc2626]" />,
      accentColor: "border-[#dc2626]",
    },
    {
      id: "compact" as ExportTrack,
      title: language === "zh" ? "高管精简简历 (2页)" : language === "id" ? "Resume Ringkas (2 Halaman)" : "Compact Executive Resume",
      subtitle: language === "zh" ? "HR 与招聘专家快速初筛格式" : language === "id" ? "Format Cepat untuk Recruiter & HR" : "Quick 2-Page CV for HR Review",
      badge: language === "zh" ? "2页精要版" : language === "id" ? "2 HALAMAN CV" : "2-PAGE CV",
      desc:
        language === "zh"
          ? "紧凑的2页横版概览，包含高管个人履历、核心职业里程碑与经过认证的学术荣誉。"
          : language === "id"
          ? "Format horizontal ringkas 2 halaman berisi profil eksekutif, rekam jejak karier terpenting, dan kontak resmi."
          : "A tight 2-page horizontal summary containing executive profile, key career roles, and verified academic distinctions.",
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      accentColor: "border-blue-400",
    },
  ];

  const optionsList: { key: keyof Omit<PdfExportOptions, "track">; label: string; desc: string }[] = [
    {
      key: "includeHero",
      label: t.pdfModal?.includeHero || "Sampul Judul Eksekutif",
      desc: language === "zh" ? "包含 GPA 4.00 最高优等荣誉、理学学士头衔与官方联系方式。" : language === "id" ? "Termasuk IPK 4.00 Sangat Memuaskan, gelar S.Kom., dan kontak resmi." : "Includes 4.00 GPA, S.Kom. title, and official contacts.",
    },
    {
      key: "includeAbout",
      label: t.pdfModal?.includeAbout || "Profil & Filosofi Rekayasa",
      desc: language === "zh" ? "工作哲学叙述、“拿实据说话”立场及三大核心工程支柱。" : language === "id" ? "Narasi filosofi kerja, pendekatan 'Show, Don't Pitch', dan 3 pilar fondasi." : "Work philosophy narrative, 'Show, Don't Pitch' stance, and 3 foundational pillars.",
    },
    {
      key: "includeHighlights",
      label: t.pdfModal?.includeHighlights || "Solusi & Metodologi Eksekusi",
      desc: language === "zh" ? "四大核心工程能力与 3 阶段系统生产交付方法论。" : language === "id" ? "4 pilar kapabilitas dan 3 tahap metodologi rekayasa produksi." : "4 core capability pillars and 3-phase engineering delivery methodology.",
    },
    {
      key: "includeExperience",
      label: t.pdfModal?.includeExperience || "Buku Besar Pengalaman Kerja",
      desc: language === "zh" ? "8 段经过事实核验的职业任职、商业运营与校园立法领导力总账。" : language === "id" ? "Buku besar 8 peran profesional, wirausaha & kepemimpinan kampus terverifikasi." : "8 factual professional, venture & campus leadership roles with verified records.",
    },
    {
      key: "includeFeatured",
      label: t.pdfModal?.includeFeatured || "Studi Kasus Proyek Unggulan",
      desc: language === "zh" ? "5 大旗舰系统案例与 28+ 项真实项目全景总账 (2010–2026)。" : language === "id" ? "5 studi kasus sistem unggulan dan tabel lengkap 28+ proyek nyata (2010–2026)." : "5 flagship case studies and full ledger of 28+ real projects (2010–2026).",
    },
    {
      key: "includeSkills",
      label: t.pdfModal?.includeSkills || "Matriks Keahlian 3-Tier",
      desc: language === "zh" ? "按 3 层实证标准分类的 4 大核心技能架构矩阵。" : language === "id" ? "Matriks 4 pilar keahlian dengan pembagian 3 level pembuktian empiris." : "4-pillar matrix categorized into 3 verifiable proof tiers.",
    },
    {
      key: "includeCredentials",
      label: t.pdfModal?.includeCredentials || "Ijazah, Penghargaan & Bahasa",
      desc: language === "zh" ? "iSTTS 学士学位 (GPA 4.00)、4次最佳先锋奖、专业认证与三语能力。" : language === "id" ? "Ijazah S1 SIB (IPK 4.00), 4x penghargaan praktikan, sertifikasi & trilingual." : "iSTTS SIB degree (GPA 4.00), 4x awards, certifications & trilingual skills.",
    },
    {
      key: "includeContact",
      label: t.pdfModal?.includeContact || "Kolofon & Saluran Kontak",
      desc: language === "zh" ? "直达联系方式、官方尾页签名及文档真实性声明。" : language === "id" ? "Saluran komunikasi langsung, monogram resmi penutup, dan verifikasi dokumen." : "Direct communication channels, closing monogram, and document verification.",
    },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 print-hidden">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#111114] border border-white/20 p-5 sm:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase bg-[#d4af37]/20 text-[#ebdca4] border border-[#d4af37]/40 font-bold">
              <FileCheck className="w-4 h-4 text-[#d4af37]" />
              <span>A4 Landscape Presentation Deck (297 × 210 mm)</span>
            </div>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-white font-medium">
              {language === "zh" ? "选择高管呈递格式" : language === "id" ? "Pilih Format Portofolio Eksekutif" : "Select Executive Presentation Track"}
            </h3>
            <p className="text-sm text-zinc-300 font-mono">
              {language === "zh"
                ? "专为评审官定制：完整总档（全量）、IT技术专线、商业运营专线或工业包装专线。"
                : language === "id"
                ? "Disesuaikan secara spesifik berdasarkan kebutuhan evaluator: Master Kompendium (Lengkap), IT, Bisnis, atau Kemasan Industri."
                : "Tailored specifically for evaluator role: Master Compendium (Full), IT, Business, or Industrial Packaging."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Track Selector Cards */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider font-bold">
              {language === "zh" ? "1. 推荐主干格式：" : language === "id" ? "1. FORMAT UTAMA / REKOMENDASI:" : "1. FEATURED MASTER TRACK:"}
            </span>
            <span className="text-xs font-mono text-[#d4af37] font-semibold">
              {language === "zh" ? "当前默认" : language === "id" ? "Default Terpilih" : "Active Default"}
            </span>
          </div>

          {/* Master Full-Width Hero Card */}
          {(() => {
            const isMasterSelected = exportOptions.track === "all";
            return (
              <div
                onClick={() => handleSelectTrack("all")}
                className={`p-5 sm:p-6 rounded-2xl border-2 transition-all cursor-pointer space-y-3 relative overflow-hidden ${
                  isMasterSelected
                    ? "bg-[#18181c] border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.15)] ring-1 ring-[#d4af37]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 shrink-0">
                      {masterTrack.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg sm:text-xl font-serif-editorial text-white font-medium">
                        {masterTrack.title}
                      </h4>
                      <span className="text-xs sm:text-sm font-mono text-[#ebdca4] block truncate">
                        {masterTrack.subtitle}
                      </span>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#d4af37] text-zinc-950 font-bold shrink-0 self-start sm:self-center shadow-md">
                    {masterTrack.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {masterTrack.desc}
                </p>
              </div>
            );
          })()}

          {/* 4 Specialized Role Cards (2x2 Grid) */}
          <div className="pt-2">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-bold mb-2.5">
              {language === "zh" ? "2. 或选择针对特定岗位的细分格式：" : language === "id" ? "2. ATAU PILIH PRESET SPESIALISASI PER-ROLE:" : "2. OR SELECT ROLE-SPECIFIC SUB-TRACK:"}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roleTracks.map((track) => {
                const isSelected = exportOptions.track === track.id;
                return (
                  <div
                    key={track.id}
                    onClick={() => handleSelectTrack(track.id)}
                    className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer space-y-2.5 flex flex-col justify-between overflow-hidden ${
                      isSelected
                        ? `bg-white/[0.06] ${track.accentColor} shadow-lg ring-1 ring-[#d4af37]/40`
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 border-b border-white/5 pb-2.5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                          {track.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-base font-serif-editorial text-white font-medium truncate">
                            {track.title}
                          </h4>
                          <span className="text-xs font-mono text-zinc-400 block truncate">
                            {track.subtitle}
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-[#ebdca4] font-bold shrink-0 whitespace-nowrap">
                        {track.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-1">
                      {track.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Optional Granular Section Customizer */}
        <div className="pt-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setShowAdvancedCustomizer(!showAdvancedCustomizer)}
            className="flex items-center justify-between w-full text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer py-1"
          >
            <span className="flex items-center gap-2">
              <span>{language === "zh" ? "高级选项：各章节自选清单" : language === "id" ? "Opsi Lanjutan: Kustomisasi Manual Tiap Bab Dokumen" : "Advanced Options: Manual Chapter Checklist"}</span>
              <span className="text-xs text-[#d4af37] font-semibold">({optionsList.filter(o => exportOptions[o.key]).length}/8 {language === "zh" ? "项已选" : language === "id" ? "Aktif" : "Active"})</span>
            </span>
            {showAdvancedCustomizer ? (
              <ChevronUp className="w-4 h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </button>

          {showAdvancedCustomizer && (
            <div className="mt-3 space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-mono pb-1 border-b border-white/5">
                <span className="text-zinc-400">{language === "zh" ? "勾选需收录的章节：" : language === "id" ? "Centang bab yang ingin dimasukkan:" : "Select chapters to include:"}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleSelectAll(true)}
                    className="text-[#d4af37] hover:underline"
                  >
                    {t.pdfModal?.selectAll || (language === "zh" ? "全选" : language === "id" ? "Pilih Semua" : "Select All")}
                  </button>
                  <span className="text-zinc-600">·</span>
                  <button
                    onClick={() => handleSelectAll(false)}
                    className="text-zinc-400 hover:text-white hover:underline"
                  >
                    {t.pdfModal?.deselectAll || (language === "zh" ? "取消全选" : language === "id" ? "Hapus Semua" : "Deselect All")}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {optionsList.map(({ key, label, desc }) => {
                  const isChecked = exportOptions[key];
                  return (
                    <div
                      key={key}
                      onClick={() => toggleOption(key)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? "bg-white/[0.04] border-[#d4af37]/40"
                          : "bg-white/[0.01] border-white/5 opacity-50 hover:opacity-80"
                      }`}
                    >
                      <button
                        type="button"
                        className="mt-0.5 text-[#d4af37] shrink-0"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-[#d4af37]" />
                        ) : (
                          <Square className="w-4 h-4 text-zinc-500" />
                        )}
                      </button>
                      <div className="space-y-1 min-w-0">
                        <div className="text-sm font-mono font-medium text-white">
                          {label}
                        </div>
                        <div className="text-xs text-zinc-300 leading-relaxed">
                          {desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 3. Landscape Print Instructions Notice */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-[#d4af37]/40 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm font-mono leading-relaxed">
            <div className="text-[#ebdca4] font-bold uppercase tracking-wider">
              {language === "zh" ? "横向打印 / 导出 PDF 指南：" : language === "id" ? "Petunjuk Cetak / Ekspor PDF Lanskap:" : "Landscape Print Guide:"}
            </div>
            <p className="text-zinc-200">
              {language === "zh"
                ? "在浏览器打印窗口中，请将纸张方向设为“横向 (Landscape)”，并务必勾选“背景图形 (Background graphics)”，以确保曜石黑背景与金色质感完整呈现，避免白色边距。"
                : language === "id"
                ? "Pada jendela cetak browser (print dialog), pastikan Layout disetel ke 'Landscape' / 'Lanskap' dan centang 'Background graphics' / 'Grafik latar belakang' agar seluruh visual obsidian dan warna emas ter-render sempurna tanpa margin putih."
                : "In the browser print dialog, ensure Layout is set to 'Landscape' and check 'Background graphics' so all luxury obsidian & gold visuals render flawlessly without white margins."}
            </p>
          </div>
        </div>

        {/* 4. Actions Footer */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
          <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
            {language === "zh" ? "已选档案路线：" : language === "id" ? "Jalur Terpilih: " : "Selected Track: "}
            <strong className="text-[#ebdca4] uppercase tracking-wider">
              {exportOptions.track === "all"
                ? (language === "zh" ? "完整作品集总纲 (MASTER)" : language === "id" ? "PORTOFOLIO LENGKAP (MASTER)" : "COMPLETE PORTFOLIO (MASTER)")
                : exportOptions.track}
            </strong>
          </span>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              {t.pdfModal?.closeBtn || (language === "zh" ? "取消" : language === "id" ? "Batal" : "Cancel")}
            </button>
            <button
              onClick={handleTriggerPrint}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider bg-[#d4af37] hover:bg-[#ebdca4] text-zinc-950 font-bold transition-all shadow-lg cursor-pointer"
            >
              <Printer className="w-4 h-4 text-zinc-950" />
              <span>{language === "zh" ? "打印 / 保存为 PDF" : language === "id" ? "CETAK / SIMPAN PDF" : "PRINT / SAVE PDF"}</span>
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}
