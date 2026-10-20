"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const textColor = light ? "text-white" : "text-[#1C1C1E]";
  const subtitleColor = light ? "text-white/65" : "text-[#6B6462]";
  const labelColor = light ? "text-white/50" : "text-[#A87C4F]";

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {label && (
        <span
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${labelColor} font-mono-tech`}
        >
          {label}
        </span>
      )}
      <div className={`flex flex-col gap-2 ${alignClass}`}>
        {align === "left" && <div className="bronze-line" />}
        {align === "center" && (
          <div className="bronze-line mx-auto" />
        )}
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight ${textColor}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
