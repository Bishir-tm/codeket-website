import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const CaseStudyModal = ({ activeCaseStudy, setActiveCaseStudy }) => {
  if (!activeCaseStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveCaseStudy(null)}
        ></div>

        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col"
        >
          {/* Sticky Header - Fixed positioning with higher z-index */}
          <div className="sticky top-0 z-30 bg-gray-900 p-6 border-b border-gray-800 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">
              {activeCaseStudy.title}
            </h3>
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Make this div scrollable instead of the entire modal */}
          <div className="overflow-y-auto flex-1">
            <div className="p-6 md:p-8">
              {/* Client info */}
              <div className="mb-10">
                <div className="bg-gray-800 w-20 h-20 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-4xl">{activeCaseStudy.icon}</div>
                </div>
                <p className="text-blue-400 font-medium mb-2">Client</p>
                <h4 className="text-xl font-bold text-white mb-2">
                  {activeCaseStudy.clientName}
                </h4>
                <p className="text-gray-400">
                  {activeCaseStudy.clientDescription}
                </p>
              </div>

              {/* Challenge section */}
              <div className="mb-10">
                <p className="text-purple-400 font-medium mb-2">
                  The Challenge
                </p>
                <h4 className="text-xl font-bold text-white mb-4">
                  {activeCaseStudy.challengeTitle}
                </h4>
                <p className="text-gray-300">
                  {activeCaseStudy.challengeDescription}
                </p>
              </div>

              {/* Key stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {activeCaseStudy.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 text-center"
                  >
                    <div
                      className={`text-xl md:text-2xl font-bold text-${activeCaseStudy.accentColor}-500 mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Solution section */}
              <div className="mb-10">
                <p className="text-green-400 font-medium mb-2">Our Solution</p>
                <h4 className="text-xl font-bold text-white mb-4">
                  Custom-Built Technology Stack
                </h4>
                <ul className="space-y-3 text-gray-300 mb-6">
                  {activeCaseStudy.solution.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeCaseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results section */}
              <div className="mb-10">
                <p className="text-amber-400 font-medium mb-2">The Results</p>
                <h4 className="text-xl font-bold text-white mb-4">
                  Measurable Business Impact
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {activeCaseStudy.results.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 text-amber-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-800 rounded-xl p-6 mb-10">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <HiOutlineUser className="text-2xl text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      {activeCaseStudy.testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {activeCaseStudy.testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "{activeCaseStudy.testimonial.quote}"
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  Start Your Success Story
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
