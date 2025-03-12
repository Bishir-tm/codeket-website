import React from "react";
import { motion } from "framer-motion";

const IntegrationPartners = () => {
  return (
    <div className="py-24 ">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Integration Partners
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our platform seamlessly integrates with all the tools you already use.
        </motion.p>
      </div>

      {/* Integration logos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white/5 hover:bg-white/10 border border-gray-800 rounded-lg p-6 flex items-center justify-center h-24 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              y: -5,
              boxShadow: "0 5px 20px rgba(59, 130, 246, 0.1)",
            }}
          >
            <div className="text-white/50 text-lg font-semibold">
              Partner {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationPartners;
