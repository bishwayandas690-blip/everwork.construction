"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

interface ContactProps {
  onQuoteClick: () => void;
}

export default function Contact({ onQuoteClick }: ContactProps) {
  const items = [
    {
      icon: Phone,
      label: "Phone",
      value: company.phone,
      href: `tel:${company.phone}`,
      id: "contact-phone",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: company.whatsapp,
      href: `https://wa.me/${company.whatsapp}`,
      id: "contact-whatsapp",
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: company.email,
      href: `mailto:${company.email}`,
      id: "contact-email",
    },
    {
      icon: MapPin,
      label: "Address",
      value: company.address.full,
      href: company.googleMapsUrl,
      id: "contact-address",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-[#F8F6F3]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              label="Get in Touch"
              title="Contact Everwork"
              subtitle="Reach out with your project requirements. We will review and respond promptly."
              align="left"
            />

            <div className="mt-10 space-y-4">
              {items.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E8E4DF] hover:border-[#A87C4F]/30 hover:shadow-md transition-all duration-250 group"
                  id={item.id}
                  aria-label={`${item.label}: ${item.value}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  whileHover={{ x: 3 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5EDE2] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#A87C4F] transition-colors duration-250">
                    <item.icon
                      size={17}
                      className="text-[#A87C4F] group-hover:text-white transition-colors duration-250"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9E9896] font-mono-tech mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#1C1C1E] break-words">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — CTA panel */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ background: "var(--charcoal)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="p-10">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C49A6C] font-mono-tech mb-4">
                Start a Project
              </p>
              <h3
                className="font-display text-3xl font-semibold text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Have a construction project in mind?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Submit your project requirements and our team will review and get back to you
                with a preliminary response.
              </p>

              <motion.button
                onClick={onQuoteClick}
                className="w-full flex items-center justify-between gap-3 px-6 py-4 bg-[#A87C4F] text-white font-semibold text-sm tracking-wide rounded hover:bg-[#8D6740] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                id="contact-cta-quote"
                aria-label="Request a project quote"
              >
                Request a Quote
                <ChevronRight size={16} />
              </motion.button>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                  id="contact-cta-phone"
                >
                  <Phone size={14} />
                  Call us
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                  id="contact-cta-whatsapp"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
