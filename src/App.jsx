import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion as Motion } from "framer-motion";
import Navbar from "./componnents/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Gallery from "./sections/Gallery";
import Contact from "./sections/contact";

const SectionWrapper = ({ children, id }) => (
  <Motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="min-h-screen flex flex-col justify-center overflow-x-hidden"
  >
    {children}
  </Motion.section>
);

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={
        darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"
      }
    >
      <div className="min-h-screen transition-colors duration-500 ease-in-out">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6">
          <SectionWrapper id="home">
            <Hero />
          </SectionWrapper>

          <SectionWrapper id="about">
            <About />
          </SectionWrapper>

          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>

          <SectionWrapper id="gallery">
            <Gallery />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>
      </div>
    </div>
  );
}

export default App;
