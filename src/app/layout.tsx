import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // mono font is non-critical, load after
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false, // editorial font loads after critical text
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://JAW12.github.io"),
  title: "Jem Angkasa Wijaya | Operations & Digital Systems Specialist · Full-Stack Developer",
  description:
    "Official Portfolio of Jem Angkasa Wijaya, S.Kom. (iSTTS Perfect GPA 4.00 / 4.00). Production Next.js & Laravel web applications, AI automation workflows, and operational digital systems.",
  keywords: [
    "Jem Angkasa Wijaya",
    "Operations & Digital Systems Specialist",
    "Full-Stack Developer",
    "iSTTS",
    "Sangat Memuaskan",
    "IPK 4.00",
    "Next.js",
    "Laravel",
    "AI Workflows",
    "Portfolio",
  ],
  authors: [{ name: "Jem Angkasa Wijaya" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://JAW12.github.io",
    siteName: "Jem Angkasa Wijaya Portfolio",
    title: "Jem Angkasa Wijaya | Full-Stack Developer & AI Systems Specialist",
    description:
      "S.Kom. iSTTS GPA 4.00/4.00 · Next.js, Laravel, AI Automation, Quant Research. View my production portfolio of 30+ projects.",
    images: [
      {
        url: "/assets/avatar/profile-quarter.webp",
        width: 1200,
        height: 630,
        alt: "Jem Angkasa Wijaya — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jem Angkasa Wijaya | Full-Stack Developer & AI Systems",
    description:
      "S.Kom. iSTTS GPA 4.00/4.00 · Next.js, Laravel, AI Automation. View my portfolio.",
    images: ["/assets/avatar/profile-quarter.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#f4f4f5]">
        {children}
      </body>
    </html>
  );
}
