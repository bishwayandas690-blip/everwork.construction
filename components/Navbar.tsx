"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { company } from "@/data/company";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Directors", href: "#board-of-directors" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onQuoteClick }: { onQuoteClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "glass border-b border-white/30 shadow-sm"
            : "bg-transparent"
          }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center focus:outline-none"
            aria-label="Everwork Construction — go to top"
            id="navbar-logo"
          >
            <div
              className={`relative transition-all duration-300 ${scrolled ? "h-12" : "h-14"
                }`}
              style={{ aspectRatio: "auto" }}
            >
              <Image
                src="/logo.png"
                alt="Everwork Construction Logo"
                height={scrolled ? 48 : 56}
                width={scrolled ? 48 : 56}
                className={`h-full w-auto object-contain transition-all duration-300 ${scrolled ? "" : "drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]"
                  }`}
                priority
              />
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#A87C4F] focus:outline-none focus-visible:text-[#A87C4F] ${scrolled ? "text-[#1C1C1E]/80" : "text-white/90"
                  }`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={onQuoteClick}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide rounded transition-all duration-200 ${scrolled
                  ? "bg-[#A87C4F] text-white hover:bg-[#8D6740]"
                  : "bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white/25"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              id="navbar-cta-quote"
              aria-label="Request a quote"
            >
              Get a Quote
              <ChevronRight size={15} />
            </motion.button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={`lg:hidden p-2 rounded transition-colors ${scrolled ? "text-[#1C1C1E]" : "text-white"
                }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              id="navbar-hamburger"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-72 glass flex flex-col pt-24 pb-10 px-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-lg font-medium text-[#1C1C1E] py-3 border-b border-[#E8E4DF] hover:text-[#A87C4F] transition-colors"
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    id={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-3">
                <motion.button
                  onClick={() => { setMobileOpen(false); onQuoteClick(); }}
                  className="w-full py-3.5 bg-[#A87C4F] text-white font-semibold rounded text-sm tracking-wide hover:bg-[#8D6740] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  id="mobile-cta-quote"
                >
                  Request a Quote
                </motion.button>
                <a
                  href={`tel:${company.phone}`}
                  className="w-full py-3 border border-[#A87C4F]/30 text-[#A87C4F] font-medium rounded text-sm tracking-wide text-center hover:bg-[#F5EDE2] transition-colors"
                  id="mobile-cta-call"
                >
                  Call Us
                </a>
              </div>

              <p className="mt-auto text-xs text-[#6B6462] leading-relaxed">
                {company.address.full}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
