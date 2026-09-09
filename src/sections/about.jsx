import { useSelector } from "react-redux";
import profilePic from "../assets/image.png";

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-64 h-64 bg-cyan-400 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <img
              src={profilePic}
              alt="Tewodros Kassanew Akele"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h2
            className={`text-3xl font-bold transition-colors duration-500 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            About Me
          </h2>

          <p
            className={`leading-relaxed transition-colors duration-500 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I am a Computer Engineer and Software Developer with a strong
            interest in building modern software systems and intelligent
            technologies. I specialize in
            <strong className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
              {" "}
              Golang, React, JavaScript, REST APIs, PostgreSQL, and Gin
            </strong>
            , with practical experience in web application development and
            payment-system integration.
            <br />
            <br />I also have hands-on experience in
            <strong className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
              {" "}
              Artificial Intelligence, Machine Learning, Deep Learning, NLP, and
              LLM applications
            </strong>
            . My engineering interests extend to robotics and IoT, including
            autonomous navigation, ROS 2, SLAM, LiDAR, MQTT, and real-time
            monitoring systems.
            <br />
            <br />I enjoy solving complex technical problems, learning new
            technologies, and developing reliable systems that combine software
            engineering, artificial intelligence, and computer engineering.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-cyan-400 text-sm font-medium">
            <span>#Golang</span>
            <span>#ReactJS</span>
            <span>#AI/ML</span>
            <span>#Robotics</span>
            <span>#IoT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
