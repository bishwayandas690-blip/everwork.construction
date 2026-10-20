"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#F8F6F3" }}
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Subtle warm texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(168,124,79,0.07) 0%, transparent 70%),
                                radial-gradient(ellipse 50% 40% at 80% 80%, rgba(196,154,108,0.05) 0%, transparent 60%)`,
            }}
          />

          {/* Decorative horizontal lines */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, #A87C4F 40%, #C49A6C 60%, transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,124,79,0.3), transparent)" }}
          />

          {/* Floating soft orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 80 + i * 30,
                height: 80 + i * 30,
                background: `rgba(168,124,79,${0.04 - i * 0.005})`,
                left: `${10 + i * 18}%`,
                top: `${15 + (i % 2) * 50}%`,
                filter: "blur(40px)",
              }}
              animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
              transition={{
                duration: 4 + i * 0.6,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-8 z-10">

            {/* Logo with light glass card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative"
            >
              {/* Spinning bronze ring */}
              <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: -3,
                  background: "conic-gradient(from 0deg, transparent 0%, #A87C4F 50%, transparent 100%)",
                  borderRadius: "50%",
                  padding: "2px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: "#F8F6F3" }}
                />
              </motion.div>

              {/* Logo image */}
              <div
                className="relative w-28 h-28 rounded-full overflow-hidden m-1"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168,124,79,0.25)",
                  boxShadow: "0 8px 32px rgba(168,124,79,0.15), 0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="/logo.jpeg"
                  alt="Everwork Construction"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </motion.div>

            {/* Company name */}
            <motion.div
              className="flex flex-col items-center gap-1 text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span
                className="text-2xl font-semibold tracking-[0.15em] uppercase"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#1C1C1E",
                }}
              >
                Everwork
              </span>
              <span
                className="text-[11px] tracking-[0.3em] uppercase font-medium"
                style={{ color: "#A87C4F" }}
              >
                Construction Private Limited
              </span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-56 flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div
                className="w-full h-[2px] rounded-full overflow-hidden"
                style={{ background: "rgba(168,124,79,0.15)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #A87C4F, #C49A6C)",
                    width: `${progress}%`,
                    boxShadow: "0 0 8px rgba(168,124,79,0.4)",
                  }}
                />
              </div>
              <div className="flex justify-between">
                <span
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: "rgba(28,28,30,0.35)", fontFamily: "var(--font-mono)" }}
                >
                  Loading
                </span>
                <span
                  className="text-[10px] tabular-nums font-medium"
                  style={{ color: "#A87C4F", fontFamily: "var(--font-mono)" }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-10 text-[11px] tracking-[0.25em] uppercase"
            style={{ color: "rgba(28,28,30,0.35)", fontFamily: "var(--font-mono)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Building with precision · Panisagar, Tripura
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
