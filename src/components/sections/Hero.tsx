"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SVGBackground from "@/components/shared/SVGBackground";
import { heroContent } from "@/data/content";

/* ─── Floating doctor equipment decorations ─── */
function HeroDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft background blobs */}
      <motion.div
        className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full bg-primary/[0.04]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.08, 0.95, 1], x: [0, 15, -10, 0], y: [0, -10, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-16 w-[260px] h-[260px] rounded-full bg-accent/[0.05]"
        style={{ filter: "blur(60px)" }}
        animate={{ scale: [1, 1.12, 0.96, 1], x: [0, -12, 8, 0], y: [0, 8, -14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Stethoscope — top-left area ── */}
      <motion.svg
        className="absolute top-[8%] left-[3%] w-16 h-16 lg:w-20 lg:h-20"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.g
          animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Earpieces */}
          <path d="M22 8 L22 14" stroke="#00809f" strokeWidth="2.5" strokeLinecap="round" opacity="0.18" />
          <path d="M30 8 L30 14" stroke="#00809f" strokeWidth="2.5" strokeLinecap="round" opacity="0.18" />
          <circle cx="22" cy="7" r="2.5" fill="#00809f" opacity="0.15" />
          <circle cx="30" cy="7" r="2.5" fill="#00809f" opacity="0.15" />
          {/* Y connector */}
          <path d="M22 14 Q22 20 26 22 Q30 20 30 14" stroke="#00809f" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.18" />
          {/* Tube */}
          <path d="M26 22 Q26 34 20 40 Q14 46 18 54" stroke="#00809f" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.18" />
          {/* Chest piece */}
          <circle cx="18" cy="54" r="6" stroke="#00809f" strokeWidth="2" fill="#00809f" opacity="0.08" />
          <circle cx="18" cy="54" r="3" fill="#00809f" opacity="0.12" />
        </motion.g>
      </motion.svg>

      {/* ── Heartbeat / Pulse line — bottom-left ── */}
      <motion.svg
        className="absolute bottom-[15%] left-[5%] w-28 h-12 lg:w-36 lg:h-14"
        viewBox="0 0 120 40"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <motion.path
          d="M0 20 L20 20 L28 20 L33 6 L38 34 L43 14 L48 26 L53 20 L70 20 L120 20"
          stroke="#00809f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.14"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.svg>

      {/* ── Pill capsule — top-right of left column ── */}
      <motion.svg
        className="absolute top-[12%] left-[38%] w-10 h-10 lg:w-14 lg:h-14 hidden sm:block"
        viewBox="0 0 48 48"
        fill="none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.g
          animate={{ y: [-4, 6, -4], rotate: [15, 25, 15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="14" y="8" width="16" height="32" rx="8" stroke="#00809f" strokeWidth="1.8" fill="none" opacity="0.13" />
          <rect x="14" y="8" width="16" height="16" rx="8" fill="#00809f" opacity="0.08" />
          <line x1="14" y1="24" x2="30" y2="24" stroke="#00809f" strokeWidth="1" opacity="0.1" />
        </motion.g>
      </motion.svg>

      {/* ── Medical clipboard — mid-left ── */}
      <motion.svg
        className="absolute top-[55%] left-[1%] w-12 h-12 lg:w-16 lg:h-16"
        viewBox="0 0 56 56"
        fill="none"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <motion.g
          animate={{ y: [3, -5, 3], rotate: [-2, 4, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {/* Board */}
          <rect x="10" y="12" width="32" height="40" rx="3" stroke="#00809f" strokeWidth="1.8" fill="#00809f" opacity="0.05" />
          {/* Clip */}
          <rect x="19" y="8" width="14" height="8" rx="2" stroke="#00809f" strokeWidth="1.8" fill="none" opacity="0.15" />
          {/* Lines */}
          <line x1="16" y1="26" x2="36" y2="26" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.10" />
          <line x1="16" y1="32" x2="32" y2="32" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.08" />
          <line x1="16" y1="38" x2="34" y2="38" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.08" />
          <line x1="16" y1="44" x2="28" y2="44" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.06" />
          {/* Checkmark on first line */}
          <path d="M16 21 L18.5 23.5 L23 18" stroke="#e8a838" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.18" />
        </motion.g>
      </motion.svg>

      {/* ── Heart with pulse — center top ── */}
      <motion.svg
        className="absolute top-[4%] left-[22%] w-10 h-10 lg:w-12 lg:h-12 hidden md:block"
        viewBox="0 0 44 44"
        fill="none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <motion.g
          animate={{ scale: [1, 1.12, 1], y: [-2, 3, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M22 36 C14 30, 4 22, 4 14 C4 8, 8 4, 14 4 C18 4, 20.5 6.5, 22 10 C23.5 6.5, 26 4, 30 4 C36 4, 40 8, 40 14 C40 22, 30 30, 22 36Z"
            fill="#00809f"
            opacity="0.07"
          />
          <path
            d="M22 36 C14 30, 4 22, 4 14 C4 8, 8 4, 14 4 C18 4, 20.5 6.5, 22 10 C23.5 6.5, 26 4, 30 4 C36 4, 40 8, 40 14 C40 22, 30 30, 22 36Z"
            stroke="#00809f"
            strokeWidth="1.5"
            fill="none"
            opacity="0.14"
          />
          {/* Pulse line inside heart */}
          <path d="M10 18 L16 18 L19 12 L22 24 L25 16 L28 18 L34 18" stroke="#00809f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.16" />
        </motion.g>
      </motion.svg>

      {/* ── Syringe — bottom-right of left column ── */}
      <motion.svg
        className="absolute bottom-[25%] left-[35%] w-10 h-10 lg:w-14 lg:h-14 hidden lg:block"
        viewBox="0 0 52 52"
        fill="none"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 1.6 }}
      >
        <motion.g
          animate={{ y: [-3, 5, -3], rotate: [30, 40, 30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          {/* Barrel */}
          <rect x="18" y="10" width="10" height="28" rx="2" stroke="#00809f" strokeWidth="1.8" fill="#00809f" opacity="0.05" />
          {/* Plunger */}
          <line x1="23" y1="4" x2="23" y2="12" stroke="#00809f" strokeWidth="2" strokeLinecap="round" opacity="0.13" />
          <line x1="19" y1="4" x2="27" y2="4" stroke="#00809f" strokeWidth="2" strokeLinecap="round" opacity="0.13" />
          {/* Needle */}
          <line x1="23" y1="38" x2="23" y2="48" stroke="#00809f" strokeWidth="1.2" strokeLinecap="round" opacity="0.15" />
          {/* Measurement lines */}
          <line x1="20" y1="18" x2="24" y2="18" stroke="#00809f" strokeWidth="1" opacity="0.10" />
          <line x1="20" y1="24" x2="24" y2="24" stroke="#00809f" strokeWidth="1" opacity="0.10" />
          <line x1="20" y1="30" x2="24" y2="30" stroke="#00809f" strokeWidth="1" opacity="0.10" />
        </motion.g>
      </motion.svg>

      {/* ── Thermometer — far left mid ── */}
      <motion.svg
        className="absolute top-[38%] left-[42%] w-8 h-8 lg:w-11 lg:h-11 hidden sm:block"
        viewBox="0 0 40 40"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.g
          animate={{ y: [4, -4, 4], rotate: [-10, -5, -10] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          {/* Body */}
          <rect x="16" y="4" width="8" height="22" rx="4" stroke="#00809f" strokeWidth="1.5" fill="none" opacity="0.13" />
          {/* Bulb */}
          <circle cx="20" cy="30" r="5" stroke="#00809f" strokeWidth="1.5" fill="#e8a838" opacity="0.10" />
          <circle cx="20" cy="30" r="3" fill="#e8a838" opacity="0.12" />
          {/* Mercury line */}
          <line x1="20" y1="28" x2="20" y2="14" stroke="#e8a838" strokeWidth="2" strokeLinecap="round" opacity="0.12" />
          {/* Tick marks */}
          <line x1="24" y1="10" x2="26" y2="10" stroke="#00809f" strokeWidth="1" opacity="0.08" />
          <line x1="24" y1="15" x2="26" y2="15" stroke="#00809f" strokeWidth="1" opacity="0.08" />
          <line x1="24" y1="20" x2="26" y2="20" stroke="#00809f" strokeWidth="1" opacity="0.08" />
        </motion.g>
      </motion.svg>

      {/* ── Medical cross — small accent ── */}
      <motion.svg
        className="absolute top-[22%] left-[15%] w-7 h-7 lg:w-9 lg:h-9"
        viewBox="0 0 32 32"
        fill="none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.0 }}
      >
        <motion.g
          animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="12" y="4" width="8" height="24" rx="3" fill="#00809f" opacity="0.10" />
          <rect x="4" y="12" width="24" height="8" rx="3" fill="#00809f" opacity="0.10" />
        </motion.g>
      </motion.svg>

      {/* ── DNA helix — bottom area ── */}
      <motion.svg
        className="absolute bottom-[8%] left-[18%] w-12 h-16 lg:w-14 lg:h-20 hidden md:block"
        viewBox="0 0 40 60"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <motion.g
          animate={{ y: [-3, 5, -3], rotate: [0, 5, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Left strand */}
          <path d="M8 4 Q20 14 8 24 Q-4 34 8 44 Q20 54 8 60" stroke="#00809f" strokeWidth="1.5" fill="none" opacity="0.12" strokeLinecap="round" />
          {/* Right strand */}
          <path d="M32 4 Q20 14 32 24 Q44 34 32 44 Q20 54 32 60" stroke="#00809f" strokeWidth="1.5" fill="none" opacity="0.12" strokeLinecap="round" />
          {/* Rungs */}
          <line x1="12" y1="14" x2="28" y2="14" stroke="#e8a838" strokeWidth="1.2" opacity="0.10" strokeLinecap="round" />
          <line x1="8" y1="24" x2="32" y2="24" stroke="#00809f" strokeWidth="1.2" opacity="0.08" strokeLinecap="round" />
          <line x1="12" y1="34" x2="28" y2="34" stroke="#e8a838" strokeWidth="1.2" opacity="0.10" strokeLinecap="round" />
          <line x1="8" y1="44" x2="32" y2="44" stroke="#00809f" strokeWidth="1.2" opacity="0.08" strokeLinecap="round" />
        </motion.g>
      </motion.svg>

      {/* ── Shield / protection badge — top right of left column ── */}
      <motion.svg
        className="absolute top-[30%] left-[40%] w-8 h-8 lg:w-10 lg:h-10 hidden lg:block"
        viewBox="0 0 36 36"
        fill="none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      >
        <motion.g
          animate={{ y: [-3, 4, -3], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <path d="M18 3 L31 9 L31 18 C31 26, 25 31, 18 34 C11 31, 5 26, 5 18 L5 9 Z" stroke="#00809f" strokeWidth="1.5" fill="#00809f" opacity="0.06" />
          {/* Cross inside */}
          <rect x="15" y="12" width="6" height="14" rx="2" fill="#00809f" opacity="0.12" />
          <rect x="11" y="16" width="14" height="6" rx="2" fill="#00809f" opacity="0.12" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-primary-lighter via-white to-white dark:from-[#0d1c28] dark:via-surface dark:to-surface"
    >
      <SVGBackground variant="hero" />

      {/* Abstract decoration layer */}
      <HeroDecoration />

      {/* Soft radial glow */}
      <div
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative z-[2] py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/[0.06] dark:bg-primary/[0.12] border border-primary/[0.08] dark:border-primary/[0.2] text-primary text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Specialist Geriatric Medicine
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-secondary leading-[1.08] mb-7"
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg sm:text-[19px] text-neutral-500 leading-relaxed mb-10 max-w-lg"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                href={heroContent.primaryCTA.href}
                size="hero"
                className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_2px_8px_rgba(0,128,159,0.3),0_6px_24px_rgba(0,128,159,0.15)] hover:shadow-[0_4px_12px_rgba(0,128,159,0.4),0_8px_32px_rgba(0,128,159,0.2)] hover:scale-[1.02] focus-visible:ring-primary/40"
              >
                {/* Calendar icon */}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {heroContent.primaryCTA.label}
                <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                href={heroContent.secondaryCTA.href}
                variant="secondary"
                size="lg"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              >
                {heroContent.secondaryCTA.label}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2.5"
            >
              {heroContent.trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-surface-elevated border border-neutral-200/60 dark:border-neutral-300/25 text-xs font-medium text-neutral-600 shadow-[var(--shadow-xs)]"
                >
                  <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Soft decorative backdrop */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/[0.06] to-primary-dark/[0.03] -rotate-2" aria-hidden="true" />

            {/* Real image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <Image
                src="/hero-doctor.jpg"
                alt="Doctor consulting with an elderly patient in a clinic"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 -left-5 bg-white dark:bg-surface-elevated rounded-xl shadow-[var(--shadow-elevated)] p-4 flex items-center gap-3 border border-neutral-100 dark:border-neutral-200/50"
            >
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-secondary">30+ Years</p>
                <p className="text-xs text-neutral-500">Clinical Experience</p>
              </div>
            </motion.div>

            {/* Floating trust badge */}
            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-6 -right-4 bg-white dark:bg-surface-elevated rounded-xl shadow-[var(--shadow-elevated)] p-3 flex items-center gap-2.5 border border-neutral-100 dark:border-neutral-200/50"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1l2.928 1.664L16 3.464l.8 3.072L18.4 9.5l-1.6 2.964.8 3.072-3.072.8L12.928 19 10 17.336 7.072 19l-2.6-2.664-3.072-.8.8-3.072L.6 9.5l1.6-2.964-.8-3.072 3.072-.8L7.072 1 10 1zm3.857 7.357a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-secondary">Specialist</p>
                <p className="text-[10px] text-neutral-500">Accredited</p>
              </div>
            </motion.div>
          </motion.div>

          {/* SVG Illustration (hidden, kept for future use) */}
          <div className="hidden">
            <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full max-w-[500px]">
              <defs>
                {/* Skin gradients */}
                <linearGradient id="skinDoc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FADCB4" />
                  <stop offset="100%" stopColor="#E8C49A" />
                </linearGradient>
                <linearGradient id="skinPat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5D4A8" />
                  <stop offset="100%" stopColor="#E0BA8E" />
                </linearGradient>
                <linearGradient id="coatGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#F0F4F8" />
                </linearGradient>
                <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D6EEF5" />
                  <stop offset="100%" stopColor="#B8DDE8" />
                </linearGradient>
                <linearGradient id="cardiganGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B6E5A" />
                  <stop offset="100%" stopColor="#6B5242" />
                </linearGradient>
                <linearGradient id="hairDoc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3D2E1F" />
                  <stop offset="100%" stopColor="#2A1F14" />
                </linearGradient>
                <linearGradient id="hairPat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4D4D4" />
                  <stop offset="100%" stopColor="#A8A8A8" />
                </linearGradient>
                <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C9A882" />
                  <stop offset="100%" stopColor="#A88B6A" />
                </linearGradient>
                <linearGradient id="deskLeg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A88B6A" />
                  <stop offset="100%" stopColor="#8B7358" />
                </linearGradient>
                <radialGradient id="bgGrad2" cx="0.5" cy="0.45" r="0.5">
                  <stop offset="0%" stopColor="#E8F6FA" />
                  <stop offset="60%" stopColor="#F0F9FC" />
                  <stop offset="100%" stopColor="#F8FCFE" stopOpacity="0" />
                </radialGradient>
                <filter id="shadow1" x="-10%" y="-5%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0A2540" floodOpacity="0.1" />
                </filter>
                <filter id="shadow2" x="-15%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0A2540" floodOpacity="0.12" />
                </filter>
                <filter id="shadowSoft" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0A2540" floodOpacity="0.06" />
                </filter>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <linearGradient id="stethGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4B5563" />
                  <stop offset="100%" stopColor="#374151" />
                </linearGradient>
                <linearGradient id="stethHead" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9CA3AF" />
                  <stop offset="100%" stopColor="#6B7280" />
                </linearGradient>
              </defs>
              <motion.circle cx="260" cy="250" r="220" fill="url(#bgGrad2)" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} />
              <motion.ellipse cx="260" cy="460" rx="200" ry="14" fill="#0A2540" opacity="0.04" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
              <motion.g initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                <rect x="130" y="328" width="240" height="12" rx="3" fill="url(#deskGrad)" filter="url(#shadowSoft)" />
                <line x1="145" y1="332" x2="355" y2="332" stroke="#B8976E" strokeWidth="0.4" opacity="0.3" />
                <line x1="150" y1="335" x2="360" y2="335" stroke="#B8976E" strokeWidth="0.3" opacity="0.2" />
                <rect x="148" y="340" width="204" height="100" rx="2" fill="#B8976E" opacity="0.15" />
                <rect x="148" y="340" width="8" height="115" rx="2" fill="url(#deskLeg)" />
                <rect x="344" y="340" width="8" height="115" rx="2" fill="url(#deskLeg)" />
                <ellipse cx="250" cy="456" rx="110" ry="5" fill="#0A2540" opacity="0.03" />
              </motion.g>
              <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <rect x="200" y="306" width="52" height="22" rx="3" fill="#F0F4F8" stroke="#D1D5DB" strokeWidth="0.8" filter="url(#shadowSoft)" />
                <rect x="206" y="311" width="30" height="2" rx="1" fill="#0080A0" opacity="0.3" />
                <rect x="206" y="316" width="22" height="2" rx="1" fill="#9CA3AF" opacity="0.3" />
                <rect x="206" y="321" width="36" height="2" rx="1" fill="#9CA3AF" opacity="0.2" />
                <rect x="262" y="312" width="3" height="18" rx="1.5" fill="#1E3A5F" transform="rotate(-15 263 321)" />
                <rect x="262" y="308" width="3" height="5" rx="1" fill="#D4AF37" transform="rotate(-15 263 310)" />
                <rect x="310" y="316" width="16" height="12" rx="3" fill="#D4A574" />
                <rect x="312" y="318" width="12" height="8" rx="2" fill="#8B6914" opacity="0.15" />
                <ellipse cx="318" cy="314" rx="8" ry="6" fill="#4CAF50" opacity="0.7" />
                <ellipse cx="315" cy="312" rx="5" ry="4" fill="#66BB6A" opacity="0.6" />
                <ellipse cx="321" cy="311" rx="4" ry="5" fill="#43A047" opacity="0.5" />
              </motion.g>
              <motion.g initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
                <rect x="135" y="350" width="65" height="60" rx="6" fill="#2D3748" opacity="0.08" />
                <rect x="130" y="340" width="75" height="14" rx="5" fill="#4A5568" opacity="0.12" />
                <rect x="128" y="270" width="12" height="80" rx="5" fill="#4A5568" opacity="0.10" />
                <path d="M152 395 L152 448 Q152 452 156 452 L168 452 Q172 452 172 448 L172 395" fill="#2C3E50" />
                <path d="M178 395 L178 448 Q178 452 182 452 L194 452 Q198 452 198 448 L198 395" fill="#2C3E50" />
                <path d="M150 448 Q148 452 150 455 L172 455 Q175 455 175 452 L172 448" fill="#1A1A2E" />
                <path d="M176 448 Q174 452 176 455 L198 455 Q201 455 201 452 L198 448" fill="#1A1A2E" />
                <path d="M148 240 C145 260, 143 300, 145 395 L200 395 C202 300, 200 260, 197 240 Z" fill="url(#shirtGrad)" />
                <path d="M135 225 C132 250, 130 310, 132 400 Q132 405 137 405 L150 405 L150 260 L135 225 Z" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="0.8" />
                <path d="M210 225 C213 250, 215 310, 213 400 Q213 405 208 405 L195 405 L195 260 L210 225 Z" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="0.8" />
                <path d="M155 218 L172 260 L160 260 L148 225 Z" fill="#F0F4F8" />
                <path d="M190 218 L173 260 L185 260 L197 225 Z" fill="#F0F4F8" />
                <circle cx="172" cy="270" r="2" fill="#D1D5DB" />
                <circle cx="172" cy="290" r="2" fill="#D1D5DB" />
                <path d="M142 300 L142 320 Q142 323 145 323 L158 323 Q161 323 161 320 L161 300" stroke="#D1D5DB" strokeWidth="0.8" fill="none" />
                <rect x="148" y="295" width="2.5" height="12" rx="1" fill="#1E3A5F" />
                <rect x="148" y="293" width="2.5" height="3" rx="0.8" fill="#E74C3C" />
                <motion.path d="M160 222 C150 240, 142 260, 148 285" stroke="url(#stethGrad)" strokeWidth="3" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }} />
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 2 }}>
                  <ellipse cx="148" cy="289" rx="7" ry="8" fill="url(#stethHead)" stroke="#9CA3AF" strokeWidth="0.5" />
                  <circle cx="148" cy="289" r="3" fill="#D1D5DB" />
                </motion.g>
                <path d="M160 222 C165 215, 168 212, 170 210" stroke="url(#stethGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M160 222 C162 215, 160 212, 158 210" stroke="url(#stethGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <rect x="163" y="195" width="20" height="28" rx="8" fill="url(#skinDoc)" />
                <ellipse cx="173" cy="170" rx="30" ry="34" fill="url(#skinDoc)" />
                <ellipse cx="142" cy="172" rx="5" ry="8" fill="#E8C49A" />
                <ellipse cx="142" cy="172" rx="3" ry="5" fill="#DCAE82" />
                <path d="M143 162 C143 132, 163 118, 173 118 C183 118, 203 132, 203 162 C203 155, 198 138, 173 134 C148 138, 143 155, 143 162 Z" fill="url(#hairDoc)" />
                <path d="M143 162 C140 168, 140 175, 142 178" stroke="#2A1F14" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M158 125 Q173 120 188 125" stroke="#5C4333" strokeWidth="1.5" fill="none" opacity="0.3" />
                <path d="M157 157 Q162 154 167 156" stroke="#3D2E1F" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M179 156 Q184 154 189 157" stroke="#3D2E1F" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <ellipse cx="163" cy="165" rx="6" ry="4.5" fill="white" />
                <ellipse cx="183" cy="165" rx="6" ry="4.5" fill="white" />
                <circle cx="164" cy="165" r="3" fill="#4A3728" />
                <circle cx="184" cy="165" r="3" fill="#4A3728" />
                <circle cx="165" cy="164" r="1.2" fill="white" />
                <circle cx="185" cy="164" r="1.2" fill="white" />
                <path d="M157 163 Q163 160 169 163" stroke="#C9A87C" strokeWidth="0.5" fill="none" />
                <path d="M177 163 Q183 160 189 163" stroke="#C9A87C" strokeWidth="0.5" fill="none" />
                <rect x="155" y="158" width="18" height="14" rx="5" stroke="#6B7280" strokeWidth="1.5" fill="none" opacity="0.8" />
                <rect x="175" y="158" width="18" height="14" rx="5" stroke="#6B7280" strokeWidth="1.5" fill="none" opacity="0.8" />
                <line x1="173" y1="164" x2="175" y2="164" stroke="#6B7280" strokeWidth="1.2" />
                <line x1="155" y1="164" x2="143" y2="168" stroke="#6B7280" strokeWidth="1" />
                <path d="M172 166 C172 172, 170 178, 168 180 Q172 182 176 180" stroke="#D4A87C" strokeWidth="1" fill="none" strokeLinecap="round" />
                <path d="M163 187 Q173 194 183 187" stroke="#C9836A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M166 188 Q173 192 180 188" fill="#D4736A" opacity="0.3" />
                <rect x="155" y="232" width="35" height="18" rx="3" fill="white" stroke="#0080A0" strokeWidth="0.8" filter="url(#shadowSoft)" />
                <rect x="159" y="237" width="14" height="2" rx="1" fill="#0080A0" opacity="0.6" />
                <rect x="159" y="242" width="24" height="2" rx="1" fill="#9CA3AF" opacity="0.4" />
                <circle cx="183" cy="240" r="4" fill="#0080A0" opacity="0.1" />
                <path d="M210 250 C225 242, 242 236, 256 240" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="0.8" />
                <motion.g animate={{ rotate: [-2, 3, -2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ originX: "210px", originY: "250px" }}>
                  <path d="M210 244 C228 234, 248 230, 260 234 L260 248 C248 244, 228 248, 210 258 Z" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="0.6" />
                  <path d="M248 232 C254 230, 260 232, 264 236" stroke="url(#skinDoc)" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <g>
                    <path d="M262 234 C268 230, 274 232, 272 238 C276 234, 280 236, 278 242 C282 238, 284 242, 280 246 L268 248 C264 246, 260 240, 262 234 Z" fill="url(#skinDoc)" />
                    <path d="M270 235 L270 240" stroke="#D4A87C" strokeWidth="0.4" opacity="0.4" />
                    <path d="M274 237 L273 242" stroke="#D4A87C" strokeWidth="0.4" opacity="0.4" />
                  </g>
                </motion.g>
                <path d="M135 250 C122 265, 118 290, 125 310" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="0.6" />
                <path d="M125 305 C122 312, 125 318, 132 315" fill="url(#skinDoc)" />
              </motion.g>
              <motion.g initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                <rect x="305" y="350" width="65" height="60" rx="6" fill="#2D3748" opacity="0.08" />
                <rect x="300" y="340" width="75" height="14" rx="5" fill="#4A5568" opacity="0.12" />
                <rect x="365" y="270" width="12" height="80" rx="5" fill="#4A5568" opacity="0.10" />
                <path d="M315 395 L315 445 Q315 450 320 450 L330 450 Q335 450 335 445 L335 395" fill="#5B6E80" />
                <path d="M342 395 L342 445 Q342 450 347 450 L357 450 Q362 450 362 445 L362 395" fill="#5B6E80" />
                <path d="M313 445 Q311 450 314 453 L336 453 Q339 453 339 450 L336 445" fill="#4A3728" />
                <path d="M340 445 Q338 450 340 453 L362 453 Q365 453 365 450 L362 445" fill="#4A3728" />
                <path d="M310 250 C308 270, 306 320, 308 395 L362 395 C364 320, 362 270, 360 250 Z" fill="#E8E0D6" />
                <path d="M298 235 C295 260, 293 320, 295 400 Q295 405 300 405 L315 405 L315 270 L298 235 Z" fill="url(#cardiganGrad)" />
                <path d="M372 235 C375 260, 377 320, 375 400 Q375 405 370 405 L355 405 L355 270 L372 235 Z" fill="url(#cardiganGrad)" />
                <circle cx="335" cy="278" r="2.5" fill="#6B5242" stroke="#5A4332" strokeWidth="0.5" />
                <circle cx="335" cy="300" r="2.5" fill="#6B5242" stroke="#5A4332" strokeWidth="0.5" />
                <path d="M318 230 L335 270 L325 270 L312 238 Z" fill="#D4C8BC" />
                <path d="M352 230 L335 270 L345 270 L358 238 Z" fill="#D4C8BC" />
                <rect x="325" y="202" width="20" height="30" rx="8" fill="url(#skinPat)" />
                <ellipse cx="335" cy="175" rx="28" ry="32" fill="url(#skinPat)" />
                <ellipse cx="363" cy="178" rx="5" ry="8" fill="#E0BA8E" />
                <ellipse cx="363" cy="178" rx="3" ry="5" fill="#D4A87C" />
                <path d="M307 168 C307 138, 321 122, 335 122 C349 122, 363 138, 363 168 C363 160, 358 140, 335 136 C312 140, 307 160, 307 168 Z" fill="url(#hairPat)" />
                <path d="M363 168 C366 175, 366 182, 364 186" stroke="#A8A8A8" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M320 126 Q335 122 350 128" stroke="#BCBCBC" strokeWidth="1" fill="none" opacity="0.4" />
                <path d="M325 125 Q335 120 345 125" stroke="#E8E0D0" strokeWidth="0.8" fill="none" opacity="0.3" />
                <path d="M320 160 Q326 156 332 159" stroke="#9E9E9E" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M338 159 Q344 156 350 160" stroke="#9E9E9E" strokeWidth="2" fill="none" strokeLinecap="round" />
                <ellipse cx="326" cy="169" rx="5.5" ry="4" fill="white" />
                <ellipse cx="344" cy="169" rx="5.5" ry="4" fill="white" />
                <circle cx="327" cy="169" r="2.8" fill="#5C4A3A" />
                <circle cx="345" cy="169" r="2.8" fill="#5C4A3A" />
                <circle cx="328" cy="168" r="1" fill="white" />
                <circle cx="346" cy="168" r="1" fill="white" />
                <path d="M321 173 Q326 175 331 173" stroke="#D4B896" strokeWidth="0.5" fill="none" opacity="0.4" />
                <path d="M339 173 Q344 175 349 173" stroke="#D4B896" strokeWidth="0.5" fill="none" opacity="0.4" />
                <path d="M334 170 C334 176, 332 182, 330 184 Q334 186 338 184" stroke="#CCA27A" strokeWidth="1" fill="none" strokeLinecap="round" />
                <path d="M326 192 Q335 196 344 192" stroke="#BF8B6E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M322 180 Q324 186 326 190" stroke="#D4B896" strokeWidth="0.5" fill="none" opacity="0.3" />
                <path d="M348 180 Q346 186 344 190" stroke="#D4B896" strokeWidth="0.5" fill="none" opacity="0.3" />
                <path d="M318 152 Q335 148 352 152" stroke="#D4B896" strokeWidth="0.4" fill="none" opacity="0.25" />
                <path d="M320 156 Q335 153 350 156" stroke="#D4B896" strokeWidth="0.4" fill="none" opacity="0.2" />
                <path d="M298 260 C288 275, 285 295, 290 310" fill="url(#cardiganGrad)" />
                <path d="M290 306 C287 314, 290 318, 296 316" fill="url(#skinPat)" />
                <path d="M372 260 C382 275, 385 295, 380 320" fill="url(#cardiganGrad)" />
                <path d="M378 315 C382 322, 378 328, 372 325" fill="url(#skinPat)" />
              </motion.g>
              <motion.g animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <circle cx="242" cy="135" r="3" fill="#0080A0" opacity="0.2" />
                <circle cx="252" cy="128" r="4" fill="#0080A0" opacity="0.15" />
                <circle cx="265" cy="118" r="5.5" fill="#0080A0" opacity="0.1" />
              </motion.g>
              <motion.g animate={{ y: [-3, 4, -3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} filter="url(#shadow2)">
                <rect x="395" y="130" width="56" height="56" rx="14" fill="white" />
                <path d="M423 165 C416 160, 407 154, 407 148 C407 144, 410 141, 414 141 C417 141, 420 143, 423 147 C426 143, 429 141, 432 141 C436 141, 439 144, 439 148 C439 154, 430 160, 423 165 Z" fill="#F87171" opacity="0.85" />
                <text x="423" y="177" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="system-ui">Compassion</text>
              </motion.g>
              <motion.g animate={{ y: [3, -4, 3] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} filter="url(#shadow2)">
                <rect x="72" y="120" width="56" height="56" rx="14" fill="white" />
                <rect x="95" y="136" width="10" height="22" rx="3" fill="#0080A0" opacity="0.7" />
                <rect x="89" y="142" width="22" height="10" rx="3" fill="#0080A0" opacity="0.7" />
                <text x="100" y="187" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="system-ui">Expertise</text>
              </motion.g>
              <motion.g animate={{ y: [-2, 5, -2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }} filter="url(#shadow2)">
                <rect x="410" y="285" width="56" height="56" rx="14" fill="white" />
                <path d="M438 297 L449 302 L449 312 C449 319, 444 323, 438 326 C432 323, 427 319, 427 312 L427 302 Z" fill="#0080A0" opacity="0.6" />
                <path d="M434 310 L437 313 L443 306" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <text x="438" y="352" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="system-ui">Trust</text>
              </motion.g>
              <motion.circle cx="260" cy="250" r="230" stroke="#0080A0" strokeWidth="0.8" fill="none" animate={{ r: [230, 245, 230], opacity: [0.08, 0.02, 0.08] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
