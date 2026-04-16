"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certs = [
  { id: "01", title: "Google AI Essentials", issuer: "Google", year: "2024", desc: "Fundamentals of AI, prompt engineering, and responsible AI practices." },
  { id: "02", title: "Machine Learning Certification", issuer: "Coursera", year: "2024", desc: "Supervised, unsupervised learning, neural networks, and ML best practices." },
  { id: "03", title: "Python Certification", issuer: "Professional Certificate", year: "2023", desc: "Advanced Python programming, data structures, and Pythonic patterns." },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ certifications ]</span>
        </motion.div>

        <div className="border border-[#222]">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`flex items-start gap-5 p-5 md:p-6 hover:bg-[#111] transition-colors ${i < certs.length - 1 ? "border-b border-[#222]" : ""}`}
            >
              <span className="text-[10px] text-[#333] font-mono pt-0.5">{cert.id}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                  <h3 className="text-sm font-mono text-[#e8e8e8]">{cert.title}</h3>
                  <span className="text-[10px] text-[#444] font-mono shrink-0">{cert.year}</span>
                </div>
                <div className="text-[10px] text-[#444] tracking-widest mb-2 uppercase">{cert.issuer}</div>
                <p className="text-xs text-[#555] font-mono leading-relaxed">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
