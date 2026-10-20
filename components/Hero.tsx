"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { company } from "@/data/company";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToNext = () => {
    const el = document.querySelector("#about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center"
      aria-label="Hero — Everwork Construction"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={company.heroPosterPath}
          aria-hidden="true"
          preload="metadata"
        >
          <source src={company.heroVideoPath} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 hero-video-overlay" aria-hidden="true" />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Brand label */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-px bg-[#A87C4F]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70 font-mono-tech">
              Everwork Construction
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
          >
            Building With{" "}
            <span className="italic">Precision.</span>
            <br />
            Delivering With{" "}
            <span className="italic">Purpose.</span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
          >
            {company.subTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A87C4F] text-white font-semibold text-sm tracking-wide rounded hover:bg-[#8D6740] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="hero-cta-quote"
              aria-label="Request a project quote"
            >
              Request a Quote
              <ChevronRight size={16} />
            </motion.button>

            <motion.button
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-sm tracking-wide rounded border border-white/25 backdrop-blur-sm hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="hero-cta-explore"
              aria-label="Explore our work"
            >
              Explore Our Work
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Location badge */}
      <motion.div
        className="absolute bottom-8 left-4 sm:left-8 z-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#A87C4F]" />
        <span className="text-xs text-white/60 tracking-widest uppercase font-mono-tech">
          Panisagar · North Tripura
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 right-4 sm:right-8 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-widest uppercase font-mono-tech rotate-90 mb-2 hidden sm:block">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
