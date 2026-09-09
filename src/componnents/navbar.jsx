import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md transition-all duration-500 border-b ${
        darkMode
          ? "bg-slate-900/20 border-slate-800/40 shadow-2xl"
          : "bg-slate-900/90 border-slate-700 shadow-lg"
      }`}
    >
      <div className="font-bold text-2xl tracking-tighter text-cyan-400">
        SA.
      </div>

      <div
        className={`hidden md:flex gap-8 font-medium transition-colors ${
          darkMode ? "text-slate-300" : "text-slate-100"
        }`}
      >
        <a href="#about" className="hover:text-cyan-400 transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">
          Projects
        </a>
        <a href="#gallery" className="hover:text-cyan-400 transition-colors">
          Gallery
        </a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">
          Contact
        </a>
      </div>

      <button
        onClick={() => dispatch(toggleTheme())}
        className={`p-2 rounded-xl border transition-all duration-300 hover:rotate-12 active:scale-90 ${
          darkMode
            ? "bg-slate-800/40 text-cyan-400 border-slate-700"
            : "bg-slate-800 text-yellow-400 border-slate-600"
        }`}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
