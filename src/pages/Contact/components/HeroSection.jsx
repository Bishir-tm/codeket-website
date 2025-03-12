import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ y }) => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center opacity-50"
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
          Let's Connect
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          Ready to transform your ideas into reality? Reach out to our team of
          experts and let's start building the future together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact-form"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="#locations"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 shadow-lg"
          >
            Visit Our Offices
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
