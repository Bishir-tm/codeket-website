import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="py-24 px-6 bg-base-200 text-base-content">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-primary"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-base-content/80 mb-12 max-w-3xl mx-auto"
        >
          Join the hundreds of organizations that have partnered with CodeKet to
          drive innovation and achieve remarkable results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            to="/contact"
            className="btn btn-primary btn-lg"
          >
            Contact Us
          </Link>
          <Link
            to="/case-studies"
            className="btn btn-outline btn-lg"
          >
            View Case Studies
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
