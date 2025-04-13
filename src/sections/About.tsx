// src/components/About.tsx

import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-5 mb-25">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">About Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="md:flex md:items-center md:space-x-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="Gif.gif"
                  alt="About Devansh Shrivastava"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Backend Developer & AI Enthusiast
            </h3>
            <p className="text-gray-300 mb-4">
              I am a passionate and inquisitive learner with an intermediate
              understanding of Python with Django and Restful API. I am
              actively seeking opportunities to integrate my back-end
              development experience with my passion for AI and Machine
              Learning.
            </p>
            <p className="text-gray-300 mb-6">
              With a proactive approach to acquiring new skills and enhancing
              my competencies, I am determined and committed to continuous
              learning and contributing to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
