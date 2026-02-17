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


function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" />

      <motion.div
        className="absolute -top-24 -left-20 w-[380px] h-[380px] rounded-full bg-primary/[0.03]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.1, 0.96, 1], x: [0, 12, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full bg-accent/[0.03]"
        style={{ filter: "blur(60px)" }}
        animate={{ scale: [1, 1.08, 0.94, 1], y: [0, -12, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 500" fill="none">
        {/* Flowing wave */}
        <motion.path
          d="M0 100 Q300 40 600 100 T1200 80"
          stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.05" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.path
          d="M0 420 Q400 480 800 420 T1200 440"
          stroke="var(--color-accent)" strokeWidth="0.8" strokeOpacity="0.04" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.4, ease: "easeOut" }}
        />
        {/* Hearts scattered */}
        <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M100 380 C97 375, 90 372, 90 368 C90 365, 93 363, 96 363 C98 363, 99 364, 100 366 C101 364, 102 363, 104 363 C107 363, 110 365, 110 368 C110 372, 103 375, 100 380Z" fill="var(--color-primary)" opacity="0.06" />
        </motion.g>
        <motion.g animate={{ y: [3, -5, 3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <path d="M1080 120 C1076 114, 1068 110, 1068 106 C1068 102, 1072 100, 1075 100 C1077 100, 1079 101, 1080 103 C1081 101, 1083 100, 1085 100 C1088 100, 1092 102, 1092 106 C1092 110, 1084 114, 1080 120Z" fill="var(--color-accent)" opacity="0.06" />
        </motion.g>
        {/* Pulsing circles */}
        <motion.circle cx="200" cy="200" r="35" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" strokeOpacity="0.05"
          animate={{ r: [35, 42, 35], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="1000" cy="350" r="45" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" strokeOpacity="0.04"
          animate={{ r: [45, 55, 45], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Dot grids */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}>
          {[...Array(3)].map((_, r) => [...Array(4)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={1060 + c * 22} cy={200 + r * 22} r="1.5" fill="var(--color-primary)" opacity="0.05" />
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
        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {whoWeHelp.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="group relative rounded-2xl p-6 lg:p-8 bg-white border border-neutral-200/50 shadow-[var(--shadow-card)] transition-all duration-600 ease-[var(--ease-smooth)] hover:shadow-[0_8px_30px_rgba(0,128,159,0.10),0_2px_8px_rgba(0,0,0,0.03)] hover:-translate-y-1.5"
            >
              {/* Warm background wash — fades in */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-lighter/0 via-primary-light/0 to-accent/[0.00] group-hover:from-primary-lighter/70 group-hover:via-primary-light/25 group-hover:to-accent/[0.04] transition-all duration-600 pointer-events-none" />

              {/* Left accent bar — slides in from top */}
              <div className="absolute left-0 top-1/2 w-[3px] h-0 group-hover:h-16 group-hover:top-[calc(50%-32px)] rounded-full bg-gradient-to-b from-primary to-primary-dark transition-all duration-500 ease-[var(--ease-smooth)]" />

              {/* Icon — ring glow expands + soft background shift */}
              <div className="relative w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] flex items-center justify-center text-primary transition-all duration-500 group-hover:from-primary/[0.14] group-hover:to-primary/[0.06] group-hover:shadow-[0_0_0_5px_rgba(0,128,159,0.06),0_0_20px_rgba(0,128,159,0.08)]">
                {icons[i]}
              </div>
              <h3 className="relative font-heading text-xl font-semibold text-secondary mb-3 transition-colors duration-400 group-hover:text-secondary">{item.title}</h3>
              <p className="relative text-neutral-500 text-[15px] leading-relaxed transition-colors duration-400 group-hover:text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
