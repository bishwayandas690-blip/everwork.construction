"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

const facts = [
  {
    icon: Building2,
    label: "Corporate Structure",
    value: "Private Limited",
    detail: "Incorporated under Companies Act, 2013",
  },
  {
    icon: Calendar,
    label: "Date of Incorporation",
    value: company.incorporated,
    detail: "Formally registered company",
  },
  {
    icon: MapPin,
    label: "Registered Office",
    value: company.address.city,
    detail: `${company.address.district}, ${company.address.state}`,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-[#F8F6F3]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <div>
            <SectionHeading
              label="About the Company"
              title="Built on Capability. Driven by Execution."
              align="left"
            />

            <motion.div
              className="mt-8 space-y-5 text-[#4A4744] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Everwork Construction Private Limited is a private limited company incorporated
                under the Companies Act, 2013. We provide civil construction, planning,
                estimation, surveying, supervision and construction-related services, operating
                from our registered office in Panisagar, North Tripura.
              </p>
              <p>
                Our business capabilities span civil and electrical construction works, government
                and private projects under contract, material supply, planning, design, inspection,
                estimation and site supervision — supported by documented compliance in Tripura
                and Assam.
              </p>
              <p>
                While the company has been formally incorporated in 2025, our engineering and
                project team brings direct field experience across civil construction roles. We
                are structured for professional execution of government-contracted and private
                construction projects in the North-East region.
              </p>
            </motion.div>

            {/* Operating regions */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-xs tracking-[0.18em] uppercase text-[#6B6462] font-mono-tech">
                Operating Regions
              </span>
              <div className="flex gap-2">
                {company.operatingRegions.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1 text-xs font-semibold tracking-wide bg-[#A87C4F]/10 text-[#A87C4F] rounded border border-[#A87C4F]/20"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — fact cards */}
          <div className="flex flex-col gap-4">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                className="flex items-start gap-5 p-6 bg-white rounded-xl border border-[#E8E4DF] hover:border-[#A87C4F]/30 hover:shadow-md transition-all duration-250"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#F5EDE2] flex items-center justify-center shrink-0 mt-0.5">
                  <fact.icon size={20} className="text-[#A87C4F]" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9E9896] mb-1 font-mono-tech">
                    {fact.label}
                  </p>
                  <p className="text-lg font-semibold text-[#1C1C1E] leading-tight">
                    {fact.value}
                  </p>
                  <p className="text-sm text-[#6B6462] mt-0.5">{fact.detail}</p>
                </div>
              </motion.div>
            ))}

            {/* CIN tag */}
            <motion.div
              className="p-5 bg-white rounded-xl border border-[#E8E4DF]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.36, ease: "easeOut" }}
            >
              <p className="text-xs tracking-[0.18em] uppercase text-[#9E9896] font-mono-tech mb-2">
                Company Identification
              </p>
              <p className="text-sm text-[#4A4744]">
                Everwork Construction Private Limited is a registered private limited company.
                Corporate documentation available for tender and enlistment purposes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
