import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`h-screen flex flex-col justify-center items-center px-6 transition-all duration-500 ${
        darkMode ? "bg-slate-900" : "bg-pink-50"
      }`}
    >
      <div className="text-center space-y-4 animate-fade-in">
        <h2
          className={`font-mono text-lg transition-colors duration-500 ${
            darkMode ? "text-cyan-400" : "text-pink-600"
          }`}
        >
          Hi, my name is
        </h2>

        <h1
          className={`text-5xl md:text-7xl font-bold transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          Tewodros Kassanew Akele.
        </h1>

        <h3
          className={`text-3xl md:text-5xl font-semibold transition-colors duration-500 ${
            darkMode ? "text-slate-400" : "text-slate-700"
          }`}
        >
          I build software, AI, and intelligent engineering systems.
        </h3>

        <p
          className={`max-w-2xl mx-auto mt-4 leading-relaxed transition-colors duration-500 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I'm a Computer Engineer and Software Developer with practical
          experience in Golang, React, JavaScript, REST APIs, PostgreSQL, and
          Gin. I also work with Artificial Intelligence, Machine Learning, Deep
          Learning, NLP, and LLM applications, with additional experience in
          robotics and IoT systems.
        </p>

        <div className="pt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className={`px-8 py-3 border-2 font-bold transition-all duration-300 rounded-md inline-block ${
              darkMode
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                : "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white shadow-md"
            }`}
          >
            View My Work
          </a>

          <a
            href="#contact"
            className={`px-8 py-3 border-2 font-bold transition-all duration-300 rounded-md inline-block ${
              darkMode
                ? "border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                : "border-slate-400 text-slate-700 hover:border-pink-600 hover:text-pink-600"
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
