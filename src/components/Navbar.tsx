import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type NavbarProps = {
  activeSection?: string;
};

const Navbar: React.FC<NavbarProps> = ({ activeSection = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-blue-600 font-bold text-xl">
              Devansh<span className="text-white"> Shrivastava</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-blue-700 hover:bg-opacity-20 hover:text-black"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-black bg-opacity-20 inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-white hover:bg-blue-700 hover:bg-opacity-20 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.toLowerCase()
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-blue-700 hover:bg-opacity-20 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
