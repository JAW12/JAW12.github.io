"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PdfExportOptions } from "./PdfExportModal";
import { flagshipProjects, allArchiveProjects, creativeMediaProjects } from "@/data/projects";
import { experiencesData } from "@/data/experiences";
import { skillsData } from "@/data/skills";
import { educationData, awardsData, certificationsData } from "@/data/credentials";
import {
  ShieldCheck,
  Award,
  Building2,
  MapPin,
  CheckCircle2,
  Terminal,
  Sparkles,
  Layers,
  Globe,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Cpu,
  Code2,
  Package,
  Database,
  TrendingUp,
  MessageSquare,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

interface PrintableDocumentProps {
  exportOptions: PdfExportOptions;
}

export function PrintableDocument({ exportOptions }: PrintableDocumentProps) {
  const { language } = useLanguage();
  const track = exportOptions.track || "all";

  return (
    <div className="hidden print:block printable-document-container font-sans text-zinc-100 bg-[#09090b]">
      
      {/* ========================================================================= */}
      {/* SLIDE 01: EXECUTIVE TITLE COVER SPREAD                                    */}
      {/* ========================================================================= */}
      {exportOptions.includeHero && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-[#d4af37]/50 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Ambient Decorative Corners */}
          <div className="absolute top-3 left-4 text-[#d4af37] font-mono text-xs select-none">┌── PORTFOLIO DECK ──</div>
          <div className="absolute top-3 right-4 text-[#d4af37] font-mono text-xs select-none">── MASTER ARCHITECTURE ──┐</div>
          <div className="absolute bottom-3 left-4 text-[#d4af37] font-mono text-xs select-none">└── VERIFIED EMPIRICAL ──</div>
          <div className="absolute bottom-3 right-4 text-[#d4af37] font-mono text-xs select-none">── 2026 EDITION ──┘</div>

          {/* Top Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#ebdca4] tracking-widest font-normal">
                JAW<span className="text-[#dc2626]">.</span>
              </span>
              <span className="h-4 w-[1px] bg-white/20" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37]">
                {track === "it"
                  ? "SPECIALIZATION TRACK: IT & SYSTEMS ARCHITECTURE COMPENDIUM"
                  : track === "business"
                  ? "SPECIALIZATION TRACK: BUSINESS SYSTEMS & OPERATIONS COMPENDIUM"
                  : track === "multimedia"
                  ? "SPECIALIZATION TRACK: PACKAGING & CREATIVE MEDIA COMPENDIUM"
                  : track === "compact"
                  ? "EXECUTIVE SUMMARY RESUME DECK (2-PAGE)"
                  : "COMPREHENSIVE SYSTEMS & PHYSICAL ARCHITECTURE COMPENDIUM"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>S.KOM iSTTS · {language === "id" ? "IPK 4.00" : "4.00 GPA"} SUMMA CUM LAUDE · 4x BEST PRACTITIONER</span>
            </div>
          </div>

          {/* Central Stage: 8:4 Split */}
          <div className="grid grid-cols-12 gap-8 items-center my-auto py-2">
            
            {/* Left 8 cols: Identity, Titles, Credentials */}
            <div className="col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#ebdca4] text-xs font-mono uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>OFFICIAL VERIFIED PORTFOLIO · CONFIDENTIAL & AUDITABLE</span>
              </div>

              <div className="space-y-1">
                <h1 className="font-serif-editorial text-5xl text-white font-medium tracking-tight">
                  Jem Angkasa Wijaya{language === "zh" ? " (范永安)" : ""}<span className="text-[#d4af37]">, S.Kom.</span>
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-[#ebdca4] font-semibold">
                  Full-Stack Systems Architect · Industrial Cold-Chain & AI Synthesizer
                </p>
              </div>

              <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-2xl text-justify">
                {language === "zh"
                  ? "毕业于泗水综合科学与技术学院 (iSTTS) 商业信息系统专业，以 4.00/4.00 满分绩点 (最高优等荣誉，4次最佳实训先锋奖) 荣誉毕业。精通将高并发企业级软件架构、实体工业冷链包装工程 (-25°C 耐低温工艺) 与本地化 AI/RAG 结构化智能管线深度融合。"
                  : language === "id"
                  ? "Lulusan Sarjana Komputer dari Institut Sains dan Teknologi Terpadu Surabaya (iSTTS) dengan IPK Sempurna 4.00/4.00 murni (Predikat Resmi: Sangat Memuaskan / Summa Cum Laude standard, 4x Praktisi Akademik Terbaik). Mengawinkan arsitektur sistem enterprise berkemampuan tinggi dengan ketahanan fisik manufaktur kemasan industri (-25°C) dan pipeline otomasi AI terstruktur."
                  : "Sarjana Komputer graduate from Institut Sains dan Teknologi Terpadu Surabaya (iSTTS) with a flawless 4.00 / 4.00 cumulative GPA (Official Honors: Very Satisfactory / Summa Cum Laude standard, 4x Best Academic Practitioner). Merging high-concurrency enterprise software architecture with rugged industrial packaging manufacturing (-25°C) and deterministic AI synthesis."}
              </p>

              {/* 4 Core Disciplinary Framing Badges */}
              <div className="grid grid-cols-4 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-[#111114] border border-[#d4af37]/40 text-center">
                  <div className="font-serif-editorial text-xl text-[#ebdca4] font-bold">{language === "id" ? "IPK 4.00" : "4.00 GPA"}</div>
                  <div className="text-xs font-mono text-zinc-400 uppercase mt-0.5">Summa Cum Laude</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111114] border border-[#dc2626]/40 text-center">
                  <div className="font-serif-editorial text-xl text-[#dc2626] font-bold">4x Awards</div>
                  <div className="text-xs font-mono text-zinc-400 uppercase mt-0.5">Best Practitioner</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 text-center">
                  <div className="font-serif-editorial text-xl text-white font-bold">-25°C Stable</div>
                  <div className="text-xs font-mono text-zinc-400 uppercase mt-0.5">Cold-Chain Nylon</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 text-center">
                  <div className="font-serif-editorial text-xl text-emerald-400 font-bold">20+ Works</div>
                  <div className="text-xs font-mono text-zinc-400 uppercase mt-0.5">Real Deliverables</div>
                </div>
              </div>
            </div>

            {/* Right 4 cols: Cutout Silhouette Portrait */}
            <div className="col-span-4 flex justify-center">
              <div className="relative w-56 h-72 rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_15px_40px_rgba(0,0,0,0.8)] bg-gradient-to-b from-[#18181b] to-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/avatar/profile-quarter.png"
                  alt="Jem Angkasa Wijaya, S.Kom."
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-black/85 backdrop-blur-md border-t border-white/15 text-center">
                  <div className="font-serif-editorial text-sm text-white font-medium">Jem Angkasa Wijaya</div>
                  <div className="text-xs font-mono text-[#ebdca4]">iSTTS · Sarjana Komputer (S.Kom.)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Contact Strip */}
          <div className="border-t border-white/10 pt-2.5 pb-1 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-4 text-zinc-300">
              <span className="text-[#ebdca4] font-bold">PAGE 01 / 15</span>
              <span>·</span>
              <span><strong>Email:</strong> jemangkasa.work@gmail.com</span>
              <span>·</span>
              <span><strong>GitHub:</strong> github.com/JAW12</span>
              <span>·</span>
              <span><strong>LinkedIn:</strong> linkedin.com/in/jem-angkasa-wijaya</span>
            </div>
            <div className="text-[#ebdca4]">
              <span>Surabaya, Indonesia · Open for Strategic Remote Engagements</span>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 02: EXECUTIVE PROFILE, PHILOSOPHY & EMPIRICAL MILESTONES             */}
      {/* ========================================================================= */}
      {exportOptions.includeAbout && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 02</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                EXECUTIVE PROFILE & STRATEGIC FOUNDATIONS
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              SHOW, DON&apos;T PITCH · THE ZERO AI-SLOP COMMITMENT
            </span>
          </div>

          {/* Central 2-Column Grid */}
          <div className="grid grid-cols-12 gap-8 my-auto py-2 items-stretch">
            
            {/* Left 6 cols: Narrative & Philosophy */}
            <div className="col-span-6 space-y-3.5 flex flex-col justify-between">
              <blockquote className="p-4 rounded-2xl bg-[#111114] border-l-4 border-l-[#d4af37] border border-white/10 font-serif-editorial text-base text-zinc-200 italic leading-snug">
                &ldquo;Software is only as good as the physical and mathematical reality it orchestrates. Code without verifiable empirical proof is liability; systems tied to operational truth generate enduring value.&rdquo;
              </blockquote>

              <div className="p-4 rounded-2xl bg-[#111114] border border-white/10 space-y-2 text-xs text-zinc-300 font-light leading-relaxed">
                <span className="font-mono text-xs text-[#d4af37] uppercase tracking-wider block font-bold">
                  EMPIRICAL DISCIPLINARY STANCE
                </span>
                <p className="text-justify">
                  {language === "zh"
                    ? "职业经历深植于 PT Karya Buah Tropis 早期真实商业 B2B 运营管理，并在 iSTTS 综合科学与技术学院以全校最高学术荣誉锤炼（144 学分全 A 毕业）。完整掌控系统工程研发全生命周期：从高阶规范化数据库模式、现代 Next.js/TypeScript 交互前端、本地 AI 文档管线编排，直至食品级工业包装刀模印刷制造。"
                    : language === "id"
                    ? "Berakar dari pengelolaan operasional riil B2B PT Karya Buah Tropis sejak dini, kemudian ditempa secara akademis dengan predikat tertinggi di iSTTS (144 SKS lulus seluruh nilai A). Menguasai siklus lengkap perekayasaan: mulai dari skema database ternormalisasi, arsitektur UI/UX modern Next.js/TypeScript, otomasi pipeline kompilasi dokumen AI lokal, hingga presisi cetak kemasan nilon standar industri."
                    : "Rooted in early hands-on commercial B2B operations at PT Karya Buah Tropis, then formally tempered with the highest academic record at iSTTS (144 credits graduated with straight A's). Mastering the full lifecycle of systems engineering: from normalized database schemas, modern Next.js/TypeScript frontends, deterministic local AI document compilers, to food-grade packaging dieline manufacturing."}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#ebdca4]">{language === "zh" ? "学术记录：" : "ACADEMIC RECORD:"}</span>
                <span className="text-white font-bold">
                  {language === "zh" ? "144学分 · 100%全A · 最高优等 (4.00)" : language === "id" ? "144 SKS · 100% NILAI A · SUMMA CUM LAUDE (4.00)" : "144 CREDITS · 100% STRAIGHT A's · SUMMA CUM LAUDE (4.00)"}
                </span>
              </div>
            </div>

            {/* Right 6 cols: 4 Key Empirical Milestones */}
            <div className="col-span-6 space-y-2.5">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block font-bold">
                AUDITABLE EMPIRICAL MILESTONES
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Milestone 1 */}
                <div className="p-3 rounded-xl bg-[#111114] border border-[#d4af37]/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-editorial text-xl text-[#ebdca4] font-bold">4.00 / 4.00</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] font-mono text-xs">S.Kom.</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-300 font-semibold">IPK Sempurna iSTTS</div>
                  <p className="text-xs text-zinc-400 font-light leading-snug">
                    Predikat Sangat Memuaskan & 4x Penghargaan Praktikan Terbaik di 4 semester berturut-turut.
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="p-3 rounded-xl bg-[#111114] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-editorial text-xl text-white font-bold">150+ Pages</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">AI Pipeline</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-300 font-semibold">The Secret of Life</div>
                  <p className="text-xs text-zinc-400 font-light leading-snug">
                    Pipeline otomasi kompilasi buku personal resolusi tinggi siap cetak offset (turnaround 1 hari).
                  </p>
                </div>

                {/* Milestone 3 */}
                <div className="p-3 rounded-xl bg-[#111114] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-editorial text-xl text-emerald-400 font-bold">-25°C Stable</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs">Food Grade</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-300 font-semibold">PT. Karya Buah Tropis</div>
                  <p className="text-xs text-zinc-400 font-light leading-snug">
                    Kemasan vakum nilon komersial 90+ SKU, katalog B2B digital, izin Kementan & sertifikasi Halal.
                  </p>
                </div>

                {/* Milestone 4 */}
                <div className="p-3 rounded-xl bg-[#111114] border border-[#dc2626]/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-editorial text-xl text-[#dc2626] font-bold">&lt; 15 ms</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#dc2626]/20 text-[#fca5a5] font-mono text-xs">Zero Cost</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-300 font-semibold">CocokGa Engine</div>
                  <p className="text-xs text-zinc-400 font-light leading-snug">
                    Next.js 14 App Router deterministik dengan komputasi Web Worker, nol biaya operasional server.
                  </p>
                </div>
              </div>

              {/* 3 Pillars Summary Box */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-xs font-mono text-[#d4af37] block font-bold">PILLAR I</span>
                  <span className="text-xs text-zinc-300">Software Architecture</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#ebdca4] block font-bold">PILLAR II</span>
                  <span className="text-xs text-zinc-300">Physical Packaging</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 block font-bold">PILLAR III</span>
                  <span className="text-xs text-zinc-300">Automated Compilers</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 02 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · iSTTS IPK 4.00</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 03: 4 CORE SERVICES & 3-PHASE ENGINEERING PROCESS                   */}
      {/* ========================================================================= */}
      {exportOptions.includeHighlights && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 03</span>
            <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
              CORE SERVICES & EMPIRICAL PROCESS METHODOLOGY
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            INSIDE THE ENGINEERING LAB · RIGOROUS PRODUCTION STANDARDS
          </span>
        </div>

        {/* 4 Core Services Grid */}
        <div className="my-auto py-2 space-y-4">
          <div>
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest font-bold block mb-2">
              4 CORE SERVICE DISCIPLINES:
            </span>
            <div className="grid grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#111114] border border-white/10 space-y-1.5">
                <Code2 className="w-4 h-4 text-[#d4af37]" />
                <h4 className="font-serif-editorial text-sm text-white font-medium">
                  Full-Stack Architecture
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-snug">
                  Next.js 14/15, TypeScript, Tailwind, and Laravel backends with clean relational schemas and state management.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#111114] border border-white/10 space-y-1.5">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <h4 className="font-serif-editorial text-sm text-white font-medium">
                  AI Compilers & RAG
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-snug">
                  Deterministic Python compiling engines, structured LLM prompt orchestration, and zero-leakage local pipelines.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#111114] border border-white/10 space-y-1.5">
                <Package className="w-4 h-4 text-[#dc2626]" />
                <h4 className="font-serif-editorial text-sm text-white font-medium">
                  Physical Packaging (-25°C)
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-snug">
                  Sub-millimeter industrial CAD dielines, food-grade vacuum nylon, Pantone color calibration, and offset print layouts.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#111114] border border-white/10 space-y-1.5">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <h4 className="font-serif-editorial text-sm text-white font-medium">
                  B2B Systems & Operations
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-snug">
                  90+ SKU digital catalogs, automated inventory ledgers, standardized SOPs, and wholesale Horeca conversion funnels.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Phase Process Breakdown */}
          <div className="pt-2 border-t border-white/10">
            <span className="text-xs font-mono text-[#ebdca4] uppercase tracking-widest font-bold block mb-2">
              THE 3-PHASE ENGINEERING DELIVERY PROCESS:
            </span>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-[#d4af37] font-bold block">PHASE 01: ARCHITECTURAL INGESTION</span>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Deep mathematical domain modeling, 3NF schema normalization, and data sanitization. Decoupling core logic from the presentation layer.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-[#ebdca4] font-bold block">PHASE 02: HIGH-FIDELITY IMPLEMENTATION</span>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Rigorous coding with zero-slop deterministic execution, in-browser Web Workers for sub-15ms compute, and component design systems.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <span className="text-xs font-mono text-emerald-400 font-bold block">PHASE 03: EMPIRICAL PRODUCTION DELIVERY</span>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Containerized Docker cutover, thermal testing (-25°C), regulatory compliance (Halal & Kementan), and verifiable client deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>MASTER PORTFOLIO DECK · PAGE 03 / 15</span>
          <span>JEM ANGKASA WIJAYA, S.KOM. · ENGINEERING METHODOLOGY</span>
        </div>
      </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 04: FLAGSHIP SYSTEM 01 — THE SECRET OF LIFE                          */}
      {/* ========================================================================= */}
      {exportOptions.includeFeatured && (track === "all" || track === "it" || track === "multimedia") && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-[#d4af37]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 04</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                FLAGSHIP 01: THE SECRET OF LIFE (AI PRINT ENGINE)
              </span>
            </div>
            <a
              href="https://thesecretoflife.id"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#d4af37] underline flex items-center gap-1"
            >
              <span>thesecretoflife.id</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Body */}
          <div className="grid grid-cols-12 gap-6 my-auto py-2 items-center">
            
            {/* Left 7 cols: Technical Details */}
            <div className="col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#ebdca4] font-mono text-xs uppercase border border-[#d4af37]/40 font-bold">
                  AI ORCHESTRATION & LUXURY PRINT ENGINE · 2024–2026
                </span>
                <span className="text-zinc-400 font-mono text-xs">·</span>
                <span className="text-zinc-400 font-mono text-xs">Lead Systems Architect & Product Engineer</span>
              </div>

              <h2 className="font-serif-editorial text-3xl text-white font-medium">
                The Secret of Life — Automated Book Compilation Pipeline
              </h2>

              <p className="text-xs text-zinc-300 font-light leading-relaxed text-justify">
                {flagshipProjects[0].description}
              </p>

              {/* 4 Factual Highlights */}
              <div className="space-y-1.5 pt-1">
                {flagshipProjects[0].highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[10.5px] text-zinc-300 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* 4-Step Blueprint Flow */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
                {flagshipProjects[0].blueprintFlow?.map((b, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#111114] border border-white/5 space-y-0.5">
                    <span className="text-xs font-mono text-[#d4af37] font-bold block">STEP 0{idx + 1}</span>
                    <div className="text-xs font-mono text-white font-medium truncate">{b.step}</div>
                    <div className="text-[8.5px] text-zinc-400 leading-tight truncate">{b.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Visual Gallery & Metrics */}
            <div className="col-span-5 space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#d4af37]/50 shadow-xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/projects/secret-of-life/white_desk.png"
                  alt="The Secret of Life Desk Mockup"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/projects/secret-of-life/close_up.png"
                    alt="Gold Foil Hardcover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/projects/secret-of-life/marble.png"
                    alt="Marble Deck"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-[#ebdca4]">VERIFIED TURNAROUND:</span>
                <span className="text-emerald-400 font-bold">WEEKS ➔ 1 DAY COMPILATION</span>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 04 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · FLAGSHIP CASE STUDY 01</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 05: FLAGSHIP SYSTEM 02 — COCOKGA RELATIONSHIP ENGINE                */}
      {/* ========================================================================= */}
      {exportOptions.includeFeatured && (track === "all" || track === "it") && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 05</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                FLAGSHIP 02: COCOKGA (ALGORITHMIC RELATIONSHIP ENGINE)
              </span>
            </div>
            <a
              href="https://siapacocok.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#d4af37] underline flex items-center gap-1"
            >
              <span>siapacocok.com · cocokga.my.id</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Body */}
          <div className="grid grid-cols-12 gap-6 my-auto py-2 items-center">
            
            {/* Left 7 cols */}
            <div className="col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-mono text-xs uppercase border border-white/15 font-bold">
                  HIGH-CONCURRENCY WEB APPLICATION · 2025–2026
                </span>
                <span className="text-zinc-400 font-mono text-xs">·</span>
                <span className="text-zinc-400 font-mono text-xs">Full-Stack Software Engineer</span>
              </div>

              <h2 className="font-serif-editorial text-3xl text-white font-medium">
                CocokGa — High-Performance Relationship Compatibility Engine
              </h2>

              <p className="text-xs text-zinc-300 font-light leading-relaxed text-justify">
                {flagshipProjects[1].description}
              </p>

              {/* 4 Factual Highlights */}
              <div className="space-y-1.5 pt-1">
                {flagshipProjects[1].highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[10.5px] text-zinc-300 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* 4-Step Blueprint Flow */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
                {flagshipProjects[1].blueprintFlow?.map((b, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#111114] border border-white/5 space-y-0.5">
                    <span className="text-xs font-mono text-[#d4af37] font-bold block">STEP 0{idx + 1}</span>
                    <div className="text-xs font-mono text-white font-medium truncate">{b.step}</div>
                    <div className="text-[8.5px] text-zinc-400 leading-tight truncate">{b.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols */}
            <div className="col-span-5 space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/projects/cocokga/cocokga_bg_affinity.jpg"
                  alt="CocokGa Compatibility Engine"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10">
                  <span className="text-[#ebdca4] font-bold block text-base">&lt; 15 ms</span>
                  <span className="text-xs text-zinc-400">Client Compute Latency</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10">
                  <span className="text-emerald-400 font-bold block text-base">$0.00</span>
                  <span className="text-xs text-zinc-400">Server Cost per Calc</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex flex-wrap gap-1">
                {flagshipProjects[1].techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-white/5 font-mono text-xs text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 05 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · FLAGSHIP CASE STUDY 02</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 06: FLAGSHIP SYSTEM 03 — PT. KARYA BUAH TROPIS (NANGKA PREMIUM)     */}
      {/* ========================================================================= */}
      {exportOptions.includeFeatured && (track === "all" || track === "multimedia") && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-[#d4af37]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 06</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                FLAGSHIP 03: NANGKA PREMIUM | PT. KARYA BUAH TROPIS
              </span>
            </div>
            <a
              href="https://www.nangkapremium.id"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#d4af37] underline flex items-center gap-1"
            >
              <span>nangkapremium.id · karyabuahtropis.com</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Body */}
          <div className="grid grid-cols-12 gap-6 my-auto py-2 items-center">
            
            {/* Left 7 cols */}
            <div className="col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#ebdca4] font-mono text-xs uppercase border border-[#d4af37]/40 font-bold">
                  B2B COMMERCIAL COLD-CHAIN PLATFORM · 2024–PRESENT
                </span>
                <span className="text-zinc-400 font-mono text-xs">·</span>
                <span className="text-zinc-400 font-mono text-xs">Director & Digital Systems Architect</span>
              </div>

              <h2 className="font-serif-editorial text-3xl text-white font-medium">
                Nangka Premium — B2B Wholesale & Cold-Chain Logistics Hub
              </h2>

              <p className="text-xs text-zinc-300 font-light leading-relaxed text-justify">
                {flagshipProjects[2].description}
              </p>

              {/* 4 Factual Highlights */}
              <div className="space-y-1.5 pt-1">
                {flagshipProjects[2].highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[10.5px] text-zinc-300 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* 4-Step Blueprint Flow */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
                {flagshipProjects[2].blueprintFlow?.map((b, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#111114] border border-white/5 space-y-0.5">
                    <span className="text-xs font-mono text-[#d4af37] font-bold block">STEP 0{idx + 1}</span>
                    <div className="text-xs font-mono text-white font-medium truncate">{b.step}</div>
                    <div className="text-[8.5px] text-zinc-400 leading-tight truncate">{b.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols */}
            <div className="col-span-5 space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#d4af37]/50 shadow-xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/projects/branding/kbt-packaging.jpg"
                  alt="PT. Karya Buah Tropis Cold-Chain Packaging"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10">
                  <span className="text-[#ebdca4] font-bold block text-base">-18°C Stable</span>
                  <span className="text-xs text-zinc-400">Thermo King Fleet</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10">
                  <span className="text-emerald-400 font-bold block text-base">Halal & Kementan</span>
                  <span className="text-xs text-zinc-400">Ministry Certified</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex flex-wrap gap-1">
                {flagshipProjects[2].techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-white/5 font-mono text-xs text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 06 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · FLAGSHIP CASE STUDY 03</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 07: FLAGSHIP SYSTEM 04 — CATATCRYPTO (S1 THESIS GRADE A)            */}
      {/* ========================================================================= */}
      {exportOptions.includeFeatured && (track === "all" || track === "it" || track === "business") && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-[#dc2626]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#dc2626]">/ 07</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                FLAGSHIP 04: CATATCRYPTO & QUANT RESEARCH (S1 THESIS GRADE A)
              </span>
            </div>
            <span className="font-mono text-xs text-emerald-400 font-bold">
              iSTTS S1 THESIS DEFENSE · PERFECT GRADE A
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-cols-12 gap-6 my-auto py-2 items-center">
            
            {/* Left 7 cols */}
            <div className="col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#dc2626]/20 text-[#fca5a5] font-mono text-xs uppercase border border-[#dc2626]/40 font-bold">
                  QUANTITATIVE FINANCE & PORTFOLIO TRACKING · 2022–2023
                </span>
                <span className="text-zinc-400 font-mono text-xs">·</span>
                <span className="text-zinc-400 font-mono text-xs">Lead Developer & Quantitative Researcher</span>
              </div>

              <h2 className="font-serif-editorial text-3xl text-white font-medium">
                CatatCrypto — Investment Management & Multi-Market Trading Journal
              </h2>

              <p className="text-xs text-zinc-300 font-light leading-relaxed text-justify">
                {flagshipProjects[3].description}
              </p>

              {/* 4 Factual Highlights */}
              <div className="space-y-1.5 pt-1">
                {flagshipProjects[3].highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[10.5px] text-zinc-300 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* 4-Step Blueprint Flow */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
                {flagshipProjects[3].blueprintFlow?.map((b, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-[#111114] border border-white/5 space-y-0.5">
                    <span className="text-xs font-mono text-[#dc2626] font-bold block">STEP 0{idx + 1}</span>
                    <div className="text-xs font-mono text-white font-medium truncate">{b.step}</div>
                    <div className="text-[8.5px] text-zinc-400 leading-tight truncate">{b.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols */}
            <div className="col-span-5 space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#dc2626]/40 shadow-xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/projects/ai-automation/invoice-batch.png"
                  alt="CatatCrypto Portfolio Suite"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10">
                  <span className="text-emerald-400 font-bold block text-base">Grade A</span>
                  <span className="text-xs text-zinc-400">Skripsi Nilai Sempurna</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10">
                  <span className="text-[#ebdca4] font-bold block text-base">3NF Normal</span>
                  <span className="text-xs text-zinc-400">Relational Database</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex flex-wrap gap-1">
                {flagshipProjects[3].techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-white/5 font-mono text-xs text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 07 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · S1 THESIS QUANT SUITE</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 08: PHYSICAL PACKAGING MANUFACTURING & BRAND ARCHITECTURE           */}
      {/* ========================================================================= */}
      {exportOptions.includeFeatured && (track === "all" || track === "multimedia" || track === "business") && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 08</span>
            <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
              PHYSICAL PACKAGING MANUFACTURING & INDUSTRIAL DIELINES
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            SUB-MILLIMETER CAD ACCURACY · FOOD-GRADE NYLON (-25°C)
          </span>
        </div>

        {/* 3 Creative Projects Showcase */}
        <div className="grid grid-cols-3 gap-5 my-auto py-2">
          
          {/* Card 1: PT. Karya Buah Tropis & Key's Brand */}
          <div className="p-3.5 rounded-2xl bg-[#111114] border border-[#d4af37]/40 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#ebdca4] font-mono text-xs uppercase font-bold">
                VACUUM NYLON (-25°C) · 2021–2023
              </span>
              <h3 className="font-serif-editorial text-lg text-white font-medium">
                PT. Karya Buah Tropis & Key&apos;s Brand Packaging
              </h3>
              <p className="text-xs text-zinc-300 font-light leading-snug">
                Pola pisau kemasan plastik vakum nilon food-grade berstandar industri dengan ketahanan suhu beku ekstrem -25°C. Dilengkapi standing pouch zipper Key&apos;s Brand alpukat dadu dan katalog harga B2B 3.4MB.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/15 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/projects/branding/kbt-packaging.jpg"
                alt="KBT Packaging Dielines"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-1 pt-1 border-t border-white/5 font-mono text-[8.5px] text-zinc-400">
              <span>Industrial Dielines</span> · <span>Food-Grade Nylon</span> · <span>Pantone Calibration</span>
            </div>
          </div>

          {/* Card 2: Nasi Goreng Jan'Ok Franchise (26 Branches) */}
          <div className="p-3.5 rounded-2xl bg-[#111114] border border-white/10 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs uppercase font-bold">
                26 FRANCHISE BRANCHES · 2013–2020
              </span>
              <h3 className="font-serif-editorial text-lg text-white font-medium">
                Nasi Goreng Jan&apos;Ok Franchise Brand & Takeaway Boxes
              </h3>
              <p className="text-xs text-zinc-300 font-light leading-snug">
                Perancangan identitas visual merek, menu engineering tingkatan pedas, kotak kardus takeaway fungsional, dan standardisasi buku besar operasional di 26 gerai waralaba kuliner.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/15 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/projects/branding/janok-packaging.png"
                alt="JanOk Franchise Packaging"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-1 pt-1 border-t border-white/5 font-mono text-[8.5px] text-zinc-400">
              <span>26 Gerai Waralaba</span> · <span>Takeaway Box</span> · <span>CorelDRAW Master</span>
            </div>
          </div>

          {/* Card 3: Chicken Center Takeaway Lock-Tab Dielines */}
          <div className="p-3.5 rounded-2xl bg-[#111114] border border-white/10 space-y-2.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs uppercase font-bold">
                LOCK-TAB DIELINE · 2010–2014
              </span>
              <h3 className="font-serif-editorial text-lg text-white font-medium">
                Chicken Center Greaseproof Packaging Dielines
              </h3>
              <p className="text-xs text-zinc-300 font-light leading-snug">
                Pola pisau plong cetak industri untuk kotak kardus takeaway anti minyak lipat kancing tanpa lem kimia beracun, kantong kertas ayam goreng, dan spanduk gerobak kemitraan.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/15 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/projects/branding/chicken-center-packaging.png"
                alt="Chicken Center Dielines"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-1 pt-1 border-t border-white/5 font-mono text-[8.5px] text-zinc-400">
              <span>Non-Toxic Lock-Tab</span> · <span>Greaseproof Paper</span> · <span>Offset Plong</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>MASTER PORTFOLIO DECK · PAGE 08 / 15</span>
          <span>JEM ANGKASA WIJAYA, S.KOM. · PHYSICAL PACKAGING COMPENDIUM</span>
        </div>
      </section>
    )}

      {/* ========================================================================= */}
      {/* SLIDE 09: MASTER PROJECT ARCHIVE LEDGER — PART 1 (AI, WEB & QUANT)        */}
      {/* ========================================================================= */}
      {exportOptions.includeFeatured && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 09</span>
            <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
              MASTER PROJECT ARCHIVE LEDGER — PART 1 (2020 – 2026)
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            100% AUDITABLE CODEBASES & REAL-WORLD DEPLOYMENTS
          </span>
        </div>

        {/* Tabular Ledger */}
        <div className="my-auto py-2">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/20 font-mono text-[#d4af37] uppercase text-xs tracking-wider">
                <th className="py-2 px-3">Year</th>
                <th className="py-2 px-3">Project / Platform</th>
                <th className="py-2 px-3">Domain</th>
                <th className="py-2 px-3">Role & Responsibilities</th>
                <th className="py-2 px-3">Verified Tech Stack</th>
                <th className="py-2 px-3 text-right">Status / Deliverable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {allArchiveProjects.slice(0, 10).map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02]">
                  <td className="py-2 px-3 font-mono text-[#ebdca4] whitespace-nowrap">{p.year}</td>
                  <td className="py-2 px-3 font-serif-editorial text-xs text-white font-medium">{p.title}</td>
                  <td className="py-2 px-3 font-mono text-xs uppercase text-zinc-400">{p.category}</td>
                  <td className="py-2 px-3 text-zinc-300 text-[9.5px]">{p.role}</td>
                  <td className="py-2 px-3 font-mono text-xs text-zinc-400">{p.techStack.slice(0, 3).join(", ")}</td>
                  <td className="py-2 px-3 font-mono text-xs text-right text-emerald-400">
                    {p.liveUrl ? "🌐 Production Live" : "✅ Audited Deliverable"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>MASTER PORTFOLIO DECK · PAGE 09 / 15</span>
          <span>JEM ANGKASA WIJAYA, S.KOM. · MASTER ARCHIVE LEDGER PART 1</span>
        </div>
      </section>
    )}

      {/* ========================================================================= */}
      {/* SLIDE 10: MASTER PROJECT ARCHIVE LEDGER — PART 2 (DESKTOP & PACKAGING)    */}
      {/* ========================================================================= */}
      {exportOptions.includeFeatured && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 10</span>
            <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
              MASTER PROJECT ARCHIVE LEDGER — PART 2 (2010 – 2023)
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            ENTERPRISE DESKTOP SUITES, PACKAGING DIELINES & PROTOCOLS
          </span>
        </div>

        {/* Tabular Ledger */}
        <div className="my-auto py-2">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/20 font-mono text-[#d4af37] uppercase text-xs tracking-wider">
                <th className="py-2 px-3">Year</th>
                <th className="py-2 px-3">Project / Platform</th>
                <th className="py-2 px-3">Domain</th>
                <th className="py-2 px-3">Role & Responsibilities</th>
                <th className="py-2 px-3">Verified Tech Stack</th>
                <th className="py-2 px-3 text-right">Status / Deliverable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {allArchiveProjects.slice(10).map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02]">
                  <td className="py-2 px-3 font-mono text-[#ebdca4] whitespace-nowrap">{p.year}</td>
                  <td className="py-2 px-3 font-serif-editorial text-xs text-white font-medium">{p.title}</td>
                  <td className="py-2 px-3 font-mono text-xs uppercase text-zinc-400">{p.category}</td>
                  <td className="py-2 px-3 text-zinc-300 text-[9.5px]">{p.role}</td>
                  <td className="py-2 px-3 font-mono text-xs text-zinc-400">{p.techStack.slice(0, 3).join(", ")}</td>
                  <td className="py-2 px-3 font-mono text-xs text-right text-emerald-400">
                    {p.liveUrl ? "🌐 Production Live" : "✅ Factory / Deployed"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>MASTER PORTFOLIO DECK · PAGE 10 / 15</span>
          <span>JEM ANGKASA WIJAYA, S.KOM. · MASTER ARCHIVE LEDGER PART 2</span>
        </div>
      </section>
    )}

      {/* ========================================================================= */}
      {/* SLIDE 11: PROFESSIONAL EXPERIENCE HISTORY & CORPORATE RECORD             */}
      {/* ========================================================================= */}
      {exportOptions.includeExperience && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 11</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                PROFESSIONAL EXPERIENCE & ENGINEERING CHRONOLOGY
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              5+ YEARS FACTUAL CORPORATE RECORD (2020 – 2026)
            </span>
          </div>

          {/* 4 Experience Roles Grid 2x2 with ALL Bullet Points */}
          <div className="grid grid-cols-2 gap-4 my-auto py-2">
            {experiencesData.map((exp) => (
              <div
                key={exp.id}
                className="p-3.5 rounded-2xl bg-[#111114] border border-white/10 space-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-1 border-b border-white/5">
                    <span className="font-mono text-[9.5px] text-[#d4af37] uppercase tracking-wider font-bold">
                      {exp.type}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 font-mono text-[8.5px] text-zinc-300">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="font-serif-editorial text-base text-white font-medium pt-1">
                    {exp.role}
                  </h4>

                  <div className="text-xs font-mono text-[#ebdca4] flex items-center gap-2 pt-0.5">
                    <span>{exp.company}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-400">{exp.location}</span>
                  </div>

                  <p className="text-xs text-zinc-300 font-light leading-snug pt-1">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-1 pt-1.5 border-t border-white/5">
                  {exp.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[9.5px] text-zinc-300 font-light leading-tight">
                      <CheckCircle2 className="w-3 h-3 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-1.5 py-0.2 rounded bg-white/5 text-[8.5px] font-mono text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 11 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · CORPORATE EXPERIENCE HISTORY</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 12: 6-PILLAR TECHNICAL SKILLS AUDITABLE PROOF MATRIX                */}
      {/* ========================================================================= */}
      {exportOptions.includeSkills && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 12</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                6-PILLAR TECHNICAL SKILLS AUDITABLE PROOF MATRIX
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              TIER 1 (PROD ACTIVE) · TIER 2 (ACADEMIC VERIFIED) · TIER 3 (CERTIFIED)
            </span>
          </div>

          {/* 6 Pillars in 3x2 Grid */}
          <div className="grid grid-cols-3 gap-3.5 my-auto py-2">
            {skillsData.map((category) => (
              <div
                key={category.id}
                className="p-3 rounded-2xl bg-[#111114] border border-white/10 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-1 border-b border-white/10">
                    <h4 className="font-mono text-xs font-bold text-[#ebdca4]">
                      {category.title}
                    </h4>
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  </div>
                  <p className="text-[9.5px] text-zinc-400 font-mono pt-1 leading-tight">
                    {category.description}
                  </p>
                </div>

                {/* Tier 1 Skills */}
                <div className="space-y-1">
                  <span className="text-[8.5px] font-mono text-[#d4af37] font-bold block uppercase">
                    TIER 1 — PRODUCTION ACTIVE:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {category.tier1.map((s, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-white/5 border border-[#d4af37]/30 text-xs font-mono text-zinc-200">
                        {s.name} <strong className="text-[#ebdca4]">[{s.tag}]</strong>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tier 2 Skills */}
                <div className="space-y-1 pt-1 border-t border-white/5">
                  <span className="text-[8.5px] font-mono text-zinc-400 font-bold block uppercase">
                    TIER 2 — ACADEMIC VERIFIED:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {category.tier2.map((s, idx) => (
                      <span key={idx} className="px-1.5 py-0.2 rounded bg-white/[0.02] border border-white/5 text-[8.5px] font-mono text-zinc-400">
                        {s.name} [{s.tag}]
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tier 3 Skills */}
                <div className="space-y-1 pt-1 border-t border-white/5">
                  <span className="text-[8.5px] font-mono text-zinc-400 font-bold block uppercase">
                    TIER 3 — CERTIFIED / LAB:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {category.tier3.map((s, idx) => (
                      <span key={idx} className="px-1.5 py-0.2 rounded bg-white/[0.01] border border-white/5 text-[8.5px] font-mono text-zinc-400">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 12 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · 6-PILLAR AUDIT MATRIX</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 13: ACADEMIC CREDENTIALS, 4x AWARDS & OFFICIAL SIGNOFF              */}
      {/* ========================================================================= */}
      {exportOptions.includeCredentials && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-[#d4af37]/50 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 13</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                ACADEMIC HONORS, 4x AWARDS, CERTIFICATIONS & OFFICIAL SIGNOFF
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              INSTITUT SAINS DAN TEKNOLOGI TERPADU SURABAYA (iSTTS)
            </span>
          </div>

          {/* 3 Columns: Education, Awards, Official Stamp */}
          <div className="grid grid-cols-12 gap-5 my-auto py-2 items-stretch">
            
            {/* Col 1 (4 cols): Formal Education */}
            <div className="col-span-4 p-4 rounded-2xl bg-[#111114] border border-[#d4af37]/40 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#d4af37] font-bold uppercase tracking-wider block">
                  FORMAL ACADEMIC DEGREE
                </span>
                <h3 className="font-serif-editorial text-2xl text-white font-medium pt-1">
                  Sarjana Komputer (S.Kom.)
                </h3>
                <div className="text-xs font-mono text-zinc-300">
                  Institut Sains dan Teknologi Terpadu Surabaya (iSTTS)
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  S1 Sistem Informasi Bisnis · 2018 – 2023
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-[#d4af37]/30 space-y-1 text-center">
                <div className="font-serif-editorial text-3xl text-[#ebdca4] font-bold">{language === "id" ? "IPK 4.00 / 4.00" : "4.00 / 4.00 GPA"}</div>
                <div className="text-xs font-mono text-white font-semibold uppercase">
                  Predikat Resmi: Sangat Memuaskan
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  144 SKS Lulus Seluruh Nilai A Tanpa Remedial
                </div>
              </div>

              <div className="text-xs text-zinc-400 font-light leading-snug">
                Fokus riset tugas akhir: Rekayasa sistem web modern, otomasi kalkulasi data, dan sinkronisasi proses bisnis multi-entitas (Skripsi A Sempurna).
              </div>
            </div>

            {/* Col 2 (4 cols): 4x Best Practitioner & Certifications */}
            <div className="col-span-4 p-4 rounded-2xl bg-[#111114] border border-[#dc2626]/40 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#dc2626] font-bold uppercase tracking-wider block">
                  4x BEST ACADEMIC PRACTITIONER
                </span>
                <p className="text-xs text-zinc-400 font-mono">
                  Penghargaan Praktikan Terbaik Laboratorium Komputer iSTTS:
                </p>
              </div>

              <div className="space-y-1.5">
                {awardsData.map((award, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-black/50 border border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#ebdca4] font-semibold">{award.subject}</span>
                    <span className="text-zinc-400">{award.year}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1">
                <span className="text-xs font-mono text-zinc-400 font-bold block uppercase">
                  VERIFIED INDUSTRY CERTIFICATIONS:
                </span>
                <p className="text-xs font-mono text-zinc-300 leading-tight">
                  IBM Granite AI (2024), Dicoding React Web (2022), SOLID Principles (2021), AWS Cloud (2021), RevoU Product Management (2022).
                </p>
              </div>
            </div>

            {/* Col 3 (4 cols): Trilingual Skills & Official Seal */}
            <div className="col-span-4 p-4 rounded-2xl bg-[#111114] border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  TRILINGUAL PROFICIENCY
                </span>
                <div className="space-y-1.5 pt-2 text-xs font-mono">
                  <div className="flex justify-between items-center p-1.5 rounded bg-white/5">
                    <span>🇮🇩 Indonesian</span>
                    <strong className="text-[#ebdca4]">Native / Bilingual</strong>
                  </div>
                  <div className="flex justify-between items-center p-1.5 rounded bg-white/5">
                    <span>🇬🇧 English</span>
                    <strong className="text-white">Cambridge A-Level (Prof.)</strong>
                  </div>
                  <div className="flex justify-between items-center p-1.5 rounded bg-white/5">
                    <span>🇨🇳 Mandarin Chinese</span>
                    <strong className="text-emerald-400">HSK Level 4 (247/300)</strong>
                  </div>
                </div>
              </div>

              {/* Official Seal / Signature Medallion */}
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#18181b] to-black border border-[#d4af37]/60 text-center space-y-1">
                <span className="font-serif-editorial text-2xl text-[#ebdca4] tracking-widest font-normal block">
                  JAW<span className="text-[#dc2626]">.</span>
                </span>
                <div className="text-xs font-mono text-[#d4af37] font-bold uppercase tracking-widest">
                  OFFICIAL AUDITED PORTFOLIO SEAL
                </div>
                <div className="text-[8.5px] font-mono text-zinc-400">
                  Signed & Authenticated by Jem Angkasa Wijaya, S.Kom.
                </div>
                <div className="text-[8px] font-mono text-zinc-400 pt-0.5">
                  Direct Verification: jemangkasa.work@gmail.com
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 13 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · S1 SISTEM INFORMASI BISNIS iSTTS</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 14: DIRECT CONTACT, STRATEGIC CHANNELS & PROPOSAL SPECIFICATION     */}
      {/* ========================================================================= */}
      {exportOptions.includeContact && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 14</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                DIRECT COMMUNICATION CHANNELS & STRATEGIC ENGAGEMENT
              </span>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              SURABAYA, INDONESIA · GMT+7 (WIB) · SLA &lt;24H RESPONSE
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-cols-12 gap-5 my-auto py-2 items-stretch">
            
            {/* Left 7 cols: Strategic Engagement Blueprint & Direct Inquiry Specifications */}
            <div className="col-span-7 p-4 rounded-2xl bg-[#111114] border border-[#d4af37]/40 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                  <span>TERBUKA UNTUK KOLABORASI STRATEGIS & KONTRAK SISTEM (Q1–Q4 2026)</span>
                </div>

                <h3 className="font-serif-editorial text-2xl text-white font-medium">
                  Direct Strategic Inquiry & System Consultation
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Tersedia untuk perancangan arsitektur perangkat lunak skala produksi, otomasi AI pipeline lokal, rekayasa kemasan industri rantai dingin, dan konsultasi teknis tingkat tinggi.
                </p>
              </div>

              {/* Inquiry Architecture Blueprint Table */}
              <div className="space-y-2 p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs">
                <div className="text-[#ebdca4] font-bold uppercase tracking-wider text-xs border-b border-white/10 pb-1 flex justify-between">
                  <span>ENGAGEMENT DOMAINS</span>
                  <span className="text-zinc-400 font-normal">AVERAGE TURNAROUND</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-zinc-300 text-[9.5px]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>AI Compilation & LLM Pipelines</span>
                  </div>
                  <div className="text-right text-emerald-400">Production Ready: 2–4 Weeks</div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>High-Concurrency Web Platforms</span>
                  </div>
                  <div className="text-right text-emerald-400">Production Ready: 3–6 Weeks</div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Food-Grade Packaging Dielines (-25°C)</span>
                  </div>
                  <div className="text-right text-emerald-400">CAD Plong Ready: 3–7 Days</div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Enterprise ERP / Multi-Tenant Systems</span>
                  </div>
                  <div className="text-right text-emerald-400">Full Scoping: 4–8 Weeks</div>
                </div>
              </div>

              {/* Response SLA Commitment */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>SLA Respons Resmi: Terjamin &lt; 24 Jam Kerja</span>
                </div>
                <span className="text-[#ebdca4] font-bold">100% Direct to Principal</span>
              </div>
            </div>

            {/* Right 5 cols: Verified Direct Contact Channels */}
            <div className="col-span-5 space-y-2 flex flex-col justify-between">
              
              {/* Channel 1: Email */}
              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#d4af37]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase block">PRIMARY EMAIL (RFP & SPECS)</span>
                    <a href="mailto:jemangkasa.work@gmail.com" className="text-xs font-mono text-white font-semibold hover:underline">
                      jemangkasa.work@gmail.com
                    </a>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </div>

              {/* Channel 2: WhatsApp */}
              <div className="p-2.5 rounded-xl bg-[#111114] border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase block font-semibold">WHATSAPP DIRECT CHAT</span>
                    <a href="https://wa.me/6281273567384" target="_blank" rel="noreferrer" className="text-xs font-mono text-white font-semibold hover:underline">
                      +62 812-7356-7384
                    </a>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Instant</span>
              </div>

              {/* Channel 3: LinkedIn */}
              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase block">PROFESSIONAL NETWORK</span>
                    <span className="text-xs font-mono text-white">linkedin.com/in/jem-angkasa-wijaya</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </div>

              {/* Channel 4: GitHub */}
              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase block">OPEN-SOURCE CODEBASES</span>
                    <span className="text-xs font-mono text-white">github.com/JAW12</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </div>

              {/* Channel 5: Geographic Base */}
              <div className="p-2.5 rounded-xl bg-[#111114] border border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase block">BASE LOCATION & MOBILITY</span>
                    <span className="text-xs font-mono text-white">Surabaya, ID · Global Remote Access</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400">GMT+7</span>
              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 14 / 15</span>
            <span>JEM ANGKASA WIJAYA, S.KOM. · DIRECT CONTACT & STRATEGIC ENGAGEMENT</span>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SLIDE 15: EXECUTIVE FOOTER, SITEMAP & MONUMENTAL WORDMARK SPREAD           */}
      {/* ========================================================================= */}
      {exportOptions.includeContact && (
        <section className="print-landscape-page bg-[#09090b] border-2 border-[#d4af37]/60 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl text-[#d4af37]">/ 15</span>
              <span className="font-serif-editorial text-xl text-white uppercase tracking-wider">
                EXECUTIVE FOOTER, SITEMAP & MONUMENTAL SIGN-OFF
              </span>
            </div>
            <span className="font-mono text-xs text-[#ebdca4] font-semibold">
              FINAL COMPENDIUM · 100% AUDITED RECORD (2010 – 2026)
            </span>
          </div>

          {/* Top Collaboration Callout */}
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-[#d4af37] font-light">↗</span>
              <h2 className="font-serif-editorial text-2xl text-white uppercase tracking-tight">
                LET&apos;S WORK <span className="text-[#ebdca4] italic">TOGETHER</span>
              </h2>
            </div>
            <div className="px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-zinc-300">
              Jem Angkasa Wijaya, S.Kom. · Systems Architect & Product Engineer
            </div>
          </div>

          {/* 3-Column Bracketed Editorial Sitemap WITH MONUMENTAL WORDMARK OVERLAY */}
          <div className="relative w-full py-6 my-auto overflow-hidden border-y border-white/10">
            {/* Background Overlay: Monumental Ghost Typography Edge-to-Edge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
              <svg
                viewBox="0 0 1600 140"
                className="w-full h-auto block select-none pointer-events-none"
                preserveAspectRatio="xMidYMid meet"
              >
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  textLength="1540"
                  lengthAdjust="spacing"
                  fill="rgba(255, 255, 255, 0.02)"
                  stroke="rgba(212, 175, 55, 0.45)"
                  strokeWidth="1.8"
                  className="font-serif-editorial font-black uppercase"
                  style={{
                    fontFamily: '"Cormorant Garamond", "Cinzel", "Playfair Display", Georgia, serif',
                    fontWeight: 900,
                    fontSize: "120px",
                  }}
                >
                  JEM ANGKASA WIJAYA
                </text>
              </svg>
            </div>

            {/* Foreground: 3-Column Bracketed Editorial Sitemap */}
            <div className="grid grid-cols-3 gap-6 relative z-10">
              {/* Column 1: Navigation */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block font-bold">
                  ■ ■ [ NAVIGATION INDEX ]
                </span>
                <div className="flex flex-col space-y-1 text-[9.5px] font-mono text-zinc-400">
                  <span>[ 01 · HOME / COVER SPREAD ]</span>
                  <span>[ 02 · PHILOSOPHY & ABOUT ]</span>
                  <span>[ 03 · ENGINEERING DISCIPLINES ]</span>
                  <span>[ 04 · SELECTED FLAGSHIP WORKS ]</span>
                  <span>[ 05 · MASTER ARCHIVE LEDGER ]</span>
                </div>
              </div>

              {/* Column 2: Disciplines & Rigor */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block font-bold">
                  ■ ■ [ CORE DISCIPLINES ]
                </span>
                <div className="flex flex-col space-y-1 text-[9.5px] font-mono text-zinc-400">
                  <span>[ FULL-STACK SYSTEMS ARCHITECTURE ]</span>
                  <span>[ COLD-CHAIN INDUSTRIAL PACKAGING ]</span>
                  <span>[ LOCAL RAG & AI EMBEDDING PIPELINES ]</span>
                  <span>[ 4.00 GPA ALGORITHMIC ENGINEERING ]</span>
                  <span>[ MULTI-TENANT ENTERPRISE BACKENDS ]</span>
                </div>
              </div>

              {/* Column 3: Verified Connections */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block font-bold">
                  ■ ■ [ NETWORK & PROOFS ]
                </span>
                <div className="flex flex-col space-y-1 text-[9.5px] font-mono text-zinc-400">
                  <span>[ GITHUB: GITHUB.COM/JAW12 ]</span>
                  <span>[ LINKEDIN: JEM-ANGKASA-WIJAYA ]</span>
                  <span>[ EMAIL: JEMANGKASA.WORK@GMAIL.COM ]</span>
                  <span>[ PHONE/WA: +62 812-7356-7384 ]</span>
                  <span>[ PORTFOLIO: JAW12.GITHUB.IO ]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Persona & Verification Capsule Bar */}
          <div className="flex items-center justify-between pt-1 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-3 text-zinc-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/avatar/profile-quarter.png"
                  alt="Jem Angkasa"
                  className="w-4 h-4 rounded-full object-cover"
                />
                <span>Jem Angkasa Wijaya, S.Kom.</span>
              </div>
              <span className="text-[#ebdca4]">iSTTS {language === "id" ? "IPK 4.00 / 4.00" : "4.00 / 4.00 GPA"} (Sangat Memuaskan)</span>
              <span>·</span>
              <span>4x Praktikan Terbaik</span>
            </div>
            <div>
              <span>Surabaya, Indonesia · Worldwide Delivery</span>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>MASTER PORTFOLIO DECK · PAGE 15 / 15 (OFFICIAL CONCLUSION)</span>
            <span>© 2026 JEM ANGKASA WIJAYA, S.KOM. ALL RIGHTS RESERVED. · jaw12.github.io</span>
          </div>
        </section>
      )}

    </div>
  );
}
