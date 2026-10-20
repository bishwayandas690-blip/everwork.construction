"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export default function WhyEverwork() {
  return (
    <section
      id="why-everwork"
      className="section-padding"
      style={{ background: "var(--charcoal)" }}
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeading
              label="Why Everwork"
              title="Capability You Can Build On."
              subtitle="A structured corporate entity with documented compliance, engineering personnel and execution capability."
              align="left"
              light
            />

            <motion.div
              className="mt-10 grid gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {company.strengths.map((strength, i) => (
                <motion.div
                  key={strength}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  <CheckCircle2
                    size={17}
                    className="text-[#C49A6C] mt-0.5 shrink-0"
                  />
                  <span className="text-white/75 text-sm leading-relaxed">
                    {strength}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — highlight panel */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {/* Solvency highlight */}
            <div className="col-span-2 p-6 rounded-xl border border-white/10 bg-white/5">
              <p className="text-xs tracking-[0.18em] uppercase text-[#C49A6C] font-mono-tech mb-2">
                Solvency Certificate
              </p>
              <p
                className="font-display text-3xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ₹2.50 Crore
              </p>
              <p className="text-sm text-white/50 mt-1">
                Bank-issued solvency documentation for enlistment and tender purposes
              </p>
            </div>

            {/* GST */}
            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#C49A6C] font-mono-tech mb-2">
                Tax Status
              </p>
              <p className="text-white font-semibold text-base">GST Registered</p>
              <p className="text-white/45 text-xs mt-1">Regular registration — active</p>
            </div>

            {/* Labour */}
            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#C49A6C] font-mono-tech mb-2">
                Labour Compliance
              </p>
              <p className="text-white font-semibold text-base">2 States</p>
              <p className="text-white/45 text-xs mt-1">Tripura · Assam</p>
            </div>

            {/* Registered */}
            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#C49A6C] font-mono-tech mb-2">
                Company Type
              </p>
              <p className="text-white font-semibold text-base">Pvt. Ltd.</p>
              <p className="text-white/45 text-xs mt-1">Companies Act, 2013</p>
            </div>

            {/* Tender */}
            <div className="p-5 rounded-xl border border-white/10 bg-white/5">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#C49A6C] font-mono-tech mb-2">
                Tender Capability
              </p>
              <p className="text-white font-semibold text-base">Documented</p>
              <p className="text-white/45 text-xs mt-1">Enlistment docs available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
