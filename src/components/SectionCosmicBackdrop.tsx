"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type CosmicBackdropVariant =
  | "horizon"       // Wing 01: Low Orbit Horizon & Bintang Jatuh (Hero)
  | "astrolabe"     // Wing 02: Bulan (Lunar Crescent) & Sabuk Asteroid (About)
  | "nebula"        // Wing 03: Planet Bercincin (Saturn-style Gas Giant) & Debu Kosmik (Projects)
  | "trajectory"    // Wing 04: Komet Meluncur ke Bawah (Downward Plunging Comet) (Experience)
  | "eclipse"       // Wing 05: Silky Minimalist Solar Coronal Glow (Process)
  | "prism"         // Wing 06: Prisma Kosmik & Pembiasan Sinar di Flank Sisi (Services)
  | "cluster"       // Wing 07: Tirai Aurora Borealis & Rasi Bintang Orion Latar (Skills)
  | "zenith"        // Wing 08: Awan Antarbintang Volumetrik / Deep Cosmic Clouds (Credentials)
  | "beacon";       // Wing 09: Fajar Mentari Bawah Horizon Dekat Footer (Solar Dawn) (Contact)

interface SectionCosmicBackdropProps {
  variant: CosmicBackdropVariant;
  activeServiceIndex?: number;
  className?: string;
}

export function SectionCosmicBackdrop({
  variant,
  activeServiceIndex = 0,
  className = "",
}: SectionCosmicBackdropProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this specific section across the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Specialized Parallax hooks for heightened optical depth
  const slowParallax = useTransform(scrollYProgress, [0, 1], [-40, 50]);
  const mediumParallax = useTransform(scrollYProgress, [0, 1], [-80, 90]);
  const deepParallax = useTransform(scrollYProgress, [0, 1], [-120, 140]);
  const reverseParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const earthParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const milkyWayParallax = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Smooth in-frame flight parallax for the Experience comet (glides 1:1 with user scroll from top to bottom of section)
  const cometTop = useTransform(scrollYProgress, [0.08, 0.88], ["4%", "84%"]);
  const cometX = useTransform(scrollYProgress, [0.08, 0.88], [0, 45]);

  // Smooth tracking parallax for the Services celestial Moon (glides gently with user scroll across the whole section)
  const moonTop = useTransform(scrollYProgress, [0.06, 0.88], ["5%", "78%"]);
  const moonX = useTransform(scrollYProgress, [0.06, 0.88], [0, -20]);

  // Continuous scroll-driven Moon Phase (shadow rolls away smoothly as user reads down the section)
  const moonShadowWidth = useTransform(scrollYProgress, [0.10, 0.48, 0.82], ["78%", "45%", "0%"]);
  const moonShadowOpacity = useTransform(scrollYProgress, [0.10, 0.65, 0.82], [0.92, 0.75, 0]);
  const moonHaloOpacity = useTransform(scrollYProgress, [0.10, 0.82], [0.20, 0.45]);

  // Natural viewport fade-in & fade-out as user enters and leaves each museum wing
  const exhibitOpacity = useTransform(
    scrollYProgress,
    variant === "horizon"
      ? [0, 0.15, 0.75, 1]
      : variant === "trajectory"
      ? [0, 0.05, 0.90, 1]
      : [0, 0.22, 0.78, 1],
    variant === "horizon"
      ? [1, 1, 0.35, 0]
      : variant === "trajectory"
      ? [0, 1, 1, 0]
      : [0, 1, 1, 0]
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`}
    >
      {/* Bidirectional Fade-In / Fade-Out Motion Wrapper */}
      <motion.div style={{ opacity: exhibitOpacity }} className="absolute inset-0">
        
        {/* ========================================================
            WING 01: LOW ORBIT HORIZON & BINTANG JATUH (HERO)
            ======================================================== */}
        {variant === "horizon" && (
          <div className="absolute inset-0">
            <motion.div style={{ y: slowParallax }} className="absolute inset-0">
              {/* Soft Planetary Horizon Curve */}
              <div
                className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[130vw] max-w-[1300px] h-[380px] rounded-[100%] opacity-50 blur-[60px]"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 60%, rgba(212, 175, 55, 0.09) 0%, rgba(99, 102, 241, 0.03) 45%, transparent 70%)",
                }}
              />
              {/* Whisper-Thin Glowing Horizon Arc */}
              <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[70vw] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
            </motion.div>

            {/* Bintang Jatuh (Shooting Stars / Meteors) */}
            <div className="absolute top-16 left-[15%] w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ffd875] to-white rounded-full shadow-[0_0_10px_#fff] pointer-events-none [animation:shootingStar_8s_ease-in-out_infinite_1.5s]" />
            <div className="absolute top-36 right-[20%] w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ffd875] to-white rounded-full shadow-[0_0_10px_#fff] pointer-events-none [animation:shootingStar_12s_ease-in-out_infinite_6s]" />
          </div>
        )}

        {/* ========================================================
            WING 02: BIMA SAKTI / MILKY WAY GALACTIC CORE (ABOUT)
            ======================================================== */}
        {variant === "astrolabe" && (
          <div className="absolute inset-0">
            {/* A. Sweeping Milky Way Diagonal Galactic Band (Luminous Stardust Stream) */}
            <motion.div
              style={{ y: milkyWayParallax }}
              className="absolute -top-10 -right-10 w-[110vw] max-w-[1300px] h-[650px] rotate-[-22deg] pointer-events-none opacity-60"
            >
              {/* 1. Luminous Galactic Core Glow (Soft blurred oval) */}
              <div
                className="w-full h-full rounded-[100%] blur-[95px]"
                style={{
                  background:
                    "radial-gradient(ellipse 65% 30% at 50% 50%, rgba(255, 235, 170, 0.35) 0%, rgba(56, 189, 248, 0.16) 35%, rgba(99, 102, 241, 0.10) 55%, transparent 70%)",
                }}
              />

              {/* 2. Galactic Stardust Lane (Gently tapered at edges to avoid harsh cutoffs) */}
              <div className="absolute top-1/2 left-[10%] w-[80%] h-[3px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#ffd875]/60 to-transparent blur-[1px] shadow-[0_0_20px_#ffd875]" />
              <div className="absolute top-[48%] left-[20%] w-[60%] h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent blur-[0.5px]" />
              
              {/* 3. Dark Interstellar Dust Rift Silhouettes (Great Rift of the Milky Way) */}
              <div className="absolute top-[46%] left-[28%] w-[40%] h-8 rounded-full bg-[#08080a]/80 blur-[8px] rotate-[3deg]" />
              <div className="absolute top-[52%] left-[38%] w-[32%] h-6 rounded-full bg-[#08080a]/75 blur-[6px] -rotate-[2deg]" />
            </motion.div>

            {/* B. Dense Star Clusters (Bintang Gemerlap Bima Sakti) */}
            <motion.div
              style={{ y: slowParallax }}
              className="absolute inset-0 pointer-events-none opacity-60"
            >
              <div className="absolute top-1/4 right-[18%] w-3 h-3 rounded-full bg-amber-100 shadow-[0_0_15px_#ffd875] [animation:twinkleStar_4s_ease-in-out_infinite]" />
              <div className="absolute top-1/3 right-[32%] w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_10px_#38bdf8] [animation:twinkleStar_5s_ease-in-out_infinite_1.5s]" />
              <div className="absolute bottom-1/3 right-[12%] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff] [animation:twinkleStar_6s_ease-in-out_infinite_3s]" />
              <div className="absolute top-1/2 right-[24%] w-1.5 h-1.5 rounded-full bg-indigo-200 shadow-[0_0_8px_#818cf8]" />
            </motion.div>
          </div>
        )}

        {/* ========================================================
            WING 03: PLANET BUMI (EARTH) & AWAN DEBU NEBULA (WORKS)
            ======================================================== */}
        {variant === "nebula" && (
          <div className="absolute inset-0">
            {/* A. Deep Space Volumetric Nebula Clouds */}
            <motion.div
              className="absolute top-1/4 -left-20 w-[65vw] max-w-[750px] h-[550px] rounded-full blur-[140px] opacity-40 pointer-events-none"
              style={{
                y: slowParallax,
                background:
                  "radial-gradient(circle, rgba(30, 58, 138, 0.22) 0%, rgba(14, 116, 144, 0.10) 50%, transparent 75%)",
              }}
            />

            {/* B. Planet Earth (Bumi) - Blue Marble Terrestrial Planet with Continents & Atmosphere */}
            <motion.div
              style={{ y: earthParallax }}
              className="absolute top-24 sm:top-32 right-6 sm:right-16 lg:right-24 flex items-center justify-center opacity-70 pointer-events-none"
            >
              <div className="relative w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-gradient-to-tr from-[#020b18] via-[#082846] to-[#38bdf8]/70 border border-cyan-400/40 shadow-[inset_-25px_-25px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(56,189,248,0.3)] overflow-hidden">
                {/* Luminous Atmospheric Halo Layer */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-cyan-500/10 to-sky-200/40 pointer-events-none" />
                
                {/* Continents & Landmass Silhouettes (Green/Gold Swirls) */}
                <div className="absolute top-6 left-8 w-24 h-16 rounded-full bg-emerald-900/40 blur-[4px] rotate-[15deg]" />
                <div className="absolute top-14 left-16 w-16 h-20 rounded-full bg-emerald-800/35 blur-[5px] rotate-[-20deg]" />
                <div className="absolute bottom-10 right-12 w-28 h-18 rounded-full bg-emerald-950/50 blur-[4px] rotate-[10deg]" />
                <div className="absolute top-1/2 left-1/3 w-12 h-8 rounded-full bg-[#d4af37]/20 blur-[3px]" />
                
                {/* Swirling White Atmospheric Cloud Ribbons */}
                <div className="absolute top-4 inset-x-4 h-4 rounded-full bg-white/25 blur-[3px] rotate-[-12deg]" />
                <div className="absolute top-[42%] inset-x-6 h-6 rounded-full bg-white/30 blur-[4px] rotate-[-8deg]" />
                <div className="absolute bottom-6 inset-x-8 h-4 rounded-full bg-white/20 blur-[3px] rotate-[-15deg]" />
              </div>

              {/* Orbit Meridian Coordinates & Moon Satellite */}
              <div className="absolute -inset-6 sm:-inset-10 rounded-full border border-dashed border-cyan-300/25 rotate-[23.5deg]" />
              <div className="absolute -inset-10 sm:-inset-14 rounded-[100%] border border-cyan-400/15 rotate-[-23.5deg]" />
              <div className="absolute top-2 right-4 w-3.5 h-3.5 rounded-full bg-zinc-200 shadow-[0_0_10px_#ffffff,0_0_20px_#38bdf8]" />
            </motion.div>
          </div>
        )}

        {/* ========================================================
            WING 04: KOMET MENUKIK KE BAWAH DENGAN PARALLAX SCROLL VIEW (EXPERIENCE)
            ======================================================== */}
        {variant === "trajectory" && (
          <div className="absolute inset-0">
            {/* A. Downward Flight Vector Track (Subtle guide trajectory along left side) */}
            <div className="absolute top-8 bottom-8 left-8 sm:left-16 lg:left-24 w-[1.5px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent border-l border-dashed border-cyan-400/35 pointer-events-none opacity-40" />

            {/* B. Downward-Plunging High-Speed Comet (Glides in sync with scroll view from top to bottom) */}
            <motion.div
              style={{ top: cometTop, x: cometX }}
              className="absolute left-4 sm:left-12 lg:left-18 flex flex-col items-center rotate-[-22deg] opacity-95 z-0 origin-bottom pointer-events-none"
            >
              {/* 1. Trailing Upward Gas & Ion Tail */}
              <div className="w-[3.5px] h-52 sm:h-68 bg-gradient-to-t from-white via-cyan-400/90 to-transparent blur-[0.5px] shadow-[0_0_20px_#38bdf8,0_0_40px_#0284c7]" />
              
              {/* 2. Secondary Wider Champagne Dust Tail */}
              <div className="absolute top-10 w-[2.5px] h-44 sm:h-56 bg-gradient-to-t from-[#ffd875] via-[#d4af37]/60 to-transparent blur-[1px] rotate-[7deg] origin-bottom shadow-[0_0_15px_#ffd875]" />
              
              {/* 3. Blazing Comet Head Nucleus (Leading at the bottom, always visible in viewport) */}
              <div className="relative -mt-1 w-7 h-7 rounded-full bg-white shadow-[0_0_25px_#38bdf8,0_0_50px_#38bdf8,0_0_80px_#ffffff] shrink-0">
                <div className="absolute inset-0 rounded-full bg-cyan-200 animate-ping opacity-75" />
                <div className="absolute -inset-1.5 rounded-full bg-cyan-300 blur-[3px] opacity-90" />
                <div className="absolute inset-1 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />
              </div>

              {/* 4. Trailing Stardust Sparks */}
              <div className="absolute -top-12 -left-3 w-1.5 h-1.5 rounded-full bg-cyan-200 shadow-[0_0_6px_#38bdf8]" />
              <div className="absolute -top-24 left-4 w-2 h-2 rounded-full bg-[#ffd875] shadow-[0_0_6px_#ffd875]" />
            </motion.div>

            {/* C. Orbital Flight Waypoint Arc */}
            <motion.div
              style={{ y: slowParallax }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl h-[700px] rounded-[100%] border border-dashed border-white/15 opacity-35"
            >
              <div className="absolute top-[18%] left-[12%] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ebdca4] shadow-[0_0_12px_#d4af37]" />
                <span className="font-mono text-[10px] text-[#ebdca4] tracking-widest uppercase">WP-2020</span>
              </div>
              <div className="absolute top-[48%] right-[10%] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#38bdf8]" />
                <span className="font-mono text-[10px] text-cyan-200 tracking-widest uppercase">WP-2023</span>
              </div>
              <div className="absolute bottom-[22%] left-[28%] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]" />
                <span className="font-mono text-[10px] text-emerald-300 tracking-widest uppercase">WP-2026 [ACTIVE]</span>
              </div>
            </motion.div>
          </div>
        )}

        {/* ========================================================
            WING 05: SILKY AMBIENT BREATHING GLOW (PROCESS)
            ======================================================== */}
        {variant === "eclipse" && (
          <div className="absolute inset-0">
            <motion.div
              style={{ y: mediumParallax }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-80"
            >
              {/* Pure Hypnotic Breathing Glow (Soft breathing ambient coronal radiance) */}
              <div
                className="w-[720px] sm:w-[940px] h-[480px] sm:h-[640px] rounded-full [animation:breathingGlow_7s_ease-in-out_infinite]"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.28) 0%, rgba(245, 158, 11, 0.14) 40%, rgba(220, 38, 38, 0.05) 65%, transparent 85%)",
                }}
              />
              {/* Whisper-Thin Solar Axis Hairline */}
              <div className="absolute w-[80vw] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent blur-[0.5px]" />
            </motion.div>
          </div>
        )}

        {/* ========================================================
            WING 06: BULAN KOSMIK DENGAN FASE TERANG DINAMIS BERBASIS SCROLL (SERVICES)
            ======================================================== */}
        {variant === "prism" && (
          <div className="absolute inset-0 pointer-events-none">
            {/* A. RIGHT FLANK: Luminous Tracking Celestial Moon (Glides smoothly down with user scroll, staying visible throughout all services) */}
            <motion.div
              style={{ top: moonTop, x: moonX }}
              className="absolute right-6 sm:right-16 md:right-24 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none opacity-60 hover:opacity-85 transition-opacity duration-700 z-0 flex flex-col items-center justify-center origin-center"
            >
              {/* Organic Floating Bob */}
              <div className="relative w-full h-full flex items-center justify-center [animation:floatingPlanet_14s_ease-in-out_infinite]">
                {/* Soft Ambient Lunar Halo with scroll-boosted radiance */}
                <motion.div
                  style={{ opacity: moonHaloOpacity }}
                  className="absolute inset-0 rounded-full bg-white blur-[28px] transition-all duration-700"
                />
                
                {/* Luminous Illuminated Lunar Sphere */}
                <div className="relative w-20 sm:w-28 h-20 sm:h-28 rounded-full border border-white/40 bg-gradient-to-tr from-[#9ca3af] via-[#e4e4e7] to-[#ffffff] shadow-[inset_-8px_-8px_18px_rgba(0,0,0,0.5),0_0_30px_rgba(255,255,255,0.4)] overflow-hidden">
                  {/* Surface Craters Topography */}
                  <div className="absolute top-4 right-5 w-3 h-3 rounded-full bg-zinc-600/30 border border-zinc-500/20" />
                  <div className="absolute bottom-5 right-7 w-3.5 h-3.5 rounded-full bg-zinc-600/25 border border-zinc-500/20" />
                  <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-zinc-600/20" />
                  <div className="absolute bottom-8 left-5 w-2.5 h-2.5 rounded-full bg-zinc-600/35" />
                  
                  {/* Dynamic Continuous Scroll-Driven Terminator Mask (Shadow recedes smoothly as you scroll down) */}
                  <motion.div
                    style={{ width: moonShadowWidth, opacity: moonShadowOpacity }}
                    className="absolute inset-y-0 left-0 bg-[#06060a]/92 blur-[1px] rounded-r-full"
                  />

                  {/* Delicate Horizon Glow */}
                  <div className="absolute inset-0 rounded-full border-r border-t border-white/80" />
                </div>
              </div>
            </motion.div>

            {/* B. UPPER-LEFT: Subtle Orbital Guide Arc */}
            <motion.div
              style={{ y: slowParallax }}
              className="absolute top-14 left-6 sm:left-16 pointer-events-none opacity-25 z-0"
            >
              <div className="w-32 sm:w-44 h-32 sm:h-44 rounded-full border border-dashed border-white/20">
                <div className="absolute top-2 left-6 w-1.5 h-1.5 rounded-full bg-[#ebdca4]" />
              </div>
            </motion.div>

            {/* C. Ambient Chromatic Mesh Glow across the section */}
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-5xl h-[500px] blur-[130px] pointer-events-none opacity-25"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, rgba(56, 189, 248, 0.12) 0%, rgba(212, 175, 55, 0.08) 45%, transparent 80%)",
              }}
            />
          </div>
        )}

        {/* ========================================================
            WING 07: TIRAI AURORA BOREALIS & RASI BINTANG ORION (SKILLS)
            ======================================================== */}
        {variant === "cluster" && (
          <div className="absolute inset-0">
            {/* A. Soft Deep Space Nebula Stardust Haze (Subtle Warm Amber & Indigo) */}
            <div
              className="absolute top-1/4 inset-x-0 h-[450px] opacity-30 blur-[100px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 90% 60% at 50% 40%, rgba(212, 175, 55, 0.08) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 80%)",
              }}
            />

            {/* B. Quiet Orion Constellation Matrix in Background (No hover conflict) */}
            <motion.div
              style={{ y: mediumParallax }}
              className="absolute top-12 right-6 sm:right-20 w-72 sm:w-88 h-96 opacity-40 pointer-events-none"
            >
              <svg className="w-full h-full" viewBox="0 0 300 400" fill="none">
                <line x1="80" y1="60" x2="220" y2="90" stroke="rgba(212, 175, 55, 0.35)" strokeDasharray="3 4" />
                <line x1="80" y1="60" x2="130" y2="190" stroke="rgba(212, 175, 55, 0.35)" strokeDasharray="3 4" />
                <line x1="220" y1="90" x2="170" y2="210" stroke="rgba(212, 175, 55, 0.35)" strokeDasharray="3 4" />
                <line x1="130" y1="190" x2="150" y2="200" stroke="rgba(235, 220, 164, 0.6)" strokeWidth="1.5" />
                <line x1="150" y1="200" x2="170" y2="210" stroke="rgba(235, 220, 164, 0.6)" strokeWidth="1.5" />
                <line x1="130" y1="190" x2="90" y2="330" stroke="rgba(212, 175, 55, 0.35)" strokeDasharray="3 4" />
                <line x1="170" y1="210" x2="210" y2="340" stroke="rgba(212, 175, 55, 0.35)" strokeDasharray="3 4" />

                <circle cx="80" cy="60" r="4" fill="#ffd875" />
                <circle cx="220" cy="90" r="3" fill="#fff" />
                <circle cx="130" cy="190" r="3" fill="#fff" />
                <circle cx="150" cy="200" r="3" fill="#ffd875" />
                <circle cx="170" cy="210" r="3" fill="#fff" />
                <circle cx="90" cy="330" r="3.5" fill="#38bdf8" />
                <circle cx="210" cy="340" r="4.5" fill="#38bdf8" />
              </svg>
            </motion.div>
          </div>
        )}

        {/* ========================================================
            WING 08: SUBTLE ASTROLABE & POLARIS ZENITH COORDINATES (CREDENTIALS)
            ======================================================== */}
        {variant === "zenith" && (
          <div className="absolute inset-0 pointer-events-none">
            {/* A. Soft Geometric Astrolabe Navigation Rings (Whisper-Thin Meridian Hairlines) */}
            <motion.div
              style={{ y: slowParallax }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] h-[520px] sm:h-[720px] pointer-events-none opacity-40 z-0 flex items-center justify-center"
            >
              {/* Outer Astrolabe Calibration Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/35 rotate-[18deg]" />
              
              {/* Secondary Concentric Meridian Ring */}
              <div className="absolute inset-12 sm:inset-16 rounded-full border border-white/20 rotate-[-24deg]" />
              
              {/* Inner Precision Degree Dial */}
              <div className="absolute inset-28 sm:inset-36 rounded-full border border-[#d4af37]/35" />

              {/* Central Geometric Axis Crosshairs */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent rotate-[35deg]" />
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent -rotate-[55deg]" />
            </motion.div>

            {/* B. Polaris Zenith Star & Triangulated Verification Nodes (Starlight Points) */}
            <motion.div
              style={{ y: mediumParallax }}
              className="absolute inset-0 pointer-events-none opacity-60"
            >
              {/* 1. Polaris Zenith Beacon (Center-Right) */}
              <div className="absolute top-16 right-[22%] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#fff,0_0_35px_#38bdf8] [animation:twinkleStar_3s_ease-in-out_infinite]" />
                <div className="absolute w-10 h-[1px] bg-cyan-200/80 blur-[0.5px]" />
                <div className="absolute h-10 w-[1px] bg-cyan-200/80 blur-[0.5px]" />
                <div className="absolute -top-6 whitespace-nowrap font-mono text-[9px] text-cyan-200 font-medium tracking-widest bg-black/60 px-2 py-0.5 rounded border border-cyan-400/30 backdrop-blur-sm">
                  POLARIS · 89°15′51″
                </div>
              </div>

              {/* 2. Triangulation Coordinate 01 (GPA 4.00 Verified Vertex) */}
              <div className="absolute top-1/3 left-[14%] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffd875] shadow-[0_0_14px_#ffd875] [animation:twinkleStar_4s_ease-in-out_infinite_1s]" />
                <div className="absolute -bottom-5 whitespace-nowrap font-mono text-[8.5px] text-[#ebdca4] font-medium tracking-widest bg-black/60 px-2 py-0.5 rounded border border-[#d4af37]/30 backdrop-blur-sm">
                  IPK 4.00 · AUDITED
                </div>
              </div>

              {/* 3. Triangulation Coordinate 02 (Best Practitioner Vertex) */}
              <div className="absolute bottom-1/4 right-[16%] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_#34d399] [animation:twinkleStar_4.5s_ease-in-out_infinite_2s]" />
                <div className="absolute -bottom-5 whitespace-nowrap font-mono text-[8.5px] text-emerald-300 font-medium tracking-widest bg-black/60 px-2 py-0.5 rounded border border-emerald-400/30 backdrop-blur-sm">
                  4x PRAKTIKAN TERBAIK
                </div>
              </div>

              {/* 4. Triangulation Coordinate 03 (Cambridge A-Level Vertex) */}
              <div className="absolute bottom-1/3 left-[28%] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-300 shadow-[0_0_14px_#c084fc] [animation:twinkleStar_5s_ease-in-out_infinite_1.5s]" />
                <div className="absolute -bottom-5 whitespace-nowrap font-mono text-[8.5px] text-purple-200 font-medium tracking-widest bg-black/60 px-2 py-0.5 rounded border border-purple-400/30 backdrop-blur-sm">
                  CAMBRIDGE A-LEVEL
                </div>
              </div>

              {/* SVG Coordinate Triangulation Vector Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
                <line x1="930" y1="120" x2="170" y2="280" stroke="rgba(56, 189, 248, 0.20)" strokeDasharray="4 6" />
                <line x1="930" y1="120" x2="1000" y2="600" stroke="rgba(56, 189, 248, 0.20)" strokeDasharray="4 6" />
                <line x1="170" y1="280" x2="340" y2="530" stroke="rgba(212, 175, 55, 0.20)" strokeDasharray="4 6" />
                <line x1="340" y1="530" x2="1000" y2="600" stroke="rgba(52, 211, 153, 0.20)" strokeDasharray="4 6" />
              </svg>
            </motion.div>

            {/* Ambient Deep Space Blue & Gold Nebular Haze */}
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-5xl h-[550px] blur-[120px] pointer-events-none opacity-28"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(14, 165, 233, 0.18) 0%, rgba(212, 175, 55, 0.08) 50%, transparent 80%)",
              }}
            />
          </div>
        )}

        {/* ========================================================
            WING 09: LUMINOUS SOLAR DAWN PLUME (CONTACT)
            ======================================================== */}
        {variant === "beacon" && (
          <div className="absolute bottom-0 inset-x-0 h-[420px] sm:h-[580px] overflow-hidden pointer-events-none z-0">
            {/* 1. Primary Upward Solar Coronal Atmosphere (High-Luminance Atmospheric Plume, Zero Lines) */}
            <div
              className="absolute -bottom-20 inset-x-0 h-[520px] sm:h-[680px] blur-[85px] sm:blur-[115px] opacity-85 sm:opacity-95 pointer-events-none [animation:solarCoronaBreathe_9s_ease-in-out_infinite]"
              style={{
                background:
                  "radial-gradient(ellipse 95% 75% at 50% 100%, rgba(251, 146, 60, 0.60) 0%, rgba(245, 158, 11, 0.38) 32%, rgba(220, 38, 38, 0.14) 62%, transparent 88%)",
              }}
            />

            {/* 2. Intense Golden Sun Core Radiance Emerging from Horizon */}
            <div
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[85vw] max-w-4xl h-[320px] sm:h-[400px] blur-[65px] opacity-85 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(254, 215, 170, 0.75) 0%, rgba(251, 191, 36, 0.55) 28%, rgba(249, 115, 22, 0.25) 58%, transparent 82%)",
              }}
            />

            {/* 3. Pure White-Amber Dawn Horizon Core (Ultra Bright Focal Center at Base) */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[45vw] max-w-xl h-[160px] blur-[40px] opacity-80 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.80) 0%, rgba(253, 186, 116, 0.55) 35%, transparent 75%)",
              }}
            />
          </div>
        )}

      </motion.div>
    </div>
  );
}
