"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ASCII_NAME = `
 █████╗ ██████╗ ██╗████████╗██╗   ██╗ █████╗ 
██╔══██╗██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝██╔══██╗
███████║██║  ██║██║   ██║    ╚████╔╝ ███████║
██╔══██║██║  ██║██║   ██║     ╚██╔╝  ██╔══██║
██║  ██║██████╔╝██║   ██║      ██║   ██║  ██║
╚═╝  ╚═╝╚═════╝ ╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝`;

const ROLES = ["Full-Stack Developer", "AI Engineer", "Backend Architect", "CS @ KIIT"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-14 px-6">
      <div className="max-w-5xl mx-auto w-full">

        {/* ASCII name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 overflow-hidden"
        >
          <pre className="ascii">{ASCII_NAME}</pre>
        </motion.div>

        {/* Divider */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="h-px bg-[#222] mb-8 origin-left" />

        {/* Typewriter role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-6">
          <span className="text-[#888] text-xs tracking-widest mr-3">ROLE://</span>
          <span className="text-[#e8e8e8] text-sm font-mono">{displayed}</span>
          <span className="blink text-[#e8e8e8]">_</span>
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-[#888] text-sm leading-relaxed max-w-xl mb-10 font-mono">
          CS student specializing in Artificial Intelligence at KIIT, Bhubaneswar.<br />
          Building intelligent systems and production-ready applications.
        </motion.p>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-8 mb-12">
          {[
            { label: "COLLEGE", value: "KIIT" },
            { label: "SPEC", value: "AI/ML" },
            { label: "STACK", value: "Next.js + Flask" },
            { label: "STATUS", value: "OPEN_TO_HIRE" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[10px] text-[#444] tracking-widest mb-1">{s.label}</div>
              <div className="text-xs text-[#e8e8e8] font-mono">{s.value}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="text-xs tracking-widest border border-[#e8e8e8] text-[#e8e8e8] px-5 py-2.5 hover:bg-[#e8e8e8] hover:text-[#0a0a0a] transition-all duration-200 uppercase"
          >
            &gt; View Work
          </button>
          <a
            href="/resume.pdf"
            download
            className="text-xs tracking-widest border border-[#333] text-[#888] px-5 py-2.5 hover:border-[#666] hover:text-[#e8e8e8] transition-all duration-200 uppercase"
          >
            &gt; Download CV
          </a>
          <a
            href="https://github.com/AdityaQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest border border-[#333] text-[#888] px-5 py-2.5 hover:border-[#666] hover:text-[#e8e8e8] transition-all duration-200 uppercase"
          >
            &gt; GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-upadhyay-015b2427a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest border border-[#333] text-[#888] px-5 py-2.5 hover:border-[#666] hover:text-[#e8e8e8] transition-all duration-200 uppercase"
          >
            &gt; LinkedIn
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="flex items-center gap-3 text-[#444]">
          <span className="text-[10px] tracking-widest font-mono">SCROLL TO EXPLORE</span>
          <motion.span animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-xs">→</motion.span>
        </motion.div>
      </div>
    </section>
  );
}
