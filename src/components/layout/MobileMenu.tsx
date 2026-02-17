"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, headerCTA, siteConfig } from "@/data/content";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export default function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleClick = (href: string) => {
    onNavigate(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-[380px] bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-neutral-100">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={180}
                height={50}
                className="h-12 w-auto"
              />
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item.href)}
                  className="block w-full text-left py-4 text-[15px] font-medium text-neutral-700 hover:text-primary transition-colors border-b border-neutral-100 last:border-0"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-neutral-100">
              <Button onClick={() => handleClick(headerCTA.href)} className="w-full">
                {headerCTA.label}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
