"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionContextType {
  triggerTransition: (onComplete?: () => void) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  triggerTransition: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = useCallback((onComplete?: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (onComplete) onComplete();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 450);
    }, 450);
  }, []);

  return (
    <TransitionContext.Provider value={{ triggerTransition, isTransitioning }}>
      {children}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Curtain Sweep: Left to Right across Viewport */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-[#09090b] border-r-2 border-[#d4af37]/40 flex items-center justify-center shadow-2xl"
            >
              {/* Subtle Gold Ambient Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)] pointer-events-none" />

              {/* Centered Luxury Monogram Pill (Chrisanto Reference 02) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative px-8 py-5 rounded-2xl bg-[#111114] border border-[#d4af37]/50 shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex flex-col items-center gap-1.5"
              >
                {/* Architectural Corner Brackets */}
                <span className="absolute -top-1.5 -left-1.5 text-xs text-[#d4af37] font-mono select-none">┌</span>
                <span className="absolute -top-1.5 -right-1.5 text-xs text-[#d4af37] font-mono select-none">┐</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-xs text-[#d4af37] font-mono select-none">└</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-xs text-[#d4af37] font-mono select-none">┘</span>

                <span className="font-serif-editorial text-3xl sm:text-4xl text-[#ebdca4] tracking-widest font-normal">
                  JAW<span className="text-[#dc2626]">.</span>
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  SYSTEMS & ARCHITECTURE
                </span>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
