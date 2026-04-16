"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "PrepFlow",
    category: "AI PLATFORM",
    description: "AI-powered interview preparation platform with resume evaluation and coding assessment. Powered by Groq AI for real-time intelligent feedback.",
    tech: ["Flask", "Python", "Groq AI", "Next.js", "Vercel"],
    href: "https://prep-flow-v1-1.vercel.app/",
    highlights: ["Resume AI Evaluation", "Coding Assessment", "Real-time Feedback"],
  },
  {
    id: "02",
    title: "MentorBridge",
    category: "FULL-STACK",
    description: "Full-stack mentorship platform connecting mentors and mentees. Features session scheduling, smart profile matching, and progress tracking.",
    tech: ["Flask", "SQLAlchemy", "SQLite", "Python", "REST API"],
    href: "https://mentor-bridge-1.vercel.app/",
    highlights: ["Smart Matching", "Session Scheduling", "SQLAlchemy ORM"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="flex items-center justify-between mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ projects ]</span>
          <a href="https://github.com/AdityaQQ" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#444] hover:text-[#888] tracking-widest uppercase transition-colors">
            View All →
          </a>
        </motion.div>

        <div className="space-y-0 border border-[#222]">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className={`group p-6 md:p-8 ${i < projects.length - 1 ? "border-b border-[#222]" : ""} hover:bg-[#111] transition-colors duration-200`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                <div className="flex items-baseline gap-5">
                  <span className="text-[10px] text-[#333] font-mono">{project.id}</span>
                  <div>
                    <div className="text-[10px] text-[#444] tracking-widest mb-1.5">{project.category}</div>
                    <h3 className="text-xl font-mono text-[#e8e8e8] tracking-tight glitch" data-text={project.title}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#444] hover:text-[#e8e8e8] tracking-widest uppercase transition-colors border border-[#222] hover:border-[#444] px-3 py-1.5 group-hover:border-[#333]"
                >
                  EXPLORE →
                </a>
              </div>

              <p className="text-sm text-[#888] font-mono leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-4">
                {project.highlights.map((h) => (
                  <span key={h} className="text-[10px] text-[#555] font-mono tracking-wide before:content-['—_']">
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1a1a1a]">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-[#555] hover:text-[#888] transition-colors border border-[#1e1e1e] px-2 py-0.5">
                    {t}
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
