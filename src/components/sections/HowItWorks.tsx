"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { howItWorksHeading, howItWorksSubheading, howItWorksSteps } from "@/data/content";

function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Warm tinted gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf8f0] via-[#f8f4ee] to-[#fef9f3]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,168,56,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,128,159,0.04)_0%,transparent_50%)]" />

      {/* Warm amber blob — top-left */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-accent/[0.05] to-[#f0c060]/[0.03]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.08, 0.96, 1], y: [0, 10, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft teal blob — bottom-right */}
      <motion.div
        className="absolute bottom-1/4 -right-16 w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-primary/[0.04] to-[#0097b8]/[0.02]"
        style={{ filter: "blur(60px)" }}
        animate={{ scale: [1, 1.1, 0.95, 1], x: [0, -10, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 500" fill="none">
        {/* Connecting arc */}
        <motion.path
          d="M100 250 C300 150 500 350 700 250 C900 150 1000 300 1100 250"
          stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="6 10" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        {/* Step progression arrows */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1 }}>
          <path d="M280 60 L290 55 L290 65 Z" fill="var(--color-primary)" opacity="0.06" />
          <path d="M560 60 L570 55 L570 65 Z" fill="var(--color-primary)" opacity="0.06" />
          <path d="M840 60 L850 55 L850 65 Z" fill="var(--color-primary)" opacity="0.06" />
        </motion.g>
        {/* Floating rings */}
        <motion.circle cx="100" cy="100" r="30" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" opacity="0.04"
          animate={{ r: [30, 36, 30] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="1100" cy="400" r="40" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" opacity="0.04"
          animate={{ r: [40, 48, 40] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Small medical crosses */}
        <motion.g animate={{ y: [-3, 4, -3], rotate: [0, 10, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="50" y="380" width="6" height="18" rx="2" fill="var(--color-primary)" opacity="0.05" />
          <rect x="44" y="386" width="18" height="6" rx="2" fill="var(--color-primary)" opacity="0.05" />
        </motion.g>
        <motion.g animate={{ y: [2, -5, 2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
          <rect x="1130" y="100" width="5" height="16" rx="2" fill="var(--color-accent)" opacity="0.05" />
          <rect x="1124.5" y="105.5" width="16" height="5" rx="2" fill="var(--color-accent)" opacity="0.05" />
        </motion.g>
        {/* Heartbeat */}
        <motion.path
          d="M900 440 L930 440 L938 425 L946 455 L954 435 L960 445 L968 440 L1000 440"
          stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.05" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
      <SectionBg />

      <Container className="relative z-[1]">
        <SectionHeading title={howItWorksHeading} subtitle={howItWorksSubheading} tag="Your Journey" />

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(12.5%+10px)] right-[calc(12.5%+10px)] h-px bg-gradient-to-r from-primary/10 via-primary/25 to-primary/10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {howItWorksSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="relative text-center group">
                  {/* Step circle */}
                  <div className="relative mx-auto w-24 h-24 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] transition-all duration-500 group-hover:from-primary/[0.12] group-hover:to-primary/[0.06] group-hover:scale-110" />
                    <div className="absolute inset-2.5 rounded-full bg-white shadow-[var(--shadow-card)] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_4px_20px_rgba(0,128,159,0.2)]">
                      <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Pulsing ring on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/10 transition-all duration-500 group-hover:scale-125 group-hover:opacity-0" />
                  </div>

                  <h3 className="font-semibold text-secondary text-[15px] mb-2 transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-[220px] mx-auto">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
