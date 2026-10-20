"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BoardOfDirectors from "@/components/BoardOfDirectors";
import Services from "@/components/Services";

import WhyEverwork from "@/components/WhyEverwork";
import Team from "@/components/Team";
import HowWeWork from "@/components/HowWeWork";
import Projects from "@/components/Projects";
import Equipment from "@/components/Equipment";
import Geographic from "@/components/Geographic";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import FloatActions from "@/components/FloatActions";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <main>
      {/* Loading splash screen */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar onQuoteClick={() => setQuoteOpen(true)} />

      {/* Hero — full-screen video */}
      <Hero onQuoteClick={() => setQuoteOpen(true)} />

      {/* About */}
      <About />

      {/* Board of Directors */}
      <BoardOfDirectors />

      {/* Services / Capabilities */}
      <Services />

      {/* Why Everwork */}

      <WhyEverwork />

      {/* Engineering Team */}
      <Team />

      {/* How We Work — process */}
      <HowWeWork />

      {/* Projects Portfolio */}
      <Projects />

      {/* Equipment */}
      <Equipment />

      {/* Geographic Coverage */}
      <Geographic />

      {/* Credentials */}
      <Credentials />

      {/* Contact */}
      <Contact onQuoteClick={() => setQuoteOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Quote modal */}
      <QuoteForm isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {/* Floating call/WhatsApp actions */}
      <FloatActions />
    </main>
  );
}
