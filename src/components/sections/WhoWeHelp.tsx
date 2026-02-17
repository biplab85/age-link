"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { whoWeHelpHeading, whoWeHelp } from "@/data/content";

const icons = [
  <svg key="0" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h-8.25V3.545m16.5 0L12 2.25 3.5 3.545m17 0V21m0-17.455h-3.375c-.621 0-1.125.504-1.125 1.125v3.026" /></svg>,
  <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
];

const accents = [
  { gradient: "from-primary to-primary-dark", ring: "rgba(0,128,159,0.12)", bg: "from-primary/[0.04] to-primary/[0.01]" },
  { gradient: "from-primary to-[#0097b8]", ring: "rgba(0,151,184,0.12)", bg: "from-primary/[0.03] to-[#0097b8]/[0.02]" },
  { gradient: "from-primary-dark to-secondary", ring: "rgba(0,102,127,0.12)", bg: "from-primary-dark/[0.04] to-primary-dark/[0.01]" },
];

/* ─── Light premium background ─── */
function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/60 via-white to-neutral-50 dark:from-[#0d1c28] dark:via-surface dark:to-surface" />

      <motion.div
        className="absolute -top-28 -right-28 w-[450px] h-[450px] rounded-full bg-primary/[0.04]"
        style={{ filter: "blur(90px)" }}
        animate={{ scale: [1, 1.12, 0.95, 1], x: [0, -18, 12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[380px] h-[380px] rounded-full bg-accent/[0.04]"
        style={{ filter: "blur(80px)" }}
        animate={{ scale: [1, 1.08, 0.96, 1], y: [0, -14, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none">
        <motion.path
          d="M0 120 Q300 60 600 120 T1200 100"
          stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.06" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.path
          d="M0 500 Q400 540 800 490 T1200 510"
          stroke="var(--color-accent)" strokeWidth="0.8" strokeOpacity="0.05" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.4, ease: "easeOut" }}
        />

        {/* Floating hearts */}
        <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M120 420 C116 414, 108 410, 108 406 C108 402, 112 400, 115 400 C117 400, 119 401, 120 403 C121 401, 123 400, 125 400 C128 400, 132 402, 132 406 C132 410, 124 414, 120 420Z" fill="var(--color-primary)" opacity="0.07" />
        </motion.g>
        <motion.g animate={{ y: [4, -6, 4] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <path d="M1080 180 C1076 174, 1068 170, 1068 166 C1068 162, 1072 160, 1075 160 C1077 160, 1079 161, 1080 163 C1081 161, 1083 160, 1085 160 C1088 160, 1092 162, 1092 166 C1092 170, 1084 174, 1080 180Z" fill="var(--color-accent)" opacity="0.08" />
        </motion.g>

        {/* Pulsing rings */}
        <motion.circle cx="100" cy="200" r="40" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" strokeOpacity="0.05"
          animate={{ r: [40, 50, 40] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="1100" cy="400" r="50" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" strokeOpacity="0.04"
          animate={{ r: [50, 62, 50] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Dot constellation */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.8 }}>
          {[...Array(3)].map((_, r) => [...Array(4)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={1050 + c * 20} cy={140 + r * 20} r="1.2" fill="var(--color-primary)" opacity="0.06" />
          )))}
        </motion.g>
      </svg>
    </div>
  );
}

export default function WhoWeHelp() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <SectionBg />

      <Container className="relative z-[1]">
        <SectionHeading title={whoWeHelpHeading} tag="Our Patients" />

        {/* ─── Staggered horizontal feature cards ─── */}
        <div className="max-w-4xl mx-auto space-y-5">
          {whoWeHelp.map((item, i) => {
            const accent = accents[i % accents.length];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                className={`group relative flex items-stretch rounded-2xl bg-white dark:bg-surface-elevated border border-neutral-200/50 dark:border-neutral-300/25 shadow-[var(--shadow-card)] overflow-hidden transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_32px_rgba(0,128,159,0.10),0_2px_8px_rgba(0,0,0,0.03)] hover:-translate-y-1 ${isEven ? "lg:mr-12" : "lg:ml-12"}`}
              >
                {/* Left accent stripe */}
                <div className={`w-1.5 flex-shrink-0 bg-gradient-to-b ${accent.gradient} transition-all duration-500 group-hover:w-2`} />

                {/* Icon area */}
                <div className="flex-shrink-0 flex items-center justify-center px-6 sm:px-8 py-6">
                  <div className="relative">
                    {/* Soft background ring */}
                    <div
                      className="absolute -inset-3 rounded-full transition-all duration-500 group-hover:scale-110"
                      style={{ background: `radial-gradient(circle, ${accent.ring}, transparent 70%)` }}
                    />
                    {/* Icon container */}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${accent.bg} border border-neutral-200/30 dark:border-neutral-300/20 flex items-center justify-center text-primary transition-all duration-500 group-hover:shadow-[0_4px_20px_${accent.ring}] group-hover:scale-105`}>
                      <div className="icon-draw">
                        {icons[i]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 py-6 pr-6 sm:pr-8 flex flex-col justify-center min-w-0">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-secondary mb-1.5 leading-snug transition-colors duration-400 group-hover:text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-[14px] sm:text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover arrow indicator */}
                <div className="hidden sm:flex items-center pr-6 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-neutral-50 dark:bg-neutral-200/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/[0.08] dark:group-hover:bg-primary/[0.15] group-hover:scale-110">
                    <svg className="w-4 h-4 text-neutral-300 transition-colors duration-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>

                {/* Warm hover wash */}
                <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
