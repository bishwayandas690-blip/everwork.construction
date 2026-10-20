// ============================================================
// EVERWORK CONSTRUCTION PRIVATE LIMITED — CENTRAL DATA FILE
// Edit this file to update all company information site-wide.
// ============================================================

export const company = {
  name: "Everwork Construction Private Limited",
  shortName: "Everwork Construction",
  brandName: "EVERWORK",
  tagline: "Building With Precision. Delivering With Purpose.",
  subTagline:
    "Professional construction, civil works and technical execution for government and private projects.",
  description:
    "Everwork Construction Private Limited is a private limited company incorporated under the Companies Act, 2013. We provide civil construction, planning, estimation, surveying, supervision and construction-related services from Panisagar, North Tripura.",
  // ── Private registration numbers ─────────────────────────
  // NOT stored here for security. Share only on direct request via email/WhatsApp.
  // cin, pan, tan, gst are intentionally omitted from this file.
  incorporated: "04 August 2025",

  // ── Contact ──────────────────────────────────────────────
  phone: "1234567890",
  whatsapp: "918415050764",
  email: "bishwayan690@gmail.com",
  address: {
    line1: "Tinani AA Road",
    city: "Panisagar",
    district: "North Tripura",
    pin: "799260",
    state: "Tripura",
    country: "India",
    full: "Tinani AA Road, Panisagar, North Tripura – 799260, Tripura",
  },

  // ── Social ───────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/everworkconstruction",
    facebook: "https://facebook.com/everworkconstruction",
    linkedin: "https://linkedin.com/company/everworkconstruction",
  },

  // ── Maps ─────────────────────────────────────────────────
  googleMapsUrl:
    "https://maps.google.com/?q=Panisagar,+North+Tripura,+India", // Replace with real link

  // ── Media ────────────────────────────────────────────────
  heroVideoPath: "/hero-video.mp4",
  heroPosterPath: "/hero-poster.jpg", // Add a poster image for video fallback
  logoPath: "/logo.png",

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      id: "civil",
      title: "Civil Construction",
      description:
        "Civil construction and construction-related works including structural, infrastructure and site development.",
      icon: "Building2",
    },
    {
      id: "electrical",
      title: "Electrical & Planning Works",
      description:
        "Electrical and planning-related construction capabilities integrated with project execution.",
      icon: "Zap",
    },
    {
      id: "government",
      title: "Government & Private Works",
      description:
        "Planning and construction of private property and government works under contract.",
      icon: "Landmark",
    },
    {
      id: "estimation",
      title: "Estimation & Survey",
      description:
        "Technical estimation, quantity surveying and pre-construction technical preparation.",
      icon: "Calculator",
    },
    {
      id: "inspection",
      title: "Inspection & Supervision",
      description:
        "Site-level inspection, supervision and technical coordination throughout the construction cycle.",
      icon: "ClipboardCheck",
    },
    {
      id: "design",
      title: "Design & Drafting",
      description:
        "Design, drafting and technical support associated with construction and related works.",
      icon: "Ruler",
    },
    {
      id: "materials",
      title: "Material Supply",
      description:
        "Wholesale and retail trading and supply of construction-related materials and services.",
      icon: "Package",
    },
  ],

  // ── Team ─────────────────────────────────────────────────
  team: [
    {
      id: "sanowar",
      name: "Sanowar Hussain",
      role: "Project Manager",
      qualification: "B.Tech Civil Engineering",
      experience: "5 years",
      photo: "/team/sanowar-hussain.jpeg", // Add photo when available
    },
    {
      id: "subrata",
      name: "Subrata Debnath",
      role: "Site Engineer",
      qualification: "B.Tech Civil Engineering",
      experience: "4 years",
      photo: "/team/subrata-debnath.jpeg",
    },
    {
      id: "paran",
      name: "Paran Jyoti Kalita",
      role: "Junior Engineer",
      qualification: "Diploma in Civil Engineering",
      experience: "5 years",
      photo: "/team/paran-kalita.jpeg",
    },
    {
      id: "rubul",
      name: "Rubul Barman",
      role: "Junior Engineer",
      qualification: "Diploma in Civil Engineering",
      experience: "5 years",
      photo: "/team/rubul-barman.jpeg",
    },
  ],

  // ── Board of Directors ────────────────────────────────────
  // Photos: drop real images into /public/directors/ using the filenames below.
  // No DIN, PAN, GSTIN or other private identifiers are stored here.
  directors: [
    {
      id: "nilkanta-das",
      name: "Nilkanta Das",
      designation: "Director / POA Holder",
      location: "Tripura",
      photo: "/directors/nilkanta-das.jpeg",
    },
    {
      id: "subrata-debnath-dir",
      name: "Subrata Debnath",
      designation: "Director / Managing Director",
      location: "Tripura",
      photo: "/directors/subrata-debnath.jpeg",
    },
    {
      id: "srabani-deb-nath",
      name: "Srabani Deb Nath",
      designation: "Director",
      location: "Tripura",
      photo: "/directors/srabani-deb-nath.jpeg",
    },
    {
      id: "babli-das",
      name: "Babli Das",
      designation: "Director",
      location: "Tripura",
      photo: "/directors/babli-das.jpeg",
    },
  ],

  // ── Equipment ────────────────────────────────────────────
  equipment: [
    {
      name: "Spot Mix Plant",
      quantity: 1,
      purpose: "On-site concrete batching and mixing",
    },
    {
      name: "Truck",
      quantity: 2,
      purpose: "Material transport and site logistics",
    },
    {
      name: "Pump Set",
      quantity: 2,
      purpose: "Concrete pumping and water management",
    },
    {
      name: "Concrete Vibrator",
      quantity: 2,
      purpose: "Concrete compaction and consolidation",
    },
    {
      name: "Steel Form",
      quantity: 3,
      purpose: "Formwork and structural casting",
    },
    {
      name: "Concrete Mixture Machine",
      quantity: 1,
      purpose: "Concrete preparation and mixing",
    },
    {
      name: "Generator Set",
      quantity: 1,
      purpose: "Power backup for site operations",
    },
  ],

  // ── Credentials ──────────────────────────────────────────
  credentials: [
    {
      label: "Corporate Identity",
      detail: "Private Limited — Companies Act, 2013",
      icon: "Building",
    },
    {
      label: "GST Registration",
      detail: "Regular GST registration — active",
      icon: "FileCheck",
    },
    {
      label: "PAN",
      detail: "Permanent Account Number — issued",
      icon: "CreditCard",
    },
    {
      label: "TAN",
      detail: "Tax Deduction Account Number — issued",
      icon: "Hash",
    },
    {
      label: "Labour Licence — Tripura",
      detail: "Tripura labour registration — operational",
      icon: "ShieldCheck",
    },
    {
      label: "Contract Labour Registration — Assam",
      detail: "Assam contract labour registration — documented",
      icon: "ShieldCheck",
    },
    {
      label: "Tax Clearance",
      detail: "Tax clearance documentation — maintained",
      icon: "CheckCircle",
    },
    {
      label: "Tender Capability",
      detail: "Enlistment and tender documentation — available",
      icon: "FileText",
    },
    {
      label: "Bank Solvency Certificate",
      detail: "Solvency Certificate — ₹2.50 Crore (for enlistment/tender purposes)",
      icon: "Landmark",
    },
  ],

  // ── How We Work Steps ────────────────────────────────────
  process: [
    {
      step: "01",
      title: "Consultation",
      description: "Understand the client's project requirements.",
    },
    {
      step: "02",
      title: "Site Assessment",
      description: "Review project location and technical requirements.",
    },
    {
      step: "03",
      title: "Planning & Estimation",
      description: "Prepare technical planning and detailed estimates.",
    },
    {
      step: "04",
      title: "Execution",
      description: "Coordinate construction and site-level execution.",
    },
    {
      step: "05",
      title: "Supervision & Delivery",
      description: "Monitor work and coordinate project completion.",
    },
  ],

  // ── Why Everwork ─────────────────────────────────────────
  strengths: [
    "Private limited corporate structure",
    "Regular GST registration",
    "Labour compliance capability in Tripura and Assam",
    "Dedicated civil engineering personnel",
    "Tender and enlistment documentation",
    "Bank-issued solvency documentation",
    "Civil construction execution capability",
    "Estimation, surveying and supervision capability",
    "Material supply capability",
  ],

  // ── Geographic Coverage ──────────────────────────────────
  operatingRegions: ["Tripura", "Assam"],
};

// ── Email recipient ───────────────────────────────────────
// Moved to .env.local as ENQUIRY_RECIPIENT_EMAIL for security.
// Do NOT put the actual email address here.
