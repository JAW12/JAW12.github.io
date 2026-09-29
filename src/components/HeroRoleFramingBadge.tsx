"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Code2, Package, Cpu, Award } from "lucide-react";

export function HeroRoleFramingBadge() {
  const { language } = useLanguage();

  return (
    <div className="relative p-5 sm:p-7 rounded-2xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-[#d4af37]/40 overflow-hidden max-w-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] space-y-4">
      {/* Corner Crop Accents */}
      <span className="absolute top-2 left-2 font-mono text-xs text-[#d4af37]/40 select-none">┌</span>
      <span className="absolute top-2 right-2 font-mono text-xs text-[#d4af37]/40 select-none">┐</span>
      <span className="absolute bottom-2 left-2 font-mono text-xs text-[#d4af37]/40 select-none">└</span>
      <span className="absolute bottom-2 right-2 font-mono text-xs text-[#d4af37]/40 select-none">┘</span>

      {/* TOP HEADER: Architectural Disciplinary Boundary */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <span className="text-xs font-mono uppercase tracking-wider text-[#d4af37] flex items-center gap-2 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] inline-block shadow-[0_0_8px_#d4af37]" />
          {language === "zh" ? "4项核心实证工程支柱" : language === "id" ? "4 PILAR REKAYASA EMPIRIS" : "4 CORE ENGINEERING PILLARS"}
        </span>
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          {language === "zh" ? "工业生产级规范" : language === "id" ? "STANDAR PRODUKSI" : "PRODUCTION STANDARD"}
        </span>
      </div>

      {/* CENTRAL 4-PILLAR GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10 py-1">
        {/* Pillar 1: Full-Stack */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 hover:border-[#d4af37]/30 transition-colors">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#d4af37]" />
            <h4 className="text-xs sm:text-sm font-serif-editorial text-white font-medium">
              {language === "zh" ? "全栈系统架构" : language === "id" ? "Arsitektur Full-Stack" : "Full-Stack Architecture"}
            </h4>
          </div>
          <p className="text-xs text-zinc-300 font-light leading-relaxed pl-6">
            {language === "zh" ? "Next.js 14/15、TypeScript 与 Laravel 高性能后端。" : language === "id" ? "Next.js 14/15, TypeScript & Laravel backend." : "Next.js 14/15, TypeScript & Laravel backend."}
          </p>
        </div>

        {/* Pillar 2: Industrial Packaging */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 hover:border-[#dc2626]/30 transition-colors">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-[#dc2626]" />
            <h4 className="text-xs sm:text-sm font-serif-editorial text-white font-medium">
              {language === "zh" ? "极寒工业包装 (-25°C)" : language === "id" ? "Kemasan Industri (-25°C)" : "Industrial Packaging (-25°C)"}
            </h4>
          </div>
          <p className="text-xs text-zinc-300 font-light leading-relaxed pl-6">
            {language === "zh" ? "耐低温高阻隔尼龙刀模，实体防爆裂结构。" : language === "id" ? "Dieline nilon vakum toleransi beku ekstrem." : "Freeze-tolerant barrier nylon & physical dielines."}
          </p>
        </div>

        {/* Pillar 3: AI & RAG */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <h4 className="text-xs sm:text-sm font-serif-editorial text-white font-medium">
              {language === "zh" ? "本地RAG与AI管线" : language === "id" ? "Pipeline AI & RAG Lokal" : "Local RAG & AI Pipelines"}
            </h4>
          </div>
          <p className="text-xs text-zinc-300 font-light leading-relaxed pl-6">
            {language === "zh" ? "确定性多章节文档编译，核心数据零泄露。" : language === "id" ? "Otomasi dokumen deterministik tanpa kebocoran data." : "Deterministic doc compilation & zero-leakage prompts."}
          </p>
        </div>

        {/* Pillar 4: Academic Rigor */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 hover:border-[#d4af37]/30 transition-colors">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#ebdca4]" />
            <h4 className="text-xs sm:text-sm font-serif-editorial text-white font-medium">
              {language === "zh" ? "GPA 4.00 · 理学学士 (S.Kom.)" : language === "id" ? "IPK 4.00 · S.Kom. iSTTS" : "4.00 GPA · B.S. in Info Systems"}
            </h4>
          </div>
          <p className="text-xs text-zinc-300 font-light leading-relaxed pl-6">
            {language === "zh" ? "最高优等荣誉毕业，4次最佳实训先锋奖。" : language === "id" ? "Predikat Sangat Memuaskan, 4x Praktisi Terbaik." : "Very Satisfactory honors, 4x Best Practitioner."}
          </p>
        </div>
      </div>

      {/* BOTTOM FOOTER: Verification Anchor */}
      <div className="flex items-center justify-between border-t border-white/10 pt-2.5 text-xs font-mono text-zinc-400">
        <span className="flex items-center gap-1.5 text-zinc-300">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span>{language === "zh" ? "100% 可审计源码与实体工程实证" : language === "id" ? "100% Kode & Bukti Fisik Terverifikasi" : "100% Auditable Code & Physical Proofs"}</span>
        </span>
        <span className="text-[#ebdca4] font-medium">
          Surabaya, ID ➔ Global
        </span>
      </div>
    </div>
  );
}
