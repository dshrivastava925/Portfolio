import React from "react";
import { FiCode, FiBookOpen, FiAward } from "react-icons/fi";

const Skills: React.FC = () => {
    return (
    <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Technical Skills & Interests</span>
                </h2>
                <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-xl border border-blue-500 border-opacity-20">
                  <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                    <FiCode className="w-5 h-5 mr-2" />
                    Programming & Development
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      "Python",
                      "JavaScript",
                      "C++",
                      "SQL",
                      "PostgreSQL",
                      "MongoDB",
                      "DBMS",
                      "HTML",
                      "CSS",
                      "Django",
                      "NodeJS",
                      "REST APIs",
                      "NumPy",
                      "Pandas",
                      "Matplotlib",
                      "NLTK",
                      "Postman",
                      "Git/GitHub",
                      
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 break-words">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
    
                <div className="flex flex-col space-y-8">
                  <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-xl border border-blue-500 border-opacity-20">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                      <FiBookOpen className="w-5 h-5 mr-2" />
                      Field of Interest
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Backend Development", "Application of AI & ML models"].map(
                        (interest) => (
                          <span
                            key={interest}
                            className="px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        )
                      )}
                    </div>
                  </div>
    
                  <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-xl border border-blue-500 border-opacity-20">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                      <FiAward className="w-5 h-5 mr-2" />
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Team Player",
                        "Problem Solving",
                        "Adaptability",
                        "Communication",
                        "Critical Thinking",
                        "Time Management",
                        "Leadership",
                        "Creativity",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Skill Bars - Visual representation */}
              <div className="mt-12 bg-black bg-opacity-50 p-6 rounded-lg shadow-xl border border-blue-500 border-opacity-20">
                <h3 className="text-xl font-bold text-blue-600 mb-6">
                  Key Competencies
                </h3>
    
                <div className="space-y-5">
                  {[
                    { name: "Backend Development", percentage: 90 },
                    { name: "Frontend Development", percentage: 70 },
                    { name: "Database Management", percentage: 80 },
                    { name: "API Development", percentage: 75 },
                    { name: "AI & Machine Learning", percentage: 60 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-600">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
    );
};

export default Skills