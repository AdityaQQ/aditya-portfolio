"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#222]" : "bg-transparent"}`}>
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs tracking-widest text-[#e8e8e8] hover:text-white transition-colors uppercase glitch"
          data-text="AU.DEV"
        >
          AU.DEV
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-xs text-[#888] hover:text-[#e8e8e8] transition-colors tracking-wider uppercase before:content-['>_'] before:text-[#444]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:block text-xs text-[#888] hover:text-[#e8e8e8] transition-colors tracking-wider border border-[#333] hover:border-[#666] px-3 py-1.5"
        >
          [RESUME↓]
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#888] hover:text-[#e8e8e8] text-xs tracking-widest" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-[#222]"
          >
            <ul className="flex flex-col px-6 py-4 gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-xs text-[#888] hover:text-[#e8e8e8] transition-colors tracking-wider uppercase w-full text-left before:content-['>_'] before:text-[#444]">
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-[#222]">
                <a href="/resume.pdf" download className="text-xs text-[#888] hover:text-[#e8e8e8] tracking-wider">[DOWNLOAD RESUME]</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
