"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ experience ]</span>
        </motion.div>

        <div className="space-y-0 border border-[#222]">
          {/* EY */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="p-6 md:p-8 border-b border-[#222] hover:bg-[#111] transition-colors"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-baseline gap-5">
                <span className="text-[10px] text-[#333] font-mono">01</span>
                <div>
                  <div className="text-[10px] text-[#444] tracking-widest mb-1.5">INTERNSHIP</div>
                  <h3 className="text-lg font-mono text-[#e8e8e8]">EY — Technology Intern</h3>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-right">
                <span className="text-[10px] text-[#444] font-mono tracking-wider">2024</span>
                <span className="text-[10px] text-[#333] font-mono">India</span>
              </div>
            </div>

            <p className="text-sm text-[#888] font-mono leading-relaxed mb-5 max-w-2xl ml-9">
              Worked within EY&apos;s technology consulting division. Gained hands-on experience with enterprise software systems, client-facing solutions, and scalable architecture patterns. Collaborated with cross-functional teams on digital transformation initiatives.
            </p>

            <div className="ml-9 flex flex-wrap gap-2">
              {["Enterprise Tech", "Consulting", "System Design", "Collaboration"].map((s) => (
                <span key={s} className="text-[10px] font-mono text-[#555] border border-[#1e1e1e] px-2 py-0.5 hover:text-[#888] transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Open to work */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="p-6 md:p-8 hover:bg-[#111] transition-colors"
          >
            <div className="flex items-center gap-5">
              <span className="text-[10px] text-[#333] font-mono">02</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-1.5 h-1.5 bg-[#e8e8e8] rounded-full animate-pulse" />
                  <span className="text-[10px] tracking-widest text-[#888] uppercase">Currently Available</span>
                </div>
                <p className="text-sm text-[#555] font-mono">
                  Open to internship roles in Full-Stack Development, AI Engineering, or Backend Systems.{" "}
                  <a href="https://www.linkedin.com/in/aditya-upadhyay-015b2427a" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#e8e8e8] transition-colors underline underline-offset-2">
                    Connect on LinkedIn →
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
