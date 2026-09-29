"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/* Faceted Asteroid Rocks with 3D Crater Shading and Gold Rim Lighting */
function AsteroidRock({
  size = 36,
  variant = 1,
  className = "",
}: {
  size?: number;
  variant?: 1 | 2 | 3 | 4;
  className?: string;
}) {
  if (variant === 1) {
    // Craggy, Faceted Space Boulder
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`filter drop-shadow-[0_0_15px_rgba(212,175,55,0.25)] ${className}`}
        fill="none"
      >
        <defs>
          <radialGradient id="astGrad1" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#71717a" />
            <stop offset="45%" stopColor="#3f3f46" />
            <stop offset="80%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </radialGradient>
          <linearGradient id="astRim1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd875" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.35" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="50,6 78,18 94,45 88,78 62,94 32,90 10,70 6,38 25,14"
          fill="url(#astGrad1)"
          stroke="url(#astRim1)"
          strokeWidth="1.5"
        />
        <polygon points="50,6 45,35 25,14" fill="#52525b" opacity="0.4" />
        <polygon points="78,18 45,35 50,6" fill="#a1a1aa" opacity="0.3" />
        <polygon points="78,18 94,45 68,52 45,35" fill="#3f3f46" opacity="0.6" />
        <polygon points="94,45 88,78 65,70 68,52" fill="#27272a" opacity="0.7" />
        <polygon points="88,78 62,94 50,65 65,70" fill="#18181b" opacity="0.8" />
        <polygon points="62,94 32,90 38,62 50,65" fill="#27272a" opacity="0.7" />
        <polygon points="32,90 10,70 28,50 38,62" fill="#18181b" opacity="0.8" />
        <polygon points="10,70 6,38 28,50" fill="#27272a" opacity="0.7" />
        <polygon points="6,38 25,14 45,35 28,50" fill="#52525b" opacity="0.5" />
        <ellipse cx="42" cy="40" rx="6" ry="4" fill="#18181b" stroke="#a1a1aa" strokeWidth="0.5" opacity="0.8" />
        <ellipse cx="68" cy="62" rx="5" ry="3.5" fill="#09090b" stroke="#71717a" strokeWidth="0.5" opacity="0.7" />
        <ellipse cx="26" cy="65" rx="3.5" ry="2.5" fill="#09090b" opacity="0.6" />
      </svg>
    );
  }

  if (variant === 2) {
    // Angular Meteorite Fragment / Crystalline Mineral Shard
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`filter drop-shadow-[0_0_12px_rgba(212,175,55,0.3)] ${className}`}
        fill="none"
      >
        <defs>
          <linearGradient id="astGrad2" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#a1a1aa" />
            <stop offset="35%" stopColor="#52525b" />
            <stop offset="70%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id="astRim2" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#ffe7a0" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#d4af37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points="40,8 82,24 92,60 68,92 25,86 8,50 18,22"
          fill="url(#astGrad2)"
          stroke="url(#astRim2)"
          strokeWidth="1.2"
        />
        <polygon points="40,8 52,42 18,22" fill="#d4d4d8" opacity="0.25" />
        <polygon points="82,24 52,42 40,8" fill="#71717a" opacity="0.35" />
        <polygon points="82,24 92,60 62,56 52,42" fill="#3f3f46" opacity="0.6" />
        <polygon points="92,60 68,92 48,68 62,56" fill="#18181b" opacity="0.85" />
        <polygon points="68,92 25,86 48,68" fill="#27272a" opacity="0.75" />
        <polygon points="25,86 8,50 32,52 48,68" fill="#18181b" opacity="0.8" />
        <polygon points="8,50 18,22 52,42 32,52" fill="#52525b" opacity="0.45" />
        <ellipse cx="58" cy="48" rx="4.5" ry="3" fill="#18181b" opacity="0.75" />
        <ellipse cx="32" cy="68" rx="3" ry="2" fill="#09090b" opacity="0.65" />
      </svg>
    );
  }

  if (variant === 3) {
    // Dense Pitted Iron-Nickel Ore Pebble
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`filter drop-shadow-[0_0_10px_rgba(212,175,55,0.2)] ${className}`}
        fill="none"
      >
        <defs>
          <radialGradient id="astGrad3" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#a8a29e" />
            <stop offset="50%" stopColor="#44403c" />
            <stop offset="85%" stopColor="#1c1917" />
            <stop offset="100%" stopColor="#0c0a09" />
          </radialGradient>
          <linearGradient id="astRim3" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ca8a04" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon
          points="46,12 76,26 88,58 72,88 38,84 14,62 20,30"
          fill="url(#astGrad3)"
          stroke="url(#astRim3)"
          strokeWidth="1.2"
        />
        <polygon points="46,12 48,45 20,30" fill="#78716c" opacity="0.35" />
        <polygon points="76,26 48,45 46,12" fill="#a8a29e" opacity="0.25" />
        <polygon points="76,26 88,58 58,60 48,45" fill="#44403c" opacity="0.6" />
        <polygon points="88,58 72,88 58,60" fill="#1c1917" opacity="0.8" />
        <polygon points="72,88 38,84 36,58 58,60" fill="#292524" opacity="0.7" />
        <polygon points="38,84 14,62 36,58" fill="#1c1917" opacity="0.8" />
        <polygon points="14,62 20,30 48,45 36,58" fill="#57534e" opacity="0.5" />
        <circle cx="50" cy="38" r="3" fill="#1c1917" opacity="0.8" />
        <circle cx="64" cy="66" r="3.5" fill="#0c0a09" opacity="0.75" />
      </svg>
    );
  }

  // Variant 4: Tiny Distant Micro-Asteroid Fragment
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full bg-gradient-to-tr from-zinc-900 via-zinc-700 to-amber-200/80 shadow-[0_0_8px_rgba(212,175,55,0.4)] border border-[#d4af37]/30 ${className}`}
    />
  );
}

export function SectionTickerTape() {
  const { language } = useLanguage();

  const primaryItems = [
    "iSTTS PERFECT 4.00 GPA · 4x BEST PRACTITIONER",
    "ZERO HALLUCINATIONS · 100% AUDITABLE CODE",
    "-25°C BLAST-FREEZE NYLON PACKAGING",
    "<15ms ZERO-LATENCY CLIENT ENGINES",
    "PHYSICAL MANUFACTURING & DIGITAL LOGIC",
    "TRILINGUAL FLUENCY · ID / EN / HSK 4",
  ];

  const secondaryItems = [
    "NEXT.JS & LARAVEL FULL-STACK SYSTEMS",
    "150+ PAGE AUTOMATED PRINT PIPELINE",
    "RELATIONAL SCHEMAS & TRANSACTION LEDGERS",
    "90+ SKU B2B COMMERCIAL CATALOGS",
    "STRUCTURED PROMPT CHAINS & PYTHON ENGINES",
    "SARJANA KOMPUTER [S.KOM] · BUSINESS INFO SYSTEMS",
  ];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-transparent select-none">
      
      {/* Ambient Deep Space Gold Center Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0 flex items-center justify-center">
        <div
          className="w-[80vw] max-w-4xl h-[300px] rounded-full blur-[100px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.25) 0%, rgba(245, 158, 11, 0.10) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* DUAL CROSSING TICKER RIBBONS (Gold & Black Luxury Styling) */}
      <div className="relative min-h-[300px] sm:min-h-[340px] flex justify-center items-center z-10 overflow-hidden">
        
        {/* ========================================================
            1. STATIC / FLOATING-ONLY ASTEROID FIELD (Ga Ikut Gerakan Pita)
            These stay at fixed coordinates in deep space and foreground, 
            hovering & tumbling organically (3D Depth)
            ======================================================== */}
        {/* Background Static Layer (Behind Ribbons - z-0) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Static BG 1: Distant Top-Right Ore */}
          <div className="absolute top-4 right-[20%] md:right-[26%] opacity-65 [animation:floatingPlanet_16s_ease-in-out_infinite_2s]">
            <AsteroidRock size={30} variant={3} className="rotate-[45deg]" />
          </div>

          {/* Static BG 2: Center-Left Midground Shard */}
          <div className="absolute top-[48%] left-[5%] md:left-[9%] opacity-60 [animation:floatingPlanetAlt_18s_ease-in-out_infinite_4s]">
            <AsteroidRock size={24} variant={2} className="-rotate-[30deg]" />
          </div>

          {/* Static BG 3: Top-Left Floating Micro Pebble */}
          <div className="absolute top-6 left-[20%] opacity-70 [animation:floatingPlanet_12s_ease-in-out_infinite]">
            <AsteroidRock size={14} variant={4} />
          </div>

          {/* Static BG 4: Bottom-Right Deep Space Ore */}
          <div className="absolute bottom-6 right-[28%] opacity-60 [animation:floatingPlanetAlt_15s_ease-in-out_infinite_1s]">
            <AsteroidRock size={20} variant={3} className="rotate-[70deg]" />
          </div>
        </div>

        {/* Foreground Static Layer (Above Ribbons - z-30) */}
        <div className="absolute inset-0 pointer-events-none z-30">
          {/* Static FG 1: Giant Faceted Boulder (Left Flank - Stationary Hover) */}
          <div className="absolute top-2 left-[3%] sm:left-[8%] opacity-90 [animation:floatingPlanet_11s_ease-in-out_infinite]">
            <AsteroidRock size={48} variant={1} className="rotate-[20deg]" />
            <span className="absolute -top-1 -right-1 text-[10px] text-[#ffd875] animate-pulse">✧</span>
          </div>

          {/* Static FG 2: Sharp Mineral Meteorite (Right Flank - Stationary Hover) */}
          <div className="absolute bottom-2 right-[3%] sm:right-[8%] opacity-90 [animation:floatingPlanetAlt_13s_ease-in-out_infinite_1.5s]">
            <AsteroidRock size={42} variant={2} className="-rotate-[25deg]" />
            <span className="absolute -bottom-1 -left-1 text-[9px] text-cyan-200 animate-pulse">✦</span>
          </div>

          {/* Static FG 3: Medium Ore (Top-Center - Stationary Hover) */}
          <div className="absolute top-1 left-[44%] opacity-75 [animation:floatingPlanet_14s_ease-in-out_infinite_3s]">
            <AsteroidRock size={22} variant={3} className="rotate-[60deg]" />
          </div>

          {/* Celestial Glints & Sparkles */}
          <div className="absolute top-[18%] right-[14%] w-1.5 h-1.5 rounded-full bg-[#ffd875] shadow-[0_0_8px_#ffd875] [animation:twinkleStar_3s_ease-in-out_infinite]" />
          <div className="absolute bottom-[22%] left-[10%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff] [animation:twinkleStar_4s_ease-in-out_infinite_1.5s]" />
        </div>

        {/* Center Intersection Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#d4af37]/15 blur-[50px] pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#ffd875] shadow-[0_0_18px_#ffd875] pointer-events-none z-20" />

        {/* ========================================================
            2. LANE 1 (REAR): Angled (-rotate-[4.5deg]) GOLD RIBBON + MULTI-SPEED FLYING ASTEROIDS
            (Trajectory: Right to Left)
            - Fast Stream (34s): Melesat lebih cepat
            - Normal Stream (65s): Kecepatan sama persis dengan pita
            - Slow Stream (115s): Meluncur santai / pelan
            ======================================================== */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] -rotate-[4.5deg] origin-center pointer-events-none z-10">
          
          {/* FAST ASTEROID STREAM (Upper Outer Track - 34s - Melesat Cepat) */}
          <div className="absolute -top-11 left-0 w-full overflow-visible pointer-events-none z-20">
            <div className="w-full flex whitespace-nowrap animate-marquee-fast">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-1.5 [animation:asteroidFloat_6s_linear_infinite]">
                    <AsteroidRock size={34} variant={1} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]" />
                    <span className="text-[11px] text-[#ffd875] opacity-90">✧</span>
                  </div>
                  <div className="flex items-center gap-1 [animation:asteroidFloat_8s_linear_infinite_1s]">
                    <AsteroidRock size={12} variant={4} />
                  </div>
                  <div className="flex items-center gap-2 [animation:asteroidFloat_7s_linear_infinite_2.5s]">
                    <AsteroidRock size={20} variant={2} />
                    <span className="text-[8px] text-amber-300 opacity-70">✦</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SAME-SPEED ESCORT STREAM (Upper Rim - 65s - Kecepatan Sama dengan Pita) */}
          <div className="absolute -top-5 left-0 w-full overflow-visible pointer-events-none z-20">
            <div className="w-full flex whitespace-nowrap animate-marquee">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-2 [animation:asteroidFloat_10s_linear_infinite]">
                    <AsteroidRock size={24} variant={2} className="drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                  </div>
                  <div className="flex items-center gap-1.5 [animation:asteroidFloat_12s_linear_infinite_3s]">
                    <AsteroidRock size={14} variant={3} />
                    <span className="text-[8px] text-[#ffd875] opacity-60">✧</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MAIN GOLD TAPE (Kecepatan Normal 65s + Embedded Rolling Asteroids) */}
          <div className="py-3.5 sm:py-4 bg-gradient-to-r from-[#b89322] via-[#ffd875] to-[#b89322] border-y-2 border-[#fff4d1] shadow-[0_0_40px_rgba(212,175,55,0.35)] flex items-center overflow-hidden pointer-events-auto">
            <div className="w-full flex whitespace-nowrap animate-marquee opacity-95">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-10 mx-6">
                  {secondaryItems.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-8">
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#08080a] font-bold drop-shadow-sm">
                        {text}
                      </span>
                      <span className="text-[#08080a] font-black text-xs">
                        ✦
                      </span>
                      {/* Embedded In-Stream Rolling Asteroid between phrases (Speed == Tape) */}
                      {idx % 3 === 1 && (
                        <div className="shrink-0 [animation:asteroidFloat_10s_linear_infinite]">
                          <AsteroidRock size={18} variant={1} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* SAME-SPEED ESCORT STREAM (Lower Rim - 65s - Kecepatan Sama dengan Pita) */}
          <div className="absolute -bottom-5 left-0 w-full overflow-visible pointer-events-none z-20">
            <div className="w-full flex whitespace-nowrap animate-marquee">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-1 [animation:asteroidFloat_11s_linear_infinite_1s]">
                    <AsteroidRock size={10} variant={4} />
                  </div>
                  <div className="flex items-center gap-2 [animation:asteroidFloat_13s_linear_infinite_3s]">
                    <AsteroidRock size={22} variant={3} className="drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                    <span className="text-[9px] text-[#ffd875] opacity-75">✧</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLOW DRIFT ASTEROID STREAM (Lower Outer Track - 115s - Meluncur Pelan) */}
          <div className="absolute -bottom-11 left-0 w-full overflow-visible pointer-events-none z-10">
            <div className="w-full flex whitespace-nowrap animate-marquee-slow opacity-80">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-2 [animation:asteroidFloat_16s_linear_infinite]">
                    <AsteroidRock size={28} variant={1} className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                  </div>
                  <div className="flex items-center gap-1.5 [animation:asteroidFloat_18s_linear_infinite_4s]">
                    <AsteroidRock size={16} variant={2} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================
            3. LANE 2 (FRONT): Angled (+rotate-[4.5deg]) BLACK RIBBON + MULTI-SPEED FLYING ASTEROIDS
            (Trajectory: Left to Right)
            - Fast Stream (36s): Melesat lebih cepat
            - Normal Stream (70s): Kecepatan sama persis dengan pita
            - Slow Stream (120s): Meluncur santai / pelan
            ======================================================== */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] rotate-[4.5deg] origin-center pointer-events-none z-20">
          
          {/* FAST ASTEROID STREAM (Upper Outer Track - 36s - Melesat Cepat) */}
          <div className="absolute -top-11 left-0 w-full overflow-visible pointer-events-none z-30">
            <div className="w-full flex whitespace-nowrap animate-marquee-reverse-fast">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-2 [animation:asteroidFloat_7s_linear_infinite]">
                    <AsteroidRock size={36} variant={2} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                    <span className="text-[10px] text-cyan-200 opacity-90">✦</span>
                  </div>
                  <div className="flex items-center gap-1.5 [animation:asteroidFloat_9s_linear_infinite_2s]">
                    <AsteroidRock size={14} variant={4} />
                  </div>
                  <div className="flex items-center gap-2 [animation:asteroidFloat_6.5s_linear_infinite_1s]">
                    <AsteroidRock size={22} variant={3} className="drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
                    <span className="text-[9px] text-[#ffd875] opacity-85">✧</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SAME-SPEED ESCORT STREAM (Upper Rim - 70s - Kecepatan Sama dengan Pita) */}
          <div className="absolute -top-5 left-0 w-full overflow-visible pointer-events-none z-30">
            <div className="w-full flex whitespace-nowrap animate-marquee-reverse">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-2 [animation:asteroidFloat_10s_linear_infinite_1s]">
                    <AsteroidRock size={26} variant={1} className="drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                  </div>
                  <div className="flex items-center gap-1 [animation:asteroidFloat_12s_linear_infinite_3s]">
                    <AsteroidRock size={16} variant={4} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MAIN BLACK TAPE (Kecepatan Normal 70s + Embedded Rolling Asteroids) */}
          <div className="py-3.5 sm:py-4 bg-[#09090c]/95 backdrop-blur-2xl border-y border-[#d4af37]/45 shadow-[0_0_35px_rgba(0,0,0,0.85)] flex items-center overflow-hidden pointer-events-auto">
            <div className="w-full flex whitespace-nowrap animate-marquee-reverse opacity-95">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-10 mx-6">
                  {primaryItems.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-8">
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#ebdca4] font-semibold drop-shadow-sm">
                        {text}
                      </span>
                      <span className="text-[#ffd875] text-xs">
                        ✧
                      </span>
                      {/* Embedded In-Stream Rolling Asteroid between phrases (Speed == Tape) */}
                      {idx % 3 === 2 && (
                        <div className="shrink-0 [animation:asteroidFloat_11s_linear_infinite]">
                          <AsteroidRock size={20} variant={3} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* SAME-SPEED ESCORT STREAM (Lower Rim - 70s - Kecepatan Sama dengan Pita) */}
          <div className="absolute -bottom-5 left-0 w-full overflow-visible pointer-events-none z-30">
            <div className="w-full flex whitespace-nowrap animate-marquee-reverse">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-1.5 [animation:asteroidFloat_12s_linear_infinite_3s]">
                    <AsteroidRock size={24} variant={3} className="drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                    <span className="text-[8px] text-amber-100 opacity-70">✧</span>
                  </div>
                  <div className="flex items-center gap-1 [animation:asteroidFloat_15s_linear_infinite_1.5s]">
                    <AsteroidRock size={12} variant={4} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLOW DRIFT ASTEROID STREAM (Lower Outer Track - 120s - Meluncur Pelan) */}
          <div className="absolute -bottom-11 left-0 w-full overflow-visible pointer-events-none z-20">
            <div className="w-full flex whitespace-nowrap animate-marquee-reverse-slow opacity-80">
              {[...Array(4)].map((_, groupIdx) => (
                <div key={groupIdx} className="flex items-center justify-around w-[160vw] shrink-0">
                  <div className="flex items-center gap-2 [animation:asteroidFloat_17s_linear_infinite_2s]">
                    <AsteroidRock size={32} variant={1} className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                  </div>
                  <div className="flex items-center gap-1.5 [animation:asteroidFloat_19s_linear_infinite]">
                    <AsteroidRock size={18} variant={2} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
