"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CathubLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  mode?: "login" | "register";
}

export function CathubLogo({ size = "md", className, mode }: CathubLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-lg",
    lg: "w-16 h-16 text-2xl",
  };

  return (
    <motion.div
      className={cn(
        "relative flex items-center justify-center rounded-xl bg-primary shadow-md",
        sizeClasses[size],
        className,
      )}
      animate={{
        rotateY: mode === "register" ? 180 : 0,
        scale: mode === "register" ? 1.05 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* Cat face SVG */}
      <svg
        viewBox="0 0 100 100"
        className="w-3/4 h-3/4 text-primary-foreground"
        fill="currentColor"
      >
        {/* Ears */}
        <path d="M20 45 L30 15 L45 40 Z" />
        <path d="M80 45 L70 15 L55 40 Z" />
        {/* Inner ears */}
        <path
          d="M25 40 L32 22 L42 38 Z"
          className="text-primary opacity-60"
          fill="currentColor"
        />
        <path
          d="M75 40 L68 22 L58 38 Z"
          className="text-primary opacity-60"
          fill="currentColor"
        />
        {/* Head */}
        <ellipse cx="50" cy="55" rx="35" ry="30" />
        {/* Eyes */}
        <ellipse
          cx="38"
          cy="50"
          rx="6"
          ry="8"
          className="text-primary"
          fill="currentColor"
        />
        <ellipse
          cx="62"
          cy="50"
          rx="6"
          ry="8"
          className="text-primary"
          fill="currentColor"
        />
        {/* Eye shine */}
        <circle
          cx="40"
          cy="48"
          r="2"
          className="text-primary-foreground"
          fill="currentColor"
        />
        <circle
          cx="64"
          cy="48"
          r="2"
          className="text-primary-foreground"
          fill="currentColor"
        />
        {/* Nose */}
        <path
          d="M50 58 L46 64 L54 64 Z"
          className="text-primary"
          fill="currentColor"
        />
        {/* Mouth */}
        <path
          d="M50 64 Q45 72 38 68"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />
        <path
          d="M50 64 Q55 72 62 68"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />
        {/* Whiskers */}
        <line
          x1="20"
          y1="55"
          x2="35"
          y2="58"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        />
        <line
          x1="20"
          y1="62"
          x2="35"
          y2="62"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        />
        <line
          x1="65"
          y1="58"
          x2="80"
          y2="55"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        />
        <line
          x1="65"
          y1="62"
          x2="80"
          y2="62"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary"
        />
        {/* Forehead marking */}
        <circle
          cx="50"
          cy="38"
          r="3"
          className="text-primary"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}
