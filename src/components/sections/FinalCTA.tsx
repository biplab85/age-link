"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { finalCTA } from "@/data/content";

function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter via-white to-neutral-50" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[120px]" />

      {/* Morphing blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-primary/[0.035]"
        style={{ filter: "blur(60px)" }}
        animate={{ scale: [1, 1.12, 0.95, 1], x: [0, -15, 10, 0], y: [0, 10, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full bg-accent/[0.03]"
        style={{ filter: "blur(50px)" }}
        animate={{ scale: [1, 1.08, 0.96, 1], y: [0, -10, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400" fill="none">
        {/* Flowing curves */}
        <motion.path
          d="M0 80 Q300 30 600 80 T1200 60"
          stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.06" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.path
          d="M0 340 Q400 380 800 340 T1200 350"
          stroke="var(--color-accent)" strokeWidth="0.8" strokeOpacity="0.05" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        {/* Pulsing rings */}
        <motion.circle cx="150" cy="100" r="50" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" opacity="0.05"
          animate={{ r: [50, 60, 50], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="1050" cy="300" r="60" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" opacity="0.04"
          animate={{ r: [60, 72, 60], opacity: [0.04, 0.06, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.circle cx="600" cy="50" r="30" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" opacity="0.05"
          animate={{ r: [30, 36, 30] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Medical cross */}
        <motion.g animate={{ y: [-3, 4, -3], rotate: [0, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="80" y="280" width="6" height="18" rx="2" fill="var(--color-primary)" opacity="0.05" />
          <rect x="74" y="286" width="18" height="6" rx="2" fill="var(--color-primary)" opacity="0.05" />
        </motion.g>
        {/* Stethoscope */}
        <motion.g animate={{ y: [2, -4, 2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <path d="M1100 100 Q1100 85 1110 80 Q1120 85 1120 100" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.06" strokeLinecap="round" />
          <circle cx="1110" cy="106" r="6" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" opacity="0.05" />
        </motion.g>
        {/* Calendar icon */}
        <motion.g animate={{ y: [-2, 5, -2] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <rect x="1060" y="180" width="22" height="20" rx="3" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
          <line x1="1060" y1="187" x2="1082" y2="187" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.05" />
          <line x1="1066" y1="176" x2="1066" y2="182" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" opacity="0.05" />
          <line x1="1076" y1="176" x2="1076" y2="182" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" opacity="0.05" />
        </motion.g>
        {/* Dot grid */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }}>
          {[...Array(3)].map((_, r) => [...Array(4)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={60 + c * 18} cy={80 + r * 18} r="1" fill="var(--color-primary)" opacity="0.05" />
          )))}
        </motion.g>
      </svg>
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-20 lg:py-24 overflow-hidden">
      <SectionBg />

      <Container className="relative z-[1] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            Ready to Start?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-secondary mb-5 leading-tight max-w-2xl mx-auto">
            {finalCTA.heading}
          </h2>
          <p className="text-[17px] text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed">
            {finalCTA.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={finalCTA.primaryCTA.href}
              size="lg"
              className="hover:shadow-[0_4px_20px_rgba(0,128,159,0.25)] hover:scale-[1.02] transition-all duration-400"
            >
              {finalCTA.primaryCTA.label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button
              href={finalCTA.secondaryCTA.href}
              variant="secondary"
              size="lg"
              icon={
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            >
              {finalCTA.secondaryCTA.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
