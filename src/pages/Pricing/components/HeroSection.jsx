import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            Transparent Pricing
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-10">
          Choose the plan that works best for your business needs. Scale as you
          grow with our flexible pricing options.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#pricing-plans"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            View Plans
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
