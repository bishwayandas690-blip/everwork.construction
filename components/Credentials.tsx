"use client";

import { motion } from "framer-motion";
import {
  Building,
  FileCheck,
  CreditCard,
  Hash,
  ShieldCheck,
  CheckCircle,
  FileText,
  Landmark,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Building,
  FileCheck,
  CreditCard,
  Hash,
  ShieldCheck,
  CheckCircle,
  FileText,
  Landmark,
};

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="section-padding bg-white"
      aria-labelledby="credentials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            label="Compliance & Documentation"
            title="Credentials & Compliance"
            subtitle="Everwork is formally registered with documented compliance for civil works, tax obligations and labour regulations."
            align="center"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {company.credentials.map((cred, i) => {
            const Icon = iconMap[cred.icon];
            return (
              <motion.div
                key={cred.label}
                className="flex items-start gap-4 p-5 rounded-xl border border-[#E8E4DF] bg-[#F8F6F3] hover:border-[#A87C4F]/25 hover:bg-white hover:shadow-md transition-all duration-250"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                id={`credential-${i}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5EDE2] flex items-center justify-center shrink-0 mt-0.5">
                  {Icon && <Icon size={18} className="text-[#A87C4F]" />}
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1E] text-sm">{cred.label}</p>
                  <p className="text-xs text-[#6B6462] mt-1 leading-relaxed">
                    {cred.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer note */}
        <motion.p
          className="mt-10 text-xs text-[#9E9896] text-center max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Full credential documentation including CIN, GST registration, PAN, TAN, labour
          licences and solvency certificate is available for review during tender and enlistment
          processes. Contact us for formal documentation requests.
        </motion.p>
      </div>
    </section>
  );
}
