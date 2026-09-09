import React from "react";
import { useSelector } from "react-redux";
import { projects } from "../data/project.js";
import ProjectCard from "../componnents/projectCard";

const Projects = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 flex items-center gap-4 transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          <span className="text-cyan-400 font-mono text-xl">03.</span>
          Some Things I've Built
          <div
            className={`h-[1px] flex-grow ml-4 ${
              darkMode ? "bg-slate-700" : "bg-slate-300"
            }`}
          ></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 border rounded transition-all duration-300 ${
              darkMode
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
