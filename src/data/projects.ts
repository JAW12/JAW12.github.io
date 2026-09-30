export interface BlueprintStep {
  step: string;
  stepId: string;
  stepZh?: string;
  detail: string;
  detailId: string;
  detailZh?: string;
}

export interface DemoLink {
  label: string;
  labelId?: string;
  labelZh?: string;
  url: string;
}

export interface AudioTrackItem {
  title: string;
  genre: string;
  genreId?: string;
  genreZh?: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleId: string;
  titleZh?: string;
  tagline: string;
  taglineId: string;
  taglineZh?: string;
  year: string;
  category: "ai" | "web" | "quant" | "data" | "desktop" | "design" | "software" | "business";
  role: string;
  roleId: string;
  roleZh?: string;
  client?: string;
  clientZh?: string;
  techStack: string[];
  techStackId?: string[];
  techStackZh?: string[];
  description: string;
  descriptionId: string;
  descriptionZh?: string;
  highlights: string[];
  highlightsId: string[];
  highlightsZh?: string[];
  metrics?: { label: string; labelId: string; labelZh?: string; value: string; valueId?: string; valueZh?: string }[];
  blueprintFlow?: BlueprintStep[];
  liveUrl?: string;
  githubUrl?: string;
  demoLinks?: DemoLink[];
  images?: string[];
  audioTracks?: AudioTrackItem[];
  /** Map video filename → poster image path (WebP) for <video poster="..."> */
  videoPoster?: Record<string, string>;
}

export const flagshipProjects: ProjectItem[] = [
  {
    id: "secret-of-life",
    title: "The Secret of Life & Hermes AI Engine",
    titleId: "The Secret of Life & Hermes AI Engine",
    titleZh: "The Secret of Life & Hermes 智能编排出版引擎",
    tagline: "Automated 150+ Page Personalized Book Manuscript & Luxury Layout Publishing Pipeline via Hermes AI Orchestration",
    taglineId: "Pipeline Otomasi Naskah Buku Personal 150+ Halaman & Tata Letak Buku Mewah via Orkestrasi Hermes AI",
    taglineZh: "基于 Hermes 智能体编排的 150+ 页个性化长篇书籍手稿与精装排版全自动出版管线",
    year: "2025 – 2026",
    category: "ai",
    role: "Lead Systems Architect & Product Engineer",
    roleId: "Arsitek Sistem & Rekayasa Produk",
    roleZh: "系统首席架构师与产品工程师",
    client: "The Secret of Life (Proprietary)",
    clientZh: "The Secret of Life (自研私有系统)",
    techStack: [
      "Python Data Engine",
      "Hermes AI Orchestrator",
      "LLM Prompt Chaining",
      "Canva Typesetting",
      "Google Flow Visuals",
      "Obsidian Vault Integration",
    ],
    techStackId: [
      "Engine Data Python",
      "Orkestrator AI Hermes",
      "LLM Prompt Chaining",
      "Tata Letak Canva",
      "Visual Google Flow",
      "Integrasi Vault Obsidian",
    ],
    techStackZh: [
      "Python 数据引擎",
      "Hermes 智能体编排",
      "LLM 提示词链",
      "Canva 视觉排版",
      "Google Flow 艺术插画",
      "Obsidian 知识库集成",
    ],
    description:
      "An end-to-end automated luxury publishing and intelligence workflow transforming raw personal profile data into comprehensive 150+ page customized luxury hardcover books. Combines custom Python preprocessing engines, Hermes-orchestrated multi-pass LLM prompt chaining for deterministic chapter drafting, Canva visual typesetting templates, and Google Flow quote graphics.",
    descriptionId:
      "Alur kerja produksi buku personal dan sintesis pengetahuan end-to-end yang mengolah data profil mentah menjadi naskah komprehensif 150+ halaman dalam format buku hardcover mewah. Menggabungkan skrip Python untuk pengolahan data mentah, orkestrasi prompt AI bertingkat deterministik via Hermes untuk penulisan bab, penataan layout visual di Canva, dan grafis quote estetis berbasis Google Flow.",
    descriptionZh:
      "一套端到端全自动奢华图书出版与长文内容合成管线，将原始零散个人数据矩阵编译为 150+ 页个性化精装实体书籍。深度结合 Python 原始数据清洗引擎、Hermes 智能体编排的多阶段确定性 LLM 提示词链章节起草、Canva 视觉排版模板库以及 Google Flow 艺术金句视觉生成。",
    highlights: [
      "Built Python preprocessing scripts to clean, validate, and convert raw profile data into structured chapter parameters.",
      "Configured Hermes agent runtime to orchestrate multi-pass LLM prompt chaining for coherent, deterministic 150+ page manuscripts.",
      "Streamlined Canva visual typesetting templates and integrated Google Flow quote graphics for gold-foil luxury hardcover production.",
      "Integrated Hermes command center and Obsidian vault compilation workflows for reliable knowledge provenance tracking.",
      "Reduced end-to-end book manuscript and layout compilation time from weeks of manual writing to 1 week.",
    ],
    highlightsId: [
      "Membangun skrip Python untuk membersihkan, memvalidasi, dan menstrukturkan data mentah profil menjadi parameter bab siap olah.",
      "Mengonfigurasi runtime agen Hermes untuk mengorkestrasikan alur prompt AI bertingkat guna menghasilkan naskah buku 150+ halaman yang kohesif dan deterministik.",
      "Menyusun templat layout visual di Canva dan memadukan grafis quote Google Flow untuk buku hardcover mewah beraksen foil emas.",
      "Mengintegrasikan command center Hermes dan alur kompilasi vault Obsidian untuk pelacakan asal-usul pengetahuan yang andal.",
      "Memangkas siklus penyusunan naskah buku dari hitungan bulan pengerjaan manual menjadi hanya 1 minggu.",
    ],
    highlightsZh: [
      "构建 Python 数据预处理脚本，将原始零散个人档案清洗并结构化为章节级解析参数。",
      "配置 Hermes 智能体运行时编排多轮次 LLM 提示词链，确保 150+ 页长篇手稿逻辑严谨、章节连贯。",
      "打通 Canva 视觉排版模板与 Google Flow 艺术金句生成，交付极具奢华感的烫金精装实体书。",
      "深度集成 Hermes 指挥中枢与 Obsidian 知识库编译流，实现高可靠的知识溯源与状态锁定。",
      "将整本 150+ 页个性化定制书籍的起草与排版周期从数月人工撰写缩短至 1 周。",
    ],
    metrics: [
      { label: "Book Output Volume", labelId: "Volume Halaman", labelZh: "书籍页数产出", value: "150+ Pages", valueId: "150+ Halaman", valueZh: "150+ 页" },
      { label: "Production Turnaround", labelId: "Waktu Kompilasi", labelZh: "生产编译周期", value: "1 Week", valueId: "1 Minggu", valueZh: "1 周" },
      { label: "Physical Finish", labelId: "Finishing Fisik", labelZh: "装帧工艺标准", value: "Gold Foil Hardcover", valueId: "Hardcover Foil Emas", valueZh: "烫金精装" }
    ],
    images: [
      "/assets/projects/secret-of-life/white_desk.webp",
      "/assets/projects/secret-of-life/marble.webp",
      "/assets/projects/secret-of-life/black_innovative_1.webp",
      "/assets/projects/secret-of-life/close_up.webp",
      "/assets/projects/hermes/hermes_command_center.webp",
      "/assets/projects/hermes/hermes_system_center.webp",
      "/assets/projects/hermes/hermes_general.webp",
    ],
    blueprintFlow: [
      {
        step: "Structured Profile Ingestion",
        stepId: "Input Data Profil Mentah",
        stepZh: "原始数据清洗与注入",
        detail: "Python data cleaning, validation & chapter parameterization",
        detailId: "Skrip Python pembersihan data mentah & parameterisasi bab",
        detailZh: "Python 脚本清洗原始个人档案并映射至章节参数",
      },
      {
        step: "Hermes Multi-Pass Orchestration",
        stepId: "Orkestrasi Hermes & Prompt LLM",
        stepZh: "Hermes 多阶段 LLM 编排",
        detail: "Deterministic multi-chapter drafting & structured tone enforcement",
        detailId: "Orkestrasi penulisan naskah multi-bab & konsistensi narasi",
        detailZh: "确定性多章节长文起草与叙事风格统一约束",
      },
      {
        step: "Canva Typesetting & Visuals",
        stepId: "Tata Letak Canva & Visual",
        stepZh: "Canva 视觉排版与插画",
        detail: "Typesetting templates & Google Flow quote graphics integration",
        detailId: "Templat layout visual Canva & integrasi grafis quote Google Flow",
        detailZh: "Canva 模块化排版模板与 Google Flow 艺术金句视觉集成",
      },
      {
        step: "150+ Page Hardcover Luxury Book",
        stepId: "Buku Hardcover Mewah 150+ Hal",
        stepZh: "150+页精装实体书出版",
        detail: "Gold-foil stamped hardcover & physical luxury binding",
        detailId: "Jilid hardcover beraksen foil emas & cetak fisik eksklusif",
        detailZh: "烫金工艺精装封面与典藏级实体装订成册",
      },
    ],
    liveUrl: "https://thesecretoflife.id",
  },
  {
    id: "cocokga",
    title: "CocokGa: AI-Assisted Relationship Compatibility & Personality Synergy Platform",
    titleId: "CocokGa: Platform Kompatibilitas Hubungan & Sinergi Karakter (AI-Assisted Development)",
    titleZh: "CocokGa: 基于 AI 辅助开发的人际与性格契合度算法测算平台 (V4.0 全面演进)",
    tagline: "Deterministic In-Browser Interpersonal Compatibility Engine, AI-Assisted Engineering & Automated QRIS Monetization",
    taglineId: "Engine Kompatibilitas Hubungan Sisi Klien Sub-Detik, Pengembangan AI-Assisted & Monetisasi QRIS Otomatis",
    taglineZh: "毫秒级客户端人际契合度算法推演引擎、AI 辅助研发管线与 QRIS 自动化支付变现中台",
    year: "2025 – 2026",
    category: "software",
    role: "Sole Creator, Full-Stack Software Engineer & Algorithm Architect",
    roleId: "Kreator Tunggal, Software Engineer Full-Stack & Arsitek Algoritma",
    roleZh: "独立全栈工程师、算法架构师与商业产品操盘手",
    client: "CocokGa (Proprietary Venture)",
    clientZh: "CocokGa (自研商业化产品)",
    techStack: [
      "AI-Assisted Development",
      "Next.js / Node.js & Express",
      "TypeScript & JavaScript",
      "Prisma ORM & PostgreSQL",
      "In-Browser Compute Engine",
      "Mayar QRIS Payment Gateway",
      "Automated Webhooks",
      "Reseller PIN Auth & Campaign Engine",
      "HTML5 Canvas 2D Share Cards",
    ],
    techStackId: [
      "AI-Assisted Development",
      "Next.js / Node.js & Express",
      "TypeScript & JavaScript",
      "Prisma ORM & PostgreSQL",
      "Engine Komputasi Browser",
      "Gateway Pembayaran QRIS Mayar",
      "Webhook Otomatis",
      "Autentikasi PIN Reseller & Kampanye",
      "Kartu Share HTML5 Canvas 2D",
    ],
    techStackZh: [
      "AI 辅助研发管线",
      "Next.js / Node.js & Express",
      "TypeScript & JavaScript",
      "Prisma ORM & PostgreSQL",
      "浏览器本地计算引擎",
      "Mayar QRIS 聚合支付",
      "自动化 Webhook",
      "分销商 PIN 鉴权与推广中台",
      "HTML5 Canvas 2D 分享卡片",
    ],
    description:
      "A viral relationship compatibility and personality synergy assessment platform built via modern AI-assisted software engineering across 4 architectural generations (V1–V4). Executes deterministic proprietary compatibility and personality synergy algorithms entirely client-side in under 15ms for zero-cost serverless computation. Features automated QRIS micropayments (Rp 21.000 instant module unlock), dynamic 10+ page PDF analytical dossiers (Rp 189.000), a dual Gen-Z and Adult/Career synergy mode, and an automated reseller voucher & campaign tracking system.",
    descriptionId:
      "Platform kalkulator kecocokan hubungan dan asesmen sinergi karakter viral yang dibangun melalui alur rekayasa software modern AI-assisted development dalam 4 generasi arsitektur (V1–V4). Mengeksekusi formula deterministik berpemilik secara instan di sisi klien (< 15ms) tanpa membebani server. Dilengkapi sistem pembayaran QRIS otomatis (Rp 21.000 aktivasi modul seketika), pemesanan laporan PDF 10+ halaman komprehensif (Rp 189.000), Mode Dewasa untuk keselarasan karier/bisnis, serta sistem voucher reseller dan kampanye afiliasi.",
    descriptionZh:
      "基于现代 AI 辅助研发（AI-Assisted Development）全流程构建的高性能人际与性格契合度测算商业 Web 平台，历经 4 代架构演进（V1–V4）。系统将自研的多维人际与性格契合度确定性算法安全封装于浏览器本地沙箱，在 15 毫秒内极速解算。深度集成 Mayar QRIS 聚合支付网关微付费（单模块 Rp 21.000 即时解锁）、10+ 页 PDF 深度全景分析报告（Rp 189.000）、面向职场与商业合盘的成人模式，以及带 PIN 码鉴权的分销商 Voucher 与推广中台。",
    highlights: [
      "AI-Assisted Full-Stack Engineering: Accelerated end-to-end monolithic architecture, UI design, and schema engineering across 4 iterative generations (V1–V4).",
      "Deterministic Interpersonal Compatibility Engine: Evaluates relationship dynamics, personality synergy, and core traits with sub-15ms client-side compute.",
      "Multi-Tier Monetization Architecture: Integrated Mayar QRIS automated webhooks, voucher redemption, 10+ page PDF dossier orders, and physical merchandise tracking (Lucky Kaos).",
      "Dual Demographic Modes & Campaign System: Deployed dedicated Gen-Z relationship modules and Adult/Professional career & business synergy modes with trackable campaign URLs.",
    ],
    highlightsId: [
      "Rekayasa Full-Stack AI-Assisted: Mempercepat pengembangan arsitektur monolit, desain UI, dan pemodelan skema melalui 4 generasi iterasi produk (V1–V4).",
      "Engine Kompatibilitas Hubungan Deterministik: Mengkalkulasi dinamika relasi, sinergi karakter, dan profil kepribadian dengan komputasi sisi klien <15ms.",
      "Arsitektur Monetisasi Multi-Tingkat: Mengintegrasikan webhook otomatis QRIS Mayar, sistem voucher reseller, pemesanan dokumen PDF 10+ halaman, dan pelacakan merchandise kaos fisik (Lucky Kaos).",
      "Dual Mode Demografi & Sistem Kampanye: Menyediakan modul hubungan Gen-Z dan Mode Dewasa untuk sinergi karier & bisnis profesional dengan pelacakan URL kampanye.",
    ],
    highlightsZh: [
      "AI 辅助全栈工程落地：借助 AI 辅助开发管线全流程加速 4 代架构演进（V1–V4）、UI 交互设计与数据库模式建模。",
      "确定性人际与性格契合度引擎：在客户端 15 毫秒内毫秒级推演人际动态与性格画像，实现零服务器计算成本。",
      "多层级商业化变现中台：深度打通 Mayar QRIS 自动化 Webhook 微付费、Voucher 兑换、10+ 页 PDF 全景报告及实体周边 (Lucky Kaos) 溯源体系。",
      "双客群分析模态与推广中台：无缝支持 Gen-Z 恋爱人际测算与成人/职场商业合盘双重体系，配备参数化推广链接追踪。",
    ],
    metrics: [
      { label: "Compute Latency", labelId: "Latensi Komputasi", labelZh: "计算响应延迟", value: "< 15 ms", valueId: "< 15 ms", valueZh: "< 15 毫秒" },
      { label: "Engineering Model", labelId: "Model Rekayasa", labelZh: "研发协作范式", value: "AI-Assisted Dev", valueId: "AI-Assisted Dev", valueZh: "AI 辅助工程研发" },
      { label: "Operational Modes", labelId: "Mode Sistem", labelZh: "双模分析体系", value: "Gen-Z & Adult (11 Modules)", valueId: "Gen-Z & Dewasa (11 Modul)", valueZh: "Gen-Z 与成人双模 (11个模块)" },
      { label: "Server Cost", labelId: "Beban Server", labelZh: "单次计算成本", value: "Rp 0 / Compute", valueId: "Rp 0 / Hitung", valueZh: "0 服务器成本 / 次" }
    ],
    blueprintFlow: [
      {
        step: "Dual Mode Selection & Capture",
        stepId: "Pemilihan Mode & Form Profiling",
        stepZh: "双模态选择与多维档案录入",
        detail: "Zero-server client capture for Gen-Z Gates 1–3 or Adult Modules 11–18",
        detailId: "Pengambilan data form tanpa transmisi ke server untuk Mode Gen-Z maupun Dewasa",
        detailZh: "纯客户端即时数据采集与输入格式校验（Gen-Z Gate 1–3 / 成人模块 11–18）",
      },
      {
        step: "Client Compute & Instant Score (<15ms)",
        stepId: "Komputasi Sisi Klien (<15ms)",
        stepZh: "客户端瞬时计算 (<15ms)",
        detail: "Isolated in-browser algorithmic execution & affinity index evaluation",
        detailId: "Eksekusi formula algoritmik instan di browser & kalkulasi indeks afinitas",
        detailZh: "浏览器沙箱内完全独立的算法模型执行与多维亲和度指数解析",
      },
      {
        step: "Automated QRIS Unlock (Mayar)",
        stepId: "Aktivasi Pembayaran QRIS Instan",
        stepZh: "Mayar QRIS 自动化支付解锁",
        detail: "Instant digital module unlocking (Rp 21.000) with sub-second payment webhooks",
        detailId: "Pembukaan modul otomatis seketika via QRIS/E-wallet Mayar (Rp 21.000)",
        detailZh: "聚合支付网关单模块即时解锁 (Rp 21.000) 与亚秒级 Webhook 鉴权",
      },
      {
        step: "PDF Dossier & Viral Affiliate Engine",
        stepId: "Laporan PDF & Ekosistem Afiliasi",
        stepZh: "PDF 深度报告编译与分销中台",
        detail: "10+ page PDF dossier export (Rp 189.000) & /r/:code referral commission tracking",
        detailId: "Ekspor dokumen PDF 10+ halaman (Rp 189.000) & pelacakan komisi Duta (/r/:code)",
        detailZh: "10+页 PDF 深度全景报告编译导出 (Rp 189.000) 与分销大使推广佣金结算",
      },
    ],
    liveUrl: "https://cocokga.my.id",
    images: [
      "/assets/projects/cocokga/cocokga_bg_affinity.webp",
      "/assets/projects/cocokga/cocokga_bg_arcade.webp",
      "/assets/projects/cocokga/logo_cocokga.webp",
    ],
  },
  {
    id: "nangka-premium",
    title: "Nangka Premium | PT. Karya Buah Tropis",
    titleId: "Nangka Premium | PT. Karya Buah Tropis",
    titleZh: "PT Karya Buah Tropis – 特级菠萝蜜",
    tagline: "First-Hand B2B Vacuum Jackfruit Showcase & Cold-Chain Logistics Hub",
    taglineId: "Etalase B2B & Distribusi Rantai Dingin (-18°C) Nangka Vakum Premium",
    taglineZh: "出口级真空速冻菠萝蜜 B2B 数字化门户与 -18°C 冷链集散平台",
    year: "2024",
    category: "web",
    role: "Director & Digital Systems Architect",
    roleId: "Direktur & Arsitek Sistem Digital",
    roleZh: "董事总经理兼数字化系统架构师",
    client: "PT. Karya Buah Tropis (Nangka Premium Brand Line)",
    clientZh: "PT. Karya Buah Tropis (Nangka Premium 专属产品线)",
    techStack: [
      "B2B Web Platform",
      "Cold-Chain Logistics (-18°C)",
      "Kementan & Halal Compliance",
      "WhatsApp Wholesale Funnel",
      "Gemini AI Product Renders",
    ],
    techStackId: [
      "Platform Web B2B",
      "Logistik Rantai Dingin (-18°C)",
      "Kepatuhan Kementan & Halal",
      "Corong Grosir WhatsApp",
      "Render Produk Gemini AI",
    ],
    techStackZh: [
      "B2B 数字化门户",
      "-18°C 恒温冷链物流",
      "农业部与清真合规资质",
      "WhatsApp 批发直采漏斗",
      "Gemini AI 产品渲染",
    ],
    description:
      "Specialized commercial product line and dedicated B2B showcase operating under PT. Karya Buah Tropis, focusing on export-grade vacuum-sealed jackfruit. Backed by the parent entity's industrial infrastructure, it highlights Halal certification, Ministry of Agriculture (Kementan) licensing, -18°C cold-chain logistics, and direct WhatsApp B2B negotiation funnels.",
    descriptionId:
      "Lini produk komersial spesialis dan etalase B2B khusus di bawah naungan PT. Karya Buah Tropis, yang berfokus pada komoditas nangka kupas vakum kualitas ekspor. Didukung oleh infrastruktur rantai pasok entitas induk, platform ini menampilkan sertifikasi Halal, izin edar resmi Kementerian Pertanian, logistik rantai pendingin -18°C, serta konversi negosiasi langsung ke WhatsApp grosir.",
    descriptionZh:
      "隶属于 PT. Karya Buah Tropis 旗下的特级菠萝蜜专属产品线与 B2B 批发订购展示门户。依托母公司工业级冷链与生产体系，全面展示官方清真认证（Halal）、印尼农业部（Kementan）官方分销许可、-18°C 全程温控冷链，并打通 WhatsApp 批发谈判直达转化漏斗。",
    highlights: [
      "Architected clean, credible B2B corporate digital showcase serving hotel, restaurant, catering (Horeca), and commercial export inquiries.",
      "Integrated regulatory compliance badges: Official Halal Certification and Ministry of Agriculture (Kementan) distribution licenses.",
      "Detailed the cold-chain distribution process with Thermo King -18°C temperature stabilization across regional logistics networks.",
      "Crafted photorealistic vacuum packaging visual renders and automated direct WhatsApp procurement inquiry flows.",
    ],
    highlightsId: [
      "Membangun platform showcase digital B2B korporat yang melayani pengadaan sektor hotel, restoran, katering, dan ekspor.",
      "Menyematkan validasi legalitas resmi: Sertifikasi Halal dan izin edar Kementerian Pertanian RI.",
      "Mendokumentasikan alur logistik rantai dingin dengan stabilisasi suhu -18°C Thermo King untuk menjaga nutrisi buah.",
      "Menyusun aset visual kemasan vakum fotorealistik dan alur negosiasi pesanan grosir via WhatsApp.",
    ],
    highlightsZh: [
      "构建专业可信的 B2B 企业数字化展示平台，高效承接酒店、餐饮、连锁餐饮（Horeca）及出口采购需求。",
      "深度整合官方合规背书：展示官方 Halal 清真认证及印尼农业部合法分销许可证。",
      "规范化记录全程冷链运输物流流程，依托 Thermo King -18°C 恒温车队确保果肉品质与营养。",
      "打造高拟真度真空包装渲染视觉资产，并搭建 WhatsApp 大宗采购即时询价转化路径。",
    ],
    metrics: [
      { label: "Cold-Chain Standard", labelId: "Suhu Rantai Dingin", labelZh: "冷链温控标准", value: "-18°C Stabilized", valueId: "-18°C Stabil", valueZh: "-18°C 恒温冷链" },
      { label: "Legal Compliance", labelId: "Legalitas & Izin", labelZh: "法定资质合规", value: "Halal & Kementan Certified", valueId: "Tersertifikasi Halal & Kementan", valueZh: "Halal 清真与农业部认证" },
      { label: "Distribution Model", labelId: "Segmen Distribusi", labelZh: "分销模式定位", value: "B2B & Horeca Focus", valueId: "Fokus B2B & Horeca", valueZh: "B2B 与连锁餐饮 (Horeca)" }
    ],
    liveUrl: "https://www.nangkapremium.id",
    demoLinks: [
      { label: "B2B Product Showcase", labelId: "Showcase Produk B2B", labelZh: "B2B 订购展示门户", url: "https://www.nangkapremium.id" },
    ],
    images: [
      "/assets/projects/nangka-premium/pack_satu_1.webp",
      "/assets/projects/nangka-premium/pack_banyak_1.webp",
      "/assets/projects/nangka-premium/about.webp",
    ],
    blueprintFlow: [
      {
        step: "Partner Harvest Selection",
        stepId: "Seleksi Panen Kebun",
        stepZh: "优质果园采摘筛选",
        detail: "Direct plantation sourcing & strict ripeness QC",
        detailId: "Pengadaan langsung kebun mitra & QC kematangan ketat",
        detailZh: "直连合作种植基地，执行严格的成熟度品控",
      },
      {
        step: "Vacuum Nylon Food-Grade Seal",
        stepId: "Segel Vakum Nilon Higienis",
        stepZh: "食品级真空尼龙密封",
        detail: "Official Halal & Ministry of Agriculture certified",
        detailId: "Kemasan food-grade bersertifikat Halal & izin Kementan",
        detailZh: "获得官方清真认证与印尼农业部卫生许可",
      },
      {
        step: "-18°C Cold-Chain Logistics",
        stepId: "Rantai Dingin -18°C",
        stepZh: "-18°C 全程冷链物流",
        detail: "Thermo King active temperature fleet transit",
        detailId: "Armada Thermo King stabil -18°C menjaga kesegaran buah",
        detailZh: "Thermo King 恒温车队确保果肉新鲜不破损",
      },
      {
        step: "B2B WhatsApp Procurement",
        stepId: "Corong Pengadaan Grosir B2B",
        stepZh: "B2B 批发直采漏斗",
        detail: "Direct wholesale volume inquiry & invoice conversion",
        detailId: "Etalase digital ke konversi negosiasi grosir Horeca",
        detailZh: "数字化展示直接转化为 WhatsApp 大宗订单协议",
      },
    ],
  },
  {
    id: "catatcrypto",
    title: "CatatCrypto & Quant Research Suite",
    titleId: "CatatCrypto & Quant Research Suite",
    titleZh: "CatatCrypto 与量化资产分析套件",
    tagline: "Cryptocurrency Asset Investment Portfolio Management & Trading Journal",
    taglineId: "Sistem Manajemen Portofolio Investasi Kripto & Jurnal Trading Multi-Pasar",
    taglineZh: "加密资产投资组合动态管理与量化交易日记系统 (毕业论文获评满分 A)",
    year: "2022 – 2023",
    category: "data",
    role: "Full-Stack Developer & Quantitative Researcher (S1 Thesis)",
    roleId: "Pengembang Full-Stack & Peneliti Kuantitatif (Skripsi S1)",
    roleZh: "全栈开发者兼量化研究员 (学士毕业论文)",
    client: "iSTTS Undergraduate Thesis (Nilai A Sempurna)",
    clientZh: "iSTTS 本科毕业设计 (获评满分 A)",
    techStack: [
      "PHP",
      "Laravel Framework",
      "MySQL Relational DB",
      "JavaScript Charting",
      "Tailwind CSS",
      "Quant Analytics",
    ],
    techStackId: [
      "PHP",
      "Framework Laravel",
      "DB Relasional MySQL",
      "Grafik JavaScript",
      "Tailwind CSS",
      "Analitik Kuantitatif",
    ],
    techStackZh: [
      "PHP",
      "Laravel 框架体系",
      "MySQL 关系型数据库",
      "JavaScript 动态图表",
      "Tailwind CSS",
      "量化模型算法",
    ],
    description:
      "Comprehensive cryptocurrency portfolio management and trading journal system developed as an undergraduate thesis at iSTTS. Features multi-coin holding balance tracking, dollar-cost averaging (DCA) price tracking, floating PnL, trading risk analytics, win-rate metrics, and drawdown curve visualization.",
    descriptionId:
      "Sistem analitik portofolio dan jurnal trading multi-pasar yang dibangun sebagai Tugas Akhir S1 Sistem Informasi Bisnis di iSTTS (Meraih Nilai A Sempurna). Memadukan pelacakan saldo koin, rata-rata harga beli (DCA), laba/rugi mengambang (unrealized PnL), kalkulasi win rate, analisis risk-to-reward (RR), dan kurva drawdown.",
    descriptionZh:
      "在 iSTTS 商业信息系统专业本科毕业设计中研发的加密货币投资组合管理与交易日记系统（荣获满分 A 评定）。包含多币种持仓余额跟踪、定投加权成本核算 (DCA)、浮动盈亏 (PnL)、交易胜率统计、盈亏比 (RR) 分析与资金回撤曲线可视化。",
    highlights: [
      "Successfully defended as undergraduate thesis at iSTTS with highest marks, validating financial portfolio tracking accuracy.",
      "Engineered automated Dollar-Cost Averaging (DCA) weighted-cost calculation and real-time floating PnL valuation.",
      "Built multi-factor trading journal tracking trade entries, exits, Risk-to-Reward (RR) ratios, and trader emotional psychology tagging.",
      "Validated systematic quantitative algorithmic models and disciplined risk-adjusted trade execution parameters.",
    ],
    highlightsId: [
      "Dipertahankan sebagai skripsi S1 di iSTTS dengan nilai tertinggi, memvalidasi akurasi perhitungan portofolio finansial.",
      "Membangun kalkulasi rata-rata tertimbang harga beli (DCA) otomatis dan valuasi laba/rugi mengambang secara real-time.",
      "Menyusun jurnal trading multi-faktor untuk mencatat entri, rasio Risk-to-Reward (RR), dan pelacakan disiplin psikologi trading.",
      "Memvalidasi model trading algoritmik kuantitatif sistematis dan parameter eksekusi transaksi berbasis manajemen risiko.",
    ],
    highlightsZh: [
      "在 iSTTS 学位论文答辩中获得最高分满分 A 评定，充分验证了金融资产组合核算逻辑的高精度与可靠性。",
      "研发自动化定投 (DCA) 加权平均成本计算引擎与实时未实现浮动盈亏动态估值模型。",
      "构建多维量化交易日记系统，精确追踪交易买卖点、盈亏比 (RR) 及交易心理状态标签。",
      "主导开展多周期算法量化前瞻性测试，验证风险调整后的资产收益表现模型。",
    ],
    metrics: [
      { label: "Academic Evaluation", labelId: "Evaluasi Skripsi", labelZh: "学术答辩评级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
      { label: "Schema Normalization", labelId: "Normalisasi Basis Data", labelZh: "数据库规范化", value: "3NF Relational", valueId: "3NF Relasional", valueZh: "3NF 关系范式" },
      { label: "Analytics Scope", labelId: "Cakupan Analitik", labelZh: "核心分析维度", value: "DCA · PnL · RR", valueId: "DCA · PnL · RR", valueZh: "DCA · 盈亏 · 风险收益比" }
    ],
    images: [
      "/assets/projects/catatcrypto/catatcrypto_dashboard.webp",
      "/assets/projects/catatcrypto/catatcrypto_wallet.webp",
      "/assets/projects/catatcrypto/catatcrypto_market.webp",
      "/assets/projects/catatcrypto/catatcrypto_indicators.webp",
      "/assets/projects/catatcrypto/catatcrypto_poster.webp",
    ],
    blueprintFlow: [
      {
        step: "Multi-Exchange Trade Ingestion",
        stepId: "Pencatatan Multi-Bursa",
        stepZh: "多交易所交易对录入",
        detail: "Spot & derivatives buy/sell transaction logging",
        detailId: "Log riwayat beli/jual spot & derivatif terstandardisasi",
        detailZh: "现货与衍生品标准化买入卖出交易记录入库",
      },
      {
        step: "Weighted DCA Cost Averaging",
        stepId: "Kalkulasi DCA Tertimbang",
        stepZh: "加权 DCA 均价核算",
        detail: "Dynamic cost-basis recalculation per asset pool",
        detailId: "Perhitungan dinamis harga modal rata-rata per koin",
        detailZh: "基于各资产池的动态买入成本基准实时重算",
      },
      {
        step: "Live Floating PnL & Allocation",
        stepId: "Valuasi PnL Mengambang",
        stepZh: "实时浮动盈亏与仓位",
        detail: "Real-time portfolio valuation & risk distribution",
        detailId: "Valuasi unrealized PnL & distribusi eksposur risiko",
        detailZh: "即时资产组合估值与多维度风险敞口分布",
      },
      {
        step: "Risk, Win-Rate & Drawdown",
        stepId: "Analitik Risiko & Skripsi A",
        stepZh: "胜率与最大回撤分析",
        detail: "RR metric evaluation & quantitative drawdown curves",
        detailId: "Rasio risk-reward, win rate & kurva drawdown (Skripsi A)",
        detailZh: "盈亏比指标评估与量化资金回撤曲线模型 (论文满分A)",
      },
    ],
    githubUrl: "https://github.com/JAW12/TA_CatatCrypto",
  },
  {
    id: "nasi-goreng-janok",
    title: "Nasi Goreng Jan'Ok (26 Franchise Outlets)",
    titleId: "Waralaba Kuliner Pedas Nasi Goreng Jan'Ok (26 Cabang)",
    titleZh: "Nasi Goreng Jan'Ok (26家连锁餐饮加盟品牌与视觉全案)",
    tagline: "Spicy Fried Rice Franchise Brand Architecture, 95-Day BEP Kit, Takeaway Dielines & WordPress Portal",
    taglineId: "Arsitektur Merek Waralaba Kuliner Pedas 26 Cabang, Paket BEP 95 Hari, Dus Takeaway & Portal Web",
    taglineZh: "26家连锁餐饮加盟品牌视觉体系、95天极速回本招商手册、防油锁扣外卖包装与数字门户",
    year: "2013 – 2020",
    category: "design",
    role: "Lead Creative Brand Architect & Systems Lead",
    roleId: "Arsitek Desain Merek & Koordinator Sistem",
    roleZh: "品牌设计主架构师与连锁系统负责人",
    client: "Nasi Goreng Jan'Ok (26 Outlets Across East Java)",
    clientZh: "Nasi Goreng Jan'Ok (东爪哇26家连锁加盟实体)",
    techStack: [
      "CorelDRAW Vector Master",
      "Adobe Photoshop",
      "Industrial Food Packaging",
      "WordPress Engine",
      "Franchise Operations SOP",
      "Financial BEP Models",
    ],
    techStackId: [
      "CorelDRAW Vector Master",
      "Adobe Photoshop",
      "Kemasan Pangan Industri",
      "Engine WordPress",
      "SOP Operasional Waralaba",
      "Model Finansial BEP",
    ],
    techStackZh: [
      "CorelDRAW 矢量全案",
      "Adobe Photoshop",
      "工业食品包装工程",
      "WordPress 门户引擎",
      "连锁加盟运营 SOP",
      "财务 BEP 回本模型",
    ],
    description:
      "End-to-end brand ecosystem, industrial food packaging, and franchise expansion operations for Nasi Goreng Jan'Ok—scaling across 26 franchised outlets in East Java. Engineered greaseproof interlocking takeaway carton dielines, designed 95-day BEP investment prospectuses, authored standardized kitchen SOPs, and developed the WordPress franchise directory portal.",
    descriptionId:
      "Ekosistem merek menyeluruh, rekayasa kemasan makanan industri, dan sistem operasional kemitraan untuk waralaba kuliner Nasi Goreng Jan'Ok—sukses berekspansi hingga 26 cabang di Jawa Timur. Merancang pola pisau dus lipat takeaway anti minyak tanpa lem, menyusun prospektus investasi BEP 95 hari, merumuskan SOP dapur terstandarisasi, dan membangun portal web kemitraan WordPress.",
    descriptionZh:
      "为东爪哇拥有26家连锁加盟门店的知名餐饮品牌 Nasi Goreng Jan'Ok 操刀的全案品牌视觉体系、工业级防油包装工程与加盟连锁标准化系统。独立绘制免胶水卡扣式外卖纸盒模切刀模、编纂 95 天极速回本招商手册、制定标准化后厨操作 SOP 并搭建 WordPress 门店名录门户。",
    highlights: [
      "Engineered full visual brand ecosystem and industrial packaging for a 26-branch culinary franchise.",
      "Drafted comprehensive franchise investment prospectus featuring 95-day Break-Even Point (BEP) financial modeling.",
      "Designed glue-free interlocking greaseproof takeaway boxes with thermal steam dissipation vents.",
      "Authored central kitchen culinary SOPs ensuring taste consistency across all regional franchise branches.",
    ],
    highlightsId: [
      "Merancang ekosistem merek visual dan kemasan industri untuk waralaba kuliner 26 cabang.",
      "Menyusun prospektus investasi kemitraan lengkap dengan simulasi finansial balik modal (BEP) 95 hari.",
      "Mendesain kotak dus kemasan takeaway anti minyak tanpa lem dengan ventilasi uap panas.",
      "Menyusun SOP dapur sentral dan panduan takaran bumbu untuk menjaga konsistensi rasa di semua cabang.",
    ],
    highlightsZh: [
      "为东爪哇26家连锁餐饮门店操刀全案品牌视觉与工业级食品包装体系。",
      "编撰完整加盟招商手册与财务测算模型，量化呈现 95 天极速收回投资成本 (BEP) 路径。",
      "研发完全无需胶水粘合的食品级防油纸盒刀模，配备微型散热透气孔保持米饭干爽。",
      "制定中央厨房调味配方与后厨出餐标准化 SOP，确保全域门店口味高度一致。",
    ],
    metrics: [
      { label: "Franchise Network", labelId: "Jaringan Cabang", labelZh: "连锁门店规模", value: "26 Active Outlets", valueId: "26 Cabang Aktif", valueZh: "26 家在营门店" },
      { label: "Franchise BEP", labelId: "Proyeksi Balik Modal", labelZh: "投资回本周期", value: "95 Business Days", valueId: "95 Hari Kerja", valueZh: "95 个工作日" },
      { label: "Packaging Security", labelId: "Standar Kemasan", labelZh: "包装工艺标准", value: "100% Glue-Free Lock", valueId: "Kancing 100% Bebas Lem", valueZh: "100% 免胶卡扣结构" }
    ],
    images: [
      "/assets/projects/branding/janok-packaging.webp",
      "/assets/projects/branding/janok-brosur.webp",
      "/assets/projects/branding/janok-menu.webp",
      "/assets/projects/branding/janok-logo.webp",
    ],
    blueprintFlow: [
      {
        step: "Brand Emblem & Vector Visual Identity",
        stepId: "Identitas Visual & Maskot Vektor",
        stepZh: "品牌徽标与矢量视觉系统",
        detail: "High-contrast flame typography & wok illustration designed for street readability",
        detailId: "Tipografi api kontras tinggi & ilustrasi wajan untuk visibilitas optimal di jalan raya",
        detailZh: "高对比度烈焰字体与爆炒铁锅插画设计，强化街头招牌辨识度",
      },
      {
        step: "Glue-Free Takeaway Carton Dieline",
        stepId: "Pola Pisau Dus Lipat Tanpa Lem",
        stepZh: "免胶卡扣防油外卖纸盒刀模",
        detail: "Food-grade greaseproof carton with interlocking tabs & steam vents preserving crispness",
        detailId: "Karton food-grade tahan minyak dengan kancing mandiri & ventilasi uap penjaga tekstur",
        detailZh: "食品级防油卡纸与自锁卡扣结构，配备微孔透气阀保持炒饭干爽口感",
      },
      {
        step: "Franchise Prospectus & 95-Day BEP",
        stepId: "Prospektus Kemitraan & BEP 95 Hari",
        stepZh: "招商手册与95天BEP测算",
        detail: "Turnkey equipment pricing, ingredient cost structure & capital recovery timelines",
        detailId: "Kalkulasi paket kemitraan lengkap, struktur HPP bahan baku & simulasi balik modal",
        detailZh: "交钥匙加盟设备打包清单、原材料毛利结构与投资回报周期量化模型",
      },
      {
        step: "Central Kitchen SOP & WordPress Portal",
        stepId: "SOP Dapur Sentral & Portal Web",
        stepZh: "中央厨房SOP与数字门店名录",
        detail: "26-branch directory, online customer feedback, and GoFood/GrabFood digital menu management",
        detailId: "Direktori 26 cabang, manajemen website WordPress & sinkronisasi menu GoFood/GrabFood",
        detailZh: "26家门店名录、WordPress 官方门户运维与 GoFood/GrabFood 线上外卖平台配置",
      },
    ],
  },
];

export interface CategoryEcosystemItem {
  id: string;
  categoryName: string;
  categoryNameId: string;
  categoryNameZh: string;
  planet: string;
  featuredId: string;
  relatedProjects: {
    id: string;
    title: string;
    titleId: string;
    titleZh?: string;
    year: string;
    role: string;
    roleId: string;
    roleZh?: string;
    badge?: string;
    badgeZh?: string;
    techStack: string[];
    summary: string;
    summaryId: string;
    summaryZh?: string;
    liveUrl?: string;
    githubUrl?: string;
  }[];
}

export interface CategoryEcosystemItem {
  id: string;
  categoryName: string;
  categoryNameId: string;
  categoryNameZh: string;
  planet: string;
  featuredId: string;
  relatedProjects: {
    id: string;
    title: string;
    titleId: string;
    titleZh?: string;
    year: string;
    role: string;
    roleId: string;
    roleZh?: string;
    badge?: string;
    badgeZh?: string;
    techStack: string[];
    summary: string;
    summaryId: string;
    summaryZh?: string;
    liveUrl?: string;
    githubUrl?: string;
  }[];
}

export const categoryEcosystems: CategoryEcosystemItem[] = [
  {
    id: "ai",
    categoryName: "AI & Automation",
    categoryNameId: "AI & Otomasi Alur Kerja",
    categoryNameZh: "AI 与智能自动化",
    planet: "Uranus",
    featuredId: "secret-of-life",
    relatedProjects: [
      {
        id: "generative-ai-motion",
        title: "The Secret of Life & CocokGa Generative AI Video & Motion",
        titleId: "Produksi Konten Video AI & Motion Media Sosial (The Secret of Life & CocokGa)",
        titleZh: "The Secret of Life 与 CocokGa 生成式 AI 视频与动态视觉营销矩阵",
        year: "2025 – 2026",
        role: "AI Creative Technologist & Motion Editor",
        roleId: "Creative Technologist AI & Editor Motion",
        roleZh: "生成式 AI 创意工程师与动态视觉剪辑师",
        badge: "Creative Video AI",
        badgeZh: "AI 动态视觉",
        techStack: ["Generative AI Video", "CapCut / Premiere", "Google Flow Visuals", "Motion Typography", "Audio-Visual Pacing"],
        summary:
          "Creative 9:16 vertical video production pipelines blending generative AI visual synthesis with dynamic timeline editing and kinetic typography for high-retention social reels.",
        summaryId:
          "Pipeline produksi konten video vertikal 9:16 yang memadukan sintesis visual AI generatif dengan pengeditan dinamis dan tipografi kinetik untuk materi promosi media sosial berdaya pikat tinggi.",
        summaryZh:
          "结合生成式 AI 视觉插画合成与高留存率 9:16 动态短视频排版，打造极具转化率的社交媒体视觉营销矩阵。",
      },
      {
        id: "n8n-automation",
        title: "n8n Deterministic API & Event Pipelines",
        titleId: "Pipeline Integrasi API & Event Deterministik n8n",
        titleZh: "n8n 确定性 API 编排与事件驱动自动化工作流",
        year: "2024 – 2026",
        role: "Automation Engineer",
        roleId: "Insinyur Otomasi",
        roleZh: "自动化架构工程师",
        badge: "Workflow Automation",
        badgeZh: "工作流自动化",
        techStack: ["n8n Workflow Engine", "REST Webhooks", "JSON Schema Transformation", "Supabase RAG", "WhatsApp Bot API"],
        summary:
          "Architected resilient multi-step webhook workflows for Google Drive batch invoice processing, Supabase RAG synchronization, and WhatsApp AI assistant triggers.",
        summaryId:
          "Merancang alur kerja webhook multi-langkah n8n untuk pemrosesan batch invoice Google Drive, sinkronisasi Supabase RAG, dan asisten AI WhatsApp otomatis.",
        summaryZh:
          "基于自建 n8n 实例构建高可用事件流，实现 Google Drive 发票批量解析、Supabase 向量 RAG 同步与 WhatsApp 智能客服联动。",
      },
      {
        id: "knowledge-base-sparring",
        title: "Local Knowledge Base, Sparring & Retrieval Intelligence",
        titleId: "Knowledge Base Lokal, Sparring AI & Intelijen Retrieval",
        titleZh: "本地知识库、AI 对抗性思维对练与智能检索体系",
        year: "2024 – 2026",
        role: "Knowledge Systems Architect",
        roleId: "Arsitek Sistem Pengetahuan & Riset AI",
        roleZh: "知识库架构师与认知建模研究员",
        badge: "Second Brain",
        badgeZh: "第二大脑",
        techStack: ["Hermes AI CLI", "Cloud LLMs (Inference)", "Markdown Graph Structure", "Multi-Agent Sparring", "Obsidian Vaults"],
        summary:
          "Engineered a hybrid knowledge retrieval and dialectical reasoning framework combining local Obsidian bidirectional markdown graphs with Cloud LLM-powered multi-agent sparring.",
        summaryId:
          "Membangun sistem retrieval pengetahuan hybrid dan sparring AI dialektika terstruktur memadukan repositori Markdown Obsidian lokal dengan kemampuan penalaran Cloud LLM.",
        summaryZh:
          "构建混合式知识中枢与思维对抗对练框架，融合 Obsidian 本地双向知识图谱与云端大模型多智能体反思推演机制。",
      },
      {
        id: "satu-ayat-ai",
        title: "Satu Ayat Dari Tuhan: AI Prompt Framework, Custom Gems & Devotional Content Workflow",
        titleId: "Satu Ayat Dari Tuhan: Framework Prompt AI, Custom Gems & Workflow Konten Renungan",
        titleZh: "Satu Ayat Dari Tuhan: AI 提示词框架、Custom Gems 与灵修内容创作工作流",
        year: "2024 – 2025",
        role: "Prompt Engineer & AI Workflow Architect",
        roleId: "Prompt Engineer & Arsitek Workflow AI",
        roleZh: "提示词架构师与 AI 内容工作流设计师",
        badge: "AI Workflow & Content Framework",
        badgeZh: "AI 工作流与内容框架",
        techStack: ["Google Gemini (Custom Gems)", "Structured Prompt Framework", "Workflow Automation", "Content Creation Pipeline", "Audience Engagement Strategy"],
        summary:
          "Designed a specialized prompt engineering framework, custom Google Gemini Gems, and streamlined workflow to rapidly transform personal daily devotions into engaging, audience-ready content drafts.",
        summaryId:
          "Merancang framework rekayasa prompt khusus, Custom Gems (Gemini), dan alur kerja terstruktur untuk mempercepat perenungan harian pribadi menjadi draf konten publik yang relevan dan menyentuh audiens.",
        summaryZh:
          "设计专用提示词工程框架、Custom Gemini Gems 与高效工作流，将个人每日灵修反思快速转化为契合受众心理的高质量内容草稿。",
        liveUrl: "https://www.instagram.com/satuayatdarituhan/",
      },
      {
        id: "suno-ai-music-production",
        title: "Suno AI Multi-Genre Music Composition & Audio Production Suite",
        titleId: "Produksi Musik Multi-Genre Berbantuan Suno AI (Proyek 'Gravity')",
        titleZh: "Suno AI 多曲风音乐生成、编曲架构与全流程有声制作 ('Gravity' 愿景单曲)",
        year: "2024 – 2025",
        role: "AI Music Producer & Lyricist",
        roleId: "Produser Musik AI & Penulis Lirik",
        roleZh: "AI 音乐制作人与作词人",
        badge: "Generative Audio",
        badgeZh: "生成式音频",
        techStack: ["Suno AI v3/v4", "Prompt-Based Sound Design", "Lyric Writing", "Genre Engineering", "Audio Mastering"],
        summary:
          "Composed and produced the original single 'Gravity (Pull Me Closer)' in 5 distinct studio arrangements (Acoustic, Bruno Mars Funk, LANY Synth-Pop, Rizky Febian R&B).",
        summaryId:
          "Menggubah dan memproduksi lagu orisinal 'Gravity (Pull Me Closer)' dalam 5 aransemen studio (Akustik, Funk Bruno Mars, Synth-Pop LANY, R&B Rizky Febian).",
        summaryZh:
          "原创打造愿景单曲《Gravity (Pull Me Closer)》，涵盖原声吉他、Bruno Mars 放克、LANY 合成器流行与印尼 R&B 四大流派的高保真编曲。",
      },
      {
        id: "scraping-market-intelligence",
        title: "Automated Market Scraping & Intelligence Pipelines",
        titleId: "Pipeline Scraping & Intelijen Riset Pasar Otomatis",
        titleZh: "自动化市场数据抓取与商业情报挖掘管线",
        year: "2024 – 2025",
        role: "Data Scraping & Pipeline Engineer",
        roleId: "Insinyur Scraping Data & Pipeline",
        roleZh: "数据抓取与数据管道工程师",
        badge: "Data Intelligence",
        badgeZh: "商业数据挖掘",
        techStack: ["Python", "Playwright", "BeautifulSoup", "Anti-Bot Evasion", "Data Sanitization", "CSV / JSON Warehousing"],
        summary:
          "Engineered high-throughput scraping pipelines extracting structured datasets for Surabaya High Schools (SMA) and regional KOL/Influencer commercial databases.",
        summaryId:
          "Membangun pipeline scraping tangguh untuk mengekstraksi dataset terstruktur SMA se-Surabaya dan database analitik influencer/KOL regional.",
        summaryZh:
          "构建高吞吐量数据抓取管线，成功提取并结构化泗水高中全量档案及泗水区域商业 KOL 影响力数据库。",
      },
    ],
  },
  {
    id: "software",
    categoryName: "Software Development",
    categoryNameId: "Rekayasa Perangkat Lunak",
    categoryNameZh: "软件工程与全栈系统",
    planet: "Mars",
    featuredId: "cocokga",
    relatedProjects: [
      {
        id: "cocokga-ai-assisted",
        title: "CocokGa Architecture & Interactive Modules (V1 – V4)",
        titleId: "Arsitektur & Modul Interaktif CocokGa (V1 – V4)",
        titleZh: "CocokGa 架构与交互式测算模块 (V1 – V4 全面演进)",
        year: "2025 – 2026",
        role: "Sole Full-Stack Architect",
        roleId: "Arsitek Full-Stack Mandiri",
        roleZh: "独立全栈架构师",
        badge: "Flagship Web App",
        techStack: ["AI-Assisted Development", "Next.js / Node.js & Express", "TypeScript", "Mayar QRIS", "Client In-Browser Compute", "PDF Dossier Engine"],
        summary:
          "Engineered 4 architectural iterations of CocokGa via AI-assisted full-stack development, featuring sub-15ms client-side relationship compatibility compute, QRIS webhook monetization, dynamic PDF dossiers, and campaign reseller portals.",
        summaryId:
          "Membangun 4 generasi aplikasi CocokGa melalui alur AI-assisted development, dengan kalkulasi kecocokan hubungan di sisi klien <15ms, monetisasi webhook QRIS instan, dokumen PDF komprehensif, dan portal reseller kampanye.",
        summaryZh:
          "基于 AI 辅助全栈研发完成 CocokGa 4 代架构演进，具备客户端 15 毫秒人际契合度本地算法解算、QRIS Webhook 即时支付解锁、PDF 深度全景报告及分销推广中台。",
      },
      {
        id: "qlp-backend",
        title: "Quantum Leap Academy Learning Portal Backend API",
        titleId: "Backend API Portal Pembelajaran Quantum Leap Academy",
        year: "2023",
        role: "Lead Backend Developer",
        roleId: "Pengembang Backend Utama",
        badge: "Enterprise API",
        techStack: ["Node.js", "Express", "PostgreSQL", "JWT Authentication", "Role-Based Access Control", "Swagger"],
        summary:
          "Architected high-throughput RESTful API with granular RBAC, secure student evaluation workflows, and optimized PostgreSQL query indexing.",
        summaryId:
          "Merancang RESTful API berkinerja tinggi dengan kontrol akses multi-peran (RBAC), alur evaluasi tugas siswa aman, dan pengindeksan database PostgreSQL teroptimasi.",
      },
      {
        id: "dicoding-fullstack",
        title: "Dicoding Indonesia Certified Full-Stack Developer Specialization Suite",
        titleId: "Sertifikasi Spesialisasi Pengembang Full-Stack Dicoding Indonesia",
        year: "2023 – 2024",
        role: "Full-Stack Software Engineer (Student)",
        roleId: "Software Engineer Full-Stack",
        badge: "Professional Certification",
        techStack: ["React.js", "Node.js", "REST APIs", "Automated Testing", "CI/CD Pipelines", "Clean Architecture"],
        summary:
          "Completed comprehensive industry certification track mastering clean architecture, automated unit/integration testing, and production-grade full-stack deployments.",
        summaryId:
          "Menyelesaikan jalur sertifikasi industri komprehensif menguasai clean architecture, pengujian otomatis unit/integrasi, dan deployment full-stack siap produksi.",
      },
      {
        id: "squeecapsule-erp",
        title: "SqueeCapsule Hotel Management System & Unified Booking ERP",
        titleId: "Sistem Manajemen Hotel Kapsul & ERP Reservasi Terpadu SqueeCapsule",
        year: "2022",
        role: "Full-Stack Developer",
        roleId: "Pengembang Full-Stack",
        badge: "Hotel ERP",
        techStack: ["Laravel", "MySQL (3NF Schema)", "Dynamic Room Grid", "Bootstrap", "Automated Billing"],
        summary:
          "Engineered full-featured capsule hotel ERP automating check-ins, dynamic capsule availability grids, housekeeping dispatch, and multi-tier billing invoices.",
        summaryId:
          "Membangun sistem ERP hotel kapsul lengkap yang mengotomasi check-in/out tamu, visualisasi ketersediaan kamar dinamis, penugasan housekeeping, dan faktur penagihan.",
      },
      {
        id: "squeemarket-pos",
        title: "SqueeMarket Retail POS & Inventory Barcode Scanning System",
        titleId: "Sistem POS Ritel & Pemindaian Barcode Inventaris SqueeMarket",
        year: "2021",
        role: "Desktop Software Engineer",
        roleId: "Pengembang Software Desktop",
        badge: "Retail POS",
        techStack: ["C# (.NET WinForms)", "Barcode Scanner Integration", "SQL Server", "Thermal Receipt Printing", "Stock Alert Triggers"],
        summary:
          "Developed high-speed retail cashier application with sub-second barcode lookups, automated minimum-stock reorder alerts, and ESC/POS thermal receipt printing.",
        summaryId:
          "Mengembangkan aplikasi kasir ritel berkecepatan tinggi dengan pemindaian barcode instan, peringatan stok minimum otomatis, dan pencetakan struk termal ESC/POS.",
      },
      {
        id: "tic-tac-toe-web",
        title: "Interactive Tic-Tac-Toe with Minimax AI & Multiplayer Mode",
        titleId: "Aplikasi Web Tic-Tac-Toe Interaktif dengan AI Minimax & Mode Multiplayer",
        titleZh: "Tic-Tac-Toe 网页游戏与 Minimax 决策树算法引擎",
        year: "2022",
        role: "Frontend Engineer & Algorithm Developer",
        roleId: "Frontend Engineer & Pengembang Algoritma",
        roleZh: "前端工程师与算法开发者",
        badge: "Web Game AI",
        badgeZh: "Web 游戏 AI",
        techStack: ["HTML5", "CSS3", "JavaScript", "Minimax Algorithm", "Game Theory", "Responsive Design"],
        summary:
          "Web-based strategy game featuring an unbeatable AI opponent driven by the Minimax game theory decision tree alongside local two-player multiplayer modes.",
        summaryId:
          "Game strategi berbasis web dengan lawan AI tak terkalahkan berbasis pohon keputusan Minimax serta mode multiplayer lokal dua pemain.",
        summaryZh:
          "基于原生 JavaScript 与 Minimax 博弈论决策树算法构建的井字棋 Web 游戏，支持不可战胜 AI 对战与本地双人对弈。",
      },
      {
        id: "squeestore-ecommerce",
        title: "SqueeStore B2C Multi-Vendor E-Commerce Platform",
        titleId: "Platform E-Commerce Multi-Vendor B2C SqueeStore",
        year: "2020",
        role: "Full-Stack Web Developer",
        roleId: "Pengembang Web Full-Stack",
        badge: "E-Commerce",
        techStack: ["PHP", "Laravel", "MySQL", "Payment Gateway Mock", "Shopping Cart & Wishlist", "Admin Ledger"],
        summary:
          "Engineered end-to-end e-commerce platform featuring merchant storefronts, product catalog filters, secure checkout pipelines, and order fulfillment ledgers.",
        summaryId:
          "Membangun platform e-commerce lengkap yang mencakup etalase toko pedagang, filter katalog produk, alur checkout aman, dan pembukuan status pesanan.",
      },
      {
        id: "harvest-moon-web",
        title: "Harvest Moon Nostalgia Web Simulation & Farm Management Portal",
        titleId: "Simulasi Web Nostalgia Harvest Moon & Manajemen Perkebunan",
        year: "2020",
        role: "Web Developer & Game Designer",
        roleId: "Pengembang Web & Desainer Game",
        badge: "Web Simulation",
        techStack: ["JavaScript", "HTML5 Canvas", "PHP", "MySQL", "State Persistence", "CSS Pixel Art UI"],
        summary:
          "Interactive web-based farming simulation featuring crop growth lifecycles, weather state transitions, livestock management, and economy trading mechanics.",
        summaryId:
          "Simulasi perkebunan berbasis web interaktif yang menampilkan siklus pertumbuhan tanaman bertingkat, dinamika cuaca harian, peternakan, dan sistem ekonomi perdagangan.",
      },
      {
        id: "mini-erp-sales",
        title: "Mini ERP Sales Order Processing & Inventory Management System",
        titleId: "Sistem Pengolahan Sales Order & Manajemen Inventaris Mini ERP",
        year: "2019",
        role: "Backend & Database Engineer",
        roleId: "Insinyur Backend & Database",
        badge: "Enterprise ERP",
        techStack: ["PHP", "MySQL (Stored Procedures & Triggers)", "Bootstrap", "Export to Excel/PDF", "Audit Trail"],
        summary:
          "Engineered streamlined enterprise sales order pipeline with automated stock reservation, credit-limit checks, and database-level trigger auditing.",
        summaryId:
          "Membangun sistem pemrosesan pesanan penjualan korporat dengan reservasi stok otomatis, verifikasi limit kredit pelanggan, dan audit trail database terintegrasi.",
      },
      {
        id: "screening-sdm",
        title: "Screening SDM Indonesia: Biographical Profiling & Candidate Evaluation Software",
        titleId: "Screening SDM Indonesia: Software Profiling Biografis & Evaluasi Kandidat",
        year: "2014 – 2017",
        role: "Software Developer & Assessment Specialist",
        roleId: "Pengembang Software & Spesialis Asesmen",
        badge: "HR Tech Desktop",
        techStack: ["C# (.NET WinForms)", "Algorithmic Scoring", "HR Reporting", "Graphology", "Visual Studio"],
        summary:
          "Proprietary C# desktop software automating candidate character scoring across multiple profiling methodologies (Graphology, 4 Temperaments, Blood Types, Numerology) for executive recruitment reports.",
        summaryId:
          "Software desktop C# mandiri yang mengotomasi kalkulasi asesmen karakter kandidat (Grafologi, 4 Temperamen, Golongan Darah, Numerologi) untuk laporan rekrutmen eksekutif.",
      },
    ],
  },
  {
    id: "business",
    categoryName: "Business Development",
    categoryNameId: "Ekspansi Bisnis & Operasional",
    categoryNameZh: "商业拓展与供应链运营",
    planet: "Jupiter",
    featuredId: "nangka-premium",
    relatedProjects: [
      {
        id: "hadiarwanaw-consulting-ops",
        title: "Hadi Arwana: Experimental Family Advisory & Digital Distribution",
        titleId: "Hadi Arwana: Eksperimen Penjenamaan Digital & Distribusi Konten",
        titleZh: "Hadi Arwana: 实验性家庭顾问品牌孵化与全渠道数字内容分发系统",
        year: "2024 – 2026",
        role: "Systems Architect & Digital Operations Specialist",
        roleId: "Arsitek Sistem & Spesialis Operasional Digital",
        roleZh: "系统架构师与数字化运营专家",
        badge: "Advisory Operations",
        techStack: ["Personal Branding", "Multi-Platform Distribution", "Instagram", "TikTok", "Threads", "Facebook", "YouTube", "WhatsApp Funnel"],
        summary:
          "Experimental multi-channel personal branding and content distribution initiative created for parents (@hadiarwanaw across Instagram, TikTok, Threads, Facebook, and YouTube) with private consultation booking funnels.",
        summaryId:
          "Proyek eksperimental penjenamaan personal dan distribusi konten digital untuk orang tua (@hadiarwanaw di Instagram, TikTok, Threads, Facebook, dan YouTube) serta alur konsultasi privat.",
        summaryZh:
          "为父母量身打造的实验性个人品牌孵化与全网数字内容分发系统（全网官方账号 @hadiarwanaw 覆盖 Instagram、TikTok、Threads、Facebook 与 YouTube），并搭建私域咨询通道。",
        liveUrl: "https://www.instagram.com/hadiarwanaw/",
      },
      {
        id: "gudang-buah-beku-ops",
        title: "PT. Karya Buah Tropis (Gudang Buah Beku)",
        titleId: "PT. Karya Buah Tropis (Gudang Buah Beku)",
        titleZh: "PT. Karya Buah Tropis (Gudang Buah Beku 供应链与商业运营)",
        year: "2020 – Present",
        role: "Director — Operations & Digital Systems",
        roleId: "Direktur — Operasional & Sistem Digital",
        roleZh: "运营总监与数字化系统负责人",
        badge: "Corporate Leadership",
        techStack: ["B2B Operations", "Cold Chain (-18°C)", "90+ SKU B2B Catalog", "Stock Invoicing", "1080p Video Profile", "Vacuum Nylon (-25°C)"],
        summary:
          "Originated under the commercial trade brand Gudang Buah Beku prior to corporate legal incorporation as PT. Karya Buah Tropis. Managed stock invoicing, 90+ SKU digital catalog, cold-chain logistics (-18°C), and 1080p corporate profile.",
        summaryId:
          "Bermula sebagai brand komersial Gudang Buah Beku sebelum dilegalkan menjadi PT. Karya Buah Tropis. Mengelola faktur stok, katalog digital 90+ SKU, logistik rantai dingin (-18°C), dan video profil korporat 1080p.",
        summaryZh:
          "起源于公司正式注册前创立的 Gudang Buah Beku 商业品牌，随着企业合规化升级正式注册为 PT. Karya Buah Tropis。统筹进销存台账、90+ SKU 数字产品目录、-18°C 低温冷链物流及 1080p 官方宣传片。",
        liveUrl: "https://www.instagram.com/gudangbuahbeku/",
      },
      {
        id: "enevti-partnerships",
        title: "PT Kolaborasi Kerja Indonesia (Enevti)",
        titleId: "PT Kolaborasi Kerja Indonesia (Enevti)",
        year: "2022",
        role: "Partnerships Specialist Intern",
        roleId: "Partnerships Specialist Intern",
        badge: "Startup Partnerships",
        techStack: ["Partner Profiling", "Agile/Scrum", "Ambassador Onboarding", "Community AMA"],
        summary:
          "Conducted prospect research and creator profiling, successfully onboarding 15+ brand ambassadors within an Agile/Scrum cross-functional team.",
        summaryId:
          "Melakukan riset prospek dan profiling kreator, berhasil meng-onboard 15+ brand ambassador dalam tim kolaborasi Agile/Scrum.",
      },
      {
        id: "the-fresh-startup",
        title: "The Fresh: Farm-to-Door E-Grocery & Fruit Parcel Startup",
        titleId: "The Fresh: Startup E-Grocery Buah Segar & Parsel Langsung dari Petani",
        titleZh: "The Fresh: 产地直达生鲜电商与定制水果礼品创业平台",
        year: "2016",
        role: "Founder & Chief Executive Officer (CEO)",
        roleId: "Founder & Chief Executive Officer (CEO)",
        roleZh: "创始人兼首席执行官 (CEO)",
        badge: "Agritech / E-Grocery",
        techStack: ["Startup Strategy", "8-Screen Mobile UX", "Agritech Logistics", "Commercial Ads", "Video Production"],
        summary:
          "Visionary farm-to-door e-grocery and corporate fruit parcel venture founded at age 15–16, establishing supply chains directly from local orchards, an 8-screen mobile UX architecture, and commercial video ad campaigns on YouTube (@thefresh5198).",
        summaryId:
          "Inisiatif bisnis startup e-grocery dan parsel buah langsung dari petani lokal yang didirikan pada usia 15–16 tahun, merancang arsitektur alur UX mobile 8 layar, serta memproduksi video iklan komersial di YouTube (@thefresh5198).",
        summaryZh:
          "在高中时期（15–16岁）创立的前瞻性生鲜电商初创项目，开创从本地果园直通家庭与企业的农产品供应链，独立规划 8 屏移动端交互原型，并操刀全套商业广告宣传大片 (YouTube: @thefresh5198)。",
        liveUrl: "https://www.youtube.com/@thefresh5198",
      },
      {
        id: "law-protection-ops",
        title: "Law Protection: Legal Consultation & Document Architecture",
        titleId: "Firma Hukum Law Protection: Desain Identitas & Draf Legal",
        titleZh: "Law Protection: 法律咨询机构品牌设计与商业合同起草审核",
        year: "2012",
        role: "Legal Operations Assistant & Brand Designer",
        roleId: "Asisten Operasional Hukum & Desainer Merek",
        roleZh: "法律业务助理、品牌设计师兼合同初审员",
        badge: "Legal & Business Ops",
        techStack: ["CorelDRAW", "Legal Contract Drafting", "Proofreading", "Email Correspondence", "Administration"],
        summary:
          "Designed executive brand identity (corporate business cards with Scales of Justice symbolism), assisted in drafting and revising commercial agreements, and managed formal client email communications for father's legal firm (June 2012).",
        summaryId:
          "Merancang identitas kartu nama eksekutif (simbol timbangan keadilan), membantu penyusunan dan penelaahan draf perjanjian bisnis, serta mengelola komunikasi korespondensi email formal klien untuk firma konsultasi hukum (Juni 2012).",
        summaryZh:
          "为父亲创办的法律咨询机构提供全流程业务与品牌支持（2012年6月）：运用 CorelDRAW 设计正义之剑与天秤徽标名片、协助起草审核商业合作与合规合同，并统筹正式客户邮件往来。",
      },
    ],
  },
  {
    id: "data",
    categoryName: "Market Research & Data Analysis",
    categoryNameId: "Riset Pasar & Analisis Data",
    categoryNameZh: "市场研究与量化数据分析",
    planet: "Merkurius",
    featuredId: "catatcrypto",
    relatedProjects: [
      {
        id: "personal-notion-templates",
        title: "Universe OS: Personal Notion Life Architecture & Trading Systems",
        titleId: "Universe OS: Arsitektur Produktivitas Personal & Jurnal Trading Notion",
        titleZh: "Universe OS: Notion 个人全景生活架构系统与量化交易日志模板矩阵",
        year: "2022 – 2025",
        role: "System Architect & Workflow Optimization Specialist",
        roleId: "Arsitek Sistem & Spesialis Optimalisasi Alur Kerja",
        roleZh: "系统架构师、流程设计师与个人效能优化专家",
        badge: "Productivity OS",
        techStack: ["Notion Database Architecture", "Ikigai Framework", "Personal SWOT", "Goal Cascading", "Cashflow Tracker", "Trading Journal"],
        summary:
          "Engineered a multi-generation personal operating system across Notion (Universe V1/V2/V3) integrating self-discovery & Ikigai matrices, voice manifestations, 4-level goal cascading, daily habit routines, cashflow tracking, and an institutional crypto trading journal.",
        summaryId:
          "Merancang sistem operasi personal multi-generasi di Notion (Universe V1/V2/V3) yang mengintegrasikan matriks self-discovery & Ikigai, manifestasi audio, cascading target 4 tingkat, kebiasaan harian, pembukuan arus kas, dan jurnal trading crypto terstruktur.",
        summaryZh:
          "基于 Notion 构建多代际进化的个人全景操作系统 (Universe V1/V2/V3)，深度融合自我认知与 Ikigai 心理矩阵、有声愿景显化、四级目标分解、自律日常追踪、收支流水追踪与机构级加密量化交易日志体系。",
        liveUrl: "https://jem-angkasa.notion.site/Universe-V3-Template-19b1add6b60c80cfa828ff0237bed248",
      },
      {
        id: "algorithmic-forward-testing",
        title: "Algorithmic Strategy Forward-Testing Suite",
        titleId: "Pengujian Forward-Testing Strategi Algoritmik",
        year: "2025 – 2026",
        role: "Algorithm Developer",
        roleId: "Pengembang Algoritma",
        badge: "Zero-Capital Demo",
        techStack: ["Demo Account Forward-Testing", "Win-Rate Metrics", "Drawdown Modeling", "Risk Management"],
        summary:
          "Conducted rigorous forward-testing on demo accounts (Zero Capital Risk) to validate mathematical win-rate, max drawdown, and risk-adjusted profit factor.",
        summaryId:
          "Menjalankan forward-testing disiplin pada akun demo (Zero Capital Risk) untuk memvalidasi metrik win-rate, drawdown, dan profit factor.",
      },
      {
        id: "catatcrypto-thesis-sub",
        title: "CatatCrypto Asset Management & Journal (S1 Thesis)",
        titleId: "CatatCrypto Asset Management & Journal (Skripsi S1)",
        year: "2022 – 2023",
        role: "Full-Stack Developer & Quantitative Researcher",
        roleId: "Pengembang Full-Stack & Peneliti Kuantitatif",
        badge: "Grade A Thesis",
        techStack: ["PHP", "Laravel", "MySQL (3NF)", "JavaScript Charting", "Tailwind CSS"],
        summary:
          "Undergraduate thesis (Grade A) featuring weighted DCA cost tracking, floating PnL, win-rate metrics, risk-reward ratios, and drawdown curves.",
        summaryId:
          "Skripsi S1 iSTTS (Nilai A Sempurna) dengan kalkulasi rata-rata harga beli (DCA), unrealized PnL, win rate, dan kurva drawdown.",
        githubUrl: "https://github.com/JAW12/TA_CatatCrypto",
      },
      {
        id: "about-me-numerology",
        title: "About Me Numerology & Astrology Life Path Web Engine",
        titleId: "Aplikasi Web Pemetaan Jalur Hidup, Profesi & Numerologi 'About Me'",
        year: "2021",
        role: "Sole Creator & Full-Stack Developer",
        roleId: "Pengembang Full-Stack Mandiri & Kreator",
        badge: "Life Path Analytics",
        techStack: ["PHP", "Laravel", "MySQL", "Numerology Algorithms", "Astrology Engine"],
        summary:
          "Vending-machine style web platform calculating and generating personal life path blueprints, lucky numbers, yearly seasonal predictions, and profession suitability matrices.",
        summaryId:
          "Platform web jalur hidup gaya 'Vending Machine' yang mengkalkulasi cetak biru diri, angka hoki, prediksi tahunan musiman, dan matriks kecocokan profesi.",
      },
      {
        id: "8-profile-sukses-engine",
        title: "8 Profile Sukses: Unlocking Personal Success Profiles",
        titleId: "Aplikasi Asesmen Bakat 8 Profile Sukses (C# WinForms)",
        year: "2020",
        role: "Desktop Software Engineer",
        roleId: "Pengembang Software Desktop",
        badge: "Wealth Dynamics",
        techStack: ["C# (.NET WinForms)", "Wealth Dynamics Matrix", "Tajir Melintir Framework"],
        summary:
          "Desktop software built in C# WinForms to compute individual natural strength distributions across 8 entrepreneurial profiles, revealing 2 dominant + 2 growth profiles.",
        summaryId:
          "Software desktop C# WinForms untuk mengolah bakat alami ke dalam 8 profil sukses, mengungkap 2 profil terkuat dominan dan 2 profil pertumbuhan.",
      },
      {
        id: "garis-kehidupan-engine",
        title: "Garis Kehidupan: Life Path Numerology Engine (C# WinForms)",
        titleId: "Garis Kehidupan: Engine Numerologi & Jalur Hidup (C# WinForms)",
        titleZh: "Garis Kehidupan: 基于生命数字密码的生命轨迹测算系统 (C# WinForms)",
        year: "2017",
        role: "Sole Desktop Architect & Algorithm Developer",
        roleId: "Arsitek Software Desktop & Pengembang Algoritma Mandiri",
        roleZh: "独立桌面架构师与算法开发者",
        badge: "Power of Numbers",
        techStack: ["C# (.NET WinForms)", "Power of Numbers Methodology", "Pythagorean Numerology", "Inverted Triangle Matrix", "Algorithmic Profiling"],
        summary:
          "Pioneering C# desktop software digitizing Power of Numbers numerology into an automated inverted-triangle calculation engine, analyzing life paths, lucky numbers, health, and career alignments.",
        summaryId:
          "Software desktop C# pelopor yang mendigitalkan metodologi numerologi Power of Numbers menjadi mesin kalkulasi piramida terbalik instan untuk memetakan jalur hidup, angka hoki, kesehatan, dan karir.",
        summaryZh:
          "生命数字密码体系的先驱性 C# 桌面测算软件，将复杂的倒金字塔数字矩阵算法自动化，实现性格盲点、幸运数字、健康易感器官与职业适配的瞬时精准测算。",
      },
      {
        id: "inner-healing-profiling",
        title: "Inner Healing: Holistic Hypnotherapy Media Production & Creative Suite",
        titleId: "Inner Healing: Produksi Media Audio-Visual & Desain Terapi Holistik",
        titleZh: "Inner Healing: 身心整体疗愈视觉包装与潜意识心理疗愈媒体套件",
        year: "2014 – 2015",
        role: "Creative Media Producer & Visual Designer",
        roleId: "Produser Media Kreatif & Desainer Visual",
        roleZh: "全案创意视觉设计师、音视频后期制作人与讲义架构师",
        badge: "Psychology & Media",
        techStack: ["Adobe Photoshop", "CorelDRAW", "Brainwave Audio", "PowerPoint Slides", "DSLR Cinematography"],
        summary:
          "Sole creative media architect for holistic hypnotherapy foundation (book covers, brainwave CD/MP3 labels, workshop slides, seminar video documentation), establishing foundational insights into subconscious human profiling.",
        summaryId:
          "Arsitek media kreatif tunggal untuk yayasan hipnoterapi holistik (sampul buku, label CD/MP3 gelombang otak, slide workshop, dokumentasi seminar), menjadi fondasi awal pemahaman mendalam tentang profiling psikologi manusia.",
        summaryZh:
          "为身心整体疗愈机构操刀全套视觉工程（著作封面装帧、脑波调频 CD/MP3 封套、工作坊课件与宣讲纪实视频），奠定了对人类潜意识心理机制与行为动力学的原点认知。",
      },
    ],
  },
  {
    id: "design",
    categoryName: "Multimedia & Brand Design",
    categoryNameId: "Desain Komunikasi Visual & Merek",
    categoryNameZh: "多媒体设计与品牌视觉工程",
    planet: "Venus",
    featuredId: "nasi-goreng-janok",
    relatedProjects: [
      {
        id: "kbt-gbb-brand-ecosystem",
        title: "PT. Karya Buah Tropis (Gudang Buah Beku): Industrial Packaging, 1080p Video Profile & Omnichannel Identity",
        titleId: "PT. Karya Buah Tropis (Gudang Buah Beku): Kemasan Industri, Video Profil 1080p & Identitas Omnichannel",
        titleZh: "PT. Karya Buah Tropis (Gudang Buah Beku): 工业级冷链真空包装、1080p 官方企业宣传片与全渠道品牌生态",
        year: "2020 – 2023",
        role: "Lead Packaging Architect, Video Director & Brand Designer",
        roleId: "Arsitek Kemasan, Sutradara Video & Desainer Merek",
        roleZh: "包装工程首席架构师、宣传片总导演兼全案品牌设计师",
        badge: "Brand & Multimedia Ecosystem",
        techStack: ["CorelDRAW", "Adobe Illustrator", "Adobe Premiere Pro", "Industrial Dielines", "Vacuum Nylon (-25°C)", "1080p Full HD", "Outdoor Signage"],
        summary:
          "Unified creative engineering for PT. Karya Buah Tropis (originated as Gudang Buah Beku): food-grade multi-layer nylon vacuum packaging (-25°C), 1080p corporate video profile, cold storage signage, and 90+ SKU product stickers.",
        summaryId:
          "Rekayasa visual terpadu PT. Karya Buah Tropis (bermula sebagai Gudang Buah Beku): kemasan vakum nilon multi-layer tahan suhu beku (-25°C), video profil korporat resmi 1080p, spanduk cold storage, dan stiker label 90+ SKU.",
        summaryZh:
          "统筹 PT. Karya Buah Tropis（起源于 Gudang Buah Beku）全案视觉工程：设计耐 -25°C 低温食品级尼龙真空包装与拉链立袋、执导官方 1080p 企业宣传片、规划大型冷库门头标识及 90+ SKU 防水商品标签。",
        liveUrl: "https://youtu.be/nMpwpF5OEdM",
      },
      {
        id: "frut-tre-sub",
        title: "Frut Tre Custom Fruit Drink Business & Box Packaging",
        titleId: "Bisnis Minuman Buah Kustom Frut Tre & Kemasan Kotak",
        year: "2020",
        role: "Brand Designer & Venture Creator",
        roleId: "Desainer Merek & Penggagas Bisnis",
        badge: "Beverage Branding",
        techStack: ["Adobe Photoshop", "Canva", "Bottle Label Stickers", "Social Feeds Design"],
        summary:
          "Designed cubic fruit mascot identity, 500ml FrutCubes bottle stickers, and Instagram campaign feeds for custom fruit drinks in a box format.",
        summaryId:
          "Mendesain identitas maskot buah kubus, stiker botol FrutCubes 500ml, dan konten feed Instagram untuk bisnis kreasi minuman buah kotak.",
      },
      {
        id: "premium-juice-branding",
        title: "Premium Juice: Preservative-Free Pure Fruit Juice Bottle Branding",
        titleId: "Branding & Kemasan Botol Jus Buah Murni Tanpa Pengawet Premium Juice",
        titleZh: "Premium Juice: 鲜榨纯果汁瓶贴包装设计与外卖生态运营",
        year: "2016",
        role: "Brand Packaging Designer & Delivery Operations Lead",
        roleId: "Desainer Kemasan Merek & Koordinator Operasional Delivery",
        roleZh: "品牌包装设计师与数字化外卖运营负责人",
        badge: "F&B Packaging",
        techStack: ["CorelDRAW", "PET Bottle Label Stickers", "GoFood & GrabFood (2016)", "Excel Yield & COGS Models"],
        summary:
          "Designed moisture-resistant cylindrical PET bottle label stickers for 100% pure preservative-free fruit juices, pioneered early 2016 GoFood/GrabFood onboarding, and developed Excel fruit yield cost models.",
        summaryId:
          "Mendesain stiker label botol PET tahan embun untuk aneka jus buah murni tanpa pengawet, memelopori integrasi merchant GoFood/GrabFood di akhir 2016, dan menyusun formula spreadsheet kalkulasi rendemen buah.",
        summaryZh:
          "为 100% 纯天然无防腐剂鲜榨果汁设计耐冷凝防水瓶贴，作为泗水早期先驱入驻 GoFood/GrabFood 平台，并通过 Excel 精细化核算鲜果出汁率与每瓶 HPP 成本。",
      },
      {
        id: "highschool-projects-portfolio",
        title: "High School Projects Portfolio (Xin Zhong School)",
        titleId: "Portofolio Proyek Masa SMA (Xin Zhong School Surabaya)",
        titleZh: "高中多学科创新与设计项目集 (新中三语学校)",
        year: "2015 – 2016",
        role: "Web Developer, Graphic & Logo Designer, Video Director",
        roleId: "Pengembang Web, Desainer Grafis & Logo, Sutradara Video",
        roleZh: "前端网页开发者、平面与班徽设计师、视频导演",
        badge: "Multimedia & Web",
        techStack: ["HTML5/CSS3/JS", "Adobe Premiere Pro", "CorelDRAW", "Vector Branding"],
        summary:
          "Multi-disciplinary high school technical and creative suite encompassing Jem's first open-source native biodata website on GitHub, Class 10B farewell branding and documentary, and public health insomnia campaigns.",
        summaryId:
          "Kumpulan karya multidisiplin masa SMA meliputi website biodata personal HTML/CSS/JS open-source pertama di GitHub, branding logo & video dokumenter perpisahan kelas 10B, serta poster kampanye kesehatan insomnia.",
        summaryZh:
          "涵盖首个在 GitHub 开源的原生 HTML/CSS/JS 个人网站、10B 毕业纪念班徽与纪录片剪辑、全英文失眠健康倡议海报及品德教育短片的高中跨学科作品集。",
      },
      {
        id: "djoeragan-sego-branding",
        title: "Djoeragan Sego: Traditional Rice Wraps Branding & Food Stall Architecture",
        titleId: "Djoeragan Sego: Branding Nasi Bungkus Tradisional & Desain Gerobak Kuliner",
        titleZh: "Djoeragan Sego: 传统印尼芭蕉叶香叶饭品牌全案、吉祥物徽标与移动餐车空间设计",
        year: "2015",
        role: "Lead Brand Identity Designer & Cart Architect",
        roleId: "Desainer Utama Identitas Merek & Arsitek Gerobak",
        roleZh: "全案品牌视觉主设计师与移动餐车空间架构师",
        badge: "Culinary & Spatial Design",
        techStack: ["CorelDRAW", "Adobe Illustrator", "Food Cart Architecture", "Offset Print Dielines", "X-Banner"],
        summary:
          "End-to-end 360-degree brand identity for traditional banana leaf rice wraps: juragan mascot badge logo, 140x180cm food stall cart blueprints, full-color catering brochures, and a 4.8MB high-res standing X-roll banner.",
        summaryId:
          "Identitas merek 360 derajat terintegrasi untuk sajian nasi bungkus daun pisang: logo maskot juragan berblangkon, gambar kerja gerobak kuliner 140x180cm, brosur menu katering, serta X-roll banner promosi 4.8MB.",
        summaryZh:
          "为传统芭蕉叶香叶饭打造的 360 度全案品牌视觉体系：特色传统爪哇头巾老板吉祥物徽标、140x180cm 美食移动餐车工程施工图、全彩折页外卖菜单及 4.8MB 超清垂直 X 展架宣传大图。",
      },
      {
        id: "big-chicken-packaging",
        title: "Big Chicken: Ready-to-Eat & Ready-to-Cook Dual Packaging Architecture",
        titleId: "Big Chicken: Desain Kemasan Siap Saji & Plastik Vakum Bumbu Marinasi Beku",
        titleZh: "Big Chicken: 现炸热食外卖盒与冷冻调味生鲜双渠道食品包装工业设计",
        year: "2012 – 2013",
        role: "Lead Packaging & Dieline Designer",
        roleId: "Desainer Utama Kemasan & Pola Pisau Plong",
        roleZh: "食品包装主设计师与模切刀模工程师",
        badge: "Dual Food Packaging",
        techStack: ["CorelDRAW", "Die-Cut Box Folding", "Greaseproof Paper", "Frozen Nylon Vacuum", "Cooking Guides"],
        summary:
          "Engineered dual-channel packaging architecture for family poultry business: glue-free interlocking greaseproof takeaway boxes with hot steam vents (May 2013) and airtight nylon vacuum pouches with step-by-step cooking guides for frozen marinated meats (Dec 2012).",
        summaryId:
          "Merancang arsitektur kemasan dua jalur bisnis unggas keluarga: kotak dus lipat anti minyak tanpa lem dengan ventilasi uap (Mei 2013) serta kantong plastik vakum nilon kedap udara berpanduan masak untuk ayam bumbu marinasi beku (Desember 2012).",
        summaryZh:
          "为家族禽肉熟食与生鲜业务操刀双渠道包装体系：研发免胶水卡扣式防油透气现炸外卖纸盒（2013年5月），以及附带烹饪指南与冷冻温控标准的食品级尼龙真空包装（2012年12月）。",
      },
      {
        id: "lc-chinese-food-menu",
        title: "‘LC’ Chinese Food: Authentic Restaurant Menu & Operations Architecture",
        titleId: "‘LC’ Chinese Food: Desain Buku Menu Oriental & Sistem Operasional Restoran",
        titleZh: "‘LC’ Chinese Food: 传统正宗中餐大开本菜单视觉设计与后厨 FIFO 进销存管理系统",
        year: "2012",
        role: "Lead Menu Designer & Operations Systems Architect",
        roleId: "Desainer Utama Menu & Arsitek Sistem Operasional",
        roleZh: "餐饮菜单主设计师、宴会票据架构师兼后厨进销存开发",
        badge: "Full-Service F&B Operations",
        techStack: ["CorelDRAW (5000px+ Vector)", "Menu Engineering", "Excel FIFO Stock Control", "Catering Invoicing", "Taxonomy"],
        summary:
          "Engineered ultra high-resolution large-format restaurant menu catalogs (5000px+ vector CorelDRAW), standardized commercial catering billing invoices, and implemented FIFO kitchen perishable inventory ledgers for family Chinese restaurant (June 2012).",
        summaryId:
          "Merancang katalog menu format besar beresolusi tinggi (5000px+ CorelDRAW), menstandarisasi templat faktur/nota penagihan katering komersial, dan membangun lembar kerja manajemen stok dapur basah FIFO untuk restoran kuliner Tionghoa keluarga (Juni 2012).",
        summaryZh:
          "为家族正宗中餐酒楼量身打造全案视觉与运营管理系统（2012年6月）：运用 CorelDRAW 绘制 5000px+ 巨幅矢量分类菜谱、设计规范化宴会包桌与团餐开票单据，并构建生鲜食材先进先出 (FIFO) 进销存台账。",
      },
      {
        id: "sambelku-branding",
        title: "Sambelku: Authentic Terasi Sambal Jar Labels & Marketing Poster",
        titleId: "Sambelku: Desain Label Toples Sambal Terasi & Poster Promosi A3",
        titleZh: "Sambelku: 传统古法虾酱辣椒酱瓶贴包装与高清宣传海报",
        year: "2012",
        role: "Lead Packaging & Advertising Designer",
        roleId: "Desainer Utama Kemasan & Materi Promosi",
        roleZh: "商品包装与平面广告主设计师",
        badge: "FMCG Jar Packaging",
        techStack: ["CorelDRAW", "Jar Label Dielines", "Tamper-Evident Seals", "3508px A3 Poster", "Print Production"],
        summary:
          "Designed cylindrical glass jar labels, tamper-evident neck security seals, and a high-impact 3508px A3 commercial marketing poster for Sambelku traditional East Javanese shrimp paste chili sauce (Dec 2012).",
        summaryId:
          "Mendesain label toples kaca silindris tahan minyak, stiker segel keamanan tutup anti-rusak, dan poster promosi cetak A3 300 DPI beresolusi tinggi (3508px) untuk produk sambal terasi tradisional Jawa Timur (Desember 2012).",
        summaryZh:
          "为东爪哇传统古法虾酱辣椒酱操刀瓶装全案包装工程：设计防水防油圆柱形玻璃瓶贴纸、防伪防拆封口安全封条，以及 3508px A3 级 300 DPI 超清线下零售宣传大促海报（2012年12月）。",
      },
    ],
  },
];

export const comprehensiveCategoryProjects: Record<string, ProjectItem[]> = {
  ai: [
    flagshipProjects[0],
    {
      id: "generative-ai-motion",
      title: "The Secret of Life & CocokGa Generative AI Video & Motion",
      titleId: "Produksi Konten Video AI & Motion Media Sosial (The Secret of Life & CocokGa)",
      titleZh: "The Secret of Life 与 CocokGa 生成式 AI 视频与动态视觉营销矩阵",
      tagline: "High-Retention 9:16 Kinetic Video Ads, AI Visual Synthesis & Social Media Conversion Funnels",
      taglineId: "Video Iklan Kinetik 9:16 Retensi Tinggi, Sintesis Visual AI & Corong Konversi Media Sosial",
      taglineZh: "9:16 竖屏高留存动态视频广告、生成式 AI 视觉合成与社交媒体转化漏斗",
      year: "2025 – 2026",
      category: "ai",
      role: "AI Creative Technologist & Motion Editor",
      roleId: "Creative Technologist AI & Editor Motion",
      roleZh: "生成式 AI 创意工程师与动态视觉剪辑师",
      client: "The Secret of Life & CocokGa Marketing Operations",
      clientZh: "The Secret of Life 与 CocokGa 营销增长中枢",
      techStack: ["Generative AI Video", "CapCut Pro", "Adobe Premiere Pro", "Google Flow Visuals", "Kinetic Typography", "Audio-Visual Pacing"],
      description:
        "Engineered high-retention 9:16 vertical video production pipelines for The Secret of Life and CocokGa marketing campaigns. Blends generative AI imagery, aesthetic background pacing, dynamic auto-captions, and strategic hook editing to maximize viewer watch-time and click-through conversions.",
      descriptionId:
        "Merancang alur produksi video vertikal 9:16 berdaya pikat tinggi untuk kampanye pemasaran The Secret of Life dan CocokGa. Memadukan grafis visual AI generatif, ritme visual estetis, teks kinetik dinamis, dan struktur pembuka (hook) terukur untuk memaksimalkan retensi penonton.",
      descriptionZh:
        "为 The Secret of Life 与 CocokGa 两大品牌量身定制 9:16 竖屏高转化短视频生产管线。深度融合生成式 AI 视觉背景合成、高级审美视觉节奏把控、动态动态字幕排版以及黄金前3秒 Hook 钩子结构设计，最大化视频完播率与点击转化率。",
      highlights: [
        "Engineered repeatable short-form video production pipelines converting cold traffic into digital inquiries.",
        "Synthesized AI background visuals aligned with luxury gold-foil book and viral character test branding.",
        "Synchronized kinetic audio-visual pacing and captions achieving high hook retention rates across TikTok & Reels.",
      ],
      highlightsId: [
        "Membangun pipeline produksi video pendek terstandarisasi untuk mengubah impresi audiens menjadi konversi aktif.",
        "Memadukan visual AI generatif bernuansa mewah yang selaras dengan penjenamaan buku The Secret of Life dan CocokGa.",
        "Menyelaraskan ritme audio-visual dan subtitle kinetik dinamis guna mempertahankan retensi di TikTok & Instagram Reels.",
      ],
      highlightsZh: [
        "建立标准化短视频量产工序，成功将冷启动公域流量转化为私域咨询与订单转化。",
        "合成与烫金精装书、性格契合度测算品牌调性高度统一的生成式 AI 视觉素材。",
        "严密校准视听节奏与动态文字律动，在 TikTok 与 Instagram Reels 平台斩获极佳完播率。",
      ],
      metrics: [
        { label: "Aspect Ratio", labelId: "Format Video", labelZh: "视频画幅", value: "9:16 Vertical Reel", valueId: "9:16 Reel Vertikal", valueZh: "9:16 竖屏短视频" },
        { label: "Production Pacing", labelId: "Ritme Produksi", labelZh: "生产节拍", value: "Rapid Iteration", valueId: "Iterasi Cepat", valueZh: "极速迭代产出" },
        { label: "Visual Quality", labelId: "Kualitas Visual", labelZh: "输出画质", value: "High-Bitrate 1080p", valueId: "1080p Bitrate Tinggi", valueZh: "1080p 高码率超清" }
      ],
      images: [
        "/assets/projects/ai-video/BASKORO_ABIMANYU_EDITED.mp4",
        "/assets/projects/ai-video/Birthday Gift.mp4",
        "/assets/projects/secret-of-life/white_desk.webp",
        "/assets/projects/cocokga/cocokga_bg_affinity.webp",
      ],
      videoPoster: {
        "/assets/projects/ai-video/BASKORO_ABIMANYU_EDITED.mp4":
          "/assets/projects/ai-video/BASKORO_ABIMANYU_EDITED-poster.webp",
        "/assets/projects/ai-video/Birthday Gift.mp4":
          "/assets/projects/ai-video/Birthday Gift-poster.webp",
      },
      demoLinks: [
        { label: "TikTok @thesecretoflife.id", labelId: "TikTok @thesecretoflife.id", url: "https://www.tiktok.com/@thesecretoflife.id" },
        { label: "Instagram @thesecretoflife.id", labelId: "Instagram @thesecretoflife.id", url: "https://www.instagram.com/thesecretoflife.id" },
        { label: "TikTok @cocokga.id", labelId: "TikTok @cocokga.id", url: "https://www.tiktok.com/@cocokga.id" },
        { label: "Instagram @cocokga.id", labelId: "Instagram @cocokga.id", url: "https://www.instagram.com/cocokga.id" },
      ],
    },
    {
      id: "n8n-automation",
      title: "n8n Deterministic API & Event Pipelines",
      titleId: "Pipeline Integrasi API & Event Deterministik n8n",
      titleZh: "n8n 确定性 API 编排与事件驱动自动化工作流",
      tagline: "Autonomous Webhook Processing, Multi-Service Synchronization & Notification Relays",
      taglineId: "Pemrosesan Webhook Otomatis, Sinkronisasi Multi-Layanan & Relay Notifikasi",
      taglineZh: "自主 Webhook 数据流处理、多服务状态同步与智能通知路由中枢",
      year: "2024 – 2026",
      category: "ai",
      role: "Automation Engineer",
      roleId: "Rekayasa Otomasi",
      roleZh: "自动化架构工程师",
      client: "Autonomous Workflow Orchestration",
      clientZh: "自主业务工作流与企业自动化中心",
      techStack: ["n8n", "Webhooks", "RESTful APIs", "JSON Schema", "Supabase RAG", "WhatsApp Bot API", "Google Drive API"],
      description:
        "Architected autonomous event pipelines using self-hosted n8n instances. Configured robust error handling, webhook retry mechanics, JSON schema transformations, Google Drive batch invoice processing, Supabase vector RAG retrieval, and instant WhatsApp assistant alert relays.",
      descriptionId:
        "Membangun pipeline event otonom menggunakan instance n8n mandiri. Mengonfigurasi penanganan error yang andal, mekanisme retry webhook, transformasi skema JSON, pemrosesan batch invoice dari Google Drive, sinkronisasi RAG Supabase, dan relay notifikasi chatbot WhatsApp instan.",
      descriptionZh:
        "基于私有化部署的 n8n 实例设计并构建企业级事件流中枢。全面支持精准错误捕获、Webhook 智能重试机制、JSON Schema 数据清洗映射、Google Drive 批量发票解析注入、Supabase 向量 RAG 检索及 WhatsApp 智能助手瞬时触发路由。",
      highlights: [
        "Google Drive Invoice Automation: Built batch ingestion pipelines reading uploaded documents and populating structured records.",
        "Supabase Vector RAG: Integrated embedding ingestion nodes and conversational retrieval chains for instant context augmentation.",
        "WhatsApp Bot Assistant: Configured real-time webhook listeners with conditional branching and automated customer response relays.",
      ],
      highlightsId: [
        "Otomasi Invoice Google Drive: Membangun pipeline ekstraksi batch yang membaca dokumen faktur dan mengisi data terstruktur.",
        "Supabase Vector RAG: Mengintegrasikan node penyisipan embedding dan rantai retrieval percakapan untuk augmentasi konteks instan.",
        "Asisten Bot WhatsApp: Mengonfigurasi listener webhook real-time dengan percabangan kondisional dan respon otomatis cerdas.",
      ],
      highlightsZh: [
        "Google Drive 发票自动化处理：构建批量文件监听管线，自动解析云端发票并写入结构化业务数据库。",
        "Supabase 向量 RAG 检索：编排向量嵌入生成节点与多轮检索链，实现秒级上下文增强问答。",
        "WhatsApp 智能机器人：配置实时 Webhook 监听器与多条件路由分支，实现全自动客户即时响应。",
      ],
      metrics: [
        { label: "Execution Reliability", labelId: "Keandalan Eksekusi", labelZh: "执行可靠性", value: "99.9% Automated", valueId: "99.9% Otomatis", valueZh: "99.9% 自动化率" },
        { label: "Manual Effort Saved", labelId: "Efisiensi Waktu", labelZh: "工时节约", value: "10+ Hours/Week", valueId: "10+ Jam/Minggu", valueZh: "10+ 小时/周" },
        { label: "Trigger Response", labelId: "Respon Pemicu", labelZh: "触发时延", value: "< 200ms Direct", valueId: "< 200ms Instan", valueZh: "< 200ms 极速响应" }
      ],
      blueprintFlow: [
        {
          step: "Webhook Ingestion & Validation",
          stepId: "Penerimaan & Validasi Webhook",
          stepZh: "Webhook 接收与校验",
          detail: "Capture payload triggers from forms, Google Drive and chat platforms",
          detailId: "Menangkap pemicu payload dari form, Google Drive dan pesan chat",
          detailZh: "实时捕获来自表单、Google Drive 及即时通讯软件的 Payload 触发器",
        },
        {
          step: "JSON Schema Transformation & RAG",
          stepId: "Transformasi JSON & Sinkronisasi RAG",
          stepZh: "JSON Schema 转换与 RAG 检索",
          detail: "Sanitize, re-map data types and query Supabase vector embeddings",
          detailId: "Sanitasi, pemetaan ulang tipe data dan kueri embedding vektor Supabase",
          detailZh: "清洗并重构数据格式，并发查询 Supabase 知识库向量数据库",
        },
        {
          step: "Multi-Service Dispatch",
          stepId: "Pengiriman Multi-Layanan",
          stepZh: "多端服务调度与分发",
          detail: "Synchronize relational databases & send WhatsApp/Telegram alerts",
          detailId: "Sinkronisasi database relasional & pengiriman notifikasi WhatsApp/Telegram",
          detailZh: "同步更新业务数据库，并向 WhatsApp/Telegram 即时推送通知",
        },
      ],
      images: [
        "/assets/projects/ai-automation/invoice-batch.webp",
        "/assets/projects/ai-automation/rag.webp",
        "/assets/projects/ai-automation/whatsapp-chatbot.webp",
      ],
    },
    {
      id: "knowledge-base-sparring",
      title: "Local Knowledge Base, Sparring & Retrieval Intelligence",
      titleId: "Knowledge Base Lokal, Sparring AI & Intelijen Retrieval",
      titleZh: "本地知识库、AI 对抗性思维对练与智能检索体系",
      tagline: "Adversarial AI Dialectics, Multi-Perspective Reflection & Structured Markdown Knowledge Vaults",
      taglineId: "Dialektika AI Adversarial, Refleksi Multi-Sudut Pandang & Repositori Pengetahuan Markdown",
      taglineZh: "对抗性 AI 辩证思考、多维视角深度反思与 Obsidian 结构化 Markdown 知识库图谱",
      year: "2024 – 2026",
      category: "ai",
      role: "Knowledge Systems Architect",
      roleId: "Arsitek Sistem Pengetahuan & Riset AI",
      roleZh: "知识库架构师与认知建模研究员",
      client: "Personal Research & Cognitive Modeling Architecture",
      clientZh: "个人前沿认知建模与第二大脑知识中枢",
      techStack: ["Hermes AI CLI", "Cloud LLMs (Inference)", "Markdown Graph Structure", "Multi-Agent Sparring", "Obsidian Core", "Deterministic File Vaults"],
      description:
        "Engineered a hybrid knowledge retrieval and dialectical reasoning framework designed to sharpen complex ideas through structured adversarial AI debate. Organizes research into local interlinked markdown graph nodes in Obsidian vaults, while orchestrating multi-perspective sparring and reasoning via Cloud LLM models to stress-test hypotheses.",
      descriptionId:
        "Membangun kerangka kerja retrieval pengetahuan hybrid dan penalaran dialektika AI untuk menguji dan mematangkan ide-ide kompleks melalui simulasi debat terstruktur. Mengorganisasi riset dalam node Markdown lokal di vault Obsidian, serta mengorkestrasi sparring multi-sudut pandang berbasis Cloud LLM untuk memvalidasi hipotesis.",
      descriptionZh:
        "构建混合式知识中枢与辩证思维对练框架。在本地 Obsidian 知识库中组织结构化 Markdown 双向图谱，并通过云端大模型驱动多智能体对抗性辩论与思维对练，在系统执行前实现严苛的反脆弱推演与假设验证。",
      highlights: [
        "Structured bi-directional markdown knowledge networks in Obsidian enabling fluid cross-domain knowledge synthesis.",
        "Configured adversarial multi-agent sparring roles powered by Cloud LLMs to stress-test business strategies and technical architectures.",
        "Hybrid Architecture: Combined local filesystem markdown vault storage with high-capacity Cloud LLM reasoning pipelines.",
      ],
      highlightsId: [
        "Menyusun jaringan pengetahuan Markdown dua arah di Obsidian untuk sintesis wawasan lintas disiplin yang terhubung erat.",
        "Mengonfigurasi peran sparring multi-agen berbasis Cloud LLM untuk menguji ketahanan strategi bisnis dan arsitektur teknis.",
        "Arsitektur Hybrid: Memadukan penyimpanan vault sistem berkas Markdown lokal dengan pipeline penalaran Cloud LLM berkapasitas tinggi.",
      ],
      highlightsZh: [
        "在 Obsidian 中构建双向链接 Markdown 知识网络，实现跨领域高密度的知识碰撞与融合。",
        "配置由云端大模型驱动的多角色对抗性 AI 陪练模式，压力测试商业策略与技术架构的抗脆弱性。",
        "混合架构设计：将本地文件系统 Markdown 存储与云端大模型高阶推理管线高效整合。",
      ],
      metrics: [
        { label: "Architecture", labelId: "Arsitektur", labelZh: "系统架构", value: "Local Vault + Cloud LLM", valueId: "Vault Lokal + Cloud LLM", valueZh: "本地 Vault + 云端大模型" },
        { label: "Sparring Modes", labelId: "Mode Debat", labelZh: "思维对练模式", value: "Adversarial & Synthesis", valueId: "Adversarial & Sintesis", valueZh: "对抗性辩论与综合归纳" },
        { label: "Vault Structure", labelId: "Struktur Vault", labelZh: "知识库图谱", value: "Bi-Directional Graph", valueId: "Grafik Dua Arah", valueZh: "双向网状知识图谱" }
      ],
      images: [
        "/assets/projects/ai-automation/ai-sparring.webp",
        "/assets/projects/ai-automation/obsidian-graph.webp",
        "/assets/projects/ai-automation/obsidian-note.webp",
      ],
    },
    {
      id: "satu-ayat-ai",
      title: "Satu Ayat Dari Tuhan: AI Prompt Framework, Custom Gems & Devotional Content Workflow",
      titleId: "Satu Ayat Dari Tuhan: Framework Prompt AI, Custom Gems & Workflow Konten Renungan",
      titleZh: "Satu Ayat Dari Tuhan: AI 提示词框架、Custom Gems 与灵修内容创作工作流",
      tagline: "Custom Gemini Gems, Structured Prompt Chaining & Automated Devotional Content Pipeline",
      taglineId: "Custom Gems (Gemini), Alur Prompt Terstruktur & Pipeline Otomasi Konten Renungan Harian",
      taglineZh: "Custom Gemini Gems、结构化提示词链与自动化灵修内容生成管线",
      year: "2024 – 2025",
      category: "ai",
      role: "Prompt Engineer & AI Workflow Architect",
      roleId: "Prompt Engineer & Arsitek Workflow AI",
      roleZh: "提示词架构师与 AI 内容工作流设计师",
      client: "Satu Ayat Dari Tuhan (Personal Devotional Content Project)",
      clientZh: "Satu Ayat Dari Tuhan (个人灵修与内容创作实验项目)",
      techStack: ["Google Gemini (Custom Gems)", "Structured Prompt Engineering", "Few-Shot Prompt Chaining", "Content Pipeline Automation", "Editorial Curation", "Audience Engagement Strategy"],
      description:
        "Architected an end-to-end AI prompt framework and custom Google Gemini Gems workflow tailored to spiritual reflections. Converts raw daily devotional notes into polished, empathetic, and audience-resonant content drafts at scale, reducing drafting turnaround while preserving theological depth and personal tone.",
      descriptionId:
        "Membangun framework rekayasa prompt AI menyeluruh dan workflow Custom Gems (Gemini) khusus untuk konten perenungan rohani. Mengubah catatan renungan harian pribadi menjadi draf konten yang matang, empatik, dan mudah diterima audiens secara cepat, memangkas waktu penulisan tanpa mengurangi kedalaman pesan dan orisinalitas.",
      descriptionZh:
        "构建全流程 AI 提示词框架与专用 Custom Gemini Gems 工作流。将每日个人灵修笔记高效转化为文字精炼、富有共情力且极易被受众接纳的内容草稿，在大幅缩短创作周期的同时严密保留神学沉淀与个人真诚笔触。",
      highlights: [
        "Custom Gemini Gems Architecture: Engineered specialized AI Gems with strict persona calibration, spiritual tone guidelines, and audience engagement parameters.",
        "Multi-Stage Prompt Framework: Designed structured prompt chaining to extract core theological messages, craft relatable hooks, and structure carousel-ready copy.",
        "Accelerated Drafting Workflow: Streamlined the daily creation cycle from raw contemplation to finalized publishing drafts with consistent emotional resonance.",
      ],
      highlightsId: [
        "Arsitektur Custom Gemini Gems: Merancang Gems AI terdedikasi dengan kalibrasi persona, panduan gaya bahasa rohani, dan parameter keterlibatan audiens yang terarah.",
        "Framework Prompt Bertingkat: Menyusun alur prompt chaining terstruktur untuk mengekstrak pesan inti, merancang hook yang relevan, dan menyusun draf konten carousel yang siap pakai.",
        "Workflow Penulisan Cepat: Mempercepat siklus produksi harian dari renungan mentah menjadi draf publikasi siap rilis dengan resonansi emosional yang konsisten.",
      ],
      highlightsZh: [
        "定制 Gemini Gems 架构：配置专用 AI Gems 预设，精准校准人设语气、灵修文风规范与受众共鸣参数。",
        "多阶段提示词框架：设计结构化提示词链，从灵修灵感中提炼核心要点、打造吸睛前言并生成图文轮播草稿。",
        "高效内容产出工作流：极大加速从日常默想笔记到多平台分发草稿的创作周期，确保内容的一致共鸣与深度。",
      ],
      metrics: [
        { label: "Workflow Efficiency", labelId: "Efisiensi Workflow", labelZh: "创作效率提升", value: "3x Faster Drafting", valueId: "3x Draf Lebih Cepat", valueZh: "草稿产出提速 3 倍" },
        { label: "Framework Type", labelId: "Tipe Framework", labelZh: "框架形态", value: "Prompt & Custom Gems", valueId: "Prompt & Custom Gems", valueZh: "提示词与 Custom Gems" },
        { label: "Content Output", labelId: "Output Konten", labelZh: "内容输出形式", value: "Daily Devotional Drafts", valueId: "Draf Renungan Harian", valueZh: "每日灵修图文草稿" }
      ],
      images: [
        "/assets/projects/ai-automation/satu-ayat/1.webp",
        "/assets/projects/ai-automation/satu-ayat/2.webp",
        "/assets/projects/ai-automation/satu-ayat/3.webp",
        "/assets/projects/ai-automation/satu-ayat/4.webp",
        "/assets/projects/ai-automation/satu-ayat/5.webp",
        "/assets/projects/ai-automation/satu-ayat/6.webp",
        "/assets/projects/ai-automation/satu-ayat/7.webp",
        "/assets/projects/ai-automation/satu-ayat/8.webp",
        "/assets/projects/ai-automation/satu-ayat/9.webp",
        "/assets/projects/ai-automation/satu-ayat/10.webp",
      ],
      liveUrl: "https://www.instagram.com/satuayatdarituhan/",
      demoLinks: [
        {
          label: "Instagram @satuayatdarituhan",
          labelId: "Instagram @satuayatdarituhan",
          labelZh: "Instagram @satuayatdarituhan",
          url: "https://www.instagram.com/satuayatdarituhan/",
        },
      ],
    },
    {
      id: "suno-ai-music-production",
      title: "Suno AI Multi-Genre Music Composition & Audio Production Suite",
      titleId: "Produksi Musik Multi-Genre Berbantuan Suno AI (Proyek 'Gravity')",
      titleZh: "Suno AI 多曲风音乐生成、编曲架构与全流程有声制作 ('Gravity' 愿景单曲)",
      tagline: "Original Track 'Gravity (Pull Me Closer)': 5 Genre Arrangements (Acoustic, Funk-Pop, Synth-Pop, R&B) & Custom Lyric Architecture",
      taglineId: "Lagu Orisinal 'Gravity (Pull Me Closer)': 5 Aransemen Genre (Akustik, Funk-Pop, Synth-Pop, R&B) & Arsitektur Lirik Mandiri",
      taglineZh: "原创愿景单曲《Gravity (Pull Me Closer)》：5大主流曲风编曲（原声民谣、放克流行、合成器流行、印尼R&B）与定制歌词体系",
      year: "2024 – 2025",
      category: "ai",
      role: "AI Music Producer & Lyricist",
      roleId: "Produser Musik AI & Penulis Lirik",
      roleZh: "AI 音乐制作人、作词人与声音设计师",
      client: "Personal Creative Music Project",
      clientZh: "个人音乐创作与前沿生成式音频实验项目",
      techStack: ["Suno AI v3/v4", "Prompt-Based Sound Design", "Lyric Writing", "Genre Engineering", "Audio Mastering", "Vocal Timbre Shaping"],
      description:
        "An end-to-end generative AI music composition and audio production initiative crafting the original song 'Gravity (Pull Me Closer)'. Engineered 5 distinct studio-quality musical arrangements across Acoustic Guitar Ballad, Bruno Mars-inspired Funk-Pop, LANY-inspired Indie Synth-Pop, and Rizky Febian-inspired Indonesian R&B. Formulated custom verse-chorus-bridge lyrical architecture, metrical rhythm matching, and prompt-engineered acoustic harmonics.",
      descriptionId:
        "Inisiatif komposisi musik dan produksi audio berbasis AI generatif yang menggubah lagu orisinal 'Gravity (Pull Me Closer)'. Merancang 5 aransemen musik berkualitas studio yang mencakup Akustik Gitar, Funk-Pop gaya Bruno Mars, Synth-Pop Indie gaya LANY, dan R&B Indonesia gaya Rizky Febian. Menyusun struktur lirik orisinal verse-chorus-bridge, penyesuaian ketukan metrum, dan rekayasa harmoni akustik.",
      descriptionZh:
        "基于前沿生成式 AI 音乐大模型的全流程作词、编曲与音频母带级有声制作项目，成功打造原创主题单曲《Gravity (Pull Me Closer)》。深度研发并输出了5种不同风格的高保真录音室编曲版本：涵盖木吉他原声民谣版、Bruno Mars 律动放克流行版、LANY 梦幻合成器独立流行版以及 Rizky Febian 风格的印尼抒情 R&B 版。独创严密的 Verse-Chorus-Bridge 歌词韵律节奏架构与精细化提示词音频调优模型。",
      highlights: [
        "5 Studio-Quality Genre Iterations: Produced Acoustic, Funk-Pop, Synth-Pop, and R&B versions from a single unified lyrical core.",
        "Custom Lyrical Architecture: Crafted emotionally resonant English lyrics with rigorous syllable cadence and rhyming meter.",
        "Audio Prompt Engineering: Structured sonic prompt tags for vocal timbre, reverb depth, instrumentation stems, and dynamic arrangement buildup.",
        "Mastered Audio Artifacts: Generated complete studio MP3 audio files with high acoustic fidelity and dynamic range.",
      ],
      highlightsId: [
        "5 Iterasi Genre Kualitas Studio: Memproduksi versi Akustik, Funk-Pop, Synth-Pop, dan R&B dari satu inti lirik yang padu.",
        "Arsitektur Lirik Orisinal: Menyusun lirik bahasa Inggris yang menyentuh dengan rima dan ritme metrum yang presisi.",
        "Rekayasa Prompt Audio: Mengatur tag prompt suara untuk warna vokal, kedalaman reverb, instrumen musik, dan klimaks aransemen.",
        "Artefak Audio Ter-Master: Menghasilkan file audio MP3 master dengan fidelitas akustik jernih dan jangkauan dinamis.",
      ],
      highlightsZh: [
        "5大高保真录音室曲风演绎：基于统一原创歌词母本，成功生成原声吉他、放克律动、合成器流行与抒情 R&B 四大流派的完整编曲。",
        "原创诗意歌词架构：精心编写富有情感张力与哲学意境的英文歌词，严密把控音节节奏与押韵格律。",
        "精细化音频提示工程：精准把控人声音色、混响深度、乐器配器分轨与情绪递进高潮起伏的 Prompt 标签工程体系。",
        "高品质有声母带交付：生成并归档具备卓越动态范围与丰富声场细节的高清完整单曲录音室音频母带。",
      ],
      metrics: [
        { label: "Musical Arrangements", labelId: "Aransemen Musik", labelZh: "编曲版本总量", value: "5 Studio Iterations", valueId: "5 Iterasi Studio", valueZh: "5 版母带级编曲" },
        { label: "Genre Diversity", labelId: "Ragam Genre", labelZh: "曲风跨度", value: "Acoustic, Pop & R&B", valueId: "Akustik, Pop & R&B", valueZh: "原声、流行与 R&B" },
        { label: "Production Stack", labelId: "Stack Produksi", labelZh: "音频生成引擎", value: "Suno AI v3/v4 & DAW", valueId: "Suno AI v3/v4 & DAW", valueZh: "Suno AI v3/v4 与 DAW 混音" }
      ],
      audioTracks: [
        {
          title: "Gravity (Pull Me Closer) — Acoustic Guitar Ballad",
          genre: "Acoustic Ballad",
          genreId: "Akustik Gitar",
          genreZh: "原声民谣",
          url: "/assets/audio/suno/gravity-acoustic.mp3",
        },
        {
          title: "Gravity (Pull Me Closer) — Acoustic V2 Extended",
          genre: "Acoustic Ballad (V2)",
          genreId: "Akustik Gitar V2",
          genreZh: "原声民谣进阶版",
          url: "/assets/audio/suno/gravity-acoustic-v2.mp3",
        },
        {
          title: "Gravity (Pull Me Closer) — Funk-Pop (Bruno Mars Style)",
          genre: "Funk-Pop Groove",
          genreId: "Funk-Pop Bruno Mars",
          genreZh: "放克律动流行",
          url: "/assets/audio/suno/gravity-bruno.mp3",
        },
        {
          title: "Gravity (Pull Me Closer) — Synth-Pop (LANY Style)",
          genre: "Indie Synth-Pop",
          genreId: "Indie Synth-Pop LANY",
          genreZh: "梦幻合成器流行",
          url: "/assets/audio/suno/gravity-lany.mp3",
        },
        {
          title: "Gravity (Pull Me Closer) — R&B (Rizky Febian Style)",
          genre: "Indonesian R&B Soul",
          genreId: "R&B Indonesia",
          genreZh: "印尼抒情 R&B",
          url: "/assets/audio/suno/gravity-rizky-febian.mp3",
        },
      ],
      images: [
        "/assets/projects/ai-automation/whatsapp-chatbot.webp",
      ],
    },
    {
      id: "scraping-market-intelligence",
      title: "Automated Market Scraping & Intelligence Pipelines",
      titleId: "Pipeline Scraping & Intelijen Riset Pasar Otomatis",
      titleZh: "自动化市场数据抓取与商业情报挖掘管线",
      tagline: "Headless Browser Automation, Anti-Bot Evasion, Structured Data Extraction & Market Warehousing",
      taglineId: "Otomasi Headless Browser, Bypass Anti-Bot, Ekstraksi Data Terstruktur & Analitik Pasar",
      taglineZh: "无头浏览器自动化、防爬虫检测规避、结构化商业数据挖掘与数据仓库构建",
      year: "2024 – 2025",
      category: "ai",
      role: "Data Scraping & Pipeline Engineer",
      roleId: "Insinyur Scraping Data & Pipeline",
      roleZh: "数据抓取与数据管道工程师",
      client: "Market Intelligence & Quantitative Data Exploration",
      clientZh: "区域市场量化分析与商业智能研究",
      techStack: ["Python", "Playwright", "BeautifulSoup", "Anti-Bot Evasion", "Data Sanitization", "CSV / JSON Warehousing"],
      description:
        "Built robust headless web scraping pipelines designed to gather, sanitize, and structure high-volume commercial intelligence from dynamic web platforms. Engineered dedicated scrapers for Surabaya High School (SMA) institutional datasets and regional Surabaya KOL / Influencer marketing metrics.",
      descriptionId:
        "Mengembangkan pipeline web scraping otomatis untuk mengumpulkan, membersihkan, dan menstrukturkan data intelijen pasar dari platform web dinamis. Membangun scraper khusus untuk dataset SMA se-Surabaya dan analitik database Key Opinion Leader (KOL) regional Surabaya.",
      descriptionZh:
        "构建高可用无头浏览器数据抓取管线，专为从复杂动态 Web 平台中采集、清洗并归档海量商业情报而设计。成功开发针对泗水全量高中（SMA）教育资源数据库及泗水本地商业 KOL / 社交媒体网红影响力指标的定向抓取系统。",
      highlights: [
        "Surabaya High Schools (SMA) Extraction: Automated scraping of comprehensive educational institution datasets across Surabaya.",
        "Surabaya KOL & Influencer Intelligence: Structured scraping and classification of regional Key Opinion Leaders and social metrics.",
        "Anti-Bot Evasion & Sanitization: Engineered robust proxy rotation and HTML sanitization pipelines delivering 99.9% clean datasets.",
      ],
      highlightsId: [
        "Ekstraksi Dataset SMA Surabaya: Mengotomasi scraping data komprehensif institusi pendidikan menengah atas di seluruh Surabaya.",
        "Database Intelijen KOL & Influencer Surabaya: Mengumpulkan dan mengklasifikasikan profil Key Opinion Leader dan metrik media sosial regional.",
        "Bypass Anti-Bot & Sanitasi Data: Membangun pipeline rotasi proxy tangguh dan pembersihan dokumen HTML menjadi format data relasional terverifikasi 99.9%.",
      ],
      highlightsZh: [
        "泗水全量高中 (SMA) 档案采集：自动化抓取并结构化覆盖泗水市全部高级中学的综合教育资源数据集。",
        "泗水本地 KOL / 网红商业数据库：深度挖掘并多维分类泗水区域关键意见领袖及社交媒体量化互动指标。",
        "反爬虫对抗与数据清洗：构建动态代理轮换与原始 HTML 净化管道，实现 99.9% 标准化结构化入库。",
      ],
      metrics: [
        { label: "Extraction Speed", labelId: "Kecepatan Ekstraksi", labelZh: "抓取速率", value: "High-Throughput Concurrent", valueId: "Throughput Tinggi Konkuren", valueZh: "高并发高吞吐" },
        { label: "Data Accuracy", labelId: "Akurasi Data", labelZh: "数据精准度", value: "99.9% Normalized", valueId: "99.9% Ternormalisasi", valueZh: "99.9% 结构化精准度" },
        { label: "Bypass Rate", labelId: "Keberhasilan Bypass", labelZh: "防爬突破率", value: "> 98% Anti-Bot Pass", valueId: "> 98% Lolos Anti-Bot", valueZh: "> 98% 防爬穿透率" }
      ],
      images: [
        "/assets/projects/scraping/sma-surabaya.webp",
        "/assets/projects/scraping/kol-surabaya.webp",
      ],
    },
  ],
  software: [
    flagshipProjects[1],
    {
      id: "tic-tac-toe-web",
      title: "Interactive Tic-Tac-Toe with Minimax AI & Multiplayer Mode",
      titleId: "Aplikasi Web Tic-Tac-Toe Interaktif dengan AI Minimax & Mode Multiplayer",
      tagline: "Unbeatable Minimax Decision Tree Algorithm, Zero-Latency UI & Dynamic Win-State Detection",
      taglineId: "Algoritma Pohon Keputusan Minimax Tak Terkalahkan, UI Cepat & Deteksi Kemenangan Instan",
      year: "2022",
      category: "software",
      role: "Frontend Engineer & Algorithm Developer",
      roleId: "Frontend Engineer & Pengembang Algoritma",
      client: "Algorithmic Showcase & Interactive Gaming",
      techStack: ["HTML5", "CSS3", "JavaScript", "Minimax Algorithm", "Game Theory", "Responsive Design"],
      description:
        "A web-based strategy game featuring an unbeatable AI opponent driven by the classic Minimax game theory decision tree alongside local two-player multiplayer modes.",
      descriptionId:
        "Game strategi berbasis web yang menampilkan lawan AI yang tidak dapat dikalahkan berkat penerapan algoritma pohon keputusan Minimax, serta mode multiplayer lokal dua pemain.",
      highlights: [
        "Implemented recursive Minimax decision trees calculating optimal counter-moves across all game permutations.",
        "Designed clean, responsive neon grid aesthetic with instant turn transition feedback.",
        "Engineered sub-millisecond board evaluation algorithms detecting terminal win/draw states instantly."
      ],
      highlightsId: [
        "Mengimplementasikan pohon keputusan Minimax rekursif untuk menghitung langkah optimal di semua cabang permutasi.",
        "Mendesain tampilan grid neon responsif yang memberikan umpan balik visual instan saat giliran berjalan.",
        "Membangun algoritma evaluasi papan instan untuk mendeteksi kondisi menang, kalah, atau seri seketika."
      ],
      metrics: [
        { label: "AI Loss Rate", labelId: "Tingkat Kekalahan AI", labelZh: "AI 负率", value: "0% (Unbeatable)", valueId: "0% (Tak Terkalahkan)", valueZh: "0% (绝对不败)" },
        { label: "Compute Speed", labelId: "Kecepatan Hitung", labelZh: "计算响应速度", value: "< 1 ms Instant", valueId: "< 1 ms Instan", valueZh: "< 1 毫秒瞬时响应" },
        { label: "Permutation Depth", labelId: "Kedalaman Cabang", labelZh: "博弈搜索深度", value: "9-Grid Minimax Exhaustive", valueId: "Minimax 9-Grid Lengkap", valueZh: "九宫格 Minimax 全状态遍历" }
      ],
      images: [
        "/assets/projects/software/Untitled 41.webp"
      ],
      githubUrl: "https://github.com/JAW12/HTML-CSS-JS-Website-Tic-Tac-Toe-April-2022"
    },
    {
      id: "qlp-backend",
      title: "Quarter Life Projects (QLP Backend Mentorship Engine)",
      titleId: "Quarter Life Projects (Backend Mentorship Filter & 3NF DB)",
      titleZh: "Quarter Life Projects (导师筛选后端与3NF数据库)",
      tagline: "Relational Database Schema Normalization (3NF) & Multi-Category Mentorship Filter API",
      taglineId: "Normalisasi Skema Database Relasional (3NF) & Fitur Filter Mentorship Multi-Kategori",
      taglineZh: "关系型数据库3NF范式规范化与多维度导师匹配筛选系统",
      year: "2022",
      category: "web",
      role: "Backend Developer",
      roleId: "Pengembang Backend",
      roleZh: "后端开发工程师",
      client: "Quarter Life Projects (Startup Non-Profit)",
      clientZh: "Quarter Life Projects (青年公益创投)",
      techStack: ["PHP", "Laravel", "MySQL 3NF", "RESTful API", "Git/GitHub", "Postman"],
      description:
        "Redesigned and normalized relational database schemas to Third Normal Form (3NF) to resolve query redundancies, eliminate data anomalies, and improve data retrieval consistency. Developed and integrated a multi-category mentorship filtering API endpoint, enabling mentees to rapidly discover mentors by industry, experience level, and domain expertise.",
      descriptionId:
        "Merancang ulang dan menormalisasi skema database relasional ke bentuk normal ketiga (3NF) guna mengatasi redundansi kueri dan meningkatkan konsistensi data. Membangun endpoint API filter mentorship multi-kategori yang memudahkan mentee menemukan mentor berdasarkan industri, level pengalaman, dan bidang keahlian.",
      descriptionZh:
        "重构并规范化关系型数据库架构至第三范式 (3NF)，消除数据冗余并大幅提升检索一致性。设计并集成多维度导师筛选 RESTful API，支持学员按行业领域、工作年限与专业技能精准匹配导师。",
      highlights: [
        "Redesigned and normalized relational database schemas (3NF) to optimize query performance.",
        "Developed a multi-category Mentorship Filter REST API simplifying user discovery flows.",
        "Collaborated within an Agile cross-functional team to test and debug backend endpoints using Postman."
      ],
      highlightsId: [
        "Menormalisasi struktur database relasional (3NF) untuk meningkatkan efisiensi kueri data.",
        "Mengembangkan endpoint API filter mentorship multi-kategori untuk mempermudah pencarian mentor.",
        "Berkolaborasi dalam tim Agile lintas fungsi untuk menguji dan men-debug endpoint backend dengan Postman."
      ],
      highlightsZh: [
        "重构关系型数据库架构至3NF，提升查询检索性能与结构一致性。",
        "开发多类别导师筛选 REST API 端点，简化用户发现与匹配路径。",
        "在敏捷跨职能团队中协作，实施端到端后端接口测试与联调。"
      ],
      metrics: [
        { label: "Database Normalization", labelId: "Normalisasi Basis Data", labelZh: "数据库范式", value: "3NF Relational Structure", valueId: "Struktur Relasional 3NF", valueZh: "3NF 关系范式结构" },
        { label: "Filter Scope", labelId: "Cakupan Filter", labelZh: "筛选维度", value: "Multi-Category Matrix", valueId: "Matriks Multi-Kategori", valueZh: "多品类测评筛选矩阵" },
        { label: "Team Velocity", labelId: "Metodologi Kerja", labelZh: "研发协作模式", value: "Agile / Scrum Sprint", valueId: "Agile / Scrum Sprint", valueZh: "Agile / Scrum 敏捷迭代" }
      ],
      images: [],
      blueprintFlow: [
        {
          step: "3NF Schema Normalization",
          stepId: "Normalisasi Skema 3NF",
          stepZh: "3NF数据库范式重构",
          detail: "Eliminated relation redundancies and indexing bottlenecks",
          detailId: "Menghilangkan redundansi relasi dan bottleneck indeks",
          detailZh: "消除关系冗余与索引瓶颈"
        },
        {
          step: "Multi-Param Filter Endpoint",
          stepId: "Endpoint Filter Multi-Parameter",
          stepZh: "多参数导师筛选接口",
          detail: "Dynamic query builder with industry, domain & tier parameters",
          detailId: "Query builder dinamis dengan parameter industri, domain & tier",
          detailZh: "支持行业、领域与经验的多维度动态查询"
        },
        {
          step: "Agile API Integration",
          stepId: "Integrasi API Agile",
          stepZh: "敏捷API交付与集成",
          detail: "Sprint reviews, Postman testing, and frontend handoff",
          detailId: "Review sprint, pengujian Postman, dan integrasi frontend",
          detailZh: "Sprint评审、Postman测试与前端联调"
        }
      ]
    },
    {
      id: "dicoding-fullstack",
      title: "Dicoding Professional Software Engineering Suite",
      titleId: "Portofolio Rekayasa Software Dicoding Professional",
      titleZh: "Dicoding 软件工程专业认证技术套件",
      tagline: "React.js State Management, JavaScript LocalStorage DOM, and Java Android Native Applications",
      taglineId: "Pengembangan Frontend React.js, Web Storage DOM JavaScript & Aplikasi Java Android Native",
      taglineZh: "React.js 状态管理、原生 DOM Web Storage 与 Java Android 原生应用开发",
      year: "2020 – 2022",
      category: "web",
      role: "Certified Software Developer",
      roleId: "Pengembang Software Tersertifikasi",
      roleZh: "认证软件工程师",
      client: "Dicoding Academy (Google & AWS Training Partner)",
      clientZh: "Dicoding Academy (Google & AWS 官方认证体系)",
      techStack: ["React.js", "JavaScript (ES6+)", "Java Native Android", "Web Storage API", "RESTful API", "SOLID Principles"],
      description:
        "Completed 8 industry-standard certifications and built comprehensive application projects covering React.js state management (Notes App), native DOM & localStorage manipulation (Bookshelf App), and native Java Android architecture (Food Review App), all graduating with 5-star professional code review ratings.",
      descriptionId:
        "Menyelesaikan 8 sertifikasi berstandar industri dan membangun proyek aplikasi terverifikasi mencakup state management React.js (Notes App), manipulasi DOM & localStorage native (Bookshelf App), serta arsitektur mobile Java Android native (Food Review App) dengan predikat evaluasi bintang 5.",
      descriptionZh:
        "完成8项行业级专业技术认证，构建涵盖 React.js 状态提升 (Notes App)、原生 DOM 与 localStorage 持久化 (Bookshelf App) 以及 Java Android 原生架构 (Food Review App) 的完整工程项目群，均以满分5星代码评审通过。",
      highlights: [
        "Graduated with 5-star code review ratings across all professional application submissions.",
        "Engineered React single-page app with lifting state up, controlled inputs, and real-time query filters.",
        "Built native Java Android app using RecyclerView adapters, Parcelable data models, and intent routing."
      ],
      highlightsId: [
        "Lulus 100% dengan predikat bintang 5 pada seluruh evaluasi kode aplikasi profesional.",
        "Membangun SPA React dengan state management lifting state up dan filter pencarian real-time.",
        "Membangun aplikasi Java Android native dengan adapter RecyclerView dan arsitektur intent."
      ],
      highlightsZh: [
        "全量项目通过 Dicoding 官方专家5星级严格代码评审。",
        "基于状态提升 (Lifting State Up) 与实时关键词过滤构建 React 单页应用。",
        "基于 RecyclerView 适配器与显式/隐式 Intent 架构开发原生 Android 应用。"
      ],
      metrics: [
        { label: "Professional Certs", labelId: "Sertifikasi Profesional", labelZh: "专业认证数", value: "8 Industry Certifications", valueId: "8 Sertifikasi Industri", valueZh: "8 项行业权威认证" },
        { label: "Code Review Rating", labelId: "Rating Evaluasi Kode", labelZh: "代码评审评级", value: "5.0 / 5.0 (100% Score)", valueId: "5.0 / 5.0 (Skor 100%)", valueZh: "5.0 / 5.0 (100% 满分)" },
        { label: "Architecture", labelId: "Standar Arsitektur", labelZh: "工程架构标准", value: "SOLID & Clean Architecture", valueId: "SOLID & Clean Architecture", valueZh: "SOLID 与整洁架构" }
      ],
      images: [
        "/assets/projects/dicoding/dicoding_react_notes.webp",
        "/assets/projects/dicoding/dicoding_bookshelf.webp",
        "/assets/projects/dicoding/dicoding_biodata_html.webp",
        "/assets/projects/dicoding/dicoding_android_food_1.webp",
        "/assets/projects/dicoding/dicoding_android_food_2.webp",
        "/assets/projects/dicoding/dicoding_android_food_3.webp",
        "/assets/projects/dicoding/dicoding_android_food_4.webp"
      ],
      demoLinks: [
        { label: "React Notes App GitHub", labelId: "GitHub Notes App React", url: "https://github.com/JAW12/React-JS-Website-Notes-Taking-Belajar-Membuat-Aplikasi-Web-dengan-React-Juni-2022" },
        { label: "Bookshelf App GitHub", labelId: "GitHub Bookshelf JS", url: "https://github.com/JAW12/Javascript-Website-Bookshelf-Belajar-Membuat-Front-End-Web-untuk-Pemula-Juli-2021" },
        { label: "Biography Web GitHub", labelId: "GitHub Biodata Web", url: "https://github.com/JAW12/HTML-CSS-Webiste-Biodata-Belajar-Dasar-Pemrograman-Web-Juli-2021" },
        { label: "Java Android App GitHub", labelId: "GitHub Android Java", url: "https://github.com/JAW12/Java-Android-Application-Sederhana-Belajar-Membuat-Aplikasi-Android-untuk-Pemula-Oktober-2020" },
      ],
      blueprintFlow: [
        {
          step: "React SPA Architecture",
          stepId: "Arsitektur React SPA",
          stepZh: "React SPA 单页架构",
          detail: "State lifting, live keyword filtering, and controlled input forms",
          detailId: "Manajemen state lifting, filter pencarian instan & controlled inputs",
          detailZh: "状态提升、实时关键字过滤与受控输入表单"
        },
        {
          step: "Web Storage Native DOM",
          stepId: "DOM Native & Web Storage",
          stepZh: "原生 DOM 与 Web Storage 持久化",
          detail: "Persistent local storage serialization with zero framework bloat",
          detailId: "Serialisasi penyimpanan lokal persisten tanpa overhead framework",
          detailZh: "纯原生 LocalStorage 序列化存储，零框架负担"
        },
        {
          step: "Android Native Java Architecture",
          stepId: "Arsitektur Mobile Android Native",
          stepZh: "Android 原生 Java 架构",
          detail: "RecyclerView adapters, Parcelable models, and explicit intent routing",
          detailId: "Adapter RecyclerView, model Parcelable & routing intent eksplisit",
          detailZh: "RecyclerView 适配器、Parcelable 模型与显式 Intent 路由"
        }
      ]
    },
    {
      id: "othello-game",
      title: "Othello (Reversi) Board Game Engine with Alpha-Beta Pruning AI",
      titleId: "Engine Game Papan Othello (Reversi) dengan AI Algoritma Alpha-Beta Pruning",
      tagline: "Game Theory Heuristics, Alpha-Beta Minimax Pruning, Dynamic Tile Flips & Move Validation",
      taglineId: "Heuristik Teori Game, Alpha-Beta Minimax Pruning, Animasi Pembalikan Bidak & Validasi Langkah",
      year: "2021",
      category: "software",
      role: "Algorithm Architect & Game Programmer",
      roleId: "Arsitek Algoritma & Programmer Game",
      client: "Artificial Intelligence & Game Development Laboratory",
      techStack: ["Java", "Minimax Algorithm", "Alpha-Beta Pruning", "Positional Weight Matrices", "Java Swing UI"],
      description:
        "A complete Othello (Reversi) desktop board game engine featuring strategic artificial intelligence powered by Alpha-Beta Minimax pruning with positional edge/corner weight heuristics for high-depth tactical gameplay.",
      descriptionId:
        "Engine game papan desktop Othello (Reversi) lengkap yang ditenagai kecerdasan buatan berbasis algoritma Minimax dengan Alpha-Beta Pruning serta matriks bobot posisi (sudut dan tepi papan) untuk evaluasi langkah taktis tingkat lanjut.",
      highlights: [
        "Engineered Alpha-Beta pruning algorithm reducing search tree complexity by over 60% without sacrificing optimality.",
        "Applied positional board weight matrices prioritizing corner control and tactical mobility.",
        "Developed full 8-directional tile flipping validation ensuring 100% compliance with official Reversi rules."
      ],
      highlightsId: [
        "Membangun algoritma Alpha-Beta Pruning yang memangkas kompleksitas pohon pencarian hingga lebih dari 60%.",
        "Menerapkan matriks bobot posisi papan untuk memprioritaskan penguasaan sudut dan mobilitas langkah lawan.",
        "Mengembangkan logika pembalikan bidak 8 arah lengkap yang mematuhi 100% aturan resmi turnamen Reversi."
      ],
      metrics: [
        { label: "Search Depth", labelId: "Kedalaman Pencarian", labelZh: "博弈搜索深度", value: "6–8 Plies Lookahead", valueId: "6–8 Langkah Lookahead", valueZh: "6–8 层博弈前瞻" },
        { label: "Pruning Efficiency", labelId: "Efisiensi Pruning", labelZh: "剪枝优化效率", value: "> 60% Alpha-Beta Pruned", valueId: "> 60% Node Terpangkas", valueZh: "> 60% Alpha-Beta 剪枝率" },
        { label: "Rule Conformance", labelId: "Kepatuhan Aturan", labelZh: "规则符合度", value: "100% Official Reversi Rules", valueId: "100% Standar Reversi Resmi", valueZh: "100% 国际黑白棋官方规则" }
      ],
      images: [],
      githubUrl: "https://github.com/JAW12/C-Desktop-Application-Othello-Game-Maret-2021"
    },
    {
      id: "squeecapsule-erp",
      title: "SqueeCapsule Hotel Frontdesk ERP",
      titleId: "SqueeCapsule Hotel Frontdesk ERP (C# & MySQL)",
      titleZh: "SqueeCapsule 胶囊旅馆前台管理 ERP 系统",
      tagline: "Visual Capsule Bed Selection, Guest Check-In/Deposit Tracking & Thermal Receipt Printing",
      taglineId: "Peta Denah Kamar Kapsul Interaktif, Manajemen Deposit Tamu & Cetak Struk Kasir Termal",
      taglineZh: "可视化胶囊床位网格选房、宾客登记与押金流水及热敏小票即时打印",
      year: "2020 – 2021",
      category: "desktop",
      role: "Lead Software Architect & UI Designer",
      roleId: "Arsitek Software Utama & Desainer UI",
      roleZh: "首席软件架构师与UI设计师",
      client: "iSTTS Business Software Project (Grade A)",
      clientZh: "iSTTS 商业软件工程设计 (A级优秀项目)",
      techStack: ["C# (.NET WinForms)", "MySQL", "Visual Studio", "Thermal Print Integration", "Multi-Tier"],
      description:
        "Engineered a robust desktop ERP solution for capsule hotel hospitality operations. Features an interactive visual floor plan with color-coded bed status indicators (Available, Occupied, Cleaning, Maintenance), guest passport/ID scanning, security deposit ledger, and automated thermal billing receipt printing.",
      descriptionId:
        "Membangun solusi ERP desktop untuk operasional hotel kapsul. Dilengkapi denah lantai visual interaktif dengan indikator status tempat tidur berbasis warna (Tersedia, Terisi, Dibersihkan, Perawatan), pencatatan identitas tamu, buku besar deposit, dan pencetakan struk kasir termal otomatis.",
      descriptionZh:
        "为胶囊旅馆酒店业量身定制的高可靠桌面 ERP 系统。具备交互式可视化楼层平面图，支持床位状态色彩实时监控（空闲、已入住、清洁中、维修中），并集成宾客证件录入、安全押金台账管理及热敏小票硬件直接打印。",
      highlights: [
        "Interactive visual capsule bed occupancy map with live color-coded status tracking.",
        "Automated hourly, daily, and extended stay tariff calculations with deposit management.",
        "Direct POS thermal printer hardware integration with formatted transaction slips."
      ],
      highlightsId: [
        "Peta denah kamar kapsul visual interaktif dengan pelacakan status okupansi real-time.",
        "Kalkulasi tarif sewa jam/malam otomatis dengan pengelolaan deposit keamanan.",
        "Integrasi perangkat keras pencetak struk termal POS langsung dengan format struk rapi."
      ],
      highlightsZh: [
        "交互式可视化胶囊床位状态网格，支持多色彩实时入住状态追踪。",
        "自动化时租、日租与长租计费引擎，集成可退还安全押金台账。",
        "底层驱动直连 POS 热敏打印机硬件，输出规范对账单与消费小票。"
      ],
      metrics: [
        { label: "Academic Evaluation", labelId: "Evaluasi Akademik", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Hardware Integration", labelId: "Integrasi Perangkat", labelZh: "硬件驱动集成", value: "Thermal POS Esc/Pos Printer", valueId: "Printer POS Termal Esc/Pos", valueZh: "Esc/Pos 热敏小票打印驱动" },
        { label: "State Management", labelId: "Manajemen Status", labelZh: "状态同步机制", value: "Multi-Station Sync", valueId: "Sinkronisasi Multi-Stasiun", valueZh: "多工作站实时状态同步" }
      ],
      images: [
        "/assets/projects/software/Untitled 19.webp",
        "/assets/projects/software/Untitled 20.webp",
        "/assets/projects/software/Untitled 21.webp",
        "/assets/projects/software/Untitled 22.webp",
        "/assets/projects/software/Untitled 23.webp",
      ],
      githubUrl: "https://github.com/JAW12/PROBIS_SqueeCapsule",
      blueprintFlow: [
        {
          step: "Visual Capsule Grid Map",
          stepId: "Peta Grid Kapsul Visual",
          stepZh: "可视化胶囊网格地图",
          detail: "Interactive color-coded occupancy state engine",
          detailId: "Status okupansi real-time interaktif berbasis warna",
          detailZh: "多色彩交互式实时入住状态引擎"
        },
        {
          step: "Tariff & Deposit Ledger",
          stepId: "Buku Besar Tarif & Deposit",
          stepZh: "资费核算与押金台账",
          detail: "Hourly/daily stay calculation with refundable security deposit ledger",
          detailId: "Kalkulasi durasi sewa & pencatatan deposit jaminan tamu",
          detailZh: "按小时/日自动计费与退款押金管理"
        },
        {
          step: "Direct Thermal POS Print",
          stepId: "Pencetakan Struk POS Termal",
          stepZh: "热敏 POS 打印机直连",
          detail: "Low-level hardware driver integration for instant receipt printing",
          detailId: "Integrasi driver printer termal langsung untuk struk kasir",
          detailZh: "底层打印机驱动直连输出结账票据"
        }
      ]
    },

    {
      id: "squeestore-ecommerce",
      title: "SqueeStore E-Commerce Bahan Bangunan",
      titleId: "SqueeStore E-Commerce Bahan Bangunan",
      titleZh: "SqueeStore 重型建筑材料电商平台",
      tagline: "Heavy Construction Materials E-Commerce with Dynamic Cart & Fleet Tonnage Logistics",
      taglineId: "Toko Online Bahan Bangunan Multi-Kategori dengan Kalkulasi Ongkir Tonase Armada",
      taglineZh: "多品类建材在线商城、动态购物车与基于车队载重吨位的智能运费计算引擎",
      year: "2020",
      category: "web",
      role: "Full-Stack Web Developer",
      roleId: "Pengembang Web Full-Stack",
      roleZh: "全栈 Web 开发工程师",
      client: "iSTTS Internet Applications (Grade A)",
      clientZh: "iSTTS 互联网应用工程 (Grade A)",
      techStack: ["PHP Native", "MySQL", "JavaScript", "jQuery", "CSS3 Flexbox"],
      description:
        "E-commerce platform for heavy construction supplies featuring real-time stock filters, dynamic cart management, order dispatch tracking, and automated delivery freight calculation based on fleet vehicle tonnage.",
      descriptionId:
        "Toko online bahan bangunan multi-kategori dengan filter stok real-time, manajemen keranjang belanja dinamis, pelacakan status pesanan, dan kalkulasi ongkos kirim otomatis berbasis kapasitas tonase armada truk.",
      descriptionZh:
        "针对重型建材（水泥、砂石、钢筋、木料）特点定制的专业电商交易系统。提供实时库存筛选、动态购物车管理、出库物流配送追踪，并独创基于订单总重量与车队货车吨位阶梯的自动化运费核算系统。",
      highlights: [
        "Multi-category construction material catalog with real-time inventory checks.",
        "Engineered dynamic weight-based delivery freight calculation logic based on fleet tonnage.",
        "Order dispatch tracking and warehouse fulfillment dashboard."
      ],
      highlightsId: [
        "Katalog bahan bangunan multi-kategori dengan pengecekan stok real-time.",
        "Membangun logika kalkulasi ongkos kirim dinamis berbasis tonase armada truk.",
        "Dashboard pelacakan status pengiriman dan pemenuhan pesanan gudang."
      ],
      highlightsZh: [
        "支持水泥、钢筋、砂石等大宗建材多维品类检索与实时库存校验。",
        "自主研发基于订单总重与运输车型吨位匹配的阶梯运费核算算法。",
        "搭建仓库出库调度看板与订单全链路物流追踪界面。"
      ],
      metrics: [
        { label: "Academic Grade", labelId: "Nilai Proyek", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Logistics Feature", labelId: "Fitur Logistik", labelZh: "核心物流创新", value: "Tonnage Freight Calculation", valueId: "Kalkulasi Tonase Kargo", valueZh: "阶梯吨位运费精算" },
        { label: "Data Architecture", labelId: "Basis Data", labelZh: "底层数据模型", value: "Relational MySQL 3NF", valueId: "MySQL Relasional 3NF", valueZh: "MySQL 3NF 规范化模型" }
      ],
      images: [
        "/assets/projects/software/Untitled 3.webp",
        "/assets/projects/software/Untitled 4.webp",
        "/assets/projects/software/Untitled 5.webp",
        "/assets/projects/software/Untitled 6.webp",
        "/assets/projects/software/Untitled 7.webp",
      ],
      githubUrl: "https://github.com/JAW12/APLIN",
      blueprintFlow: [
        {
          step: "Heavy Material Catalog",
          stepId: "Katalog Bahan Bangunan",
          stepZh: "重型大宗建材目录",
          detail: "Category filtering across cement, sand, steel, and timber",
          detailId: "Filter kategori semen, pasir, besi, dan kayu konstruksi",
          detailZh: "水泥、砂石、钢筋及木材多品类实时筛选"
        },
        {
          step: "Tonnage Freight Engine",
          stepId: "Kalkulasi Ongkir Tonase",
          stepZh: "车队吨位阶梯运费引擎",
          detail: "Automated truck load calculation based on total order weight",
          detailId: "Kalkulasi kapasitas armada truk berbasis total bobot pesanan",
          detailZh: "基于订单总重量自动匹配货车运力与阶梯运费"
        },
        {
          step: "Order Dispatch Tracking",
          stepId: "Pelacakan Pengiriman",
          stepZh: "物流调度与订单跟踪",
          detail: "Live delivery status and warehouse fulfillment dashboard",
          detailId: "Dashboard status pengiriman dan pemenuhan pesanan gudang",
          detailZh: "仓库发货与客户订单物流状态全链路看板"
        }
      ]
    },
    {
      id: "harvest-moon-web",
      title: "Harvest Moon Web Simulation Engine",
      titleId: "Simulasi Bertani Web Harvest Moon",
      titleZh: "Harvest Moon 牧场物语纯前端网页农场模拟引擎",
      tagline: "Interactive Browser-Based Farming, Day/Night Cycles & Crop Lifecycle Engine",
      taglineId: "Engine Simulasi Siklus Tanam & Panen Berbasis Web Interaktif",
      taglineZh: "网格化地块交互、昼夜时钟轮转与多阶段作物生长状态机模拟引擎",
      year: "2020",
      category: "web",
      role: "Front-End & Simulation Engineer",
      roleId: "Rekayasa Simulasi & Front-End",
      roleZh: "前端与仿真逻辑工程师",
      client: "iSTTS Web Technology (Grade A)",
      clientZh: "iSTTS Web 前沿技术设计 (Grade A)",
      techStack: ["HTML5 Semantics", "CSS3 Grid", "JavaScript (ES6)", "jQuery DOM Engine"],
      description:
        "Interactive browser farming simulator with field tilling, seed sowing, daily watering, day/night clock cycles, and market crop selling mechanics executing entirely in the browser with zero heavy runtime dependencies.",
      descriptionId:
        "Simulasi bertani interaktif berbasis browser dengan mekanisme cangkul tanah, tanam bibit, siram harian, siklus siang/malam, dan penjualan panen ke pasar yang berjalan murni di sisi klien tanpa dependensi berat.",
      descriptionZh:
        "无需任何重型后端依赖的纯浏览器端农场经营模拟引擎。完整实现土地开垦耕作、种子播种、每日浇水、昼夜时钟步进以及成熟作物集市售卖结算等状态机闭环。",
      highlights: [
        "Stateful crop growth lifecycle state machine tied to game clock cycles.",
        "Interactive grid-based tile manipulation and tool inventory switching.",
        "Lightweight zero-dependency web execution directly in the DOM."
      ],
      highlightsId: [
        "State machine siklus pertumbuhan tanaman bertingkat yang terikat jam permainan.",
        "Manipulasi petak tanah interaktif berbasis grid dan pergantian alat kerja.",
        "Eksekusi web ringan tanpa dependensi berat langsung di DOM."
      ],
      highlightsZh: [
        "构建多阶段作物生命周期状态机，状态流转精准响应游戏内昼夜时钟。",
        "开发基于 DOM Grid 的交互式地块操作与工具切换状态管理。",
        "纯原生 JavaScript/DOM 执行，零重型运行时依赖，瞬时流畅运行。"
      ],
      metrics: [
        { label: "Academic Grade", labelId: "Nilai Proyek", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Execution Logic", labelId: "Logika Eksekusi", labelZh: "核心计算架构", value: "Deterministic State Machine", valueId: "Mesin Status Deterministik", valueZh: "确定性有限状态机" },
        { label: "Architecture", labelId: "Arsitektur Render", labelZh: "渲染引擎标准", value: "Native DOM & CSS Engine", valueId: "Engine DOM & CSS Native", valueZh: "原生 DOM 与 CSS 渲染引擎" }
      ],
      images: [
        "/assets/projects/software/Untitled 42.webp",
        "/assets/projects/software/Untitled 43.webp",
        "/assets/projects/software/Untitled 44.webp",
      ],
      githubUrl: "https://github.com/JAW12/HTML-CSS-JS-jQuery-Website-Harvest-Moon-Plant-Simulation-Maret-2020",
      blueprintFlow: [
        {
          step: "Grid Tile Engine",
          stepId: "Engine Petak Grid",
          stepZh: "网格地块交互引擎",
          detail: "Interactive soil tilling and watering state machine",
          detailId: "State machine cangkul tanah dan penyiraman harian",
          detailZh: "土地耕作与每日浇水状态机"
        },
        {
          step: "Crop Growth Lifecycle",
          stepId: "Siklus Pertumbuhan Tanaman",
          stepZh: "作物生长生命周期",
          detail: "Multi-stage seed to harvest state transitions tied to game clock",
          detailId: "Transisi status bibit ke panen terikat siklus jam game",
          detailZh: "种子至成熟收获的多阶段状态步进"
        },
        {
          step: "Market Economy Ledger",
          stepId: "Buku Besar Ekonomi Pasar",
          stepZh: "集市经济结算台账",
          detail: "Harvest bin collection and daily revenue calculation",
          detailId: "Pengumpulan kotak panen dan kalkulasi pendapatan harian",
          detailZh: "出货箱结算与每日金币收益核算"
        }
      ]
    },
    {
      id: "simple-supermarket-pos",
      title: "Supermarket Point-of-Sale (POS) Cashier System",
      titleId: "Sistem Kasir Point-of-Sale (POS) Supermarket",
      tagline: "Retail Barcode Transaction Processing, Stock Inventory Reorder Limits & Daily Cashier Ledgers",
      taglineId: "Pemrosesan Transaksi Barcode Ritel, Batas Pemesanan Ulang Stok & Rekap Buku Kasir Harian",
      year: "2019",
      category: "software",
      role: "Software Developer & Database Engineer",
      roleId: "Pengembang Software & Insinyur Database",
      client: "Supermarket Retail Operations",
      techStack: ["C# (.NET)", "SQL Server", "Barcode Processing", "Daily Shift Reconciliation", "Inventory Alerts"],
      description:
        "A reliable supermarket point-of-sale management desktop utility handling high-volume daily checkout transactions, cashier drawer balancing, product barcode catalog management, and stock reordering thresholds.",
      descriptionId:
        "Aplikasi desktop kasir supermarket yang andal untuk menangani volume transaksi harian tinggi, rekonsiliasi saldo kasir, manajemen katalog barcode produk, dan batas minimum pemesanan ulang stok inventaris.",
      highlights: [
        "Engineered high-speed checkout workflow minimizing customer queue times during rush hours.",
        "Structured daily shift closing reconciliation reports preventing revenue leakage at cashier terminals.",
        "Configured relational SQL Server tables optimized for rapid transactional writes and inventory decrements."
      ],
      highlightsId: [
        "Membangun alur kasir berkecepatan tinggi untuk meminimalkan antrean pelanggan pada jam-jam sibuk.",
        "Menyusun laporan rekonsiliasi penutupan shift kasir harian untuk mencegah selisih uang tunai di kasir.",
        "Mengonfigurasi tabel relasional SQL Server yang dioptimalkan untuk pencatatan transaksi cepat dan pengurangan stok."
      ],
      metrics: [
        { label: "Transaction Speed", labelId: "Kecepatan Transaksi", labelZh: "单笔收银时效", value: "< 15s per Customer", valueId: "< 15d per Pelanggan", valueZh: "< 15秒 / 单次结账" },
        { label: "Cash Reconciliation", labelId: "Akurasi Kasir", labelZh: "账目交接精度", value: "100% Shift Balanced", valueId: "100% Rekonsiliasi Shift Seimbang", valueZh: "100% 班次交接对账平衡" },
        { label: "Architecture", labelId: "Platform Sistem", labelZh: "系统技术架构", value: "C# .NET Windows Forms", valueId: "C# .NET Windows Forms", valueZh: "C# .NET Windows Forms 原生架构" }
      ],
      images: [
        "/assets/projects/software/Untitled 37.webp",
        "/assets/projects/software/Untitled 38.webp",
        "/assets/projects/software/Untitled 39.webp",
        "/assets/projects/software/Untitled 40.webp"
      ],
      githubUrl: "https://github.com/JAW12/C-Desktop-Application-Basic-Supermarket-POS-April-2019"
    },
    {
      id: "unity-2d-platformer",
      title: "2D Side-Scrolling Adventure Platformer (Unity C#)",
      titleId: "Game Petualangan Platformer 2D Side-Scrolling (Unity C#)",
      titleZh: "2D 横版卷轴冒险动作游戏 (Unity 3D / C#)",
      tagline: "Physics-Driven Platformer Mechanics, Dynamic Enemy AI Patrols & Parallax Background Engine",
      taglineId: "Mekanika Fisika Platformer, Patroli AI Musuh Dinamis & Efek Parallax Background",
      taglineZh: "刚体物理驱动跳跃手感、动态敌机巡逻 AI 与多层视差背景渲染引擎",
      year: "2020",
      category: "desktop",
      role: "Unity Game Engine Developer",
      roleId: "Pengembang Engine Game Unity",
      roleZh: "Unity 游戏引擎开发工程师",
      client: "iSTTS Game Development (Grade A)",
      clientZh: "iSTTS 游戏开发与设计工程 (Grade A)",
      techStack: ["Unity 3D / 2D", "C# Scripting", "Rigidbody2D Physics", "Parallax Scrolling", "State Animation"],
      description:
        "2D side-scrolling action adventure game engineered in Unity C#. Features custom Rigidbody2D velocity-based jump physics, raycast grounded state checks, dynamic enemy patrol AI with vision triggers, collectible score systems, and smooth parallax camera scrolling.",
      descriptionId:
        "Game aksi petualangan 2D side-scrolling yang dibangun dengan Unity C#. Dilengkapi fisika lompat berbasis Rigidbody2D, pemeriksaan status grounded via raycasting, AI patroli musuh dinamis dengan pemicu deteksi pandangan, sistem poin koin, dan scrolling kamera parallax halus.",
      descriptionZh:
        "基于 Unity C# 开发的 2D 横版卷轴动作冒险游戏。实现基于 Rigidbody2D 速度向量的跳跃滞空手感、Raycast 地面检测、视线触发的敌机巡逻追击 AI、金币道具收集与多层视差背景摄像机平滑跟踪。",
      highlights: [
        "Engineered tight 2D platformer movement physics with raycasted ground detection.",
        "Built enemy patrol state machine with player line-of-sight detection and attack triggers.",
        "Implemented multi-layered parallax background camera scrolling."
      ],
      highlightsId: [
        "Membangun fisika pergerakan platformer 2D presisi dengan deteksi raycast tanah.",
        "State machine patroli musuh dengan deteksi garis pandang dan pemicu serang.",
        "Penerapan scrolling kamera parallax multi-layer untuk kedalaman visual dunia game."
      ],
      highlightsZh: [
        "基于射线检测与刚体动力学打造精准敏捷的 2D 平台跳跃操控手感。",
        "开发具备视线遮挡检测与追击攻击触发的状态机敌军巡逻 AI。",
        "构建多景深多图层视差滚动摄像机跟随系统。"
      ],
      metrics: [
        { label: "Academic Evaluation", labelId: "Evaluasi Akademik", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Physics Engine", labelId: "Engine Fisika", labelZh: "物理动力学", value: "Rigidbody2D Vector Math", valueId: "Vektor Fisika Rigidbody2D", valueZh: "Rigidbody2D 矢量动力学" },
        { label: "Visual Mechanics", labelId: "Mekanika Visual", labelZh: "视觉视差技术", value: "Multi-Layer Parallax Scrolling", valueId: "Scrolling Parallax Multi-Layer", valueZh: "多层动态视差滚动" }
      ],
      liveUrl: "https://youtu.be/ILx1zyAd-C4",
      images: [
        "/assets/projects/unity-game/unity_bg_menu.webp"
      ],
      blueprintFlow: [
        {
          step: "Kinematic Movement & Jump",
          stepId: "Pergerakan Kinematik & Lompatan",
          stepZh: "运动学位移与跳跃动力学",
          detail: "Velocity manipulation with raycast grounded state verification",
          detailId: "Manipulasi kecepatan dengan verifikasi status grounded via raycast",
          detailZh: "速度矢量控制与射线实时着地状态校验"
        },
        {
          step: "Patrol AI & Line of Sight",
          stepId: "AI Patroli & Garis Pandang",
          stepZh: "巡逻 AI 与视线索敌",
          detail: "Waypoint navigation with player proximity detection",
          detailId: "Navigasi waypoint dengan deteksi kedekatan pemain",
          detailZh: "巡逻点循路与玩家距离/视线检测触发"
        },
        {
          step: "Parallax Camera Rendering",
          stepId: "Rendering Kamera Parallax",
          stepZh: "视差摄像机渲染",
          detail: "Multi-depth background layer offset based on camera translation",
          detailId: "Offset layer background multi-kedalaman terikat pergerakan kamera",
          detailZh: "基于摄像机平移的多图层视差偏移渲染"
        }
      ]
    },
    {
      id: "web-minesweeper",
      title: "Minesweeper Web Logic Game & Recursive Flood-Fill Engine",
      titleId: "Game Web Minesweeper & Engine Rekursif Flood-Fill (HTML/JS)",
      titleZh: "Minesweeper 经典扫雷网页游戏与递归 Flood-Fill 算法引擎",
      tagline: "Recursive Zero-Tile Flood Fill, Random Mine Scattering & Multi-Flag State Machine",
      taglineId: "Algoritma Rekursif Flood-Fill, Penanaman Ranjau Acak & State Machine Bendera",
      taglineZh: "递归洪泛算法 (Flood-Fill) 空白地块展开、随机地雷矩阵与旗帜状态机",
      year: "2020",
      category: "web",
      role: "Front-End & Logic Developer",
      roleId: "Pengembang Front-End & Logika",
      roleZh: "前端算法与逻辑工程师",
      client: "iSTTS Internet Applications (Grade A)",
      clientZh: "iSTTS 互联网应用工程 (Grade A)",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Recursive Algorithms", "DOM Engine"],
      description:
        "Pure browser-based recreation of the classic Minesweeper puzzle game engineered in native JavaScript. Features secure random mine distribution across customizable grid difficulties, recursive 8-neighbor flood-fill tile expansion upon uncovering empty cells, right-click flag placement state machine, and precision game timer.",
      descriptionId:
        "Rekreasi game teka-teki Minesweeper klasik berbasis browser murni yang dibangun dengan JavaScript native. Dilengkapi distribusi ranjau acak pada berbagai tingkat kesulitan grid, ekspansi petak rekursif flood-fill 8 arah saat membuka sel kosong, penandaan bendera klik kanan, dan timer permainan presisi.",
      descriptionZh:
        "基于纯原生 JavaScript 开发的经典扫雷 (Minesweeper) 网页游戏。具备基于安全伪随机算法的地雷矩阵分布、点击空白格时自动触发的 8 邻域递归展开 (Flood-Fill) 算法、右键插旗排雷状态机以及高精度游戏计时器。",
      highlights: [
        "Engineered recursive flood-fill algorithm clearing zero-mine contiguous clusters in O(N).",
        "Built randomized mine distribution ensuring solvable fair board generation.",
        "Zero-dependency vanilla JavaScript execution with instant browser response."
      ],
      highlightsId: [
        "Membangun algoritma rekursif flood-fill untuk membuka kluster sel kosong instan dalam O(N).",
        "Distribusi ranjau acak yang menjamin keadilan papan permainan.",
        "Eksekusi JavaScript native murni tanpa dependensi dengan responsivitas instan."
      ],
      highlightsZh: [
        "自研 O(N) 复杂度的 8 邻域递归 Flood-Fill 算法，瞬时展开连片安全空白区。",
        "实现随机地雷矩阵生成算法，确保游戏开局公平性与可解性。",
        "零外部第三方库依赖，纯原生 DOM 操作，极低内存消耗与瞬时响应。"
      ],
      metrics: [
        { label: "Academic Evaluation", labelId: "Evaluasi Akademik", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Algorithm Logic", labelId: "Logika Algoritma", labelZh: "核心算法设计", value: "Recursive Flood-Fill", valueId: "Rekursif Flood-Fill", valueZh: "递归漫水填充算法" },
        { label: "Bundle Size", labelId: "Ukuran Bundle", labelZh: "资源加载体积", value: "< 15 KB Native JS", valueId: "< 15 KB JS Native", valueZh: "< 15 KB 原生零依赖" }
      ],
      images: [],
      githubUrl: "https://github.com/JAW12/HTML-CSS-JS-Website-Minesweeper-Mini-Game-Maret-2020",
      blueprintFlow: [
        {
          step: "Random Mine Seeding",
          stepId: "Penanaman Ranjau Acak",
          stepZh: "随机地雷矩阵初始化",
          detail: "Deterministic coordinate sampling and 8-neighbor proximity number calculation",
          detailId: "Penempatan koordinat acak dan kalkulasi angka jarak 8 arah tetangga",
          detailZh: "矩阵坐标随机抽样与 8 邻域危险系数预计算"
        },
        {
          step: "Recursive Flood-Fill Uncover",
          stepId: "Pembukaan Rekursif Flood-Fill",
          stepZh: "递归 Flood-Fill 展开",
          detail: "Cascading recursive traversal uncovering zero-mine tiles and bounding edges",
          detailId: "Penelusuran rekursif beruntun membuka sel nol dan batas tepi",
          detailZh: "连片空白格连环递归遍历与边界数字格自动揭示"
        },
        {
          step: "Flagging & Win/Loss Condition",
          stepId: "Penandaan Bendera & Kondisi Menang",
          stepZh: "旗帜标记与胜负判定",
          detail: "Context menu override for flagging and all-mine clearance victory verification",
          detailId: "Override klik kanan untuk bendera dan verifikasi kemenangan pembersihan ranjau",
          detailZh: "右键插旗拦截、触雷引爆与全雷排查胜利状态闭环"
        }
      ]
    },
    {
      id: "squeecourse-lms",
      title: "SqueeCourse Online Learning & Course Management System",
      titleId: "Sistem Manajemen Kursus & Pembelajaran Online SqueeCourse",
      tagline: "Video Lesson Streaming, Chapter Progress Tracking, Quiz Assessment Engine & Certificates",
      taglineId: "Streaming Video Pembelajaran, Pelacakan Progres Bab, Engine Kuis & Penerbitan Sertifikat",
      year: "2020",
      category: "software",
      role: "Full-Stack Web Developer",
      roleId: "Pengembang Web Full-Stack",
      client: "EdTech Learning Platforms",
      techStack: ["PHP", "Laravel", "MySQL", "Video Streaming Integration", "Quiz Engine", "Bootstrap"],
      description:
        "A feature-complete online educational platform providing structured video curriculums, interactive chapter quizzes, automated grading, student progress dashboards, and completion certificate generation.",
      descriptionId:
        "Platform edukasi online lengkap yang menyediakan kurikulum materi video terstruktur, kuis evaluasi interaktif per bab, penilaian otomatis, dashboard progres siswa, dan penerbitan sertifikat kelulusan digital.",
      highlights: [
        "Engineered hierarchical course taxonomy organizing lectures into sequential chapters with prerequisite locking.",
        "Built automated quiz evaluation module calculating scores, passing thresholds, and detailed answer reviews.",
        "Generated downloadable PDF completion certificates with unique verification serials."
      ],
      highlightsId: [
        "Menyusun struktur taksonomi kursus bertingkat yang membagi video ke dalam bab dengan sistem kunci prasyarat.",
        "Membangun modul kuis evaluasi otomatis yang menghitung skor akhir, batas kelulusan, dan pembahasan jawaban.",
        "Menghasilkan sertifikat kelulusan PDF digital yang dilengkapi nomor seri verifikasi keaslian."
      ],
      metrics: [
        { label: "Curriculum Structure", labelId: "Struktur Materi", labelZh: "课程内容架构", value: "Multi-Chapter Sequential", valueId: "Multi-Bab Berurutan", valueZh: "多章节递进式课程体系" },
        { label: "Grading Automation", labelId: "Otomasi Penilaian", labelZh: "自动阅卷时效", value: "Instant Sub-Second Scoring", valueId: "Penilaian Instan < 1 Detik", valueZh: "秒级自动化阅卷打分" },
        { label: "Certificate Engine", labelId: "Modul Sertifikat", labelZh: "证书颁发引擎", value: "Automated PDF Generation", valueId: "Generasi PDF Otomatis", valueZh: "PDF 结业证书自动化生成" }
      ],
      images: [
        "/assets/projects/squeecourse/squeecourse_logo.webp",
        "/assets/projects/squeecourse/squeecourse_banner.webp"
      ],
      githubUrl: "https://github.com/JAW12/FAI_SqueeCourse",
    },
    {
      id: "car-dealership-web",
      title: "AutoPrime Premium Car Dealership & Inventory Management Portal",
      titleId: "Portal Manajemen Inventaris & Showroom Mobil AutoPrime",
      tagline: "Dynamic Vehicle Spec Filtering, Multi-Angle High-Res Galleries & Financing Loan Calculator",
      taglineId: "Filter Spesifikasi Kendaraan Dinamis, Galeri Foto Resolusi Tinggi & Kalkulator Simulasi Kredit",
      year: "2020",
      category: "software",
      role: "Full-Stack Web Developer",
      roleId: "Pengembang Web Full-Stack",
      client: "Automotive Dealership Solutions",
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Loan Calculator Engine", "Bootstrap"],
      description:
        "Automotive showroom portal designed for premium vehicle dealerships. Features multi-attribute vehicle filtering (Brand, Transmission, Fuel, Price Range), interactive loan repayment calculators, and back-office stock tracking.",
      descriptionId:
        "Portal showroom otomotif yang dirancang untuk dealer kendaraan premium. Menghadirkan filter spesifikasi mobil multi-atribut (Merek, Transmisi, Bahan Bakar, Rentang Harga), kalkulator simulasi kredit cicilan, dan pelacakan inventaris dealer.",
      highlights: [
        "Built interactive mathematical financial loan calculator computing monthly amortizations based on down payment and tenure.",
        "Engineered structured vehicle spec database handling complex technical parameters across various car segments.",
        "Created high-conversion contact funnels directing inquiries directly to sales executive WhatsApp lines."
      ],
      highlightsId: [
        "Membangun kalkulator simulasi kredit interaktif untuk menghitung angsuran bulanan berdasarkan DP dan tenor pinjaman.",
        "Menyusun database spesifikasi mobil terstruktur yang memuat parameter teknis lengkap lintas berbagai segmen kendaraan.",
        "Membuat corong kontak berkonversi tinggi yang menghubungkan calon pembeli langsung ke staf sales via WhatsApp."
      ],
      metrics: [
        { label: "Specification Attributes", labelId: "Atribut Spesifikasi", labelZh: "车型参数维度", value: "25+ Parameters per Vehicle", valueId: "25+ Parameter per Kendaraan", valueZh: "每车 25+ 项核心配置参数" },
        { label: "Loan Math Accuracy", labelId: "Akurasi Simulasi Kredit", labelZh: "车贷金融精算", value: "Exact Amortization Math", valueId: "Amortisasi Finansial Akurat", valueZh: "精确等额本息还款测算" },
        { label: "Inquiry Speed", labelId: "Konversi Prospek", labelZh: "意向直达漏斗", value: "Direct WhatsApp Funnel", valueId: "Funnel WhatsApp Langsung", valueZh: "WhatsApp 意向直达获客漏斗" }
      ],
      images: [
        "/assets/projects/software/Untitled 33.webp",
        "/assets/projects/software/Untitled 34.webp",
        "/assets/projects/software/Untitled 35.webp",
        "/assets/projects/software/Untitled 36.webp"
      ],
      githubUrl: "https://github.com/JAW12/PHP-Website-Basic-Car-Store-CRUD-April-2020"
    },
    {
      id: "squeemarket-pos",
      title: "SqueeMarket Supermarket Point of Sale (POS)",
      titleId: "Sistem Kasir Supermarket SqueeMarket (C# & MySQL POS)",
      titleZh: "SqueeMarket 超市收银与进销存 POS 系统",
      tagline: "Barcode Scanning Ingestion, Multi-Item Instant Billing, Inventory Depletion & POS Thermal Receipts",
      taglineId: "Integrasi Barcode Scanner, Kalkulasi Multi-Item Instan, Sinkronisasi Stok & Cetak Struk Kasir",
      taglineZh: "条码扫描快速录入、多商品即时结账计费、库存实时扣减与热敏消费小票",
      year: "2019",
      category: "desktop",
      role: "Lead Desktop Software Engineer",
      roleId: "Pengembang Software Desktop Utama",
      roleZh: "桌面软件首席开发工程师",
      client: "iSTTS Desktop Software Engineering (Grade A)",
      clientZh: "iSTTS 桌面软件工程实践 (Grade A)",
      techStack: ["C# (.NET WinForms)", "MySQL", "Barcode Scanner Integration", "POS Thermal Print", "Inventory Ledger"],
      description:
        "Full-featured supermarket retail POS software with barcode scanning input, instant multi-item checkout calculation, dynamic tax/discount computation, inventory replenishment ledgers, and automated POS thermal receipts.",
      descriptionId:
        "Sistem POS kasir supermarket lengkap dengan pemindaian barcode, kalkulasi checkout multi-item instan, perhitungan diskon/pajak otomatis, pembaruan stok otomatis, dan pencetakan struk kasir termal.",
      descriptionZh:
        "专为中小型零售超市打造的全功能桌面收银 POS 系统。深度集成条形码扫描枪硬件输入，支持动态商品清单计算、折扣与税费自动结算、实时库存流水扣减以及收银台热敏打印机小票输出。",
      highlights: [
        "Integrated high-speed barcode scanner hardware for sub-second item addition.",
        "Automated real-time inventory ledger deductions upon finalized checkout transactions.",
        "Built thermal receipt printing module with customizable shop branding and itemized summaries."
      ],
      highlightsId: [
        "Integrasi hardware barcode scanner berkecepatan tinggi untuk input item instan.",
        "Pengurangan stok inventaris otomatis seketika setelah transaksi checkout berhasil.",
        "Modul pencetakan struk kasir termal dengan header kustom toko dan rincian belanja."
      ],
      highlightsZh: [
        "深度适配扫码枪条形码输入，实现毫秒级商品信息检索与加车结算。",
        "构建动态库存联动机制，完成交易后自动扣减货品库存并预警缺货。",
        "集成 POS 热敏收银小票格式化打印，支持退换货流水查验与对账。"
      ],
      metrics: [
        { label: "Barcode Scanning", labelId: "Pemindaian Barcode", labelZh: "扫码识别响应", value: "< 50ms Direct Laser", valueId: "< 50ms Laser Langsung", valueZh: "< 50ms 极速激光识别" },
        { label: "Inventory Sync", labelId: "Sinkronisasi Stok", labelZh: "库存联动扣减", value: "Real-Time Auto-Deduction", valueId: "Otomatis Real-Time", valueZh: "实时自动库存联动扣减" },
        { label: "Academic Grade", labelId: "Evaluasi Akademik", labelZh: "学术评审评级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" }
      ],
      images: [
        "/assets/projects/software/Untitled 24.webp",
        "/assets/projects/software/Untitled 25.webp",
        "/assets/projects/software/Untitled 26.webp",
        "/assets/projects/software/Untitled 27.webp",
        "/assets/projects/software/Untitled 28.webp",
        "/assets/projects/software/Untitled 29.webp",
      ],
      githubUrl: "https://github.com/JAW12/C-Desktop-Application-Supermarket-POS-Mei-2019",
      blueprintFlow: [
        {
          step: "Barcode Scanner Parsing",
          stepId: "Parsing Barcode Scanner",
          stepZh: "条码扫描快速录入",
          detail: "Hardware interrupt listener querying product catalogue by SKU",
          detailId: "Listener interrupt hardware mencocokkan katalog produk via SKU",
          detailZh: "硬件中断监听器依据 SKU 毫秒级查询商品目录"
        },
        {
          step: "Cart Calculation & Tax",
          stepId: "Kalkulasi Keranjang & Pajak",
          stepZh: "购物车结算与税费折扣",
          detail: "Dynamic subtotal, quantity adjustments, and promotional discounts",
          detailId: "Subtotal dinamis, penyesuaian kuantitas, dan potongan diskon",
          detailZh: "动态小计、数量修改与促销折扣阶梯核算"
        },
        {
          step: "Stock Deduction & Receipt",
          stepId: "Pemotongan Stok & Struk",
          stepZh: "库存扣减与热敏出票",
          detail: "ACID stock ledger update and formatted POS thermal receipt print",
          detailId: "Pembaruan stok database ACID dan pencetakan struk kasir termal",
          detailZh: "ACID 事务扣减库存并驱动热敏打印机出票"
        }
      ]
    },
    {
      id: "mini-erp-sales",
      title: "Mini ERP Sales Order Client-Server (Best Academic Practitioner)",
      titleId: "Mini ERP Sales Order Client-Server (Praktikan Terbaik)",
      titleZh: "Mini ERP 销售订单客户端-服务器系统 (最佳实践奖)",
      tagline: "Integrated B2B Transaction Cycle: SQ ➔ SO ➔ DO ➔ Invoice with Credit Limit Checks",
      taglineId: "Siklus Transaksi B2B Korporat: SQ ➔ SO ➔ DO ➔ Faktur & Pengecekan Kredit",
      taglineZh: "企业级完整交易链协同：报价 ➔ 销售订单 ➔ 出库单 ➔ 发票与信用额度自动校验",
      year: "2019",
      category: "desktop",
      role: "Client-Server Engineer (Best Academic Practitioner Award)",
      roleId: "Pengembang Client-Server (Praktikan Terbaik)",
      roleZh: "客户端-服务器软件工程师 (最佳实践第一名)",
      client: "Laboratorium Komputer iSTTS",
      clientZh: "iSTTS 计算机软件工程实验室",
      techStack: ["C# (.NET)", "MySQL Server", "Socket Networking", "Multi-Tier Architecture", "Concurrency Locking"],
      description:
        "Awarded Best Academic Practitioner in Client-Server Applications at iSTTS. Architected a multi-tier client-server enterprise transaction system managing the full sales cycle: Sales Quotation (SQ) ➔ Sales Order (SO) ➔ Delivery Order (DO) ➔ Sales Invoice. Implemented automated customer credit ceiling validation and multi-station database concurrency controls.",
      descriptionId:
        "Meraih penghargaan Praktikan Terbaik Aplikasi Client-Server di iSTTS. Merancang sistem transaksi enterprise client-server multi-tier yang mengelola siklus penjualan lengkap: Sales Quotation (SQ) ➔ Sales Order (SO) ➔ Delivery Order (DO) ➔ Faktur Penjualan dengan validasi plafon kredit pelanggan otomatis.",
      descriptionZh:
        "荣获 iSTTS 全系客户端-服务器应用科目「最佳实践第一名 (Best Academic Practitioner)」荣誉。构建多层架构 C#/.NET 客户端-服务器系统，覆盖完整销售闭环：报价单 (SQ) ➔ 销售订单 (SO) ➔ 出库发货单 (DO) ➔ 销售发票。实现客户信用额度上限实时校验与多终端数据库并发控制。",
      highlights: [
        "Awarded Best Practitioner Award in Client-Server Applications across the academic cohort.",
        "Engineered automated credit limit enforcement preventing unapproved high-risk order dispatch.",
        "Designed relational database transaction locks ensuring data integrity across concurrent client terminals."
      ],
      highlightsId: [
        "Meraih Penghargaan Praktikan Terbaik Aplikasi Client-Server di iSTTS.",
        "Membangun validasi batas kredit otomatis untuk mencegah pengiriman pesanan berisiko tinggi.",
        "Merancang penguncian transaksi database relasional guna menjamin integritas data multi-terminal."
      ],
      highlightsZh: [
        "在全专业同期学员中荣获客户端-服务器系统「最佳实践第一名」学术嘉奖。",
        "构建自动化客户信用限额风控拦截机制，杜绝未授权高风险发货。",
        "设计关系型数据库行级事务锁，确保多终端高并发操作下的 ACID 数据一致性。"
      ],
      metrics: [
        { label: "Cohort Award", labelId: "Penghargaan", labelZh: "专业荣誉奖项", value: "Best Practitioner #1", valueId: "Praktisi Terbaik #1", valueZh: "专业第一优秀示范" },
        { label: "Transaction Pipeline", labelId: "Siklus Transaksi", labelZh: "交易闭环流转", value: "SQ ➔ SO ➔ DO ➔ Invoice", valueId: "SQ ➔ SO ➔ DO ➔ Faktur", valueZh: "SQ ➔ SO ➔ DO ➔ 发票全流程" },
        { label: "Data Integrity", labelId: "Integritas Data", labelZh: "数据一致性保障", value: "100% ACID Transactional", valueId: "100% Transaksional ACID", valueZh: "100% ACID 事务一致性" }
      ],
      images: [
        "/assets/projects/software/Untitled 8.webp",
        "/assets/projects/software/Untitled 9.webp",
        "/assets/projects/software/Untitled 10.webp",
        "/assets/projects/software/Untitled 11.webp",
        "/assets/projects/software/Untitled 12.webp",
        "/assets/projects/software/Untitled 13.webp",
        "/assets/projects/software/Untitled 14.webp",
        "/assets/projects/software/Untitled 15.webp",
      ],
      githubUrl: "https://github.com/JAW12/ACS",
      blueprintFlow: [
        {
          step: "SQ & SO Lifecycle Cycle",
          stepId: "Siklus SQ & SO",
          stepZh: "报价单与订单生命周期",
          detail: "Quotation conversion with customer credit ceiling validation",
          detailId: "Konversi penawaran ke pesanan dengan validasi plafon kredit",
          detailZh: "报价转订单与客户信用上限实时阻断校验"
        },
        {
          step: "DO Warehouse Dispatch",
          stepId: "Pengiriman Gudang DO",
          stepZh: "DO 出库发货流转",
          detail: "Stock reservation and delivery order validation",
          detailId: "Pencatatan alokasi stok dan surat jalan pengiriman",
          detailZh: "库存锁定与出库物流单据核验"
        },
        {
          step: "Sales Invoice & Concurrency",
          stepId: "Faktur Penjualan & Locking",
          stepZh: "销售开票与并发事务锁",
          detail: "Multi-station database locks ensuring ACID integrity",
          detailId: "Penguncian transaksi database menjamin integritas data ACID",
          detailZh: "多终端数据库行锁保障 ACID 数据强一致性"
        }
      ]
    },
    {
      id: "spaceshooter-game",
      title: "Space Shooter: Classic 2D Arcade Space Battle Game",
      titleId: "Space Shooter: Game Pertempuran Antariksa Arkade 2D Klasik",
      titleZh: "Space Shooter: 经典 2D 街机太空射击弹幕游戏 (NetBeans / Java OOP)",
      tagline: "Java OOP Polymorphism, 3 Enemy Flight Archetypes, 5-Tier Power-Ups & Particle Animations",
      taglineId: "Polimorfisme Java OOP, 3 Pola Pergerakan Musuh, 5 Tipe Power-Up & Animasi Partikel",
      taglineZh: "Java 面向对象多态体系、3类敌机轨迹算法、5重能量强化道具与粒子击毁特效",
      year: "2019",
      category: "software",
      role: "Project Manager, Core Game Systems & Animation Lead (Team of 4)",
      roleId: "Project Manager, Pengembang Sistem Game & Animasi (Tim 4 Orang)",
      roleZh: "项目负责人 (PM)、核心游戏系统开发兼动画主程 (4人团队)",
      client: "iSTTS Object-Oriented Programming (Grade A)",
      clientZh: "iSTTS 面向对象程序设计 (Grade A)",
      techStack: ["Java Native", "Java Swing / Graphics2D", "OOP Polymorphism", "Game Loop", "NetBeans IDE"],
      description:
        "Desktop arcade space shooter game inspired by classic retro games (Space Cadet), developed in NetBeans using Java OOP principles. Led a 4-person team over a 1-month development sprint to build full UI/UX sprites, 3 distinct enemy flight archetypes (straight-moving and left/right zigzag descents), dynamic power-ups (Healing, Temporary Shields, Evolution upgrades, Rapid Shot, and Blast Gauge laser attacks), and sprite hit/destruction animations.",
      descriptionId:
        "Game arcade space shooter desktop yang terinspirasi oleh game retro klasik (Space Cadet), dibangun menggunakan prinsip Java OOP di NetBeans. Memimpin tim 4 orang selama 1 bulan untuk merancang sprite UI/UX, 3 pola pergerakan musuh (lurus dan zigzag kiri/kanan), power-up dinamis (Heal, Shield, Upgrade Evolusi pesawat, Tambah Firepower, dan laser Blast Gauge), serta animasi efek tabrakan dan ledakan.",
      descriptionZh:
        "致敬经典 Windows 弹幕射击游戏的桌面街机 Java 游戏，在 NetBeans 环境中基于面向对象多态构建。作为 4 人团队负责人历经 1 个月开发周期，统筹 UI/UX 精灵与星空背景设计，开发 3 类不同飞行轨迹敌机（直线俯冲、左侧锯齿机动、右侧锯齿机动）、全套能量道具系统（生命恢复、无敌护盾、战机进阶演化、子弹火力提升及高能蓄力激光），并攻克子弹受击闪烁与爆炸粒子动画。",
      highlights: [
        "Project Management (4 Devs): Coordinated 1-month agile sprint, GitHub task allocation, bug fixing, and final build delivery.",
        "3 Enemy Flight Archetypes: Engineered straight-moving and left/right zigzag evasive trajectory algorithms.",
        "5-Tier Power-Up Suite: Implemented Healing, Temporary Shields, Spaceship Evolution upgrades, Rapid Firepower, and Blast Gauge lasers.",
        "Dynamic Animation Engine: Built custom hit-flash triggers, spaceship evolution morphing, and explosion destruction effects."
      ],
      highlightsId: [
        "Project Management (4 Orang): Mengkoordinasikan sprint 1 bulan, pembagian tugas GitHub, perbaikan bug, dan pengiriman build akhir.",
        "3 Pola Pergerakan Musuh: Membangun algoritma pergerakan lurus serta manuver zigzag dari kiri dan kanan.",
        "5 Jenis Power-Up: Mengimplementasikan Healing, Shield sementara, Evolusi upgrade pesawat, Peningkatan Firepower, dan laser Blast Gauge.",
        "Engine Animasi Dinamis: Mengembangkan efek kilatan peluru, transformasi pesawat, dan animasi ledakan kehancuran."
      ],
      highlightsZh: [
        "团队管理与项目交付（4人）：统筹 1 个月敏捷开发冲刺，分配 GitHub 任务进度，组织 Bug 修复并交付最终运行包。",
        "3类敌机机动算法：自主实现直线俯冲、左侧锯齿机动与右侧锯齿规避三种不同飞行轨迹。",
        "5重能量增强体系：实现回血道具、无敌护盾、战机演化进阶、火力散射提升及大招蓄力激光射线。",
        "动态粒子与打击感动画：编写受击高亮闪烁、射击枪口火焰、战机毁灭爆炸以及道具生成光晕动效。"
      ],
      metrics: [
        { label: "Academic Grade", labelId: "Nilai Proyek", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Enemy Archetypes", labelId: "Tipe Musuh", labelZh: "敌机行为模式", value: "3 Trajectory Models", valueId: "3 Model Lintasan", valueZh: "3 种弹道飞行路径模型" },
        { label: "Power-Up Variety", labelId: "Variasi Power-Up", labelZh: "能量道具矩阵", value: "5 Distinct Power-Ups", valueId: "5 Variasi Power-Up", valueZh: "5 种战术功能道具" }
      ],
      images: [
        "/assets/projects/software/Untitled 30.webp",
        "/assets/projects/software/Untitled 31.webp",
        "/assets/projects/software/Untitled 32.webp"
      ],
      githubUrl: "https://github.com/JAW12/PBO",
      blueprintFlow: [
        {
          step: "OOP Entity Hierarchy",
          stepId: "Hierarki Entitas OOP",
          stepZh: "面向对象实体多态体系",
          detail: "Abstract base sprite class extended by Player, Enemy, and Projectile models",
          detailId: "Kelas dasar sprite abstrak yang diwarisi model Player, Musuh, dan Peluru",
          detailZh: "抽象 Sprite 基类派生出玩家、各型敌机与子弹弹幕实体"
        },
        {
          step: "60 FPS Game Loop",
          stepId: "Game Loop 60 FPS",
          stepZh: "60 FPS 游戏主时钟循环",
          detail: "Decoupled update-and-render ticks ensuring fluid input and responsive gameplay",
          detailId: "Tick update dan render terpisah untuk memastikan respons input dan performa gameplay lancar",
          detailZh: "解耦更新与渲染周期，确保丝滑输入响应与流畅游戏体验"
        },
        {
          step: "Hitbox & Collision Logic",
          stepId: "Logika Tabrakan & Hitbox",
          stepZh: "碰撞判定与道具触发",
          detail: "Accurate AABB bounding-box collision detection for laser blasts, power-up collection, and shield impacts",
          detailId: "Deteksi tabrakan presisi kotak batas AABB untuk tembakan laser, pengambilan power-up, dan efek shield",
          detailZh: "高精度 AABB 盒体碰撞检测算法，驱动激光命中判定、能量拾取与护盾抵消"
        }
      ]
    },
    {
      id: "csharp-basic-pizza-store",
      title: "Simple Pizza Store Order & Stock Inventory System",
      titleId: "Aplikasi Pemesanan Pizza & Manajemen Stok Toko (C#)",
      titleZh: "简易披萨门店订购与进销存管理系统 (C#)",
      tagline: "Capital Fund Management, Bar Chart Stock Visualizer & Order Visual History",
      taglineId: "Manajemen Modal Dana, Visualisasi Grafik Batang Stok & Riwayat Grafis Pesanan",
      taglineZh: "营运资金核算、柱状图库存可视化看板与披萨订购图形成像历史追溯",
      year: "2019",
      category: "desktop",
      role: "Desktop Software Engineer",
      roleId: "Pengembang Software Desktop",
      roleZh: "桌面软件开发工程师",
      client: "iSTTS Visual Programming (Grade A)",
      clientZh: "iSTTS 可视化程序设计 (Grade A)",
      techStack: ["C# (.NET WinForms)", "Stock Fund Management", "Bar Chart Graphics", "Visual History Rendering"],
      description:
        "Desktop pizza store management and customer ordering application built in C# Windows Forms within a 1-week sprint. Features 2 dedicated access modes: Admin (manages initial Rp 1,000,000 capital funds, ingredient procurement stock purchases with automated balance verification, and category-filtered colored bar charts displaying stock levels with hover tooltips for ingredient names and quantities) and Customer (account signup/login, multi-ingredient pizza builder with crust sizing, automated order code generation, dynamic ingredient inventory deductions, real-time graphical pizza rendering, and order history archive rendering past pizza graphics on demand).",
      descriptionId:
        "Aplikasi desktop pemesanan pizza dan manajemen toko yang dibangun dengan C# Windows Forms dalam 1 minggu. Memiliki 2 mode akses: Admin (mengelola modal awal Rp 1.000.000, pembelian stok bahan dengan validasi saldo otomatis, dan grafik batang berwarna dengan tooltip nama bahan serta sisa stok) dan Pelanggan (pendaftaran/login akun, kustomisasi pizza & ukuran, pembuatan kode pesanan otomatis, pemotongan stok bahan, rendering grafis pizza visual, dan riwayat pesanan yang dapat menampilkan kembali gambar pizza yang pernah dipesan).",
      descriptionZh:
        "基于 C# Windows Forms 独立开发的披萨门店经营与客户订购桌面系统。具备双角色协同：管理员端（管理 100 万印尼盾初始营运资金、校验资金采购食材补货、按分类渲染带悬停提示的彩色柱状图库存看板）与客户端（注册登录、多维度自由定制面饼尺寸与荤素加料、自动生成订单编号、联动扣减食材库存、动态渲染披萨视觉成像，并支持在历史订单中回溯展示当时所订披萨的图形）。",
      highlights: [
        "Admin Capital & Stock Engine: Managed Rp 1,000,000 initial fund ledger and stock procurement checks.",
        "Interactive Colored Bar Chart: Visual stock representation by category with hover tooltips displaying ingredient names and quantities.",
        "Customer Visual Builder: Automated order code generation, real-time pizza layer rendering, and historical order graphic retrieval.",
        "Dynamic Inventory Linkage: Automatic inventory deductions upon customer order confirmation."
      ],
      highlightsId: [
        "Engine Modal & Stok Admin: Mengelola buku besar modal awal Rp 1.000.000 dan validasi saldo pembelian bahan.",
        "Grafik Batang Interaktif Berwarna: Visualisasi level stok per kategori dengan tooltip nama bahan dan jumlah sisa stok.",
        "Builder Visual Pelanggan: Pembuatan kode pesanan otomatis, rendering grafis pizza real-time, dan tampilan riwayat grafis pesanan terdahulu.",
        "Keterkaitan Inventaris Dinamis: Pemotongan stok bahan baku otomatis saat pesanan dikonfirmasi."
      ],
      highlightsZh: [
        "管理员资金与采购引擎：管理 100 万印尼盾初始营运资金流水，采购食材自动核验余额并扣款补库。",
        "交互式彩色柱状图看板：按品类展示食材库存水平，鼠标悬停即时显示颜色代码、食材名称与剩余余量。",
        "客户可视化定制与追溯：自动生成唯一订单号，动态绘制披萨图层，并可在历史订单中回放历史披萨图像。",
        "进销存实时联动扣减：客户确认下单后毫秒级扣减原料库存。"
      ],
      metrics: [
        { label: "Academic Grade", labelId: "Nilai Proyek", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Initial Capital", labelId: "Modal Awal", labelZh: "初始营运资金", value: "Rp 1.000.000 Simulation", valueId: "Simulasi Rp 1.000.000", valueZh: "100万印尼盾模拟资金" },
        { label: "Visualization", labelId: "Visualisasi", labelZh: "可视化图表", value: "Interactive Tooltip Bar Charts", valueId: "Grafik Batang Interaktif", valueZh: "交互式悬浮柱状图表" }
      ],
      images: [
        "/assets/projects/software/Untitled 16.webp",
        "/assets/projects/software/Untitled 17.webp",
        "/assets/projects/software/Untitled 18.webp",
      ],
      githubUrl: "https://github.com/JAW12/C-Desktop-Application-Basic-Pizza-Store-POS-Maret-2019",
      blueprintFlow: [
        {
          step: "Fund Ledger & Stock Procurement",
          stepId: "Buku Besar Modal & Pengadaan Stok",
          stepZh: "资金台账与采购补库",
          detail: "Admin capital balance tracking and ingredient purchasing validation",
          detailId: "Pelacakan saldo modal admin dan validasi pembelian bahan baku",
          detailZh: "管理员营运资金核算与食材采购扣款校验"
        },
        {
          step: "Bar Chart Stock Visualization",
          stepId: "Visualisasi Grafik Batang Stok",
          stepZh: "柱状图库存可视化",
          detail: "Dynamic category bar charts with interactive hover tooltips",
          detailId: "Grafik batang kategori dinamis dengan tooltip saat mouse diarahkan",
          detailZh: "带鼠标悬停交互提示的分类库存柱状图渲染"
        },
        {
          step: "Pizza Order & History Render",
          stepId: "Pesanan Pizza & Render Riwayat",
          stepZh: "披萨订购与历史图形成像",
          detail: "Order code generation, stock deduction, and historical pizza graphic retrieval",
          detailId: "Pembuatan kode pesanan, pemotongan stok, dan pemanggilan kembali gambar pizza",
          detailZh: "订单号生成、库存自动扣减与历史披萨图像回放"
        }
      ]
    },
    {
      id: "csharp-pizza-maker",
      title: "Pizza Maker Customizer, GDI+ Visual Layers & Invoice Suite",
      titleId: "Aplikasi Kustomisasi Pizza Visual GDI+ & Faktur Nota Pembelian",
      titleZh: "披萨图形化图层定制、GDI+ 动态组装与消费发票开具系统 (C#)",
      tagline: "Interactive Layer Placement, Real-Time Ingredient Guide, Itemized Nota & Stock Report Chart",
      taglineId: "Penyusunan Layer Visual, Panduan Bahan Real-Time, Nota Pembelian Rinci & Grafik Stok",
      taglineZh: "动态图层叠加渲染、实时选料视觉引导、明细小票开具与分类库存统计图表",
      year: "2019",
      category: "desktop",
      role: "Desktop & Graphics Software Engineer",
      roleId: "Pengembang Desktop & Grafis Visual",
      roleZh: "桌面图形与软件开发工程师",
      client: "iSTTS Visual Programming (Grade A)",
      clientZh: "iSTTS 可视化程序设计 (Grade A)",
      techStack: ["C# (.NET WinForms)", "GDI+ Graphics Composition", "Itemized Billing Engine", "Statistical Bar Charts"],
      description:
        "Visual desktop pizza maker and billing application built in C# Windows Forms within a 1-week practical sprint. Features an interactive culinary UI where users customize pizza crusts, sauces, meats, vegetables, and sizes (Small, Medium, Large). Clicking 'Order Now' dynamically renders the pizza base, spreads sauce over the crust, and places meat and vegetable toppings directly on the graphic canvas. Generates an itemized customer receipt invoice ('Nota Pembelian') tallying component prices and computes average ingredient stock levels via a multi-colored statistical bar chart.",
      descriptionId:
        "Aplikasi visual pembuat pizza dan penagihan desktop yang dibangun dengan C# Windows Forms dalam waktu 1 minggu. Memuat antarmuka interaktif di mana pengguna memilih pinggiran, saus, daging, sayuran, dan ukuran (Small, Medium, Large). Menekan tombol 'Order Now' akan merender dasar pizza, melumuri saus di atas adonan, dan menempatkan topping daging serta sayuran langsung pada kanvas grafis. Menghasilkan 'Nota Pembelian' terperinci per komponen harga dan menyajikan laporan rata-rata stok bahan melalui grafik batang statistik berwarna.",
      descriptionZh:
        "基于 C# Windows Forms 开发的图形化披萨实时烘焙组装与商业发票打印系统。用户可自由选择饼底、酱汁、肉类、蔬菜配料及尺寸（小/中/大）；点击 'Order Now' 实时在画布上绘制饼底、涂抹酱汁并逐层叠加荤素配料。系统自动输出精确到各加料单价的商业结账小票（Nota Pembelian），并在点击 'Report' 时在左下方动态绘制全品类食材平均库存水平的彩色统计柱状图。",
      highlights: [
        "Interactive Layer-by-Layer Rendering: Dynamically draws crust, sauce, meats, and vegetable toppings on the pizza canvas.",
        "Itemized Billing Slip ('Nota Pembelian'): Automatically aggregates individual component prices, crust sizing, and total sum.",
        "Statistical Stock Level Report: Generates colored category-wide ingredient stock bar charts on demand."
      ],
      highlightsId: [
        "Rendering Visual Layer Bertingkat: Merender adonan pinggiran, saus, daging, dan sayuran secara dinamis pada kanvas pizza.",
        "Nota Pembelian Terperinci: Mengakumulasi harga masing-masing bahan tambahan, ukuran pinggiran, dan total pembayaran.",
        "Laporan Statistik Stok Bahan: Menghasilkan grafik batang berwarna untuk rata-rata level stok bahan per kategori."
      ],
      highlightsZh: [
        "多图层递进式视觉渲染：在披萨画布上动态实时绘制饼底、涂抹酱汁并叠加肉类与蔬菜配料。",
        "明细化消费发票 ('Nota Pembelian')：逐项罗列配料单价、尺寸加价并计算最终应付总额。",
        "全品类库存统计报表：一键生成各品类食材平均库存水平的多彩统计柱状图看板。"
      ],
      metrics: [
        { label: "Academic Grade", labelId: "Nilai Proyek", labelZh: "学术评审等级", value: "Grade A Honors", valueId: "Nilai A Sempurna", valueZh: "最高满分 A 评定" },
        { label: "Rendering Tech", labelId: "Teknologi Visual", labelZh: "图形渲染引擎", value: "GDI+ Dynamic Layering", valueId: "Layering Dinamis GDI+", valueZh: "GDI+ 动态图层拼贴渲染" },
        { label: "Billing Precision", labelId: "Format Nota", labelZh: "账单明细规格", value: "Itemized Thermal Slip", valueId: "Struk Rinci Item", valueZh: "标准化逐项小票明细" }
      ],
      images: [
        "/assets/projects/software/Untitled 2.webp",
      ],
      githubUrl: "https://github.com/JAW12/C-Desktop-Application-Pizza-Maker-Receipt-Generator-Maret-2019",
      blueprintFlow: [
        {
          step: "Visual Ingredient Guide",
          stepId: "Panduan Bahan Visual",
          stepZh: "选料视觉交互引导",
          detail: "Selection of crust, sauce, meat, and vegetable parameters with real-time UI previews",
          detailId: "Pemilihan pinggiran, saus, daging, dan sayuran dengan preview visual real-time",
          detailZh: "饼底、酱料、荤素配料与尺寸实时参数配置与界面联动"
        },
        {
          step: "GDI+ Layer Composition",
          stepId: "Komposisi Layer GDI+",
          stepZh: "GDI+ 动态图层组装",
          detail: "Dynamic canvas drawing of crust base, sauce coating, and scattered topping placement",
          detailId: "Penggambaran kanvas dinamis untuk pinggiran, lapisan saus, dan penempatan topping",
          detailZh: "画布动态绘制饼底轮廓、酱汁图层与配料散布渲染"
        },
        {
          step: "Itemized Nota & Stock Report",
          stepId: "Nota Pembelian & Laporan Stok",
          stepZh: "明细发票与库存图表",
          detail: "Itemized pricing slip aggregation and multi-colored average stock bar chart generation",
          detailId: "Rincian harga belanja nota pembelian dan pembuatan grafik batang stok rata-rata",
          detailZh: "单品明细发票汇总与多品类平均库存柱状图报表生成"
        }
      ]
    },
    {
      id: "screening-sdm",
      title: "Screening SDM Indonesia: Biographical Profiling & Character Evaluation Software",
      titleId: "Screening SDM Indonesia: Software Profiling Biografis & Evaluasi Karakter",
      titleZh: "Screening SDM Indonesia: 自动化候选人心理画像与高管报告评估系统 (C# WinForms)",
      tagline: "Proprietary C# Desktop Software Automating Candidate Evaluation & Executive HR Reports",
      taglineId: "Software Desktop C# Mandiri Otomasi Kalkulasi Evaluasi Kandidat & Laporan HR",
      taglineZh: "基于 C# WinForms 自研桌面评估软件，实现自动化人才画像与高管报告输出",
      year: "2014 – 2017",
      category: "software",
      role: "Software Developer & Assessment Specialist",
      roleId: "Pengembang Software C# & Spesialis Asesmen",
      roleZh: "C# 软件工程师与测评专家",
      client: "Screening SDM Indonesia",
      clientZh: "Screening SDM Indonesia (人力资源测评机构)",
      techStack: ["C# (.NET WinForms)", "Algorithmic Scoring", "HR Reporting", "Graphology", "Visual Studio"],
      description:
        "Engineered a custom C# Windows Forms utility that automated candidate character scoring across multiple profiling methodologies (Graphology, 4 Temperaments, Blood Types, Numerology). Replaced error-prone manual calculation worksheets, reducing executive client report preparation time from hours to minutes.",
      descriptionId:
        "Membangun aplikasi desktop C# Windows Forms mandiri yang mengotomasi skoring karakter kandidat dari berbagai metodologi profiling (Grafologi, 4 Temperamen, Golongan Darah, Numerologi). Menggantikan lembar hitung manual dan memangkas waktu penyusunan laporan klien eksekutif dari jam menjadi menit.",
      descriptionZh:
        "开发专用 C# Windows Forms 桌面分析工具，将多元测评模型（笔迹学、四种气质类型、血型分析、数字模型）的评分计算全流程自动化。彻底替代繁琐易错的手工计算表格，将高管汇报材料编译周期从数小时压缩至数分钟。",
      highlights: [
        "Developed proprietary C# desktop software automating biographical evaluation calculations.",
        "Replaced manual calculation worksheets with an automated software workflow.",
        "Gathered user requirements from practitioners to refine data input forms and reporting reliability."
      ],
      highlightsId: [
        "Membangun aplikasi desktop C# mandiri yang mengotomasi kalkulasi data evaluasi biografi.",
        "Menggantikan lembar kerja perhitungan manual dengan alur kerja software otomatis.",
        "Mengumpulkan kebutuhan praktisi asesmen untuk menyempurnakan formulir input dan keandalan laporan."
      ],
      highlightsZh: [
        "自主研发 C# 桌面软件，实现候选人履历与心理画像数据自动化计算。",
        "淘汰传统手工核算表格，大幅提升测评数据的计算精确度与效率。",
        "调研测评专家业务需求，优化数据录入交互表单与报告输出可靠性。"
      ],
      metrics: [
        { label: "Turnaround Time", labelId: "Efisiensi Waktu", labelZh: "交付周期优化", value: "Hours ➔ Minutes", valueId: "Jam ➔ Menit", valueZh: "数小时 ➔ 数分钟" },
        { label: "Calculation Error", labelId: "Akurasi Kalkulasi", labelZh: "计算误差率", value: "0% Mathematical Error", valueId: "0% Kesalahan Hitung", valueZh: "0% 数学计算误差" },
        { label: "Evaluation Methods", labelId: "Metode Profiling", labelZh: "融合测评模型", value: "4 Integrated Frameworks", valueId: "4 Kerangka Kerja Terintegrasi", valueZh: "4 大经典心理与命理测评体系" }
      ],
      images: [
        "/assets/projects/software/Untitled.webp",
        "/assets/projects/software/Untitled 1.webp",
        "/assets/projects/software/Report_Screening_November_2016_Page_1.webp",
        "/assets/projects/software/Report_Screening_November_2016_Page_2.webp",
        "/assets/projects/software/Report_Screening_November_2016_Page_3.webp"
      ],
      blueprintFlow: [
        {
          step: "Candidate Data Entry",
          stepId: "Input Data Kandidat",
          stepZh: "候选人多维数据录入",
          detail: "Structured biographical data and temperament input matrix",
          detailId: "Matriks data biografis dan parameter temperamen kandidat",
          detailZh: "结构化履历档案与气质类型参数矩阵"
        },
        {
          step: "C# Scoring Algorithm",
          stepId: "Algoritma Skoring C#",
          stepZh: "C# 确定性计分算法",
          detail: "Deterministic calculation across 4 profiling frameworks",
          detailId: "Kalkulasi deterministik 4 metodologi asesmen kepribadian",
          detailZh: "四大人才评估模型确定性加权矩阵计算"
        },
        {
          step: "Executive HR Report Generation",
          stepId: "Laporan HR Eksekutif",
          stepZh: "高管级HR诊断报告生成",
          detail: "Automated report formatting ready for executive review",
          detailId: "Penyusunan otomatis laporan komprehensif untuk klien HR",
          detailZh: "一键格式化排版生成高管决策评审报告"
        }
      ]
    }
  ],
  business: [
    flagshipProjects[2],
    {
      id: "hadiarwanaw-consulting-ops",
      title: "Hadi Arwana: Experimental Family Advisory & Digital Distribution",
      titleId: "Hadi Arwana: Eksperimen Penjenamaan Digital & Distribusi Konten",
      titleZh: "Hadi Arwana: 实验性家庭顾问品牌孵化与全渠道数字内容分发系统",
      tagline: "Experimental Multi-Channel Personal Branding, Social Distribution (@hadiarwanaw) & Private Client Funnels",
      taglineId: "Eksperimen Penjenamaan Personal Multi-Kanal, Distribusi Konten (@hadiarwanaw) & Corong Klien Privat",
      taglineZh: "为父母打造的实验性多渠道个人品牌孵化、全网内容分发 (@hadiarwanaw) 与私域咨询转化体系",
      year: "2024 – 2026",
      category: "business",
      role: "Systems Architect & Digital Operations Specialist",
      roleId: "Arsitek Sistem & Spesialis Operasional Digital",
      roleZh: "系统架构师与数字化运营专家",
      client: "Hadi Arwana (Family Digital Initiative)",
      clientZh: "Hadi Arwana (家庭数字化实验项目)",
      techStack: ["Personal Branding", "Multi-Platform Distribution", "Instagram", "TikTok", "Threads", "Facebook", "YouTube", "WhatsApp Funnel"],
      description:
        "Experimental personal branding and multi-channel content distribution initiative created for parents to explore digital advisory positioning, audience engagement, and consulting workflows. Standardized weekly short-form and long-form content distribution across 5 platforms (@hadiarwanaw on Instagram, TikTok, Threads, Facebook, and YouTube) while establishing automated intake funnels for high-trust executive inquiries via WhatsApp.",
      descriptionId:
        "Proyek eksperimental penjenamaan personal dan sistem distribusi konten digital multi-kanal yang dirancang untuk orang tua guna mengeksplorasi positioning konsultan digital, interaksi audiens, dan alur kerja konsultasi. Menstandarisasi ritme produksi dan publikasi konten mingguan lintas 5 platform (@hadiarwanaw di Instagram, TikTok, Threads, Facebook, dan YouTube) serta membangun corong intake privat via WhatsApp.",
      descriptionZh:
        "为父母量身打造的实验性个人品牌孵化与全网数字内容分发系统，探索数字化顾问定位、受众互动与咨询业务流程。在五大主流平台统一建立官方矩阵账号 (@hadiarwanaw 覆盖 Instagram、TikTok、Threads、Facebook 与 YouTube)，制定标准化周度内容分发节奏，并通过 WhatsApp 搭建高信任度私域咨询转化漏斗。",
      highlights: [
        "Multi-Platform Footprint: Launched synchronized content distribution across Instagram, TikTok, Threads, Facebook, and YouTube (@hadiarwanaw).",
        "Standardized weekly short-form video scripts, motivational graphics, and audience interaction workflows.",
        "Structured automated direct-response intake and private consultation booking funnels via WhatsApp direct chat.",
        "Maintained strict brand authority, authenticity, and professional ethics tailored for parent advisory services."
      ],
      highlightsId: [
        "Jangkauan Multi-Platform: Meluncurkan distribusi konten serentak di Instagram, TikTok, Threads, Facebook, dan YouTube (@hadiarwanaw).",
        "Menstandarisasi naskah video pendek mingguan, grafis motivasi, dan alur interaksi audiens.",
        "Membangun corong intake terstruktur dan pemesanan sesi konsultasi privat via WhatsApp direct chat.",
        "Menjaga integritas otoritas merek, keaslian konten, dan etika profesional untuk layanan konsultasi keluarga.",
      ],
      highlightsZh: [
        "全网多渠道矩阵：在 Instagram、TikTok、Threads、Facebook 与 YouTube 全面同步发布官方内容 (@hadiarwanaw)。",
        "规范化周度短视频脚本起草、图文金句视觉排版与跨平台互动运营流程。",
        "通过 WhatsApp 搭建结构化私域线索沉淀与一对一深度咨询预约转化漏斗。",
        "维护专业权威的品牌调性，确保家庭顾问咨询服务的内容真实性与高信任度。"
      ],
      metrics: [
        { label: "Social Platforms", labelId: "Platform Sosial", labelZh: "覆盖社交平台", value: "5 Active Channels", valueId: "5 Kanal Aktif", valueZh: "5 大主流社媒渠道" },
        { label: "Unified Handle", labelId: "Username Resmi", labelZh: "官方统一账号", value: "@hadiarwanaw Brand", valueId: "Merek @hadiarwanaw", valueZh: "@hadiarwanaw 官方统一品牌" },
        { label: "Inquiry Channel", labelId: "Saluran Konsultasi", labelZh: "咨询直达通道", value: "WhatsApp Direct Funnel", valueId: "Funnel WhatsApp Langsung", valueZh: "WhatsApp 意向直达获客漏斗" }
      ],
      liveUrl: "https://www.instagram.com/hadiarwanaw/",
      demoLinks: [
        { label: "Instagram (@hadiarwanaw)", labelId: "Instagram (@hadiarwanaw)", url: "https://www.instagram.com/hadiarwanaw/" },
        { label: "TikTok (@hadiarwanaw)", labelId: "TikTok (@hadiarwanaw)", url: "https://www.tiktok.com/@hadiarwanaw" },
        { label: "Threads (@hadiarwanaw)", labelId: "Threads (@hadiarwanaw)", url: "https://www.threads.net/@hadiarwanaw" },
        { label: "Facebook (@hadiarwanaw)", labelId: "Facebook (@hadiarwanaw)", url: "https://www.facebook.com/hadiarwanaw" },
        { label: "YouTube (@hadiarwanaw)", labelId: "YouTube (@hadiarwanaw)", url: "https://www.youtube.com/@hadiarwanaw" }
      ]
    },
    {
      id: "gudang-buah-beku-ops",
      title: "PT. Karya Buah Tropis (Gudang Buah Beku)",
      titleId: "PT. Karya Buah Tropis (Gudang Buah Beku)",
      titleZh: "PT. Karya Buah Tropis (Gudang Buah Beku 供应链与商业运营)",
      tagline: "End-to-End Cold Chain (-18°C) Logistics, 90+ SKU B2B Digital Catalog & Stock Invoicing",
      taglineId: "Pencatatan Stok, Faktur Penjualan, Katalog Digital 90+ SKU & Logistik Dingin (-18°C)",
      taglineZh: "90+冷冻水果SKU进销存台账、B2B数字产品目录与-18°C低温冷链物流交付体系",
      year: "2020 – Present",
      category: "business",
      role: "Director — Operations & Digital Systems",
      roleId: "Direktur — Operasional & Sistem Digital",
      roleZh: "运营总监与数字化系统负责人",
      client: "PT. Karya Buah Tropis (Gudang Buah Beku Brand Line)",
      clientZh: "PT. Karya Buah Tropis (Gudang Buah Beku 品牌线)",
      techStack: ["Operations Logistics", "90+ SKU B2B Catalog", "Cold Chain (-18°C)", "Stock Invoicing", "SOP Drafting", "Laravel", "MySQL"],
      description:
        "Comprehensive supply chain operations, stock reconciliation, and sales invoicing workflows supporting daily commercial frozen fruit distribution under PT. Karya Buah Tropis. The brand originated as Gudang Buah Beku prior to corporate legalization and remains the primary popular trade name for B2B operations. Developed and maintained the digital B2B catalog covering 90+ SKUs (fruit chunks, vacuum-sealed slices, whole fruits in standing pouches, and diced cuts like Nangka Dadu 12x12mm), securing 5 recurring enterprise commercial clients within 3 months of launch across Tokopedia, GrabFood, and GoFood.",
      descriptionId:
        "Operasional rantai pasok terpadu, rekonsiliasi stok harian, dan alur faktur penjualan untuk mendukung distribusi buah beku komersial di bawah naungan PT. Karya Buah Tropis. Brand ini bermula sebagai Gudang Buah Beku sebelum legalisasi berbadan hukum PT dan tetap menjadi nama dagang populer utama dalam operasional B2B. Membangun katalog digital 90+ SKU (potongan buah, irisan vakum, buah utuh standing pouch, dan potongan dadu nangka 12x12mm) yang berhasil memenangkan 5 klien komersial tetap dalam kurun 3 bulan pasca rilis di Tokopedia, GrabFood, dan GoFood.",
      descriptionZh:
        "全面统筹 PT. Karya Buah Tropis 旗下冷冻水果全链路供应链、进销存台账与销售发票开具。该业务在公司正式法律注册前以 Gudang Buah Beku 品牌创立，并在注册为 PT. Karya Buah Tropis 后继续沿用 Gudang Buah Beku 作为主流商用品牌。自主开发并维护收录 90+ 种冷冻水果（冷冻果块、真空果片、站立袋整果及 12x12mm 菠萝蜜丁等）的数字产品目录，上线 3 个月内成功签约 5 家长期商业合作大客户，打通 Tokopedia、GrabFood 与 GoFood 等全渠道分销网络。",
      highlights: [
        "Brand Evolution: Originated as Gudang Buah Beku before formal incorporation as PT. Karya Buah Tropis.",
        "Managed end-to-end stock recording, sales invoicing, and daily frozen order dispatch workflows.",
        "Developed 90+ SKU digital catalog securing 5 regular commercial clients within 3 months.",
        "Translated operational logistics into standardized cold-chain (-18°C) SOPs and spreadsheet tracking templates.",
        "Integrated multi-channel distribution across Instagram, Tokopedia, GrabFood, and GoFood."
      ],
      highlightsId: [
        "Evolusi Brand: Bermula sebagai Gudang Buah Beku sebelum resmi berbadan hukum PT. Karya Buah Tropis.",
        "Mengelola pencatatan stok, faktur penjualan, dan alur pengiriman pesanan beku harian.",
        "Membangun katalog digital 90+ SKU yang memenangkan 5 klien komersial tetap dalam 3 bulan.",
        "Menyusun SOP logistik rantai dingin (-18°C) dan templat pelacakan spreadsheet terstandarisasi.",
        "Mengintegrasikan distribusi multi-kanal di Instagram, Tokopedia, GrabFood, dan GoFood."
      ],
      highlightsZh: [
        "品牌演进：起源于公司正规化注册前创立的 Gudang Buah Beku 商业品牌，合规升级为 PT. Karya Buah Tropis。",
        "统筹进销存台账、销售发票开具及每日冷链订单调度履约全流程。",
        "构建90+品类数字产品目录，产品上线3个月内成功锁定5家长期商业大客户。",
        "制定规范化-18°C冷链物流交付SOP与多维度库存跟踪台账。",
        "打通 Instagram、Tokopedia、GrabFood 与 GoFood 全渠道分销体系。"
      ],
      metrics: [
        { label: "Catalog Scope", labelId: "Katalog Produk", labelZh: "产品品类覆盖", value: "90+ Tropical Fruit SKUs", valueId: "90+ SKU Buah Tropis", valueZh: "90+ 款热带冷冻水果 SKU" },
        { label: "Commercial Growth", labelId: "Pertumbuhan Klien", labelZh: "商业客户增长", value: "5 Retainer Clients / 3 Mos", valueId: "5 Klien Tetap / 3 Bln", valueZh: "3个月落地5家核心大客户" },
        { label: "Storage Standard", labelId: "Standar Suhu", labelZh: "冷链温控标准", value: "-18°C Cold Chain Standard", valueId: "Standar Rantai Dingin -18°C", valueZh: "-18°C 恒温工业冷链标准" }
      ],
      liveUrl: "https://www.instagram.com/gudangbuahbeku/",
      githubUrl: "https://github.com/JAW12/KP_KARYA_BUAH_TROPIS",
      demoLinks: [
        { label: "GitHub Repository (KP)", labelId: "Repositori GitHub (KP)", url: "https://github.com/JAW12/KP_KARYA_BUAH_TROPIS" },
        { label: "Instagram Official", labelId: "Instagram Resmi", url: "https://www.instagram.com/gudangbuahbeku/" },
        { label: "Tokopedia Storefront", labelId: "Toko Tokopedia", url: "https://www.tokopedia.com/durmedbuahbeku" },
        { label: "Product Video Showcase", labelId: "Video Produk Pilihan", url: "https://youtu.be/rWxuPuyaEYo" },
        { label: "YouTube Channel", labelId: "Kanal YouTube", url: "https://www.youtube.com/@gudangbuahbeku1506/videos" }
      ],
      images: ["/assets/projects/branding/gbb-logo.webp", "/assets/projects/branding/gbb-banner.webp"],
      blueprintFlow: [
        {
          step: "Stock & Invoicing Operations",
          stepId: "Pencatatan Stok & Faktur Penjualan",
          stepZh: "进销存台账与发票开具",
          detail: "Daily inventory reconciliation, customer order billing, and commercial pricing tiers",
          detailId: "Rekonsiliasi inventaris harian, faktur pesanan pelanggan, dan tier harga komersial",
          detailZh: "每日库存对账、客户订单发票开具与多层级商业批发定价"
        },
        {
          step: "90+ SKU Digital Product Catalog",
          stepId: "Katalog Produk Digital 90+ SKU",
          stepZh: "90+品类数字产品门户",
          detail: "Responsive website showcasing frozen fruit specs, chunk sizes, and storage guidelines",
          detailId: "Website responsif menampilkan spesifikasi buah beku, ukuran potongan, dan panduan penyimpanan",
          detailZh: "响应式产品门户，详尽展示果品规格、切块尺寸及冷冻储存指引"
        },
        {
          step: "Cold Chain Logistics & Channel Rollout",
          stepId: "Logistik Rantai Dingin & Kanal Omnichannel",
          stepZh: "-18°C冷链履约与全渠道分销",
          detail: "-18°C temperature preservation during dispatch across Tokopedia, GrabFood, and GoFood",
          detailId: "Penjagaan suhu beku -18°C saat pengiriman ke Tokopedia, GrabFood, dan GoFood",
          detailZh: "保障仓储与配送全程稳定处于-18°C低温，打通全渠道销售"
        }
      ]
    },
    {
      id: "enevti-partnerships",
      title: "PT Kolaborasi Kerja Indonesia (Enevti)",
      titleId: "PT Kolaborasi Kerja Indonesia (Enevti)",
      tagline: "Creator Data Profiling, Structured Partner Database & Brand Ambassador Onboarding",
      taglineId: "Riset Calon Mitra, Profiling Kreator & Onboarding 15+ Brand Ambassador",
      year: "2022",
      category: "business",
      role: "Partnerships Specialist Intern",
      roleId: "Partnerships Specialist Intern",
      client: "Enevti (Web3 Startup)",
      techStack: ["Partner Profiling", "Agile/Scrum", "Ambassador Onboarding", "Community AMA", "Briefing SOPs"],
      description:
        "Conducted thorough prospect research and creator data profiling to build an organized partner database, successfully onboarding 15+ brand ambassadors. Collaborated within an Agile/Scrum cross-functional team and supported recurring sprint activities and community AMA sessions.",
      descriptionId:
        "Melakukan riset calon mitra dan profiling kreator secara mendalam untuk menyusun database mitra terstruktur, berhasil meng-onboard 15+ brand ambassador. Berkolaborasi dalam tim lintas fungsi Agile/Scrum serta mendukung sesi AMA komunitas.",
      highlights: [
        "Conducted prospect research and data profiling, onboarding 15+ brand ambassadors.",
        "Collaborated within an Agile/Scrum cross-functional team supporting sprint activities.",
        "Streamlined ambassador onboarding workflow using standardized briefing documentation."
      ],
      highlightsId: [
        "Melakukan riset prospek dan profiling data, meng-onboard 15+ brand ambassador.",
        "Berkolaborasi dalam tim Agile/Scrum untuk mendukung aktivitas sprint.",
        "Menyederhanakan alur onboarding duta merek menggunakan dokumentasi panduan terstandarisasi."
      ],
      metrics: [
        { label: "Ambassadors Onboarded", labelId: "Mitra Ter-onboard", labelZh: "签约品牌大使", value: "15+ Brand Ambassadors", valueId: "15+ Duta Merek", valueZh: "15+ 位行业知名品牌大使" },
        { label: "Workflow Sprint", labelId: "Metodologi Kerja", labelZh: "协作研发流程", value: "Agile / Scrum Framework", valueId: "Kerangka Agile / Scrum", valueZh: "Agile / Scrum 敏捷协作流程" },
        { label: "Communication", labelId: "Standar Komunikasi", labelZh: "对接交付标准", value: "Standardized Strategic Briefs", valueId: "Brief Strategis Terstandarisasi", valueZh: "标准化战略宣发指南" }
      ],
      images: [
        "/assets/projects/enevti/Enevti.webp"
      ]
    },
    {
      id: "the-fresh-startup",
      title: "The Fresh: Farm-to-Door E-Grocery & Fruit Parcel Startup",
      titleId: "The Fresh: Startup E-Grocery Buah Segar & Parsel Langsung dari Petani",
      titleZh: "The Fresh: 产地直达生鲜电商与定制水果礼品创业平台",
      tagline: "Farm-to-Door E-Grocery Platform, 8-Screen Mobile App UX Wireframes, Brand Identity & Commercial Ads",
      taglineId: "Platform E-Grocery Buah Segar, Wireframe UI/UX Mobile 8 Layar, Branding & Iklan Komersial",
      taglineZh: "农田直连餐桌生鲜电商、8屏移动端 UI/UX 交互架构、品牌视觉体系与商业广告大片",
      year: "2016",
      category: "business",
      role: "Founder & Chief Executive Officer (CEO), Lead UI/UX & Creative Director",
      roleId: "Founder & Chief Executive Officer (CEO), Arsitek Utama UI/UX & Pengarah Kreatif",
      roleZh: "创始人兼首席执行官 (CEO)、UI/UX 主设计师与创意总监",
      client: "The Fresh Startup Venture (Surabaya)",
      clientZh: "The Fresh 生鲜电商初创公司 (泗水)",
      techStack: ["Startup Strategy", "8-Screen Mobile UX", "Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "HTML/CSS/JS", "PHP", "Java Android Native", "Supply Chain Logistics"],
      description:
        "Visionary farm-to-table e-grocery startup venture founded and led by Jem during high school (age 15–16) in early 2016—years ahead of Indonesian grocery delivery booms. The platform was conceived to eliminate supply chain middlemen by connecting urban households directly with local farmers and traditional markets for fresh produce and curated corporate fruit gift parcels. As CEO, Jem formulated the strategic business model, guided the cross-functional web/mobile development team, drafted an end-to-end 8-screen mobile app UI/UX flow (Welcome, Login, Registration, OTP SMS Verification, 3-Slide Vision/Mission Onboarding, and Home Dashboard with Category Grids), and produced high-definition video advertising campaigns on YouTube (@thefresh5198).",
      descriptionId:
        "Inisiatif startup agritech dan e-grocery visioner yang didirikan dan dipimpin langsung oleh Jem di masa SMA (usia 15–16 tahun) pada awal 2016—jauh mendahului maraknya platform e-grocery di Indonesia. Platform ini bertujuan memotong perantara rantai pasok dengan menghubungkan konsumen rumah tangga langsung ke petani lokal dan pasar tradisional untuk buah/sayur segar berkualitas, serta menyediakan pemesanan parsel buah kustom. Sebagai CEO, Jem merumuskan model bisnis, memimpin tim pengembang web/mobile, merancang alur UI/UX mobile 8 layar lengkap (Welcome, Login, Registrasi, Verifikasi SMS OTP, Onboarding Visi-Misi 3 Slide, dan Dashboard Belanja Kategori), serta memproduksi video iklan komersial di YouTube (@thefresh5198).",
      descriptionZh:
        "由 Jem 在高中时期（15–16岁，2016年初）极具前瞻性独立构想并作为 CEO 统筹创立的生鲜电商初创项目——远早于印尼同类电商平台的爆发期。平台旨在砍掉中间商链条，将城市家庭与本地果农/传统批发市场直接连接，提供高品质生鲜瓜果与企业定制水果礼盒。作为 CEO，Jem 全面统筹商业模式设计、跨职能开发团队管理、全套 8 屏移动端 UI/UX 交互架构原型绘制（涵盖欢迎页、登录、注册、短信验证码验证、3 屏图文使命指引与主页分类商城），并亲自执导拍摄了官方商业广告大片 (YouTube: @thefresh5198)。",
      highlights: [
        "Youth Startup Leadership: Formulated end-to-end agritech startup roadmap, value proposition, and cross-functional team management at age 15–16.",
        "Complete 8-Screen Mobile App UX Flow: Architected onboarding, OTP verification, direct farm sourcing mission slides, and shopping category dashboards.",
        "Integrated Commercial Media Suite: Designed official vector canopy logo, 3.5MB high-res marketing posters, and cinematic promotional advertisements.",
        "Ecosystem Primordial Seed: Served as Jem's very first agricultural venture, laying the foundational supply chain expertise that later evolved into Gudang Buah Beku and PT. Karya Buah Tropis."
      ],
      highlightsId: [
        "Kepemimpinan Startup Muda: Merumuskan roadmap bisnis agritech, proposisi nilai, dan memimpin tim lintas fungsi di usia 15–16 tahun.",
        "Alur UX Mobile 8 Layar Utuh: Merancang layar onboarding, verifikasi OTP, slide misi petani lokal, dan dashboard kategori belanja.",
        "Materi Pemasaran Komersial Terpadu: Mendesain logo kanopi buah vektor, poster promosi resolusi tinggi 3.5MB, dan video iklan komersial.",
        "Benih Primordial Rantai Pasok: Menjadi proyek agritech pertama Jem yang mengasah pemahaman logistik buah, menjadi fondasi bagi Gudang Buah Beku dan PT. Karya Buah Tropis."
      ],
      highlightsZh: [
        "少年 CEO 商业领导力：在 15–16 岁全面主导农产品电商商业模式构想、价值主张提炼与跨职能团队协作。",
        "完整 8 屏移动应用交互架构：独立绘制注册验证、短信 OTP、农田直供图文科普与商城分类主页原型。",
        "全套商业多媒体物料：设计绿色天篷水果矢量 Logo、3.5MB 超清定制礼盒海报并拍摄制作商业宣传大片。",
        "生鲜供应链原点工程：作为首个生鲜科技创业项目，为后续创办 Gudang Buah Beku 及深耕 PT. Karya Buah Tropis 积累了核心供应链经验。"
      ],
      metrics: [
        { label: "Startup Model", labelId: "Model Startup", labelZh: "商业模式", value: "Farm-to-Door E-Grocery", valueId: "E-Grocery Dari Kebun", valueZh: "农场直达家庭生鲜电商" },
        { label: "Mobile UX Flow", labelId: "Arsitektur Mobile", labelZh: "移动交互原型", value: "8 Complete High-Fi Screens", valueId: "8 Layar Lengkap High-Fi", valueZh: "8 个完整高保真移动交互界面" },
        { label: "Executive Role", labelId: "Peran Eksekutif", labelZh: "主导角色", value: "Founder & CEO (Age 15)", valueId: "Founder & CEO (Usia 15)", valueZh: "创始人兼 CEO (15岁)" },
        { label: "Design Quality", labelId: "Standar Visual", labelZh: "视觉标准", value: "High-Res Posters (3.5MB+)", valueId: "Poster High-Res (3.5MB+)", valueZh: "3.5MB+ 超高清印刷级海报" }
      ],
      liveUrl: "https://www.youtube.com/@thefresh5198",
      demoLinks: [
        { label: "YouTube Official (@thefresh5198)", labelId: "YouTube Resmi (@thefresh5198)", url: "https://www.youtube.com/@thefresh5198" }
      ],
      images: [
        "/assets/projects/branding/the-fresh-logo.webp",
        "/assets/projects/branding/the-fresh-poster.webp",
        "/assets/projects/branding/the-fresh-mockup.webp"
      ],
      blueprintFlow: [
        {
          step: "Strategic Vision & Value Proposition",
          stepId: "Visi Strategis & Proposisi Nilai",
          detail: "Formulated the farm-to-table direct sourcing model, eliminating multi-tier markups and guaranteeing unpreserved freshness.",
          detailId: "Merumuskan model pasokan langsung dari perkebunan untuk memotong perantara dan menjamin kesegaran alami."
        },
        {
          step: "8-Screen Mobile App Architecture",
          stepId: "Arsitektur Alur Mobile 8 Layar",
          detail: "Architected user registration, SMS OTP validation, vision/mission educational slider, and category catalog layout.",
          detailId: "Merancang antarmuka registrasi pengguna, verifikasi OTP, slider edukasi misi petani, dan katalog belanja produk."
        },
        {
          step: "Brand Identity & Commercial Ad Production",
          stepId: "Desain Branding & Iklan Komersial",
          detail: "Designed the green canopy vector logo, 3.5MB high-res parcel posters, and edited commercial video ads.",
          detailId: "Mendesain logo kanopi hijau vektor, poster promosi parsel 3.5MB, dan menyunting video iklan komersial."
        },
        {
          step: "Supply Logistics & Corporate Hampers",
          stepId: "Logistik Pasokan & Parsel Korporat",
          detail: "Coordinated direct farm procurement, fruit grading, and gift basket packaging for retail and corporate procurement.",
          detailId: "Mengoordinasikan pengadaan langsung dari petani, penyortiran buah, dan perakitan parsel untuk pesanan korporat."
        }
      ]
    },
    {
      id: "law-protection-ops",
      title: "Law Protection: Legal Consultation Firm & Document Architecture",
      titleId: "Law Protection: Firma Konsultasi Hukum & Arsitektur Dokumen Kontrak",
      titleZh: "Law Protection: 法律咨询机构名片视觉设计与商业合同文书架构",
      tagline: "Corporate Business Card Branding, Commercial Contract Drafting & Professional Client Correspondence",
      taglineId: "Branding Kartu Nama Korporat, Penyusunan Draf Perjanjian Bisnis & Korespondensi Klien Formal",
      taglineZh: "律所商务名片视觉设计、商业合同起草审核与规范化客户沟通体系",
      year: "2012",
      category: "business",
      role: "Legal Operations Assistant & Brand Designer",
      roleId: "Asisten Operasional Hukum & Desainer Merek",
      roleZh: "法律业务助理、品牌设计师兼合同初审员",
      client: "Law Protection Legal Firm (Surabaya)",
      clientZh: "Law Protection 泗水法律咨询事务所 (家族企业)",
      techStack: ["CorelDRAW", "Legal Contract Drafting", "Proofreading Precision", "Formal Email Etiquette", "Business Administration"],
      description:
        "Comprehensive operational workflow support and executive visual branding completed in June 2012 for Law Protection—a professional legal consultation and advocacy firm established by Jem's father (Hadi Arwana) to assist individuals and growing businesses in navigating complex legal matters and securing statutory rights. Jem served across multiple operational functions: designing executive corporate business cards featuring the Scales of Justice and sword of law, assisting in drafting and proofreading binding commercial agreements and collaboration contracts to ensure legal clarity, and managing formal email correspondence with corporate and individual clients.",
      descriptionId:
        "Dukungan alur operasional komprehensif dan desain identitas visual eksekutif yang diselesaikan pada Juni 2012 untuk Law Protection—firma advokasi dan konsultasi hukum profesional yang didirikan oleh ayah Jem (Hadi Arwana) guna mendampingi individu dan pelaku usaha dalam menavigasi persoalan hukum serta memastikan perlindungan hak perdata/pidana. Jem menjalankan peran ganda: merancang kartu nama bisnis resmi bernuansa merah-emas dengan simbol timbangan keadilan, membantu penyusunan dan penelaahan draf kontrak kerja sama komersial untuk memastikan ketepatan pasal tanpa celah hukum, serta mengelola korespondensi email formal dengan klien.",
      descriptionZh:
        "于 2012 年 6 月为 Jem 父亲（Hadi Arwana）创办的 Law Protection 法律咨询与事务律所操刀的品牌视觉与法律文书支持全案。律所专注于为个人与成长型企业提供民商事法律咨询、权益维护及合规指引。Jem 全流程参与业务支持：使用 CorelDRAW 操刀设计融合正义之秤与法治利剑的红金商务高管名片、协助起草与严谨校对商业合作合同、保密协议及服务条款，杜绝法律漏洞，并建立起专业的客户电子邮件沟通与案件归档流程。",
      highlights: [
        "Executive Corporate Branding: Designed gold-and-red business cards featuring the Scales of Justice symbolizing authority, integrity, and objectivity.",
        "Precision Legal Drafting & Review: Assisted in preparing and proofreading commercial contracts and collaboration agreements to eliminate ambiguities.",
        "Professional Client Correspondence: Managed formal email communication channels to gather client information and provide regular case status updates.",
        "Formative Legal Literacy Milestone: Early immersion into commercial contract mechanics and law at age 12, fostering deep analytical precision and integrity."
      ],
      highlightsId: [
        "Branding Korporat Eksekutif: Merancang kartu nama resmi bernuansa merah-emas dengan simbol timbangan keadilan yang melambangkan wibawa dan integritas.",
        "Penyusunan & Penelaahan Draf Hukum: Membantu menyiapkan dan memeriksa draf kontrak bisnis serta perjanjian kerja sama bebas celah hukum.",
        "Korespondensi Klien Profesional: Mengelola saluran komunikasi email formal untuk melengkapi berkas dan memberikan pembaruan status draf.",
        "Tonggak Pemahaman Hukum Awal: Pengenalan dini pada dunia kontrak komersial dan hukum sejak usia 12 tahun yang menumbuhkan ketelitian analitis tinggi."
      ],
      highlightsZh: [
        "高管商务名片视觉设计：设计红金配色的正义之秤与法治之剑徽标名片，彰显严谨、权威与职业公信力。",
        "严谨商业法律文书起草：协助初审并校对商业合作协议、合伙章程与委托合同，消除法律歧义漏洞。",
        "规范化客户商务函件沟通：管理正式电子邮件渠道，跟进客户资料收集、合同修改进度与行政答疑。",
        "青少年法治逻辑启蒙原点：12 岁早期接触商业合同与民事法律条款，沉淀了严密审慎的契约精神与分析思维。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode Proyek", labelZh: "项目周期", value: "June 2012", valueId: "Juni 2012", valueZh: "2012年6月" },
        { label: "Document Quality", labelId: "Standar Dokumen", labelZh: "文档质量标准", value: "100% Typo-Free Proofing", valueId: "100% Bebas Tipografi", valueZh: "100% 严谨零错字校对" },
        { label: "Brand Identity", labelId: "Identitas Merek", labelZh: "视觉形象产出", value: "Executive Business Cards", valueId: "Kartu Nama Eksekutif", valueZh: "高端商务行政名片套件" },
        { label: "Domain", labelId: "Bidang Praktik", labelZh: "核心法律领域", value: "Commercial Agreements & IP", valueId: "Perjanjian Komersial & HKI", valueZh: "商业合同与知识产权" }
      ],
      images: [
        "/assets/projects/design/law-protection-card.webp"
      ],
      blueprintFlow: [
        {
          step: "Executive Brand Identity & Card Design",
          stepId: "Identitas Merek Eksekutif & Kartu Nama",
          detail: "Crafted corporate business cards with the Scales of Justice and sword of law for executive networking.",
          detailId: "Merancang kartu nama bisnis dengan simbol timbangan keadilan dan pedang hukum untuk kredibilitas formal."
        },
        {
          step: "Commercial Agreement Drafting & Review",
          stepId: "Penyusunan & Penelaahan Kontrak Bisnis",
          detail: "Assisted in drafting binding commercial contracts, reviewing standard clauses, and eliminating loopholes.",
          detailId: "Membantu menyusun draf kontrak bisnis, menelaah klausul standar, dan meminimalisir celah ambiguitas hukum."
        },
        {
          step: "Professional Client Email Correspondence",
          stepId: "Korespondensi Email Klien Profesional",
          detail: "Managed formal communications to request legal files, send contract drafts, and provide prompt updates.",
          detailId: "Mengelola komunikasi email formal untuk meminta berkas klien, mengirimkan draf revisi, dan memberikan update."
        }
      ]
    }
  ],
  data: [
    flagshipProjects[3],
    {
      id: "personal-notion-templates",
      title: "Universe OS: Personal Notion Life Architecture & Trading Systems",
      titleId: "Universe OS: Arsitektur Produktivitas Personal & Jurnal Trading Notion",
      titleZh: "Universe OS: Notion 个人全景生活架构系统与量化交易日志模板矩阵",
      tagline: "Multi-Generation Notion OS (V1/V2/V3), Knowing Myself & Ikigai Engine, Voice Manifestations, 4-Level Goal Cascading & Trading Journal",
      taglineId: "Arsitektur Hidup Notion Multi-Generasi (V1/V2/V3), Mesin Knowing Myself & Ikigai, Manifestasi Audio, Cascading Target & Jurnal Trading",
      taglineZh: "多代际进化 Notion 个人操作系统 (V1/V2/V3)、自我探索与 Ikigai 心理矩阵、有声愿景显化、四级目标分解体系与量化交易日志",
      year: "2022 – 2025",
      category: "data",
      role: "System Architect, Process Designer & Workflow Optimization Specialist",
      roleId: "Arsitek Sistem, Desainer Proses & Spesialis Optimalisasi Alur Kerja",
      roleZh: "系统架构师、流程设计师与个人效能优化专家",
      client: "Personal Knowledge Management & Public Community (Notion)",
      clientZh: "个人第二大脑知识管理系统与 Notion 开源社区",
      techStack: ["Notion Database Architecture", "System Architecture", "Ikigai Framework", "Personal SWOT", "Goal Cascading Framework", "Time-Boxing Protocols", "Eisenhower Matrix", "Cashflow Engine", "Trading Journal", "Risk-Reward Calculator"],
      description:
        "A multi-generational life operating system and productivity architecture engineered in Notion across Universe V1, V2, and V3 alongside an institutional Crypto Trading Journal. Features an Ikigai self-discovery matrix, multimedia voice manifestations, 4-level goal cascading (30th Milestone ➔ Annual ➔ Sprints), quantitative daily time-boxing, dedicated cashflow pipelines with monthly source archives, strategy attribution (Breakout, EMA Cross, Supertrend, Squeeze), and dynamic risk-reward calculators.",
      descriptionId:
        "Sistem operasi produktivitas dan manajemen hidup multi-generasi di Notion (Universe V1, V2, dan V3) serta Jurnal Trading Crypto institusional. Menghadirkan matriks self-discovery Ikigai, manifestasi audio suara AI & rekaman mandiri, kerangka target 4 tingkat (Usia 30 ➔ Tahunan ➔ Sprint), time-boxing harian, pembukuan arus kas dengan arsip bulanan, atribusi strategi (Breakout, EMA Cross, Supertrend, Squeeze), serta kalkulator risiko dan target dinamis.",
      descriptionZh:
        "基于 Notion 深度构建的多代际个人全景操作系统（Universe V1、V2 与 V3）及机构级加密量化交易日志系统。创新融合 Ikigai 自我探索矩阵、原声与AI双轨愿景显化、四级目标分解体系（30岁愿景 ➔ 年度目标 ➔ 敏捷冲刺）、量化每日时间块调度、收支现金流月度归档机制、经典策略归因分析（突破、均线金叉、超级趋势、挤压动能）与动态止盈止损风险控制计算器。",
      highlights: [
        "Multi-Generation Notion OS Evolution: Iteratively engineered Universe V1, V2, and V3 with synchronized database relations, rollups, and formula engines.",
        "Institutional Crypto Trading Journal: Built 6-view execution pipelines (Overview, Active, Closed, Wins, Losses, Timeline) with entry/exit pricing, volume, fees, and net realized PnL calculations.",
        "Strategy Attribution & Risk Management: Cataloged strategies (Breakout, EMA Golden Cross, Supertrend ATR, Squeeze Momentum) computing win-rates, target/stop-loss prices, and TradingView chart archives.",
        "Self-Discovery & Ikigai Psychological Matrix: Embedded existential inquiry, legacy eulogy reflections, personal SWOT analysis, and 4-quadrant Ikigai intersections.",
        "Multimedia Manifestation Engine: Structured dual-view vision board galleries, AI and self-recorded voice manifestation tracks, bucket lists, and multi-decade milestone cascading.",
        "4-Level Goal Cascading Framework (Universe V3): Structured long-term vision from 30th milestones into annual, quarterly, and weekly actionable sprints.",
        "Quantitative Daily Time-Boxing Engine: Calculated weekly working and productive hours capacity with Peak/Creative/Finishing color-coding.",
        "Dedicated Cashflow & Live Portfolio Tracker: Architected separate income and expense tracking with daily/monthly views, monthly source archives, and live token valuation formulas.",
        "Published verified live public Notion templates used for personal life management and community empowerment."
      ],
      highlightsId: [
        "Evolusi Life OS Notion Multi-Generasi: Mengembangkan Universe V1, V2, dan V3 dengan relasi database, rollup, dan mesin formula terpadu.",
        "Jurnal Trading Crypto Terstruktur: Membangun pipeline eksekusi 6-view (Overview, Active, Closed, Wins, Losses, Timeline) dengan harga entry/exit, volume, fee, dan kalkulasi PnL bersih.",
        "Atribusi Strategi & Manajemen Risiko: Mengatalogkan strategi (Breakout, EMA Cross, Supertrend ATR, Squeeze Momentum) dengan kalkulasi win-rate, harga target/stop-loss, dan arsip grafik TradingView.",
        "Matriks Self-Discovery & Ikigai Psikologis: Menyematkan penyelidikan eksistensial, refleksi eulogi warisan hidup, analisis SWOT personal, dan persimpangan 4 kuadran Ikigai.",
        "Mesin Manifestasi Multimedia: Galeri vision board dual-view, trek audio manifestasi suara AI & mandiri, bucket list, dan cascading target multi-dekade.",
        "Kerangka Cascading Target 4 Tingkat (Universe V3): Menstrukturkan target jangka panjang dari usia 30 ke dalam sprint tahunan, kuartalan, dan mingguan.",
        "Mesin Time-Boxing Kuantitatif: Mengkalkulasi kapasitas jam kerja dan jam produktif mingguan dengan kode warna Peak/Kreatif/Finishing.",
        "Pembukuan Arus Kas & Valuasi Portofolio: Arsitektur pencatatan pemasukan dan pengeluaran terpisah dengan filter harian/bulanan, arsip bulanan, dan formula valuasi aset token.",
        "Mempublikasikan templat Notion publik terverifikasi untuk manajemen hidup mandiri dan pemberdayaan komunitas."
      ],
      highlightsZh: [
        "多代际 Notion Life OS 演进迭代：历经 Universe V1、V2 与 V3 三代系统迭代，打通数据库深度关联、Rollup 计算与公式自动化引擎。",
        "机构级量化交易日志体系：搭建包含 Overview、Active、Closed、Wins、Losses 与 Timeline 六重视角的交易执行流水线，精准计算入场/离场点位、手续费及净盈亏公式。",
        "策略归因分析与严密风控计算：规范化管理突破、均线金叉、超级趋势 ATR 与挤压动能等经典策略，自动化核算胜率、动态止盈止损点位并归档 TradingView K线复盘图表。",
        "自我探索与心理对齐矩阵：内置存在主义探索、墓志铭追思会遗志反思、个人 SWOT 矩阵分析以及四象限 Ikigai 人生交汇点测算体系。",
        "多媒体显化引擎：构建双重视角愿景看板画廊、AI与自录原声双轨有声显化叙事音频、心愿清单以及跨越30岁与40岁的多代际里程碑分解。",
        "四级目标分解体系 (Universe V3)：将30岁终极人生愿景科学拆解为年度、季度与每周敏捷冲刺大目标。",
        "量化每日时间块调度引擎：精准核算每周工作与高效产出工时比例，配备三色认知专注力分类。",
        "独立收支现金流与实时资产组合估值：独立搭建收入与支出数据库、提供今日/月度多维视图、月度归档机制与基于公式的加密资产估值模型。",
        "发布官方开源共享 Notion 模板，赋能个人第二大脑搭建与高效自律生活管理。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode", labelZh: "项目周期", value: "2022 – 2025", valueId: "2022 – 2025", valueZh: "2022 – 2025" },
        { label: "System Generations", labelId: "Generasi Sistem", labelZh: "系统演进代际", value: "Universe V1, V2, V3", valueId: "Universe V1, V2, V3", valueZh: "Universe V1, V2, V3 三代迭代" },
        { label: "Core Modules", labelId: "Modul Utama", labelZh: "核心架构模块", value: "Journal, Ikigai & Finance", valueId: "Jurnal, Ikigai & Finansial", valueZh: "日程管理 · Ikigai · 个人财务" },
        { label: "Public Releases", labelId: "Template Publik", labelZh: "公开发布版本", value: "Live Notion Templates", valueId: "Template Notion Publik", valueZh: "全套 Notion 公开模板" }
      ],
      liveUrl: "https://jem-angkasa.notion.site/Universe-V3-Template-19b1add6b60c80cfa828ff0237bed248",
      demoLinks: [
        {
          label: "Universe V3 Template",
          labelId: "Template Universe V3",
          labelZh: "Universe V3 模板",
          url: "https://jem-angkasa.notion.site/Universe-V3-Template-19b1add6b60c80cfa828ff0237bed248"
        },
        {
          label: "Universe V2 Template",
          labelId: "Template Universe V2",
          labelZh: "Universe V2 模板",
          url: "https://jem-angkasa.notion.site/Universe-V2-Template-12988f341a5c48768e18ad20b4841fa6?pvs=25"
        },
        {
          label: "Universe V1 Template",
          labelId: "Template Universe V1",
          labelZh: "Universe V1 模板",
          url: "https://jem-angkasa.notion.site/Universe-V1-Template-b14929f6b12f4549906945060db75ea7?pvs=25"
        },
        {
          label: "Trading Journal Template",
          labelId: "Template Trading Journal",
          labelZh: "量化交易日志模板",
          url: "https://jem-angkasa.notion.site/Trading-Journal-Template-22534daeb989485aab99edbbe08340f4"
        }
      ],
      images: [
        "/assets/projects/software/notion-templates-hub.webp",
        "/assets/projects/software/notion-trading-journal-trades.webp",
        "/assets/projects/software/notion-trading-journal-strategies.webp",
        "/assets/projects/software/notion-trading-journal-trade-detail.webp",
        "/assets/projects/software/notion-universe-v3-header.webp",
        "/assets/projects/software/notion-universe-v3-bigpicture.webp",
        "/assets/projects/software/notion-universe-v3-knowing-myself-1.webp",
        "/assets/projects/software/notion-universe-v3-knowing-myself-2.webp",
        "/assets/projects/software/notion-universe-v3-manifestations.webp",
        "/assets/projects/software/notion-universe-v3-finance-tracker.webp",
        "/assets/projects/software/notion-universe-v3-index-expanded.webp",
        "/assets/projects/software/notion-universe-v3-index.webp",
        "/assets/projects/software/notion-universe-v1-vision.webp"
      ]
    },
    {
      id: "algorithmic-trading-research",
      title: "Algorithmic Trading Research & Quantitative Backtest Engine (MetaTrader EA, React SPA & Google Sheets)",
      titleId: "Riset Trading Algoritmik & Engine Backtest Kuantitatif (MetaTrader EA, React SPA & Google Sheets)",
      titleZh: "量化交易算法回测体系、MetaTrader EA 与多端交易日志系统 (React SPA & Google Sheets)",
      tagline: "Multi-Month MetaTrader Expert Advisor Quantitative Backtests, Real-Time Cloud Trading Journal SPA & Multi-Asset Analytical Models",
      taglineId: "Backtest Kuantitatif Expert Advisor MetaTrader Multi-Bulan, Jurnal Trading SPA Cloud Real-Time & Model Analitik Multi-Aset",
      taglineZh: "MetaTrader 自动化量化策略多周期回测体系、React 云端实时交易日志 SPA 与多资产量化分析模型",
      year: "2023 – 2026",
      category: "data",
      role: "Quantitative Researcher & Algorithmic Strategy Developer",
      roleId: "Peneliti Kuantitatif & Pengembang Strategi Algoritmik",
      roleZh: "量化研究员、策略算法工程师与交易系统架构师",
      client: "Personal Quantitative Research & Trading Infrastructure",
      clientZh: "个人量化研究实验室与交易基础设施",
      techStack: ["MetaTrader 4/5 EA", "Quantitative Backtesting", "Multi-Asset Execution", "Statistical Risk Modeling", "React.js / Firebase", "Risk-Reward Analytics", "Google Sheets Models"],
      description:
        "A quantitative algorithmic trading research and multi-platform trade execution ecosystem. Features continuous multi-month historical backtesting across MetaTrader Expert Advisors on precious metals and financial instruments, evaluating statistical expectancy, win-rate distributions, and maximum drawdown mitigation across extended market cycles. Complemented by a custom single-page React.js + Firebase web application for real-time trade tracking with dynamic Risk-Reward (RR) calculation, duration tracking (DD:HH:MM), and trade classification metrics (Win, SL+, BEP, Loss), alongside institutional Google Sheets quantitative models for Crypto, FX, and dynamic position-sizing calculators.",
      descriptionId:
        "Ekosistem riset trading algoritmik kuantitatif dan pencatatan eksekusi multi-platform. Menghadirkan backtesting historis multi-bulan menggunakan Expert Advisor MetaTrader pada instrumen komoditas dan aset finansial untuk mengevaluasi ekspektansi statistik, distribusi win-rate, serta mitigasi drawdown maksimum lintas siklus pasar. Dilengkapi dengan aplikasi web SPA React.js + Firebase untuk pencatatan trading real-time dengan kalkulasi otomatis Risk-Reward (RR), durasi trading (DD:HH:MM), dan klasifikasi hasil transaksi (Win, SL+, BEP, Loss), serta model spreadsheet Google Sheets untuk aset Kripto, Forex, dan kalkulator position sizing terstruktur.",
      descriptionZh:
        "深度量化交易算法研发与多端交易执行分析生态系统。核心包含基于 MetaTrader Expert Advisor 在大宗商品与多元金融标的上的跨周期历史回测检验，系统性评估统计期望值、胜率分布矩阵与极端行情下的最大回撤控制。生态同步配备基于 React.js + Firebase 构建的实时云端交易日志 SPA，支持动态盈亏比 (RR) 计算、持仓耗时 (DD:HH:MM) 精确统计与交易胜负标签分类（Win、SL+、BEP、Loss），并融合覆盖加密货币、外汇及仓位对冲测算的机构级 Google Sheets 量化模型看板。",
      highlights: [
        "Systematic EA Backtesting Engine: Conducted multi-month walk-forward and historical backtesting on MetaTrader EA algorithms, validating statistical expectancy and robust risk-adjusted return curves.",
        "Multi-Cycle Strategy Validation: Verified algorithmic stability and drawdown resilience across volatile macro market cycles without parameter over-fitting.",
        "React.js + Firebase Trading Journal SPA: Engineered full-stack client-side application with real-time Firestore sync, dynamic P/L formulas, and duration timers.",
        "Dynamic Risk-Reward Engine: Automated RR ratio calculation adjusting dynamically for Long/Short market orders and Stop Loss / Take Profit targets.",
        "Multi-Asset Google Sheets Suite: Built institutional-grade spreadsheet models for Crypto, FX, and templating calculators with live formulas.",
      ],
      highlightsId: [
        "Engine Backtest EA Sistematis: Menjalankan backtesting historis dan walk-forward multi-bulan pada algoritma MetaTrader EA, memvalidasi ekspektansi statistik dan kurva pertumbuhan modal yang stabil.",
        "Validasi Strategi Multi-Siklus: Memverifikasi stabilitas algoritma dan ketahanan drawdown pada berbagai kondisi volatilitas pasar tanpa over-fitting parameter.",
        "SPA Jurnal Trading React.js + Firebase: Membangun aplikasi web dengan sinkronisasi Firestore real-time, formula PnL otomatis, dan pelacak durasi transaksi.",
        "Engine Risk-Reward Otomatis: Mengkalkulasi rasio RR secara dinamis untuk posisi Long/Short dan target Stop Loss / Take Profit.",
        "Suite Google Sheets Multi-Aset: Merancang model spreadsheet berstandar institusional untuk Kripto, FX, dan kalkulator ukuran posisi.",
      ],
      highlightsZh: [
        "系统化 EA 回测分析引擎：在 MetaTrader 平台上开展长周期历史回测与样本外前瞻检验，验证统计期望值与稳健的风险调整收益曲线。",
        "跨周期策略鲁棒性验证：在高度波动的宏观市场环境下持续检验策略稳定性与回撤控制力，杜绝参数过度拟合。",
        "React.js + Firebase 实时交易日志 SPA：自主开发全功能单页应用，集成 Firestore 毫秒级云同步、动态 PnL 公式与持仓时长追踪器。",
        "自动化动态盈亏比 (RR) 引擎：智能识别多空双向头寸与动态止损止盈点位，精准计算风险报酬比率与交易结果评级。",
        "多资产 Google Sheets 量化模型体系：搭建覆盖加密资产、外汇现货与仓位对冲测算的机构级全自动化表格模型体系。",
      ],
      metrics: [
        { label: "Backtested Sample", labelId: "Sampel Backtest", labelZh: "回测样本量", value: "2,350+ Trades", valueId: "2.350+ Transaksi", valueZh: "2,350+ 笔回测交易" },
        { label: "Profit Factor", labelId: "Faktor Profit", labelZh: "策略盈亏比", value: "2.32 PF Benchmark", valueId: "Benchmark PF 2.32", valueZh: "2.32 盈亏比 (PF)" },
        { label: "Alpha Performance", labelId: "Kinerja Alpha", labelZh: "超额收益表现", value: "Positive Multi-Month Alpha", valueId: "Alpha Positif Multi-Bulan", valueZh: "持续多月稳健超额收益 (Alpha)" },
        { label: "Asset Scope", labelId: "Cakupan Instrumen", labelZh: "覆盖资产类别", value: "Metals, FX & Crypto", valueId: "Logam Mulia, FX & Kripto", valueZh: "贵金属 · 外汇 · 加密资产" }
      ],
      images: [
        "/assets/projects/trading/equity-curve-alpha.gif",
        "/assets/projects/trading/equity-curve-beta.gif",
      ],
    },
    {
      id: "about-me-numerology",
      title: "About Me Numerology & Astrology Life Path Web Engine",
      titleId: "Aplikasi Web Pemetaan Jalur Hidup, Profesi & Numerologi 'About Me'",
      titleZh: "About Me 命理与星座人生轨迹自动化测算系统 (Laravel/MySQL)",
      tagline: "Vending-Machine Style Life Path Engine, Yearly Seasonal Predictions & Suitable Profession Analyzer",
      taglineId: "Engine Jalur Hidup Gaya Vending Machine, Prediksi Tahunan Musiman & Analisis Profesi Cocok",
      taglineZh: "自动贩卖机/ATM式自测人生轨迹、多周期流年运势推演与适宜职业精准匹配引擎",
      year: "2021",
      category: "data",
      role: "Sole Creator, Full-Stack Developer & Algorithm Designer",
      roleId: "Pengembang Full-Stack Mandiri & Perancang Algoritma",
      roleZh: "独立全栈开发者与命理算法架构师",
      client: "About Me (Independent Personal Initiative)",
      clientZh: "About Me (自研独立产品体系)",
      techStack: ["PHP", "Laravel Framework", "MySQL", "Numerology Algorithms", "Astrology & Zodiac Engine", "Responsive UI"],
      description:
        "Independent personal web platform conceptualized as a life-path 'ATM / Vending Machine' that reveals personalized self-discovery blueprints through numerology and astrology. Built with Laravel, PHP, and MySQL, the system captures user biographical parameters (name, birth date, contact) through secure authentication, then algorithmically generates in-depth readings including lucky numbers, hidden traits, seasonal yearly predictions (Jan–Apr, May–Aug, Sep–Dec), suitable vs. unsuitable professions and businesses, and relationship dynamics.",
      descriptionId:
        "Platform web inisiatif mandiri yang dikonsepkan menyerupai 'ATM / Vending Machine' jalur hidup untuk mengungkap cetak biru penemuan jati diri melalui analisis numerologi dan astrologi. Dibangun dengan Laravel, PHP, dan MySQL dengan sistem autentikasi aman untuk menangkap data biografi (nama, tanggal lahir, kontak), lalu secara algoritmik menghasilkan analisis mendalam mencakup angka keberuntungan, potensi tersembunyi, prediksi tahunan musiman (Jan–Apr, Mei–Agu, Sep–Des), kecocokan profesi & bisnis (paling cocok, cocok, tidak cocok), serta dinamika relasi.",
      descriptionZh:
        "独立自研的命理与星座人生轨迹自动化测算 Web 平台。系统创新采用类似 'ATM / 自动贩卖机' 的即时自测交互模型，基于 Laravel、PHP 与 MySQL 构建安全用户鉴权体系与数据持久层。系统依托多维度命理与星座算法，精准推算幸运数字、隐性人格特质、分季度流年运势推演（1-4月、5-8月、9-12月）、三级职业与创业适宜度画像（最适宜/适宜/不适宜）以及人际关系匹配指引。",
      highlights: [
        "Vending Machine Concept: Automated self-discovery web platform generating instant life path and zodiac insights.",
        "Algorithmic Profiling Engine: Computes lucky numbers, hidden traits, yearly seasonal forecasts, and suitable profession matrices.",
        "Full-Stack Laravel & MySQL Architecture: Implemented secure user authentication, profile data privacy, and optimized schema storage.",
        "Proven User Value: Received highly positive user feedback for deep analytical accuracy and actionable life clarity."
      ],
      highlightsId: [
        "Konsep Vending Machine: Platform web mandiri otomatis yang menyajikan wawasan jalur hidup dan zodiak seketika.",
        "Engine Profiling Algoritmik: Mengkalkulasi angka hoki, karakter tersembunyi, prediksi tahunan musiman, dan matriks profesi cocok.",
        "Arsitektur Full-Stack Laravel & MySQL: Menerapkan registrasi aman, perlindungan privasi data pengguna, dan skema database teroptimasi.",
        "Dampak Positif Nyata: Memperoleh umpan balik sangat positif atas kedalaman analisis dan akurasi wawasan perjalanan hidup."
      ],
      highlightsZh: [
        "自动贩卖机式自测模型：全流程自动化生成精准的人生轨迹、星座能量与生命密码解析报告。",
        "全维度算法解析引擎：精准计算幸运数字、潜在性格盲区、分季度流年运程及三级职场与创业适宜度矩阵。",
        "Laravel + MySQL 全栈架构：落地高安全性用户鉴权、个人数据隐私保护机制与高度优化的关系型数据库表结构。",
        "高满意度用户口碑：凭借测算报告的严谨深度与准确度，获得用户的高度好评与积极反馈。"
      ],
      metrics: [
        { label: "Launch Date", labelId: "Waktu Peluncuran", labelZh: "上线时间", value: "November 2021", valueId: "November 2021", valueZh: "2021年11月" },
        { label: "Core Focus", labelId: "Fokus Analisis", labelZh: "核心测算体系", value: "Numerology & Zodiac Synthesis", valueId: "Sintesis Numerologi & Zodiak", valueZh: "生命密码与十二星座融合分析" },
        { label: "Architecture", labelId: "Arsitektur", labelZh: "技术架构", value: "Laravel, PHP & MySQL", valueId: "Laravel, PHP & MySQL", valueZh: "Laravel, PHP 与 MySQL 架构" }
      ],
      images: [
        "/assets/projects/about-me/hasilpb1.webp",
        "/assets/projects/about-me/hasilpb2.webp",
        "/assets/projects/about-me/hasilpt.webp",
        "/assets/projects/about-me/hasilarah.webp",
        "/assets/projects/about-me/hasilps.webp",
        "/assets/projects/about-me/profesibisnis.webp",
        "/assets/projects/about-me/programstudi.webp",
        "/assets/projects/about-me/sifattersembunyi.webp",
        "/assets/projects/about-me/tahun.webp",
        "/assets/projects/about-me/hubungan.webp"
      ],
      blueprintFlow: [
        {
          step: "User Profile Capture & Privacy",
          stepId: "Pengambilan Profil & Privasi",
          stepZh: "用户档案采集与隐私保护",
          detail: "Secure authentication capturing name, birth date, contact info, and encrypted profile storage",
          detailId: "Autentikasi aman menangkap nama, tanggal lahir, kontak, dan penyimpanan data terenkripsi",
          detailZh: "安全用户鉴权体系，采集姓名、出生日期、联系方式并加密存储"
        },
        {
          step: "Numerology & Zodiac Algorithm Engine",
          stepId: "Engine Algoritma Numerologi & Zodiak",
          stepZh: "命理与星座核心推演引擎",
          detail: "Automated synthesis of lucky numbers, hidden traits, seasonal yearly forecasts, and profession suitability",
          detailId: "Sintesis otomatis angka keberuntungan, potensi tersembunyi, prediksi tahunan musiman, dan kecocokan profesi",
          detailZh: "全自动推演幸运数字、潜在特质、三阶段分季度年度预测与职业适配度"
        },
        {
          step: "Formatted Life Path Reading",
          stepId: "Penyajian Laporan Jalur Hidup",
          stepZh: "结构化人生轨迹报告呈现",
          detail: "Structured web report rendering suitable business recommendations, element associations, and relationship insights",
          detailId: "Penyajian laporan web terstruktur untuk rekomendasi bisnis cocok, elemen zodiak, dan wawasan relasi",
          detailZh: "可视化输出最适宜/适宜/不适宜职业创业矩阵、五行元素与人际关系指引"
        }
      ]
    },
    {
      id: "8-profile-sukses-engine",
      title: "8 Profile Sukses: Unlocking Personal Success Profiles",
      titleId: "Aplikasi Asesmen Bakat 8 Profile Sukses (C# WinForms)",
      titleZh: "8 Profile Sukses: 财富流向与创业天赋画像自测系统 (C# WinForms)",
      tagline: "Wealth Dynamics Methodology, 'Tajir Melintir' Framework & Dual Strongest + Growth Profile Analyzer",
      taglineId: "Metodologi Wealth Dynamics, Framework 'Tajir Melintir' & Analisis 2 Profil Terkuat + 2 Profil Tumbuh",
      taglineZh: "基于 Roger Hamilton 财富动态与《Tajir Melintir》方法论的双主导优势+双成长探索画像引擎",
      year: "2020",
      category: "desktop",
      role: "Desktop Software Engineer & Algorithm Designer",
      roleId: "Pengembang Software Desktop & Perancang Algoritma",
      roleZh: "桌面软件工程师与心理测评算法设计师",
      client: "Human Talent Profiling (Personal Research & Network Assessment)",
      clientZh: "天赋心理测评 (个人研学与人脉潜能自测体系)",
      techStack: ["C# (.NET WinForms)", "Wealth Dynamics Matrix", "Roger Hamilton Framework", "Psychometric Scoring", "Local Database"],
      description:
        "Desktop talent assessment software built in C# Windows Forms inspired by Mardigu WP's book 'Tajir Melintir' and Roger Hamilton's Wealth Dynamics framework (Creator, Star, Supporter, Deal Maker, Trader, Accumulator, Lord, Mechanic across Dynamo, Blaze, Tempo, Steel). Captures user biographical data and answers to success-related psychometric items to store profiles, calculate individual talent distributions, reveal the individual's two strongest dominant success profiles, and recommend two additional exploratory profiles for balanced personal and professional growth.",
      descriptionId:
        "Aplikasi software desktop asesmen bakat berbasis C# Windows Forms yang terinspirasi dari buku 'Tajir Melintir' karya Mardigu WP dan metodologi Wealth Dynamics karya Roger Hamilton (Creator, Star, Supporter, Deal Maker, Trader, Accumulator, Lord, Mechanic pada kuadran Dynamo, Blaze, Tempo, Steel). Menangkap data biografi dan respon kuesioner profil sukses, menghitung distribusi bakat alami, mengungkap 2 profil sukses terkuat yang dominan, serta merekomendasikan 2 profil tambahan untuk dieksplorasi demi pengembangan karir dan bisnis.",
      descriptionZh:
        "基于 C# Windows Forms 独立开发的个人商业天赋与潜能画像测评软件。系统深度融合 Mardigu WP 著作《Tajir Melintir》核心理念与 Roger Hamilton 经典 Wealth Dynamics（财富动力学）模型（涵盖 Dynamo、Blaze、Tempo、Steel 四大能量维度的 8 大创富原型：Creator、Star、Supporter、Deal Maker、Trader、Accumulator、Lord、Mechanic）。通过结构化自测表单采集人脉档案，精准计算天赋分布，自动输出个体最核心的'两大主导天赋画像'并智能推荐'两大成长探索画像'以赋能个人与职业突破。",
      highlights: [
        "Synthesized Wealth Dynamics & 'Tajir Melintir' models into an automated C# Windows Forms diagnostic tool.",
        "Engineered 4-quadrant diamond matrix algorithm calculating the 2 strongest dominant profiles + 2 growth exploration profiles.",
        "Structured secure local database storage for candidate biographical details (Name, Occupation, Age, Questionnaire Scores).",
        "Empowered professionals and entrepreneurs to align natural strengths with high-leverage career actions."
      ],
      highlightsId: [
        "Memadukan metodologi Wealth Dynamics dan buku 'Tajir Melintir' ke dalam software diagnostik otomatis C# WinForms.",
        "Membangun algoritma matriks intan 4 kuadran yang menghitung 2 profil sukses terkuat + 2 profil eksplorasi pertumbuhan.",
        "Menyusun penyimpanan database lokal terstruktur untuk data biografi kandidat (Nama, Jenis Pekerjaan, Usia, Skor Kuesioner).",
        "Membantu para profesional dan wirausahawan menyelaraskan bakat alami dengan tindakan karir dan bisnis yang tepat."
      ],
      highlightsZh: [
        "将财富动力学模型与《Tajir Melintir》本土化商业实践转化为全自动 C# WinForms 桌面测评工具。",
        "研发4象限菱形动力学矩阵算法，精准输出'2大主导天赋画像'与'2大拓展探索画像'组合策略。",
        "构建结构化本地数据库，安全存储候选人基础档案（姓名、职业属性、年龄、测评量表分值）。",
        "助力专业人士与创业者清晰洞察自身天然能量优势，实现人岗协同与高杠杆商业变现。"
      ],
      metrics: [
        { label: "Methodology", labelId: "Metodologi", labelZh: "核心理论模型", value: "Wealth Dynamics Framework", valueId: "Model Wealth Dynamics", valueZh: "财富动力学 (Wealth Dynamics)" },
        { label: "Book Reference", labelId: "Referensi Buku", labelZh: "参考学术著作", value: "'Tajir Melintir' (Mardigu WP)", valueId: "'Tajir Melintir' (Mardigu WP)", valueZh: "《Tajir Melintir》(Mardigu WP)" },
        { label: "Diagnostic Output", labelId: "Format Diagnostik", labelZh: "测评诊断维度", value: "2 Dominant + 2 Growth Profiles", valueId: "2 Dominan + 2 Pengembangan", valueZh: "2项主导特质 + 2项成长空间" }
      ],
      images: [],
      blueprintFlow: [
        {
          step: "Biographical & Questionnaire Capture",
          stepId: "Pengambilan Biografi & Kuesioner",
          stepZh: "档案信息采集与测评表单",
          detail: "Input form capturing Name, Occupation, Age, and multi-factor success propensity indicators",
          detailId: "Formulir input menangkap Nama, Jenis Pekerjaan, Usia, dan indikator kecenderungan sukses",
          detailZh: "录入姓名、职业类型、年龄及多因子商业成功潜能诊断量表"
        },
        {
          step: "4-Quadrant Diamond Matrix Computation",
          stepId: "Komputasi Matriks Intan 4 Kuadran",
          stepZh: "4象限菱形动力学矩阵计算",
          detail: "Algorithmic synthesis across Dynamo, Blaze, Tempo, and Steel 8-profile distributions",
          detailId: "Sintesis algoritmik lintas kuadran Dynamo, Blaze, Tempo, dan Steel 8 profil sukses",
          detailZh: "全自动解算 Dynamo、Blaze、Tempo、Steel 8种创富原型的加权分值分布"
        },
        {
          step: "Dual Dominant & Growth Recommendations",
          stepId: "Rekomendasi 2 Terkuat + 2 Pertumbuhan",
          stepZh: "双主导画像与成长路径输出",
          detail: "Automated ranking of 2 primary natural strength profiles + 2 developmental growth profiles",
          detailId: "Peringkat otomatis 2 profil kekuatan alami utama + 2 profil pengembangan bertumbuh",
          detailZh: "自动生成两大核心主导优势原型及两大建议探索进阶画像的个性化发展建议"
        }
      ]
    },
    {
      id: "garis-kehidupan-engine",
      title: "Garis Kehidupan: Life Path Numerology Engine (C# WinForms)",
      titleId: "Garis Kehidupan: Engine Numerologi & Jalur Hidup (C# WinForms)",
      titleZh: "Garis Kehidupan: 基于生命数字密码的生命轨迹测算系统 (C# WinForms)",
      tagline: "Pioneering C# Power of Numbers Inverted Triangle Life Path & Multi-Dimensional Profiling Engine",
      taglineId: "Engine Pelopor C# Numerologi Power of Numbers, Matriks Segitiga Terbalik & Profiling Multi-Dimensi",
      taglineZh: "基于生命数字密码倒金字塔矩阵的多维度生命轨迹与性格潜能 C# 桌面测算引擎",
      year: "2017",
      category: "data",
      role: "Sole Desktop Architect & Algorithm Developer",
      roleId: "Arsitek Software Desktop & Pengembang Algoritma Mandiri",
      roleZh: "独立桌面软件架构师与数字测评算法开发者",
      client: "Personal Guidance, Family & Peer Life Path Profiling (Proprietary Prototype)",
      clientZh: "个人咨询、亲友人生导航与潜能测算 (自研原型体系)",
      techStack: ["C# (.NET WinForms)", "Power of Numbers Methodology", "Pythagorean Numerology", "Inverted Triangle Matrix", "Algorithmic Profiling", "Biographical Data Storage"],
      description:
        "Proprietary personal desktop application built in C# Windows Forms automating the Power of Numbers numerological methodology. Constructs inverted triangle pyramids from birthdates to compute root numbers, element affinities, character traits, lucky numbers, health vulnerabilities, suitable career matrices, annual cyclic predictions, and interpersonal relationship compatibility. Serves as the primordial digital ancestor engine that laid the computational foundations for Jem's subsequent profiling systems (8 Profile Sukses, About Me Laravel, and CocokGa V4.0).",
      descriptionId:
        "Aplikasi software desktop mandiri berbasis C# Windows Forms yang mengotomasi metodologi numerologi Power of Numbers. Membentuk piramida segitiga terbalik dari tanggal lahir untuk mengkalkulasi angka akar, afinitas elemen, karakter dasar, angka keberuntungan, titik rawan organ kesehatan, matriks profesi selaras, prediksi siklus tahunan, dan kompatibilitas relasi antar-individu. Merupakan engine leluhur digital primordial yang meletakkan fondasi komputasi untuk sistem profiling Jem selanjutnya (8 Profile Sukses, About Me Laravel, dan CocokGa V4.0).",
      descriptionZh:
        "基于 C# Windows Forms 独立开发的生命数字密码（Power of Numbers）桌面测算引擎。通过出生年月日自动构建倒金字塔几何矩阵，毫秒级推演根数字、五行元素、性格特质、幸运数字、健康易感器官、契合行业矩阵、流年能量周期及人际合盘，将传统手工推演全面数字化。作为 Jem 整个性格与潜能测算体系的原点先驱工程，为后续研发的 8 Profile Sukses 引擎、About Me Web 平台及 CocokGa V4.0 奠定了坚实的计算模型与算法架构。",
      highlights: [
        "Digital Pioneer Engine: Transformed manual Pythagorean numerology and complex pyramid calculations into deterministic, millisecond C# algorithms.",
        "Comprehensive 8-in-1 Analysis: Automated modules for name meanings, lucky numbers, health vulnerabilities, career alignment, yearly cycles, and relationship compatibility.",
        "100x Efficiency Leap: Slashed profile compilation time from 30–45 minutes of manual paper drafting to under 1 second with 100% calculation accuracy.",
        "Ancestor of Modern Ecosystem: Served as the foundational algorithmic blueprint that later evolved into the 8 Profile Sukses engine, About Me Laravel web portal, and CocokGa V4.0."
      ],
      highlightsId: [
        "Engine Pelopor Digital: Mengubah rumus numerologi Pythagoras manual dan perhitungan piramida segitiga menjadi algoritma C# deterministik berkecepatan milidetik.",
        "Analisis Komprehensif 8-in-1: Mengotomasi modul arti nama, angka hoki, deteksi titik rawan kesehatan, rekomendasi karir, siklus tahunan, dan kompatibilitas relasi.",
        "Lompatan Efisiensi 100x: Memangkas waktu analisis dari 30–45 menit coretan kertas manual menjadi kurang dari 1 detik dengan akurasi 100%.",
        "Pondasi Ekosistem Modern: Menjadi cetak biru algoritma primordial yang kelak berevolusi menjadi engine 8 Profile Sukses, portal web About Me Laravel, hingga CocokGa V4.0."
      ],
      highlightsZh: [
        "数字推演先驱引擎：将传统毕达哥拉斯数字与繁琐的倒金字塔推演转化为毫秒级响应的确定性 C# 算法。",
        "8合1全维度分析矩阵：自动化集成姓名学解析、幸运数字、健康器官偏向、职业契合度、流年周期与人际合盘。",
        "百倍效率飞跃：将单份档案 30–45 分钟的手工草稿计算缩短至 1 秒以内，实现 100% 零误差计算。",
        "现代生态的算法原点：作为底层原始算法蓝图，为后续的 8 Profile Sukses 引擎、About Me Web 平台及 CocokGa V4.0 奠定了核心计算模型。"
      ],
      metrics: [
        { label: "Compute Speedup", labelId: "Peningkatan Kecepatan", labelZh: "计算加速倍数", value: "100x (< 1s vs 45m)", valueId: "100x (< 1d vs 45m)", valueZh: "100倍加速 (< 1秒 vs 45分)" },
        { label: "Analytical Modules", labelId: "Modul Analitik", labelZh: "分析维度模块", value: "8+ Life Dimensions", valueId: "8+ Dimensi Kehidupan", valueZh: "8+ 核心命运维度" },
        { label: "Core Methodology", labelId: "Metodologi Utama", labelZh: "核心理论依据", value: "Power of Numbers Method", valueId: "Metodologi Power of Numbers", valueZh: "Power of Numbers 数字学体系" },
        { label: "Algorithm Architecture", labelId: "Arsitektur Algoritma", labelZh: "算法底层模型", value: "Pyramid Inverted Triangle", valueId: "Piramida Segitiga Terbalik", valueZh: "倒金字塔数字拓扑模型" }
      ],
      images: [
        "/assets/projects/quant/garis-kehidupan-preview.webp"
      ],
      blueprintFlow: [
        {
          step: "Biographical Input Capture",
          stepId: "Input Data Biografis",
          detail: "Captures candidate full name and date of birth (DD-MM-YYYY) through WinForms UI with strict input sanitization.",
          detailId: "Menangkap nama lengkap dan tanggal lahir (DD-MM-YYYY) melalui formulir WinForms dengan validasi terstruktur."
        },
        {
          step: "Pyramid Matrix Construction",
          stepId: "Konstruksi Matriks Piramida",
          detail: "Executes recursive Pythagorean reduction logic to construct the inverted triangle nodes (root number, outer elements, inner traits).",
          detailId: "Menjalankan logika reduksi Pythagoras berantai untuk membentuk node segitiga terbalik (angka akar, elemen luar, potensi batin)."
        },
        {
          step: "Multi-Dimensional Evaluation Engine",
          stepId: "Engine Evaluasi Multi-Dimensi",
          detail: "Matches derived numerical configurations against relational dictionary tables (health, career, personality, yearly cycle vibrations).",
          detailId: "Mencocokkan konfigurasi pola angka dengan kamus data relasional (kesehatan, karir, karakter, vibrasi siklus tahunan)."
        },
        {
          step: "Interactive Visual Diagnostic Readout",
          stepId: "Visualisasi Laporan Diagnostik",
          detail: "Renders comprehensive visual reports and detailed sub-module dialogues for personal guidance and life path clarity.",
          detailId: "Menampilkan laporan visual komprehensif dan jendela dialog per modul untuk navigasi arah hidup yang jelas."
        }
      ]
    },
    {
      id: "inner-healing-profiling",
      title: "Inner Healing: Holistic Hypnotherapy Media Production & Creative Suite",
      titleId: "Inner Healing: Produksi Media Audio-Visual & Desain Terapi Holistik",
      titleZh: "Inner Healing: 身心整体疗愈视觉包装与潜意识心理疗愈媒体套件",
      tagline: "Book Cover Art, Brainwave Relaxation CD Dielines, Workshop Slides & Subconscious Foundations",
      taglineId: "Desain Sampul Buku, Pola Stiker Keping CD Audio Relaksasi, Slide Seminar & Fondasi Bawah Sadar",
      taglineZh: "疗愈著作封面设计、脑波调频 CD 封套印刷刀模、工作坊讲义与潜意识心理学启蒙基石",
      year: "2014 – 2015",
      category: "design",
      role: "Creative Media Producer, Visual Designer & Video Editor",
      roleId: "Produser Media Kreatif, Desainer Visual & Editor Video",
      roleZh: "全案创意视觉设计师、音视频后期制作人与讲义架构师",
      client: "Inner Healing Indonesia & Hadi Arwana Enterprise",
      clientZh: "印尼心灵疗愈机构 (Inner Healing Indonesia)",
      techStack: ["Adobe Photoshop", "CorelDRAW", "Microsoft PowerPoint", "Adobe Premiere Pro", "Movavi", "Filmora", "Brainwave Audio", "DSLR Cinematography"],
      description:
        "Comprehensive creative media production and visual identity suite created for Inner Healing—a clinical hypnotherapy and spiritual healing foundation led by Jem's father (Hadi Arwana) to help individuals overcome past traumas, addictions, and emotional wounds. Jem served as the sole creative architect across all touchpoints: designing the 'Inner Healing II' book cover, circular die-cut CD/MP3 packaging labels for Alpha/Theta brainwave relaxation audio, executive hypnotherapist business cards, engaging PowerPoint workshop presentation decks (visualizing the 88% subconscious vs 12% conscious mind model), and filming DSLR event documentaries. This formative teenage experience (~age 14) served as Jem's foundational catalyst into the mechanics of human behavior, subconscious reprogramming, and psychological profiling.",
      descriptionId:
        "Produksi media kreatif dan identitas visual terintegrasi untuk Inner Healing—yayasan terapi holistik dan hipnoterapi klinis yang dipimpin oleh ayah Jem (Hadi Arwana) guna membantu individu memulihkan trauma masa lalu, kecanduan, dan luka batin. Jem bertindak sebagai arsitek media tunggal: merancang sampul buku 'Inner Healing II', stiker keping cakram CD/MP3 audio relaksasi gelombang otak Alpha/Theta, kartu nama eksklusif praktisi, slide presentasi workshop PowerPoint (memvisualisasikan model pikiran bawah sadar 88% vs sadar 12%), serta dokumentasi fotografi/sinematografi DSLR seminar. Pengalaman masa remaja (~usia 14 tahun) ini menjadi katalisator primordial yang menanamkan pemahaman mendalam tentang dinamika perilaku manusia dan profiling psikologi.",
      descriptionZh:
        "为 Jem 父亲（Hadi Arwana）创办的 Inner Healing 临床催眠与身心整体疗愈机构操刀的全套多媒体视觉工程。机构致力于帮助来访者疗愈童年创伤、成瘾心理与情感创伤，重塑潜意识认知。Jem 在少年时期（约14岁）独当一面担任全套视觉媒体架构师：设计《Inner Healing II》身心疗愈著作封面、Alpha/Theta 脑波调频音频光盘贴纸圆模、专业资质名片、工作坊图文演说课件（生动可视化 88% 潜意识 vs 12% 显意识心理模型），并负责现场单反纪录拍摄与宣讲视频剪辑。这段深度实践成为 Jem 洞察人性动机、潜意识运作规律与日后开拓整个人类天赋测评体系的原点启蒙。",
      highlights: [
        "Empathetic Book & Print Design: Designed 'Inner Healing II' calming cover artwork, circular CD audio labels, and practitioner identity cards.",
        "Educational Slide Engineering: Visualized subconscious mind mechanics (88% subconscious vs 12% conscious) into intuitive workshop presentation slides.",
        "Audio-Visual Media Production: Produced brainwave relaxation audio packaging and filmed DSLR event seminars to demystify clinical hypnotherapy as a science.",
        "Foundational Profiling Catalyst: Immersed in subconscious psychology and trauma recovery at age 14, establishing the core analytical mindset that later evolved into Screening SDM Indonesia, Garis Kehidupan, and The Secret of Life."
      ],
      highlightsId: [
        "Desain Sampul Buku & Media Cetak: Merancang artwork sampul buku 'Inner Healing II', pola label keping CD, dan kartu nama praktisi.",
        "Visualisasi Slide Edukasi: Memvisualisasikan teori cara kerja pikiran bawah sadar (88% vs 12%) ke dalam slide presentasi seminar yang mudah dipahami.",
        "Produksi Media Audio-Visual: Merancang kemasan audio relaksasi gelombang otak dan merekam seminar DSLR untuk mengedukasi hipnoterapi ilmiah.",
        "Katalisator Minat Profiling: Menyerap fondasi psikologi bawah sadar sejak usia 14 tahun, melahirkan pemikiran analitis yang kelak berkembang ke Screening SDM Indonesia, Garis Kehidupan, dan The Secret of Life."
      ],
      highlightsZh: [
        "疗愈感书籍装帧与印刷品：设计《Inner Healing II》封面、圆形光盘模切贴纸及催眠师资质名片。",
        "心理学课件图文可视化：将 88% 潜意识与 12% 意识工作机制转化为通俗易懂的工作坊演说幻灯片。",
        "脑波音频包装与纪实摄影：制作脑波放松音频包装并拍摄现场单反纪录，以科学化视角普及现代临床催眠学。",
        "人类潜能测评启蒙原点：14 岁沉浸式研习潜意识心理学与创伤修复，奠定了日后开创 Screening SDM Indonesia、Garis Kehidupan 与 The Secret of Life 的核心认知模型。"
      ],
      metrics: [
        { label: "Core Focus", labelId: "Fokus Utama", labelZh: "核心领域", value: "Subconscious Mind & Healing", valueId: "Bawah Sadar & Pemulihan", valueZh: "潜意识与深度疗愈" },
        { label: "Design Deliverables", labelId: "Output Desain", labelZh: "视觉产出", value: "Book, CD, Slides & Video", valueId: "Buku, CD, Slide & Video", valueZh: "精装书 · CD光盘 · 课件 · 视频" },
        { label: "Asset Quality", labelId: "Resolusi Visual", labelZh: "资产标准", value: "High-Res DSLR (4MB+)", valueId: "DSLR High-Res (4MB+)", valueZh: "4MB+ 单反高清摄影母片" },
        { label: "Origin Milestone", labelId: "Tonggak Sejarah", labelZh: "历史里程碑", value: "1st Psychology Project", valueId: "Proyek Psikologi Pertama", valueZh: "首个心理学与疗愈落地项目" }
      ],
      images: [
        "/assets/projects/design/Cover_Buku_Inner_Healing_II.webp",
        "/assets/projects/design/Kartu_Nama_Inner_Healing_Juni_2014.webp",
        "/assets/projects/design/Hadi_Arwana_Inner_Healing.webp",
        "/assets/projects/design/_MG_8950.webp",
        "/assets/projects/design/_MG_8966.webp",
        "/assets/projects/design/Logo_Inner_Healing_Indonesia.webp"
      ],
      blueprintFlow: [
        {
          step: "Visual Identity & Book Packaging",
          stepId: "Identitas Visual & Kemasan Buku",
          detail: "Designed soothing book covers and circular CD disc dielines reflecting emotional peace and recovery.",
          detailId: "Merancang sampul buku menenangkan dan pola stiker keping CD yang mencerminkan kedamaian batin."
        },
        {
          step: "Subconscious Theory Slide Deck",
          stepId: "Perancangan Slide Edukasi Bawah Sadar",
          detail: "Structured engaging presentation slides breaking down the 88% subconscious mind dynamics for public seminars.",
          detailId: "Menyusun slide presentasi terstruktur yang membedah cara kerja pikiran bawah sadar 88% untuk seminar publik."
        },
        {
          step: "Brainwave Relaxation Audio Media",
          stepId: "Kemasan Audio Relaksasi Gelombang Otak",
          detail: "Packaged guided Alpha/Theta brainwave relaxation and positive affirmation audio sets for client home therapy.",
          detailId: "Mengemas trek audio relaksasi gelombang otak Alpha/Theta dan afirmasi positif untuk terapi mandiri klien."
        },
        {
          step: "Live Seminar DSLR Cinematography",
          stepId: "Dokumentasi Sinematik Seminar DSLR",
          detail: "Captured and edited high-resolution event photography and video explanations to educate the public on clinical hypnotherapy.",
          detailId: "Merekam dan menyunting foto serta video resolusi tinggi untuk mengedukasi publik tentang sains hipnoterapi klinis."
        }
      ]
    }
  ],
  design: [
    flagshipProjects[4],
    {
      id: "kbt-gbb-brand-ecosystem",
      title: "PT. Karya Buah Tropis (Gudang Buah Beku): Industrial Packaging, 1080p Video Profile & Omnichannel Identity",
      titleId: "PT. Karya Buah Tropis (Gudang Buah Beku): Kemasan Industri, Video Profil 1080p & Identitas Omnichannel",
      titleZh: "PT. Karya Buah Tropis (Gudang Buah Beku): 工业级冷链真空包装、1080p 官方企业宣传片与全渠道品牌生态",
      tagline: "Logo Identity, Multi-Layer Nylon Vacuum Pouches (-25°C), 1080p Corporate Profile & 90+ SKU Storefront System",
      taglineId: "Identitas Logo, Kemasan Vakum Nilon (-25°C), Video Profil Korporat 1080p & Sistem Etalase 90+ SKU",
      taglineZh: "企业 Logo 视觉体系、-25°C 耐低温食品级真空尼龙袋、1080p 官方企业宣传片与 90+ SKU 全渠道展陈系统",
      year: "2020 – 2023",
      category: "design",
      role: "Lead Packaging Architect, Video Director & Brand Designer",
      roleId: "Arsitek Kemasan, Sutradara Video & Desainer Merek",
      roleZh: "包装工程首席架构师、宣传片总导演兼全案品牌设计师",
      client: "PT. Karya Buah Tropis (Gudang Buah Beku)",
      clientZh: "PT. Karya Buah Tropis (Gudang Buah Beku 品牌矩阵)",
      techStack: ["CorelDRAW", "Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "Industrial Dielines", "Vacuum Nylon (-25°C)", "1080p Full HD", "Storefront Signage", "Waterproof Stickers"],
      description:
        "Comprehensive brand identity, industrial cold-chain packaging, and cinematic corporate video engineering for PT. Karya Buah Tropis (originated under commercial trade name Gudang Buah Beku). Includes the official 'KBT Excellent Fruit' logo, frost-resistant multi-layer nylon vacuum pouches with inspection windows (-25°C), Key's Brand Halal tea packaging, a 1080p Full HD corporate warehouse documentary, large outdoor cold storage signage, and standardized waterproof sticker suites across 90+ frozen fruit SKUs.",
      descriptionId:
        "Rekayasa visual terpadu, kemasan rantai dingin industri, dan video profil sinematik korporat untuk PT. Karya Buah Tropis (bermula sebagai brand komersial Gudang Buah Beku). Mencakup logo resmi 'KBT Excellent Fruit', kemasan vakum nilon multi-layer tahan suhu beku (-25°C), kemasan teh Halal Key's Brand, video profil korporat 1080p Full HD fasilitas cold storage, spanduk luar ruang, serta stiker label tahan air untuk 90+ SKU buah beku.",
      descriptionZh:
        "为 PT. Karya Buah Tropis（前身为商业品牌 Gudang Buah Beku）打造的一体化工业级包装、影视宣传与全案视觉系统。全案交付涵盖官方 'KBT Excellent Fruit' Logo、具备透明视窗且耐 -25°C 低温急冻的多层食品级真空尼龙包装袋、Key's 清真养生茶罐装包装、1080p 官方企业宣传纪录片、大型冷库门头展板及 90+ SKU 防水防冻标签贴纸体系。",
      highlights: [
        "Standardized 'KBT Excellent Fruit' and Gudang Buah Beku visual identity across catalogs, signage, and packaging.",
        "Engineered food-grade multi-layer nylon vacuum pouches with inspection windows resistant to -25°C blast-freezing.",
        "Directed and edited official 1080p corporate video profile showcasing cold-chain integrity and warehouse operations.",
        "Created waterproof, frost-resistant product packaging stickers for 90+ frozen fruit SKUs.",
        "Produced comprehensive A4 tri-fold wholesale brochures and structured 90+ SKU tiered master price catalogs."
      ],
      highlightsId: [
        "Menstandarisasi identitas visual 'KBT Excellent Fruit' dan Gudang Buah Beku pada katalog, spanduk toko, dan kemasan.",
        "Merancang pola pisau kemasan vakum nilon multi-layer dengan jendela transparan tahan beku -25°C.",
        "Menyutradarai dan menyunting video profil korporat 1080p resmi yang menampilkan fasilitas cold storage dan higienitas.",
        "Membangun stiker kemasan tahan air dan suhu beku (-18°C) untuk 90+ SKU produk buah beku.",
        "Menyusun brosur promosi lipat tiga A4 dan katalog daftar harga bertingkat grosir 90+ SKU."
      ],
      highlightsZh: [
        "规范 'KBT Excellent Fruit' 与 Gudang Buah Beku 全系品牌视觉标准，覆盖画册、门头与包装。",
        "设计带有透明视窗的多层尼龙真空包装刀模，完美适配 -25°C 超低温急冻仓储环境。",
        "独立导演并剪辑 1080p 官方企业宣传片，全高清展现冷链温控与标准化无菌加工流程。",
        "规范设计适配 -18°C 低温冷冻环境的防水防潮包装贴标体系（覆盖 90+ 款果品）。",
        "排版设计 40+ 款热带果品 A4 三折页商业宣传册及 90+ 款品类大宗批发阶梯报价单。"
      ],
      metrics: [
        { label: "Thermal Tolerance", labelId: "Toleransi Suhu", labelZh: "耐温防裂标准", value: "-25°C Freeze Proof", valueId: "Tahan Beku -25°C", valueZh: "-25°C 耐深低温防裂" },
        { label: "Video Resolution", labelId: "Resolusi Video", labelZh: "宣传片画质", value: "1080p Full HD", valueId: "1080p Full HD", valueZh: "1080p 全高清画质" },
        { label: "SKU Catalog Scale", labelId: "Katalog Produk", labelZh: "全系产品覆盖", value: "90+ Tropical Fruit SKUs", valueId: "90+ SKU Buah Tropis", valueZh: "90+ 款热带冷冻果品" },
        { label: "Storage Standard", labelId: "Standar Suhu", labelZh: "冷链温控标准", value: "-18°C Cold Chain Standard", valueId: "Standar Rantai Dingin -18°C", valueZh: "-18°C 恒温冷链标准" }
      ],
      liveUrl: "https://youtu.be/nMpwpF5OEdM",
      demoLinks: [
        { label: "Corporate Video Profile", labelId: "Video Profil Korporat", url: "https://youtu.be/nMpwpF5OEdM" },
        { label: "Instagram Official", labelId: "Instagram Resmi", url: "https://www.instagram.com/gudangbuahbeku/" },
        { label: "Product Video Showcase", labelId: "Video Produk Pilihan", url: "https://youtu.be/rWxuPuyaEYo" }
      ],
      images: [
        "/assets/projects/branding/kbt-packaging.webp",
        "/assets/projects/branding/kbt-brosur.webp",
        "/assets/projects/branding/gbb-logo.webp",
        "/assets/projects/branding/gbb-banner.webp"
      ],
      blueprintFlow: [
        {
          step: "Multi-Layer Vacuum Dielines (-25°C)",
          stepId: "Pola Kemasan Vakum Nilon (-25°C)",
          detail: "Engineered food-grade nylon vacuum pouch dielines with inspection windows resistant to blast-freezing.",
          detailId: "Merancang pola pisau kemasan nilon multi-layer dengan jendela transparan tahan suhu beku -25°C."
        },
        {
          step: "1080p Corporate Profile Cinematography",
          stepId: "Sinematografi Video Profil 1080p",
          detail: "Directed and edited corporate video documenting warehouse cold storage and hygienic packaging workflows.",
          detailId: "Menyutradarai dan menyunting video dokumenter resmi yang merekam operasional cold storage dan higienitas."
        },
        {
          step: "Omnichannel 90+ SKU Sticker Suites",
          stepId: "Stiker Kemasan Tahan Beku 90+ SKU",
          detail: "Standardized frost-proof sticker labels across 90+ frozen fruit items for wholesale and retail.",
          detailId: "Menstandarisasi stiker label tahan embun es untuk 90+ varian buah beku bagi jalur Horeca dan ritel."
        }
      ]
    },
    {
      id: "frut-tre-packaging",
      title: "Frut Tre Custom Fruit Drink Business & Box Packaging",
      titleId: "Bisnis Minuman Buah Kustom Frut Tre & Kemasan Kotak",
      titleZh: "Frut Tre: 创意定制果饮品牌全案、FrutCubes 方块果粒瓶贴与礼盒包装",
      tagline: "FrutCubes Character Branding, Bottle Label Stickers, Die-Cut Box Packaging & Social Ads",
      taglineId: "Branding Karakter FrutCubes, Stiker Label Botol, Pola Dus Lipat & Iklan Medsos",
      taglineZh: "方块果粒卡通吉祥物设计、500ml PET 瓶贴规范、锁扣礼盒包装与社媒营销视觉",
      year: "2020",
      category: "design",
      role: "Brand Designer & Venture Creator",
      roleId: "Desainer Merek & Penggagas Bisnis",
      roleZh: "品牌全案设计师与商业项目发起人",
      client: "Frut Tre Creative Beverage Venture",
      clientZh: "Frut Tre 创意果饮工坊 (自研新零售项目)",
      techStack: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Canva", "Bottle Label Stickers", "Social Feeds Design"],
      description:
        "Full brand creation and packaging design for Frut Tre—an artisanal fruit beverage concept featuring custom drink combinations in a box format. Crafted the playful 'FrutCubes' cubic fruit mascot, cylindrical 500ml PET bottle labels with freshness seals, interlocking takeaway gift box dielines, and vibrant Instagram promotional launch feeds.",
      descriptionId:
        "Perancangan merek menyeluruh dan desain kemasan untuk Frut Tre—konsep minuman buah segar custom dalam kemasan boks. Merancang maskot buah kubus 'FrutCubes' yang ceria, stiker label botol silinder PET 500ml dengan segel kesegaran, pola pisau dus lipat takeaway, dan konten promosi peluncuran Instagram yang menarik.",
      descriptionZh:
        "为创意果饮新零售品牌 Frut Tre 打造的全案品牌孵化与包装工程。项目主打'礼盒装自选多口味鲜果饮'概念。Jem 亲自操刀设计了极具亲和力的 'FrutCubes' 方形水果卡通吉祥物、500ml 圆柱形 PET 瓶贴与防拆封条、免胶卡扣便携式外带礼盒模切刀模，以及全套 Instagram 商业引流视觉素材。",
      highlights: [
        "Designed playful 'FrutCubes' character mascot conveying fun, health, and personalized fruit mixology.",
        "Engineered moisture-resistant cylindrical wrap labels for 500ml beverage bottles.",
        "Crafted die-cut folding gift boxes accommodating multi-bottle orders securely.",
        "Produced comprehensive social media launch campaigns and product menus."
      ],
      highlightsId: [
        "Mendesain maskot karakter kubus 'FrutCubes' yang ceria, sehat, dan mempresentasikan kustomisasi rasa buah.",
        "Merancang pola stiker melingkar tahan embun dingin untuk botol minuman PET 500ml.",
        "Membuat desain kotak dus lipat tenteng yang menampung pesanan multi-botol dengan aman.",
        "Memproduksi materi kampanye peluncuran media sosial dan daftar menu produk lengkap."
      ],
      highlightsZh: [
        "原创设计萌系 'FrutCubes' 水果方块吉祥物，传递天然、健康与自由拼配的年轻化品牌调性。",
        "精密绘制适用于 500ml 饮品瓶的耐冷凝防水环形不干胶标签刀模。",
        "结构化设计可稳固容纳多瓶饮品的便携折叠手提礼盒与分隔内托。",
        "全案输出 Instagram 高转化社媒营销矩阵图文与新品上市促销菜单。"
      ],
      metrics: [
        { label: "Brand Concept", labelId: "Konsep Merek", labelZh: "品牌定位", value: "Artisanal Fresh Fruit Box", valueId: "Kotak Buah Segar Eksklusif", valueZh: "手作轻奢定制鲜果礼盒" },
        { label: "Packaging Formats", labelId: "Format Kemasan", labelZh: "包装交付标准", value: "Bottle Stickers & Gift Box", valueId: "Stiker Botol & Kotak Hadiah", valueZh: "定制瓶贴与手提礼盒" },
        { label: "Visual Identity", labelId: "Identitas Visual", labelZh: "视觉资产", value: "FrutCubes 3D Mascot", valueId: "Maskot 3D FrutCubes", valueZh: "FrutCubes 3D 吉祥物" }
      ],
      images: ["/assets/projects/branding/frut-tre-logo.webp", "/assets/projects/branding/frut-tre-poster.webp"]
    },
    {
      id: "istts-sib-testimonial-video",
      title: "iSTTS SIB Testimonial & Showcase Video (Full HD)",
      titleId: "Video Testimoni & Showcase SIB iSTTS (Full HD)",
      titleZh: "iSTTS 商业信息系统专业官方宣传与学生实录视频 (1080p)",
      tagline: "Academic Promotional Documentary, Dynamic Subtitles & Multi-Angle DSLR Editing",
      taglineId: "Dokumenter Promosi Akademik, Teks Dinamis & Penyuntingan DSLR Multi-Sudut",
      taglineZh: "全高清学术宣讲纪录片、动态字幕特效与多机位 DSLR 剪辑调色",
      year: "2020",
      category: "design",
      role: "Director, Cinematographer & Video Editor",
      roleId: "Sutradara, Sinematografer & Editor Video",
      roleZh: "导演、摄影师兼后期剪辑师",
      client: "iSTTS (Institut Sains dan Teknologi Terpadu Surabaya)",
      clientZh: "iSTTS (泗水综合科学与技术学院)",
      techStack: ["Adobe Premiere Pro", "After Effects", "DSLR Cinematography", "Audio Mastering", "Color Grading"],
      description:
        "Official testimonial and departmental showcase video produced for the Business Information Systems (SIB) program at iSTTS. Handled interview lighting, DSLR camera setups, clean audio dialogue mastering, kinetic lower-third graphics, and narrative pacing.",
      descriptionId:
        "Video profil dan testimoni resmi yang diproduksi untuk program studi Sistem Informasi Bisnis (SIB) di iSTTS. Menangani pencahayaan wawancara, pengaturan kamera DSLR, mastering audio dialog jernih, grafis lower-third kinetik, dan penyuntingan alur narasi yang dinamis.",
      descriptionZh:
        "为 iSTTS 商业信息系统（SIB）专业量身打造的官方宣传与学生实录视频。全流程统筹现场布光、单反多机位采访收音、音频降噪、动态人名条花字设计与快节奏叙事剪辑。",
      highlights: [
        "Directed and edited official promotional video broadcasted to prospective university students.",
        "Synchronized multi-camera interview angles with clear dialogue audio equalization.",
        "Integrated motion graphics and kinetic typography emphasizing curriculum strengths."
      ],
      highlightsId: [
        "Menyutradarai dan menyunting video promosi resmi yang ditayangkan untuk calon mahasiswa baru.",
        "Menyelaraskan sudut kamera wawancara multi-sudut dengan ekualisasi audio dialog yang jernih.",
        "Mengintegrasikan grafis gerak dan tipografi kinetik yang menonjolkan keunggulan kurikulum prodi."
      ],
      highlightsZh: [
        "独立导演并剪辑官方专业宣讲大片，广泛用于高校招生宣传与校企合作展播。",
        "多机位音画精准对齐，应用专业级均衡器与压限器确保人声对白清澈通透。",
        "设计动效花字与关键信息图表，直观呈现专业课程体系与就业核心竞争力。"
      ],
      metrics: [
        { label: "Resolution", labelId: "Resolusi Video", labelZh: "视频分辨率", value: "1080p Full HD", valueId: "1080p Full HD", valueZh: "1080p 全高清" },
        { label: "Audio Mix", labelId: "Kualitas Audio", labelZh: "音质标准", value: "Normalized Dialogue Mix", valueId: "Dialog Audio Ternormalisasi", valueZh: "人声动态均衡降噪混音" },
        { label: "Target Audience", labelId: "Audiens Target", labelZh: "传播受众", value: "Prospective Students", valueId: "Calon Mahasiswa Baru", valueZh: "应届准大学生群体" }
      ],
      liveUrl: "https://youtu.be/jC_SPGsdmkk",
      demoLinks: [
        { label: "Watch on YouTube", labelId: "Tonton di YouTube", url: "https://youtu.be/jC_SPGsdmkk" }
      ]
    },
    {
      id: "istts-corona-video",
      title: "iSTTS COVID-19 Health Education PSA Video",
      titleId: "Video Edukasi Kesehatan Masyarakat COVID-19 iSTTS",
      titleZh: "iSTTS COVID-19 防疫科普与健康防护公益宣传短片",
      tagline: "Public Health Safety PSA, Motion Graphics Infographics & Clean Educational Editing",
      taglineId: "Video Layanan Masyarakat Edukasi Prokes, Infografis Motion Graphics & Editing Edukatif",
      taglineZh: "公共卫生安全公益片、动态图文科普演示与高说服力宣教剪辑",
      year: "2020",
      category: "design",
      role: "Video Producer & Motion Graphics Designer",
      roleId: "Produser Video & Desainer Motion Graphics",
      roleZh: "视频制作人与动态图形设计师",
      client: "iSTTS Public Health Campaign",
      clientZh: "iSTTS 校园公共卫生防疫科普项目",
      techStack: ["Adobe Premiere Pro", "After Effects", "Motion Graphics", "Infographic Design", "Voiceover Audio"],
      description:
        "Public service announcement (PSA) educational video produced during the early pandemic to communicate essential health protocols: proper hand washing, mask usage, physical distancing, and immune maintenance through engaging visual demonstrations.",
      descriptionId:
        "Video edukasi layanan masyarakat (PSA) yang diproduksi pada masa awal pandemi guna menyosialisasikan protokol kesehatan: tata cara cuci tangan yang benar, penggunaan masker, menjaga jarak fisik, dan menjaga imunitas tubuh.",
      descriptionZh:
        "在疫情初期制作的公益科普宣传片（PSA）。运用通俗易懂的动态视觉语言与直观演示，生动普及七步洗手法、口罩规范佩戴、安全社交距离及增强自身免疫力的科学防护常识。",
      highlights: [
        "Structured clear, empathetic health guidance into an easy-to-follow visual storyboard.",
        "Created custom kinetic infographic overlays explaining virus transmission mechanics.",
        "Mastered clear narration audio ensuring broad accessibility across diverse audiences."
      ],
      highlightsId: [
        "Menyusun panduan kesehatan yang jelas dan mudah dipahami ke dalam storyboard visual yang runtut.",
        "Membuat overlay infografis animasi untuk menjelaskan cara pencegahan penularan virus secara ilmiah.",
        "Melakukan mixing audio narasi yang jernih agar pesan mudah diserap oleh seluruh kalangan masyarakat."
      ],
      highlightsZh: [
        "将严谨医学指南转化为节奏明快、生动易懂的图文分镜脚本。",
        "设计动态信息图表悬浮动效，清晰解析病毒传播路径与阻断原理。",
        "完成专业级解说人声降噪与混音，确保在各类移动端播放时音质清晰响亮。"
      ],
      metrics: [
        { label: "Resolution", labelId: "Resolusi Video", labelZh: "画质标准", value: "1080p Full HD", valueId: "1080p Full HD", valueZh: "1080p 全高清" },
        { label: "Core Medium", labelId: "Media Utama", labelZh: "宣传形式", value: "Educational Health PSA", valueId: "PSA Edukasi Kesehatan", valueZh: "公益健康科普宣教短片" },
        { label: "Visual Style", labelId: "Gaya Visual", labelZh: "视觉风格", value: "Motion Infographics", valueId: "Infografis Animasi", valueZh: "动态信息图表 (Motion)" }
      ],
      liveUrl: "https://www.instagram.com/p/CAPuauUJmjr/",
      demoLinks: [
        { label: "Watch on Instagram", labelId: "Tonton di Instagram", url: "https://www.instagram.com/p/CAPuauUJmjr/" }
      ]
    },
    {
      id: "istts-corona-poster",
      title: "iSTTS COVID-19 Prevention & Awareness Poster",
      titleId: "Poster Edukasi Pencegahan & Kesadaran COVID-19 iSTTS",
      titleZh: "iSTTS COVID-19 科学防疫指南与公共健康宣教海报",
      tagline: "High-Contrast Vector Infographics, Hierarchy Principles & Public Health Visual Guidelines",
      taglineId: "Infografis Vektor Kontras Tinggi, Prinsip Hierarki & Panduan Visual Kesehatan Publik",
      taglineZh: "高对比度矢量信息图表、严谨视觉层级与公共健康防疫规范",
      year: "2020",
      category: "design",
      role: "Lead Graphic & Poster Designer",
      roleId: "Desainer Grafis & Poster Utama",
      roleZh: "平面与海报主设计师",
      client: "iSTTS Visual Communication Campaign",
      clientZh: "iSTTS 视觉传达健康倡议项目",
      techStack: ["CorelDRAW", "Adobe Illustrator", "Vector Graphics", "Visual Hierarchy", "Print Typography"],
      description:
        "High-impact graphic design poster created for public campus health awareness. Uses clean vector iconography, bold typographic hierarchy, and clear instructional layouts to educate viewers on preventive sanitary actions.",
      descriptionId:
        "Poster desain grafis berdaya visual kuat yang dirancang untuk kampanye kesehatan di lingkungan kampus. Memanfaatkan ikonografi vektor bersih, hierarki tipografi tegas, dan tata letak instruksional terstruktur guna mengedukasi langkah-langkah sanitasi pencegahan.",
      descriptionZh:
        "为校园公共卫生健康倡议操刀的高辨识度平面海报。运用极简几何矢量图标、清晰的粗黑标题字阶层与模块化图文布局，向公众科普关键防疫卫生步骤。",
      highlights: [
        "Structured intuitive visual hierarchy allowing viewers to grasp safety protocols in under 5 seconds.",
        "Engineered custom flat vector icons representing masks, sanitizer, and social distancing.",
        "Prepared high-resolution print-ready CMYK output files ensuring crisp offset reproduction."
      ],
      highlightsId: [
        "Menyusun hierarki visual intuitif yang memungkinkan audiens memahami pesan prokes dalam 5 detik.",
        "Mendesain ikon vektor datar mandiri untuk masker, hand sanitizer, dan anjuran jaga jarak.",
        "Menyiapkan file output cetak resolusi tinggi standar CMYK untuk hasil cetak offset tajam."
      ],
      highlightsZh: [
        "构建直观的三级视觉信息层级，使读者在 5 秒内快速获取核心防护要点。",
        "原创绘制口罩、洗手液及安全距离等系列扁平化矢量图标集。",
        "规范输出 300 DPI CMYK 印刷级源文件，确保大幅面印刷色彩准确无色差。",
      ],
      metrics: [
        { label: "Print Format", labelId: "Format Cetak", labelZh: "海报规格", value: "A3 / A2 Offset Print", valueId: "Cetak Offset A3 / A2", valueZh: "A3 / A2 胶印工业标准" },
        { label: "Resolution", labelId: "Resolusi Gambar", labelZh: "画质精度", value: "300 DPI High-Res Vector", valueId: "Vektor High-Res 300 DPI", valueZh: "300 DPI 矢量级超清" },
        { label: "Color Profile", labelId: "Profil Warna", labelZh: "色彩模式", value: "CMYK Certified Master", valueId: "Master Warna CMYK", valueZh: "CMYK 印刷级工业校色" }
      ],
      images: [
        "/assets/projects/design/istts-corona-poster.webp"
      ]
    },
    {
      id: "istts-stop-motion-biodata",
      title: "iSTTS Creative Stop-Motion Biodata Animation",
      titleId: "Animasi Biodata Stop-Motion Kreatif iSTTS",
      titleZh: "iSTTS 创意定格动画 (Stop-Motion) 个人视觉短片",
      tagline: "Frame-by-Frame Paper Craft Animation, Precision Sound Synchronization & Creative Storytelling",
      taglineId: "Animasi Kertas Craft Bingkai Demi Bingkai, Sinkronisasi Audio Presisi & Narasi Kreatif",
      taglineZh: "逐格纸艺定格动画、毫秒级音频对齐音效与高创意个人视觉叙事",
      year: "2019",
      category: "design",
      role: "Animator, Concept Artist & Sound Designer",
      roleId: "Animator, Konseptor Artistik & Desainer Suara",
      roleZh: "定格动画师、美术概念设计兼音效设计师",
      client: "iSTTS Multimedia Art Studio",
      clientZh: "iSTTS 多媒体艺术实验室",
      techStack: ["Stop Motion", "DSLR Frame Capture", "Adobe Premiere Pro", "Audio Foley", "Paper Craft"],
      description:
        "Creative frame-by-frame stop-motion animation video telling a biographical self-introduction through hand-crafted paper cutouts, dynamic typography props, and precisely synchronized foley sound effects.",
      descriptionId:
        "Video animasi stop-motion kreatif bingkai demi bingkai yang mengisahkan perkenalan biodata diri melalui kerajinan guntingan kertas tangan, properti tipografi dinamis, dan efek suara foley yang disinkronkan secara presisi.",
      descriptionZh:
        "采用纯手工剪纸与物理道具拍摄的逐格定格（Stop-Motion）创意个人档案短片。历经数百张单反逐帧微距拍摄，结合毫秒级拟音（Foley）音效合成，呈现兼具趣味性与艺术质感的定格视听表达。",
      highlights: [
        "Captured 500+ individual high-resolution DSLR frames with consistent lighting and micro-movements.",
        "Synchronized paper transformations with custom sound foley for tactile audio-visual punch.",
        "Earned top academic marks for originality, craft precision, and narrative charm."
      ],
      highlightsId: [
        "Merekam 500+ foto frame resolusi tinggi secara konsisten dengan pencahayaan dan gerakan mikro presisi.",
        "Menyelaraskan transformasi kertas dengan efek suara foley untuk pengalaman audio-visual yang hidup.",
        "Meraih nilai akademik tertinggi atas orisinalitas ide, ketelitian craft, dan daya tarik narasi."
      ],
      highlightsZh: [
        "在严控恒定光源环境下拍摄 500+ 张单反超清画幅，精确控制物理道具毫米级微移。",
        "手工拟音与纸艺动画形变点位严格对齐，赋予画面极强的打击感与机械生命力。",
        "凭借极高工艺精细度与叙事趣味性，荣获多媒体动画课程全班最高分评定。",
      ],
      metrics: [
        { label: "Frame Count", labelId: "Total Frame", labelZh: "定格拍摄帧数", value: "500+ Frames Captured", valueId: "500+ Frame Difoto", valueZh: "500+ 逐格精细拍摄" },
        { label: "Animation Style", labelId: "Gaya Animasi", labelZh: "动画艺术风格", value: "Hand-Crafted Paper Cutout", valueId: "Seni Gunting Kertas Tangan", valueZh: "纯手工剪纸定格艺术" },
        { label: "Audio Design", labelId: "Tata Suara", labelZh: "音效制作", value: "Custom Foley Sound Effects", valueId: "Efek Suara Foley Kustom", valueZh: "定制 Foley 拟音实录" }
      ],
      liveUrl: "https://www.youtube.com/watch?v=Fi48Fw_UZC0",
      demoLinks: [
        { label: "Watch on YouTube", labelId: "Tonton di YouTube", url: "https://www.youtube.com/watch?v=Fi48Fw_UZC0" }
      ]
    },
    {
      id: "istts-daily-vlog",
      title: "COVID-19 Era: Cinematic Daily Routine & Remote Study Vlog (iSTTS)",
      titleId: "Vlog Sinematik Keseharian & Kuliah Online Era Pandemi COVID-19 (iSTTS)",
      titleZh: "iSTTS 疫情居家网课时期个人日常与微纪录短片 (COVID-19)",
      tagline: "Cinematic Color Grade, Ambient Soundscapes & COVID-19 Pandemic Daily Routine Narrative",
      taglineId: "Pewarnaan Sinematik, Tata Suara Ambien & Rutinitas Keseharian Era Pandemi COVID-19",
      taglineZh: "电影级调色、环境音效与疫情居家网课时期的真实生活节奏",
      year: "2020",
      category: "design",
      role: "Cinematographer, Director & Video Editor",
      roleId: "Sinematografer, Sutradara & Editor Video",
      roleZh: "摄影师、导演与剪辑调色师",
      client: "iSTTS Creative Videography Workshop",
      clientZh: "iSTTS 影视创意创作工作坊",
      techStack: ["Adobe Premiere Pro", "Lumetri Color", "DSLR Cinematography", "B-Roll Storytelling", "Audio Mixing"],
      description:
        "A cinematic personal vlog documenting daily life routines, remote online university study, and personal projects during the COVID-19 pandemic. Showcases contemplative B-roll storytelling, warm filmic color grading, rhythmic soundtrack pacing, and rich ambient audio layering from home.",
      descriptionId:
        "Vlog personal sinematik yang mendokumentasikan rutinitas kehidupan harian, kuliah online dari rumah, dan proyek pribadi selama masa pandemi COVID-19. Menampilkan penceritaan visual berbasis B-roll kontemplatif, grading warna filmis yang hangat, ritme musik dinamis, dan layering audio ambien suasana rumah.",
      descriptionZh:
        "一部记录 COVID-19 疫情居家隔离与远程网课时期真实生活节奏的电影感微纪录 Vlog。生动记录居家学习、个人探索与日常作息，融合沉浸式氛围镜头、暖调胶片色彩方案与音画节奏剪辑。",
      highlights: [
        "Contemplative Pandemic Narrative: Captured the authentic rhythm of daily life and online remote study during COVID-19.",
        "Cinematic Color Grading: Applied tailored Lumetri Color curves achieving a warm, nostalgic film aesthetic.",
        "Rhythmic B-Roll & Foley Layering: Synced handheld domestic B-roll with dynamic music and rich ambient soundscapes."
      ],
      highlightsId: [
        "Narasi Masa Pandemi Kontemplatif: Menangkap ritme autentik keseharian dan kuliah online dari rumah selama pandemi COVID-19.",
        "Grading Warna Sinematik: Menerapkan kurva Lumetri Color khusus untuk menciptakan estetika filmis hangat yang nostalgik.",
        "Layering B-Roll & Foley Dinamis: Menyelaraskan footage B-roll genggam dengan ketukan musik serta suasana ambien audio yang hidup."
      ],
      highlightsZh: [
        "疫情日常真实叙事：纪实还原疫情居家网课期间的自律作息、专注学习与内心独白。",
        "电影感专业校色：独立调校 Lumetri Color 曲线与胶片颗粒，呈现极具质感的人文暖色调。",
        "声画同步与环境拟音：将居家特写镜头与背景音乐节奏严丝合缝卡点，融合生活环境白噪音。"
      ],
      metrics: [
        { label: "Resolution", labelId: "Resolusi Video", labelZh: "视频画质", value: "1080p 60 FPS Cinematic", valueId: "1080p 60 FPS Sinematik", valueZh: "1080p 60帧电影感画质" },
        { label: "Color Space", labelId: "Grading Warna", labelZh: "色彩调校", value: "Filmic Warm Grade", valueId: "Grading Sinematik Hangat", valueZh: "电影感暖色调专业校色" },
        { label: "Pacing", labelId: "Ritme Editing", labelZh: "剪辑节奏", value: "Dynamic Narrative Rhythm", valueId: "Ritme Narasi Dinamis", valueZh: "动感节奏叙事剪辑" }
      ],
      liveUrl: "https://www.youtube.com/watch?v=xz0GI1EuGIc",
      demoLinks: [
        { label: "Watch on YouTube", labelId: "Tonton di YouTube", url: "https://www.youtube.com/watch?v=xz0GI1EuGIc" }
      ]
    },
    {
      id: "istts-quote-poster",
      title: "iSTTS Inspirational Typography & Quote Poster",
      titleId: "Poster Tipografi Inspiratif & Kalimat Motivasi iSTTS",
      titleZh: "iSTTS 极简主义艺术排版与励志名言设计海报",
      tagline: "Swiss Style Grid Layout, Expressive Lettering & High-Contrast Minimalist Aesthetic",
      taglineId: "Tata Letak Grid Swiss Style, Lettering Ekspresif & Estetika Minimalis Kontras Tinggi",
      taglineZh: "瑞士平面设计网格系统、表现主义字体设计与高对比极简美学",
      year: "2019",
      category: "design",
      role: "Lead Typographic & Graphic Designer",
      roleId: "Desainer Tipografi & Grafis Utama",
      roleZh: "字体设计与平面美学设计师",
      client: "iSTTS Graphic Arts Showcase",
      clientZh: "iSTTS 平面艺术作品年展",
      techStack: ["Adobe Illustrator", "CorelDRAW", "Swiss Grid System", "Custom Lettering", "Contrast Theory"],
      description:
        "Modernist typographic art poster applying Swiss International Typographic Style principles. Balances negative space, bold geometric letterforms, and striking color contrast to deliver powerful emotional resonance and philosophical reflection.",
      descriptionId:
        "Poster seni tipografi modernis yang menerapkan prinsip Swiss International Typographic Style. Menyeimbangkan ruang negatif (white space), bentuk huruf geometris tebal, dan kontras warna yang mencolok guna menghadirkan resonansi emosional dan perenungan filosofis.",
      descriptionZh:
        "遵循国际主义平面设计风格（瑞士风格）创作的现代主义艺术排版海报。巧妙运用留白负空间、强烈的几何字体构图与纯粹的色彩对比，传递出富有哲思与视觉张力的精神力量。",
      highlights: [
        "Engineered asymmetric Swiss grid layout creating harmony between negative space and typography.",
        "Customized distinctive letterform kerning and tracking for maximum visual punch.",
        "Delivered award-winning poster recognized for refined aesthetic minimalism."
      ],
      highlightsId: [
        "Membangun tata letak grid asimetris Swiss style yang menciptakan keharmonisan ruang dan huruf.",
        "Mengatur kerning dan tracking tipografi khusus untuk memberikan daya visual yang kuat.",
        "Menghasilkan karya poster bernilai estetika tinggi dengan pendekatan minimalis elegan."
      ],
      highlightsZh: [
        "严谨构建非对称瑞士网格，在大量留白与实体文字间达成高度动态平衡。",
        "逐字微调字偶间距 (Kerning) 与字干粗细，赋予字体鲜明的情绪表达张力。",
        "作品凭借极简纯粹的高级质感，在校内平面设计年展中斩获优秀作品嘉奖。"
      ],
      metrics: [
        { label: "Design School", labelId: "Aliran Desain", labelZh: "设计流派", value: "Swiss Typographic Style", valueId: "Gaya Tipografi Swiss", valueZh: "瑞士国际主义平面风格" },
        { label: "Layout Grid", labelId: "Sistem Grid", labelZh: "网格规范", value: "Modular Grid System", valueId: "Sistem Grid Modular", valueZh: "严谨模块化网格系统" },
        { label: "Resolution", labelId: "Resolusi Karya", labelZh: "输出分辨率", value: "Vector 300 DPI Output", valueId: "Output Vektor 300 DPI", valueZh: "300 DPI 矢量高精输出" }
      ],
      images: [
        "/assets/projects/design/istts-quote-poster.webp"
      ]
    },
    {
      id: "sushi-restaurant-prototype",
      title: "Sushi Tei Digital Menu & Interactive Ordering Prototype",
      titleId: "Prototipe Menu Digital & Pemesanan Interaktif Sushi Tei",
      titleZh: "Sushi Tei 数字化交互式点餐系统与菜单原型设计",
      tagline: "Japanese Culinary UI Aesthetics, Interactive Category Navigation & Cart State Simulation",
      taglineId: "Estetika UI Kuliner Jepang, Navigasi Kategori Interaktif & Simulasi Keranjang Pesanan",
      taglineZh: "日式餐饮视觉美学、分类点餐交互原型与购物车订单结算状态流转",
      year: "2019",
      category: "design",
      role: "Lead UI/UX Designer & Prototyper",
      roleId: "Desainer UI/UX Utama & Pembuat Prototipe",
      roleZh: "UI/UX 主设计师与高保真原型工程师",
      client: "iSTTS Human-Computer Interaction Project",
      clientZh: "iSTTS 人机交互界面设计 (HCI) 课题",
      techStack: ["Adobe XD", "Figma", "Photoshop", "HCI Usability Heuristics", "Interactive Prototyping"],
      description:
        "High-fidelity digital menu and table-side ordering tablet prototype designed for upscale Japanese dining (Sushi Tei). Features authentic dark-slate aesthetics, intuitive category tabs (Nigiri, Sashimi, Rolls, Beverages), and streamlined guest checkout flows.",
      descriptionId:
        "Prototipe tablet pemesanan mandiri dan menu digital interaktif beresolusi tinggi untuk restoran kuliner Jepang (Sushi Tei). Menghadirkan estetika gelap elegan khas Jepang, navigasi kategori intuitif (Nigiri, Sashimi, Rolls, Minuman), dan alur konfirmasi pesanan yang mudah dipahami.",
      descriptionZh:
        "为知名日料连锁（Sushi Tei）量身定制的高保真平板自助点餐原型系统。设计深度汲取日式传统黑石美学，构建直观顺畅的菜品分类导航（握寿司、刺身、卷物、热食与饮品）及清晰的账单加点确认链路。",
      highlights: [
        "Applied Nielsen's Usability Heuristics ensuring zero confusion during customer self-ordering.",
        "Crafted mouth-watering food photography layouts with clear price tags and ingredient indicators.",
        "Simulated end-to-end user journeys from table check-in to real-time kitchen order dispatch."
      ],
      highlightsId: [
        "Menerapkan prinsip Heuristik Usabilitas Nielsen untuk mencegah kebingungan saat tamu memesan mandiri.",
        "Menyusun tata letak foto hidangan menggugah selera dengan label harga dan keterangan alergen jelas.",
        "Mensimulasikan alur pemesanan lengkap mulai dari duduk di meja hingga pengiriman pesanan ke dapur."
      ],
      highlightsZh: [
        "严格遵循尼尔森十大可用性原则，杜绝顾客在自助点餐场景下的操作困惑与误触。",
        "精细排版高清晰度美食视觉画册，突出标注价格、食材过敏原及厨师推荐星级。",
        "高保真完整模拟从入座扫描、自选加购、备注定制到最终后厨出票的全流程交互。"
      ],
      metrics: [
        { label: "Usability Score", labelId: "Skor Kemudahan", labelZh: "易用性评估", value: "95% Task Completion Rate", valueId: "95% Penyelesaian Tugas", valueZh: "95% 订餐任务顺利达成" },
        { label: "Fidelity", labelId: "Tingkat Presisi", labelZh: "原型精度", value: "High-Fidelity Interactive", valueId: "Interaktif High-Fidelity", valueZh: "高保真可交互动态原型" },
        { label: "Design System", labelId: "Sistem Desain", labelZh: "视觉设计规范", value: "Japanese Modern Slate", valueId: "Slate Modern Jepang", valueZh: "日式现代极简黑灰风" }
      ],
      images: [
        "/assets/projects/software/Home_Page.webp",
        "/assets/projects/software/Splash_Screen.webp",
        "/assets/projects/software/Login_Page.webp",
        "/assets/projects/software/Menu.webp",
        "/assets/projects/software/Menu_Per_Kategori.webp",
        "/assets/projects/software/Cart.webp",
        "/assets/projects/software/Status_Pesan.webp",
        "/assets/projects/software/Kategori_Booking.webp"
      ]
    },
    {
      id: "premium-juice-branding",
      title: "Premium Juice: Preservative-Free Pure Fruit Juice Bottle Branding",
      titleId: "Branding & Kemasan Botol Jus Buah Murni Tanpa Pengawet Premium Juice",
      titleZh: "Premium Juice: 鲜榨纯果汁瓶贴包装设计与外卖生态运营",
      tagline: "Moisture-Resistant PET Bottle Stickers, Early 2016 GoFood Merchant Onboarding & Excel COGS Yield Models",
      taglineId: "Stiker Botol PET Tahan Embun, Pelopor Mitra GoFood 2016 & Kalkulasi HPP Rendemen Buah Excel",
      taglineZh: "耐冷凝防水瓶贴印刷设计、2016早期 GoFood/GrabFood 外卖入驻与鲜果出汁率 HPP 测算模型",
      year: "2016",
      category: "design",
      role: "Brand Packaging Designer & Delivery Operations Lead",
      roleId: "Desainer Kemasan Merek & Koordinator Operasional Delivery",
      roleZh: "品牌包装设计师与数字化外卖运营负责人",
      client: "Premium Juice Enterprise (Surabaya)",
      clientZh: "Premium Juice 鲜榨工坊 (泗水家族实体)",
      techStack: ["CorelDRAW", "PET Bottle Label Stickers", "GoFood & GrabFood (2016)", "Excel Yield & COGS Models"],
      description:
        "Complete brand packaging and early on-demand delivery operations engineered in late 2016 for Premium Juice—a family enterprise producing 100% pure preservative-free fresh fruit juices (Avocado, Guava, Mango, Soursop, Orange). Jem designed the cylindrical PET bottle label stickers engineered with waterproof inks to withstand refrigeration condensation, onboarded the business as one of Surabaya's earliest GoFood/GrabFood merchants in late 2016, and built comprehensive Excel models calculating fruit yield percentages and cost of goods sold (COGS) per bottle.",
      descriptionId:
        "Desain kemasan merek menyeluruh dan manajemen operasional delivery online pada akhir 2016 untuk Premium Juice—usaha keluarga yang memproduksi aneka jus buah murni 100% tanpa bahan pengawet (Alpukat, Jambu, Mangga, Sirsak, Jeruk). Jem merancang stiker label botol PET silindris dengan tinta tahan air dan embun pendingin kulkas, mendaftarkan usaha sebagai salah satu merchant pelopor GoFood/GrabFood di Surabaya pada akhir 2016, serta menyusun formula spreadsheet Excel untuk mengkalkulasi persentase rendemen buah dan Harga Pokok Penjualan (HPP) per botol.",
      descriptionZh:
        "于 2016 年底为家族纯天然鲜榨果汁实体 Premium Juice 操刀的瓶贴包装全案与早期外卖数字化运营。产品涵盖牛油果、番石榴、芒果、红毛榴莲、鲜橙等 100% 零添加无防腐剂纯果汁。Jem 全流程主导：使用 CorelDRAW 设计耐冷藏凝水不脱胶的圆柱形 PET 瓶贴不干胶；作为泗水最早一批商家在 2016 年底率先入驻 GoFood/GrabFood 外卖平台；并利用 Microsoft Excel 建立起不同季节原料鲜果出汁率与单瓶 HPP 边际成本精细化核算模型。",
      highlights: [
        "Engineered moisture-resistant cylindrical wrap-around bottle stickers resistant to refrigeration condensation.",
        "Pioneered early online food delivery operations on GoFood and GrabFood in Surabaya (late 2016).",
        "Developed mathematical Excel COGS models accounting for seasonal fruit yield variations.",
        "Produced eye-catching printed promotional flyers and structured beverage menus."
      ],
      highlightsId: [
        "Merancang stiker botol melingkar tahan air dan embun pendingin lemari es agar tidak mudah mengelupas.",
        "Memelopori integrasi penjualan online di GoFood dan GrabFood di Surabaya pada akhir tahun 2016.",
        "Membangun formula perhitungan HPP Excel berbasis variasi rendemen buah musiman.",
        "Mendesain brosur promosi cetak yang menarik dan daftar menu minuman terstruktur."
      ],
      highlightsZh: [
        "设计抗冷凝水侵蚀的圆柱形不干胶环形瓶贴，确保冷藏环境下标签平整不开胶。",
        "在 2016 年底极具前瞻性地将实体门店接入 GoFood 与 GrabFood，开辟线上即时配送渠道。",
        "运用 Excel 搭建鲜果出汁率与季节性原料采购价格浮动关联的 HPP 精算模型。",
        "设计色彩亮丽的全彩外卖折页与线下促销单页，强化天然新鲜的视觉吸引力。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode Proyek", labelZh: "项目时间", value: "Late 2016", valueId: "Akhir 2016", valueZh: "2016年末" },
        { label: "Platform Onboarding", labelId: "Kanal Digital", labelZh: "外卖渠道入驻", value: "GoFood & GrabFood 2016", valueId: "GoFood & GrabFood 2016", valueZh: "GoFood 与 GrabFood 2016" },
        { label: "Packaging Form", labelId: "Bentuk Kemasan", labelZh: "包装形式", value: "PET Bottle Wrap Sticker", valueId: "Stiker Wrap Botol PET", valueZh: "PET 瓶环绕式防水贴标" },
        { label: "Financial Modeling", labelId: "Model Finansial", labelZh: "财务模型", value: "Excel Yield & COGS Model", valueId: "Model Yield & COGS Excel", valueZh: "Excel 成本与毛利精算模型" }
      ],
      images: [
        "/assets/projects/design/premium-juice.webp",
        "/assets/projects/design/premium-juice-sticker.webp"
      ],
      blueprintFlow: [
        {
          step: "Condensation-Proof Bottle Label Engineering",
          stepId: "Rekayasa Label Botol Tahan Embun",
          detail: "Designed cylindrical vinyl stickers with waterproof inks and high-tack adhesive for refrigerator cold-cases.",
          detailId: "Merancang stiker vinil silindris dengan tinta anti air dan perekat kuat untuk etalase pendingin."
        },
        {
          step: "Early On-Demand Delivery Channel Integration",
          stepId: "Integrasi Merchant Online Delivery Awal",
          detail: "Configured store profiles, digital menus, and packaging logistics on GoFood and GrabFood during initial launch.",
          detailId: "Menata profil merchant, foto menu digital, dan logistik pengemasan di GoFood dan GrabFood saat rilis awal."
        },
        {
          step: "Fruit Yield & COGS Financial Ledger",
          stepId: "Kalkulasi Rendemen & HPP Buah Excel",
          detail: "Calculated juice extraction ratios per kilogram to establish precise pricing tiers across 5 fruit varieties.",
          detailId: "Menghitung rasio ekstraksi sari buah per kilogram untuk menetapkan harga jual yang menguntungkan."
        }
      ]
    },
    {
      id: "highschool-projects-portfolio",
      title: "High School Projects Portfolio (Xin Zhong School)",
      titleId: "Portofolio Proyek Masa SMA (Xin Zhong School Surabaya)",
      titleZh: "高中多学科创新与设计项目集 (新中三语学校)",
      tagline: "First Open-Source HTML/CSS/JS Biodata Web, Class 10B Farewell Documentary & Insomnia Public Health Posters",
      taglineId: "Website Biodata Personal HTML/CSS/JS Pertama di GitHub, Film Dokumenter 10B & Poster Edukasi Insomnia",
      taglineZh: "首个 GitHub 开源 HTML/CSS/JS 个人网页、10B 毕业班徽与微纪录片、全英文失眠健康倡议海报",
      year: "2015 – 2016",
      category: "design",
      role: "Web Developer, Graphic & Logo Designer, Video Director",
      roleId: "Pengembang Web, Desainer Grafis & Logo, Sutradara Video",
      roleZh: "前端网页开发者、平面与班徽设计师、视频导演",
      client: "Xin Zhong School Surabaya (Academic & Creative Projects)",
      clientZh: "泗水新中三语学校 (Xin Zhong School)",
      techStack: ["HTML5", "CSS3", "JavaScript", "Adobe Premiere Pro", "CorelDRAW", "Sony Vegas", "GitHub Open Source", "DSLR Video"],
      description:
        "Comprehensive multi-disciplinary technical and creative project portfolio created during Jem's high school years at Xin Zhong School (2015–2016). Includes Jem's very first open-source personal website coded in raw native HTML/CSS/JS and published on GitHub, the complete Class 10B visual identity (custom shield logo emblem, 15+ student portrait caricatures, emotional 1080p graduation documentary video), educational public health posters in English on overcoming insomnia, and philosophical moral education short films.",
      descriptionId:
        "Kumpulan karya multidisiplin dan proyek kreatif masa SMA Jem di Xin Zhong School Surabaya (2015–2016). Mencakup website profil pribadi HTML/CSS/JS native pertama yang dipublikasikan secara open-source di GitHub, identitas visual kelas 10B (logo lambang perisai, karikatur 15+ siswa, video dokumenter perpisahan 1080p yang emosional), poster kampanye kesehatan berbahasa Inggris tentang penanganan insomnia, serta film pendek edukasi moral.",
      descriptionZh:
        "Jem 在泗水新中三语学校（Xin Zhong School，2015–2016年）高中时期的跨学科技术与视觉创作总集。涵盖：首个使用原生 HTML5/CSS3/JS 纯手工手写的个人简介网页并在 GitHub 开源；10B 班级全套视觉形象设计（原创金色盾形班徽、15位同窗手绘肖像漫画折页及 1080p 毕业回忆微纪录片）；全英文版失眠成因与科学调理健康教育海报；以及自主编导拍摄的品德教育短剧微电影。",
      highlights: [
        "Primordial Web Coding Milestone: Developed and open-sourced first responsive biodata website on GitHub (2015).",
        "Class 10B Identity & Film: Designed vector crest emblem, 15+ student caricature layouts, and edited farewell documentary video.",
        "Health Advocacy & Print Design: Created high-impact educational posters in English on the neurological impacts of sleep deprivation.",
        "Demonstrated early cross-functional versatility bridging software development, graphic artistry, and video directing."
      ],
      highlightsId: [
        "Tonggak Coding Web Pertama: Mengembangkan dan merilis website profil pribadi open-source pertama di GitHub (2015).",
        "Identitas & Film Kelas 10B: Mendesain logo lambang perisai vektor, karikatur 15+ siswa, dan menyunting video dokumenter perpisahan.",
        "Desain Poster Kesehatan: Merancang poster edukasi berbahasa Inggris mengenai dampak neurologis kekurangan tidur (insomnia).",
        "Membuktikan bakat lintas bidang sejak dini yang memadukan rekayasa software, desain grafis, dan penyutradaraan video."
      ],
      highlightsZh: [
        "Web 开发生涯原点：手写首个原生 HTML/CSS/JS 个人网页并在 GitHub 开源建立数字档案（2015年）。",
        "10B 班级视觉全案与纪录片：设计矢量金色盾形徽标、15+同学卡通漫画年册并亲自拍摄剪辑毕业纪念视频。",
        "全英文健康科普海报：深入调研睡眠剥夺对神经系统的影响，排版制作超清公共卫生科普展板。",
        "展现出早期在软件编程、平面艺术设计与影视导演等领域的跨学科综合领悟力与执行力。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode Proyek", labelZh: "项目时间", value: "2015 – 2016", valueId: "2015 – 2016", valueZh: "2015 – 2016" },
        { label: "Origin Milestone", labelId: "Tonggak Sejarah", labelZh: "技术里程碑", value: "1st Web on GitHub (2015)", valueId: "Web Pertama di GitHub (2015)", valueZh: "2015年首个 GitHub 网页" },
        { label: "Creative Disciplines", labelId: "Disiplin Kreatif", labelZh: "跨界创作维度", value: "Web, Design, Video, Logo", valueId: "Web, Desain, Video, Logo", valueZh: "网页 · 平面 · 视频 · 标识" },
        { label: "Institution", labelId: "Institusi", labelZh: "就读院校", value: "Xin Zhong School", valueId: "Xin Zhong School", valueZh: "新中三语学校 (Xin Zhong)" }
      ],
      images: [
        "/assets/projects/design/Poster_Sekolah_Februari_2016_(1).webp",
        "/assets/projects/design/Logo_10B_April_2016.webp"
      ],
      blueprintFlow: [
        {
          step: "First Open-Source GitHub Personal Website (2015)",
          stepId: "Website GitHub Open-Source Pertama (2015)",
          detail: "Hand-coded native HTML5/CSS3/JS website published on GitHub pages showcasing skills and personal milestones.",
          detailId: "Menulis kode HTML/CSS/JS native untuk website biodata pribadi yang di-hosting gratis di GitHub."
        },
        {
          step: "Class 10B Brand Identity & Documentary (2016)",
          stepId: "Identitas Visual & Film Dokumenter 10B (2016)",
          detail: "Designed vector crest logo, 15+ student caricature layouts, and edited an emotional graduation documentary video.",
          detailId: "Mendesain logo lambang kelas 10B, layout karikatur siswa, dan menyunting video kenangan perpisahan."
        },
        {
          step: "Public Health Poster & Short Film Production",
          stepId: "Poster Edukasi Kesehatan & Film Pendek Moral",
          detail: "Researched insomnia neurological causes for an English poster and directed moral education short films.",
          detailId: "Melakukan riset dampak insomnia untuk poster berbahasa Inggris dan menyutradarai film pendek edukasi."
        }
      ]
    },
    {
      id: "djoeragan-sego-branding",
      title: "Djoeragan Sego: Traditional Rice Wraps Branding & Food Stall Architecture",
      titleId: "Djoeragan Sego: Branding Nasi Bungkus Tradisional & Desain Gerobak Kuliner",
      titleZh: "Djoeragan Sego: 传统印尼芭蕉叶香叶饭品牌全案、吉祥物徽标与移动餐车空间设计",
      tagline: "Juragan Mascot Logo Badge, 140x180cm Food Stall Cart Blueprints, Tri-Fold Menus & 4.8MB Standing Banner",
      taglineId: "Logo Maskot Juragan, Gambar Kerja Gerobak Kuliner 140x180cm, Brosur Menu & X-Banner 4.8MB",
      taglineZh: "传统爪哇头巾老板吉祥物徽标、140x180cm 美食移动餐车工程图、三折页外卖菜单与 4.8MB 垂直 X 展架",
      year: "2015",
      category: "design",
      role: "Lead Brand Identity Designer & Cart Architect",
      roleId: "Desainer Utama Identitas Merek & Arsitek Gerobak",
      roleZh: "全案品牌视觉主设计师与移动餐车空间架构师",
      client: "Djoeragan Sego Traditional Culinary (Surabaya)",
      clientZh: "Djoeragan Sego 传统芭蕉叶香叶饭 (泗水家族实体)",
      techStack: ["CorelDRAW", "Adobe Illustrator", "Food Cart Architecture", "Offset Print Dielines", "X-Banner Design"],
      description:
        "Comprehensive 360-degree brand identity and physical food cart architecture created in 2015 for Djoeragan Sego—a traditional Indonesian culinary enterprise specializing in authentic banana leaf-wrapped rice combos (Nasi Kuning, Nasi Uduk, Nasi Campur, Nasi Liwet, Nasi Kucing). Jem designed the iconic Juragan character mascot wearing traditional Javanese blangkon headgear, technical structural blueprints for a 140x180cm mobile street food cart with canopy, full-color A4 tri-fold menus, and a 4.8MB high-res standing promotional X-banner.",
      descriptionId:
        "Identitas merek 360 derajat terintegrasi dan desain gambar kerja gerobak kuliner fisik yang dirancang pada tahun 2015 untuk Djoeragan Sego—usaha kuliner tradisional yang menyajikan aneka nasi bungkus daun pisang autentik (Nasi Kuning, Nasi Uduk, Nasi Campur, Nasi Liwet, Nasi Kucing). Jem merancang logo maskot karakter Juragan berblangkon khas Jawa, gambar kerja teknis gerobak etalase kuliner 140x180cm lengkap dengan kanopi, brosur menu katering lipat tiga A4 full-color, serta standing X-roll banner promosi resolusi tinggi 4.8MB.",
      descriptionZh:
        "于 2015 年为家族传统印尼芭蕉叶香叶饭品牌 Djoeragan Sego 操刀的 360 度品牌全案与移动餐车物理空间设计。产品专营黄姜饭 (Nasi Kuning)、椰浆饭 (Nasi Uduk)、什锦香叶饭 (Nasi Campur) 及猫饭 (Nasi Kucing) 等经典地道美食。Jem 全权负责：绘制佩戴传统爪哇头巾 (Blangkon) 的掌柜吉祥物圆形徽标、绘制 140x180cm 户外移动美食餐车工程施工图及遮阳天篷、排版 A4 三折页外卖菜单画册，并输出 4.8MB 超清垂直 X 展架宣传大图。",
      highlights: [
        "Designed distinctive Javanese 'Juragan' character mascot conveying culinary mastery, warmth, and tradition.",
        "Drafted structural technical drawing blueprints for a 140x180cm mobile street food cart with display glass.",
        "Produced comprehensive full-color A4 tri-fold takeaway catering menus and large promotional X-banners.",
        "Demonstrated spatial design and multi-format print mastery bridging graphic art with physical retail builds."
      ],
      highlightsId: [
        "Mendesain logo maskot karakter 'Juragan' berblangkon Jawa yang ramah dan kental dengan nuansa kuliner nusantara.",
        "Menyusun gambar kerja struktural gerobak kuliner 140x180cm lengkap dengan etalase kaca dan kanopi.",
        "Merancang brosur menu katering lipat tiga A4 full-color serta standing banner X-roll promosi pinggir jalan.",
        "Membuktikan keahlian desain spasial dan grafis cetak yang menjembatani seni visual dengan eksekusi fisik gerobak."
      ],
      highlightsZh: [
        "原创绘制佩戴传统爪哇头巾的掌柜吉祥物徽标，传递地道古法烹调的亲和力与文化认同感。",
        "出具 140x180cm 户外移动美食餐车结构图纸，涵盖防雨遮阳篷、展示玻璃窗与不锈钢台面分区。",
        "全案排版 A4 三折页全彩外卖餐饮画册，并设计 4.8MB 超清垂直 X 展架宣传大图。",
        "展现出卓越的空间工程施工图绘制能力，将平面美学与线下餐饮实体空间无缝打通。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode Proyek", labelZh: "项目时间", value: "2015", valueId: "2015", valueZh: "2015年" },
        { label: "Cart Dimensions", labelId: "Dimensi Gerobak", labelZh: "餐车工程规格", value: "140 x 180 cm Blueprint", valueId: "Cetak Biru 140 x 180 cm", valueZh: "140 x 180 cm 结构工程蓝图" },
        { label: "Banner File Size", labelId: "Resolusi Banner", labelZh: "海报输出大小", value: "4.8MB High-Res Print", valueId: "Cetak High-Res 4.8MB", valueZh: "4.8MB 超清印刷母件" },
        { label: "Brand Deliverables", labelId: "Output Desain", labelZh: "设计产出", value: "Mascot, Cart, Menu & Banner", valueId: "Maskot, Gerobak, Menu & Banner", valueZh: "吉祥物 · 餐车 · 菜单 · 展架" }
      ],
      images: [
        "/assets/projects/branding/djoeragan-sego-logo.webp",
        "/assets/projects/branding/djoeragan-sego-gerobak-1.webp",
        "/assets/projects/branding/djoeragan-sego-gerobak-2.webp",
        "/assets/projects/branding/djoeragan-sego-brosur.webp",
        "/assets/projects/branding/djoeragan-sego-banner.webp"
      ],
      blueprintFlow: [
        {
          step: "Juragan Mascot & Vector Emblem",
          stepId: "Logo Maskot Juragan & Lambang Vektor",
          detail: "Illustrated character mascot featuring Javanese blangkon and welcoming smile for maximum roadside visibility.",
          detailId: "Menggambar maskot karakter Juragan berblangkon Jawa yang ramah untuk visibilitas optimal di tepi jalan."
        },
        {
          step: "140x180cm Food Stall Cart Blueprints",
          stepId: "Gambar Kerja Gerobak Kuliner 140x180cm",
          detail: "Engineered physical spatial layout, stainless steel prep counters, and canopy awning technical dimensions.",
          detailId: "Menyusun gambar kerja struktur gerobak, meja persiapan stainless steel, dan ukuran teknis kanopi tenda."
        },
        {
          step: "Full-Color Menus & 4.8MB Standing Banner",
          stepId: "Brosur Menu A4 & X-Banner 4.8MB",
          detail: "Formatted multi-variety rice wrap menus and printed large-format 4.8MB promotional X-roll banners.",
          detailId: "Menyusun tata letak menu nasi bungkus lengkap dan mencetak standing banner X-roll resolusi tinggi 4.8MB."
        }
      ]
    },
    {
      id: "big-chicken-packaging",
      title: "Big Chicken: Ready-to-Eat & Ready-to-Cook Dual Packaging Architecture",
      titleId: "Big Chicken: Desain Kemasan Siap Saji & Plastik Vakum Bumbu Marinasi Beku",
      titleZh: "Big Chicken: 现炸热食外卖盒与冷冻调味生鲜双渠道食品包装工业设计",
      tagline: "Glue-Free Takeaway Interlocking Boxes (May 2013) & Frozen Marinated Vacuum Nylon Pouches (Dec 2012)",
      taglineId: "Dus Lipat Takeaway Tanpa Lem (Mei 2013) & Plastik Vakum Nilon Bumbu Beku (Desember 2012)",
      taglineZh: "免胶自锁防油现炸外卖纸盒 (2013年5月) 与食品级冷冻调味生鲜真空尼龙包装 (2012年12月)",
      year: "2012 – 2013",
      category: "design",
      role: "Lead Packaging & Dieline Designer",
      roleId: "Desainer Utama Kemasan & Pola Pisau Plong",
      roleZh: "食品包装主设计师与模切刀模工程师",
      client: "Big Chicken Poultry & Fried Chicken (Surabaya)",
      clientZh: "Big Chicken 炸鸡与生鲜冷冻工坊 (家族实体)",
      techStack: ["CorelDRAW", "Die-Cut Box Folding", "Greaseproof Paper", "Frozen Nylon Vacuum", "Cooking Guides"],
      description:
        "Engineered dual-channel packaging architecture for Big Chicken—a family enterprise operating in two distinct sectors: freshly prepared Kentucky fried chicken and wholesale frozen raw marinated meats. In May 2013, Jem designed a 100% glue-free interlocking folding carton crafted from food-grade greaseproof paper with top steam dissipation vents to keep fried chicken skin crispy. In December 2012, Jem engineered airtight nylon vacuum packaging with step-by-step frying instructions for frozen raw marinated chicken.",
      descriptionId:
        "Merancang arsitektur kemasan dua jalur untuk Big Chicken—usaha keluarga yang bergerak di dua sektor: olahan ayam goreng krispi siap saji dan grosir ayam bumbu marinasi beku. Pada Mei 2013, Jem merancang kotak dus lipat tanpa lem dari kertas anti minyak food-grade dengan lubang ventilasi uap panas penjaga kerenyahan. Pada Desember 2012, Jem merancang kemasan plastik vakum nilon kedap udara lengkap dengan panduan memasak untuk ayam mentah marinasi beku.",
      descriptionZh:
        "为家族禽肉深加工实体 Big Chicken 量身定制的双渠道包装工业设计体系。业务涵盖现炸美式脆皮炸鸡零售与冷冻生鲜调味腌制鸡肉批发。2013年5月，Jem 独立研发完全无需胶水粘合的免胶自锁卡扣式防油纸盒刀模，配备顶部微孔散热阀保持外皮干爽酥脆；2012年12月，操刀设计了耐低温食品级尼龙真空包装袋，背面附带图文分步烹饪油炸指南与冷冻保存温控标准。",
      highlights: [
        "May 2013: Engineered 100% glue-free interlocking folding food carton dielines with steam dissipation vents.",
        "Dec 2012: Designed airtight multi-layer nylon vacuum packaging for frozen raw marinated chicken meats.",
        "Integrated bilingual cooking guidelines and storage temperature standards on retail packages.",
        "Demonstrated industrial packaging versatility across hot cooked foods and sub-zero frozen goods."
      ],
      highlightsId: [
        "Mei 2013: Merancang pola pisau dus lipat makanan tanpa lem 100% dengan lubang ventilasi uap panas.",
        "Desember 2012: Mendesain kemasan plastik vakum nilon kedap udara untuk ayam mentah berbumbu marinasi beku.",
        "Menyematkan panduan memasak dwibahasa dan standar suhu penyimpanan pada kemasan retail.",
        "Membuktikan penguasaan kemasan industri lintas sektor makanan panas siap saji dan produk beku tahan dingin."
      ],
      highlightsZh: [
        "2013年5月：独立研发 100% 免胶自锁卡扣式防油外卖纸盒模切刀模，配备微孔散热阀。",
        "2012年12月：设计气密性极佳的多层食品级尼龙真空包装袋，专用于冷冻调味生鲜鸡肉流通。",
        "在包装背面规范排版图文分步烹饪炸制指南、保质期与 -18°C 恒温冷冻储存标准。",
        "展现出横跨现炸高温热食与耐低温急冻生鲜食品的双重工业包装设计研发能力。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode Proyek", labelZh: "项目时间", value: "Dec 2012 & May 2013", valueId: "Des 2012 & Mei 2013", valueZh: "2012年12月与2013年5月" },
        { label: "Hot Food Box", labelId: "Kemasan Panas", labelZh: "热食包装标准", value: "100% Glue-Free Lock", valueId: "Kancing 100% Bebas Lem", valueZh: "100% 免胶卡扣结构" },
        { label: "Cold Vacuum Bag", labelId: "Kemasan Beku", labelZh: "冷冻包装标准", value: "Food-Grade Nylon Vacuum", valueId: "Nylon Vakum Food-Grade", valueZh: "食品级尼龙真空锁鲜" },
        { label: "Mediums", labelId: "Media Utama", labelZh: "设计产出", value: "Folding Box & Vacuum Pack", valueId: "Kotak Lipat & Kantong Vakum", valueZh: "折叠纸盒与真空锁鲜袋" }
      ],
      images: [
        "/assets/projects/design/big-chicken-box.webp",
        "/assets/projects/design/big-chicken-frozen.webp"
      ],
      blueprintFlow: [
        {
          step: "Frozen Raw Marinated Nylon Vacuum Packaging (Dec 2012)",
          stepId: "Kemasan Vakum Nilon Ayam Bumbu Beku (Des 2012)",
          detail: "Engineered airtight multi-layer nylon vacuum pouch dieline with illustrated step-by-step frying instructions.",
          detailId: "Merancang pola plastik vakum nilon kedap udara dengan panduan memasak dan takaran minyak lengkap."
        },
        {
          step: "Glue-Free Interlocking Fried Chicken Box (May 2013)",
          stepId: "Dus Lipat Ayam Goreng Krispi Tanpa Lem (Mei 2013)",
          detail: "Designed food-grade greaseproof folding food cartons with micro-steam vents preserving crispiness.",
          detailId: "Merancang karton lipat anti minyak dengan kancing mandiri dan ventilasi uap penjaga tekstur garing."
        }
      ]
    },
    {
      id: "lc-chinese-food-menu",
      title: "‘LC’ Chinese Food: Authentic Restaurant Menu & Operations Architecture",
      titleId: "‘LC’ Chinese Food: Desain Buku Menu Oriental & Sistem Operasional Restoran",
      titleZh: "‘LC’ Chinese Food: 传统正宗中餐大开本菜单视觉设计与后厨 FIFO 进销存管理系统",
      tagline: "Ultra High-Res Vector Menus (5000px+ CorelDRAW), Catering Invoicing & Excel Kitchen FIFO Inventory",
      taglineId: "Buku Menu Vektor 5000px+ CorelDRAW, Nota Katering & Sistem Kontrol Stok Dapur FIFO Excel",
      taglineZh: "5000px+ 巨幅矢量分类菜谱画册、团餐宴席开票单据与生鲜食材先进先出 (FIFO) 进销存台账",
      year: "2012",
      category: "design",
      role: "Lead Menu Designer & Operations Systems Architect",
      roleId: "Desainer Utama Menu & Arsitek Sistem Operasional",
      roleZh: "餐饮菜单主设计师、宴会票据架构师兼后厨进销存开发",
      client: "‘LC’ Chinese Food Restaurant (Surabaya)",
      clientZh: "‘LC’ 传统正宗中餐酒楼 (家族餐饮实体)",
      techStack: ["CorelDRAW (5000px+ Vector)", "Menu Engineering", "Excel FIFO Stock Control", "Catering Invoicing", "Taxonomy"],
      description:
        "End-to-end visual identity, menu engineering, and kitchen administrative operations created in June 2012 for ‘LC’ Chinese Food—a traditional family-owned oriental restaurant specializing in authentic pork and seafood delicacies (Koloke, Babi Kecap, Cap Cai, Fuyunghai, Mun Tahu, Mie Goreng). Jem designed ultra high-resolution menu catalogs (5000px+ vector in CorelDRAW) with categorized taxonomies, created commercial catering billing invoices, and implemented FIFO perishable ingredient inventory ledgers in Microsoft Excel.",
      descriptionId:
        "Identitas visual menyeluruh, penataan menu (menu engineering), dan sistem administrasi dapur yang dirancang pada Juni 2012 untuk ‘LC’ Chinese Food—restoran masakan Tionghoa tradisional keluarga yang menyajikan aneka olahan babi dan seafood autentik (Koloke, Babi Kecap, Cap Cai, Fuyunghai, Mun Tahu, Mie Goreng). Jem merancang katalog menu format besar beresolusi tinggi (5000px+ CorelDRAW) dengan taksonomi rapi, menyusun nota faktur penagihan katering komersial, serta membangun sistem lembar kerja manajemen stok dapur basah FIFO berbasis Microsoft Excel.",
      descriptionZh:
        "于 2012 年 6 月为家族传统正宗中餐酒楼 ‘LC’ Chinese Food 量身打造的全案视觉、菜单工程与后厨数字化进销存系统。餐厅专营经典古法猪肉及海鲜中式料理（糖醋咕咾肉 Koloke、酱焖红烧肉 Babi Kecap、什锦八宝菜 Cap Cai、芙蓉蛋 Fuyunghai、焖豆腐 Mun Tahu、海鲜炒面 Mie Goreng 等）。Jem 全案主导：使用 CorelDRAW 绘制了 5000px+ 超大画幅矢量分类菜单画册；设计了规范化宴席包桌开票收据；并使用 Microsoft Excel 建立起生鲜易损食材先进先出 (FIFO) 进销存库存台账。",
      highlights: [
        "Engineered ultra high-resolution 5000px+ vector menu catalogs in CorelDRAW organizing 50+ dishes into clear culinary categories.",
        "Formulated psychology-based menu engineering and combo bundling maximizing average party spend.",
        "Designed commercial catering billing receipt templates and banquet reservation order forms.",
        "Built Microsoft Excel perishable kitchen inventory ledgers applying FIFO rotation principles."
      ],
      highlightsId: [
        "Merancang katalog buku menu vektor resolusi tinggi 5000px+ di CorelDRAW yang mengelompokkan 50+ menu ke dalam kategori yang rapi.",
        "Menyusun penataan menu strategis (menu engineering) untuk meningkatkan nilai rata-rata transaksi pesanan.",
        "Mendesain templat nota faktur katering komersial dan formulir pemesanan paket jamuan meja.",
        "Membangun lembar kerja Excel manajemen stok bahan baku dapur basah dengan prinsip perputaran FIFO."
      ],
      highlightsZh: [
        "使用 CorelDRAW 绘制 5000px+ 巨幅超高分辨率矢量菜单画册，将 50+ 款经典菜品科学划分为清晰品类。",
        "运用菜单工程学与心理定价策略优化排版，有效拉升桌餐客单价与招牌菜点单率。",
        "设计规范化商业宴席订餐单据、团餐配送发票与预约定金凭证。",
        "在 Excel 中建立生鲜厨房原料先进先出 (FIFO) 进销存台账，大幅降低食材损耗率。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode Proyek", labelZh: "项目时间", value: "June 2012", valueId: "Juni 2012", valueZh: "2012年6月" },
        { label: "Menu Resolution", labelId: "Resolusi Menu", labelZh: "画板分辨率", value: "5000px+ Vector Master", valueId: "Master Vektor 5000px+", valueZh: "5000px+ 矢量母版" },
        { label: "Menu Items", labelId: "Jumlah Menu", labelZh: "收录菜品体量", value: "50+ Authentic Dishes", valueId: "50+ Hidangan Otentik", valueZh: "50+ 款经典中餐菜品" },
        { label: "Inventory Logic", labelId: "Sistem Stok", labelZh: "进销存模型", value: "FIFO Rotation Excel", valueId: "Rotasi Stok FIFO Excel", valueZh: "FIFO 先进先出库存模型" }
      ],
      images: [
        "/assets/projects/design/lc-chinese-food-menu.webp"
      ],
      blueprintFlow: [
        {
          step: "5000px+ Vector Menu Catalog Engineering",
          stepId: "Rekayasa Katalog Menu Vektor 5000px+",
          detail: "Structured 50+ dishes into pork, chicken, seafood, noodle, and soup sections with clear pricing hierarchy.",
          detailId: "Menata 50+ hidangan ke dalam kategori olahan babi, ayam, seafood, mie, dan sup dengan hierarki harga jelas."
        },
        {
          step: "Catering Invoicing & Banquet Order Slips",
          stepId: "Nota Faktur Katering & Formulir Reservasi",
          detail: "Designed multi-copy commercial catering billing receipts with terms, down payment records, and dish counts.",
          detailId: "Mendesain faktur penagihan katering komersial dengan pencatatan DP, jumlah porsi, dan rincian menu."
        },
        {
          step: "Microsoft Excel FIFO Perishable Kitchen Ledgers",
          stepId: "Manajemen Stok Dapur FIFO Excel",
          detail: "Implemented daily perishable ingredient stock tracking to enforce first-in-first-out rotation.",
          detailId: "Menerapkan pelacakan stok bahan baku basah harian guna memastikan perputaran barang masuk pertama keluar pertama."
        }
      ]
    },
    {
      id: "sambelku-branding",
      title: "Sambelku: Authentic Terasi Sambal Jar Labels & Marketing Poster",
      titleId: "Sambelku: Desain Label Toples Sambal Terasi & Poster Promosi A3",
      titleZh: "Sambelku: 传统古法虾酱辣椒酱瓶贴包装与高清宣传海报",
      tagline: "Cylindrical Wrap-Around Jar Labels, Tamper-Evident Security Cap Seals & 3508px A3 Marketing Poster",
      taglineId: "Label Toples Silinder, Stiker Segel Tutup Anti-Bocor & Poster Promosi Cetak A3 (3508px)",
      taglineZh: "防水防油玻璃瓶贴纸、易撕防伪瓶盖安全封签与 3508px A3 级高清线下零售宣传海报",
      year: "2012",
      category: "design",
      role: "Lead Packaging & Advertising Designer",
      roleId: "Desainer Utama Kemasan & Materi Promosi",
      roleZh: "商品包装与平面广告主设计师",
      client: "Sambelku East Javanese Condiments (Surabaya)",
      clientZh: "Sambelku 东爪哇传统辣酱工坊 (家族调味品实体)",
      techStack: ["CorelDRAW", "Jar Label Dielines", "Tamper-Evident Seals", "3508px A3 Poster", "Print Production"],
      description:
        "Complete product packaging and commercial advertising design completed in December 2012 for Sambelku—a traditional East Javanese condiment brand producing authentic shrimp paste chili sauce (Sambal Terasi). Jem engineered cylindrical glass jar wrap-around labels featuring traditional stone mortar imagery and ingredient transparency, tamper-evident tear-strip neck security seals to guarantee food hygiene in retail outlets, and a high-impact 3508px A3 commercial marketing poster.",
      descriptionId:
        "Desain kemasan produk menyeluruh dan materi iklan komersial yang diselesaikan pada Desember 2012 untuk Sambelku—brand bumbu kuliner tradisional Jawa Timur yang memproduksi sambal terasi matang siap santap. Jem merancang pola stiker label toples kaca silindris dengan ilustrasi cobek batu tradisional dan rincian bahan alami, stiker segel keamanan leher toples anti-bocor untuk menjamin kebersihan higienis di rak toko, serta poster promosi komersial cetak A3 beresolusi tinggi (3508px).",
      descriptionZh:
        "于 2012 年 12 月为家族传统调味品品牌 Sambelku 操刀的瓶装产品包装与商业宣传海报全案。产品主打东爪哇正宗古法石磨熟制虾酱辣椒酱 (Sambal Terasi)。Jem 全案主导：使用 CorelDRAW 绘制圆柱形玻璃瓶环形标签，融入传统石臼研磨与诱人红油质感；设计专用易撕防伪瓶口安全封条，保障零售货架流通过程中的卫生密封性；并制作了 3508px A3 级 300 DPI 超清商业促销海报。",
      highlights: [
        "Engineered precision cylindrical wrap-around sticker dielines communicating ingredient purity and zero preservatives.",
        "Designed custom die-cut tamper-evident neck seals ensuring product safety and freshness retention.",
        "Crafted a high-impact 3508px A3 commercial marketing poster featuring traditional stone mortar visuals and hotline ordering.",
        "Demonstrated early FMCG product branding mastery exploring food appetite appeal, typography, and shelf presence at age 12."
      ],
      highlightsId: [
        "Merancang pola stiker melingkar toples kaca presisi dengan informasi komposisi bahan alami tanpa pengawet.",
        "Mendesain stiker segel tutup leher toples khusus untuk menjamin keamanan produk dan kesegaran rasa.",
        "Membuat poster promosi komersial cetak A3 (3508px) dengan komposisi visual cobek batu dan hotline pemesanan.",
        "Membuktikan pemahaman desain produk FMCG sejak usia 12 tahun yang memadukan daya tarik selera dan estetika rak toko."
      ],
      highlightsZh: [
        "防水防油瓶身环形标签：精密设计环绕式瓶贴，醒目标注纯天然食材配方、净含量与零化学防腐剂承诺。",
        "防伪防拆瓶口安全封签：研发专用易撕瓶颈封条，保障土特产礼品店与新年礼盒流通中的食品安全与密封性。",
        "3508px A3 级超清宣传海报：精细构图融合传统石臼研磨工艺、浓油赤酱质感与显眼订购电话排版。",
        "快消品包装设计启蒙里程碑：在少年时期深入探索货架美学、食品摄影质感表达与食欲诱导型营销文案技巧。"
      ],
      metrics: [
        { label: "Timeline", labelId: "Periode Proyek", labelZh: "项目周期", value: "Dec 2012", valueId: "Desember 2012", valueZh: "2012年12月" },
        { label: "Poster Resolution", labelId: "Resolusi Poster", labelZh: "海报输出画质", value: "3508 x 2480 px (300 DPI)", valueId: "3508 x 2480 px (300 DPI)", valueZh: "3508 x 2480 px (300 DPI)" },
        { label: "Packaging Type", labelId: "Jenis Kemasan", labelZh: "包装形态", value: "Glass Jar & Tamper Seal", valueId: "Toples Kaca & Segel Pengaman", valueZh: "玻璃密封罐与防伪封口贴" },
        { label: "Core Mediums", labelId: "Media Utama", labelZh: "设计产出", value: "Jar Label & A3 Poster", valueId: "Label Toples & Poster A3", valueZh: "瓶贴与 A3 营销海报" }
      ],
      images: [
        "/assets/projects/design/sambelku-poster.webp"
      ],
      blueprintFlow: [
        {
          step: "Oil-Resistant Glass Jar Label Dieline",
          stepId: "Pola Label Toples Kaca Tahan Minyak",
          detail: "Precision cylindrical wrap-around sticker communicating recipe authenticity and ingredients.",
          detailId: "Pola stiker melingkar presisi dengan komposisi bahan alami dan informasi legalitas produk."
        },
        {
          step: "Tamper-Evident Safety Cap Seal",
          stepId: "Stiker Segel Tutup Anti-Bocor",
          detail: "Custom die-cut security seal ensuring zero container tampering before purchase.",
          detailId: "Segel leher toples untuk menjamin keaslian dan keamanan sambal sebelum dibuka konsumen."
        },
        {
          step: "3508px A3 Commercial Promotion Poster",
          stepId: "Poster Promosi Komersial A3 (3508px)",
          detail: "Engineered high-contrast visual composition featuring traditional stone mortar and direct order lines.",
          detailId: "Komposisi visual kontras tinggi yang menampilkan ulegan cobek batu dan hotline pemesanan langsung."
        }
      ]
    }
  ]
};

export function getCategoryShowcaseProjects(categoryId: string): ProjectItem[] {
  const normalizedId = (categoryId === "quant" || categoryId === "market-research") ? "data" : categoryId;
  return comprehensiveCategoryProjects[normalizedId] || [];
}

export const allArchiveProjects: ProjectItem[] = Object.values(comprehensiveCategoryProjects)
  .flat()
  .filter((p, index, self) => index === self.findIndex((t) => t.id === p.id));

export const creativeMediaProjects: ProjectItem[] = comprehensiveCategoryProjects.design || [];
