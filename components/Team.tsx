"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

// Per-card photo — shows real photo if it loads, placeholder if it errors
function TeamPhoto({ src, name }: { src: string; name: string }) {
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
      <div className="w-20 h-20 rounded-full bg-[#E0DAD3] border-2 border-[#D4CDC5] flex items-center justify-center mb-3 relative z-10">
        <User size={32} className="text-[#9E9896]" />
      </div>
      <p className="text-xs text-[#9E9896] relative z-10">Photo coming soon</p>
    </>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="section-padding bg-[#F8F6F3]"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            label="The Engineering Team"
            title="Engineering Expertise"
            subtitle="Our team comprises qualified civil engineers and diploma holders with hands-on construction experience."
            align="center"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.team.map((member, i) => (
            <motion.div
              key={member.id}
              className="group bg-white rounded-xl border border-[#E8E4DF] overflow-hidden hover:border-[#A87C4F]/25 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              id={`team-card-${member.id}`}
            >
              {/* Photo area */}
              <div
                className="relative h-56 bg-gradient-to-br from-[#F0EDE8] to-[#E8E4DF] flex flex-col items-center justify-center overflow-hidden"
                aria-label={`Photo of ${member.name}`}
              >
                <TeamPhoto src={member.photo} name={member.name} />

                {/* Bronze accent bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A87C4F] to-[#C49A6C]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-[#1C1C1E] text-base leading-snug mb-1">
                  {member.name}
                </h3>
                <p className="text-[#A87C4F] text-sm font-medium mb-4">{member.role}</p>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap size={14} className="text-[#9E9896] mt-0.5 shrink-0" />
                    <p className="text-xs text-[#6B6462] leading-snug">
                      {member.qualification}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Briefcase size={14} className="text-[#9E9896] mt-0.5 shrink-0" />
                    <p className="text-xs text-[#6B6462]">
                      {member.experience} general experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

