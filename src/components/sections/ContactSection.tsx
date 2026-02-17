"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  contactHeading,
  contactSubheading,
  contactFormHeading,
  contactFormSubheading,
  contactSuccessMessage,
  contactInfo,
  contactFormFields,
} from "@/data/content";

function SectionBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-lighter/30 to-neutral-50" />

      <motion.div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary/[0.03]"
        style={{ filter: "blur(80px)" }}
        animate={{ scale: [1, 1.08, 0.95, 1], x: [0, -12, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 left-10 w-[320px] h-[320px] rounded-full bg-accent/[0.025]"
        style={{ filter: "blur(70px)" }}
        animate={{ scale: [1, 1.1, 0.96, 1], y: [0, -10, 12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" fill="none">
        <motion.path
          d="M0 100 Q300 50 600 100 T1200 80"
          stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.05" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <motion.path
          d="M0 530 Q400 570 800 530 T1200 540"
          stroke="var(--color-accent)" strokeWidth="0.8" strokeOpacity="0.04" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        {/* Envelope */}
        <motion.g animate={{ y: [-3, 4, -3], rotate: [-2, 3, -2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="60" y="450" width="30" height="22" rx="3" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.06" />
          <path d="M60 453 L75 465 L90 453" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" opacity="0.05" />
        </motion.g>
        {/* Phone */}
        <motion.g animate={{ y: [2, -5, 2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <rect x="1110" y="130" width="18" height="30" rx="3" stroke="var(--color-primary)" strokeWidth="0.8" fill="none" opacity="0.05" />
          <circle cx="1119" cy="154" r="2" stroke="var(--color-primary)" strokeWidth="0.6" fill="none" opacity="0.04" />
          <line x1="1115" y1="137" x2="1123" y2="137" stroke="var(--color-primary)" strokeWidth="0.6" opacity="0.04" />
        </motion.g>
        {/* Location pin */}
        <motion.g animate={{ y: [-4, 3, -4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
          <path d="M1090 430 C1090 420 1100 412 1100 412 C1100 412 1110 420 1110 430 C1110 436 1105 440 1100 440 C1095 440 1090 436 1090 430Z" stroke="var(--color-accent)" strokeWidth="0.8" fill="none" opacity="0.06" />
          <circle cx="1100" cy="428" r="3" fill="var(--color-accent)" opacity="0.05" />
        </motion.g>
        {/* Pulsing rings */}
        <motion.circle cx="200" cy="200" r="40" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" opacity="0.04"
          animate={{ r: [40, 48, 40] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle cx="1000" cy="500" r="35" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" opacity="0.04"
          animate={{ r: [35, 42, 35] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Dot grid */}
        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}>
          {[...Array(3)].map((_, r) => [...Array(4)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={70 + c * 20} cy={140 + r * 20} r="1.5" fill="var(--color-primary)" opacity="0.05" />
          )))}
        </motion.g>
      </svg>
    </div>
  );
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-neutral-200/70 text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/8 transition-all duration-300 bg-white";

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <SectionBg />
      <Container className="relative z-[1]">
        <SectionHeading title={contactHeading} subtitle={contactSubheading} tag="Get in Touch" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 max-w-6xl mx-auto">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] border border-neutral-200/40 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,128,159,0.08),0_2px_8px_rgba(0,0,0,0.03)]">
              <h3 className="font-heading text-xl font-semibold text-secondary mb-1">
                {contactFormHeading}
              </h3>
              <p className="text-sm text-neutral-500 mb-7">{contactFormSubheading}</p>

              {submitted ? (
                <div className="py-14 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/8 flex items-center justify-center">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-secondary mb-2">Message Sent</p>
                  <p className="text-neutral-500">{contactSuccessMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {contactFormFields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-semibold text-secondary mb-1.5">
                        {field.label}
                        {field.required && <span className="text-error ml-0.5">*</span>}
                      </label>

                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          rows={4}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className={`${inputClasses} resize-y`}
                        />
                      ) : field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className={inputClasses}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : field.type === "radio" ? (
                        <div className="flex gap-5 mt-1.5">
                          {field.options?.map((opt) => (
                            <label key={opt} className="flex items-center gap-2.5 text-[15px] text-neutral-600 cursor-pointer">
                              <input
                                type="radio"
                                name={field.name}
                                value={opt}
                                onChange={(e) => handleChange(field.name, e.target.value)}
                                className="w-4 h-4 accent-[#00809f]"
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                          className={inputClasses}
                        />
                      )}
                    </div>
                  ))}

                  <Button type="submit" size="lg" className="w-full sm:w-auto mt-2">
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-4">
              {/* Address */}
              <div className="group bg-white rounded-2xl p-6 border border-neutral-200/40 shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_32px_rgba(0,128,159,0.1),0_2px_8px_rgba(0,0,0,0.03)] hover:border-primary/15 hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] flex items-center justify-center text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-dark group-hover:bg-gradient-to-br group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(0,128,159,0.25)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-sm mb-1 transition-colors duration-300 group-hover:text-primary">{contactInfo.facilityName}</h4>
                    {contactInfo.address.map((line) => (
                      <p key={line} className="text-sm text-neutral-500">{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white rounded-2xl p-6 border border-neutral-200/40 shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_32px_rgba(0,128,159,0.1),0_2px_8px_rgba(0,0,0,0.03)] hover:border-primary/15 hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] flex items-center justify-center text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-dark group-hover:bg-gradient-to-br group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(0,128,159,0.25)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-sm mb-1 transition-colors duration-300 group-hover:text-primary">Phone</h4>
                    {contactInfo.phone.map((p) => (
                      <a
                        key={p.number}
                        href={`tel:${p.number.replace(/\s/g, "")}`}
                        className="block text-sm text-neutral-500 hover:text-primary transition-colors duration-300"
                      >
                        {p.label}: {p.number}
                      </a>
                    ))}
                    <a
                      href={`tel:${contactInfo.emergencyPhone.replace(/\s/g, "")}`}
                      className="block text-sm text-primary font-medium mt-1.5"
                    >
                      Emergency: {contactInfo.emergencyPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-white rounded-2xl p-6 border border-neutral-200/40 shadow-[var(--shadow-card)] transition-all duration-500 ease-[var(--ease-smooth)] hover:shadow-[0_8px_32px_rgba(0,128,159,0.1),0_2px_8px_rgba(0,0,0,0.03)] hover:border-primary/15 hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/[0.08] to-primary/[0.03] flex items-center justify-center text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-dark group-hover:bg-gradient-to-br group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(0,128,159,0.25)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-sm mb-1 transition-colors duration-300 group-hover:text-primary">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-neutral-500 hover:text-primary transition-colors duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Animated SVG Map */}
              <div className="rounded-2xl overflow-hidden border border-neutral-200/40 aspect-[4/3] bg-gradient-to-br from-primary-lighter/40 via-white to-neutral-50 shadow-[var(--shadow-xs)] relative">
                <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
                  {/* Grid streets */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Horizontal roads */}
                    <line x1="0" y1="80" x2="400" y2="80" stroke="var(--color-neutral-200)" strokeWidth="8" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="var(--color-neutral-200)" strokeWidth="10" />
                    <line x1="0" y1="220" x2="400" y2="220" stroke="var(--color-neutral-200)" strokeWidth="7" />
                    {/* Vertical roads */}
                    <line x1="100" y1="0" x2="100" y2="300" stroke="var(--color-neutral-200)" strokeWidth="7" />
                    <line x1="200" y1="0" x2="200" y2="300" stroke="var(--color-neutral-200)" strokeWidth="9" />
                    <line x1="310" y1="0" x2="310" y2="300" stroke="var(--color-neutral-200)" strokeWidth="7" />
                    {/* Road dashes — main road */}
                    <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="1.5" strokeDasharray="8 12" opacity="0.7" />
                    <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="1.5" strokeDasharray="8 12" opacity="0.7" />
                  </motion.g>

                  {/* Building blocks */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {/* Block A — top left */}
                    <rect x="20" y="20" width="65" height="45" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />
                    <rect x="28" y="28" width="12" height="10" rx="1.5" fill="var(--color-neutral-200)" opacity="0.6" />
                    <rect x="44" y="28" width="12" height="10" rx="1.5" fill="var(--color-neutral-200)" opacity="0.6" />
                    <rect x="60" y="28" width="12" height="10" rx="1.5" fill="var(--color-neutral-200)" opacity="0.6" />
                    <rect x="28" y="42" width="12" height="10" rx="1.5" fill="var(--color-neutral-200)" opacity="0.5" />
                    <rect x="44" y="42" width="12" height="10" rx="1.5" fill="var(--color-neutral-200)" opacity="0.5" />

                    {/* Block B — top center */}
                    <rect x="120" y="15" width="60" height="50" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />
                    <rect x="128" y="24" width="18" height="14" rx="2" fill="var(--color-neutral-200)" opacity="0.5" />
                    <rect x="150" y="24" width="18" height="14" rx="2" fill="var(--color-neutral-200)" opacity="0.5" />
                    <rect x="128" y="42" width="18" height="14" rx="2" fill="var(--color-neutral-200)" opacity="0.4" />

                    {/* Block C — top right */}
                    <rect x="325" y="20" width="55" height="45" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />

                    {/* Block D — mid left */}
                    <rect x="15" y="95" width="70" height="40" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />

                    {/* Block E — mid right */}
                    <rect x="325" y="95" width="60" height="40" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />

                    {/* Block F — bottom left */}
                    <rect x="20" y="165" width="65" height="40" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />

                    {/* Block G — bottom center-left */}
                    <rect x="120" y="165" width="60" height="40" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />

                    {/* Block H — bottom right */}
                    <rect x="325" y="165" width="55" height="40" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />

                    {/* Block I — far bottom */}
                    <rect x="15" y="235" width="75" height="45" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />
                    <rect x="120" y="240" width="65" height="40" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />
                    <rect x="330" y="235" width="50" height="45" rx="4" fill="var(--color-neutral-100)" stroke="var(--color-neutral-200)" strokeWidth="0.5" />
                  </motion.g>

                  {/* Hospital building — highlighted */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <rect x="215" y="93" width="80" height="44" rx="5" fill="var(--color-primary-light)" stroke="var(--color-primary)" strokeWidth="1" opacity="0.9" />
                    {/* Hospital windows */}
                    <rect x="224" y="101" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.15" />
                    <rect x="238" y="101" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.15" />
                    <rect x="252" y="101" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.15" />
                    <rect x="266" y="101" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.15" />
                    <rect x="224" y="115" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.12" />
                    <rect x="238" y="115" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.12" />
                    <rect x="252" y="115" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.12" />
                    <rect x="266" y="115" width="10" height="8" rx="1.5" fill="var(--color-primary)" opacity="0.12" />
                    {/* Medical cross on building */}
                    <rect x="251" y="126" width="4" height="10" rx="1" fill="var(--color-primary)" opacity="0.3" />
                    <rect x="248" y="129" width="10" height="4" rx="1" fill="var(--color-primary)" opacity="0.3" />
                  </motion.g>

                  {/* Green areas / parks */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <ellipse cx="260" cy="260" rx="30" ry="18" fill="var(--color-success)" opacity="0.08" />
                    <circle cx="250" cy="256" r="5" fill="var(--color-success)" opacity="0.12" />
                    <circle cx="262" cy="258" r="4" fill="var(--color-success)" opacity="0.1" />
                    <circle cx="270" cy="262" r="3.5" fill="var(--color-success)" opacity="0.1" />
                    <ellipse cx="50" y="150" rx="20" ry="10" fill="var(--color-success)" opacity="0.06" />
                  </motion.g>

                  {/* Animated location pin */}
                  <motion.g
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Pin shadow */}
                    <ellipse cx="255" cy="88" rx="10" ry="3" fill="var(--color-primary)" opacity="0.1" />
                    {/* Pin body */}
                    <path
                      d="M255 52 C245 52, 237 60, 237 70 C237 80, 255 88, 255 88 C255 88, 273 80, 273 70 C273 60, 265 52, 255 52Z"
                      fill="var(--color-primary)"
                      opacity="0.9"
                    />
                    <circle cx="255" cy="68" r="6" fill="white" opacity="0.9" />
                    {/* Medical cross inside pin */}
                    <rect x="253.5" y="64" width="3" height="8" rx="0.8" fill="var(--color-primary)" opacity="0.7" />
                    <rect x="251" y="66.5" width="8" height="3" rx="0.8" fill="var(--color-primary)" opacity="0.7" />
                  </motion.g>

                  {/* Pulsing rings around pin */}
                  <motion.circle
                    cx="255" cy="115" r="16"
                    stroke="var(--color-primary)" strokeWidth="1.5" fill="none"
                    animate={{ r: [16, 28, 16], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.circle
                    cx="255" cy="115" r="16"
                    stroke="var(--color-primary)" strokeWidth="1" fill="none"
                    animate={{ r: [16, 36, 16], opacity: [0.12, 0, 0.12] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                  />

                  {/* Road label */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <rect x="120" y="142" width="65" height="16" rx="3" fill="white" opacity="0.85" />
                    <text x="152" y="153.5" textAnchor="middle" fill="var(--color-neutral-500)" fontSize="7" fontFamily="var(--font-body)" fontWeight="600">
                      Irrawaddy Rd
                    </text>
                  </motion.g>
                </svg>

                {/* Clinic name overlay */}
                <motion.div
                  className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-primary/10 shadow-[0_2px_12px_rgba(0,128,159,0.08)]"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-secondary leading-tight">Mt Elizabeth Novena</p>
                      <p className="text-[10px] text-neutral-400">38 Irrawaddy Road, Singapore</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
