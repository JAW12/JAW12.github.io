"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InteractiveTiltCard } from "@/components/InteractiveTiltCard";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

export function EngineeringProcessSection() {
  const { language, t } = useLanguage();

  const disciplines = [
    {
      id: "algorithms",
      badge: "4.00 GPA · 4x BEST PRACTITIONER",
      badgeId: "IPK 4.00 · 4x BEST PRACTITIONER",
      badgeZh: "GPA 4.00 · 4次最佳实训生奖",
      title: "ALGORITHMIC RIGOR & CODE INTEGRITY",
      titleId: "KETELITIAN ALGORITMA & INTEGRITAS KODE",
      titleZh: "严谨算法与代码整洁规范",
      desc: "Mathematical optimization, pure data structures, and deterministic logic. Zero AI slop, zero unchecked hallucinatory libraries.",
      descId: "Optimasi matematis, struktur data murni, dan logika deterministik. Tanpa 'AI slop', tanpa dependensi halusinatif tanpa audit.",
      descZh: "数学优化、纯粹数据结构与确定性业务逻辑。拒绝AI幻觉代码，拒绝未经审计的冗余依赖库。",
      image: "/assets/projects/secret-of-life/white_desk.png",
      tag: "DISCIPLINE 01",
    },
    {
      id: "packaging",
      badge: "-25°C NYLON · PANTONE CERTIFIED",
      badgeId: "-25°C NILON · TERCERTIFIKASI PANTONE",
      badgeZh: "-25°C 尼龙复合 · PANTONE认证",
      title: "PHYSICAL PACKAGING ENGINEERING",
      titleId: "REKAYASA MANUFAKTUR KEMASAN FISIK",
      titleZh: "实体工业包装工程学",
      desc: "Sub-millimeter factory dielines, tensile barrier tolerance for blast-freeze cold-chain logistics, and multi-thousand retail proofing.",
      descId: "Dieline pabrik berakurasi sub-milimeter, toleransi ketahanan pembekuan -25°C, dan uji coba batch ritel puluhan ribu unit.",
      descZh: "亚毫米级精密印刷模切刀线，耐受-25°C急冻冷链的高分子复合膜，经受万套量产验证。",
      image: "/assets/projects/branding/kbt-packaging.jpg",
      tag: "DISCIPLINE 02",
    },
    {
      id: "local-rag",
      badge: "SUB-SECOND EMBEDDINGS · FAISS",
      badgeId: "EMBEDDING SUB-DETIK · FAISS",
      badgeZh: "毫秒级向量检索 · FAISS",
      title: "LOCAL RAG & VECTOR SYNTHESIS",
      titleId: "SINTESIS VEKTOR & RAG LOKAL",
      titleZh: "本地RAG与向量知识库合成",
      desc: "Air-gapped document intelligence pipelines, deterministic cosine vector retrieval, and zero-egress healthcare document reconciliation.",
      descId: "Pipeline intelijen dokumen air-gapped, temu-kembali vektor kosinus deterministik, dan rekonsiliasi data medis tanpa kebocoran.",
      descZh: "隔离网络环境文档智能管线，高精度余弦相似度检索，保障敏感医疗与企业数据绝不外泄。",
      image: "/assets/projects/branding/kbt-brosur.jpg",
      tag: "DISCIPLINE 03",
    },
    {
      id: "enterprise-erp",
      badge: "100% AUDITABLE · ZERO DOWNTIME",
      badgeId: "100% TER-AUDIT · TANPA DOWNTIME",
      badgeZh: "100% 可审计 · 零宕机运维",
      title: "ENTERPRISE SYSTEMS ARCHITECTURE",
      titleId: "ARSITEKTUR SISTEM ENTERPRISE",
      titleZh: "企业级高并发系统架构",
      desc: "High-concurrency multi-tenant backends, strict RBAC permissions, transactional ledger consistency, and zero-downtime deployment.",
      descId: "Backend multi-tenant konkurensi tinggi, izin RBAC ketat, konsistensi buku besar transaksional, dan cutover tanpa henti.",
      descZh: "高并发多租户后台设计，严格RBAC权限体系，事务一致性财务记账，无缝平滑切包升级。",
      image: "/assets/projects/secret-of-life/marble.png",
      tag: "DISCIPLINE 04",
    },
  ];

  return (
    <section id="process" className="scroll-mt-24 py-24 sm:py-28 border-t border-white/10 relative overflow-hidden bg-transparent">
      {/* Wing 05: Empirical Corona & Eclipse Sphere with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="eclipse" />
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#d4af37]/[0.025] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header (Ethan Mercer Reference 05) */}
        <ScrollReveal>
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.045] select-none pointer-events-none tracking-widest blur-[1px]">
              PROCESS
            </span>
            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#d4af37]" />
                <span className="w-1.5 h-1.5 bg-[#d4af37]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#ebdca4]">
                  {t.common.processTag}
                </span>
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-white uppercase tracking-tight">
                {t.common.processTitle}
              </h2>
            </div>

            <div className="flex flex-col md:items-end justify-between gap-2 shrink-0">
              <div className="text-right">
                <span className="font-mono text-sm sm:text-base text-zinc-400 tracking-widest block font-medium">
                  05 / 08
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#ebdca4] uppercase tracking-wider font-semibold">
                  {t.common.processMethodology}
                </span>
              </div>
              <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-sm text-left md:text-right">
                {t.common.processSubtitle}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-COLUMN MONOCHROME / GOLD PROCESS GRID (Ethan Mercer Reference 05) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((d, idx) => (
            <ScrollReveal key={d.id} delay={idx * 0.12} variant="vitrine-dock">
              <InteractiveTiltCard maxTilt={9} roundedClassName="rounded-2xl" className="h-full">
                <div
                  className="p-5 rounded-2xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between space-y-4 relative group h-full shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                >
                  {/* Corner Crop Marks (Ethan Mercer Architectural Motif: ┌ ┐ └ ┘) */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#d4af37]/40 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#d4af37]/40 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#d4af37]/40 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#d4af37]/40 pointer-events-none" />

                  {/* Image Frame */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-950">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      loading="lazy"
                      quality={75}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-black/80 border border-white/15 text-xs font-mono text-[#ebdca4] uppercase tracking-wider font-semibold">
                      {d.tag}
                    </span>
                  </div>

                  {/* Textual Proof */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between pt-1">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[#d4af37]">
                        <span className="w-1.5 h-1.5 bg-[#d4af37]" />
                        <span className="w-1.5 h-1.5 bg-[#d4af37]" />
                        <span className="text-xs font-mono uppercase tracking-wider text-[#ebdca4] font-semibold">
                          {language === "zh" && d.badgeZh ? d.badgeZh : language === "id" && (d as { badgeId?: string }).badgeId ? (d as { badgeId?: string }).badgeId : d.badge}
                        </span>
                      </div>
                      <h3 className="font-serif-editorial text-lg sm:text-xl text-white font-medium leading-snug">
                        {language === "zh" && d.titleZh ? d.titleZh : language === "id" ? d.titleId : d.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-2 border-t border-white/5">
                      {language === "zh" && d.descZh ? d.descZh : language === "id" ? d.descId : d.desc}
                    </p>
                  </div>
                </div>
              </InteractiveTiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
