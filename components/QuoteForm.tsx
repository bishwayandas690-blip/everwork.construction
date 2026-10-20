"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, CheckCircle, Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Residential",
  "Commercial",
  "Government",
  "Civil Works",
  "Renovation",
  "Other",
];

const contactMethods = ["WhatsApp", "Email"];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  projectType: "",
  projectLocation: "",
  estimatedBudget: "",
  projectDetails: "",
  preferredContact: "",
};

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [form, setForm] = useState(initialForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});

  const validate = () => {
    const e: Partial<typeof initialForm> = {};
    if (!form.fullName.trim()) e.fullName = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.projectType) e.projectType = "Please select a project type";
    if (!form.projectLocation.trim()) e.projectLocation = "Project location is required";
    if (!form.projectDetails.trim()) e.projectDetails = "Please describe your project";
    if (!form.preferredContact) e.preferredContact = "Please select a contact method";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");

    // Build shared message content
    const msgLines = [
      `New Project Enquiry — Everwork Construction`,
      ``,
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Project Type: ${form.projectType}`,
      `Location: ${form.projectLocation}`,
      form.estimatedBudget ? `Budget: ${form.estimatedBudget}` : null,
      ``,
      `Project Details:`,
      form.projectDetails,
    ].filter(Boolean).join("\n");

    if (form.preferredContact === "WhatsApp") {
      // Open WhatsApp with all details pre-filled
      const waNumber = company.whatsapp.replace(/\D/g, "");
      const waText = [
        `*New Project Enquiry — Everwork Construction*`,
        ``,
        `*Name:* ${form.fullName}`,
        `*Phone:* ${form.phone}`,
        form.email ? `*Email:* ${form.email}` : null,
        `*Project Type:* ${form.projectType}`,
        `*Location:* ${form.projectLocation}`,
        form.estimatedBudget ? `*Budget:* ${form.estimatedBudget}` : null,
        ``,
        `*Project Details:*`,
        form.projectDetails,
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`, "_blank");

    } else if (form.preferredContact === "Email") {
      // Open email app with all details pre-filled
      const subject = encodeURIComponent(
        `Project Enquiry — ${form.projectType} | ${form.projectLocation} — ${form.fullName}`
      );
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(msgLines)}`;
    }
    // For "Phone" — just show success, they will call directly

    setTimeout(() => {
      setFormState("success");
      setForm(initialForm);
    }, 600);
  };

  const handleClose = () => {
    setFormState("idle");
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Request a project quote"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl glass"
            initial={{ scale: 0.94, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 16 }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 glass rounded-t-2xl px-8 pt-7 pb-5 border-b border-[#E8E4DF]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A87C4F] font-mono-tech">
                    Project Enquiry
                  </span>
                  <h2
                    className="font-display text-2xl font-semibold text-[#1C1C1E] mt-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Request a Quote
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-1 w-8 h-8 rounded-full bg-[#F0EDE8] flex items-center justify-center hover:bg-[#E8E4DF] transition-colors shrink-0"
                  aria-label="Close form"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Success state */}
            {formState === "success" ? (
              <motion.div
                className="flex flex-col items-center text-center px-8 py-16 gap-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#F5EDE2] flex items-center justify-center">
                  <CheckCircle size={30} className="text-[#A87C4F]" />
                </div>
                <div>
                  <h3
                    className="font-display text-2xl font-semibold text-[#1C1C1E] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Enquiry Received
                  </h3>
                  <p className="text-[#6B6462] leading-relaxed max-w-sm">
                    Thank you for contacting Everwork Construction. Our team will review your
                    requirements and get in touch with you.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#A87C4F] text-white text-sm font-semibold rounded hover:bg-[#8D6740] transition-colors"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5" noValidate>
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-[#4A4744] tracking-wide mb-1.5"
                    >
                      Full Name <span className="text-[#A87C4F]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input"
                      autoComplete="name"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#4A4744] tracking-wide mb-1.5"
                    >
                      Phone Number <span className="text-[#A87C4F]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#4A4744] tracking-wide mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-semibold text-[#4A4744] tracking-wide mb-1.5"
                    >
                      Project Type <span className="text-[#A87C4F]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="form-input appearance-none pr-8"
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E9896] pointer-events-none"
                      />
                    </div>
                    {errors.projectType && (
                      <p className="text-xs text-red-500 mt-1">{errors.projectType}</p>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="projectLocation"
                      className="block text-xs font-semibold text-[#4A4744] tracking-wide mb-1.5"
                    >
                      Project Location <span className="text-[#A87C4F]">*</span>
                    </label>
                    <input
                      id="projectLocation"
                      name="projectLocation"
                      type="text"
                      value={form.projectLocation}
                      onChange={handleChange}
                      placeholder="City / District / State"
                      className="form-input"
                    />
                    {errors.projectLocation && (
                      <p className="text-xs text-red-500 mt-1">{errors.projectLocation}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="estimatedBudget"
                      className="block text-xs font-semibold text-[#4A4744] tracking-wide mb-1.5"
                    >
                      Estimated Budget{" "}
                      <span className="text-[#9E9896] font-normal">(optional)</span>
                    </label>
                    <input
                      id="estimatedBudget"
                      name="estimatedBudget"
                      type="text"
                      value={form.estimatedBudget}
                      onChange={handleChange}
                      placeholder="e.g. ₹10 Lakh – ₹50 Lakh"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Project details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-semibold text-[#4A4744] tracking-wide mb-1.5"
                  >
                    Project Details <span className="text-[#A87C4F]">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={form.projectDetails}
                    onChange={handleChange}
                    placeholder="Describe your project — scope, timeline, key requirements..."
                    className="form-input resize-none"
                  />
                  {errors.projectDetails && (
                    <p className="text-xs text-red-500 mt-1">{errors.projectDetails}</p>
                  )}
                </div>

                {/* Preferred contact */}
                <div>
                  <p className="text-xs font-semibold text-[#4A4744] tracking-wide mb-2.5">
                    Preferred Contact Method <span className="text-[#A87C4F]">*</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {contactMethods.map((method) => (
                      <label
                        key={method}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm cursor-pointer transition-all ${
                          form.preferredContact === method
                            ? "bg-[#A87C4F] text-white border-[#A87C4F]"
                            : "border-[#E8E4DF] text-[#4A4744] hover:border-[#A87C4F]/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={form.preferredContact === method}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                  {errors.preferredContact && (
                    <p className="text-xs text-red-500 mt-1">{errors.preferredContact}</p>
                  )}
                </div>

                {/* Error state */}
                {formState === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3 border border-red-100">
                    Something went wrong. Please try again or contact us directly at{" "}
                    <a href={`mailto:${company.email}`} className="underline">
                      {company.email}
                    </a>
                  </p>
                )}

                {/* Submit */}
                <div className="pt-2 pb-2">
                  <motion.button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#A87C4F] text-white font-semibold text-sm tracking-wide rounded hover:bg-[#8D6740] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    whileHover={{ scale: formState === "submitting" ? 1 : 1.01 }}
                    whileTap={{ scale: formState === "submitting" ? 1 : 0.98 }}
                    id="quote-form-submit"
                  >
                    {formState === "submitting" ? (
                      <>
                        <motion.span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        />
                        Opening…
                      </>
                    ) : form.preferredContact === "WhatsApp" ? (
                      <>
                        Send via WhatsApp
                        <MessageCircle size={14} />
                      </>
                    ) : form.preferredContact === "Email" ? (
                      <>
                        Send via Email
                        <Mail size={14} />
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                      </>
                    )}
                  </motion.button>
                  <p className="text-center text-xs text-[#9E9896] mt-3">
                    {form.preferredContact === "WhatsApp"
                      ? "Opens WhatsApp with your details pre-filled."
                      : form.preferredContact === "Email"
                      ? "Opens your email app with details pre-filled."
                      : "We will contact you on the number provided."}
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
