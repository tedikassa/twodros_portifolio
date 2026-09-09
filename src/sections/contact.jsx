import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            className={`font-mono transition-colors duration-500 ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            05. What's Next?
          </h2>

          <h1
            className={`text-5xl font-bold transition-colors duration-500 ${
              darkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Get In Touch
          </h1>

          <p
            className={`leading-relaxed transition-colors duration-500 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I’m currently open to new opportunities in Software Development,
            AI/ML, and Computer Engineering. Whether you have a project,
            opportunity, or just want to say hello, feel free to reach out.
          </p>

          <div
            className={`mt-4 font-mono text-sm ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            teda16kassa@gmail.com
          </div>

          <div className="flex justify-center gap-8 pt-8">
            {/* Email */}
            <a
              href="mailto:teda16kassa@gmail.com"
              className="group flex flex-col items-center gap-2"
            >
              <span
                className={`text-2xl transition-transform group-hover:-translate-y-1 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                📧
              </span>

              <span className="text-[10px] font-mono text-cyan-500 uppercase">
                Email
              </span>
            </a>

            {/* GitHub */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span
                className={`text-2xl transition-transform group-hover:-translate-y-1 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                🐙
              </span>

              <span className="text-[10px] font-mono text-cyan-500 uppercase">
                Github
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span
                className={`text-2xl transition-transform group-hover:-translate-y-1 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                💼
              </span>

              <span className="text-[10px] font-mono text-cyan-500 uppercase">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Say Hello Button */}
          <a
            href="mailto:teda16kassa@gmail.com"
            className={`inline-block mt-12 px-10 py-4 bg-transparent border-2 rounded-lg font-bold transition-all duration-300 ${
              darkMode
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white shadow-lg"
            }`}
          >
            Say Hello
          </a>
        </div>
      </section>

      <footer
        className={`py-8 text-center border-t transition-colors duration-500 ${
          darkMode
            ? "bg-slate-900 border-slate-800 text-slate-500"
            : "bg-slate-50 border-slate-200 text-slate-600"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-mono">
            Designed & Built by{" "}
            <span className="text-cyan-500">Tewodros Kassanew Akele</span>
          </p>

          <p className="text-[10px] mt-2 tracking-widest uppercase">
            © 2026 • Addis Ababa, Ethiopia
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
