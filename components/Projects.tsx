"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Tag, Activity } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Project {
  id: string;
  name: string;
  location?: string;
  type?: string;
  status?: string;
  description?: string;
  image?: string;
}

// Placeholder data — replace with real projects from company.ts when available
const projects: Project[] = [
  {
    id: "p1",
    name: "Project Showcase Coming Soon",
    location: "North Tripura",
    type: "Civil Works",
    status: "Portfolio Updating",
    description:
      "Our project portfolio is currently being compiled. Completed and ongoing projects will be listed here with full documentation shortly.",
  },
  {
    id: "p2",
    name: "Project Showcase Coming Soon",
    location: "Assam",
    type: "Government Contract",
    status: "Portfolio Updating",
    description:
      "Everwork's government and private project documentation will be available here. Contact us to discuss specific project capability.",
  },
  {
    id: "p3",
    name: "Project Showcase Coming Soon",
    location: "Tripura",
    type: "Infrastructure",
    status: "Portfolio Updating",
    description:
      "Infrastructure and civil construction project details will be published as documentation is finalised.",
  },
];

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#F5EDE2] text-[#A87C4F] border border-[#E8D9C5]">
      <Activity size={9} />
      {status}
    </span>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-padding bg-[#F8F6F3]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            label="Portfolio"
            title="Selected Projects"
            subtitle="Our project portfolio is currently being compiled. Contact us to discuss your specific project requirements."
            align="left"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setSelected(project)}
              className="text-left group bg-white rounded-xl border border-[#E8E4DF] overflow-hidden hover:border-[#A87C4F]/25 hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A87C4F]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              id={`project-card-${project.id}`}
              aria-label={`View details for ${project.name}`}
            >
              {/* Image placeholder */}
              <div className="relative h-52 project-placeholder overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, rgba(168,124,79,0.06) 0, rgba(168,124,79,0.06) 1px, transparent 0, transparent 50%)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-[#D4CDC5] flex items-center justify-center">
                    <span className="text-[#B0A89E] text-xs font-mono-tech">IMG</span>
                  </div>
                  <p className="text-[11px] text-[#9E9896] tracking-wide">
                    Image coming soon
                  </p>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#A87C4F]/8 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xs font-semibold text-[#A87C4F] tracking-widest uppercase">
                    View Details
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-[#1C1C1E] text-sm leading-snug flex-1">
                    {project.name}
                  </h3>
                  {project.status && <StatusBadge status={project.status} />}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.location && (
                    <span className="flex items-center gap-1 text-xs text-[#6B6462]">
                      <MapPin size={11} className="text-[#9E9896]" />
                      {project.location}
                    </span>
                  )}
                  {project.type && (
                    <span className="flex items-center gap-1 text-xs text-[#6B6462]">
                      <Tag size={11} className="text-[#9E9896]" />
                      {project.type}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Portfolio note */}
        <motion.p
          className="mt-10 text-sm text-[#9E9896] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Project documentation is being compiled. Contact us to discuss your specific requirements.
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Project details: ${selected.name}`}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <motion.div
              className="relative glass rounded-2xl max-w-lg w-full p-8"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F0EDE8] flex items-center justify-center hover:bg-[#E8E4DF] transition-colors"
                aria-label="Close"
              >
                <X size={15} />
              </button>

              <div className="h-36 project-placeholder rounded-lg mb-6 overflow-hidden relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, rgba(168,124,79,0.08) 0, rgba(168,124,79,0.08) 1px, transparent 0, transparent 50%)",
                    backgroundSize: "22px 22px",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-3 mb-4">
                <h3
                  className="font-display text-xl font-semibold text-[#1C1C1E]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selected.name}
                </h3>
                {selected.status && <StatusBadge status={selected.status} />}
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                {selected.location && (
                  <span className="flex items-center gap-1.5 text-sm text-[#6B6462]">
                    <MapPin size={13} className="text-[#A87C4F]" />
                    {selected.location}
                  </span>
                )}
                {selected.type && (
                  <span className="flex items-center gap-1.5 text-sm text-[#6B6462]">
                    <Tag size={13} className="text-[#A87C4F]" />
                    {selected.type}
                  </span>
                )}
              </div>

              {selected.description && (
                <p className="text-sm text-[#4A4744] leading-relaxed">
                  {selected.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
