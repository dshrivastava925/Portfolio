import React from "react";
import { FiBookOpen, FiAward } from "react-icons/fi";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Education & Certifications</span>
        </h2>
        <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Column */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
            <FiBookOpen className="w-6 h-6 mr-2" />
            Education
          </h3>
  
          <div className="space-y-6 flex-1 flex flex-col">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20 h-full">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    B.Tech Computer Science Engineering
                  </h4>
                  <p className="text-blue-400">
                    Gyan Ganga College Of Technology, Jabalpur (M.P), India
                  </p>
                </div>
                <div className="text-gray-400 text-sm">2021 - 2025</div>
              </div>
              <div className="mt-2 text-gray-400">CGPA: 8.33/10</div>
            </div>
  
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20 h-full">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Senior Secondary School (Class-XII)
                  </h4>
                  <p className="text-blue-400">
                    Christ Church School For Boys & Girls (ISC), Jabalpur (M.P), India
                  </p>
                </div>
                <div className="text-gray-400 text-sm">2019 - 2020</div>
              </div>
              <div className="mt-2 text-gray-400">Percentage: 76.2%</div>
            </div>
  
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20 h-full">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Secondary School (Class-X)
                  </h4>
                  <p className="text-blue-400">
                    Christ Church School For Boys & Girls (ISC), Jabalpur (M.P), India
                  </p>
                </div>
                <div className="text-gray-400 text-sm">2017 - 2018</div>
              </div>
              <div className="mt-2 text-gray-400">Percentage: 73.4%</div>
            </div>
          </div>
        </div>
  
        {/* Certifications Column */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
            <FiAward className="w-6 h-6 mr-2" />
            Certifications
          </h3>
  
          <div className="space-y-6 flex-1 flex flex-col">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20 group hover:border-opacity-40 transition-all h-full">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Python Foundation
                </h4>
                <div className="text-gray-400 text-sm">August 2024</div>
              </div>
              <p className="text-blue-400">Infosys Springboard</p>
              <a
                href="https://example.com/python-foundation-certificate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"
              >
                View Certificate
              </a>
            </div>
  
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20 group hover:border-opacity-40 transition-all h-full">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  AWS Cloud Foundation
                </h4>
                <div className="text-gray-400 text-sm">June 2024</div>
              </div>
              <p className="text-blue-400">AWS Academy</p>
              <a
                href="AWS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"
              >
                View Certificate
              </a>
            </div>
  
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20 group hover:border-opacity-40 transition-all h-full">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Python For Data Science
                </h4>
                <div className="text-gray-400 text-sm">March 2025</div>
              </div>
              <p className="text-blue-400">NPTEL</p>
              <a
                href="Python for Data Science (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    );
  };

  export default Education;