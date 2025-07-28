import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Project showcase data
const projectShowcase = [
  {
    title: "Enterprise Software Development",
    description:
      "Custom enterprise-grade software solutions designed to automate processes, integrate systems, and scale with your business growth.",
    icon: "🏦",
    items: [
      "Custom Web Applications",
      "Legacy System Modernization",
      "Internal Tools & Dashboards",
      "API Development & Integration",
    ],
    color: "from-primary to-secondary",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications with stunning UIs, seamless performance, and robust backend integration.",
    icon: "🏙️",
    items: [
      "iOS & Android Development",
      "React Native Solutions",
      "Mobile UX/UI Design",
      "App Store Optimization",
    ],

    color: "from-secondary to-accent",
  },
  {
    title: "Business Process Automation",
    description:
      "Streamline operations with intelligent automation that eliminates repetitive tasks and optimizes complex business processes.",
    icon: "🏥",
    items: [
      "Robotic Process Automation (RPA)",
      "Workflow Optimization",
      "Document Processing Automation",
      "Business Process Modeling",
    ],
    color: "from-accent to-primary",
  },
];

const ProjectShowcase = () => {
  return (
    <div className="my-8 p-8">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 h-[100%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Some of the Things We Do
        </motion.h2>
        <motion.p
          className="text-base-content/80 text-lg md:text-xl max-w-2xl mx-auto"
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
            className="bg-gradient-to-br from-neutral-focus to-neutral rounded-xl overflow-hidden border border-neutral relative group"
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
              <h3 className="text-2xl font-bold text-base-content mb-3">
                {project.title}
              </h3>
              <p className="text-base-content/80 mb-6">{project.description}</p>

              {/* items */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-neutral-focus text-base-content/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* CTA Button */}
      <div className=" text-center mt-12">
        <motion.button
          className="px-10 py-5 bg-gradient-to-r from-codeket-electricBlue to-accent text-white font-medium rounded-full shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to={"/services"} className="flex w-full">
            <span>View All Services</span>
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
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
