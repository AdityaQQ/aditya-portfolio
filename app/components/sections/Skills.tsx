"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  { id: "01", category: "FRONTEND", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { id: "02", category: "BACKEND",  skills: ["Python", "Flask", "Node.js", "REST APIs", "SQLAlchemy", "SQLite"] },
  { id: "03", category: "AI / ML",  skills: ["NLP", "BERT", "DistilBERT", "LLM APIs", "Groq AI", "Transformers"] },
  { id: "04", category: "TOOLS",    skills: ["Git", "Docker", "Vercel", "Postman", "VS Code", "Linux"] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ skills ]</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-0 border border-[#222]">
          {groups.map((g, i) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`p-6 border-[#222] ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="text-[10px] text-[#333] font-mono">{g.id}</span>
                <span className="text-[10px] tracking-widest text-[#888] uppercase">{g.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-[#888] border border-[#222] px-2 py-1 hover:border-[#444] hover:text-[#e8e8e8] transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
