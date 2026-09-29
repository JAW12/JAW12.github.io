"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function FloatingScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100));
        setScrollProgress(Math.round(currentProgress));
        setIsVisible(totalScroll > 350);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 print-hidden select-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
      aria-label="Back to top"
    >
      <button
        onClick={scrollToTop}
        className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#111114]/90 hover:bg-[#18181c] border border-white/15 hover:border-[#d4af37]/60 text-white shadow-xl backdrop-blur-md transition-all duration-300 active:scale-95 focus:outline-none"
        title="Scroll to top"
      >
        {/* Circular Mini Progress Ring */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="9"
              className="text-white/10"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
            />
            <circle
              cx="12"
              cy="12"
              r="9"
              className="text-[#d4af37]"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeDasharray={56.5}
              strokeDashoffset={56.5 - (56.5 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp className="w-2.5 h-2.5 text-zinc-300 group-hover:text-[#ebdca4] group-hover:-translate-y-0.5 transition-all absolute" />
        </div>

        {/* Numeric Progress on Hover / Desktop */}
        <span className="text-xs font-mono font-medium tracking-wider text-zinc-300 group-hover:text-[#ebdca4] transition-colors">
          {scrollProgress}%
        </span>
      </button>
    </div>
  );
}
