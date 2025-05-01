import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaCloud,
  FaRobot,
  FaArrowAltCircleDown,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Background gradient animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] bg-blue-600 rounded-full filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-teal-600 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            Software Solutions That Power Growth
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-10 max-w-3xl mx-auto">
          Choose the technology solutions that will drive your business forward
          — from custom development to AI-powered software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-900/30 rounded-full">
                <FaCode className="text-2xl text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Development</h3>
            <p className="text-gray-400">
              Tailor-made software solutions built for your unique business
              needs
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-purple-900/30 rounded-full">
                <FaCloud className="text-2xl text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">SaaS Platforms</h3>
            <p className="text-gray-400">
              Ready-to-use cloud applications with flexible subscription pricing
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-teal-900/30 rounded-full">
                <FaRobot className="text-2xl text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">AI Solutions</h3>
            <p className="text-gray-400">
              Intelligent automations and AI-powered features to transform your
              business
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#pricing-plans"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Explore Solutions
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#custom-quote"
            className="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Get Custom Quote
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
