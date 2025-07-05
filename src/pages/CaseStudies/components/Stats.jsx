// components/CaseStudies/StatisticsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaBrain, FaServer } from "react-icons/fa";

const StatisticsSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Impact by the Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Results that speak for themselves across industries and
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
          >
            <FaRocket className="mx-auto text-blue-500 text-3xl mb-4" />
            <div className="text-4xl font-bold text-white mb-2">94%</div>
            <p className="text-gray-400">Projects Delivered On Time</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
          >
            <FaChartLine className="mx-auto text-purple-500 text-3xl mb-4" />
            <div className="text-4xl font-bold text-white mb-2">$42M+</div>
            <p className="text-gray-400">Client Revenue Increased</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
          >
            <FaBrain className="mx-auto text-cyan-500 text-3xl mb-4" />
            <div className="text-4xl font-bold text-white mb-2">14</div>
            <p className="text-gray-400">Custom AI Solutions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
          >
            <FaServer className="mx-auto text-green-500 text-3xl mb-4" />
            <div className="text-4xl font-bold text-white mb-2">99.99%</div>
            <p className="text-gray-400">System Uptime</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
