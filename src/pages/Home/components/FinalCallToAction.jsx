import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinalCallToAction = () => {
  return (
    <div className="my-8 ">
      <motion.div
        className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl border border-primary/20 p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-base-content to-accent mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Smarter, Faster, and More Scalable Solutions?
          </motion.h2>

          <motion.p
            className="text-base-content/80 text-xl md:text-2xl max-w-3xl mx-auto mb-12"
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
            <Link
              to="/consultation"
              className="px-10 py-5 cursor-pointer bg-gradient-to-r from-secondary to-accent text-white text-xl font-medium rounded-xl shadow-lg hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            >
              <span>Get a Custom Solution</span>
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
            </Link>

            <Link
              to="/services#projects"
              className="px-10 cursor-pointer py-5 bg-base-100/5 border border-primary/30 backdrop-blur-sm text-base-content text-xl font-medium rounded-xl hover:bg-primary/10 transition-all duration-300 flex items-center justify-center"
            >
              <span>Explore SaaS Solutions</span>
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
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalCallToAction;
