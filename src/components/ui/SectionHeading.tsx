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
      <h2
        className={cn(
          "font-heading text-3xl font-bold sm:text-4xl lg:text-[2.625rem] leading-tight",
          light ? "text-white" : "text-secondary"
        )}
      >
        {title}
      </h2>
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
