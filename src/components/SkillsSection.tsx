"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Layout,
  Server,
  Cpu,
  Package,
  Globe,
  FileCode,
  Layers,
  Database,
  Network,
  Building2,
  Terminal,
  Bot,
  Workflow,
  Sparkles,
  Snowflake,
  ShieldCheck,
  FileCheck,
  Code2,
  TrendingUp,
  BarChart3,
  Compass,
  FileSpreadsheet,
  Boxes,
  Share2,
  Search,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
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
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

interface SkillItem {
  name: string;
  nameId?: string;
  nameZh?: string;
  icon?: React.ReactNode;
}

interface SkillSubgroup {
  label: string;
  labelId: string;
  labelZh: string;
  skills: SkillItem[];
}

interface PillarDomain {
  id: string;
  icon: React.ReactNode;
  accent: string;
  auroraColor: "oren" | "biru" | "ungu" | "ijo";
  auroraBiasGlow: string;
  borderColor: string;
  sheenColor: string;
  title: string;
  titleId: string;
  titleZh: string;
  description: string;
  descriptionId: string;
  descriptionZh: string;
  toolGroup: SkillSubgroup;
  disciplineGroup: SkillSubgroup;
}

export function SkillsSection() {
  const { language } = useLanguage();

  const pillars: PillarDomain[] = [
    {
      id: "fullstack-web",
      icon: <Layout className="w-5 h-5 text-amber-400" />,
      accent: "from-amber-500/20 to-transparent",
      auroraColor: "oren",
      auroraBiasGlow: "bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.60)_0%,rgba(245,158,11,0.35)_45%,transparent_75%)]",
      borderColor: "hover:border-amber-400/70",
      sheenColor: "via-amber-400/80",
      title: "Web & Frontend Architecture",
      titleId: "Arsitektur Web & Frontend",
      titleZh: "Web 前端系统架构",
      description: "Modern component frameworks, reactive state management, client-side compute, and responsive web applications.",
      descriptionId: "Framework modern, manajemen state reaktif, komputasi sisi klien, dan aplikasi web responsif.",
      descriptionZh: "现代组件工程、响应式状态管理、客户端即时计算与高性能 Web 体系。",
      toolGroup: {
        label: "Technologies & Core Tools",
        labelId: "Perkakas & Teknologi Utama",
        labelZh: "核心技术与开发工具",
        skills: [
          { name: "Next.js (App Router)", nameId: "Next.js (App Router)", nameZh: "Next.js (App 路由架构)", icon: <NextjsIcon className="w-3.5 h-3.5 text-white" /> },
          { name: "TypeScript", nameId: "TypeScript", nameZh: "TypeScript", icon: <TypeScriptIcon className="w-3.5 h-3.5 text-blue-400" /> },
          { name: "React.js", nameId: "React.js", nameZh: "React.js", icon: <ReactIcon className="w-3.5 h-3.5 text-cyan-400" /> },
          { name: "Tailwind CSS", nameId: "Tailwind CSS", nameZh: "Tailwind CSS", icon: <TailwindIcon className="w-3.5 h-3.5 text-cyan-400" /> },
          { name: "Figma (UI/UX & Systems)", nameId: "Figma (UI/UX & Sistem)", nameZh: "Figma (UI/UX 与设计系统)", icon: <FigmaIcon className="w-3.5 h-3.5 text-purple-400" /> },
          { name: "Git & GitHub", nameId: "Git & GitHub", nameZh: "Git & GitHub 代码版本控制", icon: <GithubIcon className="w-3.5 h-3.5 text-zinc-300" /> },
        ],
      },
      disciplineGroup: {
        label: "Architecture & Disciplines",
        labelId: "Arsitektur & Rekayasa",
        labelZh: "系统架构与工程规范",
        skills: [
          { name: "RESTful API Architecture", nameId: "Arsitektur RESTful API", nameZh: "RESTful API 系统架构", icon: <Globe className="w-3.5 h-3.5 text-emerald-400" /> },
          { name: "Client-Side State & Compute", nameId: "State & Komputasi Sisi Klien", nameZh: "客户端状态管理与即时计算", icon: <Cpu className="w-3.5 h-3.5 text-amber-300" /> },
          { name: "Browser & Web Share APIs", nameId: "API Browser & Web Share", nameZh: "浏览器原生能力与 Web Share API", icon: <Share2 className="w-3.5 h-3.5 text-cyan-300" /> },
          { name: "Responsive UI Standards", nameId: "Standar UI Responsif", nameZh: "跨端响应式 UI 规范", icon: <Layout className="w-3.5 h-3.5 text-orange-400" /> },
        ],
      },
    },
    {
      id: "backend-systems",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      accent: "from-blue-500/20 to-transparent",
      auroraColor: "biru",
      auroraBiasGlow: "bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.60)_0%,rgba(59,130,246,0.35)_45%,transparent_75%)]",
      borderColor: "hover:border-cyan-400/70",
      sheenColor: "via-cyan-400/80",
      title: "Backend & Enterprise Systems",
      titleId: "Sistem Backend & Enterprise",
      titleZh: "后端架构与企业级系统",
      description: "Relational data modeling, multi-tier transactional backends, algorithms, and server infrastructure.",
      descriptionId: "Pemodelan data relasional, backend transaksional multi-tier, algoritma, dan arsitektur server.",
      descriptionZh: "关系型数据建模、多层事务后端、核心算法与企业级服务器基础设施。",
      toolGroup: {
        label: "Technologies & Stack",
        labelId: "Stack Teknologi & Bahasa",
        labelZh: "核心技术栈与开发语言",
        skills: [
          { name: "PHP / Laravel Framework", nameId: "PHP / Framework Laravel", nameZh: "PHP / Laravel 框架体系", icon: <LaravelIcon className="w-3.5 h-3.5 text-rose-500" /> },
          { name: "MySQL (3NF Relational DB)", nameId: "MySQL (DB Relasional 3NF)", nameZh: "MySQL (3NF 关系型数据库)", icon: <MysqlIcon className="w-3.5 h-3.5 text-amber-400" /> },
          { name: "C# (.NET / WinForms)", nameId: "C# (.NET / WinForms)", nameZh: "C# (.NET / WinForms 桌面应用)", icon: <CSharpIcon className="w-3.5 h-3.5 text-purple-400" /> },
          { name: "Java (OOP Architecture)", nameId: "Java (Arsitektur OOP)", nameZh: "Java (OOP 面向对象架构)", icon: <JavaIcon className="w-3.5 h-3.5 text-orange-400" /> },
          { name: "Docker Containerization", nameId: "Kontainerisasi Docker", nameZh: "Docker 容器化部署", icon: <DockerIcon className="w-3.5 h-3.5 text-blue-400" /> },
          { name: "Linux / Shell Environment", nameId: "Lingkungan Linux / Shell", nameZh: "Linux / Shell 运维环境", icon: <LinuxIcon className="w-3.5 h-3.5 text-amber-300" /> },
        ],
      },
      disciplineGroup: {
        label: "Systems & Architecture",
        labelId: "Sistem & Pemodelan Data",
        labelZh: "系统设计与数据建模",
        skills: [
          { name: "ERP & POS Data Modeling", nameId: "Pemodelan Data ERP & POS", nameZh: "ERP 与 POS 核心数据建模", icon: <Building2 className="w-3.5 h-3.5 text-blue-400" /> },
          { name: "Client-Server Socket Protocols", nameId: "Protokol Soket Client-Server", nameZh: "C/S 架构 Socket 通信协议", icon: <Network className="w-3.5 h-3.5 text-indigo-400" /> },
          { name: "Database Query Profiling", nameId: "Profiling & Optimasi Kueri DB", nameZh: "数据库慢查询剖析与索引优化", icon: <Database className="w-3.5 h-3.5 text-cyan-400" /> },
          { name: "Multi-Tier Architecture", nameId: "Arsitektur Sistem Multi-Tier", nameZh: "多层架构与分布式解耦", icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
        ],
      },
    },
    {
      id: "ai-automation",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      accent: "from-purple-500/20 to-transparent",
      auroraColor: "ungu",
      auroraBiasGlow: "bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.60)_0%,rgba(147,51,234,0.35)_45%,transparent_75%)]",
      borderColor: "hover:border-purple-400/70",
      sheenColor: "via-purple-400/80",
      title: "AI Workflows & Automation",
      titleId: "Alur Kerja AI & Otomasi",
      titleZh: "AI 智能自动化管线",
      description: "Deterministic compiling engines, structured prompt engineering, local RAG, and automated workflows.",
      descriptionId: "Engine kompilasi deterministik, rekayasa prompt terstruktur, RAG lokal, dan alur kerja otomatis.",
      descriptionZh: "确定性编译引擎、结构化 Prompt 调优、本地向量 RAG 检索与端到端自动化流程。",
      toolGroup: {
        label: "Frameworks & Automation Tools",
        labelId: "Perkakas & Framework Otomasi",
        labelZh: "自动化框架与开发工具",
        skills: [
          { name: "Python Automation Engines", nameId: "Engine Otomasi Python", nameZh: "Python 自动化工程引擎", icon: <PythonIcon className="w-3.5 h-3.5 text-emerald-400" /> },
          { name: "n8n Visual Automation", nameId: "Otomasi Visual n8n", nameZh: "n8n 可视化工作流引擎", icon: <N8nIcon className="w-3.5 h-3.5 text-pink-400" /> },
          { name: "Multi-Agent Systems & CLI", nameId: "Sistem Multi-Agen & CLI", nameZh: "多智能体协同系统与 CLI", icon: <Bot className="w-3.5 h-3.5 text-violet-400" /> },
          { name: "Web Scraping & Extraction", nameId: "Scraping & Ekstraksi Web", nameZh: "网页爬虫与结构化数据提取", icon: <Search className="w-3.5 h-3.5 text-sky-400" /> },
          { name: "Webhooks & Integrations", nameId: "Webhook & Integrasi Sistem", nameZh: "Webhooks 与第三方系统集成", icon: <Workflow className="w-3.5 h-3.5 text-cyan-400" /> },
        ],
      },
      disciplineGroup: {
        label: "AI Pipelines & Synthesis Methods",
        labelId: "Pipeline AI & Metode Sintesis",
        labelZh: "AI 管线编排与知识合成",
        skills: [
          { name: "Structured Prompt Engineering", nameId: "Rekayasa Prompt Terstruktur", nameZh: "结构化 Prompt 工程规范", icon: <Terminal className="w-3.5 h-3.5 text-purple-400" /> },
          { name: "Vector RAG & Knowledge Vaults", nameId: "RAG Vektor & Vault Pengetahuan", nameZh: "向量 RAG 检索与知识库管理", icon: <Database className="w-3.5 h-3.5 text-fuchsia-400" /> },
          { name: "LLM Prompt Chaining", nameId: "LLM Prompt Chaining Bertingkat", nameZh: "LLM 提示词链与流水线编排", icon: <Code2 className="w-3.5 h-3.5 text-purple-300" /> },
          { name: "Automated Book Publishing", nameId: "Penerbitan Buku Otomatis", nameZh: "自动化长篇出版物编译管线", icon: <Sparkles className="w-3.5 h-3.5 text-amber-300" /> },
          { name: "AI Research Synthesis", nameId: "Sintesis Riset Berbasis AI", nameZh: "AI 辅助高阶学术研究合成", icon: <FileCode className="w-3.5 h-3.5 text-teal-400" /> },
        ],
      },
    },
    {
      id: "business-operations",
      icon: <Package className="w-5 h-5 text-emerald-400" />,
      accent: "from-emerald-500/20 to-transparent",
      auroraColor: "ijo",
      auroraBiasGlow: "bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.60)_0%,rgba(55,150,105,0.35)_45%,transparent_75%)]",
      borderColor: "hover:border-emerald-400/70",
      sheenColor: "via-emerald-400/80",
      title: "Business Operations & Quant",
      titleId: "Operasional Bisnis & Finansial",
      titleZh: "商业运营与量化研究",
      description: "B2B commercial workflows, quantitative portfolio ledgers, -25°C cold chain, and packaging compliance.",
      descriptionId: "Alur kerja komersial B2B, buku besar portofolio kuantitatif, logistik rantai dingin -25°C, dan kepatuhan standar industri.",
      descriptionZh: "B2B商业供应链流水线、量化金融投资组合核算、-25°C极低温冷链与工业包装合规体系。",
      toolGroup: {
        label: "Operations & Physical Supply Chain",
        labelId: "Operasional & Rantai Pasok Fisik",
        labelZh: "实体供应链与工业运营",
        skills: [
          { name: "Cold-Chain Logistics (-25°C)", nameId: "Logistik Rantai Dingin (-25°C)", nameZh: "-25°C 超低温冷链物流", icon: <Snowflake className="w-3.5 h-3.5 text-cyan-300" /> },
          { name: "Industrial Barrier Packaging", nameId: "Kemasan Pelindung Industri", nameZh: "工业级阻隔复合包装工程", icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> },
          { name: "Packaging Factory Dielines", nameId: "Dieline Cetak Pabrik Kemasan", nameZh: "包装刀模规范与打样工程", icon: <Package className="w-3.5 h-3.5 text-amber-400" /> },
          { name: "Inventory Ledgers (FIFO)", nameId: "Buku Besar Inventaris (FIFO)", nameZh: "库存出入账本与先进先出 (FIFO)", icon: <Boxes className="w-3.5 h-3.5 text-orange-400" /> },
          { name: "B2B Sales Invoicing & SOPs", nameId: "Faktur Penjualan B2B & SOP", nameZh: "B2B 大宗销售开票与 SOP 体系", icon: <FileCheck className="w-3.5 h-3.5 text-blue-400" /> },
        ],
      },
      disciplineGroup: {
        label: "Quantitative Finance & Compliance",
        labelId: "Riset Finansial & Regulasi",
        labelZh: "量化金融模型与合规审计",
        skills: [
          { name: "Quantitative DCA Reconciliation", nameId: "Rekonsiliasi DCA Kuantitatif", nameZh: "量化定投对账与资金流水模型", icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> },
          { name: "Risk/Reward (RR) & Drawdowns", nameId: "Risk/Reward (RR) & Drawdown", nameZh: "盈亏比 (RR) 模型与回撤控制", icon: <BarChart3 className="w-3.5 h-3.5 text-indigo-400" /> },
          { name: "Technical Market Analysis", nameId: "Analisis Pasar Teknikal", nameZh: "多周期多资产技术面行情研判", icon: <Compass className="w-3.5 h-3.5 text-purple-400" /> },
          { name: "Spreadsheet Financial Models", nameId: "Model Finansial Spreadsheet", nameZh: "复杂财务报表与高精模型推演", icon: <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" /> },
          { name: "Regulatory Standards (Halal/Kementan)", nameId: "Standar Regulasi (Halal/Kementan)", nameZh: "行业法规与合规认证 (清真/农业部)", icon: <Globe className="w-3.5 h-3.5 text-teal-300" /> },
        ],
      },
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 pt-20 pb-36 sm:pb-44 relative overflow-hidden bg-transparent">
      {/* Wing 07: Star Cluster & Spectral Matrix with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="cluster" />
      {/* Subtle Ambient Radial Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#d4af37]/[0.02] blur-[150px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-blue-500/[0.015] blur-[160px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.045] select-none pointer-events-none tracking-widest blur-[1px]">
              SKILLS & TOOLS
            </span>
            <div className="space-y-3 max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono uppercase tracking-widest text-[#ebdca4]">
                <Wrench className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>
                  {language === "zh"
                    ? "核心技能与技术工具链"
                    : language === "id"
                    ? "KEAHLIAN & PERKAKAS TEKNIS"
                    : "SKILLS & TECHNICAL TOOLS"}
                </span>
              </div>
              
              <div className="flex items-baseline gap-3">
                <span className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#d4af37] leading-none select-none">
                  /
                </span>
                <h2 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white uppercase tracking-tight leading-none">
                  SKILLS & TOOLS
                </h2>
              </div>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                {language === "zh"
                  ? "核心工程栈与跨学科实践：涵盖全栈 Web 开发、企业级数据后端、AI 自动化流程、量化研究与实体冷链运营。"
                  : language === "id"
                  ? "Teknologi inti dan disiplin rekayasa: mencakup pengembangan web full-stack, data backend enterprise, otomasi alur kerja AI, riset finansial kuantitatif, dan operasional rantai dingin fisik."
                  : "Core technologies and disciplines across full-stack software, data systems, AI workflows, quantitative research, and industrial operations."}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="font-mono text-sm text-zinc-400 tracking-widest block font-medium">
                05 / 06
              </span>
              <span className="font-mono text-xs text-[#ebdca4] uppercase tracking-wider font-semibold">
                {language === "zh" ? "技术栈与工具" : language === "id" ? "STACK & PERKAKAS" : "STACK & TOOLS"}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Clean Scannable Pillar Cards with Airy Breathing Room & Organic Asynchronous Cosmic Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 pt-4">
          {pillars.map((pillar) => {
            const title =
              language === "zh"
                ? pillar.titleZh
                : language === "id"
                ? pillar.titleId
                : pillar.title;
            const description =
              language === "zh"
                ? pillar.descriptionZh
                : language === "id"
                ? pillar.descriptionId
                : pillar.description;

            const toolLabel =
              language === "zh"
                ? pillar.toolGroup.labelZh
                : language === "id"
                ? pillar.toolGroup.labelId
                : pillar.toolGroup.label;

            const disciplineLabel =
              language === "zh"
                ? pillar.disciplineGroup.labelZh
                : language === "id"
                ? pillar.disciplineGroup.labelId
                : pillar.disciplineGroup.label;

            // Distinct, non-synchronous breathing animation classes for each pillar card
            const cloudAnimClass =
              pillar.auroraColor === "oren"
                ? "[animation:cloudBreatheOrange_11.5s_ease-in-out_infinite]"
                : pillar.auroraColor === "biru"
                ? "[animation:cloudBreatheBlue_16.2s_ease-in-out_infinite_1.8s]"
                : pillar.auroraColor === "ungu"
                ? "[animation:cloudBreathePurple_13.4s_ease-in-out_infinite_3.2s]"
                : "[animation:cloudBreatheGreen_18.6s_ease-in-out_infinite_2.4s]";

            const dotColor =
              pillar.auroraColor === "oren"
                ? "bg-amber-400"
                : pillar.auroraColor === "biru"
                ? "bg-cyan-400"
                : pillar.auroraColor === "ungu"
                ? "bg-purple-400"
                : "bg-emerald-400";

            return (
              <div key={pillar.id} className="relative group flex flex-col">
                {/* 1. SOFT VOLUMETRIC COSMIC GAS CLOUDS (Refined, organic natural breathing glow behind card) */}
                <div className="absolute -inset-4 sm:-inset-6 -z-10 pointer-events-none rounded-3xl overflow-visible opacity-50 group-hover:opacity-85 transition-opacity duration-700 flex items-center justify-center">
                  {/* Central Primary Breathing Cloud Bank with Randomized Organic Timing */}
                  <div
                    className={`absolute inset-0 rounded-3xl blur-[50px] sm:blur-[65px] ${cloudAnimClass}`}
                    style={{
                      background:
                        pillar.auroraColor === "oren"
                          ? "radial-gradient(ellipse at 50% 50%, rgba(245, 158, 11, 0.32) 0%, rgba(249, 115, 22, 0.16) 45%, transparent 75%)"
                          : pillar.auroraColor === "biru"
                          ? "radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.32) 0%, rgba(59, 130, 246, 0.16) 45%, transparent 75%)"
                          : pillar.auroraColor === "ungu"
                          ? "radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.32) 0%, rgba(217, 70, 239, 0.16) 45%, transparent 75%)"
                          : "radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.32) 0%, rgba(20, 184, 166, 0.16) 45%, transparent 75%)",
                    }}
                  />

                  {/* Ambient Base Corner Bias Glow */}
                  <div className={`absolute inset-0 ${pillar.auroraBiasGlow} blur-[40px] opacity-40 group-hover:opacity-75 transition-opacity duration-500`} />
                </div>

                {/* 2. The Skill Pillar Card */}
                <div
                  className={`relative rounded-3xl bg-[#0c0c10]/85 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 lg:p-9 space-y-6 ${pillar.borderColor} hover:-translate-y-1.5 transition-all duration-500 shadow-[0_16px_50px_rgba(0,0,0,0.6)] overflow-hidden z-10 flex flex-col justify-start flex-1`}
                >
                  {/* Inner Corner Accent Glow */}
                  <div
                    className={`absolute -top-10 -right-10 w-64 h-40 ${pillar.auroraBiasGlow} blur-[45px] pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 -z-0`}
                  />

                  {/* Top Specular Hairline Sheen matching the Card's Aurora Bias */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent ${pillar.sheenColor} to-transparent pointer-events-none opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Pillar Header with Normalized Top Baseline */}
                  <div className="space-y-2 relative z-10 min-h-[100px] sm:min-h-[112px] flex flex-col justify-start">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0 shadow-inner">
                        {pillar.icon}
                      </div>
                      <h3 className="font-serif-editorial text-xl sm:text-2xl text-white font-medium tracking-tight">
                        {title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pt-1">
                      {description}
                    </p>
                  </div>

                  {/* Subgroups Container with Airy Vertical Spacing */}
                  <div className="space-y-6 relative z-10 pt-1">
                    {/* Subgroup 1: Technologies & Tools */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">
                          {toolLabel}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {pillar.toolGroup.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-200 text-xs font-mono text-zinc-200 hover:text-white select-none group/badge shadow-sm"
                          >
                            {skill.icon && (
                              <span className="shrink-0 transition-transform duration-200 group-hover/badge:scale-110">
                                {skill.icon}
                              </span>
                            )}
                            <span>
                              {language === "zh" && skill.nameZh
                                ? skill.nameZh
                                : language === "id" && skill.nameId
                                ? skill.nameId
                                : skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subgroup 2: Disciplines & Architecture */}
                    <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                          {disciplineLabel}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {pillar.disciplineGroup.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.07] hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200 text-xs font-mono text-zinc-300 hover:text-white select-none group/badge"
                          >
                            {skill.icon && (
                              <span className="shrink-0 transition-transform duration-200 group-hover/badge:scale-110">
                                {skill.icon}
                              </span>
                            )}
                            <span>
                              {language === "zh" && skill.nameZh
                                ? skill.nameZh
                                : language === "id" && skill.nameId
                                ? skill.nameId
                                : skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
