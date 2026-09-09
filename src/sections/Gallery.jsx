import React from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const projects = [
    {
      id: 1,
      type: "Robotics & IoT",
      title: "IoT-Integrated SLAM Mobile Robot",
      description:
        "Autonomous mobile robot framework for remote patient monitoring using ROS 2, SLAM, Nav2, LiDAR, MQTT, and Gazebo.",
      icon: "🤖",
    },
    {
      id: 2,
      type: "Web Development",
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application built with Golang, Gin, React, PostgreSQL, REST APIs, and payment integration.",
      icon: "🛒",
    },
    {
      id: 3,
      type: "Artificial Intelligence",
      title: "Comment Sentiment Analysis",
      description:
        "NLP-based machine learning system for classifying comments as positive or negative.",
      icon: "💬",
    },
    {
      id: 4,
      type: "Machine Learning",
      title: "Email Spam Detection",
      description:
        "Machine learning system designed to classify emails as spam or non-spam using text data.",
      icon: "📧",
    },
    {
      id: 5,
      type: "Deep Learning",
      title: "Image Classification with CNN",
      description:
        "Convolutional neural network developed to identify and classify different image categories.",
      icon: "🧠",
    },
    {
      id: 6,
      type: "AI / LLM",
      title: "LLM / AI Application",
      description:
        "Natural-language application developed using Python, NLP techniques, and the OpenAI API.",
      icon: "✨",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 flex items-center gap-4 transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          <span className="text-cyan-400 font-mono text-xl">04.</span>
          Projects & Creative Lab
          <div
            className={`h-[1px] flex-grow ml-4 ${
              darkMode ? "bg-slate-700" : "bg-slate-300"
            }`}
          ></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-xl transition-all duration-500 border p-6 ${
                darkMode
                  ? "bg-slate-800 border-slate-700 hover:border-cyan-400"
                  : "bg-white border-slate-200 shadow-md hover:shadow-xl hover:border-cyan-500"
              }`}
            >
              {/* Project Icon */}
              <div
                className={`w-full h-40 rounded-lg mb-5 flex items-center justify-center text-6xl transition-all duration-500 ${
                  darkMode ? "bg-slate-700" : "bg-slate-100"
                }`}
              >
                {project.icon}
              </div>

              {/* Project Type */}
              <span className="text-cyan-500 text-xs font-mono uppercase tracking-widest">
                {project.type}
              </span>

              {/* Project Title */}
              <h3
                className={`text-xl font-bold mt-2 mb-3 transition-colors ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
