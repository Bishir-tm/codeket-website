import React from "react";
import { motion } from "framer-motion";

const FinalCallToAction = () => {
  return (
    <div className="py-24">
      <motion.div
        className="bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 rounded-3xl border border-blue-500/20 p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>

          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/20 animate-pulse"
            style={{ animationDelay: "500ms" }}
          ></div>
        </div>

        <div className="relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your <br />
            Software Development?
          </motion.h2>

          <motion.p
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let our AI-powered platform deliver enterprise-grade software 3x
            faster with exceptional quality and precision.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-medium rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
              <span>Start Your Project</span>
              <svg
                className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform"
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
            </button>

            <button className="px-10 py-5 bg-white/5 border border-blue-500/30 backdrop-blur-sm text-white text-xl font-medium rounded-xl hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
              <span>Schedule Consultation</span>
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalCallToAction;
