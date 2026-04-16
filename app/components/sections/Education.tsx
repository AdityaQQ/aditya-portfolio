"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ education ]</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="border border-[#222] p-6 md:p-8 hover:bg-[#111] transition-colors"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-6">
            <div>
              <div className="text-[10px] text-[#444] tracking-widest mb-3 uppercase">B.Tech · Computer Science</div>
              <h3 className="text-lg font-mono text-[#e8e8e8] mb-1">
                Kalinga Institute of Industrial Technology
              </h3>
              <div className="text-sm text-[#555] font-mono mb-5">Specialization in System engineering </div>

              <div className="flex flex-wrap gap-2">
                {["AI/ML", "Data Structures", "System Design", "Computer Networks", "DBMS", "OS"].map((s) => (
                  <span key={s} className="text-[10px] font-mono text-[#555] border border-[#1e1e1e] px-2 py-0.5 hover:text-[#888] transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right font-mono md:text-right">
              <div className="text-[10px] text-[#444] tracking-widest mb-2">PERIOD</div>
              <div className="text-sm text-[#e8e8e8] mb-4">2023</div>
              <div className="text-[10px] text-[#444] tracking-widest mb-2">LOCATION</div>
              <div className="text-sm text-[#888]">Bhubaneswar, OD</div>
              <div className="mt-4">
                <span className="text-[10px] border border-[#333] px-2 py-1 text-[#888] tracking-wider">CURRENT</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
