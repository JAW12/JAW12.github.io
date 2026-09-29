"use client";

import React, { useEffect, useRef, useState } from "react";

export function MouseSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isHoveringInput, setIsHoveringInput] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // References for 60fps hardware-accelerated transforms
  const immediatePos = useRef({ x: -500, y: -500 });
  const hotspotPos = useRef({ x: -500, y: -500 });
  const ambientPos = useRef({ x: -500, y: -500 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate for desktop fine-pointer devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      immediatePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        // Detect text inputs & editable areas
        const isInput = Boolean(
          target.closest("input:not([type='button']):not([type='submit']), textarea, [contenteditable='true']")
        );
        setIsHoveringInput(isInput);

        // Detect clickable interactive controls
        const isInteractive = Boolean(
          target.closest("a, button, [role='button'], .cursor-pointer, input[type='button'], input[type='submit'], summary, select")
        );
        setIsHoveringInteractive(isInteractive);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsClicking(false);
    };

    // 60fps render loop with realistic two-tier optical physics
    const updateLoop = () => {
      const immX = immediatePos.current.x;
      const immY = immediatePos.current.y;

      // 1. Hotspot: quick responsive spring (follows direct beam of the torch filament)
      const hotspotEase = 0.28;
      hotspotPos.current.x += (immX - hotspotPos.current.x) * hotspotEase;
      hotspotPos.current.y += (immY - hotspotPos.current.y) * hotspotEase;

      // 2. Ambient Spill: natural fluid inertia (simulates sweeping flashlight bounce)
      const ambientEase = 0.09;
      ambientPos.current.x += (immX - ambientPos.current.x) * ambientEase;
      ambientPos.current.y += (immY - ambientPos.current.y) * ambientEase;

      // Update cursor pointer position instantaneously (0 latency for clicking accuracy)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${immX}px, ${immY}px, 0)`;
      }

      // Update ambient light cone coordinates
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--hotspot-x", `${hotspotPos.current.x.toFixed(1)}px`);
        spotlightRef.current.style.setProperty("--hotspot-y", `${hotspotPos.current.y.toFixed(1)}px`);
        spotlightRef.current.style.setProperty("--ambient-x", `${ambientPos.current.x.toFixed(1)}px`);
        spotlightRef.current.style.setProperty("--ambient-y", `${ambientPos.current.y.toFixed(1)}px`);
      }

      animFrameId.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    animFrameId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. NATURAL PHOTOREALISTIC FLASHLIGHT BEAM (Additive Screen Mode on Obsidian Surface) */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block mix-blend-screen"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `
            /* A. Ambient Wide Dispersion (Natural sweeping flashlight bounce on observatory canvas) */
            radial-gradient(${isHoveringInteractive ? "560px" : "480px"} circle at var(--ambient-x, -500px) var(--ambient-y, -500px), rgba(212, 175, 55, ${isHoveringInteractive ? "0.10" : "0.075"}), rgba(235, 220, 164, 0.035) 40%, rgba(220, 38, 38, 0.015) 65%, transparent 80%),
            
            /* B. Focused Core Hotspot (The direct warm beam of the observatory torch) */
            radial-gradient(${isHoveringInteractive ? "240px" : "180px"} circle at var(--hotspot-x, -500px) var(--hotspot-y, -500px), rgba(255, 250, 235, ${isHoveringInteractive ? "0.22" : "0.15"}), rgba(235, 220, 164, ${isHoveringInteractive ? "0.10" : "0.06"}) 50%, transparent 75%)
          `,
          transition: "background 0.25s ease-out, opacity 0.4s ease",
        }}
      />

      {/* 2. REFINED MINIMALIST LIGHT POINTER (Z-INDEX 999999: Crisp, Natural, Never Obstructs) */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[999999] hidden md:block will-change-transform"
        style={{
          opacity: isHoveringInput ? 0 : 1,
          transition: "opacity 0.15s ease",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none transition-all duration-200 ease-out ${
            isClicking
              ? "scale-85"
              : isHoveringInteractive
              ? "scale-100"
              : "scale-100"
          }`}
        >
          {isHoveringInteractive ? (
            /* HOVER STATE: Elegant whisper-thin lens ring that frames the button without obscuring text */
            <div className="relative flex items-center justify-center animate-in fade-in zoom-in-95 duration-200">
              {/* Soft halo */}
              <div className="w-9 h-9 rounded-full border border-[#ebdca4]/50 bg-[#ebdca4]/[0.06] backdrop-blur-[0.5px] shadow-[0_0_15px_rgba(212,175,55,0.25)] flex items-center justify-center transition-all duration-200">
                {/* Micro center focus pip */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#ebdca4] shadow-[0_0_6px_#ebdca4]" />
              </div>
            </div>
          ) : (
            /* DEFAULT STATE: Crisp, delicate, pure warm light bead (clean and precise) */
            <div className="relative flex items-center justify-center">
              {/* Soft micro ambient glint */}
              <div className="absolute w-5 h-5 rounded-full bg-[#d4af37]/20 blur-[3px] pointer-events-none" />
              
              {/* Crisp focal bead */}
              <div className="relative w-2 h-2 rounded-full bg-[#fffdf5] shadow-[0_0_5px_rgba(255,255,255,0.9),0_0_10px_rgba(235,220,164,0.6)]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
