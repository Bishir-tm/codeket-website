// components/ProjectShowcase.js
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI-Powered Inventory System",
    client: "SAAS",
    description:
      "Revolutionizing inventory management with predictive AI and real-time analytics.",
    technologies: ["React", "Node.js", "TensorFlow", "AWS"],
    results: [
      "85% reduction in stockouts",
      "32% increase in inventory turnover",
      "12% overall revenue growth",
      "$4.2M in annual savings",
    ],
    image: "./images/inventory.png",
  },
  {
    id: 2,
    title: "Healthcare Information Management Platform",
    client: "National Healthcare Provider",
    description:
      "HIPAA-compliant patient data management with AI-assisted diagnostics.",
    technologies: ["React", "Python", "TensorFlow", "Google Cloud"],
    results: [
      "68% faster diagnostic times",
      "24% improvement in treatment outcomes",
      "1.2M patient records securely managed",
      "Seamless integration with 15 existing systems",
    ],
    image: "./images/health.png",
  },
  {
    id: 3,
    title: "VTU & Wallet System",
    client: "Nigerian VTU Platform",
    description:
      "A seamless virtual top-up system with an integrated wallet for mobile and data purchases.",
    technologies: ["MERN Stack", "Redux Toolkit", "DaisyUI", "Hero Icons"],
    results: [
      "Instant airtime and data purchases",
      "Secure wallet transactions with history tracking",
      "API integration with major telecom providers",
      "User-friendly dashboard for balance management",
    ],
    image: "./images/vtu-app.png",
  },
  {
    id: 4,
    title: "School Management System",
    client: "Nigerian Educational Institutions",
    description:
      "A comprehensive platform for managing student records, attendance, and finances.",
    technologies: ["MERN Stack", "Redux Toolkit", "DaisyUI"],
    results: [
      "Efficient student and staff record management",
      "Automated attendance tracking",
      "Seamless fee management and payment processing",
      "Role-based access control for security",
    ],
    image: "./images/school.png",
  },
];

const ProjectShowcase = () => {
  return (
    <div className="py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent enterprise solutions that have delivered
            transformative results for organizations across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-2">Client: {project.client}</p>
                <p className="text-xl text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={` rounded-2xl border p-3 overflow-hidden aspect-video flex items-center justify-center ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt=""
                  className="rounded-2xl w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
