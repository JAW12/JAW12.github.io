"use client";

import React, { useRef, useState, useCallback } from "react";

interface VitrineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "gold" | "crimson" | "white";
  showReticles?: boolean;
  showSheen?: boolean;
}

/**
 * VitrineCard Component
 * 
 * Museum-grade Obsidian Glass Display Case with dynamic cursor-following specular border sheen,
 * subtle corner reticle crosshairs, and smooth hover elevation.
 */
export function VitrineCard({
  children,
  className = "",
  glowColor = "gold",
  showReticles = true,
  showSheen = true,
  ...props
}: VitrineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
  }, []);

  const glowBorderRgba =
    glowColor === "crimson"
      ? "rgba(220, 38, 38, 0.45)"
      : glowColor === "white"
      ? "rgba(255, 255, 255, 0.35)"
      : "rgba(212, 175, 55, 0.45)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group overflow-hidden ${className}`}
      {...props}
    >
      {/* Dynamic Cursor-Following Ambient Sheen (Clean & Bug-Free across all browsers) */}
      {mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-40 group-hover:opacity-100"
          style={{
            background: `radial-gradient(260px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.12), transparent 70%)`,
          }}
        />
      )}

      {/* Top Specular Hairline Sheen */}
      {showSheen && (
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent pointer-events-none" />
      )}

      {/* Museum Exhibit Corner Crosshairs (+) */}
      {showReticles && (
        <>
          <span className="absolute top-2.5 left-2.5 text-[10px] font-mono text-white/20 group-hover:text-[#d4af37]/60 transition-colors pointer-events-none select-none">
            +
          </span>
          <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-white/20 group-hover:text-[#d4af37]/60 transition-colors pointer-events-none select-none">
            +
          </span>
          <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-white/20 group-hover:text-[#d4af37]/60 transition-colors pointer-events-none select-none">
            +
          </span>
          <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-white/20 group-hover:text-[#d4af37]/60 transition-colors pointer-events-none select-none">
            +
          </span>
        </>
      )}

      {/* Card Content Container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
