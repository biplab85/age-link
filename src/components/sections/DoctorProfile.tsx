"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { doctorSectionHeading, doctorHomepageSummary } from "@/data/content";

function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary-lighter/40" />

      {/* Blobs */}
      <motion.div
        className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-primary/[0.035]"
        style={{ filter: "blur(80px)" }}
        animate={{ scale: [1, 1.1, 0.96, 1], x: [0, -15, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-accent/[0.03]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.08, 0.95, 1], y: [0, -12, 10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none">
        {/* Flowing curves */}
        <motion.path
          d="M0 150 Q300 80 600 150 T1200 130"
          stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.06" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.path
          d="M0 480 Q400 530 800 480 T1200 500"
          stroke="var(--color-accent)" strokeWidth="0.8" strokeOpacity="0.05" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
        />
        {/* Rings */}
        <motion.circle cx="1050" cy="150" r="60" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" opacity="0.05"
          animate={{ r: [60, 72, 60] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="180" cy="420" r="45" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" opacity="0.04"
          animate={{ r: [45, 55, 45] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Stethoscope */}
        <motion.g animate={{ y: [-4, 5, -4] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
          <path d="M1100 400 Q1100 380 1112 375 Q1124 380 1124 400" stroke="var(--color-primary)" strokeWidth="1.2" fill="none" opacity="0.06" strokeLinecap="round" />
          <circle cx="1112" cy="408" r="7" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
        </motion.g>
        {/* Medical shield */}
        <motion.g animate={{ y: [3, -4, 3], scale: [1, 1.05, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <path d="M80 140 L96 147 L96 158 C96 166 90 170 80 174 C70 170 64 166 64 158 L64 147 Z" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.06" />
          <rect x="77" y="151" width="6" height="14" rx="2" fill="var(--color-primary)" opacity="0.05" />
          <rect x="73" y="155" width="14" height="6" rx="2" fill="var(--color-primary)" opacity="0.05" />
        </motion.g>
        {/* Dot grid */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }}>
          {[...Array(3)].map((_, r) => [...Array(4)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={1060 + c * 20} cy={460 + r * 20} r="1.2" fill="var(--color-primary)" opacity="0.05" />
          )))}
        </motion.g>
      </svg>
    </div>
  );
}

export default function DoctorProfile() {
  const doc = doctorHomepageSummary;

  return (
    <section id="doctor" className="relative py-20 lg:py-28 overflow-hidden">
      <SectionBg />

      <Container className="relative z-[1]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Soft glow behind */}
              <div className="absolute -inset-6 rounded-3xl bg-primary/[0.06] blur-2xl" aria-hidden="true" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/[0.12] shadow-[var(--shadow-elevated)] border border-primary/[0.08]">
                <Image
                  src="/assets/images/Sitoh-YY.avif"
                  alt={doc.name}
                  width={600}
                  height={600}
                  className="w-full h-auto block"
                  sizes="(max-width: 1024px) 384px, 50vw"
                  priority
                />
              </div>

              {/* Credential card */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 top-12 bg-white rounded-xl shadow-[var(--shadow-elevated)] p-4 max-w-[180px] border border-neutral-200/50"
              >
                <p className="text-xs font-bold text-primary mb-0.5">FAMS, FRCP (Edin)</p>
                <p className="text-[11px] text-neutral-500 leading-snug">Fellow, Academy of Medicine Singapore</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="left">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
              {doctorSectionHeading}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-4 leading-tight">
              {doc.name}
            </h2>
            <p className="text-primary text-lg mb-2">{doc.title}</p>
            <p className="text-neutral-500 leading-relaxed mb-8">
              {doc.shortBio}
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-8">
              {doc.topCredentials.map((cred) => (
                <span
                  key={cred.abbreviation}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-primary/[0.06] text-primary border border-primary/[0.1] transition-all duration-400 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_16px_rgba(0,128,159,0.2)]"
                >
                  {cred.abbreviation}
                </span>
              ))}
            </div>

            <Button
              href={doc.ctaHref}
              size="lg"
              className="hover:shadow-[0_4px_20px_rgba(0,128,159,0.25)] hover:scale-[1.02] transition-all duration-400"
            >
              {doc.ctaLabel}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
