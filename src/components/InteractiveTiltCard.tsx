"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Noticeable 3D Tilt angles (amplified for tactile response)
      const rotX = ((y - centerY) / centerY) * -maxTilt;
      const rotY = ((x - centerX) / centerX) * maxTilt;

      // Specular sheen highlight coordinate
      const glX = (x / rect.width) * 100;
      const glY = (y / rect.height) * 100;

      setRotateX(rotX);
      setRotateY(rotY);
      setGlarePos({ x: glX, y: glY });
    },
    [maxTilt]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
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
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.025 : 1,
          translateZ: isHovered ? 16 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 0.6,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full ${roundedClassName} overflow-hidden will-change-transform`}
      >
        {children}

        {/* Dynamic Specular Sheen Glare - Strictly rounded & clipped to prevent sharp rectangle borders */}
        {isHovered && (
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 ${roundedClassName} overflow-hidden z-30 transition-opacity duration-300 hidden md:block`}
            style={{
              background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(212, 175, 55, ${glareOpacity * 1.2}) 0%, rgba(255, 255, 255, ${glareOpacity * 0.8}) 20%, transparent 70%)`,
              mixBlendMode: "screen",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
