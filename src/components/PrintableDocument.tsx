"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PdfExportOptions } from "./PdfExportModal";
import {
  flagshipProjects,
  comprehensiveCategoryProjects,
  ProjectItem,
} from "@/data/projects";
import { experiencesData, leadershipExperiencesData, ExperienceItem } from "@/data/experiences";
import { educationData, awardsData, certificationsData, EducationItem, AwardItem, CertificationItem } from "@/data/credentials";
import { translateTech } from "@/data/techDictionary";
import {
  ExternalLink,
  Mail,
  Award,
  Globe,
  Phone,
  Layout,
  Server,
  Cpu,
  Package,
  CheckCircle2,
  Share2,
  Building2,
  Network,
  Database,
  Layers,
  Bot,
  Search,
  Workflow,
  Terminal,
  Code2,
  Sparkles,
  FileCode,
  Snowflake,
  ShieldCheck,
  Boxes,
  FileCheck,
  TrendingUp,
  BarChart3,
  Compass,
  FileSpreadsheet,
  Wrench,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  LaravelIcon,
  MysqlIcon,
  CSharpIcon,
  JavaIcon,
  PythonIcon,
  DockerIcon,
  LinuxIcon,
  FigmaIcon,
  N8nIcon,
} from "@/components/TechIcons";

interface PrintableDocumentProps {
  exportOptions: PdfExportOptions;
}

export function PrintableDocument({ exportOptions: _exportOptions }: PrintableDocumentProps) {
  const { language, t } = useLanguage();

  // Localization helpers for projects
  const getTitle = (p: ProjectItem) =>
    language === "zh" && p.titleZh ? p.titleZh : language === "id" && p.titleId ? p.titleId : p.title;
  const getRole = (p: ProjectItem) =>
    language === "zh" && p.roleZh ? p.roleZh : language === "id" && p.roleId ? p.roleId : p.role;
  const getTagline = (p: ProjectItem) =>
    language === "zh" && p.taglineZh ? p.taglineZh : language === "id" && p.taglineId ? p.taglineId : p.tagline;
  const getDescription = (p: ProjectItem) =>
    language === "zh" && p.descriptionZh ? p.descriptionZh : language === "id" && p.descriptionId ? p.descriptionId : p.description;
  const getHighlights = (p: ProjectItem) =>
    language === "zh" && p.highlightsZh ? p.highlightsZh : language === "id" && p.highlightsId ? p.highlightsId : p.highlights;

  const getTechStack = (p: ProjectItem) => {
    const list =
      language === "zh" && p.techStackZh
        ? p.techStackZh
        : language === "id" && p.techStackId
        ? p.techStackId
        : p.techStack;
    return (list || []).map((tech) => translateTech(tech, language));
  };

  const getClient = (p: ProjectItem) =>
    language === "zh" && p.clientZh ? p.clientZh : p.client || "";

  // Localization helpers for experiences & leadership
  const getExpRole = (e: ExperienceItem) =>
    language === "zh" && e.roleZh ? e.roleZh : language === "id" && e.roleId ? e.roleId : e.role;
  const getExpCompany = (e: ExperienceItem) =>
    language === "zh" && e.companyZh ? e.companyZh : language === "id" && e.companyId ? e.companyId : e.company;
  const getExpPeriod = (e: ExperienceItem) =>
    language === "zh" && e.periodZh ? e.periodZh : language === "id" && e.periodId ? e.periodId : e.period;
  const getExpDescription = (e: ExperienceItem) =>
    language === "zh" && e.descriptionZh ? e.descriptionZh : language === "id" && e.descriptionId ? e.descriptionId : e.description;
  const getExpBullets = (e: ExperienceItem) =>
    language === "zh" && e.bulletsZh ? e.bulletsZh : language === "id" && e.bulletsId ? e.bulletsId : e.bullets;
  const getExpTags = (e: ExperienceItem) =>
    language === "zh" && e.tagsZh ? e.tagsZh : language === "id" && e.tagsId ? e.tagsId : e.tags || [];

  // Localization helpers for education & credentials
  const getEduDegree = (e: EducationItem) =>
    language === "zh" && e.degreeZh ? e.degreeZh : language === "id" && e.degreeId ? e.degreeId : e.degree;
  const getEduInstitution = (e: EducationItem) =>
    language === "zh" && e.institutionZh ? e.institutionZh : language === "id" && e.institutionId ? e.institutionId : e.institution;
  const getEduDescription = (e: EducationItem) =>
    language === "zh" && e.descriptionZh ? e.descriptionZh : language === "id" && e.descriptionId ? e.descriptionId : e.description;
  const getEduHighlights = (e: EducationItem) =>
    language === "zh" && e.highlightsZh ? e.highlightsZh : language === "id" && e.highlightsId ? e.highlightsId : e.highlights || [];

  const getAwardTitle = (a: AwardItem) =>
    language === "zh" && a.titleZh ? a.titleZh : language === "id" && a.titleId ? a.titleId : a.title;
  const getAwardDescription = (a: AwardItem) =>
    language === "zh" && a.descriptionZh ? a.descriptionZh : language === "id" && a.descriptionId ? a.descriptionId : a.description;

  const getCertTitle = (c: CertificationItem) =>
    language === "zh" && c.titleZh ? c.titleZh : language === "id" && c.titleId ? c.titleId : c.title;

  const projectAssetCaptions: Record<string, { en: string; id: string; zh: string }[]> = {
    "secret-of-life": [
      {
        en: "Offset Print Gold-Foil Hardcover — Executive White Desk Edition",
        id: "Sampul Hardcover Foil Emas Standar Cetak Offset — Edisi Meja Eksekutif",
        zh: "符合胶印标准的烫金精装书封面 — 典雅白色展示台实拍",
      },
      {
        en: "Hermes CLI Deterministic Orchestrator Command Center & Agent State Monitor",
        id: "Pusat Komando Orkestrator Deterministik Hermes & Monitor State Agen",
        zh: "Hermes CLI 确定性智能体编排指挥中枢与状态监控看板",
      },
    ],
    "cocokga": [
      {
        en: "Multi-Dimensional Compatibility Analysis & Affinity Breakdown",
        id: "Rincian Analisis Kompatibilitas Multi-Dimensi & Indeks Afinitas Pasangan",
        zh: "多维契合度深度分析报告与亲和度指数看板",
      },
      {
        en: "Arcade Mode Scoring Engine — Instant Client Compute (<15ms)",
        id: "Engine Penilaian Mode Arcade — Komputasi Klien Instan (<15ms)",
        zh: "街机模式即时评分引擎 — 纯前端本地瞬时计算 (<15ms)",
      },
    ],
    "nangka-premium": [
      {
        en: "Export-Grade Vacuum-Sealed Jackfruit Single Packaging Render",
        id: "Render Kemasan Vakum Nilon Food-Grade Nangka Standar Ekspor",
        zh: "出口级食品级尼龙单袋真空速冻菠萝蜜包装三维渲染",
      },
      {
        en: "Official PT. Karya Buah Tropis Corporate Digital B2B Showcase",
        id: "Portal Digital Showcase B2B Resmi PT. Karya Buah Tropis",
        zh: "PT. Karya Buah Tropis 官方企业级 B2B 数字化展示门户",
      },
    ],
    "catatcrypto": [
      {
        en: "Master Portfolio Dashboard — Real-Time Valuation & Holdings",
        id: "Dashboard Portofolio Utama — Valuasi & Kepemilikan Aset Real-Time",
        zh: "主资产投资组合大盘 — 实时资产估值与持仓分布看板",
      },
      {
        en: "Technical Indicators & Quantitative Risk Suite — Drawdown Models",
        id: "Indikator Teknikal & Suite Risiko Kuantitatif — Model Drawdown & PnL",
        zh: "量化风险与技术指标体系 — 最大回撤模型与盈亏分析套件",
      },
    ],
    "jan-ok": [
      {
        en: "Greaseproof Food-Grade Die-Cut Takeaway Packaging (Glue-Free Lock)",
        id: "Kemasan Takeaway Food-Grade Tahan Minyak (Kunci Lipat Tanpa Lem)",
        zh: "食品级防油免胶卡扣快餐包装盒打样结构图",
      },
      {
        en: "Official 26-Branch Franchise Partnership & ROI Brochure",
        id: "Brosur Resmi Kemitraan Waralaba 26 Gerai & Proyeksi Balik Modal (BEP)",
        zh: "官方26家连锁分店加盟合作手册与 95 天回本模型折页",
      },
    ],
  };

  const getAssetCaption = (flagshipId: string, index: number) => {
    const list = projectAssetCaptions[flagshipId];
    if (!list || !list[index]) return "";
    return language === "zh" ? list[index].zh : language === "id" ? list[index].id : list[index].en;
  };

  const localizedCategoryNames: Record<string, { en: string; id: string; zh: string; subtitleEn: string; subtitleId: string; subtitleZh: string }> = {
    ai: {
      en: "AI & Automation",
      id: "AI & Otomasi",
      zh: "AI 与自动化工程",
      subtitleEn: "Generative AI pipelines, deterministic LLM orchestrators, and automated content workflows",
      subtitleId: "Pipeline AI generatif, orkestrator deterministik LLM, dan alur kerja konten otomatis",
      subtitleZh: "生成式 AI 流水线、确定性大模型编排引擎与端到端自动化内容生产系统",
    },
    software: {
      en: "Software Development",
      id: "Pengembangan Perangkat Lunak",
      zh: "全栈软件与系统工程",
      subtitleEn: "Production Next.js frontends, Laravel transactional backends, desktop C#/.NET ERPs, and database systems",
      subtitleId: "Frontend Next.js production, backend transaksional Laravel, ERP desktop C#/.NET, dan sistem basis data",
      subtitleZh: "生产级 Next.js 前端、Laravel 核心事务后端、C#/.NET 桌面 ERP 与高可靠数据库系统",
    },
    business: {
      en: "Business Operations",
      id: "Operasional Bisnis",
      zh: "商业运营与供应链",
      subtitleEn: "Cold-chain logistics SOPs, B2B wholesale portals, packaging compliance, and corporate systems",
      subtitleId: "SOP logistik rantai dingin, portal B2B grosir, kepatuhan kemasan, dan sistem korporat",
      subtitleZh: "-25°C 低温冷链物流 SOP、B2B 大宗批发门户、工业包装合规与企业级运营体系",
    },
    data: {
      en: "Market Research & Data Analysis",
      id: "Riset Pasar & Analisis Data",
      zh: "市场调研与数据分析",
      subtitleEn: "Quantitative trading journals, statistical modeling, algorithmic backtesting, and market intelligence suites",
      subtitleId: "Jurnal trading kuantitatif, pemodelan statistik, backtesting algoritmik, dan analisis riset pasar",
      subtitleZh: "量化交易日志、多周期统计建模、算法策略回测与多源商业情报研判套件",
    },
    design: {
      en: "Multimedia Brand Design",
      id: "Desain Merek & Multimedia",
      zh: "多媒体品牌与包装设计",
      subtitleEn: "Franchise brand identities, industrial food packaging dielines, corporate video production, and UI prototypes",
      subtitleId: "Identitas merek waralaba, dieline kemasan makanan industri, produksi video korporat, dan prototipe UI",
      subtitleZh: "连锁餐饮品牌全案设计、食品级工业包装刀模工程、企业级宣传片制作与 UI 交互原型",
    },
  };

  const getCategoryTitle = (catKey: string) => {
    const item = localizedCategoryNames[catKey];
    if (!item) return catKey.toUpperCase();
    return language === "zh" ? item.zh : language === "id" ? item.id : item.en;
  };

  const getCategorySubtitle = (catKey: string) => {
    const item = localizedCategoryNames[catKey];
    if (!item) return "";
    return language === "zh" ? item.subtitleZh : language === "id" ? item.subtitleId : item.subtitleEn;
  };

  const getActionLabel = (type: "email" | "whatsapp" | "linkedin" | "github" | "portfolio") => {
    if (language === "zh") {
      switch (type) {
        case "email": return "发送邮件 ↗";
        case "whatsapp": return "即时通讯 ↗";
        case "linkedin": return "查看领英 ↗";
        case "github": return "查看仓库 ↗";
        case "portfolio": return "访问网站 ↗";
      }
    }
    if (language === "id") {
      switch (type) {
        case "email": return "Kirim Email ↗";
        case "whatsapp": return "Chat WhatsApp ↗";
        case "linkedin": return "Lihat Profil ↗";
        case "github": return "Buka Repository ↗";
        case "portfolio": return "Kunjungi Web ↗";
      }
    }
    switch (type) {
      case "email": return "Send Email ↗";
      case "whatsapp": return "WhatsApp Chat ↗";
      case "linkedin": return "View Profile ↗";
      case "github": return "View GitHub ↗";
      case "portfolio": return "Visit Website ↗";
    }
  };

  // Smart Chunking configuration for Showcase slides (Max 3 cards per page for full detail & zero truncation):
  const categoryChunkConfigs: Record<string, number[]> = {
    ai: [3, 3],
    software: [3, 3, 3, 3, 3, 3],
    business: [3, 2],
    data: [3, 3],
    design: [3, 3, 3, 3, 3],
  };

  // IDs proyek audio-only atau tanpa visual asset yang tidak layak muncul di print showcase
  const PRINT_EXCLUDED_IDS = ["suno-ai-music-production"];

  const chunkProjects = (catKey: string, projects: ProjectItem[]) => {
    const flagshipIds = flagshipProjects.map((f) => f.id);
    const nonFlagshipProjects = projects.filter(
      (p) => !flagshipIds.includes(p.id) && !PRINT_EXCLUDED_IDS.includes(p.id)
    );
    const sizes = categoryChunkConfigs[catKey] || [3];
    const chunks: ProjectItem[][] = [];
    let curIdx = 0;
    for (const size of sizes) {
      if (curIdx < nonFlagshipProjects.length) {
        chunks.push(nonFlagshipProjects.slice(curIdx, curIdx + size));
        curIdx += size;
      }
    }
    if (curIdx < nonFlagshipProjects.length) {
      chunks.push(nonFlagshipProjects.slice(curIdx));
    }
    return chunks;
  };

  const aiChunks = chunkProjects("ai", comprehensiveCategoryProjects.ai);
  const softwareChunks = chunkProjects("software", comprehensiveCategoryProjects.software);
  const businessChunks = chunkProjects("business", comprehensiveCategoryProjects.business);
  const dataChunks = chunkProjects("data", comprehensiveCategoryProjects.data);
  const designChunks = chunkProjects("design", comprehensiveCategoryProjects.design);

  // Exact page counter mapping:
  let currentSlideCounter = 0;
  const nextSlideNumber = () => {
    currentSlideCounter += 1;
    return currentSlideCounter;
  };

  const slideHero = nextSlideNumber();
  const slideAbout = nextSlideNumber();
  const slideIndex = nextSlideNumber();

  const slideAiFlagship = nextSlideNumber();
  const slideAiShowcase: number[] = aiChunks.map(() => nextSlideNumber());

  const slideSoftwareFlagship = nextSlideNumber();
  const slideSoftwareShowcase: number[] = softwareChunks.map(() => nextSlideNumber());

  const slideBusinessFlagship = nextSlideNumber();
  const slideBusinessShowcase: number[] = businessChunks.map(() => nextSlideNumber());

  const slideDataFlagship = nextSlideNumber();
  const slideDataShowcase: number[] = dataChunks.map(() => nextSlideNumber());

  const slideDesignFlagship = nextSlideNumber();
  const slideDesignShowcase: number[] = designChunks.map(() => nextSlideNumber());

  const slideExp1 = nextSlideNumber();
  const slideExp2 = nextSlideNumber();
  const slideSkills = nextSlideNumber();
  const slideCred1 = nextSlideNumber();
  const slideCred2 = nextSlideNumber();
  const slideCred3 = nextSlideNumber();
  const slideContact = nextSlideNumber();

  const totalSlideCount = currentSlideCounter;

  // Header Component (Tightened for A4 Landscape)
  const HeaderBar = ({
    sectionTitle,
    categoryBadge,
    currentPage,
  }: {
    sectionTitle: string;
    categoryBadge?: string;
    currentPage: number;
  }) => (
    <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800/80 mb-2 shrink-0">
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase font-semibold">
          JEM ANGKASA WIJAYA
        </span>
        <span className="text-zinc-600 font-mono text-[10px]">/</span>
        <span className="text-[11px] font-mono text-zinc-400 tracking-wide">{sectionTitle}</span>
        {categoryBadge && (
          <span className="text-[9px] font-mono px-2 py-0.2 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 uppercase tracking-widest font-semibold ml-1">
            {categoryBadge}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2 font-mono text-[10px]">
        <span className="text-zinc-500 uppercase tracking-widest">PORTFOLIO DOSSIER</span>
        <span className="px-2 py-0.5 rounded bg-zinc-800/90 text-amber-400 font-bold border border-amber-400/20">
          PAGE {String(currentPage).padStart(2, "0")} / {String(totalSlideCount).padStart(2, "0")}
        </span>
      </div>
    </div>
  );

  // Footer Component: Verified Clickable Contact Strip (Without redundant Slide XX of 26)
  const FooterBar = () => (
    <div className="pt-1.5 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400 mt-1.5 shrink-0">
      <div className="flex items-center space-x-1.5 text-zinc-300">
        <span className="font-semibold text-amber-400">JEM ANGKASA WIJAYA, S.KOM.</span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-400">Surabaya, Indonesia</span>
      </div>

      <div className="flex items-center space-x-3 text-[9.5px]">
        <a
          href="mailto:jemangkasa.work@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-zinc-300 hover:text-amber-300 transition-colors"
        >
          <Mail className="w-3 h-3 text-amber-400" />
          <span>jemangkasa.work@gmail.com</span>
        </a>
        <span className="text-zinc-700">|</span>
        <a
          href="https://wa.me/6281273567384"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-zinc-300 hover:text-emerald-300 transition-colors"
        >
          <Phone className="w-3 h-3 text-emerald-400" />
          <span>+6281273567384</span>
        </a>
        <span className="text-zinc-700">|</span>
        <a
          href="https://linkedin.com/in/jem-angkasa-wijaya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-zinc-300 hover:text-sky-300 transition-colors"
        >
          <LinkedinIcon className="w-3 h-3 text-sky-400" />
          <span>/in/jem-angkasa-wijaya</span>
        </a>
        <span className="text-zinc-700">|</span>
        <a
          href="https://github.com/JAW12"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-zinc-300 hover:text-white transition-colors"
        >
          <GithubIcon className="w-3 h-3 text-zinc-300" />
          <span>github.com/JAW12</span>
        </a>
        <span className="text-zinc-700">|</span>
        <a
          href="https://JAW12.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-zinc-300 hover:text-amber-300 transition-colors"
        >
          <Globe className="w-3 h-3 text-amber-400" />
          <span>JAW12.github.io</span>
        </a>
      </div>
    </div>
  );

  // Strict A4 Landscape Container (297mm x 210mm) with Space-like Ambient Backdrop
  const SlideWrapper = ({
    children,
    sectionTitle,
    categoryBadge,
    currentPage,
  }: {
    children: React.ReactNode;
    sectionTitle: string;
    categoryBadge?: string;
    currentPage: number;
  }) => (
    <div
      className="print-landscape-page bg-[#08090d] text-zinc-100 flex flex-col justify-between relative overflow-hidden font-sans border-b border-zinc-800 print:border-b-0"
      style={{
        width: "297mm",
        height: "210mm",
        minHeight: "210mm",
        maxHeight: "210mm",
        padding: "6mm 10mm",
        boxSizing: "border-box",
        pageBreakAfter: "always",
        breakAfter: "page",
        pageBreakInside: "avoid",
        breakInside: "avoid",
        overflow: "hidden",
      }}
    >
      {/* Space-like Cosmic Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[350px] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.04)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full justify-between overflow-hidden">
        <HeaderBar sectionTitle={sectionTitle} categoryBadge={categoryBadge} currentPage={currentPage} />
        <div className="flex-1 flex flex-col justify-between overflow-hidden min-h-0">{children}</div>
        <FooterBar />
      </div>
    </div>
  );

  // Universal Balanced Showcase Card Component with Taller 4:3 Image Ratio & Rich Full Content (Zero Ellipsis)
  const ShowcaseCard = ({
    proj,
    accentColor = "amber",
  }: {
    proj: ProjectItem;
    accentColor?: "purple" | "emerald" | "amber" | "rose" | "cyan";
    isDense?: boolean;
  }) => {
    // Filter out video files (.mp4/.mov) and placeholder paths to get valid static preview image
    const imageList = (proj.images || []).filter(
      (img) => !img.endsWith(".mp4") && !img.endsWith(".mov") && !img.includes("placeholder")
    );
    const firstImage = imageList[0];
    const hasImage = Boolean(firstImage);
    const demoHref = proj.liveUrl || proj.demoLinks?.[0]?.url;
    const highlightsList = getHighlights(proj);

    const colorMap = {
      purple: {
        border: "border-purple-500/30",
        text: "text-purple-400",
        link: "text-purple-400 hover:text-purple-300",
      },
      emerald: {
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        link: "text-emerald-400 hover:text-emerald-300",
      },
      amber: {
        border: "border-amber-500/30",
        text: "text-amber-400",
        link: "text-amber-400 hover:text-amber-300",
      },
      rose: {
        border: "border-rose-500/30",
        text: "text-rose-400",
        link: "text-rose-400 hover:text-rose-300",
      },
      cyan: {
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        link: "text-cyan-400 hover:text-cyan-300",
      },
    };
    const c = colorMap[accentColor] || colorMap.amber;

    return (
      <div
        className={`p-3.5 rounded-xl bg-[#0e0f14]/95 border ${c.border} flex flex-col justify-between shadow-md hover:border-white/20 transition-all h-full`}
      >
        <div className="space-y-1.5">
          {hasImage && firstImage ? (
            <div className="w-full rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800/80 relative shadow-inner aspect-[4/3] max-h-[165px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={firstImage} alt={getTitle(proj)} className="w-full h-full object-cover" />
              <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-sm text-[9px] font-mono text-zinc-300 border border-zinc-700 font-bold">
                {proj.year}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between pb-1 border-b border-zinc-800/80">
              <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[9px] font-mono border border-zinc-800 font-bold">
                {proj.year}
              </span>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${c.text}`}>
                {getRole(proj)}
              </span>
            </div>
          )}

          <div>
            {hasImage && (
              <div className={`text-[9.5px] font-mono ${c.text} font-bold tracking-wide uppercase`}>
                {getRole(proj)}
              </div>
            )}
            <h3 className="text-[13px] font-bold text-white mt-0.5 tracking-tight leading-snug">
              {getTitle(proj)}
            </h3>
          </div>

          <p className="text-[10px] text-zinc-300 leading-relaxed font-light">
            {getDescription(proj)}
          </p>

          {/* Render Key Highlights fully without truncation */}
          {highlightsList && highlightsList.length > 0 && (
            <div className="space-y-1 pt-0.5">
              {highlightsList.slice(0, 2).map((hl, i) => (
                <div key={i} className="flex items-start space-x-1.5 text-[9px] text-zinc-300 leading-tight">
                  <span className={`${c.text} font-bold mt-0.5 shrink-0`}>✓</span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-1.5 pt-1.5 border-t border-zinc-800/80 mt-1.5">
          <div className="flex flex-wrap gap-1">
            {getTechStack(proj).slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.2 rounded bg-zinc-950 text-zinc-300 text-[8.5px] font-mono border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 pt-0.5">
            <span className="text-zinc-400">{getClient(proj) || "Commercial / Open-Source"}</span>
            <div className="flex items-center space-x-2 shrink-0">
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-zinc-300 hover:text-white transition-colors font-medium"
                >
                  <GithubIcon className="w-2.5 h-2.5" />
                  <span>Repo ↗</span>
                </a>
              )}
              {demoHref && (
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-1 font-bold ${c.link} transition-colors`}
                >
                  <ExternalLink className="w-2.5 h-2.5" />
                  <span>Demo ↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="printable-portfolio-root" className="printable-document-container bg-[#050608] text-white flex flex-col items-center">
      {/* =========================================================================
          SLIDE 01: HERO & EXECUTIVE COVER (MATCHING WEBSITE EDITORIAL CONCEPT)
      ========================================================================= */}
      <SlideWrapper sectionTitle="Executive Cover" currentPage={slideHero}>
        <div className="grid grid-cols-12 gap-6 items-center h-full my-auto">
          {/* Left Column: Headline & Editorial Narrative (7 cols) */}
          <div className="col-span-7 flex flex-col justify-center space-y-3">
            {/* Salutation with gold marker */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#d4af37] inline-block"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
                  {t.hero.salutation || "JEM ANGKASA WIJAYA, S.KOM."}
                </span>
                <span className="h-[1px] w-10 bg-[#d4af37]/40"></span>
              </div>

              {/* Master Headline: Two-Tone Hairline Gold Stroke + Solid White Editorial Serif */}
              <div className="flex items-baseline gap-x-3 pt-0.5">
                <span
                  style={{ WebkitTextStroke: "1.5px #d4af37", color: "transparent" }}
                  className="font-serif text-5xl sm:text-6xl font-light tracking-tight select-none"
                >
                  JEM
                </span>
                <span className="font-serif text-5xl sm:text-6xl text-white font-normal tracking-tight">
                  ANGKASA<span className="text-[#dc2626]">.</span>
                </span>
              </div>

              {/* Master Editorial Title Subheading */}
              <h2 className="font-serif text-xl sm:text-2xl font-light tracking-tight text-zinc-200 leading-snug">
                {t.hero.titleFirst}{" "}
                <span className="italic font-normal text-amber-400">
                  {t.hero.titleHighlight}
                </span>{" "}
                {t.hero.titleLast}
              </h2>
            </div>

            {/* Narrative Subheading */}
            <p className="text-[11.5px] text-zinc-300 font-light leading-relaxed max-w-xl">
              {t.hero.subheading ||
                "Bridging operational reality with modern digital systems. I build full-stack web applications with Next.js and Laravel, streamline business workflows, and configure structured AI automation pipelines engineered for daily reliability."}
            </p>

            {/* 4 Key Stat Cards (Updated label to: Software, Systems & Business) */}
            <div className="grid grid-cols-4 gap-2 pt-0.5">
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-amber-400/30 flex flex-col justify-between shadow-sm">
                <div className="text-base font-bold text-amber-400 font-mono leading-tight">4.00 / 4.00</div>
                <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                  {language === "zh" ? "最高学术荣誉 (S.Kom.)" : language === "id" ? "IPK 4.00 (Sangat Memuaskan)" : "Perfect GPA (Highest Honors)"}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-emerald-400/30 flex flex-col justify-between shadow-sm">
                <div className="text-base font-bold text-emerald-400 font-mono leading-tight">20+ Projects</div>
                <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                  {language === "zh" ? "全栈软件、系统与商业" : language === "id" ? "Software, Sistem & Bisnis" : "Software, Systems & Business"}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-sky-400/30 flex flex-col justify-between shadow-sm">
                <div className="text-base font-bold text-sky-400 font-mono leading-tight">4x Awards</div>
                <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                  {language === "zh" ? "iSTTS 计算机实验室最佳实践奖" : language === "id" ? "Best Lab Practitioner iSTTS" : "iSTTS Best Practitioner"}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-purple-400/30 flex flex-col justify-between shadow-sm">
                <div className="text-base font-bold text-purple-400 font-mono leading-tight">4.5 Years</div>
                <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                  {language === "zh" ? "iSTTS 计算机科学本科学程" : language === "id" ? "Masa Studi Sarjana iSTTS" : "iSTTS Undergraduate Studies"}
                </div>
              </div>
            </div>

            {/* Direct Clickable Contact Capsules */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="https://github.com/JAW12"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 hover:border-amber-400/40 text-[10.5px] font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <GithubIcon className="w-3 h-3 text-zinc-400" />
                <span>GitHub ↗</span>
              </a>
              <a
                href="https://linkedin.com/in/jem-angkasa-wijaya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 hover:border-amber-400/40 text-[10.5px] font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3 h-3 text-zinc-400" />
                <span>LinkedIn ↗</span>
              </a>
              <a
                href="mailto:jemangkasa.work@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 hover:border-amber-400/40 text-[10.5px] font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <Mail className="w-3 h-3 text-zinc-400" />
                <span>Email ↗</span>
              </a>
              <a
                href="https://wa.me/6281273567384"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 hover:border-emerald-400/40 text-[10.5px] font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp ↗</span>
              </a>
              <a
                href="https://JAW12.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-1 bg-amber-400/10 border border-amber-400/30 hover:border-amber-400 text-[10.5px] font-mono text-amber-300 hover:text-amber-200 transition-all flex items-center gap-1.5 font-semibold"
              >
                <Globe className="w-3 h-3 text-amber-400" />
                <span>Portfolio ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait in Obsidian Glass Vitrine (5 cols) */}
          <div className="col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[260px] p-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/20 via-zinc-900/90 to-zinc-950 border border-[#d4af37]/40 shadow-2xl">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/avatar/profile-quarter.webp"
                  alt="Jem Angkasa Wijaya, S.Kom."
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/70 to-transparent"></div>

                {/* Dignified Card Inscription */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 space-y-0.5 shadow-xl">
                  <div className="font-serif text-sm text-white font-medium">
                    {language === "zh" ? "Jem Angkasa Wijaya (范永安)" : "Jem Angkasa Wijaya"}
                  </div>
                  <div className="text-[10px] text-amber-300 font-mono font-semibold">
                    {language === "zh" ? "iSTTS · 业务信息系统学士 (S.Kom.)" : "iSTTS · Sarjana Komputer (S.Kom.)"}
                  </div>
                  <div className="text-[8.5px] text-zinc-400 font-mono">
                    IPK 4.00 · Sangat Memuaskan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 02: ABOUT & SYSTEMS PHILOSOPHY (BALANCED 2-COLUMN DOSSIER)
      ========================================================================= */}
      <SlideWrapper sectionTitle="About & Systems Philosophy" currentPage={slideAbout}>
        <div className="flex flex-col justify-between h-full py-1 space-y-2">
          {/* Chapter Header Bar matching website */}
          <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-2">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-amber-400 font-light">/</span>
              <h2 className="font-serif text-2xl font-normal text-white uppercase tracking-tight">
                ABOUT
              </h2>
            </div>
            <div className="text-right font-mono text-[10px]">
              <span className="text-zinc-500">02 / 06 </span>
              <span className="text-amber-400 font-semibold">{t.common.chapterIndex || "CHAPTER"}</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 items-stretch flex-1 my-auto">
            {/* Left Column: Core Philosophy Quote & Vitrine Metadata (5 cols) */}
            <div className="col-span-5 flex flex-col justify-between space-y-2.5">
              {/* Core Philosophy Quote Block */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-zinc-900/90 to-zinc-950 border border-amber-400/40 shadow-lg relative flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center space-x-2 text-amber-400 font-mono text-[10.5px] uppercase tracking-widest mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span className="font-semibold">{language === "zh" ? "核心工程哲学" : language === "id" ? "FILOSOFI SISTEM & REKAYASA" : "CORE ENGINEERING PHILOSOPHY"}</span>
                  </div>
                  <blockquote className="font-serif text-[17.5px] italic text-amber-50 font-light leading-relaxed border-l-3 border-amber-400 pl-4 py-1">
                    &ldquo;{t.about.quote || "A good system is straightforward: it resolves real operational friction without creating new headaches for the people running it."}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-3 pt-2.5 border-t border-amber-400/25 flex items-center justify-between text-[10.5px] font-mono text-zinc-400">
                  <span className="text-amber-400 font-semibold tracking-wide">JEM ANGKASA WIJAYA</span>
                  <span className="text-zinc-400">SURABAYA, ID</span>
                </div>
              </div>

              {/* Structured Museum Metadata Plaque */}
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1.5 font-mono text-[10.5px]">
                <div className="flex justify-between items-center py-0.5 border-b border-zinc-800/80">
                  <span className="text-zinc-500 uppercase tracking-wider">{language === "zh" ? "坐标基点" : language === "id" ? "Lokasi" : "Base"}</span>
                  <span className="text-zinc-200 font-semibold">Surabaya, Indonesia (UTC+7)</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-zinc-800/80">
                  <span className="text-zinc-500 uppercase tracking-wider">{language === "zh" ? "核心方向" : language === "id" ? "Fokus Utama" : "Focus"}</span>
                  <span className="text-amber-400 font-semibold">Business Systems & AI Workflows</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-zinc-800/80">
                  <span className="text-zinc-500 uppercase tracking-wider">{language === "zh" ? "学术资质" : language === "id" ? "Gelar Akademik" : "Academic Degree"}</span>
                  <span className="text-zinc-200 font-semibold">S1 Sistem Informasi iSTTS (IPK 4.00)</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-zinc-500 uppercase tracking-wider">{language === "zh" ? "工作状态" : language === "id" ? "Status" : "Status"}</span>
                  <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{language === "zh" ? "开放远程 / 混合办公" : language === "id" ? "Tersedia: Remote & Hybrid" : "Open: Remote & Hybrid"}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Smoked Obsidian Glass Vitrine (7 cols) */}
            <div className="col-span-7 p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-zinc-800 text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                  <span className="uppercase tracking-widest text-amber-300 font-semibold">
                    {language === "zh" ? "背景与历程" : language === "id" ? "LATAR BELAKANG" : "BACKGROUND"}
                  </span>
                </div>
                <span className="text-zinc-500 tracking-wider">2010 — PRESENT</span>
              </div>

              {/* The 3 Grounded Narrative Paragraphs */}
              <div className="space-y-2 text-zinc-300 font-light leading-relaxed text-[11px]">
                <p className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-zinc-200">
                  <strong className="text-amber-300 font-semibold font-mono text-[10px] block mb-0.5">
                    01. {language === "zh" ? "家庭企业淬炼与实战敏捷性" : language === "id" ? "Akar Wirausaha & Ketahanan Lapangan" : "Family Enterprise Roots & Agility"}
                  </strong>
                  {t.about.p1 ||
                    "Growing up, I actively supported my family enterprise through multiple shifting business ventures. The pivots spanned across multi-branch culinary franchises, HR character assessment services, and industrial cold-chain distribution. Navigating these varied models forced me to adapt fast and pick up whatever tools were needed on the fly. It built my resilience early on, teaching me how to step into unfamiliar operations, figure out the bottlenecks, and set up working systems from scratch."}
                </p>
                <p className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-zinc-200">
                  <strong className="text-sky-300 font-semibold font-mono text-[10px] block mb-0.5">
                    02. {language === "zh" ? "严谨学术积淀与系统架构" : language === "id" ? "Fondasi Akademik & Rekayasa Perangkat Lunak" : "Academic Rigor & Systems Engineering"}
                  </strong>
                  {t.about.p2 ||
                    "I brought that practical agility to my Business Information Systems degree at iSTTS, grounding my field experience in relational database architecture and structured software engineering. Alongside graduating with top honors (IPK 4.00 / 4.00, Sangat Memuaskan) and four lab practitioner awards, I led corporate sponsorships and fundraising for major campus initiatives."}
                </p>
                <p className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-zinc-200">
                  <strong className="text-emerald-300 font-semibold font-mono text-[10px] block mb-0.5">
                    03. {language === "zh" ? "全栈开发与现代 AI 工作流构建" : language === "id" ? "Arsitek Sistem & Orkestrasi AI Modern" : "Full-Stack Development & AI Orchestration"}
                  </strong>
                  {t.about.p3 ||
                    "Today, I operate as a builder at the intersection of technology and business operations. My core craft centers on building production web applications with Next.js and Laravel, alongside configuring structured AI automation workflows that eliminate repetitive manual friction. Having navigated constantly shifting business environments, I look at every line of code as an operational strategist: software must be reliable, easy to maintain, and flexible enough to adapt as the business scales."}
                </p>
              </div>

              {/* Status footer line inside vitrine */}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span className="text-zinc-400">● {t.common.statusAvailable || "AVAILABLE FOR CONTRACT & FULL-TIME"}</span>
                <span className="text-amber-300 font-medium">{t.common.statusLocation || "SURABAYA, ID (UTC+7)"}</span>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 03: TABLE OF CONTENTS & INDEX (ACCURATE 26 SLIDES SINKRON)
      ========================================================================= */}
      <SlideWrapper sectionTitle="Table of Contents & Index" currentPage={slideIndex}>
        <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {language === "zh" ? "作品集总览与精准页码索引" : language === "id" ? "Daftar Isi Portofolio & Indeks Halaman" : "Master Portfolio Ledger & Page Index"}
            </h2>
            <p className="text-[10.5px] text-zinc-400 font-mono mt-0.5">
              {language === "zh"
                ? `共 ${totalSlideCount} 页结构化文档 · 涵盖 5 大核心工程领域、实战项目展示、职业历程与权威履历`
                : language === "id"
                ? `Total ${totalSlideCount} Halaman Terstruktur · Mencakup 5 Pilar Disiplin, Showcase Proyek, Karir & Kredensial`
                : `${totalSlideCount} Structured Pages · Covering 5 Core Disciplines, Complete Project Showcase, Career & Credentials`}
            </p>
          </div>

          {/* Grid of TOC Cards (4 cols x 2 rows) - Rich & Balanced */}
          <div className="grid grid-cols-4 gap-3.5 flex-1 items-stretch py-1">
            {/* Section 1: Intro */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>01 · INTRODUCTION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Executive Cover Spread</span>
                    <span className="text-amber-400 font-bold">P. {String(slideHero).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>About & Philosophy</span>
                    <span className="text-amber-400 font-bold">P. {String(slideAbout).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5">
                    <span>Table of Contents</span>
                    <span className="text-amber-400 font-bold">P. {String(slideIndex).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Executive Overview</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">3 Pages</span>
              </div>
            </div>

            {/* Section 2: AI & Automation */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-purple-500/30 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>02 · AI & AUTOMATION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Flagship: The Secret of Life</span>
                    <span className="text-purple-400 font-bold">P. {String(slideAiFlagship).padStart(2, "0")}</span>
                  </div>
                  {slideAiShowcase.map((pNum, idx) => (
                    <div key={pNum} className="flex justify-between text-zinc-300 py-0.5">
                      <span>Showcase Part {idx + 1}/{slideAiShowcase.length}</span>
                      <span className="text-purple-400 font-bold">P. {String(pNum).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Hermes & Generative AI</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-purple-400 border border-purple-500/30">3 Pages</span>
              </div>
            </div>

            {/* Section 3: Software Development */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-emerald-500/30 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>03 · SOFTWARE DEV</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Flagship: CocokGa</span>
                    <span className="text-emerald-400 font-bold">P. {String(slideSoftwareFlagship).padStart(2, "0")}</span>
                  </div>
                  {slideSoftwareShowcase.map((pNum, idx) => (
                    <div key={pNum} className="flex justify-between text-zinc-300 py-0.5">
                      <span>Showcase Part {idx + 1}/{slideSoftwareShowcase.length}</span>
                      <span className="text-emerald-400 font-bold">P. {String(pNum).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Full-Stack & Systems</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-emerald-400 border border-emerald-500/30">7 Pages</span>
              </div>
            </div>

            {/* Section 4: Business Operations */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-amber-500/30 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>04 · BUSINESS OPS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Flagship: Nangka Premium</span>
                    <span className="text-amber-400 font-bold">P. {String(slideBusinessFlagship).padStart(2, "0")}</span>
                  </div>
                  {slideBusinessShowcase.map((pNum, idx) => (
                    <div key={pNum} className="flex justify-between text-zinc-300 py-0.5">
                      <span>Showcase Part {idx + 1}/{slideBusinessShowcase.length}</span>
                      <span className="text-amber-400 font-bold">P. {String(pNum).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Cold-Chain & Startups</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-amber-400 border border-amber-500/30">3 Pages</span>
              </div>
            </div>

            {/* Section 5: Market Research & Data Analysis */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-rose-500/30 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>05 · DATA & QUANT</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Flagship: CatatCrypto</span>
                    <span className="text-rose-400 font-bold">P. {String(slideDataFlagship).padStart(2, "0")}</span>
                  </div>
                  {slideDataShowcase.map((pNum, idx) => (
                    <div key={pNum} className="flex justify-between text-zinc-300 py-0.5">
                      <span>Showcase Part {idx + 1}/{slideDataShowcase.length}</span>
                      <span className="text-rose-400 font-bold">P. {String(pNum).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Quant Models & Portfolios</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-rose-400 border border-rose-500/30">3 Pages</span>
              </div>
            </div>

            {/* Section 6: Brand & Multimedia */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-purple-500/30 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>06 · BRAND & MULTIMEDIA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Flagship: Jan&apos;Ok (26 Outlets)</span>
                    <span className="text-purple-400 font-bold">P. {String(slideDesignFlagship).padStart(2, "0")}</span>
                  </div>
                  {slideDesignShowcase.map((pNum, idx) => (
                    <div key={pNum} className="flex justify-between text-zinc-300 py-0.5">
                      <span>Showcase Part {idx + 1}/{slideDesignShowcase.length}</span>
                      <span className="text-purple-400 font-bold">P. {String(pNum).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Industrial Dielines & Video</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-purple-400 border border-purple-500/30">6 Pages</span>
              </div>
            </div>

            {/* Section 7: Career & Skills */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-sky-500/30 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>07 · CAREER & SKILLS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Career Timeline (1/2)</span>
                    <span className="text-sky-400 font-bold">P. {String(slideExp1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Career Timeline (2/2)</span>
                    <span className="text-sky-400 font-bold">P. {String(slideExp2).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5">
                    <span>4 Engineering Pillars</span>
                    <span className="text-sky-400 font-bold">P. {String(slideSkills).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Track Record & Matrix</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-sky-400 border border-sky-500/30">3 Pages</span>
              </div>
            </div>

            {/* Section 8: Credentials & Closing */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-700 flex flex-col justify-between shadow-md">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider pb-1.5 border-b border-zinc-800 flex justify-between items-center">
                  <span>08 · CREDENTIALS & CLOSING</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </div>
                <div className="space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Formal Education & Awards</span>
                    <span className="text-amber-400 font-bold">P. {String(slideCred1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Leadership & Organizations</span>
                    <span className="text-amber-400 font-bold">P. {String(slideCred2).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-800/40">
                    <span>Certifications & Trilingual</span>
                    <span className="text-amber-400 font-bold">P. {String(slideCred3).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5">
                    <span>Contact & Direct Closing</span>
                    <span className="text-amber-400 font-bold">P. {String(slideContact).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800/80 text-[9px] font-mono text-zinc-500 flex justify-between items-center">
                <span className="uppercase tracking-wider">Degrees & Outreach</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-amber-400 border border-amber-400/30">4 Pages</span>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 04: AI FLAGSHIP - THE SECRET OF LIFE
      ========================================================================= */}
      {(() => {
        const p = flagshipProjects[0];
        return (
          <SlideWrapper
            sectionTitle="AI & Automation Flagship Project"
            categoryBadge="AI & AUTOMATION"
            currentPage={slideAiFlagship}
          >
            <div className="grid grid-cols-12 gap-6 items-center h-full my-auto">
              <div className="col-span-7 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="flex items-center space-x-2 text-zinc-400 text-[10.5px] font-mono mb-1">
                    <span>{p.year}</span>
                    <span>·</span>
                    <span className="text-amber-400 font-semibold">{getRole(p)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                    {getTitle(p)}
                  </h2>
                  <p className="text-[11.5px] font-medium text-amber-300/90 font-mono mt-0.5">
                    {getTagline(p)}
                  </p>
                </div>

                <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                  {getDescription(p)}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 py-0.5">
                  {getHighlights(p).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[10.5px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  {p.metrics?.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-sm font-bold text-amber-400 font-mono">
                        {language === "zh" && m.valueZh ? m.valueZh : language === "id" && m.valueId ? m.valueId : m.value}
                      </div>
                      <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                        {language === "zh" && m.labelZh ? m.labelZh : language === "id" && m.labelId ? m.labelId : m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags & Link */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex flex-wrap gap-1">
                    {getTechStack(p).slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[9.5px] font-mono border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {p.liveUrl && (
                    <div className="pt-0.5">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-amber-400 hover:text-amber-300 font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{p.liveUrl.replace(/^https?:\/\//, "")} ↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Dual Visual Previews */}
              <div className="col-span-5 flex flex-col space-y-3 h-full max-h-[610px] justify-between">
                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[0] || "/assets/projects/secret-of-life/white_desk.webp"}
                      alt="The Secret of Life Cover"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("secret-of-life", 0)}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[4] || p.images?.[1] || "/assets/projects/hermes/hermes_command_center.webp"}
                      alt="Hermes Orchestrator CLI"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("secret-of-life", 1)}
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        );
      })()}


      {/* =========================================================================
          SLIDES 05-06: AI SHOWCASE (CHUNKED BALANCED 4 + 3)
      ========================================================================= */}
      {aiChunks.map((chunk, chunkIdx) => (
        <SlideWrapper
          key={`ai-chunk-${chunkIdx}`}
          sectionTitle={`AI & Automation Projects Showcase (${chunkIdx + 1}/${aiChunks.length})`}
          categoryBadge="AI & AUTOMATION"
          currentPage={slideAiShowcase[chunkIdx]}
        >
          <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{getCategoryTitle("ai")} Matrix</h2>
              <p className="text-[10.5px] text-zinc-400 font-mono">{getCategorySubtitle("ai")}</p>
            </div>

            <div className={`grid ${chunk.length <= 2 ? "grid-cols-2 gap-4" : "grid-cols-3 gap-3.5"} flex-1 items-stretch`}>
              {chunk.map((proj) => (
                <ShowcaseCard key={proj.id} proj={proj} accentColor="purple" />
              ))}
            </div>
          </div>
        </SlideWrapper>
      ))}

      {/* =========================================================================
          SLIDE 07: SOFTWARE DEV FLAGSHIP - COCOKGA
      ========================================================================= */}
      {(() => {
        const p = flagshipProjects[1];
        return (
          <SlideWrapper
            sectionTitle="Software Engineering Flagship Project"
            categoryBadge="SOFTWARE DEVELOPMENT"
            currentPage={slideSoftwareFlagship}
          >
            <div className="grid grid-cols-12 gap-6 items-center h-full my-auto">
              <div className="col-span-7 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="flex items-center space-x-2 text-zinc-400 text-[10.5px] font-mono mb-1">
                    <span>{p.year}</span>
                    <span>·</span>
                    <span className="text-emerald-400 font-semibold">{getRole(p)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                    {getTitle(p)}
                  </h2>
                  <p className="text-[11.5px] font-medium text-emerald-300/90 font-mono mt-0.5">
                    {getTagline(p)}
                  </p>
                </div>

                <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                  {getDescription(p)}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 py-0.5">
                  {getHighlights(p).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[10.5px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-2 pt-0.5">
                  {p.metrics?.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-sm font-bold text-emerald-400 font-mono">{m.value}</div>
                      <div className="text-[8px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                        {language === "zh" && m.labelZh ? m.labelZh : language === "id" && m.labelId ? m.labelId : m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags & Link */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex flex-wrap gap-1">
                    {getTechStack(p).slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[9.5px] font-mono border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {p.liveUrl && (
                    <div className="pt-0.5">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{p.liveUrl.replace(/^https?:\/\//, "")} ↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Dual Visual Previews */}
              <div className="col-span-5 flex flex-col space-y-3 h-full max-h-[610px] justify-between">
                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[0] || "/assets/projects/cocokga/cocokga_bg_affinity.webp"}
                      alt="CocokGa Analysis Breakdown"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("cocokga", 0)}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[1] || "/assets/projects/cocokga/cocokga_bg_arcade.webp"}
                      alt="Arcade Mode Scoring Engine"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("cocokga", 1)}
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        );
      })()}


      {/* =========================================================================
          SLIDES 08-10: SOFTWARE DEV SHOWCASE (CHUNKED 6 + 6 + 7)
      ========================================================================= */}
      {softwareChunks.map((chunk, chunkIdx) => (
        <SlideWrapper
          key={`software-chunk-${chunkIdx}`}
          sectionTitle={`Software & Full-Stack Projects Showcase (${chunkIdx + 1}/${softwareChunks.length})`}
          categoryBadge="SOFTWARE DEVELOPMENT"
          currentPage={slideSoftwareShowcase[chunkIdx]}
        >
          <div className="flex flex-col justify-between h-full py-0.5 space-y-1.5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{getCategoryTitle("software")} Matrix</h2>
              <p className="text-[10.5px] text-zinc-400 font-mono">{getCategorySubtitle("software")}</p>
            </div>

            <div className={`grid ${chunk.length <= 2 ? "grid-cols-2 gap-4" : "grid-cols-3 gap-3.5"} flex-1 items-stretch`}>
              {chunk.map((proj) => (
                <ShowcaseCard key={proj.id} proj={proj} accentColor="emerald" />
              ))}
            </div>
          </div>
        </SlideWrapper>
      ))}

      {/* =========================================================================
          SLIDE 11: BUSINESS OPERATIONS FLAGSHIP - NANGKA PREMIUM
      ========================================================================= */}
      {(() => {
        const p = flagshipProjects[2];
        return (
          <SlideWrapper
            sectionTitle="Business Operations Flagship Project"
            categoryBadge="BUSINESS OPERATIONS"
            currentPage={slideBusinessFlagship}
          >
            <div className="grid grid-cols-12 gap-6 items-center h-full my-auto">
              <div className="col-span-7 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="flex items-center space-x-2 text-zinc-400 text-[10.5px] font-mono mb-1">
                    <span>{p.year}</span>
                    <span>·</span>
                    <span className="text-amber-400 font-semibold">{getRole(p)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                    {getTitle(p)}
                  </h2>
                  <p className="text-[11.5px] font-medium text-amber-300/90 font-mono mt-0.5">
                    {getTagline(p)}
                  </p>
                </div>

                <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                  {getDescription(p)}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 py-0.5">
                  {getHighlights(p).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[10.5px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  {p.metrics?.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-sm font-bold text-amber-400 font-mono">{m.value}</div>
                      <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                        {language === "zh" && m.labelZh ? m.labelZh : language === "id" && m.labelId ? m.labelId : m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags & Link */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex flex-wrap gap-1">
                    {getTechStack(p).slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[9.5px] font-mono border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {p.liveUrl && (
                    <div className="pt-0.5">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-amber-400 hover:text-amber-300 font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{p.liveUrl.replace(/^https?:\/\//, "")} ↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Dual Visual Previews */}
              <div className="col-span-5 flex flex-col space-y-3 h-full max-h-[610px] justify-between">
                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[0] || "/assets/projects/nangka-premium/pack_satu_1.webp"}
                      alt="Nangka Packaging Render"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("nangka-premium", 0)}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[1] || "/assets/projects/nangka-premium/pack_banyak_1.webp"}
                      alt="PT. Karya Buah Tropis Showcase"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("nangka-premium", 1)}
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        );
      })()}

      {/* =========================================================================
          SLIDE 12: BUSINESS OPERATIONS SHOWCASE (ALL 6 PROJECTS IN BALANCED 3x2 GRID)
      ========================================================================= */}
      {businessChunks.map((chunk, chunkIdx) => (
        <SlideWrapper
          key={`business-chunk-${chunkIdx}`}
          sectionTitle="Business Operations Showcase (6 Enterprise Systems)"
          categoryBadge="BUSINESS OPERATIONS"
          currentPage={slideBusinessShowcase[chunkIdx]}
        >
          <div className="flex flex-col justify-between h-full py-0.5 space-y-1.5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{getCategoryTitle("business")} Matrix</h2>
              <p className="text-[10.5px] text-zinc-400 font-mono">{getCategorySubtitle("business")}</p>
            </div>

            <div className={`grid ${chunk.length <= 2 ? "grid-cols-2 gap-4" : "grid-cols-3 gap-3.5"} flex-1 items-stretch`}>
              {chunk.map((proj) => (
                <ShowcaseCard key={proj.id} proj={proj} accentColor="amber" />
              ))}
            </div>
          </div>
        </SlideWrapper>
      ))}

      {/* =========================================================================
          SLIDE 13: MARKET RESEARCH & DATA ANALYSIS FLAGSHIP - CATATCRYPTO
      ========================================================================= */}
      {(() => {
        const p = flagshipProjects[3];
        return (
          <SlideWrapper
            sectionTitle="Market Research & Data Analysis Flagship Project"
            categoryBadge="MARKET RESEARCH & DATA ANALYSIS"
            currentPage={slideDataFlagship}
          >
            <div className="grid grid-cols-12 gap-6 items-center h-full my-auto">
              <div className="col-span-7 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="flex items-center space-x-2 text-zinc-400 text-[10.5px] font-mono mb-1">
                    <span>{p.year}</span>
                    <span>·</span>
                    <span className="text-rose-400 font-semibold">{getRole(p)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                    {getTitle(p)}
                  </h2>
                  <p className="text-[11.5px] font-medium text-rose-300/90 font-mono mt-0.5">
                    {getTagline(p)}
                  </p>
                </div>

                <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                  {getDescription(p)}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 py-0.5">
                  {getHighlights(p).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[10.5px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  {p.metrics?.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-sm font-bold text-rose-400 font-mono">{m.value}</div>
                      <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                        {language === "zh" && m.labelZh ? m.labelZh : language === "id" && m.labelId ? m.labelId : m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags & Link */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex flex-wrap gap-1">
                    {getTechStack(p).slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[9.5px] font-mono border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {p.githubUrl && (
                    <div className="pt-0.5">
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-rose-400 hover:text-rose-300 font-semibold"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>{p.githubUrl.replace(/^https?:\/\//, "")} ↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Dual Visual Previews */}
              <div className="col-span-5 flex flex-col space-y-3 h-full max-h-[610px] justify-between">
                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[0] || "/assets/projects/catatcrypto/catatcrypto_dashboard.webp"}
                      alt="CatatCrypto Dashboard"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("catatcrypto", 0)}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[1] || "/assets/projects/catatcrypto/catatcrypto_indicators.webp"}
                      alt="Technical Analytics Suite"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("catatcrypto", 1)}
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        );
      })()}

      {/* =========================================================================
          SLIDES 14-15: MARKET RESEARCH & DATA ANALYSIS SHOWCASE (CHUNKED 4 + 3)
      ========================================================================= */}
      {dataChunks.map((chunk, chunkIdx) => (
        <SlideWrapper
          key={`data-chunk-${chunkIdx}`}
          sectionTitle={`Market Research & Data Analysis Showcase (${chunkIdx + 1}/${dataChunks.length})`}
          categoryBadge="MARKET RESEARCH & DATA ANALYSIS"
          currentPage={slideDataShowcase[chunkIdx]}
        >
          <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{getCategoryTitle("data")} Matrix</h2>
              <p className="text-[10.5px] text-zinc-400 font-mono">{getCategorySubtitle("data")}</p>
            </div>

            <div className={`grid ${chunk.length <= 2 ? "grid-cols-2 gap-4" : "grid-cols-3 gap-3.5"} flex-1 items-stretch`}>
              {chunk.map((proj) => (
                <ShowcaseCard key={proj.id} proj={proj} accentColor="rose" />
              ))}
            </div>
          </div>
        </SlideWrapper>
      ))}

      {/* =========================================================================
          SLIDE 16: BRAND DESIGN FLAGSHIP - NASI GORENG JAN'OK
      ========================================================================= */}
      {(() => {
        const p = flagshipProjects[4];
        return (
          <SlideWrapper
            sectionTitle="Brand Design & Packaging Flagship Project"
            categoryBadge="MULTIMEDIA BRAND DESIGN"
            currentPage={slideDesignFlagship}
          >
            <div className="grid grid-cols-12 gap-6 items-center h-full my-auto">
              <div className="col-span-7 flex flex-col justify-between space-y-2.5">
                <div>
                  <div className="flex items-center space-x-2 text-zinc-400 text-[10.5px] font-mono mb-1">
                    <span>{p.year}</span>
                    <span>·</span>
                    <span className="text-purple-400 font-semibold">{getRole(p)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                    {getTitle(p)}
                  </h2>
                  <p className="text-[11.5px] font-medium text-purple-300/90 font-mono mt-0.5">
                    {getTagline(p)}
                  </p>
                </div>

                <p className="text-[11px] text-zinc-300 leading-relaxed font-light">
                  {getDescription(p)}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-1.5 py-0.5">
                  {getHighlights(p).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[10.5px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-0.5">
                  {p.metrics?.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-sm font-bold text-purple-400 font-mono">{m.value}</div>
                      <div className="text-[8.5px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">
                        {language === "zh" && m.labelZh ? m.labelZh : language === "id" && m.labelId ? m.labelId : m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags & Link */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex flex-wrap gap-1">
                    {getTechStack(p).slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[9.5px] font-mono border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {p.liveUrl && (
                    <div className="pt-0.5">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-purple-400 hover:text-purple-300 font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{p.liveUrl.replace(/^https?:\/\//, "")} ↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Dual Visual Previews */}
              <div className="col-span-5 flex flex-col space-y-3 h-full max-h-[610px] justify-between">
                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[0] || "/assets/projects/branding/janok-packaging.webp"}
                      alt="Packaging Box Dieline"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("jan-ok", 0)}
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-md h-[290px] max-h-[290px] flex flex-col">
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-950 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[1] || "/assets/projects/branding/janok-brosur.webp"}
                      alt="Franchise Brochure"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-1.5 bg-zinc-950 text-[9px] font-mono text-zinc-400 border-t border-zinc-800 shrink-0">
                    {getAssetCaption("jan-ok", 1)}
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        );
      })()}

      {/* =========================================================================
          SLIDES 17-19: MULTIMEDIA BRAND DESIGN SHOWCASE (CHUNKED 6 + 5 + 5)
      ========================================================================= */}
      {designChunks.map((chunk, chunkIdx) => (
        <SlideWrapper
          key={`design-chunk-${chunkIdx}`}
          sectionTitle={`Brand & Packaging Showcase (${chunkIdx + 1}/${designChunks.length})`}
          categoryBadge="MULTIMEDIA BRAND DESIGN"
          currentPage={slideDesignShowcase[chunkIdx]}
        >
          <div className="flex flex-col justify-between h-full py-0.5 space-y-1.5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{getCategoryTitle("design")} Matrix</h2>
              <p className="text-[10.5px] text-zinc-400 font-mono">{getCategorySubtitle("design")}</p>
            </div>

            <div className={`grid ${chunk.length <= 2 ? "grid-cols-2 gap-4" : "grid-cols-3 gap-3.5"} flex-1 items-stretch`}>
              {chunk.map((proj) => (
                <ShowcaseCard key={proj.id} proj={proj} accentColor="purple" />
              ))}
            </div>
          </div>
        </SlideWrapper>
      ))}

      {/* =========================================================================
          SLIDE 20: CAREER TIMELINE (PART 1/2 - 3 EXPERIENCES RICH & COMPLETE)
      ========================================================================= */}
      <SlideWrapper sectionTitle="Professional Career Chronology (1/2)" currentPage={slideExp1}>
        <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {language === "zh" ? "职业历程与核心系统工程经验 (第一部分)" : language === "id" ? "Buku Besar Karir Profesional & Pengalaman Sistem (1/2)" : "Professional Career Ledger & Systems Experience (1/2)"}
            </h2>
            <p className="text-[10.5px] text-zinc-400 font-mono">
              {language === "zh" ? "涵盖企业总监、系统架构师、全栈开发与社区量化技术导师" : language === "id" ? "Pengalaman sebagai Direktur Operasional, Arsitek Sistem & Mentor Komunitas" : "Proven tenure across Operations Directorship, Systems Architecture & Community Mentorship"}
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-amber-400/50 flex-1 flex flex-col justify-between py-1 gap-3">
            {experiencesData.slice(0, 3).map((exp, idx) => (
              <div key={idx} className="relative group flex-1 flex flex-col">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[31px] top-3.5 w-3.5 h-3.5 rounded-full bg-[#0c0d12] border-2 border-amber-400 flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-md space-y-1.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 font-mono text-[9.5px] font-semibold border border-amber-400/30">
                          {getExpPeriod(exp)}
                        </span>
                        <h3 className="text-[13px] font-bold text-white">
                          {getExpRole(exp)}
                        </h3>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400">
                        <span className="text-amber-300 font-medium">
                          {getExpCompany(exp)}
                        </span>
                        <span className="mx-1.5 text-zinc-600">·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-zinc-300 font-light leading-relaxed">
                      {getExpDescription(exp)}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-zinc-800/80">
                    {getExpBullets(exp).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-1.5 text-[10px] text-zinc-300 leading-snug">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {getExpTags(exp).length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {getExpTags(exp).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[8.5px] font-mono border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 21: CAREER TIMELINE (PART 2/2 - 3 EXPERIENCES RICH & COMPLETE)
      ========================================================================= */}
      <SlideWrapper sectionTitle="Professional Career Chronology (2/2)" currentPage={slideExp2}>
        <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {language === "zh" ? "职业历程与早期创新创业经验 (第二部分)" : language === "id" ? "Buku Besar Karir Profesional & Pengalaman Awal (2/2)" : "Professional Career Ledger & Early Ventures (2/2)"}
            </h2>
            <p className="text-[10.5px] text-zinc-400 font-mono">
              {language === "zh" ? "涵盖开源青年发展后端开发、生鲜电商创业创始人与人才测评软件工程" : language === "id" ? "Pengalaman Backend Non-Profit, Founder E-Grocery & Pengembang Software Asesmen SDM" : "Tenure across Non-profit Backend Engineering, Early Startup Founder & Assessment Software"}
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-amber-400/50 flex-1 flex flex-col justify-between py-1 gap-3">
            {experiencesData.slice(3, 6).map((exp, idx) => (
              <div key={idx} className="relative group flex-1 flex flex-col">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[31px] top-3.5 w-3.5 h-3.5 rounded-full bg-[#0c0d12] border-2 border-amber-400 flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-md space-y-1.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 font-mono text-[9.5px] font-semibold border border-amber-400/30">
                          {getExpPeriod(exp)}
                        </span>
                        <h3 className="text-[13px] font-bold text-white">
                          {getExpRole(exp)}
                        </h3>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400">
                        <span className="text-amber-300 font-medium">
                          {getExpCompany(exp)}
                        </span>
                        <span className="mx-1.5 text-zinc-600">·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-zinc-300 font-light leading-relaxed">
                      {getExpDescription(exp)}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-zinc-800/80">
                    {getExpBullets(exp).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-1.5 text-[10px] text-zinc-300 leading-snug">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {getExpTags(exp).length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {getExpTags(exp).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[8.5px] font-mono border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 22: SKILLS SECTION (4 PILLARS - MIRRORING WEBSITE SKILLS SECTION)
      ========================================================================= */}
      {(() => {
        const skillsPillars = [
          {
            id: "fullstack-web",
            icon: <Layout className="w-4 h-4 text-amber-400" />,
            accentBorder: "border-amber-400/40",
            sheenColor: "via-amber-400/80",
            dotColor: "bg-amber-400",
            badgeNumber: "01",
            badgeClass: "text-amber-400 bg-amber-400/10 border-amber-400/30",
            title: language === "zh" ? "Web 前端系统架构" : language === "id" ? "Arsitektur Web & Frontend" : "Web & Frontend Architecture",
            description: language === "zh" ? "现代组件工程、响应式状态管理、客户端即时计算与高性能 Web 体系。" : language === "id" ? "Framework modern, manajemen state reaktif, komputasi sisi klien, dan aplikasi web responsif." : "Modern component frameworks, reactive state management, client-side compute, and responsive web applications.",
            toolLabel: language === "zh" ? "核心技术与开发工具" : language === "id" ? "Perkakas & Teknologi Utama" : "Technologies & Core Tools",
            tools: [
              { name: language === "zh" ? "Next.js (App 路由)" : "Next.js (App Router)", icon: <NextjsIcon className="w-3 h-3 text-white" /> },
              { name: "TypeScript", icon: <TypeScriptIcon className="w-3 h-3 text-blue-400" /> },
              { name: "React.js", icon: <ReactIcon className="w-3 h-3 text-cyan-400" /> },
              { name: "Tailwind CSS", icon: <TailwindIcon className="w-3 h-3 text-cyan-400" /> },
              { name: language === "zh" ? "Figma (UI/UX 与系统)" : language === "id" ? "Figma (UI/UX & Sistem)" : "Figma (UI/UX & Systems)", icon: <FigmaIcon className="w-3 h-3 text-purple-400" /> },
              { name: language === "zh" ? "Git & GitHub 版本控制" : "Git & GitHub", icon: <GithubIcon className="w-3 h-3 text-zinc-300" /> },
            ],
            disciplineLabel: language === "zh" ? "系统架构与工程规范" : language === "id" ? "Arsitektur & Rekayasa" : "Architecture & Disciplines",
            disciplines: [
              { name: language === "zh" ? "RESTful API 系统架构" : language === "id" ? "Arsitektur RESTful API" : "RESTful API Architecture", icon: <Globe className="w-3 h-3 text-emerald-400" /> },
              { name: language === "zh" ? "客户端状态与即时计算" : language === "id" ? "State & Komputasi Sisi Klien" : "Client-Side State & Compute", icon: <Cpu className="w-3 h-3 text-amber-300" /> },
              { name: language === "zh" ? "浏览器原生能力与 Web Share" : language === "id" ? "API Browser & Web Share" : "Browser & Web Share APIs", icon: <Share2 className="w-3 h-3 text-cyan-300" /> },
              { name: language === "zh" ? "跨端响应式 UI 规范" : language === "id" ? "Standar UI Responsif" : "Responsive UI Standards", icon: <Layout className="w-3 h-3 text-orange-400" /> },
            ],
          },
          {
            id: "backend-systems",
            icon: <Server className="w-4 h-4 text-cyan-400" />,
            accentBorder: "border-cyan-400/40",
            sheenColor: "via-cyan-400/80",
            dotColor: "bg-cyan-400",
            badgeNumber: "02",
            badgeClass: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
            title: language === "zh" ? "后端架构与企业级系统" : language === "id" ? "Sistem Backend & Enterprise" : "Backend & Enterprise Systems",
            description: language === "zh" ? "关系型数据建模、多层事务后端、核心算法与企业级服务器基础设施。" : language === "id" ? "Pemodelan data relasional, backend transaksional multi-tier, algoritma, dan arsitektur server." : "Relational data modeling, multi-tier transactional backends, algorithms, and server infrastructure.",
            toolLabel: language === "zh" ? "核心技术栈与开发语言" : language === "id" ? "Stack Teknologi & Bahasa" : "Technologies & Stack",
            tools: [
              { name: language === "zh" ? "PHP / Laravel 框架体系" : language === "id" ? "PHP / Framework Laravel" : "PHP / Laravel Framework", icon: <LaravelIcon className="w-3 h-3 text-rose-500" /> },
              { name: language === "zh" ? "MySQL (3NF 关系型数据库)" : language === "id" ? "MySQL (DB Relasional 3NF)" : "MySQL (3NF Relational DB)", icon: <MysqlIcon className="w-3 h-3 text-amber-400" /> },
              { name: language === "zh" ? "C# (.NET / WinForms 桌面)" : "C# (.NET / WinForms)", icon: <CSharpIcon className="w-3 h-3 text-purple-400" /> },
              { name: language === "zh" ? "Java (OOP 面向对象架构)" : language === "id" ? "Java (Arsitektur OOP)" : "Java (OOP Architecture)", icon: <JavaIcon className="w-3 h-3 text-orange-400" /> },
              { name: language === "zh" ? "Docker 容器化部署" : language === "id" ? "Kontainerisasi Docker" : "Docker Containerization", icon: <DockerIcon className="w-3 h-3 text-blue-400" /> },
              { name: language === "zh" ? "Linux / Shell 运维环境" : language === "id" ? "Lingkungan Linux / Shell" : "Linux / Shell Environment", icon: <LinuxIcon className="w-3 h-3 text-amber-300" /> },
            ],
            disciplineLabel: language === "zh" ? "系统设计与数据建模" : language === "id" ? "Sistem & Pemodelan Data" : "Systems & Architecture",
            disciplines: [
              { name: language === "zh" ? "ERP 与 POS 核心数据建模" : language === "id" ? "Pemodelan Data ERP & POS" : "ERP & POS Data Modeling", icon: <Building2 className="w-3 h-3 text-blue-400" /> },
              { name: language === "zh" ? "C/S 架构 Socket 通信协议" : language === "id" ? "Protokol Soket Client-Server" : "Client-Server Socket Protocols", icon: <Network className="w-3 h-3 text-indigo-400" /> },
              { name: language === "zh" ? "数据库慢查询剖析与索引优化" : language === "id" ? "Profiling & Optimasi Kueri DB" : "Database Query Profiling", icon: <Database className="w-3 h-3 text-cyan-400" /> },
              { name: language === "zh" ? "多层架构与分布式解耦" : language === "id" ? "Arsitektur Sistem Multi-Tier" : "Multi-Tier Architecture", icon: <Layers className="w-3 h-3 text-emerald-400" /> },
            ],
          },
          {
            id: "ai-automation",
            icon: <Cpu className="w-4 h-4 text-purple-400" />,
            accentBorder: "border-purple-400/40",
            sheenColor: "via-purple-400/80",
            dotColor: "bg-purple-400",
            badgeNumber: "03",
            badgeClass: "text-purple-400 bg-purple-400/10 border-purple-400/30",
            title: language === "zh" ? "AI 智能自动化管线" : language === "id" ? "Alur Kerja AI & Otomasi" : "AI Workflows & Automation",
            description: language === "zh" ? "确定性编译引擎、结构化 Prompt 调优、本地向量 RAG 检索与端到端自动化流程。" : language === "id" ? "Engine kompilasi deterministik, rekayasa prompt terstruktur, RAG lokal, dan alur kerja otomatis." : "Deterministic compiling engines, structured prompt engineering, local RAG, and automated workflows.",
            toolLabel: language === "zh" ? "自动化框架与开发工具" : language === "id" ? "Perkakas & Framework Otomasi" : "Frameworks & Automation Tools",
            tools: [
              { name: language === "zh" ? "Python 自动化工程引擎" : language === "id" ? "Engine Otomasi Python" : "Python Automation Engines", icon: <PythonIcon className="w-3 h-3 text-emerald-400" /> },
              { name: language === "zh" ? "n8n 可视化工作流引擎" : language === "id" ? "Otomasi Visual n8n" : "n8n Visual Automation", icon: <N8nIcon className="w-3 h-3 text-pink-400" /> },
              { name: language === "zh" ? "多智能体协同系统与 CLI" : language === "id" ? "Sistem Multi-Agen & CLI" : "Multi-Agent Systems & CLI", icon: <Bot className="w-3 h-3 text-violet-400" /> },
              { name: language === "zh" ? "网页爬虫与结构化数据提取" : language === "id" ? "Scraping & Ekstraksi Web" : "Web Scraping & Extraction", icon: <Search className="w-3 h-3 text-sky-400" /> },
              { name: language === "zh" ? "Webhooks 与系统集成" : language === "id" ? "Webhook & Integrasi Sistem" : "Webhooks & Integrations", icon: <Workflow className="w-3 h-3 text-cyan-400" /> },
            ],
            disciplineLabel: language === "zh" ? "AI 管线编排与知识合成" : language === "id" ? "Pipeline AI & Metode Sintesis" : "AI Pipelines & Synthesis Methods",
            disciplines: [
              { name: language === "zh" ? "结构化 Prompt 工程规范" : language === "id" ? "Rekayasa Prompt Terstruktur" : "Structured Prompt Engineering", icon: <Terminal className="w-3 h-3 text-purple-400" /> },
              { name: language === "zh" ? "向量 RAG 检索与知识库" : language === "id" ? "RAG Vektor & Vault Pengetahuan" : "Vector RAG & Knowledge Vaults", icon: <Database className="w-3 h-3 text-fuchsia-400" /> },
              { name: language === "zh" ? "LLM 提示词链流水线" : language === "id" ? "LLM Prompt Chaining" : "LLM Prompt Chaining", icon: <Code2 className="w-3 h-3 text-purple-300" /> },
              { name: language === "zh" ? "自动化长篇出版物编译" : language === "id" ? "Penerbitan Buku Otomatis" : "Automated Book Publishing", icon: <Sparkles className="w-3 h-3 text-amber-300" /> },
              { name: language === "zh" ? "AI 辅助高阶学术研究合成" : language === "id" ? "Sintesis Riset Berbasis AI" : "AI Research Synthesis", icon: <FileCode className="w-3 h-3 text-teal-400" /> },
            ],
          },
          {
            id: "business-operations",
            icon: <Package className="w-4 h-4 text-emerald-400" />,
            accentBorder: "border-emerald-400/40",
            sheenColor: "via-emerald-400/80",
            dotColor: "bg-emerald-400",
            badgeNumber: "04",
            badgeClass: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
            title: language === "zh" ? "商业运营与量化研究" : language === "id" ? "Operasional Bisnis & Finansial" : "Business Operations & Quant",
            description: language === "zh" ? "B2B商业供应链流水线、量化金融投资组合核算、-25°C极低温冷链与工业包装合规体系。" : language === "id" ? "Alur kerja komersial B2B, buku besar portofolio kuantitatif, logistik rantai dingin -25°C, dan kepatuhan standar industri." : "B2B commercial workflows, quantitative portfolio ledgers, -25°C cold chain, and packaging compliance.",
            toolLabel: language === "zh" ? "实体供应链与工业运营" : language === "id" ? "Operasional & Rantai Pasok Fisik" : "Operations & Physical Supply Chain",
            tools: [
              { name: language === "zh" ? "-25°C 超低温冷链物流" : language === "id" ? "Logistik Rantai Dingin (-25°C)" : "Cold-Chain Logistics (-25°C)", icon: <Snowflake className="w-3 h-3 text-cyan-300" /> },
              { name: language === "zh" ? "工业级阻隔复合包装" : language === "id" ? "Kemasan Pelindung Industri" : "Industrial Barrier Packaging", icon: <ShieldCheck className="w-3 h-3 text-emerald-400" /> },
              { name: language === "zh" ? "包装刀模规范与打样" : language === "id" ? "Dieline Cetak Pabrik Kemasan" : "Packaging Factory Dielines", icon: <Package className="w-3 h-3 text-amber-400" /> },
              { name: language === "zh" ? "库存账本 (FIFO)" : language === "id" ? "Buku Besar Inventaris (FIFO)" : "Inventory Ledgers (FIFO)", icon: <Boxes className="w-3 h-3 text-orange-400" /> },
              { name: language === "zh" ? "B2B 销售开票与 SOP 体系" : language === "id" ? "Faktur Penjualan B2B & SOP" : "B2B Sales Invoicing & SOPs", icon: <FileCheck className="w-3 h-3 text-blue-400" /> },
            ],
            disciplineLabel: language === "zh" ? "量化金融模型与合规审计" : language === "id" ? "Riset Finansial & Regulasi" : "Quantitative Finance & Compliance",
            disciplines: [
              { name: language === "zh" ? "量化定投对账模型" : language === "id" ? "Rekonsiliasi DCA Kuantitatif" : "Quantitative DCA Reconciliation", icon: <TrendingUp className="w-3 h-3 text-emerald-400" /> },
              { name: language === "zh" ? "盈亏比 (RR) 与回撤控制" : language === "id" ? "Risk/Reward (RR) & Drawdowns" : "Risk/Reward (RR) & Drawdowns", icon: <BarChart3 className="w-3 h-3 text-indigo-400" /> },
              { name: language === "zh" ? "多周期技术面行情研判" : language === "id" ? "Analisis Pasar Teknikal" : "Technical Market Analysis", icon: <Compass className="w-3 h-3 text-purple-400" /> },
              { name: language === "zh" ? "复杂财务报表模型" : language === "id" ? "Model Finansial Spreadsheet" : "Spreadsheet Financial Models", icon: <FileSpreadsheet className="w-3 h-3 text-emerald-300" /> },
              { name: language === "zh" ? "行业法规与认证 (Halal/Kementan)" : language === "id" ? "Standar Regulasi (Halal/Kementan)" : "Regulatory Standards (Halal/Kementan)", icon: <Globe className="w-3 h-3 text-teal-300" /> },
            ],
          },
        ];

        return (
          <SlideWrapper sectionTitle="Core Technical Capabilities (4 Pillars)" currentPage={slideSkills}>
            <div className="flex flex-col h-full py-0.5 space-y-2">
              {/* Header matching web Chapter Style */}
              <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-1.5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[9.5px] font-mono uppercase tracking-widest text-[#ebdca4]">
                    <Wrench className="w-3 h-3 text-[#d4af37]" />
                    <span>
                      {language === "zh"
                        ? "核心技能与技术工具链"
                        : language === "id"
                        ? "KEAHLIAN & PERKAKAS TEKNIS"
                        : "SKILLS & TECHNICAL TOOLS"}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-serif text-2xl font-light text-[#d4af37] leading-none select-none">
                      /
                    </span>
                    <h2 className="font-serif text-xl font-normal text-white uppercase tracking-tight leading-none">
                      SKILLS & TOOLS
                    </h2>
                    <span className="text-[10px] font-mono text-zinc-400 ml-2">
                      {language === "zh"
                        ? "核心工程栈与跨学科实践：涵盖全栈 Web、企业后端、AI 自动化流程与实体供应链"
                        : language === "id"
                        ? "Teknologi inti & rekayasa: web full-stack, data backend enterprise, otomasi AI & rantai pasok"
                        : "Core technologies & disciplines across full-stack software, data systems, AI workflows & operations"}
                    </span>
                  </div>
                </div>
                <div className="text-right font-mono text-[10px] shrink-0">
                  <span className="text-zinc-500">05 / 06 </span>
                  <span className="text-amber-400 font-semibold">{t.common.chapterIndex || "CHAPTER"}</span>
                </div>
              </div>

              {/* 4 Clean Scannable Pillar Cards — flex-1 grid fills remaining height */}
              <div className="grid grid-cols-2 gap-3.5 flex-1 min-h-0">
                {skillsPillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    className={`relative rounded-2xl bg-zinc-900/90 border ${pillar.accentBorder} p-4 flex flex-col gap-3 shadow-md overflow-hidden`}
                  >
                    {/* Top Specular Hairline Sheen */}
                    <div
                      className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent ${pillar.sheenColor} to-transparent pointer-events-none`}
                    />

                    {/* Pillar Header */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800">
                        <div className="flex items-center space-x-2">
                          <div className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 shadow-inner">
                            {pillar.icon}
                          </div>
                          <h3 className="font-serif text-[13.5px] font-medium text-white tracking-tight">
                            {pillar.title}
                          </h3>
                        </div>
                        <span className={`px-2 py-0.5 rounded font-mono text-[8.5px] font-bold border ${pillar.badgeClass}`}>
                          PILLAR {pillar.badgeNumber}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-zinc-300 font-light leading-snug">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Subgroup 1: Technologies & Tools */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${pillar.dotColor}`} />
                        <span className="text-[8.5px] font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                          {pillar.toolLabel}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.tools.map((tool, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-[9px] font-mono text-zinc-200 shadow-sm"
                          >
                            <span className="shrink-0">{tool.icon}</span>
                            <span>{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subgroup 2: Disciplines */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/70">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                        <span className="text-[8.5px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                          {pillar.disciplineLabel}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.disciplines.map((disc, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-950/40 border border-zinc-800/80 text-[9px] font-mono text-zinc-300"
                          >
                            <span className="shrink-0">{disc.icon}</span>
                            <span>{disc.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideWrapper>
        );
      })()}

      {/* =========================================================================
          SLIDE 23: CREDENTIALS PART 1 - FORMAL EDUCATION & EXCELLENCE HONORS
      ========================================================================= */}
      <SlideWrapper sectionTitle="Credentials Part 1 · Formal Education & Honors" currentPage={slideCred1}>
        <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {language === "zh" ? "正规学历背景与学术卓越荣誉" : language === "id" ? "Gelar Akademik Formal & Penghargaan Keunggulan" : "Formal Academic Degrees & Excellence Honors"}
            </h2>
            <p className="text-[10.5px] text-zinc-400 font-mono">
              {language === "zh" ? "以 4.00 / 4.00 满分绩点 (Sangat Memuaskan) 毕业于 iSTTS 并荣获 4 项计算机实验室最佳实践奖" : language === "id" ? "Lulus dengan IPK Sempurna 4.00 / 4.00 (Sangat Memuaskan) di iSTTS dan 4x Best Lab Practitioner Awards" : "Graduated with Perfect 4.00 / 4.00 GPA (Sangat Memuaskan) at iSTTS and 4x Best Lab Practitioner Awards"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1 items-stretch py-1">
            {/* Degree 1: iSTTS Bachelor */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-amber-400/30 flex flex-col justify-between space-y-2 shadow-md h-full">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-400 font-mono text-[9.5px] font-bold border border-amber-400/30">
                    {educationData[0]?.honors || "HONORS: VERY SATISFACTORY (PERFECT 4.00 GPA)"}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 font-semibold">{educationData[0]?.period}</span>
                </div>

                <div>
                  <h3 className="text-[14.5px] font-bold text-white mt-0.5">
                    {getEduDegree(educationData[0])}
                  </h3>
                  <div className="text-[11.5px] text-amber-300 font-mono font-medium">
                    {getEduInstitution(educationData[0])}
                  </div>
                </div>

                <p className="text-[10.5px] text-zinc-300 font-light leading-relaxed">
                  {getEduDescription(educationData[0])}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-800/80 space-y-1">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Key Academic Highlights & Honors:</div>
                <div className="text-[10px] text-zinc-300 space-y-1">
                  {getEduHighlights(educationData[0]).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start space-x-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Degree 2: Xin Zhong High School */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between space-y-2 shadow-md h-full">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-sky-400/10 text-sky-400 font-mono text-[9.5px] font-bold border border-sky-400/30">
                    TOP 50 SCORERS CITY SCIENCE OLYMPIAD (OSK) COMPUTER & TECHNOLOGY
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 font-semibold">{educationData[1]?.period}</span>
                </div>

                <div>
                  <h3 className="text-[14.5px] font-bold text-white mt-0.5">
                    {getEduDegree(educationData[1])}
                  </h3>
                  <div className="text-[11.5px] text-sky-300 font-mono font-medium">
                    {getEduInstitution(educationData[1])}
                  </div>
                </div>

                <p className="text-[10.5px] text-zinc-300 font-light leading-relaxed">
                  {getEduDescription(educationData[1])}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-800/80 space-y-1">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Key Academic Highlights & Honors:</div>
                <div className="text-[10px] text-zinc-300 space-y-1">
                  {getEduHighlights(educationData[1]).slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start space-x-1.5">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4x Best Lab Practitioner Awards Strip with Visual Certificate Images */}
          <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
            <div className="flex items-center justify-between">
              <div className="text-[10.5px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>BEST ACADEMIC PRACTITIONER AWARDS (4X RECIPIENT · 2018–2019)</span>
              </div>
              <span className="text-[9px] font-mono text-zinc-400">INSTITUT SAINS DAN TEKNOLOGI TERPADU SURABAYA · COMPUTER SCIENCE LABS</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {(() => {
                const awardRotationMap: Record<string, string> = {
                  "award-algo-2018.webp":         "rotate(90deg)",
                  "award-web-2018.webp":           "rotate(-90deg)",
                  "award-client-server-2019.webp": "rotate(-90deg)",
                  "award-pbo-2019.webp":           "rotate(-90deg)",
                };
                const getAwardRotation = (imgPath: string) => {
                  const filename = imgPath.split("/").pop() || "";
                  return awardRotationMap[filename] ?? "rotate(90deg)";
                };
                return awardsData.map((award, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden bg-zinc-900/90 border border-amber-400/30 flex flex-col justify-between shadow-md group">
                    {/* Certificate Image — landscape di-scan portrait, rotate per-file */}
                    <div className="relative h-[115px] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={award.image || "/assets/certificates/award-algo-2018.webp"}
                        alt={getAwardTitle(award)}
                        style={{
                          position: "absolute",
                          height: "280px",
                          width: "auto",
                          maxWidth: "none",
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) ${getAwardRotation(award.image || "")}`,
                        }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-zinc-950/85 backdrop-blur-sm text-amber-400 font-mono text-[8.5px] font-bold border border-amber-400/30">
                        {award.year}
                      </div>
                    </div>

                    {/* Award Details */}
                    <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1">
                      <div>
                        <div className="text-[10px] font-bold text-white leading-snug">
                          {getAwardTitle(award)}
                        </div>
                        <div className="text-[8.5px] text-amber-300/90 font-mono mt-0.5">
                          {language === "zh" && award.subjectZh ? award.subjectZh : language === "id" && award.subjectId ? award.subjectId : award.subject}
                        </div>
                      </div>

                      <div className="pt-1 border-t border-zinc-800/60 flex items-center justify-between">
                        <span className="text-[7.5px] font-mono text-zinc-400 uppercase tracking-wider">iSTTS LAB</span>
                        {award.image && (
                          <a
                            href={award.image.startsWith("http") ? award.image : `https://jaw12.github.io${award.image.startsWith("/") ? "" : "/"}${award.image}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[8px] font-mono text-amber-400 hover:text-amber-300 underline font-semibold flex items-center gap-0.5"
                          >
                            <span>{language === "zh" ? "官方证书" : language === "id" ? "Sertifikat" : "Certificate"}</span>
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 24: CREDENTIALS PART 2 - LEADERSHIP & STUDENT ORGANIZATIONS (COMPLETE 6 FULL CARDS)
      ========================================================================= */}
      <SlideWrapper sectionTitle="Credentials Part 2 · Leadership & Student Organizations" currentPage={slideCred2}>
        <div className="flex flex-col justify-between h-full py-0.5 space-y-1.5">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {language === "zh" ? "大学领导力、学生组织与社会服务" : language === "id" ? "Kepemimpinan Kampus, Organisasi Mahasiswa & Layanan" : "Campus Leadership, Student Organizations & Service"}
            </h2>
            <p className="text-[10.5px] text-zinc-400 font-mono">
              {language === "zh" ? "主导 PRENSSIB 新生导师项目、系学生会核心干部、企业工业参访与全校级商业赞助统筹" : language === "id" ? "Memimpin Orientasi Mahasiswa Baru PRENSSIB, Pengurus HIMA SIB, Kunjungan Industri & Sponsorship Kampus" : "Leading PRENSSIB freshman orientation, HIMA SIB department board, Industrial Visits & Campus Sponsorships"}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 flex-1 items-stretch py-1">
            {/* Leadership 1: PRENSSIB */}
            {(() => {
              const item = leadershipExperiencesData[0];
              return (
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-amber-400/25 flex flex-col justify-between space-y-1.5 shadow-md h-full">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                      <span>{getExpPeriod(item)}</span>
                      <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 uppercase font-bold text-[8.5px]">
                        LEADERSHIP
                      </span>
                    </div>
                    <h3 className="text-[12.5px] font-bold text-white leading-tight">{getExpRole(item)}</h3>
                    <div className="text-[10.5px] font-mono text-amber-300 font-semibold">{getExpCompany(item)}</div>
                    <p className="text-[10px] text-zinc-300 font-light leading-snug">
                      {getExpDescription(item)}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-zinc-800/80">
                    {getExpBullets(item).slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-1.5 text-[9.5px] text-zinc-300 leading-snug">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {getExpTags(item).length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {getExpTags(item).slice(0, 4).map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[8.5px] font-mono border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Leadership 2: HIMA SIB Tutor */}
            {(() => {
              const item = leadershipExperiencesData[1];
              return (
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-sky-400/25 flex flex-col justify-between space-y-1.5 shadow-md h-full">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                      <span>{getExpPeriod(item)}</span>
                      <span className="px-2 py-0.5 rounded bg-sky-400/10 text-sky-400 border border-sky-400/20 uppercase font-bold text-[8.5px]">
                        TUTORING
                      </span>
                    </div>
                    <h3 className="text-[12.5px] font-bold text-white leading-tight">{getExpRole(item)}</h3>
                    <div className="text-[10.5px] font-mono text-sky-300 font-semibold">{getExpCompany(item)}</div>
                    <p className="text-[10px] text-zinc-300 font-light leading-snug">
                      {getExpDescription(item)}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-zinc-800/80">
                    {getExpBullets(item).slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-1.5 text-[9.5px] text-zinc-300 leading-snug">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {getExpTags(item).length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {getExpTags(item).slice(0, 4).map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[8.5px] font-mono border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Leadership 3: Kunjungan Industri SIB */}
            {(() => {
              const item = leadershipExperiencesData[2];
              return (
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-emerald-400/25 flex flex-col justify-between space-y-1.5 shadow-md h-full">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                      <span>{getExpPeriod(item)}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 uppercase font-bold text-[8.5px]">
                        RELATIONS
                      </span>
                    </div>
                    <h3 className="text-[12.5px] font-bold text-white leading-tight">{getExpRole(item)}</h3>
                    <div className="text-[10.5px] font-mono text-emerald-300 font-semibold">{getExpCompany(item)}</div>
                    <p className="text-[10px] text-zinc-300 font-light leading-snug">
                      {getExpDescription(item)}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-zinc-800/80">
                    {getExpBullets(item).slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-1.5 text-[9.5px] text-zinc-300 leading-snug">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {getExpTags(item).length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {getExpTags(item).slice(0, 4).map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[8.5px] font-mono border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Leadership 4: iSTTS Gamers League (IGL) */}
            {(() => {
              const item = leadershipExperiencesData[3];
              return (
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-purple-400/25 flex flex-col justify-between space-y-1.5 shadow-md h-full">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                      <span>{getExpPeriod(item)}</span>
                      <span className="px-2 py-0.5 rounded bg-purple-400/10 text-purple-400 border border-purple-400/20 uppercase font-bold text-[8.5px]">
                        SPONSORSHIP
                      </span>
                    </div>
                    <h3 className="text-[12.5px] font-bold text-white leading-tight">{getExpRole(item)}</h3>
                    <div className="text-[10.5px] font-mono text-purple-300 font-semibold">{getExpCompany(item)}</div>
                    <p className="text-[10px] text-zinc-300 font-light leading-snug">
                      {getExpDescription(item)}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-zinc-800/80">
                    {getExpBullets(item).slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-1.5 text-[9.5px] text-zinc-300 leading-snug">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {getExpTags(item).length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {getExpTags(item).slice(0, 4).map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[8.5px] font-mono border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Leadership 5: Kartini iSTTS */}
            {(() => {
              const item = leadershipExperiencesData[4];
              return (
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-rose-400/25 flex flex-col justify-between space-y-1.5 shadow-md h-full">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                      <span>{getExpPeriod(item)}</span>
                      <span className="px-2 py-0.5 rounded bg-rose-400/10 text-rose-400 border border-rose-400/20 uppercase font-bold text-[8.5px]">
                        FUNDRAISING
                      </span>
                    </div>
                    <h3 className="text-[12.5px] font-bold text-white leading-tight">{getExpRole(item)}</h3>
                    <div className="text-[10.5px] font-mono text-rose-300 font-semibold">{getExpCompany(item)}</div>
                    <p className="text-[10px] text-zinc-300 font-light leading-snug">
                      {getExpDescription(item)}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-zinc-800/80">
                    {getExpBullets(item).slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-1.5 text-[9.5px] text-zinc-300 leading-snug">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {getExpTags(item).length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {getExpTags(item).slice(0, 4).map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[8.5px] font-mono border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Leadership 6: Community Health & Campus Fellowship */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between space-y-1.5 shadow-md h-full">
              <div className="space-y-1.5">
                {/* Donor Darah PMI */}
                <div className="pb-2 border-b border-zinc-800/80 space-y-0.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                    <span>Oct 2018 – Nov 2018 (2 Mos)</span>
                    <span className="text-emerald-400 font-bold text-[8.5px]">PMI NGO PARTNER</span>
                  </div>
                  <div className="text-[11.5px] font-bold text-white">Donor Darah Dies Natalis XXXIX iSTTS</div>
                  <div className="text-[9.5px] text-emerald-300 font-mono">Palang Merah Indonesia (PMI)</div>
                  <p className="text-[10px] text-zinc-300 font-light leading-snug">
                    • Coordinated institutional community blood donation drive with PMI, organizing donor queues and logistics.
                  </p>
                </div>

                {/* IFJ iSTTS */}
                <div className="pt-0.5 space-y-0.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                    <span>Aug 2018 – Jan 2019 (6 Mos)</span>
                    <span className="text-sky-400 font-bold text-[8.5px]">OPERATIONS</span>
                  </div>
                  <div className="text-[11.5px] font-bold text-white">Service Management & Usher</div>
                  <div className="text-[9.5px] text-sky-300 font-mono">IFJ iSTTS Campus Gatherings</div>
                  <p className="text-[10px] text-zinc-300 font-light leading-snug">
                    • Coordinated weekly campus community fellowship flow, stage setup, and ushering operations.
                  </p>
                </div>
              </div>

              <div className="text-[9px] font-mono text-zinc-500 pt-1 border-t border-zinc-800">
                Surabaya, Indonesia
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 25: CREDENTIALS PART 3 - CERTIFICATIONS (TOP GRID) & TRILINGUAL (BOTTOM HORIZONTAL STRIP)
      ========================================================================= */}
      <SlideWrapper sectionTitle="Credentials Part 3 · Certifications & Trilingual Mastery" currentPage={slideCred3}>
        <div className="flex flex-col justify-between h-full py-0.5 space-y-2">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {language === "zh" ? "专业行业认证、合规资质与三语精通" : language === "id" ? "Sertifikasi Profesional, Kepatuhan & Kemampuan Trilingual" : "Professional Certifications, Regulatory Compliance & Trilingual Mastery"}
            </h2>
            <p className="text-[10.5px] text-zinc-400 font-mono">
              {language === "zh" ? "涵盖 IBM、AWS、Google Developers、Dicoding 权威认证与官方 HSK 4 级满分普通话" : language === "id" ? "Mencakup Sertifikasi IBM, AWS, Google Developers, Dicoding & Tersertifikasi Mandarin HSK 4" : "Covering IBM, AWS, Google Developers, Dicoding Certifications & Certified HSK 4 Mandarin"}
            </p>
          </div>

          {/* TOP: 14 Professional Certifications Grid (4 columns x 4 rows) */}
          <div className="grid grid-cols-4 gap-2 flex-1 items-stretch py-1">
            {certificationsData.slice(0, 14).map((cert, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 flex flex-col justify-between space-y-1 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-zinc-400 font-semibold">{cert.issuer}</span>
                    <span className="text-[9px] font-mono text-amber-400 font-bold ml-1">{cert.year}</span>
                  </div>
                  <div className="text-[10.5px] font-bold text-white mt-0.5 leading-snug">
                    {getCertTitle(cert)}
                  </div>
                </div>
                <div className="pt-1 flex items-center justify-between border-t border-zinc-800/80">
                  <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 text-cyan-400 border border-zinc-800 uppercase font-semibold">
                    {cert.category || "TECH"}
                  </span>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[8px] font-mono text-amber-400 hover:text-amber-300 underline font-semibold flex items-center gap-0.5"
                    >
                      <span>Verify</span> ↗
                    </a>
                  ) : cert.image ? (
                    <a
                      href={cert.image.startsWith("http") ? cert.image : `https://jaw12.github.io${cert.image.startsWith("/") ? "" : "/"}${cert.image}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[8px] font-mono text-sky-400 hover:text-sky-300 underline font-semibold flex items-center gap-0.5"
                    >
                      <span>View Cert</span> ↗
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM: Luxury Trilingual Mastery Horizontal Strip (Full Width Container with 3 Cards) */}
          <div className="p-3 rounded-xl bg-zinc-900/95 border border-amber-400/30 space-y-2 shadow-md shrink-0">
            <div className="flex items-center space-x-2 text-amber-400 font-mono text-[10.5px] uppercase tracking-wider pb-1 border-b border-zinc-800">
              <Globe className="w-4 h-4 text-amber-400" />
              <span className="font-bold">{language === "zh" ? "全球化三语无缝沟通能力" : language === "id" ? "KEMAMPUAN TRILINGUAL GLOBAL" : "TRILINGUAL FLUENCY · GLOBAL CROSS-BORDER COLLABORATION"}</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {/* Indonesian */}
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] font-bold text-white">Bahasa Indonesia</div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold border border-emerald-500/30">
                    NATIVE
                  </span>
                </div>
                <div className="text-[9px] text-zinc-400 font-mono">
                  {language === "zh" ? "母语 · 商业洽谈与系统文档" : language === "id" ? "Penutur Asli · Negosiasi & Sistem" : "Native Tongue · Business & Systems"}
                </div>
                <p className="text-[9.5px] text-zinc-300 font-light leading-snug pt-0.5">
                  Full verbal & written fluency for high-stakes business negotiations, system documentation, and corporate operations.
                </p>
              </div>

              {/* English */}
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] font-bold text-white">English (US/UK)</div>
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono text-[9px] font-bold border border-sky-500/30">
                    PROFESSIONAL
                  </span>
                </div>
                <div className="text-[9px] text-zinc-400 font-mono">
                  {language === "zh" ? "全工作级软件工程与跨国协作" : language === "id" ? "Full Professional Engineering" : "Full Professional Engineering"}
                </div>
                <p className="text-[9.5px] text-zinc-300 font-light leading-snug pt-0.5">
                  Engineering documentation, clean architecture specifications, international client alignment, and technical writing.
                </p>
              </div>

              {/* Chinese Mandarin */}
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-amber-400/25 flex flex-col justify-between space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] font-bold text-amber-300">Chinese Mandarin (普通话)</div>
                  <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 font-mono text-[9px] font-bold border border-amber-400/30">
                    HSK 4 CERTIFIED
                  </span>
                </div>
                <div className="text-[9px] text-zinc-400 font-mono">
                  {language === "zh" ? "官方认证 HSK 4 级 (听力满分 100/100)" : language === "id" ? "Tersertifikasi HSK 4 (Nilai Sempurna 100/100)" : "Certified HSK 4 (Perfect 100/100)"}
                </div>
                <p className="text-[9.5px] text-zinc-300 font-light leading-snug pt-0.5">
                  Official HSK 4 credential with perfect listening marks, ready for Greater China cross-border trade & technical dialogue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideWrapper>

      {/* =========================================================================
          SLIDE 26: DIRECT ENGAGEMENT & CLOSING (COMBINED FINAL CONTACT SLIDE)
      ========================================================================= */}
      <SlideWrapper sectionTitle="Direct Engagement & Closing" currentPage={slideContact}>
        <div className="flex flex-col justify-around items-center h-full py-2 text-center">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10.5px] border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>
                {language === "zh"
                  ? "合作状态：开放全球远程 / 混合办公机会"
                  : language === "id"
                  ? "Status: Terbuka untuk Peluang Remote / Hybrid"
                  : "Status: Open for Remote / Hybrid Roles"}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {language === "zh" ? "让我们携手构建稳健系统" : language === "id" ? "Mari Terhubung & Bangun Sistem" : "Let's Connect & Build Systems"}
            </h2>
            <p className="text-xs text-zinc-300 max-w-lg mx-auto font-light leading-relaxed">
              {language === "zh"
                ? "无论是全栈 Web 应用开发、业务自动化流程搭建，还是企业级系统数字化转型，我都随时准备好提供坚实有力的技术支持。"
                : language === "id"
                ? "Baik untuk rekayasa aplikasi web modern, otomasi proses bisnis, maupun transformasi sistem digital perusahaan, saya siap berkontribusi secara nyata."
                : "Whether for modern web application engineering, operational business automations, or enterprise digital systems, I am ready to deliver high-impact results."}
            </p>
          </div>

          {/* 5 Clickable Contact Channels Grid */}
          <div className="grid grid-cols-5 gap-3 w-full max-w-4xl">
            <a
              href="mailto:jemangkasa.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col items-center justify-between space-y-1 hover:border-amber-400/50 hover:bg-zinc-800/80 transition-all shadow-md group cursor-pointer"
            >
              <Mail className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <div className="text-[9px] font-mono text-zinc-400 uppercase font-semibold">Email</div>
              <div className="text-[10px] font-mono text-white font-semibold break-all">
                jemangkasa.work@gmail.com
              </div>
              <span className="text-[8.5px] font-mono text-amber-400 font-bold">{getActionLabel("email")}</span>
            </a>

            <a
              href="https://wa.me/6281273567384"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900/90 border border-emerald-400/50 hover:bg-zinc-800/80 transition-all shadow-md group cursor-pointer"
            >
              <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="text-[9px] font-mono text-zinc-400 uppercase font-semibold">WhatsApp</div>
              <div className="text-[10.5px] font-mono text-white font-semibold">
                +6281273567384
              </div>
              <span className="text-[8.5px] font-mono text-emerald-400 font-bold">{getActionLabel("whatsapp")}</span>
            </a>

            <a
              href="https://linkedin.com/in/jem-angkasa-wijaya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col items-center justify-between space-y-1 hover:border-sky-400/50 hover:bg-zinc-800/80 transition-all shadow-md group cursor-pointer"
            >
              <LinkedinIcon className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <div className="text-[9px] font-mono text-zinc-400 uppercase font-semibold">LinkedIn</div>
              <div className="text-[10px] font-mono text-white font-semibold">
                /in/jem-angkasa-wijaya
              </div>
              <span className="text-[8.5px] font-mono text-sky-400 font-bold">{getActionLabel("linkedin")}</span>
            </a>

            <a
              href="https://github.com/JAW12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col items-center justify-between space-y-1 hover:border-purple-400/50 hover:bg-zinc-800/80 transition-all shadow-md group cursor-pointer"
            >
              <GithubIcon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <div className="text-[9px] font-mono text-zinc-400 uppercase font-semibold">GitHub</div>
              <div className="text-[10.5px] font-mono text-white font-semibold">
                github.com/JAW12
              </div>
              <span className="text-[8.5px] font-mono text-purple-400 font-bold">{getActionLabel("github")}</span>
            </a>

            <a
              href="https://JAW12.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col items-center justify-between space-y-1 hover:border-amber-400/50 hover:bg-zinc-800/80 transition-all shadow-md group cursor-pointer"
            >
              <Globe className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <div className="text-[9px] font-mono text-zinc-400 uppercase font-semibold">Portfolio</div>
              <div className="text-[10.5px] font-mono text-white font-semibold">
                JAW12.github.io
              </div>
              <span className="text-[8.5px] font-mono text-amber-400 font-bold">{getActionLabel("portfolio")}</span>
            </a>
          </div>

          <div className="pt-1">
            <h3 className="text-base font-bold text-white tracking-tight">
              <span className="text-amber-400">JEM</span> ANGKASA WIJAYA, S.Kom.
            </h3>
            <p className="text-[10.5px] font-mono text-zinc-400 mt-0.5">
              {language === "zh"
                ? "印度尼西亚·泗水 · 企业业务系统 · 全栈软件开发 · AI 自动化工作流"
                : language === "id"
                ? "Surabaya, Indonesia · Sistem Operasional Bisnis · Full-Stack Software · Otomasi AI"
                : "Surabaya, Indonesia · Business Systems, Full-Stack Software & AI Workflows"}
            </p>
            <p className="text-[9px] font-mono text-zinc-600 mt-0.5">
              © {new Date().getFullYear()} Jem Angkasa Wijaya. All Rights Reserved.
            </p>
          </div>
        </div>
      </SlideWrapper>
    </div>
  );
}
