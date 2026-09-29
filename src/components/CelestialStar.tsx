import React from "react";

interface CelestialStarProps {
  className?: string;
}

/**
 * 4-Point Geometric Polaris Star (Cartographic & Astronomical Navigation Reticle)
 * An authentic astronomical vector star symbol representing the Space Museum theme.
 */
export function CelestialStar({ className = "w-4 h-4" }: CelestialStarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
    </svg>
  );
}

/**
 * 8-Point Compass Rose / Astrolabe Star for secondary telemetry accents
 */
export function AstrolabeStar({ className = "w-4 h-4" }: CelestialStarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0L13.8 8.2L19.8 4.2L15.8 10.2L24 12L15.8 13.8L19.8 19.8L13.8 15.8L12 24L10.2 15.8L4.2 19.8L8.2 13.8L0 12L8.2 10.2L4.2 4.2L10.2 8.2L12 0Z" />
    </svg>
  );
}
