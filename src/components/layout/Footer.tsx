"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  siteConfig,
  footerDescription,
  footerColumns,
  contactInfo,
  socialLinks,
} from "@/data/content";

function FooterBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b24] via-[#152d3e] to-[#0f2633]" />

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px]" />

      {/* Morphing blobs */}
      <motion.div
        className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full bg-primary/[0.04]"
        style={{ filter: "blur(60px)" }}
        animate={{ scale: [1, 1.1, 0.96, 1], x: [0, -10, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-12 -left-12 w-[250px] h-[250px] rounded-full bg-accent/[0.025]"
        style={{ filter: "blur(50px)" }}
        animate={{ scale: [1, 1.08, 0.95, 1], y: [0, -8, 6, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* SVG decorations */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400" fill="none">
        {/* Top wave separator */}
        <motion.path
          d="M0 20 Q300 0 600 20 T1200 10"
          stroke="white" strokeWidth="0.5" strokeOpacity="0.04" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        {/* Bottom wave */}
        <motion.path
          d="M0 360 Q400 390 800 360 T1200 370"
          stroke="white" strokeWidth="0.4" strokeOpacity="0.03" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        {/* Pulsing rings */}
        <motion.circle cx="100" cy="80" r="40" stroke="white" strokeWidth="0.4" fill="none" opacity="0.03"
          animate={{ r: [40, 48, 40], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="1080" cy="320" r="50" stroke="white" strokeWidth="0.4" fill="none" opacity="0.025"
          animate={{ r: [50, 60, 50], opacity: [0.025, 0.04, 0.025] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Medical cross */}
        <motion.g animate={{ y: [-3, 3, -3], rotate: [0, 6, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="1120" y="60" width="5" height="16" rx="2" fill="white" opacity="0.03" />
          <rect x="1114.5" y="65.5" width="16" height="5" rx="2" fill="white" opacity="0.03" />
        </motion.g>
        {/* Stethoscope */}
        <motion.g animate={{ y: [2, -3, 2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <path d="M60 320 Q60 308 68 304 Q76 308 76 320" stroke="white" strokeWidth="0.8" fill="none" opacity="0.03" strokeLinecap="round" />
          <circle cx="68" cy="326" r="5" stroke="white" strokeWidth="0.5" fill="none" opacity="0.025" />
        </motion.g>
        {/* Dot grid — right */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}>
          {[...Array(3)].map((_, r) => [...Array(4)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={1060 + c * 16} cy={140 + r * 16} r="0.8" fill="white" opacity="0.03" />
          )))}
        </motion.g>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="site-footer" className="relative text-white pt-16 pb-8 overflow-hidden">
      <FooterBg />

      <Container className="relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label={siteConfig.name}>
              <Image
                src={siteConfig.logoFooter}
                alt={siteConfig.name}
                width={200}
                height={56}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              {footerDescription}
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center border border-white/[0.06] transition-all duration-400 hover:bg-primary/25 hover:border-primary/30 hover:shadow-[0_0_16px_rgba(0,128,159,0.15)] hover:scale-105"
                  aria-label={link.platform}
                >
                  <svg className="w-4 h-4 text-white/50 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    {link.platform === "LinkedIn" ? (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    ) : (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white/80 mb-4 text-xs uppercase tracking-[0.12em]">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-1.5 text-white/40 text-sm transition-all duration-300 hover:text-primary hover:translate-x-0.5"
                    >
                      <span className="w-0 group-hover/link:w-1.5 h-px bg-primary transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + contact */}
        <div className="mt-14 pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-white/30">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {contactInfo.facilityName}
            </span>
            <a
              href={`tel:${contactInfo.phone[0].number.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Tel: {contactInfo.phone[0].number}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {contactInfo.email}
            </a>
          </div>
          <div className="text-end">
            <p className="text-white/20 text-xs">{siteConfig.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
