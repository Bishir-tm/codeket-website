import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../../utils/testimonials";

const Testimonials = () => (
  <div className="py-24">
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decoration */}

      <div className="relative z-10 text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Don't take our word for it. Here's what our clients have to say about
          working with us.
        </motion.p>
      </div>

      {/* Testimonial cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 p-6 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Quotation mark */}
            <div className="absolute top-4 right-4 text-5xl text-blue-500/20">
              "
            </div>

            {/* Quote */}
            <p className="text-gray-300 mb-6 relative z-10">
              {testimonial.quote}
            </p>

            {/* Author info */}
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl font-bold text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Testimonials;
