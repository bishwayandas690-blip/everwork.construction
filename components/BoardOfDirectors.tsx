"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

// Per-card photo state — shows real photo if it loads, placeholder if it errors
function DirectorPhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <Image
        src={src}
        alt={`Photo of ${name}`}
        fill
        className="object-cover object-top"
        onError={() => setFailed(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    );
  }

  // Fallback placeholder
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #A87C4F 0, #A87C4F 1px, transparent 0, transparent 50%)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-[#E0DAD3] border-2 border-[#D4CDC5] flex items-center justify-center mb-3">
        <User size={28} className="text-[#9E9896]" />
      </div>
      <p className="relative z-10 text-xs text-[#B0ABA6] tracking-wide">
        Photo coming soon
      </p>
    </>
  );
}

export default function BoardOfDirectors() {
  return (
    <section
      id="board-of-directors"
      className="section-padding bg-white"
      aria-labelledby="board-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <SectionHeading
            label="Corporate Governance"
            title="Board of Directors"
            subtitle="Leadership that guides Everwork with vision, accountability and professionalism."
            align="center"
          />
        </div>

        {/* Director Cards — 4 col desktop / 2 col tablet / 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.directors.map((director, i) => (
            <motion.div
              key={director.id}
              id={`director-card-${director.id}`}
              className="group relative bg-white rounded-xl overflow-hidden"
              style={{
                border: "1px solid #E8E4DF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 48px rgba(0,0,0,0.10)",
                borderColor: "rgba(168,124,79,0.30)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
            >
              {/* Bronze top accent */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A87C4F] to-[#C49A6C]"
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35 + i * 0.1,
                  duration: 0.55,
                  ease: "easeOut",
                }}
              />

              {/*
               * PHOTO — drop the file into /public/directors/<filename>.jpg
               * Filenames are defined in data/company.ts → directors[n].photo
               * The photo loads automatically; placeholder shows if file is missing.
               */}
              <div
                className="relative h-52 bg-gradient-to-br from-[#F0EDE8] to-[#E8E4DF] flex flex-col items-center justify-center overflow-hidden"
              >
                <DirectorPhoto src={director.photo} name={director.name} />
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-semibold text-[#1C1C1E] text-base leading-snug mb-1">
                  {director.name}
                </h3>
                <p className="text-[#A87C4F] text-sm font-medium leading-snug mb-4">
                  {director.designation}
                </p>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#9E9896] shrink-0" aria-hidden="true" />
                  <span className="text-xs text-[#6B6462]">{director.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discreet legal note */}
        <motion.p
          className="mt-10 text-center text-xs text-[#9E9896] leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Director details sourced from the company&apos;s certificate of incorporation.
          Statutory identification numbers are held securely and available on formal request.
        </motion.p>
      </div>
    </section>
  );
}

