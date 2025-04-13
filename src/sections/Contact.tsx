import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Get In Touch</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20">
                <h3 className="text-xl font-bold text-blue-600 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center">
                      <FiMail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <a
                        href="mailto:dshrivastava925@gmail.com"
                        className="text-white hover:text-blue-600"
                      >
                        dshrivastava925@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center">
                      <FiGithub className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Github</p>
                      <a
                        href="https://github.com/dshrivastava925"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-600 break-all"
                      >
                        github.com/dshrivastava925
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center">
                      <FiLinkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/devansh925/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-600 break-all"
                      >
                        linkedin.com/in/devansh925/
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 bg-opacity-20 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20">
                <h3 className="text-lg font-bold text-white mb-2">
                  Ready to work together?
                </h3>
                <p className="text-gray-300">Let's build something amazing!</p>
                <a
                  href="mailto:dshrivastava925@gmail.com"
                  className="mt-4 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium inline-flex items-center space-x-2"
                >
                  <span>Hire Me</span>
                  <FiArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 bg-gray-900 p-6 rounded-lg shadow-lg border border-blue-500 border-opacity-20">
              <h3 className="text-xl font-bold text-blue-600 mb-6">
                Send Me a Message
              </h3>

              <form target="_blank"  className="space-y-4" action={import.meta.env.VITE_FORMSUBMIT} method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name = 'email'
                      className="w-full px-4 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name = 'subject'
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name = 'message'
                    rows={4}
                    className="w-full px-4 py-2 bg-black bg-opacity-50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Contact;