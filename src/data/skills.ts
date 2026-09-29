export interface SkillCategory {
  id: string;
  title: string;
  titleId: string;
  titleZh?: string;
  icon: string;
  description: string;
  descriptionId: string;
  descriptionZh?: string;
  tier1: { name: string; tag: string }[];
  tier2: { name: string; tag: string }[];
  tier3: { name: string; tag: string }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "web-frontend",
    title: "Web & Frontend Engineering",
    titleId: "Rekayasa Web & Frontend",
    titleZh: "Web 与 前端系统工程",
    icon: "Layout",
    description: "Building responsive, zero-latency, high-converting interfaces with modern component frameworks.",
    descriptionId: "Membangun antarmuka responsif, nol latensi, dan konversi tinggi dengan framework komponen modern.",
    descriptionZh: "运用现代组件工程构建零延迟、高响应、高转化率的前端界面与设计规范。",
    tier1: [
      { name: "Next.js (App Router)", tag: "Daily Production" },
      { name: "React.js", tag: "Daily Production" },
      { name: "Tailwind CSS", tag: "Daily Production" },
      { name: "JavaScript (ES6+)", tag: "Core Mastery" },
      { name: "HTML5 & Semantic Web", tag: "Core Mastery" },
      { name: "Responsive CSS3 Architecture", tag: "Core Mastery" },
    ],
    tier2: [
      { name: "TypeScript", tag: "Production Projects" },
      { name: "Vue.js", tag: "Academic Projects" },
      { name: "Bootstrap 4/5", tag: "Client Projects" },
      { name: "jQuery", tag: "Legacy Maintenance" },
    ],
    tier3: [
      { name: "Dart / Flutter", tag: "Mobile Foundation" },
      { name: "Web Share & Native APIs", tag: "Interactive Features" },
    ],
  },
  {
    id: "backend-systems",
    title: "Backend & Systems Logic",
    titleId: "Backend & Logika Sistem",
    titleZh: "后端架构与系统业务逻辑",
    icon: "Server",
    description: "Architecting reliable application programming interfaces, business logic, and transactional backends.",
    descriptionId: "Merancang antarmuka pemrograman aplikasi (API) yang andal, logika bisnis, dan transaksi backend.",
    descriptionZh: "架构高可靠性 API、多租户企业级业务流程与事务型后端系统。",
    tier1: [
      { name: "PHP", tag: "Daily Production" },
      { name: "Laravel Framework", tag: "Production Standard" },
      { name: "MySQL Relational DB", tag: "Daily Production" },
      { name: "RESTful API (CRUD)", tag: "Standard Protocol" },
    ],
    tier2: [
      { name: "C# (.NET)", tag: "Desktop Software & Algorithms" },
      { name: "Java (OOP)", tag: "Awarded Practical" },
      { name: "Python", tag: "Data & Quant Scripts" },
      { name: "Socket Networking", tag: "Client-Server Projects" },
    ],
    tier3: [
      { name: "Node.js Runtimes", tag: "Foundational Scripting" },
      { name: "C++", tag: "Academic Foundation" },
    ],
  },
  {
    id: "data-architecture",
    title: "Data & Systems Architecture",
    titleId: "Arsitektur Data & Sistem",
    titleZh: "数据与系统架构设计",
    icon: "Database",
    description: "Designing normalized data models, inventory tracking ledgers, and institutional system structures.",
    descriptionId: "Merancang model data ternormalisasi, buku besar inventaris, dan struktur sistem korporat.",
    descriptionZh: "规范化数据建模（3NF）、库存核算总账与严谨的企业级系统架构。",
    tier1: [
      { name: "Relational Schema Design (3NF)", tag: "Production Standard" },
      { name: "Data Reconciliation Workflows", tag: "B2B Distribution" },
      { name: "Advanced Google Sheets / Excel", tag: "Commercial Operations" },
    ],
    tier2: [
      { name: "ERP & POS Data Modeling", tag: "Awarded Academic Project" },
      { name: "Client-Server System Design", tag: "Multi-Tier Implementation" },
      { name: "FIFO Inventory Accounting", tag: "Stock Movement Ledgers" },
    ],
    tier3: [
      { name: "Query Index Profiling", tag: "Optimization Practice" },
      { name: "Stored Procedures & Triggers", tag: "MySQL Architecture" },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Intelligent Automation",
    titleId: "AI & Otomasi Alur Kerja",
    titleZh: "AI 与 智能自动化流程",
    icon: "Cpu",
    description: "Orchestrating large language models, structured prompt engineering, and automated workflow pipelines.",
    descriptionId: "Memanfaatkan model bahasa besar, orkestrasi prompt terstruktur, dan pipeline otomasi alur kerja.",
    descriptionZh: "编排大语言模型、结构化 Prompt 工程与端到端自动化知识库管线。",
    tier1: [
      { name: "Structured Prompt Orchestration", tag: "Production Standard" },
      { name: "AI Research & Note Synthesis", tag: "Knowledge Base Workflows" },
      { name: "Vibe Coding Execution", tag: "High-Speed Development" },
    ],
    tier2: [
      { name: "n8n Visual Automation", tag: "Workflow Integrations" },
      { name: "Vector RAG Workflows", tag: "Knowledge Retrieval" },
      { name: "Automated Document Compiling", tag: "Python Publishing Engine" },
    ],
    tier3: [
      { name: "Multi-Agent Orchestration", tag: "System Prompts & Tooling" },
      { name: "Make / Webhook Integrations", tag: "Flow Design" },
    ],
  },
  {
    id: "devops-tooling",
    title: "Engineering Practices & Tooling",
    titleId: "Praktik Rekayasa & Perkakas",
    titleZh: "工程规范与开发工具链",
    icon: "Wrench",
    description: "Version control hygiene, collaborative documentation, and deterministic design delivery pipelines.",
    descriptionId: "Disiplin kontrol versi, dokumentasi kolaboratif, dan pipeline pengiriman desain deterministik.",
    descriptionZh: "严苛的版本控制规范、团队协作工程文档与确定性交付工具链。",
    tier1: [
      { name: "Git & GitHub", tag: "Daily Workflow" },
      { name: "High-Speed Touch Typing", tag: "Rapid Execution" },
      { name: "Notion Knowledge Architecture", tag: "Standard Operations" },
      { name: "Figma UI/UX & Wireframing", tag: "Design Systems" },
    ],
    tier2: [
      { name: "Docker Containerization", tag: "Local Dev Setup" },
      { name: "Trello / Agile Sprints", tag: "Project Management" },
      { name: "VS Code / Linux Environment", tag: "Daily Environment" },
    ],
    tier3: [
      { name: "AWS Cloud (EC2, S3)", tag: "Dicoding Certified" },
      { name: "Vercel / GitHub Pages", tag: "Static Deployments" },
    ],
  },
  {
    id: "operations-strategy",
    title: "Commercial Operations & Leadership",
    titleId: "Operasional Komersial & Kepemimpinan",
    titleZh: "商业化运营与跨学科领导力",
    icon: "TrendingUp",
    description: "Bridging the gap between raw engineering code and sustainable, compliant commercial business reality.",
    descriptionId: "Menjembatani kode rekayasa software dengan realitas bisnis komersial yang patuh dan berkelanjutan.",
    descriptionZh: "弥合技术工程与实体商业运作之间的鸿沟，确保合规与可持续商业落地。",
    tier1: [
      { name: "Cold-Chain Logistics Management", tag: "PT. Karya Buah Tropis" },
      { name: "Operational SOP Standardization", tag: "Corporate Systems" },
      { name: "Strategic Storytelling & Narrative", tag: "Inbound Positioning" },
      { name: "B2B Sales Invoicing & Ledger", tag: "Distribution Workflows" },
    ],
    tier2: [
      { name: "Agile / Scrum Sprint Participation", tag: "Enevti Startup Team" },
      { name: "Partner & Creator Onboarding", tag: "Ambassador Program" },
      { name: "Technical Peer Mentoring", tag: "HIMA SIB Python Tutor" },
    ],
    tier3: [
      { name: "Corporate PR & Sponsorship", tag: "IGL Fundraising Lead" },
    ],
  },
];
