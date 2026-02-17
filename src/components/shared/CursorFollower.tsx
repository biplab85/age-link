"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ dot: { x: 0, y: 0 }, ring: { x: 0, y: 0 } });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only show on devices with a fine pointer (no touch)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onMouseEnterInteractive = () => setHovering(true);
    const onMouseLeaveInteractive = () => setHovering(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const animate = () => {
      const { x: mx, y: my } = mouse.current;
      // Dot follows closely
      pos.current.dot.x += (mx - pos.current.dot.x) * 0.25;
      pos.current.dot.y += (my - pos.current.dot.y) * 0.25;
      // Ring follows with lag
      pos.current.ring.x += (mx - pos.current.ring.x) * 0.12;
      pos.current.ring.y += (my - pos.current.ring.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.dot.x}px, ${pos.current.dot.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.ring.x}px, ${pos.current.ring.y}px) translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    // Attach hover listeners to interactive elements
    const attachHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [data-cursor-hover]");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
      return targets;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    const targets = attachHoverListeners();

    rafId.current = requestAnimationFrame(animate);

    // Re-attach on DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [visible, hovering]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-2 w-2 rounded-full bg-primary"
        style={{ willChange: "transform" }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 h-8 w-8 rounded-full border-[1.5px] border-primary/40"
        style={{
          willChange: "transform",
          transition: "width 300ms ease, height 300ms ease, border-color 300ms ease",
          ...(hovering && { width: 48, height: 48, borderColor: "rgba(0,128,159,0.2)" }),
        }}
      />
    </div>
  );
}
