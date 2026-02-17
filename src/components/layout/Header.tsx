"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { navigation, headerCTA, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navigation.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-400",
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[var(--shadow-header)] border-b border-neutral-200/30"
            : "bg-white/70 backdrop-blur-sm"
        )}
      >
        <Container className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5 shrink-0"
            aria-label={siteConfig.name}
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={160}
              height={44}
              className="max-h-11 w-auto"
              style={{ height: "44px", width: "auto" }}
              priority
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  "relative px-3.5 py-2 text-[14px] font-medium rounded-lg transition-all duration-300",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-neutral-500 hover:text-secondary"
                )}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-primary" />
                )}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo(headerCTA.href)}
              size="sm"
              className="hidden sm:inline-flex"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              {headerCTA.label}
            </Button>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-neutral-100/80 transition-colors duration-300"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onNavigate={scrollTo} />
    </>
  );
}
