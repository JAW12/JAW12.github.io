import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jem Angkasa Wijaya | Operations & Digital Systems Specialist · Full-Stack Developer",
  description:
    "Official Portfolio of Jem Angkasa Wijaya, S.Kom. (iSTTS Perfect GPA 4.00 / 4.00, Sangat Memuaskan / Very Satisfactory, 4x Best Academic Practitioner). Production Next.js & Laravel web applications, AI automation workflows, and operational digital systems.",
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
