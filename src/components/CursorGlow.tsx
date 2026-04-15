"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    setEnabled(true);

    let targetX = window.innerWidth * 0.6;
    let targetY = window.innerHeight * 0.18;
    let currentX = targetX;
    let currentY = targetY;
    let hasMoved = false;
    const followStrength = 0.24;

    const updatePosition = () => {
      currentX += (targetX - currentX) * followStrength;
      currentY += (targetY - currentY) * followStrength;

      if (Math.abs(targetX - currentX) < 0.1) {
        currentX = targetX;
      }
      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY;
      }

      const glow = glowRef.current;
      if (glow) {
        glow.style.transform = `translate3d(${currentX - 360}px, ${currentY - 360}px, 0)`;
        if (hasMoved) {
          glow.style.opacity = "1";
        }
      }

      animationFrameRef.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!hasMoved) {
        currentX = targetX;
        currentY = targetY;
      }
      hasMoved = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div
        ref={glowRef}
        className="absolute h-[45rem] w-[45rem] rounded-full opacity-0 blur-3xl transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(131,183,165,0.14) 0%, rgba(131,183,165,0.08) 28%, rgba(131,183,165,0.03) 48%, rgba(12,19,24,0) 72%)",
          transform: "translate3d(-9999px, -9999px, 0)"
        }}
      />
    </div>
  );
}
