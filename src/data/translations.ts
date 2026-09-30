export type Language = "en" | "id" | "zh";

export interface TranslationContent {
  common: {
    coreDisciplines: string;
    coreDisciplinesVal: string;
    availability: string;
    availabilityVal: string;
    locationRadar: string;
    locationRadarVal: string;
    scroll: string;
    chapterIndex: string;
    verifiedHighlights: string;
    verifiedDeliverables: string;
    technicalDossierBtn: string;
    productionCycle: string;
    verified: string;
    directoryLedger: string;
    verifiedTechStack: string;
    tableYear: string;
    tableProjectScope: string;
    tableCategory: string;
    tableRole: string;
    tableTech: string;
    tableLinks: string;
    processTag: string;
    processTitle: string;
    processSubtitle: string;
    processMethodology: string;
    statusAvailable: string;
    statusLocation: string;
    honorsGpa: string;
    honorsAwards: string;
    trustAuditable: string;
    trustGpa: string;
    trustZeroSlop: string;
    activeRole: string;
    careerLedger: string;
    servicesTag: string;
    servicesTitle: string;
    servicesSubtitle: string;
    skillsTag: string;
    skillsTitle: string;
    skillsSubtitle: string;
    skillsMatrix: string;
    credentialsTag: string;
    credentialsTitle: string;
    credentialsSubtitle: string;
    credentialsChapter: string;
  };
  nav: {
    about: string;
    services: string;
    highlights: string;
    experience: string;
    projects: string;
    skills: string;
    credentials: string;
    contact: string;
    exportPdf: string;
  };
  hero: {
    badge: string;
    salutation: string;
    titleFirst: string;
    titleHighlight: string;
    titleLast: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quickStats: {
      gpa: string;
      gpaLabel: string;
      studyTime: string;
      studyTimeLabel: string;
      projects: string;
      projectsLabel: string;
      awards: string;
      awardsLabel: string;
    };
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    pillarsTitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    quote: string;
    statChips: {
      value: string;
      label: string;
      sub: string;
    }[];
  };
  services: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      metric: string;
      metricLabel: string;
      metricSub: string;
      tags: string[];
    }[];
  };
  highlights: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: {
      tag: string;
      title: string;
      metric: string;
      metricLabel: string;
      description: string;
    }[];
  };
  experience: {
    sectionTag: string;
    title: string;
    subtitle: string;
  };
  featuredProjects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    disclaimerConfidential: string;
    showAllBtn: string;
    hideAllBtn: string;
    archiveTitle: string;
    archiveSubtitle: string;
    filterAll: string;
    filterWeb: string;
    filterDesktop: string;
    filterAi: string;
    filterQuant: string;
    filterDesign: string;
    searchPlaceholder: string;
    viewLive: string;
    keyAchievements: string;
    techStack: string;
    blueprintFlowTitle: string;
    packagingBento: {
      tag: string;
      title: string;
      subtitle: string;
      box1Tag: string;
      box1Title: string;
      box1Desc: string;
      box2Tag: string;
      box2Title: string;
      box2Desc: string;
      box3Tag: string;
      box3Title: string;
      box3Desc: string;
      box4Tag: string;
      box4Title: string;
      box4Desc: string;
    };
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    tier1: string;
    tier1Desc: string;
    tier2: string;
    tier2Desc: string;
    tier3: string;
    tier3Desc: string;
  };
  credentials: {
    sectionTag: string;
    title: string;
    subtitle: string;
    educationTitle: string;
    awardsTitle: string;
    leadershipTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    whatsappLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    locationValue: string;
    formTitle: string;
    formSubtitle: string;
    quickTopicLabel: string;
    quickTopics: string[];
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendBtn: string;
    directTitle: string;
    directSubtitle: string;
    responseNotice: string;
  };
  pdfModal: {
    title: string;
    subtitle: string;
    instruction: string;
    selectAll: string;
    deselectAll: string;
    includeHero: string;
    includeAbout: string;
    includeHighlights: string;
    includeExperience: string;
    includeFeatured: string;
    includeSkills: string;
    includeCredentials: string;
    includeContact: string;
    generateBtn: string;
    closeBtn: string;
    printTip: string;
  };
  footer: {
    name: string;
    tagline: string;
    downloadCv: string;
    downloadPortfolio: string;
    availabilityStatus: string;
    navTitle: string;
    navHome: string;
    navAbout: string;
    navProjects: string;
    navProcess: string;
    navContact: string;
    specTitle: string;
    specFullstack: string;
    specAi: string;
    specOperations: string;
    specQuant: string;
    specPackaging: string;
    connectTitle: string;
    locationTimezone: string;
    copyright: string;
    techCredit: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  // 1. ENGLISH (DEFAULT)
  en: {
    common: {
      coreDisciplines: "CORE DISCIPLINES",
      coreDisciplinesVal: "SYSTEMS & AI / INDUSTRIAL PACKAGING",
      availability: "AVAILABILITY",
      availabilityVal: "HIGH-IMPACT ARCHITECTURE CONSULTING",
      locationRadar: "LOCATION & RADAR",
      locationRadarVal: "SURABAYA, INDONESIA · GLOBAL DEPLOYMENT",
      scroll: "SCROLL",
      chapterIndex: "CHAPTER INDEX",
      verifiedHighlights: "VERIFIED HIGHLIGHTS",
      verifiedDeliverables: "VERIFIED DELIVERABLES",
      technicalDossierBtn: "TECHNICAL PORTFOLIO & SPECIFICATION",
      productionCycle: "PRODUCTION CYCLE",
      verified: "VERIFIED",
      directoryLedger: "DIRECTORY · 20+ PRODUCTION REPOSITORIES & SYSTEMS",
      verifiedTechStack: "VERIFIED TECH STACK",
      tableYear: "Year",
      tableProjectScope: "Project & Scope",
      tableCategory: "Category",
      tableRole: "Role",
      tableTech: "Technologies",
      tableLinks: "Links",
      processTag: "INSIDE THE ENGINEERING LAB",
      processTitle: "EMPIRICAL DISCIPLINES & PROCESS",
      processSubtitle: "Empirical verification from polymer packaging tolerances to low-latency architecture.",
      processMethodology: "METHODOLOGY & PROCESS",
      statusAvailable: "OPEN FOR REMOTE & HYBRID ROLES",
      statusLocation: "SURABAYA, ID / REMOTE",
      honorsGpa: "Honors: Very Satisfactory",
      honorsAwards: "Algorithms · Web · Client-Server · OOP",
      trustAuditable: "100% Auditable Proof",
      trustGpa: "iSTTS Perfect 4.00 GPA",
      trustZeroSlop: "Zero AI Slop / Genuine Work",
      activeRole: "ACTIVE",
      careerLedger: "CAREER LEDGER",
      servicesTag: "SOLUTIONS & SPECIALIZATIONS",
      servicesTitle: "Engineering Pillars & Solutions",
      servicesSubtitle: "Bridging modern engineering code with empirical operational reality.",
      skillsTag: "SKILLS MATRIX",
      skillsTitle: "Technical & Operational Capabilities",
      skillsSubtitle: "Every competency is mapped to empirical proof from iSTTS academic awards and hands-on system implementations.",
      skillsMatrix: "SKILLS MATRIX",
      credentialsTag: "CREDENTIALS & HONORS",
      credentialsTitle: "Degrees, Certifications & Languages",
      credentialsSubtitle: "Formal verification of analytical excellence, clean code discipline, industry certifications, and trilingual fluency.",
      credentialsChapter: "ACADEMIC CREDENTIALS",
    },
    nav: {
      about: "About",
      services: "Services",
      highlights: "Highlights",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      credentials: "Credentials",
      contact: "Contact",
      exportPdf: "Export PDF",
    },
    hero: {
      badge: "Open for Remote Business Systems & Web Roles",
      salutation: "Jem Angkasa Wijaya, S.Kom.",
      titleFirst: "Business Systems,",
      titleHighlight: "Digital Operations",
      titleLast: "& AI Workflows.",
      subheading:
        "Bridging operational reality with modern digital systems. I build full-stack web applications with Next.js and Laravel, streamline business workflows, and configure structured AI automation pipelines engineered for daily reliability.",
      ctaPrimary: "Explore Works",
      ctaSecondary: "Curate PDF Portfolio",
      quickStats: {
        gpa: "4.00 / 4.00",
        gpaLabel: "Perfect GPA (Highest Honors)",
        studyTime: "4.5 Years",
        studyTimeLabel: "iSTTS Undergraduate Studies",
        projects: "20+ Projects",
        projectsLabel: "Software, Systems & Industrial Packaging",
        awards: "4x Awards",
        awardsLabel: "iSTTS Computer Lab Best Practitioner",
      },
    },
    about: {
      sectionTag: "Philosophy & Background",
      title: "Bridging Real Business Strategy with Modern Software Systems",
      subtitle:
        "Building reliable web architectures and automated workflows shaped by real-world adaptability and commercial execution.",
      p1: "Growing up, I actively supported my family enterprise through multiple shifting business ventures. The pivots spanned across multi-branch culinary franchises, HR character assessment services, and industrial cold-chain distribution. Navigating these varied models forced me to adapt fast and pick up whatever tools were needed on the fly. It built my resilience early on, teaching me how to step into unfamiliar operations, figure out the bottlenecks, and set up working systems from scratch.",
      p2: "I brought that practical agility to my Business Information Systems degree at iSTTS, grounding my field experience in relational database architecture and structured software engineering. Alongside graduating with top honors and four lab practitioner awards, I led corporate sponsorships and fundraising for major campus initiatives.",
      p3: "Today, I operate as a builder at the intersection of technology and business operations. My core craft centers on building production web applications with Next.js and Laravel, alongside configuring structured AI automation workflows that eliminate repetitive manual friction. Having navigated constantly shifting business environments, I look at every line of code as an operational strategist: software must be reliable, easy to maintain, and flexible enough to adapt as the business scales.",
      pillarsTitle: "Three Foundational Engineering Pillars:",
      pillar1Title: "Analytical Rigor & Academic Discipline",
      pillar1Desc: "Evidenced by top honors and 4x Best Academic Practitioner awards in core computer lab courses.",
      pillar2Title: "Physical Supply Chain & Commercial Reality",
      pillar2Desc: "Hands-on mastery of B2B invoices, cold-chain logistics (-25°C), factory dielines, and national Halal/Kementan compliance at PT. Karya Buah Tropis.",
      pillar3Title: "Autonomous AI & Zero-Latency Engines",
      pillar3Desc: "Architecting self-contained engines such as 150+ page print-ready automated book pipelines and zero-latency client-side calculation engines.",
      quote: "A good system is straightforward: it resolves real operational friction without creating new headaches for the people running it.",
      statChips: [
        {
          value: "4.00 / 4.00",
          label: "Perfect GPA & 4x Best Practitioner",
          sub: "Academic Rigor & iSTTS Lab Honors",
        },
        {
          value: "20+ Projects",
          label: "Web Apps, ERPs & Packaging",
          sub: "Production Systems & Verified Code",
        },
        {
          value: "150+ Pages",
          label: "Autonomous AI Publishing Engine",
          sub: "Turnaround Weeks ➔ 1 Day",
        },
        {
          value: "90+ SKUs",
          label: "Cold-Chain Standard (-25°C)",
          sub: "Halal & Ministry of Agriculture Compliant",
        },
      ],
    },
    services: {
      sectionTag: "Solutions & Specializations",
      title: "Engineering Pillars & Solutions",
      subtitle: "Bridging modern engineering code with empirical operational reality.",
      items: [
        {
          title: "Full-Stack Web & Modern ERPs",
          description:
            "Custom web platform and ERP engineering (Next.js, TypeScript, Laravel, MySQL) designed to streamline business workflows, replace legacy bottlenecks, and accelerate commercial transaction velocity.",
          metric: "4.00 / 4.00",
          metricLabel: "4.00 GPA & 4x Best Practitioner",
          metricSub: "C# Algorithms, Web Dev, Client-Server MySQL, Java OOP",
          tags: ["Next.js", "TypeScript", "Laravel", "MySQL", "Clean Architecture"],
        },
        {
          title: "AI Workflows & Autonomous Pipelines",
          description:
            "Designing document synthesis pipelines and autonomous AI workflows (structured prompt engineering, air-gapped data handling, Python compilation) that compress turnaround from weeks to 1 day.",
          metric: "150+ Pages",
          metricLabel: "Weeks ➔ 1 Day Turnaround",
          metricSub: "Print-Ready Synthesis Engine (The Secret of Life)",
          tags: ["LLM Prompt Orchestration", "Python Pipelines", "Document Synthesis", "Offset Standard"],
        },
        {
          title: "Fractional Tech Lead & Operational Architecture",
          description:
            "Bridging executive commercial vision with operational field execution. Orchestrating SOP standardization, integrated inventory ledgers, blast-freeze cold chains (-25°C), and regulatory compliance.",
          metric: "90+ SKUs",
          metricLabel: "Cold-Chain Standard (-25°C)",
          metricSub: "Halal & Kementan RI Audit Compliance",
          tags: ["Business Systems", "SOP Standardization", "Cross-Functional Bridge", "Supply Chain"],
        },
        {
          title: "High-Performance Compute & Data Engines",
          description:
            "Building zero-latency interactive browser engines, multi-asset quantitative portfolio trackers, and real-time financial dashboards without recurring per-computation server costs.",
          metric: "< 15 ms",
          metricLabel: "$0 Server Overhead & Grade A Thesis",
          metricSub: "Client-Side Compute & Financial Research (CocokGa & CatatCrypto)",
          tags: ["Client-Side Compute", "Quant Metrics", "Financial Tracking", "Zero Latency"],
        },
      ],
    },
    highlights: {
      sectionTag: "Verified Milestones & Track Record",
      title: "Auditable Track Record & Milestones",
      subtitle: "Four empirical milestones demonstrating analytical excellence, software craftsmanship, and real-world commercial delivery.",
      items: [
        {
          tag: "Academic Excellence",
          title: "Perfect 4.00 GPA & 4x Best Practitioner",
          metric: "4.00 / 4.00",
          metricLabel: "Very Satisfactory Highest Honors",
          description:
            "Graduated from iSTTS Business Information Systems with straight As across all 144 credits, coupled with 4 consecutive Best Practitioner honors across core computer science laboratory courses.",
        },
        {
          tag: "AI Automation Engineering",
          title: "150+ Page Book Compilation Engine",
          metric: "150+ Pages",
          metricLabel: "Print-Ready Pipeline (The Secret of Life)",
          description:
            "Engineered structured AI prompt synthesis workflows and a Python compilation engine converting raw profile data into 150+ page offset-standard print books, shrinking cycle time from weeks to 1 day.",
        },
        {
          tag: "B2B Commercial Operations",
          title: "Cold-Chain Standardization & Compliance",
          metric: "90+ SKUs",
          metricLabel: "Product Catalog & -25°C Cold Chain",
          description:
            "Constructed a 90+ SKU digital wholesale catalog and food-grade vacuum packaging systems at PT. Karya Buah Tropis compliant with national Halal standards and Ministry of Agriculture distribution permits.",
        },
        {
          tag: "Financial Research & Quant",
          title: "Crypto Portfolio & Trading Journal Thesis",
          metric: "Grade A",
          metricLabel: "Highest Honors Thesis (CatatCrypto)",
          description:
            "Successfully defended an advanced multi-asset tracking engine featuring automated DCA calculations, floating unrealized PnL, win rate analytics, and drawdown curve modeling.",
        },
      ],
    },
    experience: {
      sectionTag: "Professional Track Record",
      title: "Professional Career Ledger",
      subtitle: "Factual contributions across digital systems operations, backend development, strategic partnerships, and psychometric assessment software.",
    },
    featuredProjects: {
      sectionTag: "Flagship Systems & Works",
      title: "Featured Flagship Systems",
      subtitle: "In-depth showcase of self-contained software platforms, enterprise B2B infrastructure, and proven physical packaging engineering.",
      disclaimerConfidential:
        "Confidentiality & Ethical Rigor: Proprietary formulas and proprietary business rules remain black-boxed. This showcase focuses on software architecture, interface design, and computational workflows.",
      showAllBtn: "Open Complete Master Archive (20+ Projects)",
      hideAllBtn: "Collapse Master Archive",
      archiveTitle: "Complete Master Production Ledger (2010 – 2026)",
      archiveSubtitle:
        "Chronological archive spanning iSTTS academic software, C# psychometric tools, family enterprise manufacturing systems, and AI platforms. Private freelance commissions excluded.",
      filterAll: "All (20+)",
      filterWeb: "Full-Stack Web",
      filterDesktop: "Desktop & C#",
      filterAi: "AI & Workflow",
      filterQuant: "Financial & Quant",
      filterDesign: "Packaging & Design",
      searchPlaceholder: "Search tech stack, title, or keywords...",
      viewLive: "Launch System",
      keyAchievements: "Verified Engineering Deliverables:",
      techStack: "Verified Technologies:",
      blueprintFlowTitle: "System Architecture & Pipeline Flow:",
      packagingBento: {
        tag: "Physical Packaging & Manufacturing Specs",
        title: "PT. Karya Buah Tropis Industrial Vacuum Packaging & Brand Suite",
        subtitle:
          "Empirical proof of physical manufacturing mastery: -25°C blast-freeze nylon dielines, standing pouch zippers, and a 3.4MB high-res wholesale sales catalog.",
        box1Tag: "-25°C Blast-Freeze Tolerance",
        box1Title: "Food-Grade High-Barrier Nylon Packaging",
        box1Desc:
          "Multi-layer industrial nylon composite preventing puncture and freezer burn across commercial cold storage.",
        box2Tag: "B2B Procurement Catalog",
        box2Title: "Corporate Profile & Tiered Price Catalog (3.4MB)",
        box2Desc:
          "High-resolution CMYK sales catalog built for hotel procurement and regional distributor negotiations.",
        box3Tag: "Retail Consumer Goods",
        box3Title: "Retail Packaging & Standing Pouch Zippers",
        box3Desc:
          "Consumer packaging suite designed for modern retail shelves, Janok snacks, and Chicken Center poultry.",
        box4Tag: "Facility Signage",
        box4Title: "Cold-Storage Signage & Brand Systems",
        box4Desc:
          "Standardized physical storefront branding, cold-chain warehouse banners, and waterproof jar labels.",
      },
    },
    skills: {
      sectionTag: "Skills Matrix",
      title: "Technical & Operational Capabilities",
      subtitle:
        "Every competency is mapped to empirical proof from iSTTS academic awards and hands-on system implementations.",
      tier1: "Tier 1: Core Mastery & Daily Production",
      tier1Desc: "Technologies and tools used on a daily basis to build and maintain production systems.",
      tier2: "Tier 2: Applied & Project-Verified",
      tier2Desc: "Skills directly deployed in production web software, research, or commercial operations.",
      tier3: "Tier 3: Conceptual & Certified Foundations",
      tier3Desc: "Architectural principles backed by formal industry certifications and academic mastery.",
    },
    credentials: {
      sectionTag: "Education & Credentials",
      title: "Formal Degrees, Certifications & Languages",
      subtitle:
        "Formal verification of analytical excellence, clean code discipline, industry certifications, and trilingual fluency.",
      educationTitle: "Formal Degrees & Honors",
      awardsTitle: "4x Best Academic Practitioner Awards (iSTTS Computer Lab)",
      leadershipTitle: "Leadership & Academic Organizational Roles",
      certificationsTitle: "Verified Industry Licenses & Certifications",
      languagesTitle: "Certified Language Proficiency (Trilingual)",
    },
    contact: {
      sectionTag: "Direct Communication",
      title: "Get in Touch & Connect",
      subtitle:
        "Open for long-term remote individual-contributor roles, operational systems consulting, and strategic technical collaborations.",
      emailLabel: "Official Email",
      whatsappLabel: "Business WhatsApp",
      linkedinLabel: "LinkedIn Profile",
      githubLabel: "Public GitHub",
      locationValue: "Surabaya, Indonesia (UTC+7 / WIB) · Open to Global Remote Opportunities",
      formTitle: "Send a Direct Message",
      formSubtitle: "Have a project initiative, system challenge, or partnership in mind? Leave a message below.",
      quickTopicLabel: "Quick Topic Presets:",
      quickTopics: [
        "Full-Stack Web / ERP",
        "AI Automation Pipelines",
        "Fractional Tech Lead",
        "Architecture & Systems Consulting",
        "Strategic Role / Full-time",
      ],
      namePlaceholder: "Your Full Name",
      emailPlaceholder: "Your Email Address",
      subjectPlaceholder: "Project Type (e.g., Systems Engineering, AI Automation, Tech Lead)",
      messagePlaceholder: "Tell me briefly about your project or operational goals...",
      sendBtn: "Send Message Now",
      directTitle: "Instant Direct Channels",
      directSubtitle: "Choose your preferred channel for immediate direct communication.",
      responseNotice: "Average response time < 24 business hours",
    },
    pdfModal: {
      title: "Curate Full-Graphic Portfolio PDF",
      subtitle: "Canva-grade full-graphic editorial A4 PDF document layout complete with visual mockups, honor plaques, and active hosted links.",
      instruction: "Choose sections to include:",
      selectAll: "Select All",
      deselectAll: "Deselect All",
      includeHero: "Editorial Header Banner, Portrait Photo, GPA 4.00 & Contacts",
      includeAbout: "Executive Summary & Systems Stance (Show, Don't Pitch)",
      includeHighlights: "Engineering Capabilities & 3-Phase Delivery Methodology (Slide 03)",
      includeExperience: "Factual Professional Experience Ledger",
      includeFeatured: "Flagship Production Systems (With Visual Mockups & Active Links)",
      includeSkills: "6-Pillar Auditable Skills Matrix (3-Tier Proof)",
      includeCredentials: "Degrees (GPA 4.00), 4x Awards, Certifications & Languages",
      includeContact: "Direct Channels, Strategic Collaboration & Monumental Editorial Footer",
      generateBtn: "Print / Export Graphic PDF",
      closeBtn: "Cancel",
      printTip: "Print Tip: In your browser print dialog (Ctrl+P / Cmd+P), check 'Background graphics' and select 'Save as PDF' (A4) to preserve rich cards, mockups, and colors.",
    },
    footer: {
      name: "Jem Angkasa Wijaya, S.Kom.",
      tagline: "Bridging business operations with resilient web systems and AI workflows.",
      downloadCv: "Download CV (PDF)",
      downloadPortfolio: "Download Portfolio (PDF)",
      availabilityStatus: "Open for Full-time Roles & Strategic Consulting",
      navTitle: "NAVIGATION",
      navHome: "Home / Overview",
      navAbout: "About & Philosophy",
      navProjects: "Selected Works & Archives",
      navProcess: "Engineering Process",
      navContact: "Direct Contact",
      specTitle: "SPECIALIZATIONS",
      specFullstack: "Full-Stack Web & ERPs",
      specAi: "AI Workflows & Pipelines",
      specOperations: "Business Systems & Operations",
      specQuant: "Financial & Quant Modeling",
      specPackaging: "Industrial Cold-Chain Packaging",
      connectTitle: "CONNECT",
      locationTimezone: "Surabaya, ID (UTC+7 / WIB)",
      copyright: "All rights reserved.",
      techCredit: "Engineered with Next.js, TypeScript & Tailwind CSS",
    },
  },

  // 2. BAHASA INDONESIA
  id: {
    common: {
      coreDisciplines: "DISIPLIN UTAMA",
      coreDisciplinesVal: "REKAYASA SISTEM & AI / KEMASAN INDUSTRI",
      availability: "KETERSEDIAAN",
      availabilityVal: "KONSULTASI ARSITEKTUR STRATEGIS",
      locationRadar: "LOKASI & JANGKAUAN",
      locationRadarVal: "SURABAYA, INDONESIA · JANGKAUAN GLOBAL",
      scroll: "GULIR",
      chapterIndex: "INDEKS BAB",
      verifiedHighlights: "SOROTAN TERVERIFIKASI",
      verifiedDeliverables: "BUKTI HASIL REKAYASA",
      technicalDossierBtn: "PORTOFOLIO TEKNIS & BLUEPRINT",
      productionCycle: "SIKLUS PRODUKSI",
      verified: "TERVERIFIKASI",
      directoryLedger: "KATALOG · 20+ REPOSITORI & SISTEM PRODUKSI",
      verifiedTechStack: "TEKNOLOGI TERVERIFIKASI",
      tableYear: "Tahun",
      tableProjectScope: "Proyek & Ruang Lingkup",
      tableCategory: "Kategori",
      tableRole: "Peran",
      tableTech: "Teknologi",
      tableLinks: "Tautan",
      processTag: "DI DALAM LAB REKAYASA",
      processTitle: "METODOLOGI & PROSES EMPIRIS",
      processSubtitle: "Verifikasi empiris dari toleransi polimer kemasan hingga arsitektur berlatensi rendah.",
      processMethodology: "METODOLOGI & PROSES",
      statusAvailable: "TERSEDIA UNTUK KERJA REMOTE & HYBRID",
      statusLocation: "SURABAYA, ID / REMOTE",
      honorsGpa: "Predikat: Sangat Memuaskan",
      honorsAwards: "Algoritma · Web · Client-Server · OOP",
      trustAuditable: "Bukti Terverifikasi 100%",
      trustGpa: "iSTTS IPK Sempurna 4.00",
      trustZeroSlop: "Tanpa AI Slop / Hype",
      activeRole: "AKTIF",
      careerLedger: "REKAM JEJAK",
      servicesTag: "PILAR LAYANAN & SPESIALISASI",
      servicesTitle: "Pilar Solusi & Rekayasa Solusi",
      servicesSubtitle: "Menggabungkan ketajaman kode rekayasa modern dengan pemahaman mendalam operasional bisnis nyata.",
      skillsTag: "MATRIKS KEAHLIAN",
      skillsTitle: "Pilar Kemampuan Teknis & Operasional",
      skillsSubtitle: "Seluruh kompetensi dipetakan berdasarkan bukti riil dari iSTTS (4x Best Practitioner) dan rekam jejak implementasi proyek nyata.",
      skillsMatrix: "MATRIKS KEAHLIAN",
      credentialsTag: "KREDENSIAL AKADEMIK",
      credentialsTitle: "Pendidikan Formal, Sertifikasi & Kemampuan Bahasa",
      credentialsSubtitle: "Validasi formal atas kompetensi analitis, dedikasi kode bersih, sertifikasi industri, dan kemahiran trilingual.",
      credentialsChapter: "KREDENSIAL AKADEMIK",
    },
    nav: {
      about: "Tentang",
      services: "Layanan",
      highlights: "Sorotan",
      experience: "Pengalaman",
      projects: "Proyek",
      skills: "Keahlian",
      credentials: "Kredensial",
      contact: "Kontak",
      exportPdf: "Ekspor PDF",
    },
    hero: {
      badge: "Terbuka untuk Peran Remote Sistem Bisnis & Web",
      salutation: "Jem Angkasa Wijaya, S.Kom.",
      titleFirst: "Sistem Bisnis,",
      titleHighlight: "Operasional Digital",
      titleLast: "& Alur Kerja AI.",
      subheading:
        "Menjembatani kebutuhan operasional nyata dengan sistem digital modern. Saya membangun aplikasi web full-stack dengan Next.js dan Laravel, merapikan alur kerja bisnis, serta merancang pipeline otomasi AI yang stabil untuk operasional harian.",
      ctaPrimary: "Lihat Karya",
      ctaSecondary: "Kurasi Dokumen PDF",
      quickStats: {
        gpa: "4.00 / 4.00",
        gpaLabel: "IPK Sempurna (Sangat Memuaskan)",
        studyTime: "4.5 Tahun",
        studyTimeLabel: "Masa Studi Sarjana iSTTS",
        projects: "20+ Proyek",
        projectsLabel: "Software, Sistem Bisnis & Desain",
        awards: "4x Penghargaan",
        awardsLabel: "Praktikan Terbaik Laboratorium iSTTS",
      },
    },
    about: {
      sectionTag: "Profil & Nilai Otentik",
      title: "Menjembatani Strategi Bisnis Nyata dengan Sistem Perangkat Lunak Modern",
      subtitle:
        "Membangun arsitektur web andal dan otomasi kerja yang terbentuk dari adaptabilitas lapangan serta eksekusi komersial nyata.",
      p1: "Sejak kecil saya terbiasa mengikuti berbagai perputaran bisnis keluarga yang terus berganti arah. Mulai dari waralaba kuliner puluhan cabang, layanan asesmen karakter SDM, sampai distribusi rantai dingin industri buah. Dinamika ini menuntut saya untuk cepat belajar dan beradaptasi dengan model usaha baru. Pengalaman ini melatih ketangguhan saya sejak dini: terbiasa membedah masalah di lapangan, merancang alur kerja dari nol, dan menjaga operasional tetap stabil di tengah perubahan arah usaha.",
      p2: "Pengalaman beradaptasi di dunia nyata itu saya perkuat dengan pendidikan formal Sistem Informasi Bisnis di iSTTS. Di sana saya memperdalam arsitektur basis data relasional dan rekayasa perangkat lunak terstruktur. Selain menyelesaikan studi dengan predikat tertinggi dan empat penghargaan praktisi laboratorium, saya juga aktif memimpin penggalangan dana serta kemitraan korporat untuk kegiatan kampus.",
      p3: "Saat ini fokus saya adalah membangun solusi digital di titik temu antara teknologi dan operasional bisnis. Keahlian utama saya berpusat pada pengembangan aplikasi web produksi dengan Next.js dan Laravel, didukung konfigurasi alur kerja otomasi AI yang memangkas tugas manual repetitif. Terbiasa menghadapi dinamika usaha yang terus berganti membuat saya memandang kode dari kacamata strategi operasional: perangkat lunak harus stabil, mudah dirawat, dan cukup fleksibel mengikuti arah pertumbuhan bisnis.",
      pillarsTitle: "3 Pilar Fondasi Pendekatan Kerja:",
      pillar1Title: "Akurasi Analitis & Disiplin Akademik",
      pillar1Desc: "Terbukti melalui predikat kehormatan tertinggi dan 4x piagam penghargaan praktikan terbaik di laboratorium komputer iSTTS.",
      pillar2Title: "Ketajaman Lapangan & Bisnis Komersial",
      pillar2Desc: "Pengalaman nyata mengelola alur inventaris, faktur B2B, logistik rantai dingin (-25°C), dan perizinan resmi di PT. Karya Buah Tropis.",
      pillar3Title: "Otomasi Modern & Rekayasa AI Mandiri",
      pillar3Desc: "Membangun sistem mandiri berkinerja tinggi seperti pipeline kompilasi dokumen buku 150+ halaman berbantuan AI dan engine komputasi web zero-latency.",
      quote: "Sistem yang baik itu sederhana: menyelesaikan pekerjaan rumit di lapangan tanpa bikin orang yang menjalankannya pusing.",
      statChips: [
        {
          value: "4.00 / 4.00",
          label: "IPK Sempurna & 4x Best Practitioner",
          sub: "Disiplin Akademik & Lab Komputer iSTTS",
        },
        {
          value: "20+ Proyek",
          label: "Aplikasi, ERP & Sistem Bisnis",
          sub: "Produksi Nyata & Rekayasa Perangkat Lunak",
        },
        {
          value: "150+ Hal",
          label: "Pipeline Otomasi AI Siap Cetak",
          sub: "Turnaround Berminggu-minggu ➔ 1 Hari",
        },
        {
          value: "90+ SKU",
          label: "Standardisasi Rantai Dingin (-25°C)",
          sub: "Kepatuhan Sertifikasi Halal & Kementan RI",
        },
      ],
    },
    services: {
      sectionTag: "Pilar Layanan & Bukti Rekam Jejak",
      title: "Pilar Solusi & Bukti Empiris Terverifikasi",
      subtitle:
        "Menjembatani kode rekayasa dengan realitas bisnis: setiap kapabilitas diperkuat dengan bukti empiris dan metrik komersial nyata.",
      items: [
        {
          title: "Full-Stack Web & Modern ERPs",
          description:
            "Pengembangan aplikasi web kustom dan sistem ERP modern (Next.js, TypeScript, Laravel, MySQL) untuk mendigitalisasi operasional, menggantikan sistem warisan, dan mempercepat alur transaksi bisnis.",
          metric: "4.00 / 4.00",
          metricLabel: "IPK 4.00 & 4x Best Practitioner",
          metricSub: "Algoritma C#, Web Dev, Client-Server MySQL, OOP Java",
          tags: ["Next.js", "TypeScript", "Laravel", "MySQL", "Clean Architecture"],
        },
        {
          title: "AI Workflows & Autonomous Pipelines",
          description:
            "Merancang pipeline kompilasi dokumen dan alur kerja otomasi berbantuan AI (LLM prompt engineering terstruktur, penataan data terisolasi, kompilasi Python) yang memangkas waktu kerja dari berminggu-minggu menjadi 1 hari.",
          metric: "150+ Halaman",
          metricLabel: "Minggu ➔ 1 Hari Turnaround",
          metricSub: "Pipeline Sintesis Siap Cetak (The Secret of Life)",
          tags: ["LLM Prompt Orchestration", "Python Pipelines", "Document Synthesis", "Offset Standard"],
        },
        {
          title: "Fractional Tech Lead & Operational Architecture",
          description:
            "Menjembatani visi bisnis dengan eksekusi teknis lapangan. Mengorkestrasi standardisasi SOP operasional, manajemen inventaris terintegrasi, logistik rantai dingin (-25°C), dan kepatuhan sistem audit resmi.",
          metric: "90+ SKU",
          metricLabel: "Standar Rantai Dingin (-25°C)",
          metricSub: "Kepatuhan Sertifikasi Halal & Kementan RI",
          tags: ["Business Systems", "SOP Standardization", "Cross-Functional Bridge", "Supply Chain"],
        },
        {
          title: "High-Performance Compute & Data Engines",
          description:
            "Membangun peranti komputasi interaktif bebas latensi, pelacak portofolio kuantitatif multi-aset, kalkulasi keuangan real-time, dan dashboard analitik berbasis browser tanpa beban biaya server per hitung.",
          metric: "< 15 ms",
          metricLabel: "$0 Biaya Server & Skripsi Grade A",
          metricSub: "Client-Side Compute & Riset Finansial (CocokGa & CatatCrypto)",
          tags: ["Client-Side Compute", "Quant Metrics", "Financial Tracking", "Zero Latency"],
        },
      ],
    },
    highlights: {
      sectionTag: "Pencapaian Utama & Bukti Rekam Jejak",
      title: "Sorotan Bukti Rekam Jejak Terverifikasi",
      subtitle:
        "Empat tonggak pencapaian empiris yang memvalidasi kapasitas analitis, keandalan rekayasa software, dan eksekusi komersial di dunia nyata.",
      items: [
        {
          tag: "Pendidikan & Akademik",
          title: "IPK Sempurna 4.00 & 4x Best Practitioner",
          metric: "4.00 / 4.00",
          metricLabel: "IPK 4.00 Sangat Memuaskan",
          description:
            "Lulusan S1 Sistem Informasi Bisnis iSTTS dengan nilai A mutlak pada seluruh mata kuliah (IPK Sempurna 4.00 / Predikat Sangat Memuaskan), serta peraih 4x penghargaan Praktikan Terbaik berturut-turut di Laboratorium Komputer.",
        },
        {
          tag: "Rekayasa Otomasi AI",
          title: "Pipeline Kompilasi Buku 150+ Halaman",
          metric: "150+ Halaman",
          metricLabel: "Otomasi Siap Cetak (The Secret of Life)",
          description:
            "Merancang alur kerja sintesis prompt AI dan engine kompilasi Python yang mengonversi data profil menjadi 150+ halaman buku berstandar cetak offset, memangkas proses dari berminggu-minggu menjadi 1 hari.",
        },
        {
          tag: "Operasional Bisnis B2B",
          title: "Standardisasi Cold Chain & Kepatuhan Legal",
          metric: "90+ SKU",
          metricLabel: "Katalog & Rantai Dingin -25°C",
          description:
            "Membangun katalog digital 90+ SKU dan kemasan vakum pangan industri di PT. Karya Buah Tropis yang memenuhi sertifikasi Halal dan izin edar resmi Kementerian Pertanian RI.",
        },
        {
          tag: "Riset Finansial & Quant",
          title: "Skripsi Portofolio Kripto & Jurnal Trading",
          metric: "Grade A",
          metricLabel: "Nilai Skripsi Sempurna (CatatCrypto)",
          description:
            "Mempertahankan tugas akhir sistem pelacak portofolio multi-koin dengan kalkulasi DCA otomatis, laba/rugi mengambang (unrealized PnL), metrik win rate, dan analisis kurva drawdown.",
        },
      ],
    },
    experience: {
      sectionTag: "Riwayat Peran Profesional",
      title: "Riwayat Peran Profesional",
      subtitle:
        "Rekam jejak kontribusi nyata pada operasional sistem digital, pengembangan backend, riset kemitraan, dan peranti lunak asesmen karakter.",
    },
    featuredProjects: {
      sectionTag: "Sistem & Portofolio Unggulan",
      title: "Proyek Pilihan & Sistem Unggulan",
      subtitle:
        "Etalase mendalam dari sistem perangkat lunak mandiri, platform B2B korporat, dan karya desain industri teruji.",
      disclaimerConfidential:
        "Standar Integritas & Kerahasiaan: Formula logika internal dan algoritma proprietary dilindungi secara ketat. Etalase ini murni mempresentasikan arsitektur software, hasil komputasi, dan antarmuka pengguna.",
      showAllBtn: "Buka Arsip Lengkap (20+ Proyek)",
      hideAllBtn: "Tutup Arsip Lengkap",
      archiveTitle: "Buku Besar Seluruh Proyek Nyata (2010 – 2026)",
      archiveSubtitle:
        "Daftar kronologis lengkap mencakup proyek software iSTTS, peranti lunak asesmen C#, inisiatif bisnis keluarga, dan sistem AI. Tugas freelance privat sengaja dikecualikan.",
      filterAll: "Semua (20+)",
      filterWeb: "Full-Stack Web",
      filterDesktop: "Desktop & C#",
      filterAi: "AI & Workflow",
      filterQuant: "Finansial & Quant",
      filterDesign: "Desain & Kemasan",
      searchPlaceholder: "Cari teknologi, judul, atau kata kunci...",
      viewLive: "Buka Sistem",
      keyAchievements: "Pencapaian Rekayasa Utama:",
      techStack: "Teknologi yang Digunakan:",
      blueprintFlowTitle: "Alur Arsitektur & Pipeline Sistem:",
      packagingBento: {
        tag: "Rekayasa Kemasan Fisik & Desain Manufaktur",
        title: "Kemasan Vakum Industri PT. Karya Buah Tropis & Key's Brand",
        subtitle:
          "Bukti empiris penguasaan rantai pasok manufaktur fisik: pola pisau nilon tahan beku -25°C, standing pouch zipper, dan katalog harga grosir B2B 3.4MB.",
        box1Tag: "Suhu Beku Ekstrem -25°C",
        box1Title: "Kemasan Vakum Nilon Food-Grade",
        box1Desc:
          "Struktur multi-layer nilon berstandar industri tanpa risiko pecah atau freezer burn pada cold storage.",
        box2Tag: "Katalog Penjualan B2B",
        box2Title: "Company Profile & Katalog Harga Grosir (3.4MB)",
        box2Desc:
          "Dokumen kurasi B2B resolusi tinggi untuk negosiasi pengadaan Horeca dan distributor regional.",
        box3Tag: "Kemasan Konsumen Retail",
        box3Title: "Kemasan Retail & Standing Pouch Zipper",
        box3Desc:
          "Rangkaian kemasan standing pouch untuk segmen retail modern, camilan Janok, dan Chicken Center.",
        box4Tag: "Identitas Fasilitas",
        box4Title: "Spanduk Gudang Pendingin & Branding Merek",
        box4Desc:
          "Standarisasi identitas toko fisik, papan nama gudang cold-storage, dan label stiker toples.",
      },
    },
    skills: {
      sectionTag: "Matriks Keahlian & Arsitektur",
      title: "Pilar Kemampuan Teknis & Operasional",
      subtitle:
        "Seluruh kompetensi dipetakan berdasarkan bukti riil dari iSTTS (4x Best Practitioner) dan rekam jejak implementasi proyek nyata.",
      tier1: "Tier 1: Penguasaan Inti & Produksi Harian",
      tier1Desc: "Teknologi dan perkakas yang digunakan secara rutin dalam membangun sistem nyata.",
      tier2: "Tier 2: Implementasi Proyek & Teruji Praktis",
      tier2Desc: "Keahlian yang diterapkan langsung pada proyek software, riset, atau operasional.",
      tier3: "Tier 3: Fondasi Konseptual & Bersertifikat",
      tier3Desc: "Pemahaman arsitektural terverifikasi melalui sertifikasi resmi dan standar industri.",
    },
    credentials: {
      sectionTag: "Pendidikan & Kredensial Resmi",
      title: "Pendidikan Formal, Sertifikasi & Kemampuan Bahasa",
      subtitle:
        "Validasi formal atas kompetensi analitis, dedikasi kode bersih, sertifikasi industri, dan kemahiran trilingual.",
      educationTitle: "Pendidikan Formal & Kelulusan Terbaik",
      awardsTitle: "4x Penghargaan Praktikan Terbaik (Laboratorium Komputer iSTTS)",
      leadershipTitle: "Pengalaman Kepemimpinan & Organisasi Mahasiswa",
      certificationsTitle: "Lisensi & Sertifikasi Industri Terverifikasi",
      languagesTitle: "Kemampuan Bahasa Bersertifikasi (Trilingual)",
    },
    contact: {
      sectionTag: "Komunikasi Langsung & Kolaborasi",
      title: "Hubungi & Mulai Diskusi",
      subtitle:
        "Terbuka untuk peluang kontributor jarak jauh (remote individual-contributor), konsultasi sistem operasional, dan kolaborasi strategis.",
      emailLabel: "Email Resmi",
      whatsappLabel: "WhatsApp Bisnis",
      linkedinLabel: "Profil LinkedIn",
      githubLabel: "GitHub Publik",
      locationValue: "Surabaya, Indonesia (UTC+7 / WIB) · Terbuka untuk Remote Internasional",
      formTitle: "Kirim Pesan Langsung",
      formSubtitle: "Punya inisiatif proyek, arsitektur software, atau tantangan bisnis? Silakan sampaikan pesan di sini.",
      quickTopicLabel: "Pilihan Topik Cepat:",
      quickTopics: [
        "Rekayasa Web & ERP",
        "Pipeline Otomasi AI",
        "Fractional Tech Lead",
        "Konsultasi Sistem",
        "Peluang Kerja / Full-time",
      ],
      namePlaceholder: "Nama Lengkap Anda",
      emailPlaceholder: "Alamat Email Anda",
      subjectPlaceholder: "Topik Pembahasan (misal: Rekayasa Sistem ERP, Otomasi AI, Tech Lead)",
      messagePlaceholder: "Tuliskan ringkasan kebutuhan, arsitektur yang direncanakan, atau pertanyaan Anda...",
      sendBtn: "Kirim Pesan Sekarang",
      directTitle: "Kanal Komunikasi Cepat",
      directSubtitle: "Terhubung langsung via email resmi atau percakapan instan tanpa perantara.",
      responseNotice: "Waktu respons rata-rata < 24 jam kerja",
    },
    pdfModal: {
      title: "Kurasi Dokumen Portofolio Grafis",
      subtitle: "Format dokumen PDF A4 desain editorial grafis penuh (Canva-grade) lengkap dengan mockup visual, lencana kehormatan, dan tautan langsung.",
      instruction: "Centang modul yang diperlukan:",
      selectAll: "Pilih Semua",
      deselectAll: "Hapus Semua",
      includeHero: "Banner Editorial, Foto Profil, IPK 4.00 & Kontak Resmi",
      includeAbout: "Profil Eksekutif & Sikap Rekayasa Sistem (Show, Don't Pitch)",
      includeHighlights: "Pilar Kapabilitas & 3 Tahap Metodologi Eksekusi (Slide 03)",
      includeExperience: "Buku Besar Pengalaman Kerja Profesional Terverifikasi",
      includeFeatured: "Sistem Unggulan Skala Produksi (Dengan Mockup & URL Aktif)",
      includeSkills: "Matriks Keahlian 6 Pilar (3-Tier Proof Matrix)",
      includeCredentials: "Pendidikan S1 SIB (IPK 4.00), 4x Penghargaan, Sertifikasi & Bahasa",
      includeContact: "Kanal Kontak Langsung, Kolaborasi Strategis & Penutup Editorial (Footer)",
      generateBtn: "Cetak / Ekspor PDF Grafis",
      closeBtn: "Batal",
      printTip: "Tips Cetak: Pada jendela cetak browser (Ctrl+P / Cmd+P), centang 'Background graphics' dan pilih 'Save as PDF' (A4) untuk mempertahankan warna dan visual kartu.",
    },
    footer: {
      name: "Jem Angkasa Wijaya, S.Kom.",
      tagline: "Menjembatani operasional bisnis dengan sistem web andal dan alur kerja AI.",
      downloadCv: "Unduh CV (PDF)",
      downloadPortfolio: "Unduh Portofolio (PDF)",
      availabilityStatus: "Terbuka untuk Posisi Penuh & Konsultasi Strategis",
      navTitle: "NAVIGASI",
      navHome: "Beranda / Ikhtisar",
      navAbout: "Tentang & Filosofi",
      navProjects: "Karya Pilihan & Arsip",
      navProcess: "Proses Rekayasa",
      navContact: "Kontak Langsung",
      specTitle: "SPESIALISASI",
      specFullstack: "Full-Stack Web & Sistem ERP",
      specAi: "Alur Kerja & Pipeline AI",
      specOperations: "Sistem Bisnis & Operasional",
      specQuant: "Pemodelan Kuantitatif & Finansial",
      specPackaging: "Kemasan Industri Rantai Dingin",
      connectTitle: "JARINGAN",
      locationTimezone: "Surabaya, ID (UTC+7 / WIB)",
      copyright: "Hak cipta dilindungi.",
      techCredit: "Dibangun dengan Next.js, TypeScript & Tailwind CSS",
    },
  },

  // 3. SIMPLIFIED CHINESE (中文)
  zh: {
    common: {
      coreDisciplines: "核心专业领域",
      coreDisciplinesVal: "系统工程与AI / 工业包装制造",
      availability: "当前业务状态",
      availabilityVal: "战略级系统架构与研发咨询",
      locationRadar: "所在地与服务范围",
      locationRadarVal: "印度尼西亚泗水 · 全球远程交付",
      scroll: "向下浏览",
      chapterIndex: "章节索引",
      verifiedHighlights: "已验证核心亮点",
      verifiedDeliverables: "可审计交付成果",
      technicalDossierBtn: "技术作品与系统规格",
      productionCycle: "生产研发周期",
      verified: "已严格审计",
      directoryLedger: "工程目录 · 20+ 真实生产级系统与代码库",
      verifiedTechStack: "已验证技术栈",
      tableYear: "年份",
      tableProjectScope: "项目与工程范围",
      tableCategory: "分类",
      tableRole: "角色职责",
      tableTech: "技术栈",
      tableLinks: "访问链接",
      processTag: "工程实验室内部纪实",
      processTitle: "实证工程准则与研发流程",
      processSubtitle: "从工业级包装聚合物微米级公差，到低延迟高并发系统架构的严谨实证验证。",
      processMethodology: "工程方法论与流程",
      statusAvailable: "开放承接远程与混合办公职位",
      statusLocation: "泗水，印尼 / 全球远程",
      honorsGpa: "荣誉：极优异评级 (Very Satisfactory)",
      honorsAwards: "算法 · Web开发 · 客户端-服务器 · 面向对象",
      trustAuditable: "100% 可审计真实成果",
      trustGpa: "iSTTS 满绩 4.00 GPA",
      trustZeroSlop: "拒绝低质AI劣质内容 / 严谨纯粹工程",
      activeRole: "进行中",
      careerLedger: "履历总账",
      servicesTag: "核心解决方案与专业领域",
      servicesTitle: "工程支柱与实战解决方案",
      servicesSubtitle: "融合现代软件工程的严谨度与真实实体商业运营经验。",
      skillsTag: "技能架构矩阵",
      skillsTitle: "技术实力与实战工程能力",
      skillsSubtitle: "全部专业技能均由iSTTS顶尖学术荣誉及真实商业工程落地为背书。",
      skillsMatrix: "技能矩阵",
      credentialsTag: "学历资质与专业认证",
      credentialsTitle: "正规学历、专业大奖与语言认证",
      credentialsSubtitle: "对分析素养、整洁代码自律、行业官方认证及三语精通的正式背书。",
      credentialsChapter: "学术资质与认证",
    },
    nav: {
      about: "关于我",
      services: "核心服务",
      highlights: "成就亮点",
      experience: "工作履历",
      projects: "工程项目",
      skills: "技能矩阵",
      credentials: "学历资质",
      contact: "联系合作",
      exportPdf: "导出PDF作品集",
    },
    hero: {
      badge: "现开放承接远程业务系统与Web开发合作",
      salutation: "Jem Angkasa Wijaya (范永安), S.Kom.",
      titleFirst: "业务系统、",
      titleHighlight: "数字化运营",
      titleLast: "与AI自动化工作流。",
      subheading:
        "架起实体商业运营与现代数字化系统的桥梁。我专注于采用 Next.js 与 Laravel 构建全栈Web应用，优化业务流程，并配置稳定可靠的AI自动化工作流。",
      ctaPrimary: "浏览工程作品",
      ctaSecondary: "生成PDF作品集",
      quickStats: {
        gpa: "4.00 / 4.00",
        gpaLabel: "满分绩点 (最高荣誉评级)",
        studyTime: "4.5 年",
        studyTimeLabel: "iSTTS 学士学位研修周期",
        projects: "20+ 个项目",
        projectsLabel: "软件系统、企业ERP与包装工程",
        awards: "4 次大奖",
        awardsLabel: "iSTTS 计算机实验室最佳实训生",
      },
    },
    about: {
      sectionTag: "个人历程与工程哲学",
      title: "将真实商业战略融入现代软件系统",
      subtitle:
        "构建兼具高适应性与商业执行力的高可靠Web架构与自动化工作流。",
      p1: "自幼协助家庭企业的经历让我很早就适应了多变的市场节奏。从多门面的餐饮连锁、企业人力性格测评服务，到工业级冷链物流，家庭业务的多次转型促使我必须迅速掌握新业务并自主搭建系统。这种经历锤炼了我快速学习与抗压韧性，让我习惯在未知环境中迅速理清流程，从零建立稳健的工作流水线。",
      p2: "在泗水综合科学与技术学院 (iSTTS) 攻读商业信息系统期间，我将这种敏捷的实战经验与系统的软件工程理论结合，深入专研关系型数据库与现代Web系统开发。在学业上我以全校最高荣誉毕业并荣获4次计算机实验室最佳实训生奖项，同时在校期间牵头负责多个大型活动的商业赞助与外联工作。",
      p3: "如今，我专注于在技术研发与实体业务运营的交叉领域创造价值。我的核心研发聚焦于采用 Next.js 与 Laravel 构建生产级Web应用，并配置结构化AI自动化工作流以消除繁琐的日常手工摩擦。多次应对业务转型的经历让我始终从运营战略的角度审视代码：软件系统必须稳定可靠、易于维护，并具备随业务发展敏捷调整的灵活性。",
      pillarsTitle: "三大核心工程支柱：",
      pillar1Title: "严谨分析力与顶尖学术自律",
      pillar1Desc: "以最高优等学术荣誉及连续4届计算机核心实验课最佳实训生荣誉为背书。",
      pillar2Title: "实体供应链与商业敏锐度",
      pillar2Desc: "在PT. Karya Buah Tropis亲历管理库存流、B2B大宗账目、-25°C冷链极低温物流与国家级食品合规认证。",
      pillar3Title: "自主现代自动化与AI工程",
      pillar3Desc: "研发端到端150+页个性化图书自动编排管线与毫秒级零延迟浏览器端量化计算引擎。",
      quote: "优秀的系统务实而清晰：切实化解现场的繁琐阻力，且不给日常运转的人增添多余负担。",
      statChips: [
        {
          value: "4.00 / 4.00",
          label: "满分GPA与4次最佳实训生",
          sub: "学术自律与iSTTS计算机实验室认证",
        },
        {
          value: "20+ 个项目",
          label: "应用、企业ERP与业务系统",
          sub: "真实生产级软件工程实践",
        },
        {
          value: "150+ 页",
          label: "AI自动化出版排版流水线",
          sub: "将数周工作量缩减至单日交付",
        },
        {
          value: "90+ 款SKU",
          label: "-25°C 极低温冷链规范化",
          sub: "符合清真认证与印尼农业部法定规范",
        },
      ],
    },
    services: {
      sectionTag: "核心服务与量化实证",
      title: "解决方案支柱与可审计实证",
      subtitle:
        "融合现代软件工程的严谨度与真实商业运营经验：每一项专业能力均由真实商业指标背书。",
      items: [
        {
          title: "全栈Web应用与现代企业ERP",
          description:
            "研发定制化Web应用程序与现代ERP系统（Next.js, TypeScript, Laravel, MySQL），全面数字化传统作业流程，替代陈旧遗留系统，大幅提升企业交易周转速度。",
          metric: "4.00 / 4.00",
          metricLabel: "满绩4.00与4次最佳实训生",
          metricSub: "C#算法、Web开发、MySQL客户端服务器、Java OOP",
          tags: ["Next.js", "TypeScript", "Laravel", "MySQL", "整洁架构"],
        },
        {
          title: "AI自动化工作流与智能数据管线",
          description:
            "设计基于大语言模型的文档自动化编排流水线（结构化Prompt工程、离线本地数据处理、Python脚本批量生成），将长文档与图表生成时间从数周缩减至仅需单日。",
          metric: "150+ 页",
          metricLabel: "数周 ➔ 1天 交付周期",
          metricSub: "高精度胶印生产标准排版管线 (The Secret of Life)",
          tags: ["LLM提示词编排", "Python自动化管线", "结构化文档合成", "胶印印刷级标准"],
        },
        {
          title: "技术负责人咨询与实体运营架构",
          description:
            "作为连接商业决策与技术落地的战略枢纽。主导企业SOP标准化、端到端仓储库存系统、-25°C极低温冷链物流及法定资质合规审计。",
          metric: "90+ 款SKU",
          metricLabel: "-25°C 极低温冷链标准",
          metricSub: "符合清真认证与印尼农业部规范",
          tags: ["商业系统", "SOP标准化", "跨领域枢纽", "供应链集成"],
        },
        {
          title: "高性能无服务器本地计算引擎",
          description:
            "研发零延迟浏览器端交互式计算工具、跨资产量化投资追踪看板与实时财务分析系统，免除昂贵的逐次API服务器调用开销。",
          metric: "< 15 ms",
          metricLabel: "$0 云服务器开销与Grade A论文",
          metricSub: "纯客户端高性能计算与金融量化研究 (CocokGa & CatatCrypto)",
          tags: ["客户端高性能计算", "量化金融指标", "资产追踪", "零延迟架构"],
        },
      ],
    },
    highlights: {
      sectionTag: "核心里程碑与实证纪实",
      title: "可审计实证与核心里程碑",
      subtitle:
        "四大实证里程碑，全面印证分析力、软件工程可信度与商业落地能力。",
      items: [
        {
          tag: "学术与高等教育",
          title: "满分绩点 4.00 与 4次最佳实训生大奖",
          metric: "4.00 / 4.00",
          metricLabel: "满绩最高荣誉评级",
          description:
            "以全科绝对A等成绩毕业于iSTTS业务信息系统专业，并在计算机实验室连续4届荣获最佳实训生荣誉认证。",
        },
        {
          tag: "AI自动化工程",
          title: "150+页出版级图书自动化编排引擎",
          metric: "150+ 页",
          metricLabel: "印刷级自动生产管线 (The Secret of Life)",
          description:
            "构建端到端Python合成脚本与结构化提示词工作流，将散落数据自动化排版为150+页offset印刷标准图书，提速百倍。",
        },
        {
          tag: "B2B实体产业与制造",
          title: "极低温冷链规范化与包装合规工程",
          metric: "90+ 款SKU",
          metricLabel: "全系产品线与 -25°C 极低温测试",
          description:
            "在PT. Karya Buah Tropis主导数字化产品名录与食品级高阻隔真空包装，全线通过清真认证与国家农业部官方许可。",
        },
        {
          tag: "金融量化与数据系统",
          title: "加密资产组合量化追踪与交易日志系统",
          metric: "Grade A",
          metricLabel: "优异毕业设计评级 (CatatCrypto)",
          description:
            "独立研发多币种智能定投DCA计算、未实现盈亏追踪、胜率回测分析与最大回撤控制模型。",
        },
      ],
    },
    experience: {
      sectionTag: "职业履历总账",
      title: "专业工作履历与贡献纪实",
      subtitle:
        "在数字化系统运营、后端研发、战略研究及测评软件领域的真实贡献总览。",
    },
    featuredProjects: {
      sectionTag: "代表性工程与旗舰系统",
      title: "精选旗舰项目与系统蓝图",
      subtitle:
        "涵盖自主软件产品、企业级B2B中台与工业级制造包装的全面展示。",
      disclaimerConfidential:
        "保密与工程道德声明：商业专有核心业务逻辑与内部算法已做黑盒脱敏。展示内容专注于系统软件架构、数据流程与交互设计。",
      showAllBtn: "查阅完整工程总账 (20+ 项目)",
      hideAllBtn: "折叠工程总账",
      archiveTitle: "全景工程项目档案库 (2010 – 2026)",
      archiveSubtitle:
        "收录iSTTS核心软件项目、C#心理测评系统、家族企业工业制造体系与前沿AI工程。非公开私人外包项目已省略。",
      filterAll: "全部 (20+)",
      filterWeb: "全栈 Web",
      filterDesktop: "桌面与C#",
      filterAi: "AI与自动化",
      filterQuant: "金融与量化",
      filterDesign: "包装与工业设计",
      searchPlaceholder: "输入技术栈、名称或关键词搜索...",
      viewLive: "访问线上系统",
      keyAchievements: "核心工程交付物：",
      techStack: "技术选型栈：",
      blueprintFlowTitle: "系统架构与数据流蓝图：",
      packagingBento: {
        tag: "实体包装工程与工业设计",
        title: "PT. Karya Buah Tropis 工业真空包装与品牌体系",
        subtitle:
          "-25°C极低温尼龙刀模、自立拉链袋与3.4MB高精度B2B批发采购画册的实证制造。",
        box1Tag: "-25°C 极寒冷冻考验",
        box1Title: "食品级高阻隔复合尼龙真空包装",
        box1Desc:
          "工业级多层共挤尼龙结构，杜绝冷冻库刺破或冷冻灼伤（Freezer Burn）。",
        box2Tag: "B2B大宗采购画册",
        box2Title: "企业画册与批发阶梯报价册 (3.4MB)",
        box2Desc:
          "专为高端酒店采购与区域一级批发商谈判量身打造的印刷级CMYK商业名录。",
        box3Tag: "现代零售消费包装",
        box3Title: "零售自立拉链袋 (Standing Pouch)",
        box3Desc:
          "面向商超货架、Janok零食及Chicken Center生鲜的全套包装规范。",
        box4Tag: "生产设施视觉标识",
        box4Title: "冷库大型招牌与品牌视觉规范",
        box4Desc:
          "实体门店门头、冷链仓储防潮招牌与防水产品标签的标准化落地。",
      },
    },
    skills: {
      sectionTag: "技能架构矩阵",
      title: "技术实力与实战工程能力",
      subtitle:
        "全部专业技能均由iSTTS顶尖学术荣誉及真实商业工程落地为背书。",
      tier1: "Tier 1: 核心精通与日常生产级掌控",
      tier1Desc: "日常用于构建与维护生产级高可用系统的核心技术栈。",
      tier2: "Tier 2: 深入应用与工程验证",
      tier2Desc: "在生产环境、科研课题或商业运营中亲手落地实践的技术。",
      tier3: "Tier 3: 架构理论基础与权威认证",
      tier3Desc: "具备权威行业认证与扎实理论支撑的系统设计原则。",
    },
    credentials: {
      sectionTag: "学历资质与专业认证",
      title: "正规学历、专业大奖与语言认证",
      subtitle:
        "对分析素养、整洁代码自律、行业官方认证及三语精通的正式背书。",
      educationTitle: "正规大学学历与最高荣誉毕业",
      awardsTitle: "4次最佳实训生大奖（iSTTS计算机核心实验室）",
      leadershipTitle: "学生领导力与学术组织经历",
      certificationsTitle: "权威行业资质与专业认证",
      languagesTitle: "官方语言能力认证（精通三语：英/印尼/中）",
    },
    contact: {
      sectionTag: "直接联系与合作探讨",
      title: "建立联系与战略探讨",
      subtitle:
        "开放接受全球远程全职研发、企业数字化与系统架构咨询及技术顾问合作。",
      emailLabel: "工作邮箱",
      whatsappLabel: "商务 WhatsApp",
      linkedinLabel: "领英专业档案",
      githubLabel: "公开 GitHub 代码库",
      locationValue: "印度尼西亚泗水 (UTC+7 / WIB) · 支持全球远程协作与跨国沟通",
      formTitle: "发送直接留言",
      formSubtitle: "有具体项目规划、系统架构难题或合作意向？欢迎在此留下详细信息。",
      quickTopicLabel: "快捷主题预设：",
      quickTopics: [
        "全栈Web / ERP研发",
        "AI自动化工作流",
        "技术负责人顾问",
        "系统架构与工程咨询",
        "全职/战略级合作",
      ],
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的电子邮箱",
      subjectPlaceholder: "探讨主题（如：ERP系统架构、AI工作流研发、技术顾问）",
      messagePlaceholder: "请简要阐述您的业务需求、计划中的系统架构或探讨议题...",
      sendBtn: "立即发送留言",
      directTitle: "快速即时联系通道",
      directSubtitle: "通过工作邮箱或即时通讯直接联络，无冗长中间环节。",
      responseNotice: "工作日平均回复时间 < 24小时",
    },
    pdfModal: {
      title: "定制高清图文版工程档案 PDF",
      subtitle: "专业印刷级A4横版排版，配备高保真设备模型、学术荣誉铭牌及可直接点击的外链。",
      instruction: "请勾选需要导出的章节模块：",
      selectAll: "全选所有模块",
      deselectAll: "取消全部勾选",
      includeHero: "首页横幅、个人肖像、4.00绩点荣誉与官方联系渠道",
      includeAbout: "执行摘要与实证工程哲学（Show, Don't Pitch）",
      includeHighlights: "核心工程能力与3阶段交付方法论 (Slide 03)",
      includeExperience: "经审计的专业工作履历总账",
      includeFeatured: "旗舰级生产软件系统（含界面模型与可用外链）",
      includeSkills: "6大核心领域技能矩阵（3级实证阶梯）",
      includeCredentials: "大学学历（4.00 GPA）、4届最佳实训生大奖、资格证书与三语资质",
      includeContact: "直接沟通渠道、战略合作倡议与纪念章封底",
      generateBtn: "生成 / 打印图文 PDF",
      closeBtn: "取消返回",
      printTip: "打印建议：在浏览器打印面板中，勾选“背景图形”（Background graphics）并将纸张设为 A4 横向，以完美保留卡片质感与色彩。",
    },
    footer: {
      name: "Jem Angkasa Wijaya (林永安)",
      tagline: "将实际商业运作与现代全栈 Web 架构及 AI 自动化深度融合。",
      downloadCv: "下载 CV (PDF)",
      downloadPortfolio: "下载作品集 (PDF)",
      availabilityStatus: "开放全职职位与战略系统架构咨询",
      navTitle: "全站导航",
      navHome: "首页 / 个人履历概览",
      navAbout: "关于我与工程哲学",
      navProjects: "精选作品与完整归档",
      navProcess: "工程规范与研发流程",
      navContact: "直达联系合作",
      specTitle: "核心工程领域",
      specFullstack: "全栈 Web 与企业级 ERP",
      specAi: "AI 自动化工作流与管线",
      specOperations: "商业系统与供应链运营",
      specQuant: "金融量化与算法建模",
      specPackaging: "工业冷链包装工程",
      connectTitle: "履历与连接",
      locationTimezone: "印尼泗水 (UTC+7 / WIB)",
      copyright: "保留所有权利。",
      techCredit: "基于 Next.js、TypeScript 与 Tailwind CSS 构建",
    },
  },
};
