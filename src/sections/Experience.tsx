import React from "react";
import { FiBriefcase } from "react-icons/fi";

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Positions of Responsibility</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          <div className="relative before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-blue-500 before:bg-opacity-30 md:before:left-1/2 md:before:-translate-x-1/2">
            <div className="relative md:flex items-center md:justify-between mb-12 group">
              <div className="md:w-1/2 md:pr-8 flex md:justify-end items-center mb-4 md:mb-0">
                <div className="text-gray-400 text-right mr-4 order-1 md:order-none">
                  Sep 2022 - Mar 2025
                </div>
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full order-none md:order-1">
                  <FiBriefcase className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-blue-600 border-opacity-20 group-hover:border-opacity-40 transition-all">
                  <h3 className="text-xl font-bold text-blue-600">
                    Co-Founder & Management Head
                  </h3>
                  <p className="text-gray-300 mb-4">The WINGS Club at Gyan Ganga College, Jabalpur</p>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1">•</div>
                      <div>Organized all Tech & Non-Tech events for the college.</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1">•</div>
                      <div>Conducted training sessions on Python & C++ basics.</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1">•</div>
                      <div>Educated over 200 students in college.</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative md:flex items-center md:justify-between group">
              <div className="md:w-1/2 md:pr-8 flex md:justify-end items-center mb-4 md:mb-0 md:order-last">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full order-none md:order-first mr-0 md:mr-4">
                  <FiBriefcase className="w-5 h-5 text-white" />
                </div>
                <div className="text-gray-400 text-right mr-80 order-1 md:order-none">
                  Aug 2023 - Aug 2024
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8 md:order-first">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-blue-600 border-opacity-20 group-hover:border-opacity-40 transition-all">
                  <h3 className="text-xl font-bold text-blue-600">
                    College Campus Ambassador
                  </h3>
                  <p className="text-gray-300 mb-4">CISCO Campus Ambassador Program</p>
                  <ul className="text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1">•</div>
                      <div>Represented Cisco at College Campus.</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1">•</div>
                      <div>Organized events like Hackathons and Coding Contests.</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
);
}
export default Experience;