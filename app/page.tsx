import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import GitHub from "./components/sections/GitHub";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <GitHub />
      <Contact />
    </main>
  );
}
