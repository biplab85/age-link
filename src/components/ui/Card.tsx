"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "rounded-2xl p-6 lg:p-8",
        glass
          ? "bg-white/60 dark:bg-surface-elevated/60 backdrop-blur-lg border border-white/50 dark:border-neutral-300/20 shadow-[var(--shadow-xs)]"
          : "bg-white dark:bg-surface-elevated border border-neutral-200/50 dark:border-neutral-300/30 shadow-[var(--shadow-card)]",
        hover &&
          "transition-all duration-400 ease-[var(--ease-smooth)] hover:shadow-[var(--shadow-card-hover)] hover:border-primary/12",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
