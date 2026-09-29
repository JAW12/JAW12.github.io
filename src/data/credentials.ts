export interface EducationItem {
  degree: string;
  degreeId: string;
  degreeZh?: string;
  institution: string;
  institutionId: string;
  institutionZh?: string;
  period: string;
  gpa: string;
  honors: string;
  honorsId: string;
  honorsZh?: string;
  description: string;
  descriptionId: string;
  descriptionZh?: string;
  highlights: string[];
  highlightsId: string[];
  highlightsZh?: string[];
}

export interface AwardItem {
  title: string;
  titleId: string;
  titleZh?: string;
  subject: string;
  subjectId: string;
  subjectZh?: string;
  issuer: string;
  issuerZh?: string;
  year: string;
  image?: string;
  description: string;
  descriptionId: string;
  descriptionZh?: string;
}

export interface CertificationItem {
  title: string;
  titleId: string;
  titleZh?: string;
  issuer: string;
  year: string;
  category: "ai" | "web" | "cloud" | "methodology" | "language";
  credentialUrl?: string;
  image?: string;
}

export { leadershipExperiencesData as leadershipData } from "./experiences";
export type { LeadershipExperienceItem as LeadershipItem } from "./experiences";

export const educationData: EducationItem[] = [
  {
    degree: "Sarjana Komputer (S.Kom.) in Business Information Systems",
    degreeId: "Sarjana Komputer (S.Kom.) — Sistem Informasi Bisnis",
    degreeZh: "计算机理学学士 (S.Kom.) · 商业信息系统专业",
    institution: "Institut Sains dan Teknologi Terpadu Surabaya (iSTTS)",
    institutionId: "Institut Sains dan Teknologi Terpadu Surabaya (iSTTS)",
    institutionZh: "泗水综合科学与技术学院 (iSTTS)",
    period: "August 2018 – May 2023",
    gpa: "4.00 / 4.00",
    honors: "Honors: Very Satisfactory (Perfect 4.00 GPA)",
    honorsId: "Predikat: Sangat Memuaskan (IPK Sempurna 4.00)",
    honorsZh: "最高荣誉评级：极优异 (Very Satisfactory) · 满分绩点 4.00",
    description:
      "Awarded perfect 4.00 cumulative GPA across 4.5-year (9 semesters) undergraduate curriculum. Degree officially conferred May 2023 (Academic clearance April 2023; Official Honors: Very Satisfactory / Sangat Memuaskan). Specialized in enterprise relational databases, client-server architectures, financial engineering logic, and full-stack software development.",
    descriptionId:
      "Meraih Indeks Prestasi Kumulatif (IPK) Sempurna 4.00 / 4.00 selama 4.5 tahun studi sarjana (9 semester). Lulus resmi Mei 2023 (Ijazah resmi Mei 2023; SK Kelulusan April 2023; Predikat Resmi: Sangat Memuaskan). Mengambil konsentrasi arsitektur database relasional korporat, sistem client-server, logika rekayasa finansial, dan pengembangan software full-stack.",
    descriptionZh:
      "在为期4.5年（9个学期）的本科学制中，以满分 4.00 / 4.00 GPA 毕业，全部144个学分均取得全A成绩。2023年5月正式授予学位（官方最高荣誉评级：极优异 / Very Satisfactory）。主修企业级关系数据库架构、客户端-服务器系统、量化金融工程逻辑与全栈软件开发。",
    highlights: [
      "Graduated with official 'Very Satisfactory' honors and a perfect 4.00 / 4.00 cumulative GPA (144 credits completed with straight As).",
      "4x recipient of the prestigious Best Academic Practitioner Award in core computer science subjects.",
      "Successfully defended undergraduate thesis on Crypto Asset Financial Portfolio Tracking with highest marks.",
      "Served as HIMA SIB Programming Tutor and Deputy Chief for incoming student orientation committees.",
    ],
    highlightsId: [
      "Lulus dengan predikat resmi Sangat Memuaskan serta IPK sempurna 4.00 / 4.00 (144 SKS lulus dengan seluruh nilai A).",
      "Penerima penghargaan Praktikan Terbaik sebanyak 4 kali pada mata kuliah inti rekayasa perangkat lunak.",
      "Mempertahankan skripsi sistem pelacak portofolio aset finansial kripto dengan nilai sempurna.",
      "Aktif sebagai Tutor Pemrograman HIMA SIB dan Wakil Ketua Komite Orientasi Mahasiswa Baru.",
    ],
    highlightsZh: [
      "以官方最高优等荣誉及 4.00 / 4.00 满分绩点毕业（全学程144学分全A评级）。",
      "计算机核心软件工程实验室 4次荣获最佳实训先锋奖（Best Practitioner）。",
      "以最高满分答辩通过加密金融资产组合量化追踪系统学士学位论文。",
      "曾担任商业信息系统系 (HIMA SIB) 编程导师及迎新委员会副主席。",
    ],
  },
  {
    degree: "High School Diploma (National Science) & Cambridge A-Level",
    degreeId: "Ijazah SMA (IPA) & Kualifikasi Cambridge A-Level",
    degreeZh: "高中毕业文凭 (理科) 与剑桥国际考试 A-Level 认证",
    institution: "Xin Zhong Pre-University",
    institutionId: "Xin Zhong School Surabaya",
    institutionZh: "泗水新中学校 (Xin Zhong School)",
    period: "2015 – 2018",
    gpa: "Ranked Top Tier",
    honors: "Top 50 Scorers City Science Olympiad (OSK) Computer & Technology",
    honorsId: "Top 50 Olimpiade Sains Kota (OSK) Bidang Komputer & Informatika",
    honorsZh: "泗水市科学奥林匹克 (OSK) 计算机与信息学竞赛 50强入围",
    description:
      "Rigorous bilingual secondary education with international Cambridge curriculum standards. Focused on advanced mathematics, natural sciences, and computational problem-solving.",
    descriptionId:
      "Pendidikan menengah bilingual berstandar internasional Cambridge. Menitikberatkan pada matematika tingkat lanjut, ilmu alam, dan penyelesaian masalah komputasi.",
    descriptionZh:
      "严谨的剑桥国际标准双语高中教育，主修高阶数学、自然科学与计算机算法逻辑推演。",
    highlights: [
      "Attained University of Cambridge International Examinations A-Level qualifications.",
      "Selected as Top 50 Finalist in Surabaya City Science Olympiad (OSK) for Computer & Informatics.",
      "Mastered advanced mathematics, applied sciences, and computational logic under Cambridge curriculum.",
    ],
    highlightsId: [
      "Meraih kualifikasi resmi Cambridge International Examinations (CIE) A-Level.",
      "Terpilih sebagai Finalis Top 50 Olimpiade Sains Kota Surabaya (OSK) bidang Komputer & Informatika.",
      "Memperdalam matematika tingkat lanjut, sains terapan, dan dasar logika komputasi berstandar Cambridge.",
    ],
    highlightsZh: [
      "取得英国剑桥大学国际考试委员会 (CIE) A-Level 权威学历证书。",
      "入选泗水市计算机与信息学科学奥林匹克竞赛 (OSK) 前50强决赛。",
      "在剑桥国际课程体系下系统研习高等数学、自然科学与计算逻辑推演。",
    ],
  },
];

export const awardsData: AwardItem[] = [
  {
    title: "Best Academic Practitioner: Basic Algorithms (C#)",
    titleId: "Praktikan Terbaik: Algoritma & Pemrograman (C#)",
    titleZh: "最佳实训先锋：基础算法与编程 (C#)",
    subject: "Algorithm Complexity, Data Structures & Logic",
    subjectId: "Kompleksitas Algoritma, Struktur Data & Logika",
    subjectZh: "算法时间复杂度、核心数据结构与逻辑优化",
    issuer: "Laboratorium Komputer iSTTS",
    year: "2018",
    image: "/assets/certificates/award-algo-2018.jpg",
    description: "Awarded for highest score and exemplary code cleanliness in C# algorithmic programming practicum.",
    descriptionId: "Dianugerahi sebagai praktikan dengan nilai tertinggi dan kedisiplinan kode terbersih dalam praktikum pemrograman C#.",
    descriptionZh: "在C#算法与数据结构实训项目中荣获全级最高分及最优代码整洁规范表彰。",
  },
  {
    title: "Best Academic Practitioner: Internet & Web Development",
    titleId: "Praktikan Terbaik: Internet and World Wide Web",
    titleZh: "最佳实训先锋：互联网与Web开发工程",
    subject: "HTML5, CSS3, JavaScript & Client-Side Protocols",
    subjectId: "HTML5, CSS3, JavaScript & Protokol Sisi Klien",
    subjectZh: "HTML5语义化、CSS3布局、JavaScript DOM操纵与网络协议",
    issuer: "Laboratorium Komputer iSTTS",
    year: "2018",
    image: "/assets/certificates/award-web-2018.jpg",
    description: "Ranked #1 across student cohorts in semantic markup, DOM manipulation, and responsive web implementation.",
    descriptionId: "Peringkat 1 lintas angkatan mahasiswa dalam markup semantik, manipulasi DOM, dan implementasi web responsif.",
    descriptionZh: "在跨年级学员评比中位列第一，获评语义化标记、DOM操纵及响应式界面实现首奖。",
  },
  {
    title: "Best Academic Practitioner: Client-Server Applications",
    titleId: "Praktikan Terbaik: Aplikasi Client Server",
    titleZh: "最佳实训先锋：客户端-服务器体系架构",
    subject: "C#, MySQL Database, Socket Connectivity & Multi-Tier Systems",
    subjectId: "C#, Database MySQL, Konektivitas Socket & Sistem Multi-Tier",
    subjectZh: "C#、MySQL关系数据库、Socket网络通信与多层分布式体系",
    issuer: "Laboratorium Komputer iSTTS",
    year: "2019",
    image: "/assets/certificates/award-client-server-2019.jpg",
    description: "Honored for architectural excellence in building concurrent multi-user enterprise desktop systems with MySQL backend.",
    descriptionId: "Diberikan atas keunggulan arsitektural dalam membangun sistem desktop korporat multi-pengguna konkuren dengan backend MySQL.",
    descriptionZh: "表彰在构建高并发多用户企业级桌面系统与MySQL高可用数据库后端方面的架构卓越性。",
  },
  {
    title: "Best Academic Practitioner: Object-Oriented Programming (Java)",
    titleId: "Praktikan Terbaik: Pemrograman Berbasis Objek (Java)",
    titleZh: "最佳实训先锋：面向对象编程与系统设计 (Java)",
    subject: "Encapsulation, Polymorphism, Design Patterns & OOP Architecture",
    subjectId: "Enkapsulasi, Polimorfisme, Pola Desain & Arsitektur OOP",
    subjectZh: "面向对象封装性、多态继承、设计模式与高内聚低耦合架构",
    issuer: "Laboratorium Komputer iSTTS",
    year: "2019",
    image: "/assets/certificates/award-pbo-2019.jpg",
    description: "Recognized as top performer in rigorous Java object-oriented principles, design patterns, and unit reliability.",
    descriptionId: "Diakui sebagai peraih nilai tertinggi dalam penerapan prinsip OOP Java yang ketat, pola desain terstruktur, dan keandalan kode.",
    descriptionZh: "在严格的Java面向对象设计原则、经典设计模式实践与单元测试可靠性中评选为首位。",
  },
];

export const certificationsData: CertificationItem[] = [
  // 2024
  {
    title: "Code Generation & Optimization Using IBM Granite",
    titleId: "Code Generation & Optimization Menggunakan IBM Granite",
    titleZh: "使用 IBM Granite 进行代码生成与架构优化",
    issuer: "IBM",
    year: "2024",
    category: "ai",
  },
  // 2022
  {
    title: "Building Web Applications with React",
    titleId: "Belajar Membuat Aplikasi Web dengan React",
    titleZh: "使用 React 构建现代 Web 应用",
    issuer: "Dicoding Indonesia",
    year: "2022",
    category: "web",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZO7O8O0ZG5",
    image: "/assets/certificates/cert-dicoding-react-2022.jpg",
  },
  {
    title: "Intro to Product Management",
    titleId: "Intro to Product Management (Mini Course)",
    titleZh: "技术产品管理实务与生命周期管理",
    issuer: "RevoU",
    year: "2022",
    category: "methodology",
    image: "/assets/certificates/cert-revou-pm-2022.jpg",
  },
  {
    title: "Google Developer Group (GDG) DevFest 2022",
    titleId: "Google Developer Group (GDG) DevFest 2022",
    titleZh: "Google 开发者大会 (GDG DevFest 2022)",
    issuer: "Google Developers & GDG Surabaya",
    year: "2022",
    category: "web",
    image: "/assets/certificates/cert-gdg-2022.jpg",
  },
  {
    title: "Volunteer Back-End Engineer",
    titleId: "Volunteer Back-End Engineer",
    titleZh: "Quarter Life Projects 后端志愿工程师",
    issuer: "Quarter Life Projects",
    year: "2022",
    category: "web",
    image: "/assets/certificates/cert-quarterlife-2022.jpg",
  },
  // 2021
  {
    title: "AWS Cloud Practitioner Essentials",
    titleId: "Cloud Practitioner Essentials (Dasar AWS Cloud)",
    titleZh: "AWS 云从业者核心精要 (Cloud Practitioner Essentials)",
    issuer: "Dicoding Indonesia & AWS",
    year: "2021",
    category: "cloud",
    credentialUrl: "https://www.dicoding.com/certificates/RVZK19W0QPD5",
    image: "/assets/certificates/cert-dicoding-aws-2021.jpg",
  },
  {
    title: "SOLID Programming & Software Design Principles",
    titleId: "Belajar Prinsip Pemrograman SOLID",
    titleZh: "SOLID 软件工程架构设计原则",
    issuer: "Dicoding Indonesia",
    year: "2021",
    category: "methodology",
    credentialUrl: "https://www.dicoding.com/certificates/07Z6L600JPQR",
    image: "/assets/certificates/cert-dicoding-solid-2021.jpg",
  },
  {
    title: "Building Back-End Applications for Beginners",
    titleId: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    titleZh: "Node.js & REST API 后端应用程序开发实战",
    issuer: "Dicoding Indonesia",
    year: "2021",
    category: "web",
    credentialUrl: "https://www.dicoding.com/certificates/JLX116506X72",
    image: "/assets/certificates/cert-dicoding-backend-2021.jpg",
  },
  {
    title: "Building Front-End Web Applications for Beginners",
    titleId: "Belajar Membuat Aplikasi Front-End Web untuk Pemula",
    titleZh: "前端交互 Web 应用程序工程实战",
    issuer: "Dicoding Indonesia",
    year: "2021",
    category: "web",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZOEJO6YXG5",
    image: "/assets/certificates/cert-dicoding-frontend-2021.jpg",
  },
  {
    title: "JavaScript Core Programming Fundamentals",
    titleId: "Belajar Dasar Pemrograman JavaScript",
    titleZh: "JavaScript 核心算法与异步编程基础",
    issuer: "Dicoding Indonesia",
    year: "2021",
    category: "web",
    credentialUrl: "https://www.dicoding.com/certificates/RVZK4Q05EPD5",
    image: "/assets/certificates/cert-dicoding-js-2021.jpg",
  },
  {
    title: "Web Engineering & Modern Semantic Standards",
    titleId: "Belajar Dasar Pemrograman Web",
    titleZh: "Web 工程标准与现代语义化基础",
    issuer: "Dicoding Indonesia",
    year: "2021",
    category: "web",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQ33K9VPO1",
    image: "/assets/certificates/cert-dicoding-web-2021.jpg",
  },
  {
    title: "Baparekraf Developer Day 2021",
    titleId: "Baparekraf Developer Day 2021",
    titleZh: "印尼创意经济与旅游部开发者大会 (BDD 2021)",
    issuer: "Kemenparekraf RI & Dicoding",
    year: "2021",
    category: "methodology",
    image: "/assets/certificates/cert-baparekraf-2021.jpg",
  },
  // 2020
  {
    title: "Building Native Android Applications for Beginners",
    titleId: "Belajar Membuat Aplikasi Android Untuk Pemula",
    titleZh: "原生 Android 移动应用开发入门 (Java Native)",
    issuer: "Dicoding Indonesia",
    year: "2020",
    category: "web",
    credentialUrl: "https://www.dicoding.com/certificates/1OP8D6R72PQK",
    image: "/assets/certificates/cert-dicoding-android-2020.jpg",
  },
  {
    title: "Shopee Code League 2020",
    titleId: "Shopee Code League 2020",
    titleZh: "Shopee 区域算法编程竞赛 2020",
    issuer: "Shopee",
    year: "2020",
    category: "methodology",
    image: "/assets/certificates/cert-shopee-2020.jpg",
  },
  // 2019
  {
    title: "Tech in Asia Product Development Conference 2019",
    titleId: "Tech in Asia Product Development Conference 2019",
    titleZh: "Tech in Asia 产品研发大会 2019",
    issuer: "Tech in Asia",
    year: "2019",
    category: "methodology",
    image: "/assets/certificates/cert-techinasia-2019.jpg",
  },
];
