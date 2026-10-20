"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  id?: string;
  "aria-label"?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  type = "button",
  disabled = false,
  className = "",
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded transition-all duration-200 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-[#A87C4F] text-white hover:bg-[#8D6740] active:scale-[0.98] focus-visible:ring-[#A87C4F]",
    secondary:
      "bg-transparent text-[#1C1C1E] border border-[#1C1C1E]/20 hover:bg-[#F0EDE8] active:scale-[0.98] focus-visible:ring-[#1C1C1E]",
    ghost:
      "bg-transparent text-[#A87C4F] border border-[#A87C4F]/30 hover:bg-[#F5EDE2] active:scale-[0.98] focus-visible:ring-[#A87C4F]",
    glass:
      "bg-white/20 text-white border border-white/30 backdrop-blur-md hover:bg-white/30 active:scale-[0.98] focus-visible:ring-white/60",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        id={id}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      id={id}
      aria-label={ariaLabel}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {children}
    </motion.button>
  );
}
