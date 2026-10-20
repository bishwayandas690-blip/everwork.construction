"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export default function FloatActions() {
  return (
    <div className="float-actions" aria-label="Quick contact actions">
      <motion.a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white transition-colors"
        style={{ background: "#25D366" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Contact via WhatsApp"
        id="float-whatsapp"
      >
        <MessageCircle size={22} />
      </motion.a>

      <motion.a
        href={`tel:${company.phone}`}
        className="w-12 h-12 rounded-full bg-[#A87C4F] flex items-center justify-center shadow-lg text-white hover:bg-[#8D6740] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.7, type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Call Everwork Construction"
        id="float-call"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  );
}
