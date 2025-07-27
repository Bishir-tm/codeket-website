import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import scrollToSection from "../../../utils/scrollToSection";

const HeroSection = () => {
  return (
    <div className="relative h-screen -top-10 flex items-center content-center  justify-center overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}

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
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          <span className="bg-gradient-to-r from-primary via-accent to-info bg-clip-text text-transparent">
              About Codeket
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-base-content/80 mt-6 max-w-3xl mx-auto">
          We are a team of innovators, creators, and problem-solvers dedicated
          to transforming the future of technology through elegant code and
          visionary solutions.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <button
            onClick={() => scrollToSection("our-story")}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-base-content font-semibold rounded-full hover:from-primary-focus hover:to-accent-focus transition-all duration-300 shadow-lg"
          >
            Discover Our Story
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-base-content/70 mb-2">Scroll down to discover </p>
          <div className="w-8 h-12 rounded-full border-2 border-base-content flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <FaArrowAltCircleDown className="w-10 h-10" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
