import React from "react";

interface GlitchlessLogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: "light" | "dark";
}

/**
 * Glitchless Official Brand Emblem
 * Precision geometric autonomous loop — continuous intelligence without human latency.
 * Sits cleanly without heavy boxes or amateur borders.
 */
export function GlitchlessLogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Glitchless Logo Mark"
    >
      <defs>
        {/* Primary gradient: Vibrant Royal Blue -> Deep Indigo */}
        <linearGradient id="glitchlessGradA" x1="2" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        {/* Dynamic accent gradient: Luminous Cyan -> Electric Cobalt */}
        <linearGradient id="glitchlessGradB" x1="30" y1="6" x2="6" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="60%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>

        {/* Glow filter for core */}
        <filter id="glitchlessCoreGlow" x="6" y="6" width="20" height="20" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Autonomous Outer Continuous Loop - Smooth Precision Ribbon */}
      <path
        d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16C2.5 23.456 8.544 29.5 16 29.5C21.84 29.5 26.81 25.79 28.67 20.5H23.58C22.08 23.36 19.26 25.3 16 25.3C10.86 25.3 6.7 21.14 6.7 16C6.7 10.86 10.86 6.7 16 6.7C19.26 6.7 22.08 8.64 23.58 11.5H28.67C26.81 6.21 21.84 2.5 16 2.5Z"
        fill="url(#glitchlessGradA)"
      />

      {/* Interlocking Dynamic Impulse Ribbon */}
      <path
        d="M16 8.5C11.86 8.5 8.5 11.86 8.5 16C8.5 20.14 11.86 23.5 16 23.5C19.45 23.5 22.37 21.17 23.23 18H18.5C17.84 19.22 16.58 20 15.15 20C12.94 20 11.15 18.21 11.15 16C11.15 13.79 12.94 12 15.15 12C16.58 12 17.84 12.78 18.5 14H23.23C22.37 10.83 19.45 8.5 16 8.5Z"
        fill="url(#glitchlessGradB)"
      />

      {/* Autonomous Core Nexus Point */}
      <circle cx="16" cy="16" r="2.4" fill="#06B6D4" filter="url(#glitchlessCoreGlow)" />
      <circle cx="16" cy="16" r="1.3" fill="#FFFFFF" />
    </svg>
  );
}

export function GlitchlessLogo({
  className = "",
  iconOnly = false,
  variant = "light",
}: GlitchlessLogoProps) {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* High-Tech Vector Mark */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <GlitchlessLogoIcon className="w-8 h-8 sm:w-8.5 sm:h-8.5" />
      </div>

      {!iconOnly && (
        <div className="flex items-center gap-2">
          <span
            className={`text-[21px] sm:text-[22px] font-black tracking-[-0.04em] leading-none transition-colors ${
              isDark ? "text-white" : "text-slate-950 group-hover:text-blue-600"
            }`}
          >
            Glitchless
          </span>
          <span
            className={`text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
              isDark
                ? "bg-white/10 text-slate-300 border border-white/10"
                : "bg-slate-100 text-slate-600 border border-slate-200/80"
            }`}
          >
            SYSTEMS
          </span>
        </div>
      )}
    </div>
  );
}

export const OpsaraLogo = GlitchlessLogo;
export const OpsaraLogoIcon = GlitchlessLogoIcon;
