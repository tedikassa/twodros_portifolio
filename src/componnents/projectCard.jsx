import React from "react";
import { useSelector } from "react-redux"; // Added

const ProjectCard = ({ project }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
        darkMode
          ? "bg-slate-800 border-slate-700 shadow-xl hover:border-cyan-500/50"
          : "bg-white border-slate-200 shadow-lg hover:border-cyan-500/50"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl">📁</span>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className={`transition text-xl flex items-center ${
              darkMode
                ? "text-slate-400 hover:text-cyan-400"
                : "text-slate-500 hover:text-cyan-600"
            }`}
          >
            <i className="fab fa-github"></i>
            <span className="text-sm font-mono ml-1">GitHub</span>
          </a>
        </div>
      </div>

      {/* PROJECT TITLE: Fix for "Invisible" text */}
      <h3
        className={`text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {project.name}
      </h3>

      {/* PROJECT DESCRIPTION */}
      <p
        className={`text-sm leading-relaxed mb-6 transition-colors ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {project.description}
      </p>

      {/* TECH TAGS */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border transition-colors ${
              darkMode
                ? "bg-slate-900 text-cyan-400 border-cyan-900/50"
                : "bg-cyan-50 text-cyan-700 border-cyan-200"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
