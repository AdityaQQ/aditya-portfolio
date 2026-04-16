"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ about ]</span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_320px] gap-16">
          {/* Bio */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}>
            <h2 className="text-2xl font-mono text-[#e8e8e8] mb-8 tracking-tight">
              Building at the intersection<br />of code and intelligence.
            </h2>
            <div className="space-y-4 text-sm text-[#888] leading-relaxed font-mono">
              <p>
                I&apos;m a Computer Science student specializing in{" "}
                <span className="text-[#e8e8e8]">Artificial Intelligence</span> at Kalinga Institute of Industrial Technology, Bhubaneswar.
              </p>
              <p>
                I&apos;m deeply interested in{" "}
                <span className="text-[#e8e8e8]">full-stack development</span>,{" "}
                <span className="text-[#e8e8e8]">AI systems</span>, and{" "}
                <span className="text-[#e8e8e8]">scalable backend architecture</span>.
              </p>
              <p>
                I enjoy building intelligent systems and production-ready applications — the kind that solve real problems at scale.
              </p>
            </div>
          </motion.div>

          {/* Focus list */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="text-[10px] text-[#444] tracking-widest mb-6 uppercase">{"// currently focused on"}</div>
            <ul className="space-y-3">
              {[
                "Backend Engineering",
                "AI Integration",
                "System Design",
                "Full-Stack Development",
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#888] font-mono group hover:text-[#e8e8e8] transition-colors cursor-default">
                  <span className="text-[#333] group-hover:text-[#666] transition-colors text-xs">{String(i + 1).padStart(2, "0")}.</span>
                  <span className="border-b border-[#222] group-hover:border-[#444] flex-1 pb-2 transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-[#222] p-4">
              <div className="text-[10px] text-[#444] tracking-widest mb-3">STATUS</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#e8e8e8] rounded-full animate-pulse" />
                <span className="text-xs text-[#e8e8e8] font-mono">Open to internship opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
