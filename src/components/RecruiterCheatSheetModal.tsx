"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  GraduationCap,
  Languages,
  Download,
  Mail,
  MessageSquare,
  Cpu,
  Sparkles,
  Clock,
  Globe,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CelestialStar } from "@/components/CelestialStar";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { usePortfolioPdfAvailability } from "@/hooks/usePortfolioPdfAvailability";

interface RecruiterCheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPdfModal?: () => void;
}

export function RecruiterCheatSheetModal({
  isOpen,
  onClose,
  onOpenPdfModal,
}: RecruiterCheatSheetModalProps) {
  const { language } = useLanguage();
  const { isChecking, handleDownloadOrPrint } = usePortfolioPdfAvailability(onOpenPdfModal);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="no-print print-hidden print:!hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0c0c0e] border border-[#d4af37]/35 shadow-[0_25px_70px_rgba(0,0,0,0.95)] p-5 sm:p-6 md:p-7 text-zinc-100 space-y-4 sm:space-y-4.5"
      >
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-32 bg-[#d4af37]/10 blur-[100px] pointer-events-none -z-0" />

        {/* 1. Header Bar: Fast Recruiter Scanning Indicator & Instant Actions */}
        <div className="space-y-2.5 pb-3.5 border-b border-white/10 relative z-10">
          {/* Top Row: Badges (Left) & Actions (Right) */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap overflow-x-auto">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/45 text-[11px] font-mono font-bold text-[#ebdca4] uppercase tracking-wider whitespace-nowrap shrink-0">
                <CelestialStar className="w-3 h-3 text-[#d4af37]" />
                {language === "zh"
                  ? "30秒速查"
                  : language === "id"
                  ? "CHEAT SHEET · 30 DETIK"
                  : "CHEAT SHEET · 30-SEC SCAN"}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/15 text-[11px] font-mono text-zinc-300 whitespace-nowrap shrink-0">
                <Clock className="w-2.5 h-2.5 text-[#d4af37]" />
                {language === "zh" ? "4+ 年经验" : language === "id" ? "4+ Thn Pengalaman" : "4+ YOE"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                {language === "zh"
                  ? "支持远程 / 混合办公"
                  : language === "id"
                  ? "Terbuka: Remote & Hybrid"
                  : "Open for Remote & Hybrid"}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="/assets/CV_Jem_Angkasa_Wijaya_2026.pdf"
                download="CV_Jem_Angkasa_Wijaya_2026.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#d4af37] hover:bg-[#ebdca4] text-zinc-950 font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-md cursor-pointer"
                title="Download ATS Resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-zinc-950" />
                <span>{language === "zh" ? "下载 CV" : language === "id" ? "Unduh CV" : "Download CV"}</span>
              </a>

              <button
                type="button"
                onClick={handleDownloadOrPrint}
                disabled={isChecking}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer font-medium disabled:opacity-50"
                title="Download Complete Master Portfolio PDF"
              >
                {isChecking ? (
                  <Loader2 className="w-3 h-3 text-[#d4af37] animate-spin" />
                ) : (
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                )}
                <span>{language === "zh" ? "下载作品集" : language === "id" ? "Unduh Portofolio" : "Download Portfolio"}</span>
              </button>


              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-0.5"
                title="Close [ESC]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Name & Subtitle */}
          <div>
            <h2 className="font-serif-editorial text-xl sm:text-2xl text-white font-medium tracking-tight">
              Jem Angkasa Wijaya {language === "zh" ? "(范永安)" : ""},{" "}
              <span className="text-[#d4af37]">S.Kom.</span>
            </h2>
            <p className="font-mono text-xs text-zinc-400 font-light mt-0.5">
              {language === "zh"
                ? "业务系统与AI工作流专家 · 数字化运营 · S1 商业信息系统 (满分 GPA 4.00)"
                : language === "id"
                ? "Business Systems & AI Workflow Specialist · Operasi Digital · S1 Sistem Informasi Bisnis (IPK 4.00)"
                : "Business Systems & AI Workflow Specialist · Digital Operations · S1 Business Information Systems (4.00 GPA)"}
            </p>
          </div>
        </div>

        {/* 2. Three Undeniable Moats: Sleek Horizontal Stat Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl bg-white/[0.02] border border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 overflow-hidden">
          {/* Moat 1: Academic Rigor */}
          <div className="p-3.5 sm:p-4 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#d4af37] font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{language === "zh" ? "学术硬核实力" : language === "id" ? "Keunggulan Akademik" : "Academic Muscle"}</span>
            </div>
            <div className="font-serif-editorial text-lg sm:text-xl text-white font-medium">
              {language === "id" ? "IPK 4.00 / 4.00" : "4.00 / 4.00 GPA"}
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">
              {language === "zh"
                ? "iSTTS 商业信息系统 144学分全A · 4届核心计算机实验室最佳实训先锋"
                : language === "id"
                ? "144 SKS All A's di iSTTS S1 SIB · 4x Penghargaan Praktikan Lab Terbaik"
                : "144 Credits Straight A's at iSTTS S1 BIS · 4x Best Core CS Lab Practitioner"}
            </p>
          </div>

          {/* Moat 2: Dual Integrity */}
          <div className="p-3.5 sm:p-4 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
              <Cpu className="w-3.5 h-3.5 text-rose-400" />
              <span>{language === "zh" ? "物理与数字双轨" : language === "id" ? "Fisik & Digital Ganda" : "Physical & Digital Dual"}</span>
            </div>
            <div className="font-serif-editorial text-lg sm:text-xl text-white font-medium">
              -25°C + Scalable SaaS
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">
              {language === "zh"
                ? "现代 Web/SaaS 系统构建 + 实体工厂冷链供应链商业运营实战 (PT KBT)"
                : language === "id"
                ? "Rekayasa sistem web/SaaS + operasional riil B2B cold-chain pabrik (PT KBT)"
                : "Modern web/SaaS systems + real factory-floor cold-chain B2B ops (PT KBT)"}
            </p>
          </div>

          {/* Moat 3: Multilingual & Commercial */}
          <div className="p-3.5 sm:p-4 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
              <Languages className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === "zh" ? "三语流利与商业敏锐" : language === "id" ? "Multibahasa & Bisnis" : "Trilingual & Business"}</span>
            </div>
            <div className="font-serif-editorial text-lg sm:text-xl text-white font-medium">
              HSK 4 + EN + ID
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">
              {language === "zh"
                ? "汉语水平认证 (HSK 4级 247/300) · 商务英语 · 真实 B2B 商业运营经验"
                : language === "id"
                ? "Mandarin HSK 4 (247/300) · Bahasa Inggris Kerja · Pengalaman Operasional B2B Riil"
                : "Certified Mandarin (HSK 4 247/300) · Professional English · Real B2B Operations"}
            </p>
          </div>
        </div>

        {/* 3. Top 3 Auditable Flagship Proofs: Clean Interactive Rows */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono px-0.5">
            <span className="text-zinc-400 uppercase tracking-wider font-bold">
              {language === "zh"
                ? "3大代表性实证工程 (可审计交付物)"
                : language === "id"
                ? "3 BUKTI REKAYASA UTAMA (DAPAT DIAUDIT LANGSUNG)"
                : "TOP 3 AUDITABLE PRODUCTION PROOFS"}
            </span>
            <span className="text-zinc-500 font-mono text-[11px]">
              {language === "zh" ? "点击直达线上实装" : "Direct Live Verification"}
            </span>
          </div>

          <div className="space-y-1.5">
            {/* Proof 1 */}
            <a
              href="https://thesecretoflife.id"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#111114] hover:bg-white/[0.04] border border-white/10 hover:border-[#d4af37]/40 transition-all gap-2"
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#ebdca4] shrink-0">
                  AI WORKFLOW
                </span>
                <div>
                  <h4 className="font-serif-editorial text-sm sm:text-base text-white font-medium group-hover:text-[#ebdca4] transition-colors">
                    The Secret of Life
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-light line-clamp-1">
                    {language === "zh"
                      ? "确定性 AI 150+页个性化图书自动编译排版引擎与人工质检印刷管线"
                      : language === "id"
                      ? "Pipeline kompilasi 150+ halaman buku personal otomatis bertenaga AI dengan layout presisi cetak"
                      : "AI-assisted 150+ page personalized book production workflow with deterministic layout"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-[#d4af37] shrink-0 self-end sm:self-center font-medium">
                <span>thesecretoflife.id</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Proof 2 */}
            <a
              href="https://www.nangkapremium.id"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#111114] hover:bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition-all gap-2"
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shrink-0">
                  BUSINESS SYSTEMS
                </span>
                <div>
                  <h4 className="font-serif-editorial text-sm sm:text-base text-white font-medium group-hover:text-emerald-300 transition-colors">
                    PT KBT & Nangka Premium
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-light line-clamp-1">
                    {language === "zh"
                      ? "90+ SKU 冷冻水果大宗采购B2B数字化目录、库存对账SOP与 -25°C 尼龙包装"
                      : language === "id"
                      ? "Digitalisasi alur bisnis 90+ SKU buah beku, rekonsiliasi stok/invoice, & kemasan nilon -25°C"
                      : "Digitizing 90+ SKU frozen-fruit B2B catalog, inventory ledgers, SOPs & -25°C packaging"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-emerald-400 shrink-0 self-end sm:self-center font-medium">
                <span>nangkapremium.id</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Proof 3 */}
            <a
              href="https://cocokga.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-[#111114] hover:bg-white/[0.04] border border-white/10 hover:border-blue-500/40 transition-all gap-2"
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/15 border border-blue-500/40 text-blue-300 shrink-0">
                  PRODUCT / WEB
                </span>
                <div>
                  <h4 className="font-serif-editorial text-sm sm:text-base text-white font-medium group-hover:text-blue-300 transition-colors">
                    CocokGa Engine
                  </h4>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-light line-clamp-1">
                    {language === "zh"
                      ? "纯客户端零依赖、响应低于10ms的历法计算引擎与数字化自助产品工作流 (Next.js 14)"
                      : language === "id"
                      ? "Self-serve digital product workflow dengan mesin kalkulasi client-side <10ms (Next.js 14)"
                      : "Self-serve digital product workflow with <10ms zero-dependency client latency (Next.js 14)"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-blue-400 shrink-0 self-end sm:self-center font-medium">
                <span>cocokga.my.id</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* 4. Target Roles & Core Technical Stack: Calibrated to Remote Market Audit */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono">
            <span className="text-[#ebdca4] font-bold uppercase tracking-wider shrink-0">
              {language === "zh" ? "目标职位:" : language === "id" ? "TARGET POSISI:" : "TARGET ROLES:"}
            </span>
            <div className="text-zinc-300 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-medium">
              <span>Business Systems Analyst</span>
              <span className="text-zinc-600">·</span>
              <span>AI Workflow & Automation Specialist</span>
              <span className="text-zinc-600">·</span>
              <span>Solutions Implementation Specialist</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono">
            <span className="text-zinc-400 font-bold uppercase tracking-wider shrink-0">
              {language === "zh" ? "核心技术:" : language === "id" ? "CORE STACK:" : "CORE STACK:"}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                "TypeScript",
                "Next.js",
                "React",
                "Python",
                "PHP Laravel",
                "MySQL",
                "C#",
                "Java",
                "Docker",
                "Linux",
                "TailwindCSS",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 5. High-Conversion Footer with Complete Profiles & Quick Contact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 w-full md:w-auto">
            <span className="inline-flex items-center gap-1 text-[#ebdca4]">
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              Surabaya, Indonesia (UTC+7 · Flexible Overlap)
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="text-zinc-300">jemangkasa.work@gmail.com</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            {/* GitHub */}
            <a
              href="https://github.com/JAW12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jem-angkasa-wijaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-zinc-300 hover:text-[#0a66c2] transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281273567384?text=Hi%20Jem,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20role."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-medium transition-all shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Email */}
            <a
              href="mailto:jemangkasa.work@gmail.com?subject=Strategic%20Engineering%20Opportunity%20-%20Jem%20Angkasa%20Wijaya"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#ebdca4] text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-950" />
              <span>{language === "zh" ? "发送邮件" : language === "id" ? "Kirim Email" : "Email Jem"}</span>
            </a>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}
