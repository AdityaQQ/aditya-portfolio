import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Upadhyay — Full-Stack Developer & AI Engineer",
  description: "CS student at KIIT specializing in AI. Full-Stack Developer & AI Engineer.",
  authors: [{ name: "Aditya Upadhyay" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }} className="antialiased bg-[#0a0a0a] text-[#e8e8e8]">
        {children}
      </body>
    </html>
  );
}
