"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { galleryHeading, gallerySubheading, galleryImages } from "@/data/content";

function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f6fa] via-[#f0f1f8] to-[#fdf6ec]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,128,159,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(232,168,56,0.05)_0%,transparent_50%)]" />

      {/* Teal blob — top right */}
      <motion.div
        className="absolute -top-20 right-10 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/[0.06] to-[#0097b8]/[0.03]"
        style={{ filter: "blur(80px)" }}
        animate={{ scale: [1, 1.1, 0.95, 1], x: [0, -15, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Gold blob — bottom left */}
      <motion.div
        className="absolute -bottom-16 -left-16 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-accent/[0.06] to-[#f0c060]/[0.03]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.12, 0.96, 1], y: [0, -12, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Lavender blob — center */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-b from-[#c8b8e8]/[0.05] to-[#a090d0]/[0.02]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.08, 0.97, 1], x: [0, 10, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 500" fill="none">
        <motion.path
          d="M0 80 Q300 30 600 80 T1200 60"
          stroke="var(--color-primary)" strokeWidth="0.8" strokeOpacity="0.05" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.path
          d="M0 440 Q400 480 800 440 T1200 460"
          stroke="var(--color-accent)" strokeWidth="0.6" strokeOpacity="0.04" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        {/* Camera icon outline */}
        <motion.g animate={{ y: [-3, 4, -3], rotate: [-2, 3, -2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="60" y="380" width="32" height="24" rx="4" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.05" />
          <circle cx="76" cy="392" r="7" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" opacity="0.05" />
          <rect x="68" y="378" width="16" height="4" rx="2" fill="var(--color-primary)" opacity="0.04" />
        </motion.g>
        {/* Pulsing rings */}
        <motion.circle cx="1080" cy="120" r="35" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" opacity="0.04"
          animate={{ r: [35, 42, 35] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="200" cy="200" r="28" stroke="var(--color-accent)" strokeWidth="0.5" fill="none" opacity="0.04"
          animate={{ r: [28, 34, 28] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Image frame icons */}
        <motion.g animate={{ y: [2, -4, 2] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <rect x="1100" y="360" width="24" height="18" rx="2" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" opacity="0.05" />
          <path d="M1100 372 L1108 366 L1114 370 L1120 364 L1124 368" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" opacity="0.04" />
          <circle cx="1106" cy="366" r="2" fill="var(--color-accent)" opacity="0.04" />
        </motion.g>
      </svg>
    </div>
  );
}

export default function ImageGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      try {
        // @ts-expect-error -- CSS module import
        await import("@fancyapps/ui/dist/fancybox/fancybox.css");
        const mod = await import("@fancyapps/ui/dist/fancybox/fancybox.js");
        const Fancybox = mod.Fancybox;
        if (galleryRef.current) {
          Fancybox.bind(galleryRef.current, "[data-fancybox='gallery']", {});
          cleanup = () => Fancybox.destroy();
        }
      } catch {
        // Fancybox not available
      }
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section id="gallery" className="relative py-20 lg:py-28 overflow-hidden">
      <SectionBg />

      <Container className="relative z-[1]">
        <SectionHeading title={galleryHeading} subtitle={gallerySubheading} tag="Our Facility" />
        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 0.06}>
              <a
                href={img.src}
                data-fancybox="gallery"
                data-caption={img.caption}
                className="group relative block rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 cursor-pointer shadow-[var(--shadow-xs)] transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_32px_rgba(0,128,159,0.12),0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-400">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500" />
              </a>
            </ScrollReveal>
          ))}

          {/* 6th card — CTA with animated medical SVG */}
          <ScrollReveal delay={galleryImages.length * 0.06}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/[0.06] via-primary-lighter/60 to-white border border-primary/[0.1] shadow-[var(--shadow-xs)] flex flex-col items-center justify-center p-6 text-center">
              {/* Animated medical equipment SVG */}
              <svg viewBox="0 0 120 90" fill="none" className="w-24 h-auto mb-4">
                {/* Stethoscope */}
                <motion.path
                  d="M30 20 Q30 10, 40 10 Q50 10, 50 20"
                  stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none"
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.path
                  d="M30 20 L30 45 Q30 58, 40 58 Q50 58, 50 45 L50 20"
                  stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" fill="none"
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }}
                />
                <motion.circle
                  cx="40" cy="62" r="6" stroke="var(--color-primary)" strokeWidth="1.8" fill="none"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="40" cy="62" r="2.5" fill="var(--color-primary)" opacity="0.25" />

                {/* Heartbeat line */}
                <motion.path
                  d="M60 45 L70 45 L74 45 L78 30 L84 60 L90 38 L94 52 L98 45 L110 45"
                  stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
                  animate={{ pathLength: [0, 1, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.7, 1] }}
                />

                {/* Medical cross */}
                <motion.g
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <rect x="80" y="10" width="5" height="16" rx="1.5" fill="var(--color-primary)" opacity="0.4" />
                  <rect x="75" y="15" width="15" height="6" rx="1.5" fill="var(--color-primary)" opacity="0.4" />
                </motion.g>

                {/* Small pulse ring */}
                <motion.circle
                  cx="85" cy="18" r="12" stroke="var(--color-primary)" strokeWidth="0.8" fill="none"
                  animate={{ r: [12, 18, 12], opacity: [0.15, 0, 0.15] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                />
              </svg>

              <p className="text-base font-bold leading-snug mb-1 bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">
                Caring for You
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Premium geriatric care in a warm, professional setting
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
