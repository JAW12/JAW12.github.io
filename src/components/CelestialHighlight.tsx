"use client";

import React, { useState } from "react";
import { CelestialStar } from "@/components/CelestialStar";

interface CelestialHighlightProps {
  children: React.ReactNode;
  proof?: string;
  className?: string;
  badge?: string;
}

/**
 * CelestialHighlight Component
 * 
 * Purposeful interactive text highlight for verified career proofs and metrics.
 * On hover, shows a celestial gold glint, a waypoint star reticle, and an archival verification tooltip.
 */
export function CelestialHighlight({
  children,
  proof,
  className = "",
  badge,
}: CelestialHighlightProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`relative inline-flex items-baseline group cursor-help ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="note"
      aria-label={proof ? `${children}: ${proof}` : undefined}
    >
      <span className="relative z-10 font-medium text-white group-hover:text-[#ebdca4] transition-colors duration-200 border-b border-dashed border-[#d4af37]/60 group-hover:border-[#d4af37] pb-0.5">
        {children}
      </span>

      {/* Waypoint Star Indicator */}
      <span className="inline-block ml-1 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 transform -translate-y-0.5">
        <CelestialStar className="w-3 h-3 text-[#d4af37]" />
      </span>

      {/* Verification Tooltip */}
      {proof && isHovered && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1.5 rounded-xl bg-[#0c0c0e]/95 border border-[#d4af37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.9)] text-[11px] font-mono text-zinc-200 pointer-events-none z-50 animate-in fade-in zoom-in-95 duration-150 flex flex-col gap-0.5"
        >
          {badge && (
            <span className="text-[9px] uppercase tracking-wider text-[#d4af37] font-bold">
              {badge}
            </span>
          )}
          <span className="text-zinc-300 font-light leading-snug">{proof}</span>
          {/* Tooltip downward arrowhead */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#0c0c0e]/95" />
        </span>
      )}
    </span>
  );
}
