"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { company } from "@/data/company";

// Inline SVG social icons (lucide-react v0.x doesn't include brand icons)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Directors", href: "#board-of-directors" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Equipment", href: "#equipment" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#111111] text-white/70"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Everwork Construction Logo"
                width={120}
                height={120}
                className="w-auto object-contain mb-2"
                style={{ maxHeight: "80px" }}
              />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C49A6C] block">
                Construction Private Limited
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              Civil construction, planning, estimation, surveying, supervision and
              construction-related services from Panisagar, North Tripura.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: InstagramIcon, href: company.social.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: company.social.facebook, label: "Facebook" },
                { icon: LinkedInIcon, href: company.social.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${label}`}
                  id={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C49A6C] font-mono-tech mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-white/55 hover:text-white transition-colors"
                  id={`footer-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#C49A6C] font-mono-tech mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
                id="footer-phone"
              >
                <Phone size={13} className="shrink-0" />
                {company.phone}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
                id="footer-whatsapp"
              >
                <MessageCircle size={13} className="shrink-0" />
                WhatsApp
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
                id="footer-email"
              >
                <Mail size={13} className="shrink-0" />
                {company.email}
              </a>
              <a
                href={company.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
                id="footer-address"
              >
                <MapPin size={13} className="shrink-0 mt-0.5" />
                <span className="leading-snug">{company.address.full}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2026 Everwork Construction Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Incorporated 04 August 2025 · Panisagar, Tripura
          </p>
        </div>
      </div>
    </footer>
  );
}
