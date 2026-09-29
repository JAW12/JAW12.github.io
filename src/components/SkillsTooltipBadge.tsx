"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillsTooltipBadgeProps {
  name: string;
  category?: string;
  verificationLevel?: string;
  yearsOfUsage?: string;
  icon?: React.ReactNode;
}

export function SkillsTooltipBadge({
  name,
  category,
  verificationLevel = "Production Standard",
  yearsOfUsage = "3+ Years",
  icon,
}: SkillsTooltipBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      className="relative inline-flex items-center"
    >
      <div
        className="px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-[#d4af37]/15 border border-white/10 hover:border-[#d4af37]/50 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
      >
        {icon && <span className="text-[#d4af37] group-hover:scale-110 transition-transform">{icon}</span>}
        <span className="font-mono text-xs text-zinc-200 group-hover:text-[#ebdca4] font-medium">
          {name}
        </span>
      </div>

      {/* FLOATING HOVER TOOLTIP PILL (Chrisanto Reference 05) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: -42, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none px-3 py-1.5 rounded-lg bg-[#111114] border border-[#d4af37]/60 shadow-[0_8px_20px_rgba(0,0,0,0.8)] whitespace-nowrap flex flex-col items-center gap-0.5"
          >
            <span className="text-xs font-mono font-bold text-[#ebdca4] uppercase tracking-wider">
              {name}
            </span>
            <span className="text-xs font-mono text-zinc-300 font-medium">
              {verificationLevel} · {yearsOfUsage}
            </span>
            {/* Tooltip Chevron */}
            <div className="w-2 h-2 bg-[#111114] border-r border-b border-[#d4af37]/60 rotate-45 -mb-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
