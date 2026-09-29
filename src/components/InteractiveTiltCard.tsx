"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface InteractiveTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  roundedClassName?: string;
}

export function InteractiveTiltCard({
  children,
  className = "",
  maxTilt = 10,
  glareOpacity = 0.16,
  roundedClassName = "rounded-2xl",
}: InteractiveTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Hardware accelerated motion values (zero React re-renders on mousemove)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 260,
    damping: 20,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 260,
    damping: 20,
    mass: 0.6,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x);
      mouseY.set(y);

      const glX = ((e.clientX - rect.left) / rect.width) * 100;
      const glY = ((e.clientY - rect.top) / rect.height) * 100;
      cardRef.current.style.setProperty("--tilt-glare-x", `${glX.toFixed(1)}%`);
      cardRef.current.style.setProperty("--tilt-glare-y", `${glY.toFixed(1)}%`);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1100px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.025 : 1,
          translateZ: isHovered ? 16 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 0.6,
        }}
        className={`relative w-full h-full ${roundedClassName} overflow-hidden will-change-transform`}
      >
        {children}

        {/* Dynamic Specular Sheen Glare - Hardware accelerated via CSS custom properties */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ${roundedClassName} overflow-hidden z-30 transition-opacity duration-300 hidden md:block ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle 320px at var(--tilt-glare-x, 50%) var(--tilt-glare-y, 50%), rgba(212, 175, 55, ${glareOpacity * 1.2}) 0%, rgba(255, 255, 255, ${glareOpacity * 0.8}) 20%, transparent 70%)`,
            mixBlendMode: "screen",
          }}
        />
      </motion.div>
    </div>
  );
}
