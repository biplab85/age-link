"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { galleryHeading, gallerySubheading, galleryImages } from "@/data/content";

const cardGradients = [
  "from-[#e8f6fa] via-[#d6eef5] to-primary/[0.08]",
  "from-[#fdf6ec] via-[#f8e8cc] to-accent/[0.08]",
  "from-[#ece8f6] via-[#ddd6f0] to-[#8b6ec0]/[0.06]",
  "from-[#e8f6f0] via-[#d0f0e4] to-[#10b981]/[0.06]",
  "from-[#f6eee8] via-[#f0ddd0] to-[#d4856a]/[0.06]",
  "from-[#e8f0f6] via-[#d6e4f0] to-[#4a80b0]/[0.06]",
];

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
                {/* Placeholder with unique gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[i % cardGradients.length]} flex items-center justify-center`}>
                  <div className="text-center text-secondary/20">
                    <svg className="w-8 h-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs">{img.caption}</p>
                  </div>
                </div>

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
        </div>
      </Container>
    </section>
  );
}
