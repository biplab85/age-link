"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  tag?: string;
}

/* ─── Medical decorative SVG ─── */
function MedicalSvg({ flip, light }: { flip?: boolean; light?: boolean }) {
  const c = light ? "rgba(255,255,255,0.25)" : "var(--color-primary)";
  return (
    <svg
      className={cn(
        "hidden sm:block w-20 lg:w-24 h-7 flex-shrink-0 opacity-30",
        flip && "scale-x-[-1]"
      )}
      viewBox="0 0 120 28"
      fill="none"
      aria-hidden="true"
    >
      {/* ECG heartbeat line */}
      <path
        d="M0 14 L18 14 L24 14 L28 4 L34 24 L40 8 L44 18 L48 14 L62 14"
        stroke={c}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Connecting line to cross */}
      <path
        d="M62 14 L78 14"
        stroke={c}
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      {/* Medical cross */}
      <rect x="82" y="9" width="8" height="10" rx="1.5" fill={c} opacity="0.35" />
      <rect x="80" y="11" width="12" height="6" rx="1.5" fill={c} opacity="0.35" />
      {/* Stethoscope bell */}
      <path
        d="M102 10 Q102 6, 108 6 Q114 6, 114 10"
        stroke={c}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="108" cy="14" r="3.5" stroke={c} strokeWidth="1" fill="none" />
      <circle cx="108" cy="14" r="1.2" fill={c} opacity="0.4" />
    </svg>
  );
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
  tag,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={cn("mb-12 lg:mb-16", centered && "text-center", className)}
    >
      {tag && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-3",
            light ? "text-primary-light/80" : "text-primary"
          )}
        >
          {tag}
        </span>
      )}
      <div className={cn("flex items-center gap-3 sm:gap-4", centered && "justify-center")}>
        <MedicalSvg light={light} />
        <h2
          className={cn(
            "font-heading text-3xl font-bold sm:text-4xl lg:text-[2.625rem] leading-tight",
            light ? "text-white" : "text-secondary"
          )}
        >
          {title}
        </h2>
        <MedicalSvg flip light={light} />
      </div>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-[17px] max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/60" : "text-neutral-500"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 flex gap-1.5",
          centered && "justify-center"
        )}
      >
        <span className={cn("h-1 w-8 rounded-full", light ? "bg-white/30" : "bg-primary")} />
        <span className={cn("h-1 w-3 rounded-full", light ? "bg-white/15" : "bg-primary/30")} />
      </div>
    </motion.div>
  );
}
