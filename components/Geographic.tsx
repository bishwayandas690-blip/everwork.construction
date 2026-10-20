"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export default function Geographic() {
  return (
    <section
      id="geographic"
      className="section-padding bg-[#F8F6F3]"
      aria-labelledby="geographic-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionHeading
              label="Coverage Area"
              title="Operating Capability"
              align="left"
            />

            <motion.p
              className="mt-6 text-[#4A4744] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Everwork Construction is based in Panisagar, North Tripura, with documented
              labour-registration capability in both Tripura and Assam. Our compliance
              documentation supports project execution across these regions.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {company.operatingRegions.map((region) => (
                <div
                  key={region}
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-lg border border-[#E8E4DF]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#A87C4F]" />
                  <span className="font-semibold text-[#1C1C1E]">{region}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 p-5 bg-white rounded-xl border border-[#E8E4DF]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#A87C4F] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#1C1C1E] text-sm mb-1">
                    Registered Office
                  </p>
                  <p className="text-sm text-[#6B6462] leading-relaxed">
                    {company.address.full}
                  </p>
                  <a
                    href={company.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-[#A87C4F] hover:underline"
                    id="maps-link"
                    aria-label="View on Google Maps"
                  >
                    View on Google Maps
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Map placeholder */}
          <motion.div
            className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-[#E8E4DF] bg-white"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {/* Map background pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, #F0EDE8 0, #F0EDE8 1px, transparent 0, transparent 60px),
                  repeating-linear-gradient(90deg, #F0EDE8 0, #F0EDE8 1px, transparent 0, transparent 60px)
                `,
              }}
            />

            {/* Location marker */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-full bg-[#A87C4F]/15 border-2 border-[#A87C4F]/30 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <MapPin size={24} className="text-[#A87C4F]" />
              </motion.div>

              <div className="text-center">
                <p className="font-semibold text-[#1C1C1E] text-base">
                  Panisagar, North Tripura
                </p>
                <p className="text-sm text-[#6B6462] mt-1">PIN: 799260</p>
              </div>

              <a
                href={company.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A87C4F] text-white text-sm font-medium rounded hover:bg-[#8D6740] transition-colors"
                id="map-open-link"
                aria-label="Open in Google Maps"
              >
                Open in Maps
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Corner label */}
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-mono-tech tracking-widest uppercase text-[#9E9896]">
                Tripura · India
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
