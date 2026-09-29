export interface ExperienceItem {
  id: string;
  role: string;
  roleId: string;
  roleZh?: string;
  company: string;
  companyId: string;
  companyZh?: string;
  location: string;
  period: string;
  periodId: string;
  periodZh?: string;
  type: string;
  typeId: string;
  typeZh?: string;
  description: string;
  descriptionId: string;
  descriptionZh?: string;
  bullets: string[];
  bulletsId: string[];
  bulletsZh?: string[];
  tags: string[];
}

export type LeadershipExperienceItem = ExperienceItem;

/**
 * 6 Verified Professional & Venture Career Experiences
 */
export const experiencesData: ExperienceItem[] = [
  {
    id: "kbt",
    role: "Director — Operations & Digital Systems",
    roleId: "Direktur — Operasional & Sistem Digital",
    roleZh: "运营与数字化系统总监",
    company: "PT Karya Buah Tropis (Gudang Buah Beku)",
    companyId: "PT Karya Buah Tropis (Gudang Buah Beku)",
    companyZh: "PT Karya Buah Tropis (冷冻水果仓储物流)",
    location: "Surabaya, Indonesia",
    period: "July 2020 – Present (Part-time Advisory)",
    periodId: "Juli 2020 – Sekarang (Konsultasi Berkala)",
    periodZh: "2020年7月 – 至今 (定期运营与技术顾问)",
    type: "Operations & Digital Systems",
    typeId: "Operasional & Sistem Digital",
    typeZh: "商业运营与数字化系统架构",
    description:
      "Small family-owned commercial frozen-fruit distribution business serving hotel, restaurant, and cafe (Horeca) sectors. Active digital systems architecture phase completed; currently providing periodic operational and technical advisory.",
    descriptionId:
      "Distribusi buah beku komersial keluarga yang melayani sektor hotel, restoran, dan kafe (Horeca). Fase pembangunan sistem digital aktif telah tuntas dan saat ini mendampingi sebagai penasihat operasional dan teknis berkala.",
    descriptionZh:
      "家族商业冷冻热带水果分销企业，服务酒店、餐厅与咖啡馆 (Horeca) 渠道。现已完成核心数字化系统架构上线，持续提供定期技术与供应链运营顾问支持。",
    bullets: [
      "Managed end-to-end stock recording and sales invoicing workflows to support daily commercial frozen fruit distribution.",
      "Developed and maintained the company website and digital B2B catalog covering 90+ SKUs, helping secure 5 regular commercial clients within 3 months of launch.",
      "Translated operational logistics and inventory handling requirements into standardized SOPs and structured spreadsheet tracking templates.",
      "Designed product branding, vacuum packaging, and digital marketing assets, contributing to improved brand presence and customer inquiries.",
      "Coordinated operational and delivery requirements across suppliers, customers, and internal staff to maintain reliable order fulfillment.",
    ],
    bulletsId: [
      "Mengelola alur rekonsiliasi stok dan faktur penjualan komersial dari hulu ke hilir untuk mendukung distribusi buah beku harian.",
      "Membangun dan mengelola website perusahaan serta katalog digital B2B 90+ SKU yang memenangkan 5 klien komersial tetap dalam kurun 3 bulan pasca rilis.",
      "Menerjemahkan kebutuhan penanganan logistik dan inventaris ke dalam SOP terstandarisasi serta templat pelacakan spreadsheet terstruktur.",
      "Mendesain identitas merek produk, kemasan vakum nilon industri, dan materi promosi digital yang meningkatkan kehadiran merek dan permintaan klien.",
      "Mengoordinasikan jadwal pengiriman dan pesanan antara pemasok, pelanggan, dan staf toko untuk memastikan keandalan pemenuhan pesanan.",
    ],
    bulletsZh: [
      "主导端到端库存出入库对账与商业销售开票流水线，支撑每日大宗冷冻水果供应链分发。",
      "主导研发并维护公司官方B2B数字化产品目录（覆盖90+ SKU），上线后3个月内助力拓展5家长期商业大客户。",
      "将冷链仓储物流与批次追踪业务需求提炼转化为标准化SOP操作规程及自动化表格核算模板。",
      "负责产品品牌VI、工业级真空尼龙包装与数字营销物料设计，显著提升品牌公信力与获客询盘量。",
      "统筹协调供应商采购、客户订单与库房执行团队，确保日常高履约率与零发货延误。",
    ],
    tags: ["B2B Operations", "Inventory Ledgers", "Packaging Design", "Laravel", "SOP", "Cold Chain"],
  },
  {
    id: "sailly-advanced-group",
    role: "Volunteer Crypto Trading Mentor & Technical Analyst",
    roleId: "Volunteer Mentor Trading Kripto & Analis Teknikal",
    roleZh: "志愿加密量化交易导师与技术分析师",
    company: "Sailly Advanced Group",
    companyId: "Sailly Advanced Group",
    companyZh: "Sailly Advanced Group (非官方加密量化交易社区)",
    location: "Surabaya, Indonesia (Remote Community)",
    period: "January 2022 – December 2022 (1 Year)",
    periodId: "Januari 2022 – Desember 2022 (1 Tahun)",
    periodZh: "2022年1月 – 2022年12月 (1年)",
    type: "Volunteer Mentorship & Technical Analysis",
    typeId: "Mentorship Relawan & Analisis Teknikal",
    typeZh: "志愿学员辅导与技术分析",
    description:
      "Unofficial volunteer trader education and market analysis community founded by professional trading influencer Kevin Sailly, providing high-precision technical chart breakdowns and disciplined risk management education.",
    descriptionId:
      "Mentorship trading komunitas relawan (non-formal) dan analisis pasar yang didirikan oleh trader profesional Kevin Sailly, memberikan edukasi analisis teknikal grafik berpresisi tinggi dan manajemen risiko disiplin.",
    descriptionZh:
      "由专业交易导师 Kevin Sailly 创办的非官方志愿量化交易与行情研判社区，提供高精度多周期K线技术分析、市场情绪研判与纪律化风险管理指导。",
    bullets: [
      "Mentored and educated 100+ community trader members on multi-timeframe technical analysis, candlestick price action, and institutional risk-reward strategies on a volunteer basis.",
      "Actively responded to member inquiries, guiding live chart analysis on Bitcoin, Ethereum, and major altcoins to support accurate decision-making.",
      "Synthesized technical research reports and algorithmic market perspectives to help members maintain disciplined execution during high-volatility cycles.",
    ],
    bulletsId: [
      "Membimbing dan mengedukasi 100+ anggota komunitas trader sebagai mentor relawan mengenai analisis teknikal multi-timeframe, price action candlestick, dan strategi risk-reward rasional.",
      "Secara aktif merespons pertanyaan anggota dan memandu analisis grafik pasar kripto (Bitcoin, Ethereum, dan altcoin) secara berkala.",
      "Menyusun laporan sintesis riset teknikal dan perspektif pasar berbasis indikator untuk menjaga disiplin eksekusi trading anggota.",
    ],
    bulletsZh: [
      "作为志愿社区交易导师，系统性讲授多周期K线形态、价格行为学 (Price Action) 及机构级盈亏比风控模型，累计赋能100+位社区学员。",
      "实时在线深度答疑解惑，针对主流加密资产（BTC、ETH 及主流代币）进行高频实盘技术面推演与结构拆解。",
      "定期输出宏观技术面综合研判报告与量化指标透视，助力社区成员在极端波动行情中保持严明交易纪律。",
    ],
    tags: ["Crypto Trading", "Volunteer Mentorship", "Technical Analysis", "Risk Management", "Market Research"],
  },
  {
    id: "enevti",
    role: "Partnerships Specialist Intern",
    roleId: "Spesialis Kemitraan (Magang)",
    roleZh: "战略合作伙伴拓展专员 (实习)",
    company: "PT Kolaborasi Kerja Indonesia (Enevti)",
    companyId: "PT Kolaborasi Kerja Indonesia (Enevti)",
    companyZh: "PT Kolaborasi Kerja Indonesia (Enevti Web3 平台)",
    location: "Jakarta, Indonesia (Remote)",
    period: "January 2022 – April 2022 (4 Months)",
    periodId: "Januari 2022 – April 2022 (4 Bulan)",
    periodZh: "2022年1月 – 2022年4月 (4个月)",
    type: "Startup Operations & Community",
    typeId: "Operasional Startup & Komunitas",
    typeZh: "Web3 初创生态与社区运营",
    description:
      "Decentralized Web3 social media platform startup connecting creators with community fans.",
    descriptionId:
      "Startup platform media sosial NFT & Web3 terdesentralisasi yang menghubungkan kreator dengan komunitas penggemar.",
    descriptionZh:
      "去中心化 Web3 创作者社交媒体平台初创企业，致力于连接创作者与社区粉丝群体。",
    bullets: [
      "Conducted thorough prospect research and data profiling to build an organized partner database, successfully onboarding 15+ brand ambassadors.",
      "Collaborated within an Agile/Scrum cross-functional team and supported recurring sprint activities, reducing partner onboarding time by 25%.",
      "Streamlined the ambassador onboarding workflow using standardized briefing documentation and communication templates.",
      "Supported community AMA (Ask-Me-Anything) sessions and communicated product features clearly to prospective partners and creators.",
    ],
    bulletsId: [
      "Melakukan riset prospek mendalam dan profiling data untuk menyusun database mitra terstruktur, berhasil meng-onboard 15+ brand ambassador.",
      "Berkolaborasi dalam tim lintas fungsi berkerangka kerja Agile/Scrum serta mendukung aktivitas sprint berkala, mempercepat onboarding sebesar 25%.",
      "Menyederhanakan alur kerja adaptasi ambassador menggunakan dokumentasi panduan dan templat komunikasi terstandar.",
      "Mendukung pelaksanaan sesi AMA komunitas serta mengomunikasikan fitur produk secara lugas kepada mitra dan kreator.",
    ],
    bulletsZh: [
      "开展深入的行业前景调研与数据画像分析，搭建结构化合作伙伴数据库，成功签约引流15+位品牌大使。",
      "在跨职能敏捷 Scrum 团队中协同工作，高效推进各周期 Sprint 冲刺交付任务，降低25%的创作者入驻周期。",
      "利用标准化简报文档与沟通模板，极大简化并加速创作者大使的入驻对接流程。",
      "深度支持社区官方 AMA 直播答疑活动，清晰向潜在伙伴及创作者推介平台核心技术特性。",
    ],
    tags: ["Web3 Ecosystem", "Agile / Scrum", "Notion", "Partner Onboarding", "Community Operations"],
  },
  {
    id: "qlp",
    role: "Volunteer Backend Developer",
    roleId: "Volunteer Pengembang Backend",
    roleZh: "志愿后端工程师",
    company: "Quarter Life Projects (QLP)",
    companyId: "Quarter Life Projects (QLP)",
    companyZh: "Quarter Life Projects (青年职业发展非营利机构)",
    location: "Jakarta, Indonesia (Remote)",
    period: "January 2022 – April 2022 (4 Months)",
    periodId: "Januari 2022 – April 2022 (4 Bulan)",
    periodZh: "2022年1月 – 2022年4月 (4个月)",
    type: "Volunteer Backend Engineering",
    typeId: "Rekayasa Backend Relawan",
    typeZh: "志愿后端架构与数据工程",
    description:
      "Non-profit youth development organization providing mentorship and career guidance for individuals in the quarter-life phase, serving as volunteer backend engineer.",
    descriptionId:
      "Organisasi non-profit pengembangan generasi muda yang menyediakan bimbingan mentorship dan panduan karir dalam fase quarter-life, berkontribusi sebagai relawan backend engineer.",
    descriptionZh:
      "青年人才发展与导师咨询非营利性机构，为处于青年转型期的人群提供专业职业发展指导，作为志愿后端工程师提供技术支持。",
    bullets: [
      "Redesigned and normalized relational database schemas (3NF) to improve query performance by 30% and reduce data inconsistencies by 25%.",
      "Developed a multi-category Mentorship Filter feature, simplifying user search flows and accelerating mentor discovery by 50%.",
      "Collaborated with the product and tech team to test and debug backend features, enhancing user interaction by 20%.",
    ],
    bulletsId: [
      "Merancang ulang dan menormalisasi skema database relasional (3NF) untuk meningkatkan kecepatan kueri sebesar 30% dan menurunkan error sebesar 25%.",
      "Membangun fitur Filter Mentorship multi-kategori yang menyederhanakan alur pencarian pengguna hingga 50% lebih cepat.",
      "Berkolaborasi erat dengan tim produk dan teknologi untuk menguji serta memperbaiki fitur backend yang meningkatkan interaksi pengguna sebesar 20%.",
    ],
    bulletsZh: [
      "重构并范式化核心关系型数据库架构 (3NF)，使数据查询效率提升30%并消除25%的历史读写异常。",
      "独立开发多维度导师筛选 (Mentorship Filter) 引擎，使用户找寻匹配导师的交互链路提速50%。",
      "与产品经理及技术团队紧密协作，对后端服务进行详尽单元测试与性能调优，提升20%的活跃用户交互率。",
    ],
    tags: ["Volunteer", "PHP", "Laravel", "MySQL", "Database Normalization", "API Endpoints"],
  },
  {
    id: "the-fresh",
    role: "CEO & Founder",
    roleId: "CEO & Pendiri",
    roleZh: "首席执行官兼创始人",
    company: "The Fresh Indonesia",
    companyId: "The Fresh Indonesia",
    companyZh: "The Fresh Indonesia (生鲜电商初创企业)",
    location: "Surabaya, Indonesia",
    period: "January 2016 – April 2016 (4 Months)",
    periodId: "Januari 2016 – April 2016 (4 Bulan)",
    periodZh: "2016年1月 – 2016年4月 (4个月)",
    type: "Entrepreneurship & Farm-to-Door E-Commerce",
    typeId: "Kewirausahaan & E-Commerce Pertanian",
    typeZh: "早期创业与从农田到餐桌生鲜电商",
    description:
      "Early startup founded to connect consumers directly with fresh fruits and vegetables sourced straight from local regional farmers.",
    descriptionId:
      "Startup mandiri yang didirikan untuk menghubungkan konsumen dengan buah-buahan dan sayuran segar langsung dari petani lokal.",
    descriptionZh:
      "自主创立的早期生鲜电商平台，致力于将本地农场的新鲜果蔬与定制果篮直接配送至终端消费者家中。",
    bullets: [
      "Founded and built an independent startup entity connecting consumers with local farm produce through digital ordering channels.",
      "Led cross-functional branding, product photography, digital catalog copy, and preliminary web/mobile ordering prototypes.",
      "Established direct procurement partnerships with local regional farmers and coordinated doorstep fulfillment logistics.",
    ],
    bulletsId: [
      "Membangun entitas startup mandiri untuk menghubungkan konsumen dengan produk pertanian lokal melalui platform digital.",
      "Memimpin transformasi merek dengan mengintegrasikan strategi desain, fotografi produk, copywriting, serta purwarupa web.",
      "Membangun kemitraan pengadaan langsung dengan petani lokal dan mengoordinasikan logistik pengiriman ke rumah konsumen.",
    ],
    bulletsZh: [
      "自主创立生鲜电商初创品牌，打通本地优质农产品直供消费者的数字化订购链路。",
      "统筹品牌全案设计、专业产品棚拍、文案策划及早期线上点单原型开发。",
      "与本地农户建立一手货源直采机制，优化末端同城配送履约流程。",
    ],
    tags: ["Entrepreneurship", "E-Grocery", "Brand Strategy", "Direct-to-Consumer", "Supply Chain"],
  },
  {
    id: "screening-sdm",
    role: "Character Assessment Specialist — Software Development & Reporting",
    roleId: "Spesialis Asesmen Karakter — Rekayasa Software & Pelaporan",
    roleZh: "人才测评专员 — 软件研发与量化报告",
    company: "Screening SDM Indonesia",
    companyId: "Screening SDM Indonesia",
    companyZh: "Screening SDM Indonesia (人才测评与管理咨询)",
    location: "Surabaya, Indonesia",
    period: "November 2014 – July 2017 (~3 Years)",
    periodId: "November 2014 – Juli 2017 (~3 Tahun)",
    periodZh: "2014年11月 – 2017年7月 (~3年)",
    type: "Software Development & Psychometrics",
    typeId: "Pengembangan Software & Psikometri",
    typeZh: "软件研发与心理测量工程",
    description:
      "Family-owned talent assessment and executive recruitment consultancy helping businesses evaluate candidate character and position compatibility. Early software development initiative automating manual scoring worksheets.",
    descriptionId:
      "Layanan konsultasi asesmen bakat dan rekrutmen keluarga yang membantu pimpinan bisnis menyaring kandidat terbaik. Inisiatif rekayasa software mandiri sejak dini untuk mengotomasi lembar kerja perhitungan manual.",
    descriptionZh:
      "专注人才选拔与高管测评的家族管理咨询机构。早期自主发起的软件自动化项目，彻底革新了传统手工量表核算流程。",
    bullets: [
      "Developed a proprietary C# desktop software utility to automate the calculation of biographical data and candidate evaluation metrics.",
      "Replaced manual calculation worksheets with an automated software workflow, reducing client report preparation time.",
      "Gathered user requirements from assessment practitioners to refine data input forms and ensure reliable report outputs.",
    ],
    bulletsId: [
      "Mengembangkan aplikasi desktop C# mandiri untuk mengotomasi kalkulasi data biografis dan metrik evaluasi karakter kandidat.",
      "Menggantikan lembar kerja perhitungan manual dengan alur komputasi software otomatis yang mempercepat penyusunan laporan klien.",
      "Mengumpulkan kebutuhan fungsional dari praktisi asesmen untuk menyempurnakan formulir input data dan keandalan laporan eksekutif.",
    ],
    bulletsZh: [
      "自主使用 C# / .NET 开发专有桌面应用系统，实现传记履历数据与性格评估指标的自动化实时测算。",
      "用全自动化计算管线取代耗时的手工纸质打分表格，大幅缩短客户测评报告的交付周期。",
      "深入调研资深测评顾问的业务诉求，不断迭代数据录入界面与核验逻辑，保障报告数据的高保真度与可审计性。",
    ],
    tags: ["C#", ".NET", "Windows Forms", "MySQL", "Psychometrics", "Desktop Software"],
  },
];

/**
 * 7 Campus Leadership & Student Organization Experiences (Academic Track at iSTTS)
 */
export const leadershipExperiencesData: ExperienceItem[] = [
  {
    id: "prens-sib",
    role: "Vice Chairman & Web Developer",
    roleId: "Wakil Ketua Panitia & Pengembang Web",
    roleZh: "新生启航营副主席兼迎新网站开发主程",
    company: "PRENSSIB (Orientasi Mahasiswa Baru SIB iSTTS)",
    companyId: "PRENSSIB (Orientasi Mahasiswa Baru SIB iSTTS)",
    companyZh: "iSTTS 商业信息系统系新生启航营 (PRENSSIB)",
    location: "Surabaya, Indonesia",
    period: "February 2020 – August 2020 (7 Months)",
    periodId: "Februari 2020 – Agustus 2020 (7 Bulan)",
    periodZh: "2020年2月 – 2020年8月 (7个月)",
    type: "Student Leadership & Web Engineering",
    typeId: "Kepemimpinan Mahasiswa & Rekayasa Web",
    typeZh: "学术组织领导力与数字迎新系统研发",
    description:
      "Annual orientation program welcoming incoming Business Information Systems (SIB) freshmen at Institut Sains & Teknologi Terpadu Surabaya (iSTTS).",
    descriptionId:
      "Acara orientasi tahunan yang diselenggarakan untuk menyambut mahasiswa baru program Sistem Informasi Bisnis di Institut Sains & Teknologi Terpadu Surabaya.",
    descriptionZh:
      "印度尼西亚泗水综合科学与技术学院 (iSTTS) 商业信息系统系年度新生迎新启航项目。",
    bullets: [
      "Coordinated a committee of 20+ student leaders and guided strategic operational decision-making across all orientation phases.",
      "Engineered the official orientation web portal from scratch to facilitate seamless digital adaptation and information access for 30+ incoming freshmen.",
      "Supervised event schedules, digital onboarding tasks, and collaborative team-building sessions during remote learning transitions.",
    ],
    bulletsId: [
      "Mengoordinasi tim yang terdiri dari 20+ anggota komite dan mendampingi pengambilan keputusan strategis operasional acara.",
      "Mengembangkan halaman web resmi orientasi untuk memfasilitasi adaptasi digital dan akses informasi bagi 30+ mahasiswa baru.",
      "Mengawasi jadwal acara, penugasan digital mahasiswa baru, dan sesi pembentukan kekompakan tim secara efektif.",
    ],
    bulletsZh: [
      "统筹协调由20余名学生骨干组成的执委会，主导制定迎新全流程各阶段的核心运营决策。",
      "自主全栈开发迎新官方网站门户，为30余名大一新生提供无缝的线上数字适应与任务指引通道。",
      "统筹协调迎新日程排期、线上破冰互动与跨组协作任务，保障远程迎新活动的圆满交付。",
    ],
    tags: ["Leadership", "Web Portal", "Event Management", "HTML/CSS/JS", "iSTTS"],
  },
  {
    id: "hima-sib-tutor",
    role: "Programming Tutor (Python & Computational Logic)",
    roleId: "Tutor Pemrograman (Python & Logika Komputasi)",
    roleZh: "HIMA SIB 编程课程导师 (Python 与算法逻辑)",
    company: "Himpunan Mahasiswa SIB (HIMA SIB iSTTS)",
    companyId: "Himpunan Mahasiswa SIB (HIMA SIB iSTTS)",
    companyZh: "iSTTS 商业信息系统系学生会 (HIMA SIB)",
    location: "Surabaya, Indonesia",
    period: "July 2019 – August 2020 (1 Year 2 Months)",
    periodId: "Juli 2019 – Agustus 2020 (1 Tahun 2 Bulan)",
    periodZh: "2019年7月 – 2020年8月 (1年2个月)",
    type: "Academic Tutoring & Mentorship",
    typeId: "Bimbingan Akademik & Mentorship",
    typeZh: "学术辅导、编程教学与辅导",
    description:
      "Academic division of the Business Information Systems Student Association tutoring freshman cohorts in foundational programming and algorithmic problem-solving.",
    descriptionId:
      "Divisi akademik Himpunan Mahasiswa Sistem Informasi Bisnis (HIMA SIB) yang membimbing mahasiswa baru angkatan 2019 dalam penguasaan dasar pemrograman Python dan pemecahan masalah algoritmik.",
    descriptionZh:
      "iSTTS 商业信息系统系学生会 (HIMA SIB) 学术部编程导师，负责辅导2019级大一新生系统掌握 Python 基础编程、算法设计与计算逻辑推演。",
    bullets: [
      "Tutored freshman undergraduate cohorts in Python programming, algorithm complexity, and computational problem-solving.",
      "Guided practical lab assignments, debugging workflows, and conceptual logic, achieving an 80%+ course passing rate across the cohort.",
      "Collaborated with departmental faculty to align tutoring curricula with semester examination benchmarks.",
    ],
    bulletsId: [
      "Mengajar dan membimbing mahasiswa baru SIB angkatan 2019 dalam pemrograman Python, kompleksitas algoritma, dan logika komputasi.",
      "Mendampingi tugas praktikum laboratorium dan debugging kode, menghasilkan tingkat kelulusan di atas 80% pada mata kuliah pemrograman.",
      "Berkolaborasi dengan dosen jurusan untuk menyelaraskan modul bimbingan dengan standar evaluasi ujian semester.",
    ],
    bulletsZh: [
      "为大一新生系统讲授 Python 编程语言、算法时间复杂度与计算思维推演。",
      "针对性辅导实验室编程实践与调试排错技巧，助力辅导班学员在核心编程科目取得80%以上的优异通过率。",
      "与系所专业课教授保持紧密协同，对齐课后辅导大纲与学期考核测评标准。",
    ],
    tags: ["Python", "Algorithms", "Tutoring", "HIMA SIB", "iSTTS", "Teaching"],
  },
  {
    id: "kunjungan-industri-sib",
    role: "Chairman & Vice Chairman",
    roleId: "Ketua & Wakil Ketua Pelaksana",
    roleZh: "名企工业研学营总负责人与执行副主席",
    company: "Kunjungan Industri SIB iSTTS",
    companyId: "Kunjungan Industri SIB iSTTS",
    companyZh: "iSTTS 商业信息系统系工业考察研学项目",
    location: "Surabaya & Jakarta, Indonesia",
    period: "August 2019 – May 2020 (10 Months)",
    periodId: "Agustus 2019 – Mei 2020 (10 Bulan)",
    periodZh: "2019年8月 – 2020年5月 (10个月)",
    type: "Corporate Relations & Industrial Expedition",
    typeId: "Hubungan Korporat & Kunjungan Industri",
    typeZh: "校企合作、产业考察与大型研学统筹",
    description:
      "Academic industrial study program providing hands-on technology ecosystem exposure for SIB undergraduates through corporate site visits.",
    descriptionId:
      "Program kunjungan industri akademik Sistem Informasi Bisnis untuk menghubungkan mahasiswa dengan ekosistem teknologi dan korporasi terkemuka.",
    descriptionZh:
      "iSTTS 商业信息系统系旗舰产学研项目，旨在组织高校学生深度走访顶尖科技企业与现代物流枢纽。",
    bullets: [
      "Led end-to-end event planning, institutional logistics, and corporate correspondence for 30–100 students visiting major technology hubs including Apple Developer Academy and PT Kamadjaja Logistics.",
      "Drafted formal sponsorship proposals, managed budgetary allocations, and established official university-corporate communication channels.",
      "Coordinated safety protocols, itinerary milestones, and post-event academic industrial evaluation reports.",
    ],
    bulletsId: [
      "Mengoordinasi kunjungan industri untuk 30–100 mahasiswa ke berbagai perusahaan teknologi terkemuka, termasuk Apple Developer Academy dan PT Kamadjaja Logistics.",
      "Menyusun proposal kemitraan formal, mengelola alokasi anggaran, dan membangun jalur komunikasi resmi antara universitas dan korporasi.",
      "Mengoordinasikan protokol keselamatan, jadwal perjalanan, dan laporan evaluasi akademik pasca kegiatan.",
    ],
    bulletsZh: [
      "统筹负责30至100名学生的大型科技工业研学参访，成功走访苹果开发者学院 (Apple Developer Academy) 及 PT Kamadjaja Logistics 等顶尖企业。",
      "起草商务合作方案与正式公函，统筹经费预算编制与核销，建立长效的高校与企业对外联络通道。",
      "全流程把控安全应急预案、多日行程节点流转，并主持编写研学学术成果总结报告。",
    ],
    tags: ["Corporate Relations", "Apple Developer Academy", "Logistics", "Project Leadership", "Public Relations"],
  },
  {
    id: "igl",
    role: "Public Relations & Sponsorship Coordinator",
    roleId: "Koordinator Hubungan Masyarakat & Dana Usaha",
    roleZh: "外联赞助与商业统筹主管",
    company: "iSTTS Gamers League (HIMA SIB)",
    companyId: "iSTTS Gamers League (HIMA SIB)",
    companyZh: "iSTTS 电子竞技联赛组委会 (HIMA SIB)",
    location: "Surabaya, Indonesia",
    period: "September 2019 – November 2019 (3 Months)",
    periodId: "September 2019 – November 2019 (3 Bulan)",
    periodZh: "2019年9月 – 2019年11月 (3个月)",
    type: "Event Fundraising & Corporate Sponsorship",
    typeId: "Penggalangan Dana & Sponsor Korporat",
    typeZh: "商业赞助招商、媒体宣发与展会统筹",
    description:
      "Campus competitive e-sports league organized by the Business Information Systems Student Association (HIMA SIB) to engage student gaming talent across Surabaya.",
    descriptionId:
      "Acara kompetisi e-sports yang diselenggarakan oleh HIMA SIB iSTTS untuk meningkatkan antusiasme kompetisi dan kepemimpinan di kalangan mahasiswa Surabaya.",
    descriptionZh:
      "由 iSTTS 商业信息系统系学生会 (HIMA SIB) 主办的大型校园电竞赛事与创意集市。",
    bullets: [
      "Led the PR and Fundraising division to raise over IDR 7,000,000 in operational funds and tournament sponsorship capital.",
      "Secured commercial partnerships with major corporate sponsors including Coca-Cola, Indomilk, Pop Mie, and Smile Printing Surabaya.",
      "Managed publicity across regional media outlets (Info Surabaya, Event Surabaya), successfully registering 30+ competitive tournament teams and 10+ Pokemon TCG players.",
      "Coordinated the logistics and daily operations of 5 campus bazaar food and beverage stalls during the week-long championship event.",
    ],
    bulletsId: [
      "Memimpin tim Hubungan Masyarakat dan Dana Usaha serta berhasil menggalang dana lebih dari Rp7.000.000 untuk operasional acara.",
      "Mengamankan kemitraan sponsor dengan berbagai brand besar seperti Coca-Cola, Indomilk, Pop Mie, dan Smile Printing Surabaya.",
      "Mengelola publikasi di mitra media regional (Info Surabaya, Event Surabaya), menarik pendaftaran lebih dari 30 tim kompetisi dan 10+ peserta Pokemon TCG.",
      "Mengoordinasi operasional dan logistik sekitar 5 stand bazar makanan-minuman selama satu minggu rangkaian acara.",
    ],
    bulletsZh: [
      "主导外联公关与商业招商团队，成功筹集逾 7,000,000 印尼盾的赛事运营与奖金池专项资金。",
      "成功签约引进可口可乐 (Coca-Cola)、Indomilk、Pop Mie 及 Smile Printing 等知名跨国与本土商业品牌赞助。",
      "统筹 Info Surabaya、Event Surabaya 等泗水主流城市级新媒体宣发矩阵，吸引超过30支专业战队及10+位宝可梦卡牌选手参赛。",
      "统筹协调为期一周的校园集市商业运营，圆满保障5个餐饮与赞助展位的高效运转与物资调度。",
    ],
    tags: ["Sponsorship Acquisition", "Fundraising", "Coca-Cola", "Media Relations", "Event Management", "HIMA SIB"],
  },
  {
    id: "kartini-istts",
    role: "Public Relations & Fundraising Committee",
    roleId: "Anggota Tim Humas & Dana Usaha",
    roleZh: "外联公关与商业招商执委",
    company: "Kartini iSTTS",
    companyId: "Kartini iSTTS",
    companyZh: "iSTTS 卡蒂妮节校园风采大赛组委会",
    location: "Surabaya, Indonesia",
    period: "January 2019 – April 2019 (4 Months)",
    periodId: "Januari 2019 – April 2019 (4 Bulan)",
    periodZh: "2019年1月 – 2019年4月 (4个月)",
    type: "Cultural Leadership & Corporate Sponsorship",
    typeId: "Kepemimpinan Budaya & Sponsor Korporat",
    typeZh: "文化节展外联赞助与会展统筹",
    description:
      "Annual institutional cultural leadership event and Miss Campus championship celebrating empowerment, talent, and creativity at iSTTS.",
    descriptionId:
      "Acara kepemimpinan budaya tahunan dan pemilihan Miss Campus iSTTS untuk mengapresiasi kreativitas, talenta, dan kepemimpinan mahasiswa.",
    descriptionZh:
      "iSTTS 年度校园文化节展与 Miss Campus 校园风采大赛，旨在展示学生领导力、多元才艺与创意文化。",
    bullets: [
      "Raised over IDR 5,000,000 in operational funds by securing sponsorships from corporate brands including Emina Cosmetics, Siloam Hospitals, Coca-Cola, and Pondan.",
      "Coordinated event publicity and managed stage rundown and workshop schedules for 12 Miss Campus finalists.",
      "Oversaw commercial logistics and vendor operations across 9 campus bazaar and food stalls throughout the festival.",
    ],
    bulletsId: [
      "Berhasil menggalang dana lebih dari Rp5.000.000 dengan menggaet sponsor ternama seperti Emina Cosmetics, Siloam Hospital, Coca-Cola, dan Pondan.",
      "Mengoordinasikan publikasi acara serta mendampingi jadwal pelatihan dan penampilan 12 finalis Miss Campus.",
      "Mengelola logistik dan operasional sekitar 9 stan bazar makanan dan sponsor selama rangkaian acara berlangsung.",
    ],
    bulletsZh: [
      "成功签约引进 Emina Cosmetics、Siloam Hospital (希洛姆医院)、可口可乐及 Pondan 等品牌赞助，募集逾 5,000,000 印尼盾活动经费。",
      "统筹全校性宣传推广，并主导12位 Miss Campus 决赛选手的彩排排期与现场走位调度。",
      "全程把控文化节展期间9个商业集市与餐饮展位的后勤运转与物资对接。",
    ],
    tags: ["Fundraising", "Sponsorship Acquisition", "Siloam Hospital", "Emina", "Public Relations", "iSTTS"],
  },
  {
    id: "donor-darah-istts",
    role: "PR & Community Logistics Committee",
    roleId: "Anggota Tim Humas & Logistik Sosial",
    roleZh: "外联宣传与社会公益协调员",
    company: "Donor Darah Dies Natalis XXXIX iSTTS",
    companyId: "Donor Darah Dies Natalis XXXIX iSTTS",
    companyZh: "iSTTS 办学39周年校庆献血公益组委会",
    location: "Surabaya, Indonesia",
    period: "October 2018 – November 2018 (2 Months)",
    periodId: "Oktober 2018 – November 2018 (2 Bulan)",
    periodZh: "2018年10月 – 2018年11月 (2个月)",
    type: "Community Health & NGO Partnership",
    typeId: "Kesehatan Komunitas & Kemitraan PMI",
    typeZh: "社会公益、社区医疗与红十字会合作",
    description:
      "Institutional community service blood donation drive organized in commemoration of iSTTS 39th Dies Natalis in official partnership with Palang Merah Indonesia (PMI).",
    descriptionId:
      "Aksi donor darah bakti sosial kampus dalam rangka Dies Natalis XXXIX iSTTS yang bermitra resmi dengan Palang Merah Indonesia (PMI) Surabaya.",
    descriptionZh:
      "iSTTS 办学39周年校庆系列社会公益献血活动，官方联合印尼红十字会 (PMI) 泗水分会共同主办。",
    bullets: [
      "Established official communication and medical logistics coordination with Palang Merah Indonesia (PMI) Surabaya.",
      "Managed campus-wide awareness campaigns, successfully mobilizing 50–100 student, lecturer, and staff blood donors.",
      "Ensured adherence to clinical intake workflows, donor safety protocols, and post-donation recovery hospitality.",
    ],
    bulletsId: [
      "Menjalin jalur komunikasi resmi dan koordinasi logistik medis dengan Palang Merah Indonesia (PMI) Surabaya.",
      "Mengelola kampanye publikasi kampus dan berhasil menghimpun 50–100 pendonor darah dari kalangan mahasiswa, dosen, dan staf.",
      "Memastikan kepatuhan terhadap alur pemeriksaan medis, protokol kenyamanan pendonor, serta konsumsi pemulihan pasca donor.",
    ],
    bulletsZh: [
      "建立与印尼国家红十字会 (PMI) 泗水分会的官方联络通道与医疗后勤协同机制。",
      "主导全校范围的无偿献血公益宣导，成功动员50至100名师生及教职工参与献血。",
      "严格落实体检登记动线、献血安全规程与采血后营养补给保障。",
    ],
    tags: ["PMI Surabaya", "Community Service", "Social Logistics", "Public Relations", "iSTTS Dies Natalis"],
  },
  {
    id: "ifj-istts",
    role: "Service Management & Usher",
    roleId: "Koordinator Pelayanan & Usher",
    roleZh: "礼仪统筹与现场执行",
    company: "IFJ iSTTS",
    companyId: "IFJ iSTTS",
    companyZh: "iSTTS 校园团契社团 (IFJ)",
    location: "Surabaya, Indonesia",
    period: "August 2018 – January 2019 (6 Months)",
    periodId: "Agustus 2018 – Januari 2019 (6 Bulan)",
    periodZh: "2018年8月 – 2019年1月 (6个月)",
    type: "Campus Community & Event Operations",
    typeId: "Operasional Acara & Komunitas Kampus",
    typeZh: "校园社团例会与现场运营",
    description:
      "Weekly campus community fellowship and institutional gatherings coordinating scheduling, ushering, and logistical flow.",
    descriptionId:
      "Komunitas persekutuan kampus mingguan yang mengoordinasikan jadwal acara, penerimaan tamu, dan alur logistik ruangan.",
    descriptionZh:
      "iSTTS 校园团契社团每周常规例会与集会活动，负责日程把控、来宾接待与现场物资流转。",
    bullets: [
      "Managed weekly event rundowns, timekeeping precision, and seating arrangements for 50+ campus attendees.",
      "Coordinated ushering team, audiovisual equipment setup, and logistical transitions to maintain seamless service flow.",
    ],
    bulletsId: [
      "Mengelola susunan acara mingguan, ketepatan waktu rundown, serta pengaturan tempat duduk bagi 50+ peserta ibadah kampus.",
      "Mengoordinasikan tim usher, penyiapan perangkat audio-visual, dan kelancaran alur logistik acara.",
    ],
    bulletsZh: [
      "主导每周例会流程把控、精准时间管理及50余名参会师生的座次动线安排。",
      "统筹现场礼仪接待团队、音响视频设备调试与物资调度，保障各项环节顺畅运行。",
    ],
    tags: ["Event Operations", "Service Management", "Ushering", "Community", "iSTTS"],
  },
];
