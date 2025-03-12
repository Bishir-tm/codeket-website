import React from "react";
import { motion } from "framer-motion";

// Project showcase data
const projectShowcase = [
  {
    title: "Global Banking Platform",
    description:
      "AI-driven banking system serving 5M+ customers across 12 countries",
    icon: "🏦",
    stats: { development: "4 months", users: "5M+", satisfaction: "98%" },
    tech: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Smart City Infrastructure",
    description: "IoT platform for managing urban infrastructure and services",
    icon: "🏙️",
    stats: { development: "6 months", devices: "50K+", efficiency: "+42%" },
    tech: ["Python", "React", "TensorFlow", "Azure", "MongoDB"],
    color: "from-emerald-600 to-green-700",
  },
  {
    title: "Healthcare Analytics Suite",
    description: "Predictive analytics platform for healthcare providers",
    icon: "🏥",
    stats: { development: "5 months", hospitals: "120+", accuracy: "99.2%" },
    tech: ["React", "Python", "AWS", "PostgreSQL", "Docker"],
    color: "from-red-600 to-pink-700",
  },
];

const ProjectShowcase = () => {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Success Stories
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our AI-powered approach has delivered exceptional results for
          enterprise clients worldwide.
        </motion.p>
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projectShowcase.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ translateY: -10 }}
          >
            {/* Project card glow effect */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r ${project.color}`}
            ></div>

            {/* Project icon */}
            <div
              className={`w-20 h-20 flex items-center justify-center text-3xl bg-gradient-to-br ${project.color} rounded-br-xl`}
            >
              {project.icon}
            </div>

            {/* Project content */}
            <div className="p-6 pt-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(project.stats).map(([key, value], i) => (
                  <div
                    key={i}
                    className="text-center p-2 bg-white/5 rounded-lg"
                  >
                    <div className="text-blue-400 font-mono font-bold">
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card footer with CTA */}
            <div className="p-4 border-t border-gray-800 flex justify-between items-center">
              <span className="text-sm text-gray-400">Case Study</span>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center">
                View details
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* CTA Button */}
      <div className="text-center mt-12">
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span>View All Case Studies</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
