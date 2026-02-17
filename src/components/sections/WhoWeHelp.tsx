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

/* ─── Light premium background ─── */
function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/60 via-white to-neutral-50" />

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

        {/* ─── Journey timeline layout ─── */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden md:block absolute top-[72px] left-[calc(16.67%-12px)] right-[calc(16.67%-12px)] z-0" aria-hidden="true">
            <motion.div
              className="h-[1px] bg-gradient-to-r from-primary/30 via-neutral-300/60 to-accent/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Vertical connector line — mobile only */}
          <div className="md:hidden absolute top-[72px] bottom-[72px] left-[35px] z-0" aria-hidden="true">
            <motion.div
              className="w-[1px] h-full bg-gradient-to-b from-primary/30 via-neutral-300/60 to-accent/30"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {whoWeHelp.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                className="relative z-[1] flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0"
              >
                {/* ── Step indicator + Icon circle ── */}
                <div className="relative flex-shrink-0">
                  {/* Pulsing glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ boxShadow: [
                      "0 0 0 0px rgba(0,128,159,0.0), 0 0 0 0px rgba(0,128,159,0.0)",
                      "0 0 0 8px rgba(0,128,159,0.06), 0 0 20px 4px rgba(0,128,159,0.04)",
                      "0 0 0 0px rgba(0,128,159,0.0), 0 0 0 0px rgba(0,128,159,0.0)",
                    ]}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                  />
                  {/* Icon circle */}
                  <div className="relative w-[72px] h-[72px] rounded-full bg-white border border-primary/[0.12] shadow-[0_2px_12px_rgba(0,128,159,0.08)] flex items-center justify-center text-primary transition-all duration-500">
                    {icons[i]}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-[0_2px_10px_rgba(0,128,159,0.3)]">
                    <span className="text-[11px] font-bold text-white leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="md:mt-7 flex-1">
                  <h3 className="font-heading text-xl font-semibold text-secondary mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-[15px] leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>

                  {/* Subtle bottom accent line */}
                  <motion.div
                    className="hidden md:block mt-5 mx-auto h-[2px] rounded-full"
                    style={{
                      background: i === 2
                        ? "linear-gradient(90deg, transparent, rgba(232,168,56,0.35), transparent)"
                        : "linear-gradient(90deg, transparent, rgba(0,128,159,0.25), transparent)",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
