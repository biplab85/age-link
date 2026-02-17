"use client";

import { useEffect, useState } from "react";
import { contactInfo, headerCTA } from "@/data/content";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 flex gap-3">
      <a
        href={`tel:${contactInfo.emergencyPhone.replace(/\s/g, "")}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-primary text-primary font-semibold text-sm transition-colors hover:bg-primary hover:text-white"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </a>
      <a
        href={headerCTA.href}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-white font-semibold text-sm shadow-[0_2px_10px_rgba(0,128,159,0.3)] transition-colors hover:bg-primary-dark"
      >
        Book Now
      </a>
    </div>
  );
}
