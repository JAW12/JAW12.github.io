"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface ProjectLightboxViewerProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  projectTitle: string;
}

export function ProjectLightboxViewer({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  projectTitle,
}: ProjectLightboxViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setScale(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((p) => (p > 0 ? p - 1 : images.length - 1));
      if (e.key === "ArrowRight") setCurrentIndex((p) => (p < images.length - 1 ? p + 1 : 0));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  const validImages = (images || []).filter(
    (img): img is string => typeof img === "string" && img.trim().length > 0
  );
  const safeImages =
    validImages.length > 0
      ? validImages
      : ["/assets/projects/secret-of-life/white_desk.webp"];
  const safeCurrentIndex =
    currentIndex >= 0 && currentIndex < safeImages.length ? currentIndex : 0;

  if (!mounted || !isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-xl select-none"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="space-y-0.5">
            <span className="font-mono text-xs text-[#d4af37] uppercase tracking-widest block">
              LIGHTBOX INSPECTION ({currentIndex + 1} / {images.length})
            </span>
            <h4 className="font-serif-editorial text-lg text-white font-medium">
              {projectTitle}
            </h4>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setScale((s) => Math.min(s + 0.25, 2.5))}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale((s) => Math.max(s - 0.25, 1))}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors cursor-pointer"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Stage */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full max-w-6xl max-h-[75vh]"
          >
            <Image
              src={safeImages[safeCurrentIndex]}
              alt={`${projectTitle} frame ${safeCurrentIndex + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
              priority
              quality={75}
            />
          </motion.div>

          {/* Navigation Chevrons */}
          {safeImages.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((p) => (p > 0 ? p - 1 : safeImages.length - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentIndex((p) => (p < safeImages.length - 1 ? p + 1 : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Thumbnail Strip Scrubber */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 border-t border-white/10">
          {safeImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setScale(1);
              }}
              className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                safeCurrentIndex === idx
                  ? "border-[#d4af37] ring-2 ring-[#d4af37]"
                  : "border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumb ${idx + 1}`}
                fill
                loading="lazy"
                sizes="64px"
                quality={75}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
