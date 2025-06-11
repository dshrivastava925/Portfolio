import React from "react";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
} from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full pt-16 relative min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-blue-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          {/* Left Section */}
          <div className="md:w-3/4 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="block text-white">Hi, I'm</span>
              <span className="block text-blue-600 mt-1">Devansh Shrivastava</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-300">
              Backend Developer & AI Enthusiast
            </p>
            <p className="mt-5 text-gray-400 max-w-md">
              Passionate and inquisitive learner integrating backend skills with AI/ML. Committed to continuous learning and innovative projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center space-x-2"
              >
                <span>Contact Me</span>
                <FiArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-transparent hover:bg-blue-900 hover:bg-opacity-20 text-blue-600 border border-blue-500 font-medium"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/dshrivastava925"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/devansh925/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:dshrivastava925@gmail.com"
                className="text-gray-400 hover:text-blue-600"
              >
                <FiMail className="h-6 w-6" />
              </a>
              <a
                href="Devansh-Shrivastava-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <FiFileText className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-blue-900 bg-opacity-10 rounded-lg backdrop-blur-md border border-white-900 border-opacity-30" />
              <div className="relative w-full h-96 flex items-center justify-center">
                <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl shadow-blue-500/40 flex items-center justify-center">
                  <img
                    src="My Photo 1.jpg"
                    alt="Devansh Shrivastava"
                    className="h-56 w-56 object-cover rounded-full shadow-lg shadow-blue-800/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="animate-bounce mt-2 w-1 h-2 bg-blue-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
