// components/CaseStudies/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineUser } from "react-icons/hi";

const Testimonials = ({ caseStudies }) => {
  return (
    <div className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear directly from the leaders who trusted us with their
            transformative projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[3, 1, 3].map((id) => {
            const caseStudy = caseStudies.find((c) => c.id === id);
            if (!caseStudy) return null;

            return (
              <motion.div
                key={`testimonial-${id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <HiOutlineUser className="text-2xl text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      {caseStudy.testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {caseStudy.testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "{caseStudy.testimonial.quote}"
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
