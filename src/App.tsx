import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }

      if (current !== "" && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <Navbar activeSection="home" />


      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      
      
    </div>
  );
}
