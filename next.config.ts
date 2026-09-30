import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — required for GitHub Pages / Cloudflare Pages deployment
  output: "export",

  images: {
    // unoptimized: true is required for static export (no Next.js image server).
    // Image optimization is handled manually via scripts/convert-webp.js +
    // scripts/update-refs-to-webp.js — all assets are pre-converted to WebP.
    unoptimized: true,
  },

  // basePath for GitHub Pages:
  // - User page (JAW12.github.io)     → NEXT_PUBLIC_BASE_PATH="" (leave empty / unset)
  // - Repo page (JAW12.github.io/xyz) → NEXT_PUBLIC_BASE_PATH="/xyz"
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

  // Compress output JS/CSS (applied during next build)
  compress: true,
};

export default nextConfig;
