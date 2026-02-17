"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

function ServiceCard({ service, icon }: { service: typeof homepageServices[number]; icon: React.ReactNode }) {
  return (
    <div className="group h-full relative p-6 lg:p-7 rounded-2xl bg-white border border-neutral-200/50 shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_32px_rgba(0,128,159,0.10),0_2px_6px_rgba(0,0,0,0.03)] hover:-translate-y-1 overflow-hidden">
      {/* Subtle gradient overlay — washes in from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.00] to-transparent group-hover:from-primary/[0.03] transition-all duration-600 pointer-events-none" />

      {/* Bottom gradient line — sweeps in from left */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary-dark to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[var(--ease-smooth)] origin-left" />

      {/* Icon */}
      <div className="relative w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] flex items-center justify-center text-primary transition-all duration-500 group-hover:text-primary-dark group-hover:from-primary/[0.14] group-hover:to-primary/[0.06]">
        {icon}
      </div>
      <h3 className="relative font-heading text-lg font-semibold text-secondary mb-2.5 transition-colors duration-400 group-hover:text-primary">
        {service.title}
      </h3>
      <p className="relative text-sm text-neutral-500 leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <span className="relative inline-flex items-center gap-1.5 text-sm font-medium text-primary/40 group-hover:text-primary transition-all duration-400">
        Learn more
        <svg className="w-3.5 h-3.5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400 ease-[var(--ease-smooth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      <SectionBg />
      <Container className="relative z-[1]">
        <SectionHeading title={servicesHeading} subtitle={servicesSubheading} tag="What We Offer" />

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {homepageServices.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} icon={serviceIcons[i]} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={14}
            slidesPerView={1.12}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="!pb-12"
          >
            {homepageServices.map((service, i) => (
              <SwiperSlide key={service.slug}>
                <ServiceCard service={service} icon={serviceIcons[i]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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
