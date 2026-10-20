"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Zap,
  Landmark,
  Calculator,
  ClipboardCheck,
  Ruler,
  Package,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

// Icon map
const iconMap: Record<string, React.ElementType> = {
  Building2,
  Zap,
  Landmark,
  Calculator,
  ClipboardCheck,
  Ruler,
  Package,
};

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section-padding bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            label="What We Do"
            title="Our Capabilities"
            align="left"
          />
          <motion.p
            className="max-w-md text-[#6B6462] leading-relaxed lg:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From site estimation to final handover — our capabilities cover every
            technical phase of a construction project.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {company.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                className="relative group p-6 rounded-xl border cursor-default overflow-hidden transition-all duration-300"
                style={{
                  background: isHovered
                    ? "rgba(255,255,255,0.85)"
                    : "var(--off-white)",
                  borderColor: isHovered
                    ? "rgba(168,124,79,0.35)"
                    : "var(--border-grey)",
                  boxShadow: isHovered
                    ? "0 16px 40px rgba(168,124,79,0.10)"
                    : "none",
                  backdropFilter: isHovered ? "blur(12px)" : "none",
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                id={`service-card-${service.id}`}
              >
                {/* Bronze accent top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A87C4F] to-[#C49A6C] rounded-t-xl"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{
                    background: isHovered ? "#F5EDE2" : "#EDEAE5",
                  }}
                  animate={{
                    rotate: isHovered ? [0, -4, 4, 0] : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {Icon && (
                    <Icon
                      size={22}
                      className="transition-colors duration-300"
                      style={{ color: isHovered ? "#A87C4F" : "#8A8380" }}
                    />
                  )}
                </motion.div>

                <h3 className="font-semibold text-[#1C1C1E] mb-2 text-[0.9375rem] leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B6462] leading-relaxed">
                  {service.description}
                </p>

                {/* Index number */}
                <span
                  className="absolute bottom-4 right-5 text-[2.5rem] font-display font-semibold leading-none select-none pointer-events-none transition-opacity duration-300"
                  style={{
                    color: isHovered
                      ? "rgba(168,124,79,0.10)"
                      : "rgba(0,0,0,0.04)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
