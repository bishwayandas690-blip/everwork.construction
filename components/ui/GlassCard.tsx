"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  id?: string;
  role?: string;
  tabIndex?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  onClick,
  id,
  role,
  tabIndex,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-xl ${hover ? "cursor-pointer" : ""} ${className}`}
      id={id}
      role={role}
      tabIndex={tabIndex}
      onClick={onClick}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 20px 48px rgba(0,0,0,0.12)",
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
