"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { valuePropositionsHeading, valuePropositions } from "@/data/content";

const icons = [
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-4.5 0v-.75A2.25 2.25 0 0119 14.5zm-14 0v.75c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5v-.75" /></svg>,
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" /></svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
];

/* ─── Animated SVG background ─── */
function SectionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-white to-neutral-50/60" />

      {/* Morphing blobs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.03]"
        style={{ filter: "blur(80px)" }}
        animate={{ scale: [1, 1.1, 0.95, 1], x: [0, -20, 15, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-accent/[0.03]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.08, 0.97, 1], x: [0, 12, -8, 0], y: [0, -10, 14, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* SVG decorations */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none">
        {/* Flowing wave — top */}
        <motion.path
          d="M0 80 Q200 20 400 80 T800 60 T1200 80"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          strokeOpacity="0.06"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Flowing wave — bottom */}
        <motion.path
          d="M0 520 Q300 580 600 520 T1200 540"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.05"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
        />

        {/* Curved connector — left to right */}
        <motion.path
          d="M-20 300 C200 250, 400 350, 600 280 C800 210, 1000 320, 1220 260"
          stroke="var(--color-accent)"
          strokeWidth="0.8"
          strokeOpacity="0.05"
          fill="none"
          strokeDasharray="8 12"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
        />

        {/* Floating circles — scattered */}
        <motion.circle
          cx="120" cy="150" r="40"
          stroke="var(--color-primary)" strokeWidth="0.8" fill="none" strokeOpacity="0.05"
          animate={{ r: [40, 48, 40], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="1050" cy="420" r="55"
          stroke="var(--color-primary)" strokeWidth="0.8" fill="none" strokeOpacity="0.04"
          animate={{ r: [55, 65, 55], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.circle
          cx="600" cy="80" r="25"
          stroke="var(--color-accent)" strokeWidth="0.6" fill="none" strokeOpacity="0.06"
          animate={{ r: [25, 32, 25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Dot grid — left area */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[...Array(4)].map((_, row) =>
            [...Array(5)].map((_, col) => (
              <circle
                key={`l-${row}-${col}`}
                cx={60 + col * 24}
                cy={200 + row * 24}
                r="1.5"
                fill="var(--color-primary)"
                opacity={0.06}
              />
            ))
          )}
        </motion.g>

        {/* Dot grid — right area */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[...Array(4)].map((_, row) =>
            [...Array(5)].map((_, col) => (
              <circle
                key={`r-${row}-${col}`}
                cx={1040 + col * 24}
                cy={120 + row * 24}
                r="1.5"
                fill="var(--color-primary)"
                opacity={0.06}
              />
            ))
          )}
        </motion.g>

        {/* Medical cross — top right */}
        <motion.g
          animate={{ y: [-4, 4, -4], rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="1100" y="80" width="8" height="24" rx="3" fill="var(--color-primary)" opacity="0.06" />
          <rect x="1092" y="88" width="24" height="8" rx="3" fill="var(--color-primary)" opacity="0.06" />
        </motion.g>

        {/* Medical cross — bottom left */}
        <motion.g
          animate={{ y: [3, -5, 3], rotate: [0, -6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <rect x="80" y="460" width="6" height="20" rx="3" fill="var(--color-accent)" opacity="0.06" />
          <rect x="73" y="467" width="20" height="6" rx="3" fill="var(--color-accent)" opacity="0.06" />
        </motion.g>

        {/* Heartbeat trace — subtle mid section */}
        <motion.path
          d="M200 300 L260 300 L275 300 L282 280 L290 320 L298 290 L305 310 L312 300 L380 300"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.06"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Small pill shape — floating */}
        <motion.g
          animate={{ y: [-6, 6, -6], rotate: [20, 30, 20] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <rect x="950" y="180" width="12" height="28" rx="6" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.06" />
          <rect x="950" y="180" width="12" height="14" rx="6" fill="var(--color-primary)" opacity="0.04" />
        </motion.g>

        {/* Stethoscope outline — right side */}
        <motion.g
          animate={{ y: [-3, 5, -3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <path d="M870 480 Q870 460 882 455 Q894 460 894 480" stroke="var(--color-primary)" strokeWidth="1.2" fill="none" opacity="0.06" strokeLinecap="round" />
          <circle cx="882" cy="488" r="8" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
          <circle cx="882" cy="488" r="3" fill="var(--color-primary)" opacity="0.05" />
        </motion.g>
      </svg>
    </div>
  );
}

export default function ValueProps() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Animated SVG background */}
      <SectionBackground />

      <Container className="relative z-[1]">
        <SectionHeading title={valuePropositionsHeading} tag="Why Choose Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {valuePropositions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group relative text-center rounded-2xl p-6 lg:p-8 bg-white border border-neutral-200/50 shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-smooth)] hover:border-primary/35 hover:shadow-[0_0_0_1px_rgba(0,128,159,0.06),var(--shadow-card)]"
            >
              {/* Top border accent — thin line, full width */}
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-600" />

              {/* Icon — lifts + icon bg fills with soft primary */}
              <div className="icon-draw w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] flex items-center justify-center text-primary transition-all duration-500 ease-[var(--ease-smooth)] group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(0,128,159,0.25)] group-hover:-translate-y-1">
                {icons[i]}
              </div>

              <h3 className="relative font-semibold text-secondary text-[15px] mb-2.5 transition-colors duration-400 group-hover:text-primary inline-block">
                {item.title}
                {/* Underline reveal — from center */}
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-full rounded-full bg-primary/25 transition-all duration-500 ease-[var(--ease-smooth)]" />
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
