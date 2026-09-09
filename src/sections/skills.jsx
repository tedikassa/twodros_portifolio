import { useSelector } from "react-redux";

const SkillCategory = ({ title, skills, darkMode }) => (
  <div
    className={`p-6 rounded-xl border transition-all duration-500 ${
      darkMode
        ? "bg-slate-800/50 border-slate-700 shadow-none"
        : "bg-white border-slate-200 shadow-md"
    }`}
  >
    <h3
      className={`font-bold mb-4 uppercase tracking-widest text-xs ${
        darkMode ? "text-cyan-400" : "text-cyan-600"
      }`}
    >
      {title}
    </h3>

    <ul className="grid grid-cols-2 gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className={`flex items-center gap-2 transition-colors duration-500 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <span className="text-cyan-500">▹</span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Technical Skills
          </h2>

          <div className="w-20 h-1.5 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Programming */}
          <SkillCategory
            darkMode={darkMode}
            title="Programming"
            skills={["Python", "JavaScript", "Go", "Java", "C++"]}
          />

          {/* Frontend */}
          <SkillCategory
            darkMode={darkMode}
            title="Frontend"
            skills={["React", "HTML", "CSS", "Tailwind CSS"]}
          />

          {/* Backend & APIs */}
          <SkillCategory
            darkMode={darkMode}
            title="Backend & APIs"
            skills={["Gin", "REST API", "Payment Integration", "JWT"]}
          />

          {/* Database */}
          <SkillCategory
            darkMode={darkMode}
            title="Database"
            skills={["PostgreSQL"]}
          />

          {/* AI & Machine Learning */}
          <SkillCategory
            darkMode={darkMode}
            title="AI / Machine Learning"
            skills={["TensorFlow", "Scikit-learn", "Pandas", "NumPy"]}
          />

          {/* AI / NLP */}
          <SkillCategory
            darkMode={darkMode}
            title="AI / NLP"
            skills={["NLP", "OpenAI API", "LLMs"]}
          />

          {/* Deep Learning */}
          <SkillCategory
            darkMode={darkMode}
            title="Deep Learning"
            skills={["CNN", "Neural Networks", "Image Classification"]}
          />

          {/* Engineering */}
          <SkillCategory
            darkMode={darkMode}
            title="Engineering"
            skills={[
              "Computer Architecture",
              "Operating Systems",
              "Networking",
              "Embedded Systems",
            ]}
          />

          {/* Networking */}
          <SkillCategory
            darkMode={darkMode}
            title="Networking"
            skills={[
              "TCP/IP",
              "LAN/WAN",
              "IP Addressing",
              "Subnetting",
              "DNS",
              "DHCP",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
