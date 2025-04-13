import React from "react";
import { FiGithub } from "react-icons/fi";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Personal Projects</span>
                </h2>
                <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                  Check out some of my personal projects
                </p>
              </div>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="group bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500 border-opacity-10 hover:border-opacity-30">
                  <div className="h-48 bg-blue-900 bg-opacity-50 relative overflow-hidden">
                    <img
                      src="cover.jpg"
                      alt="GreatKart E-Commerce Platform"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600">
                      GreatKart
                    </h3>
                    <p className="mt-2 text-gray-400">
                      Developed a Python-based E-Commerce platform using Django. Features user authentication, product management, and secure payment integration.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        Python
                      </span>
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        Django
                      </span>
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        SQLite
                      </span>
                    </div>
                    <div className="mt-6 flex space-x-4">
                      <a
                        href="https://github.com/dshrivastava925/greatkart-django"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-transparent hover:bg-blue-900 hover:bg-opacity-20 text-blue-600 border border-blue-500 text-sm rounded-md flex items-center space-x-1"
                      >
                        <FiGithub className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
    
                <div className="group bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500 border-opacity-10 hover:border-opacity-30">
                  <div className="h-48 bg-blue-900 bg-opacity-50 relative overflow-hidden">
                    <img
                      src="Crawler.png"
                      alt="The Dark Web Crawler"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600">The Dark Web Crawler</h3>
                    <p className="mt-2 text-gray-400">
                      An AI-based tool that crawls Dark Web sites. Represented in Smart India Hackathon Grand Finale 2024 at IIT Jammu. Features user management, data collection, secure storage, and real-time monitoring.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        Python
                      </span>
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        Django
                      </span>
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        REST API
                      </span>
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        Socks
                      </span>
                      <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded text-xs">
                        NLTK
                      </span>
                    </div>
                    <div className="mt-6 flex space-x-4">
                      <a
                        href="https://github.com/dshrivastava925/Dark-Web-Crawler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-transparent hover:bg-blue-900 hover:bg-opacity-20 text-blue-600 border border-blue-500 text-sm rounded-md flex items-center space-x-1"
                      >
                        <FiGithub className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <a
                  href="https://github.com/dshrivastava925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700  text-white text-base font-medium rounded-5xl transition" // View More button colors
                >
                  <FiGithub className="h-5 w-5 mx-auto"  />
                  <span>View More on Github</span>
                </a>
              </div>
            </div>
          </section>
    );
};

export default Projects