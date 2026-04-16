"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ASCII_CRAFT = `
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝  `;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#222]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <span className="text-[10px] tracking-widest text-[#444] uppercase">[ contact ]</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 border border-[#222]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-[#222]"
          >
            <h2 className="text-2xl font-mono text-[#e8e8e8] mb-4 tracking-tight">
              Let&apos;s build something.
            </h2>
            <p className="text-sm text-[#888] font-mono leading-relaxed mb-8">
              Actively looking for internship opportunities and open to collaboration on interesting projects.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:aditya2103upadhyay@gmail.com"
                className="flex items-center gap-3 text-sm font-mono text-[#888] hover:text-[#e8e8e8] transition-colors group"
              >
                <span className="text-[#333] group-hover:text-[#666]">&gt;</span>
                <span className="text-[#444] tracking-widest text-xs uppercase w-20">Email</span>
                <span className="group-hover:underline underline-offset-2">aditya2103upadhyay@gmail.com</span>
              </a>
              <a
                href="https://github.com/AdityaQQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-mono text-[#888] hover:text-[#e8e8e8] transition-colors group"
              >
                <span className="text-[#333] group-hover:text-[#666]">&gt;</span>
                <span className="text-[#444] tracking-widest text-xs uppercase w-20">GitHub</span>
                <span className="group-hover:underline underline-offset-2">@AdityaQQ</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-upadhyay-015b2427a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-mono text-[#888] hover:text-[#e8e8e8] transition-colors group"
              >
                <span className="text-[#333] group-hover:text-[#666]">&gt;</span>
                <span className="text-[#444] tracking-widest text-xs uppercase w-20">LinkedIn</span>
                <span className="group-hover:underline underline-offset-2">Aditya Upadhyay</span>
              </a>
            </div>
          </motion.div>

          {/* Right — quick message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="p-6 md:p-10 flex flex-col"
          >
            <div className="text-[10px] text-[#444] tracking-widest mb-6 uppercase">{"// send a message"}</div>

            <div className="space-y-4 flex-1">
              <div className="border-b border-[#1e1e1e] pb-2 flex items-center gap-2">
                <span className="text-[#333] text-xs">&gt;</span>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 bg-transparent text-sm font-mono text-[#e8e8e8] placeholder-[#333] outline-none"
                />
              </div>
              <div className="border-b border-[#1e1e1e] pb-2 flex items-center gap-2">
                <span className="text-[#333] text-xs">&gt;</span>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent text-sm font-mono text-[#e8e8e8] placeholder-[#333] outline-none"
                />
              </div>
              <div className="border-b border-[#1e1e1e] pb-2 flex items-start gap-2 pt-1">
                <span className="text-[#333] text-xs mt-1">&gt;</span>
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="flex-1 bg-transparent text-sm font-mono text-[#e8e8e8] placeholder-[#333] outline-none resize-none"
                />
              </div>
            </div>

            <button className="mt-6 w-full text-xs tracking-widest border border-[#333] text-[#888] py-3 hover:border-[#e8e8e8] hover:text-[#e8e8e8] hover:bg-[#e8e8e8]/5 transition-all duration-200 uppercase font-mono">
              Send Message &gt;&gt;
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer ASCII */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-[#222]">
        <pre className="ascii mb-6 opacity-30">{ASCII_CRAFT}</pre>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <span className="text-[10px] text-[#333] font-mono tracking-widest">© 2025 ADITYA UPADHYAY</span>
          <span className="text-[10px] text-[#333] font-mono tracking-widest">BUILT WITH NEXT.JS + TAILWIND</span>
        </div>
      </div>
    </section>
  );
}
