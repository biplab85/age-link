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

              {/* Map placeholder */}
              <div className="group rounded-2xl overflow-hidden border border-neutral-200/40 aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center shadow-[var(--shadow-xs)] transition-all duration-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-primary/10">
                <div className="text-center text-neutral-400 transition-colors duration-300 group-hover:text-primary/40">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="text-sm">Google Maps Embed</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
