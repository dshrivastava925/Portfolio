import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start space-x-6">
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
            </div>

            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Devansh Shrivastava. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};      

export default Footer;