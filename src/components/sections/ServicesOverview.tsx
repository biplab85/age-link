"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  servicesHeading,
  servicesSubheading,
  servicesViewAllLabel,
  servicesViewAllHref,
  homepageServices,
} from "@/data/content";

const serviceIcons = [
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" /></svg>,
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-4.5 0v-.75A2.25 2.25 0 0119 14.5zm-14 0v.75c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5v-.75" /></svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
];

function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-lighter/60 via-primary-light/30 to-white" />

      <motion.div
        className="absolute top-10 -right-32 w-[450px] h-[450px] rounded-full bg-primary/[0.03]"
        style={{ filter: "blur(80px)" }}
        animate={{ scale: [1, 1.1, 0.95, 1], y: [0, 15, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-10 w-[350px] h-[350px] rounded-full bg-accent/[0.025]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.06, 0.97, 1], x: [0, 10, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none">
        <motion.path
          d="M0 100 Q200 50 400 100 T800 80 T1200 100"
          stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.06" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M0 520 Q300 560 600 520 T1200 530"
          stroke="var(--color-primary)" strokeWidth="0.8" strokeOpacity="0.04" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
        />
        {/* Stethoscope outline */}
        <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M80 480 Q80 460 92 455 Q104 460 104 480" stroke="var(--color-primary)" strokeWidth="1.2" fill="none" opacity="0.06" strokeLinecap="round" />
          <circle cx="92" cy="488" r="8" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
        </motion.g>
        {/* Clipboard */}
        <motion.g animate={{ y: [3, -4, 3], rotate: [-2, 2, -2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <rect x="1100" y="120" width="28" height="36" rx="3" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
          <rect x="1108" y="114" width="12" height="8" rx="2" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.06" />
          <line x1="1106" y1="132" x2="1122" y2="132" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.04" />
          <line x1="1106" y1="138" x2="1118" y2="138" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.04" />
          <line x1="1106" y1="144" x2="1120" y2="144" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.04" />
        </motion.g>
        {/* Pulsing rings */}
        <motion.circle cx="600" cy="60" r="30" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" strokeOpacity="0.05"
          animate={{ r: [30, 38, 30] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="150" cy="300" r="50" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" strokeOpacity="0.04"
          animate={{ r: [50, 58, 50] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* DNA strand */}
        <motion.g animate={{ y: [-3, 5, -3] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <path d="M1060 380 Q1072 390 1060 400 Q1048 410 1060 420" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
          <path d="M1080 380 Q1068 390 1080 400 Q1092 410 1080 420" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
          <line x1="1063" y1="390" x2="1077" y2="390" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.04" />
          <line x1="1060" y1="400" x2="1080" y2="400" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.04" />
          <line x1="1063" y1="410" x2="1077" y2="410" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.04" />
        </motion.g>
      </svg>
    </div>
  );
}

/* ─── Animated medical SVG for left sidebar empty space ─── */
function SidebarMedicalSvg() {
  return (
    <div className="hidden lg:flex flex-1 items-end justify-center px-5 pb-6 pt-4 opacity-[0.12]" aria-hidden="true">
      <svg viewBox="0 0 200 180" fill="none" className="w-full max-w-[200px]">
        {/* Continuous ECG heartbeat wave */}
        <motion.path
          d="M10 90 L40 90 L50 90 L58 55 L70 125 L82 65 L90 105 L98 90 L130 90"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
        />
        {/* Stethoscope tubing */}
        <motion.path
          d="M60 130 Q60 145, 75 148 Q90 150, 100 140 Q110 130, 110 115"
          stroke="var(--color-primary)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
        />
        {/* Stethoscope chest piece */}
        <motion.circle
          cx="110" cy="108" r="10"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          fill="none"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="110" cy="108" r="3.5" fill="var(--color-primary)" opacity="0.3" />
        {/* Medical cross */}
        <motion.g
          animate={{ opacity: [0.4, 0.8, 0.4], y: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <rect x="155" y="38" width="8" height="20" rx="2.5" fill="var(--color-primary)" />
          <rect x="149" y="44" width="20" height="8" rx="2.5" fill="var(--color-primary)" />
        </motion.g>
        {/* Pulse ring — large */}
        <motion.circle
          cx="159" cy="48" r="22"
          stroke="var(--color-primary)"
          strokeWidth="0.8"
          fill="none"
          animate={{ r: [22, 30, 22], opacity: [0.3, 0.08, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small decorative dots */}
        <motion.circle cx="28" cy="75" r="2" fill="var(--color-primary)"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="145" cy="130" r="2" fill="var(--color-primary)"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        {/* Abstract DNA helix segment */}
        <motion.path
          d="M20 140 Q30 135, 20 130 Q10 125, 20 120"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }}
        />
        <motion.path
          d="M30 140 Q20 135, 30 130 Q40 125, 30 120"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.8 }}
        />
      </svg>
    </div>
  );
}

/* ─── Tab content panel ─── */
function TabPanel({ service }: { service: (typeof homepageServices)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Description */}
      <p className="text-neutral-600 leading-relaxed text-[15px] mb-8">
        {service.fullDescription}
      </p>

      {/* Detail cards grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* Who is it for */}
        <div className="group/card relative rounded-xl p-5 bg-gradient-to-br from-primary/[0.04] to-primary/[0.01] border border-primary/[0.08] overflow-hidden transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_28px_rgba(0,128,159,0.10),0_2px_6px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-primary/20">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 transition-all duration-500 group-hover/card:h-[3px] group-hover/card:from-primary/60 group-hover/card:via-primary group-hover/card:to-primary/60" />
          <div className="flex items-center gap-2 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover/card:bg-primary group-hover/card:shadow-[0_4px_12px_rgba(0,128,159,0.25)]">
              <svg className="w-3.5 h-3.5 text-primary transition-colors duration-500 group-hover/card:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
              </svg>
            </div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-wider transition-colors duration-500 group-hover/card:text-primary">
              Who is it for
            </h4>
          </div>
          <ul className="space-y-2.5">
            {service.whoIsItFor.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] text-neutral-500 leading-snug">
                <svg className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What it includes */}
        <div className="group/card relative rounded-xl p-5 bg-gradient-to-br from-primary/[0.04] to-primary/[0.01] border border-primary/[0.08] overflow-hidden transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_28px_rgba(0,128,159,0.10),0_2px_6px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-primary/20">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/40 via-primary-dark to-primary/40 transition-all duration-500 group-hover/card:h-[3px] group-hover/card:from-primary/60 group-hover/card:via-primary-dark group-hover/card:to-primary/60" />
          <div className="flex items-center gap-2 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover/card:bg-primary-dark group-hover/card:shadow-[0_4px_12px_rgba(0,102,127,0.25)]">
              <svg className="w-3.5 h-3.5 text-primary transition-colors duration-500 group-hover/card:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-wider transition-colors duration-500 group-hover/card:text-primary-dark">
              What it includes
            </h4>
          </div>
          <ul className="space-y-2.5">
            {service.whatItIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] text-neutral-500 leading-snug">
                <svg className="w-3.5 h-3.5 mt-0.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Expected outcomes */}
        <div className="group/card relative rounded-xl p-5 bg-gradient-to-br from-accent/[0.04] to-accent/[0.01] border border-accent/[0.12] overflow-hidden transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_28px_rgba(232,168,56,0.12),0_2px_6px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-accent/25">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/40 via-accent to-accent/40 transition-all duration-500 group-hover/card:h-[3px] group-hover/card:from-accent/60 group-hover/card:via-accent group-hover/card:to-accent/60" />
          <div className="flex items-center gap-2 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center transition-all duration-500 group-hover/card:bg-accent group-hover/card:shadow-[0_4px_12px_rgba(232,168,56,0.25)]">
              <svg className="w-3.5 h-3.5 text-accent transition-colors duration-500 group-hover/card:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-wider transition-colors duration-500 group-hover/card:text-accent">
              Expected outcomes
            </h4>
          </div>
          <ul className="space-y-2.5">
            {service.expectedOutcomes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[13px] text-neutral-500 leading-snug">
                <svg className="w-3.5 h-3.5 mt-0.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>(null);
  const pausedUntilRef = useRef(0);
  const hoveringRef = useRef(false);
  const activeTabRef = useRef(0);

  const handleTabClick = useCallback(
    (index: number) => {
      if (index === activeTabRef.current) return;
      pausedUntilRef.current = Date.now() + 10000;
      activeTabRef.current = index;
      setActiveTab(index);
    },
    []
  );

  // Auto tab rotation
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (hoveringRef.current || Date.now() < pausedUntilRef.current) return;
      const next = (activeTabRef.current + 1) % homepageServices.length;
      activeTabRef.current = next;
      setActiveTab(next);
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      <SectionBg />
      <Container className="relative z-[1]">
        <SectionHeading title={servicesHeading} subtitle={servicesSubheading} tag="What We Offer" />

        <ScrollReveal>
          <div
            className="rounded-2xl bg-white border border-neutral-200/50 shadow-[var(--shadow-card)] overflow-hidden"
            onMouseEnter={() => { hoveringRef.current = true; }}
            onMouseLeave={() => { hoveringRef.current = false; }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* ── Left: Vertical tab buttons (desktop) / Horizontal (mobile) ── */}
              <div className="lg:w-[280px] xl:w-[300px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-neutral-200/60 lg:flex lg:flex-col lg:bg-gradient-to-b lg:from-transparent lg:to-primary/[0.02]">
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                  {homepageServices.map((service, i) => {
                    const isActive = activeTab === i;
                    return (
                      <button
                        key={service.slug}
                        onClick={() => handleTabClick(i)}
                        className={`
                          relative flex items-center gap-3 px-5 py-4 lg:py-4.5 text-sm font-medium whitespace-nowrap lg:whitespace-normal text-left
                          transition-all duration-400 ease-[var(--ease-smooth)] min-w-0
                          ${isActive
                            ? "text-primary bg-primary/[0.05]"
                            : "text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50/60"
                          }
                        `}
                        aria-selected={isActive}
                        role="tab"
                      >
                        <span className={`
                          icon-draw flex-shrink-0 transition-colors duration-400
                          ${isActive ? "text-primary" : "text-neutral-300"}
                        `}>
                          {serviceIcons[i]}
                        </span>
                        <span className="hidden sm:inline truncate lg:whitespace-normal">{service.title}</span>

                        {/* Active indicator — bottom line on mobile, left bar on desktop */}
                        {isActive && (
                          <>
                            <motion.div
                              layoutId="service-tab-indicator-bottom"
                              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary-dark to-primary lg:hidden"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                            <motion.div
                              layoutId="service-tab-indicator-left"
                              className="hidden lg:block absolute top-0 bottom-0 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-primary via-primary-dark to-primary"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
                {/* Animated medical SVG in empty space below tabs */}
                <SidebarMedicalSvg />
              </div>

              {/* ── Right: Content area ── */}
              <div className="flex-1 p-6 lg:p-10 min-h-[320px] relative bg-gradient-to-br from-white via-white to-primary/[0.02]">
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

                <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      className="relative"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {/* Title row with icon badge */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className="hidden sm:flex w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/[0.04] items-center justify-center text-primary flex-shrink-0 shadow-[0_2px_8px_rgba(0,128,159,0.08)]">
                          {serviceIcons[activeTab]}
                        </div>
                        <div>
                          <h3 className="font-heading text-xl lg:text-2xl font-semibold text-secondary mb-1">
                            {homepageServices[activeTab].title}
                          </h3>
                          <p className="text-primary/70 text-sm font-medium">
                            {homepageServices[activeTab].shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Separator */}
                      <div className="flex items-center gap-2 mb-6">
                        <span className="h-[1px] flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                      </div>

                      <TabPanel service={homepageServices[activeTab]} />
                    </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-12">
          <Button href={servicesViewAllHref} variant="secondary">
            {servicesViewAllLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
