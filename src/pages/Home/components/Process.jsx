import React from "react";
import { motion } from "framer-motion";

const processes = [
  {
    title: "Business Analysis",
    icon: "🔍",
    description:
      "Our AI analyzes your business requirements and converts them into technical specifications.",
  },
  {
    title: "Architecture Design",
    icon: "🏗️",
    description:
      "Intelligent systems design the optimal architecture considering scalability, performance, and security.",
  },
  {
    title: "Accelerated Development",
    icon: "⚡",
    description:
      "AI-assisted development with pre-built components accelerates coding by 300%.",
  },
  {
    title: "Intelligent Testing",
    icon: "🧪",
    description:
      "Automated test generation and execution with predictive issue detection.",
  },
  {
    title: "Continuous Optimization",
    icon: "📈",
    description:
      "Real-time performance monitoring and AI-driven optimizations.",
  },
];

const Process = () => {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our AI-Powered Process
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here's how we transform your business challenges into powerful
          software solutions 3x faster.
        </motion.p>
      </div>

      {/* Process timeline */}
      <div className="max-w-4xl mx-auto">
        {processes.map((step, index) => (
          <motion.div
            key={index}
            className="flex relative pb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline connector */}
            {index < 4 && (
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 pointer-events-none"></div>
              </div>
            )}

            {/* Timeline node */}
            <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
              <span className="text-xl">{step.icon}</span>
            </div>

            {/* Content */}
            <div className="ml-6">
              <h3 className="flex text-2xl font-bold text-white mb-2">
                {step.title}
                <span className="ml-2 text-gray-500 font-mono">
                  0{index + 1}
                </span>
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
