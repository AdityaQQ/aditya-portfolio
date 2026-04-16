"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="flex items-center justify-between mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ github ]</span>
          <a href="https://github.com/AdityaQQ" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#444] hover:text-[#888] tracking-widest uppercase transition-colors">
            @AdityaQQ →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="border border-[#222] p-6 md:p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1a1a1a]">
            <div className="w-2 h-2 bg-[#e8e8e8] rounded-full" />
            <span className="text-xs font-mono text-[#888]">Contribution activity — AdityaQQ</span>
          </div>

          {/* Calendar */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <GitHubCalendar
                username="AdityaQQ"
                colorScheme="dark"
                theme={{
                  dark: ["#111111", "#1e2e1e", "#2a422a", "#3a5c3a", "#4a7a4a"],
                }}
                fontSize={11}
                blockSize={11}
                blockMargin={3}
                style={{ color: "#444" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center"
        >
          <a
            href="https://github.com/AdityaQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#444] hover:text-[#888] tracking-widest uppercase transition-colors"
          >
            &gt; Explore repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
