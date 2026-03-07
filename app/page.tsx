export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-center gap-8 py-4 bg-black/80 backdrop-blur z-10">

        <a href="#about" className="text-gray-400 hover:text-white">
          About
        </a>

        <a href="#experience" className="text-gray-400 hover:text-white">
          Experience
        </a>

        <a href="#projects" className="text-gray-400 hover:text-white">
          Projects
        </a>

        <a href="#contact" className="text-gray-400 hover:text-white">
          Contact
        </a>

      </nav>


      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Aditya Upadhyay
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Computer Science & Systems Engineering Student
        </p>

        <p className="mt-2 text-gray-500">
          Full Stack Developer • DSA in Java
        </p>

        <div className="mt-8 flex gap-6">

          <a
            href="https://github.com/AdityaQQ"
            className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:adityaup2103@gmail.com"
            className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Email
          </a>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          About
        </h2>

        <p className="text-gray-400 leading-relaxed">
          I’m Aditya Upadhyay, a Computer Science and Systems Engineering
          undergraduate at Kalinga Institute of Industrial Technology,
          Bhubaneswar (2027). I enjoy building full-stack applications with
          clean architecture, strong backend systems, and practical
          user-centered design. Currently focused on improving Data Structures
          and Algorithms in Java while building real-world products and
          learning how production systems work.
        </p>

      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Experience
        </h2>

        <div className="border border-gray-700 p-6 rounded hover:border-white transition">

          <h3 className="text-xl font-semibold">
            Technology Consulting Intern — Ernst & Young (EY)
          </h3>

          <p className="text-gray-400 mt-2">
            Worked on IT Transformation in Government and Public Sector.
            Contributed to research and analysis related to digital
            transformation strategies in public sector organizations.
          </p>

        </div>

      </section>


      {/* TECH STACK */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-lg">

          <span>Java</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>TailwindCSS</span>
          <span>Docker</span>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-700 p-6 rounded hover:border-white transition">

            <h3 className="text-xl font-semibold">
              Full Stack Web Application
            </h3>

            <p className="text-gray-400 mt-2">
              Built using Node.js, Express, MongoDB and TailwindCSS
              with scalable backend APIs and authentication.
            </p>

          </div>


          <div className="border border-gray-700 p-6 rounded hover:border-white transition">

            <h3 className="text-xl font-semibold">
              AI / Machine Learning Project
            </h3>

            <p className="text-gray-400 mt-2">
              Implemented machine learning model with data preprocessing,
              training and prediction pipeline.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400">
          adityaup2103@gmail.com
        </p>

      </section>

    </main>
  );
}