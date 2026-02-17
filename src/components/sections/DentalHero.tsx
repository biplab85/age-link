"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { dentalHeroContent } from "@/data/content";

/* ─── Floating clinic equipment decorations ─── */
function ClinicDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* ── Stethoscope — top-left ── */}
      <motion.svg
        className="absolute top-[6%] left-[4%] w-16 h-16 lg:w-20 lg:h-20"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.g
          animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M22 8 L22 14" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />
          <path d="M30 8 L30 14" stroke="#5ce1e6" strokeWidth="2.5" strokeLinecap="round" opacity="0.2" />
          <circle cx="22" cy="7" r="2.5" fill="#5ce1e6" opacity="0.15" />
          <circle cx="30" cy="7" r="2.5" fill="#5ce1e6" opacity="0.15" />
          <path d="M22 14 Q22 20 26 22 Q30 20 30 14" stroke="#5ce1e6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.2" />
          <path d="M26 22 Q26 34 20 40 Q14 46 18 54" stroke="#5ce1e6" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.2" />
          <circle cx="18" cy="54" r="6" stroke="#5ce1e6" strokeWidth="2" fill="#5ce1e6" opacity="0.08" />
          <circle cx="18" cy="54" r="3" fill="#5ce1e6" opacity="0.14" />
        </motion.g>
      </motion.svg>

      {/* ── Heartbeat / ECG wave — bottom-left ── */}
      <motion.svg
        className="absolute bottom-[12%] left-[5%] w-28 h-12 lg:w-36 lg:h-14"
        viewBox="0 0 120 40"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.path
          d="M0 20 L20 20 L28 20 L33 6 L38 34 L43 14 L48 26 L53 20 L70 20 L120 20"
          stroke="#00809f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.18"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.svg>

      {/* ── Syringe — top-right ── */}
      <motion.svg
        className="absolute top-[8%] right-[5%] w-12 h-12 lg:w-16 lg:h-16"
        viewBox="0 0 52 52"
        fill="none"
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <motion.g
          animate={{ y: [-3, 5, -3], rotate: [30, 40, 30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="18" y="10" width="10" height="28" rx="2" stroke="#5ce1e6" strokeWidth="1.8" fill="#5ce1e6" opacity="0.06" />
          <line x1="23" y1="4" x2="23" y2="12" stroke="#5ce1e6" strokeWidth="2" strokeLinecap="round" opacity="0.16" />
          <line x1="19" y1="4" x2="27" y2="4" stroke="#5ce1e6" strokeWidth="2" strokeLinecap="round" opacity="0.16" />
          <line x1="23" y1="38" x2="23" y2="48" stroke="#5ce1e6" strokeWidth="1.2" strokeLinecap="round" opacity="0.18" />
          <line x1="20" y1="18" x2="24" y2="18" stroke="#5ce1e6" strokeWidth="1" opacity="0.12" />
          <line x1="20" y1="24" x2="24" y2="24" stroke="#5ce1e6" strokeWidth="1" opacity="0.12" />
          <line x1="20" y1="30" x2="24" y2="30" stroke="#5ce1e6" strokeWidth="1" opacity="0.12" />
        </motion.g>
      </motion.svg>

      {/* ── Medical cross — mid-right ── */}
      <motion.svg
        className="absolute top-[45%] right-[3%] w-8 h-8 lg:w-11 lg:h-11"
        viewBox="0 0 32 32"
        fill="none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <motion.g
          animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="12" y="4" width="8" height="24" rx="3" fill="#00809f" opacity="0.12" />
          <rect x="4" y="12" width="24" height="8" rx="3" fill="#00809f" opacity="0.12" />
        </motion.g>
      </motion.svg>

      {/* ── Pill capsule — left mid ── */}
      <motion.svg
        className="absolute top-[40%] left-[3%] w-10 h-10 lg:w-14 lg:h-14 hidden sm:block"
        viewBox="0 0 48 48"
        fill="none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.g
          animate={{ y: [-4, 6, -4], rotate: [15, 25, 15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="14" y="8" width="16" height="32" rx="8" stroke="#00809f" strokeWidth="1.8" fill="none" opacity="0.16" />
          <rect x="14" y="8" width="16" height="16" rx="8" fill="#00809f" opacity="0.08" />
          <line x1="14" y1="24" x2="30" y2="24" stroke="#00809f" strokeWidth="1" opacity="0.12" />
        </motion.g>
      </motion.svg>

      {/* ── Heart with pulse — top center-right ── */}
      <motion.svg
        className="absolute top-[3%] right-[28%] w-10 h-10 lg:w-12 lg:h-12 hidden md:block"
        viewBox="0 0 44 44"
        fill="none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.g
          animate={{ scale: [1, 1.12, 1], y: [-2, 3, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M22 36 C14 30, 4 22, 4 14 C4 8, 8 4, 14 4 C18 4, 20.5 6.5, 22 10 C23.5 6.5, 26 4, 30 4 C36 4, 40 8, 40 14 C40 22, 30 30, 22 36Z"
            fill="#5ce1e6" opacity="0.07"
          />
          <path
            d="M22 36 C14 30, 4 22, 4 14 C4 8, 8 4, 14 4 C18 4, 20.5 6.5, 22 10 C23.5 6.5, 26 4, 30 4 C36 4, 40 8, 40 14 C40 22, 30 30, 22 36Z"
            stroke="#5ce1e6" strokeWidth="1.5" fill="none" opacity="0.16"
          />
          <path d="M10 18 L16 18 L19 12 L22 24 L25 16 L28 18 L34 18" stroke="#5ce1e6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.18" />
        </motion.g>
      </motion.svg>

      {/* ── Thermometer — bottom-right ── */}
      <motion.svg
        className="absolute bottom-[15%] right-[8%] w-8 h-8 lg:w-11 lg:h-11 hidden sm:block"
        viewBox="0 0 40 40"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <motion.g
          animate={{ y: [4, -4, 4], rotate: [-10, -5, -10] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <rect x="16" y="4" width="8" height="22" rx="4" stroke="#00809f" strokeWidth="1.5" fill="none" opacity="0.16" />
          <circle cx="20" cy="30" r="5" stroke="#00809f" strokeWidth="1.5" fill="#5ce1e6" opacity="0.10" />
          <circle cx="20" cy="30" r="3" fill="#5ce1e6" opacity="0.14" />
          <line x1="20" y1="28" x2="20" y2="14" stroke="#5ce1e6" strokeWidth="2" strokeLinecap="round" opacity="0.14" />
          <line x1="24" y1="10" x2="26" y2="10" stroke="#00809f" strokeWidth="1" opacity="0.10" />
          <line x1="24" y1="15" x2="26" y2="15" stroke="#00809f" strokeWidth="1" opacity="0.10" />
          <line x1="24" y1="20" x2="26" y2="20" stroke="#00809f" strokeWidth="1" opacity="0.10" />
        </motion.g>
      </motion.svg>

      {/* ── Clipboard — top center-left ── */}
      <motion.svg
        className="absolute top-[5%] left-[25%] w-12 h-12 lg:w-14 lg:h-14 hidden md:block"
        viewBox="0 0 56 56"
        fill="none"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <motion.g
          animate={{ y: [3, -5, 3], rotate: [-2, 4, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <rect x="10" y="12" width="32" height="40" rx="3" stroke="#00809f" strokeWidth="1.8" fill="#00809f" opacity="0.05" />
          <rect x="19" y="8" width="14" height="8" rx="2" stroke="#00809f" strokeWidth="1.8" fill="none" opacity="0.18" />
          <line x1="16" y1="26" x2="36" y2="26" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.12" />
          <line x1="16" y1="32" x2="32" y2="32" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.10" />
          <line x1="16" y1="38" x2="34" y2="38" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.10" />
          <line x1="16" y1="44" x2="28" y2="44" stroke="#00809f" strokeWidth="1.5" strokeLinecap="round" opacity="0.08" />
          <path d="M16 21 L18.5 23.5 L23 18" stroke="#5ce1e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.20" />
        </motion.g>
      </motion.svg>

      {/* ── ECG wave strip — bottom center ── */}
      <motion.svg
        className="absolute bottom-[5%] left-[35%] w-32 h-10 lg:w-44 lg:h-12 hidden lg:block"
        viewBox="0 0 160 36"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.path
          d="M0 18 L18 18 L24 18 L30 4 L36 32 L42 10 L48 24 L54 18 L72 18 L78 18 L84 6 L90 30 L96 12 L102 22 L108 18 L160 18"
          stroke="#5ce1e6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.12"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.svg>

      {/* ── Shield / protection badge — bottom-left area ── */}
      <motion.svg
        className="absolute bottom-[30%] left-[8%] w-8 h-8 lg:w-10 lg:h-10 hidden lg:block"
        viewBox="0 0 36 36"
        fill="none"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.g
          animate={{ y: [-3, 4, -3], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <path d="M18 3 L31 9 L31 18 C31 26, 25 31, 18 34 C11 31, 5 26, 5 18 L5 9 Z" stroke="#00809f" strokeWidth="1.5" fill="#00809f" opacity="0.06" />
          <rect x="15" y="12" width="6" height="14" rx="2" fill="#5ce1e6" opacity="0.12" />
          <rect x="11" y="16" width="14" height="6" rx="2" fill="#5ce1e6" opacity="0.12" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

/* ─── Scroll reveal wrapper ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export default function DentalHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-secondary dark:bg-[#080f16]">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-[#0f2030] to-[#0a1620] dark:from-[#0a1018] dark:via-[#080f16] dark:to-[#060c12]" />
        <div
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/[0.06]"
          style={{ filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-[#5ce1e6]/[0.08]"
          style={{ filter: "blur(100px)" }}
        />
        <div
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary-dark/20"
          style={{ filter: "blur(80px)" }}
        />
      </div>

      {/* Floating clinic icons */}
      <ClinicDecoration />

      <Container className="relative z-[1]">
        {/* ─── Heading area — centered ─── */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-2"
          >
            {dentalHeroContent.titleLine1}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold italic text-[#5ce1e6] leading-[1.1] mb-6"
          >
            {dentalHeroContent.titleLine2}
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-white/50 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8"
          >
            {dentalHeroContent.subtitle}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="flex flex-wrap justify-center gap-4"
          >
            <span className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:border-white/40 transition-colors cursor-default">
              {/* Calendar icon */}
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                <motion.rect
                  x="3" y="4" width="18" height="18" rx="3"
                  stroke="currentColor" strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
                <motion.line
                  x1="3" y1="10" x2="21" y2="10"
                  stroke="currentColor" strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
                />
                <motion.line
                  x1="8" y1="2" x2="8" y2="6"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.3, ease: "easeOut" }}
                />
                <motion.line
                  x1="16" y1="2" x2="16" y2="6"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.4, ease: "easeOut" }}
                />
                {/* Grid dots */}
                <motion.circle cx="8" cy="14" r="1" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: 1.5 }} />
                <motion.circle cx="12" cy="14" r="1" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: 1.6 }} />
                <motion.circle cx="16" cy="14" r="1" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: 1.7 }} />
                <motion.circle cx="8" cy="18" r="1" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: 1.8 }} />
                <motion.circle cx="12" cy="18" r="1" fill="currentColor" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: 1.9 }} />
              </svg>
              {dentalHeroContent.primaryCTA.label}
            </span>
            <span className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-primary/40 text-primary dark:text-primary text-sm font-semibold hover:border-primary/60 transition-colors cursor-default">
              {/* Appointment / clipboard-check icon */}
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                <motion.rect
                  x="5" y="3" width="14" height="19" rx="2.5"
                  stroke="currentColor" strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
                <motion.rect
                  x="9" y="1" width="6" height="4" rx="1.5"
                  stroke="currentColor" strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                />
                <motion.path
                  d="M9 13l2 2 4-5"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
                />
              </svg>
              {dentalHeroContent.secondaryCTA.label}
            </span>
          </motion.div>
        </div>

        {/* ─── Bento grid ─── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto"
        >
          {/* Top-left: Stat card "15+" */}
          <div className="fistContainer group/stat relative rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 sm:p-8 flex flex-col justify-end aspect-square lg:aspect-auto overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,128,159,0.3)] hover:scale-[1.03]">
            {/* Stethoscope SVG — continuous draw */}
            <motion.svg
              className="absolute top-2 right-2 w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-500 group-hover/stat:scale-110 group-hover/stat:-rotate-6"
              viewBox="0 0 80 80"
              fill="none"
            >
              {/* Earpieces */}
              <motion.path
                d="M26 10L26 18"
                stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M38 10L38 18"
                stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.circle
                cx="26" cy="8" r="3"
                stroke="white" strokeWidth="2" fill="none" opacity="0.35"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
              <motion.circle
                cx="38" cy="8" r="3"
                stroke="white" strokeWidth="2" fill="none" opacity="0.35"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              {/* Y-connector */}
              <motion.path
                d="M26 18Q26 26 32 28Q38 26 38 18"
                stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.3"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
              {/* Tube */}
              <motion.path
                d="M32 28Q32 42 24 50Q16 58 22 68"
                stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.3"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />
              {/* Chest piece */}
              <motion.circle
                cx="22" cy="68" r="7"
                stroke="white" strokeWidth="2" fill="none" opacity="0.35"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
              />
              <motion.circle
                cx="22" cy="68" r="3.5"
                stroke="white" strokeWidth="1.5" fill="none" opacity="0.4"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              />
            </motion.svg>
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/[0.06] opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
            <span className="relative text-5xl sm:text-6xl font-bold leading-none mb-2 bg-gradient-to-r from-white to-[#5ce1e6] bg-clip-text text-transparent">
              {dentalHeroContent.stats[0].value}
            </span>
            <span className="relative text-white/70 text-sm sm:text-base font-medium leading-snug whitespace-pre-line transition-colors duration-500 group-hover/stat:text-white/90">
              {dentalHeroContent.stats[0].label}
            </span>
          </div>

          {/* Top-center + bottom-center: Large photo spanning 2 rows */}
          <div className="col-span-1 lg:col-span-2 row-span-2 rounded-2xl overflow-hidden relative min-h-[280px] sm:min-h-[360px]">
            <Image
              src="/assets/images/clinic/05.jpg"
              alt="Patient smiling during dental checkup"
              fill
              className="oneImg object-cover"
              sizes="(max-width: 1024px) 50vw, 50%"
            />
          </div>

          {/* Top-right: Photo */}
          <div className="rounded-2xl overflow-hidden relative aspect-square lg:aspect-auto">
            <Image
              src="/assets/images/clinic/06.jpg"
              alt="Modern dental equipment and procedure"
              fill
              className="twoImg object-cover"
              sizes="(max-width: 1024px) 50vw, 25%"
            />
          </div>

          {/* Bottom-left: Photo */}
          <div className="rounded-2xl overflow-hidden relative aspect-square lg:aspect-auto">
            <Image
              src="/assets/images/clinic/img4.jpg"
              alt="Happy patient with beautiful smile"
              fill
              className="threeImg object-cover"
              sizes="(max-width: 1024px) 50vw, 25%"
            />
          </div>

          {/* Bottom-right: Stat card "5k+" */}
          <div className="lastContainer group/stat2 relative rounded-2xl bg-gradient-to-br from-[#5ce1e6] to-[#3abcc2] p-6 sm:p-8 flex flex-col justify-end aspect-square lg:aspect-auto overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(92,225,230,0.3)] hover:scale-[1.03]">
            {/* Heart + ECG pulse — continuous draw */}
            <motion.svg
              className="absolute top-2 right-2 w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-500 group-hover/stat2:scale-110 group-hover/stat2:rotate-3"
              viewBox="0 0 80 80"
              fill="none"
            >
              {/* Heart outline */}
              <motion.path
                d="M40 62C32 56,12 42,12 28C12 20,18 14,26 14C31 14,35 17,40 22C45 17,49 14,54 14C62 14,68 20,68 28C68 42,48 56,40 62Z"
                stroke="#152d3e" strokeWidth="2" fill="none" opacity="0.3"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* ECG line inside heart */}
              <motion.path
                d="M18 36L28 36L33 24L40 52L47 30L52 40L62 40"
                stroke="#152d3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />
              {/* Small pulse dot that travels */}
              <motion.circle
                cx="40" cy="36" r="2.5"
                fill="#152d3e" opacity="0.3"
                animate={{ cx: [18, 62, 18], cy: [36, 40, 36] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />
            </motion.svg>
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/[0.12] opacity-0 group-hover/stat2:opacity-100 transition-opacity duration-500" />
            <span className="relative text-5xl sm:text-6xl font-bold leading-none mb-2 bg-gradient-to-r from-secondary to-primary-dark bg-clip-text text-transparent">
              {dentalHeroContent.stats[1].value}
            </span>
            <span className="relative text-secondary/70 text-sm sm:text-base font-medium leading-snug whitespace-pre-line transition-colors duration-500 group-hover/stat2:text-secondary/90">
              {dentalHeroContent.stats[1].label}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
