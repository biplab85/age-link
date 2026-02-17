"use client";

import { motion } from "framer-motion";

interface SVGBackgroundProps {
  variant?: "hero" | "gradient" | "light" | "dark";
  className?: string;
}

export default function SVGBackground({ variant = "hero", className }: SVGBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`} aria-hidden="true">
        {/* Large soft blob — top right */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] opacity-[0.035]"
        >
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M300 60C420 60 540 160 540 300C540 440 420 540 300 540C180 540 60 440 60 300C60 160 180 60 300 60Z"
              fill="currentColor"
              className="text-primary"
              animate={{
                d: [
                  "M300 60C420 60 540 160 540 300C540 440 420 540 300 540C180 540 60 440 60 300C60 160 180 60 300 60Z",
                  "M300 80C400 40 560 180 530 320C500 440 380 560 260 530C140 500 30 390 70 280C110 170 200 120 300 80Z",
                  "M300 60C420 60 540 160 540 300C540 440 420 540 300 540C180 540 60 440 60 300C60 160 180 60 300 60Z",
                ],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Soft ring — center left */}
        <motion.div
          animate={{ y: [-8, 12, -8], x: [-4, 6, -4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[5%]"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-[0.06]">
            <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="1" className="text-primary" />
          </svg>
        </motion.div>

        {/* Double ring — bottom right */}
        <motion.div
          animate={{ y: [6, -10, 6], x: [4, -6, 4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[10%]"
        >
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="opacity-[0.04]">
            <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <circle cx="80" cy="80" r="52" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </svg>
        </motion.div>

        {/* Small dot grid — bottom left */}
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[8%]"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor" className="text-primary">
            {Array.from({ length: 16 }).map((_, i) => (
              <circle key={i} cx={(i % 4) * 22 + 8} cy={Math.floor(i / 4) * 22 + 8} r="1.5" />
            ))}
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`} aria-hidden="true">
        {/* Flowing organic shape — right */}
        <motion.div
          animate={{ y: [-6, 10, -6], rotate: [0, 3, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-32 w-[500px] h-[500px] opacity-[0.04]"
        >
          <svg viewBox="0 0 500 500" fill="none">
            <motion.path
              d="M250 40C370 50 460 150 450 270C440 390 340 460 230 450C120 440 40 340 50 230C60 120 140 30 250 40Z"
              fill="currentColor"
              className="text-primary"
              animate={{
                d: [
                  "M250 40C370 50 460 150 450 270C440 390 340 460 230 450C120 440 40 340 50 230C60 120 140 30 250 40Z",
                  "M260 60C360 30 470 160 440 280C410 400 300 470 200 440C100 410 20 310 60 210C100 110 160 90 260 60Z",
                  "M250 40C370 50 460 150 450 270C440 390 340 460 230 450C120 440 40 340 50 230C60 120 140 30 250 40Z",
                ],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Soft ring — left */}
        <motion.div
          animate={{ y: [5, -8, 5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] -left-16"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="opacity-[0.04]">
            <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.75" className="text-primary" />
            <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`} aria-hidden="true">
        <svg className="absolute -top-16 -right-16 w-72 h-72 opacity-[0.025]" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="1" className="text-primary" />
          <circle cx="150" cy="150" r="95" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </svg>
        <svg className="absolute -bottom-12 -left-12 w-48 h-48 opacity-[0.02] text-primary" viewBox="0 0 200 200" fill="currentColor">
          {Array.from({ length: 9 }).map((_, i) => (
            <circle key={i} cx={(i % 3) * 60 + 40} cy={Math.floor(i / 3) * 60 + 40} r="2" />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`} aria-hidden="true">
        <motion.div
          animate={{ y: [-6, 8, -6], x: [4, -6, 4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-[400px] h-[400px] opacity-[0.06]"
        >
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" className="text-primary-light" />
            <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="0.5" className="text-primary-light" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ y: [4, -8, 4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/[0.04]"
        />
      </div>
    );
  }

  return null;
}
