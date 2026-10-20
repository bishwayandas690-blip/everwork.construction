"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="section-padding bg-white"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-xl">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            subtitle="A clear, structured approach to every project — from the first conversation to final delivery."
            align="left"
          />
        </div>

        <div className="relative">
          {/* Connector line on desktop */}
          <motion.div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8E4DF] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            style={{ originX: 0 }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {company.process.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative flex flex-col"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Step number circle */}
                <div className="relative mb-6 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#F5EDE2] border border-[#E8D9C5]" />
                  <span
                    className="relative font-display text-lg font-semibold text-[#A87C4F] z-10"
                    style={{ fontFamily: "var(--font-display)" }}
                    aria-label={`Step ${step.step}`}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Large background number */}
                <span
                  className="absolute top-0 left-0 font-display text-7xl font-semibold leading-none select-none pointer-events-none"
                  style={{
                    color: "rgba(168,124,79,0.05)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                    zIndex: 0,
                  }}
                  aria-hidden="true"
                >
                  {step.step}
                </span>

                <div className="relative z-10">
                  <h3 className="font-semibold text-[#1C1C1E] text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B6462] leading-relaxed">
                    {step.description}
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
