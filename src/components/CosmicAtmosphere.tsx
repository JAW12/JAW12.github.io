"use client";

import React, { useEffect, useRef } from "react";

/**
 * CosmicAtmosphere Component (Minimalist Elegant Space)
 * 
 * Re-engineered for pure, serene, high-end minimalism:
 * 1. Pristine Deep Obsidian Black Canvas (No dirty noise or grainy sandpaper)
 * 2. Subtle Lunar / Planetary Horizon & Ethereal Aurora Veil at the upper atmosphere
 * 3. Interactive Floating Stardust & Constellation Particles reacting smoothly to mouse motion
 * 4. Zero clutter: no heavy grids, no corner stamps, 100% refined elegance
 */
export function CosmicAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse with smooth dampening
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let isRunning = true;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        if (animId) cancelAnimationFrame(animId);
      } else {
        if (!isRunning) {
          isRunning = true;
          animId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      currentAlpha: number;
      gold: boolean;
      twinkleSpeed: number;
      phase: number;
    }

    let particles: Particle[] = [];
    const isMobile = width < 768;
    const count = isMobile ? Math.min(25, Math.floor((width * height) / 38000)) : Math.min(65, Math.floor((width * height) / 28000));

    const initParticles = () => {
      particles = [];
      const currentIsMobile = width < 768;
      const currentCount = currentIsMobile ? Math.min(25, Math.floor((width * height) / 38000)) : Math.min(65, Math.floor((width * height) / 28000));
      for (let i = 0; i < currentCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.25),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.25),
          size: Math.random() < 0.25 ? 1.8 : Math.random() < 0.6 ? 1.2 : 0.8,
          baseAlpha: Math.random() * 0.45 + 0.25,
          currentAlpha: 0.3,
          gold: Math.random() > 0.4,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    // Throttle to 30fps — particle drift is subtle, imperceptible at 30fps vs 60fps
    // Halves GPU work on integrated graphics / mobile
    const FRAME_INTERVAL = 1000 / 30;
    let lastFrameTime = 0;

    const render = (timestamp: number) => {
      if (!isRunning) return;

      // Skip frame if not enough time has passed (30fps cap)
      if (timestamp - lastFrameTime < FRAME_INTERVAL) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, width, height);

      const isFinePointer = window.matchMedia("(pointer: fine)").matches;

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Zero-G drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Organic twinkle
        p.phase += p.twinkleSpeed;
        const twinkle = Math.sin(p.phase) * 0.2;
        p.currentAlpha = Math.max(0.1, Math.min(1, p.baseAlpha + twinkle));

        // Interactive mouse interaction (desktop fine-pointer only)
        if (isFinePointer && mouse.x > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.5;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
            p.currentAlpha = Math.min(1, p.currentAlpha + 0.4);
          }

          // Connect nearby particles near cursor with faint celestial filaments
          if (dist < mouse.radius * 1.2 && !isMobile) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const p2Dx = p2.x - p.x;
              const p2Dy = p2.y - p.y;
              const p2Dist = Math.sqrt(p2Dx * p2Dx + p2Dy * p2Dy);

              if (p2Dist < 85) {
                const lineAlpha = (1 - p2Dist / 85) * 0.22;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
                ctx.lineWidth = 0.6;
                ctx.shadowBlur = 0;
                ctx.stroke();
              }
            }
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(235, 220, 164, ${p.currentAlpha})`
          : `rgba(255, 255, 255, ${p.currentAlpha})`;
        ctx.shadowBlur = p.size > 1.2 ? 6 : 0;
        ctx.shadowColor = p.gold ? "rgba(212, 175, 55, 0.6)" : "rgba(255, 255, 255, 0.4)";
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Pristine Deep Obsidian Black Canvas Base (#08080a) */}
      <div className="absolute inset-0 bg-[#08080a]" />

      {/* 2. Celestial Lunar / Blurred Planetary Horizon (Minimalist & Serene) */}
      <div className="absolute top-0 inset-x-0 h-[480px] overflow-hidden pointer-events-none">
        {/* Soft Golden Planetary Atmosphere Glow */}
        <div
          className="absolute -top-[240px] left-1/2 -translate-x-1/2 w-[140vw] max-w-[1400px] h-[480px] rounded-[100%] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(212, 175, 55, 0.08) 0%, rgba(99, 102, 241, 0.03) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Whisper-Thin Planetary Horizon Arc */}
        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[70vw] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent pointer-events-none" />

        {/* Soft Ethereal Aurora Ribbon */}
        <div
          className="absolute top-[20px] left-[15%] w-[45vw] h-[180px] rounded-full pointer-events-none opacity-40 blur-[80px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(56, 189, 248, 0.06), rgba(129, 140, 248, 0.04), transparent)",
          }}
        />
      </div>

      {/* 3. Deep Void Atmosphere (Subtle Crimson & Gold Whispers at Periphery) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Warm Amber Dust at Bottom Right */}
        <div
          className="absolute -bottom-[10%] -right-[5%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full pointer-events-none opacity-30 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, rgba(220, 38, 38, 0.03) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* 4. Interactive Stardust & Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 5. Minimalist Optical Vignette (Framing the Exhibit Without Muddying the Center) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 60%, rgba(6, 6, 8, 0.6) 100%)",
        }}
      />
    </div>
  );
}
