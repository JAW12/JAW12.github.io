"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export type RevealVariant =
  | "fade-up"         // Classic smooth celestial rise
  | "vitrine-dock"    // 3D museum vitrine lowering into dock (rotateX + scale + blur fade)
  | "horizon-expand"  // Observatory horizontal axis expanding from left
  | "telemetry"       // Typographic astronomical calibration (letter-spacing snap + de-blur)
  | "stagger-left"    // Gentle horizontal drift from left (coordinates entry)
  | "stagger-right"   // Gentle horizontal drift from right
  | "zero-g";         // Microgravity float

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  variant?: RevealVariant;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 36,
  variant = "fade-up",
  once = true,
}: ScrollRevealProps) {
  // Preset animation configurations tailored for the Space Museum aesthetic
  const getVariants = (): Variants => {
    switch (variant) {
      case "vitrine-dock":
        return {
          hidden: {
            opacity: 0,
            y: yOffset,
            rotateX: 7,
            scale: 0.97,
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1.1,
              delay,
              ease: [0.16, 1, 0.3, 1], // Silk deceleration
            },
          },
        };

      case "horizon-expand":
        return {
          hidden: {
            scaleX: 0,
            opacity: 0,
            transformOrigin: "left center",
          },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
              duration: 0.95,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        };

      case "telemetry":
        return {
          hidden: {
            opacity: 0,
            y: 12,
            filter: "blur(5px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.85,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };

      case "stagger-left":
        return {
          hidden: {
            opacity: 0,
            x: -28,
            filter: "blur(6px)",
          },
          visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.95,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };

      case "stagger-right":
        return {
          hidden: {
            opacity: 0,
            x: 28,
            filter: "blur(6px)",
          },
          visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.95,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };

      case "zero-g":
        return {
          hidden: {
            opacity: 0,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1.0,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };

      case "fade-up":
      default:
        return {
          hidden: {
            opacity: 0,
            y: yOffset,
            filter: "blur(6px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.95,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin: "0px 0px -70px 0px",
        amount: 0.1,
      }}
      className={className}
      style={{ perspective: variant === "vitrine-dock" ? "1200px" : undefined }}
    >
      {children}
    </motion.div>
  );
}
