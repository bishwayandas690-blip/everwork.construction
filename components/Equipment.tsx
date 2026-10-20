"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export default function Equipment() {
  return (
    <section
      id="equipment"
      className="section-padding bg-white"
      aria-labelledby="equipment-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              label="Resources & Equipment"
              title="Construction Resources"
              subtitle="Everwork maintains a documented inventory of construction equipment for site-level operations."
              align="left"
            />

            <motion.p
              className="mt-6 text-[#6B6462] text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Our equipment inventory supports concrete works, formwork, site power management
              and material logistics — enabling self-sufficient project execution.
            </motion.p>
          </div>

          {/* Right — equipment list */}
          <div className="grid gap-3">
            {company.equipment.map((item, i) => (
              <motion.div
                key={item.name}
                className="flex items-center justify-between gap-4 p-4 rounded-lg border border-[#E8E4DF] bg-[#F8F6F3] hover:border-[#A87C4F]/25 hover:bg-white transition-all duration-250"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded bg-[#F5EDE2] flex items-center justify-center shrink-0">
                    <Wrench size={16} className="text-[#A87C4F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1E] text-sm">{item.name}</p>
                    <p className="text-xs text-[#6B6462] mt-0.5">{item.purpose}</p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <span
                    className="font-mono-tech text-lg font-semibold text-[#A87C4F]"
                  >
                    ×{item.quantity}
                  </span>
                  <p className="text-[10px] text-[#9E9896] tracking-widest uppercase">
                    units
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
