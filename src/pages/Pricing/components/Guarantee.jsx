import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

// Guarantee Section
const Guarantee = () => {
  return (
    <div className="py-24 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our 30-Day Money-Back Guarantee
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're confident you'll love our platform. If you're not completely
              satisfied within the first 30 days, we'll refund your payment in
              full—no questions asked.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-green-400 mt-1 mr-3">
                  <FaCheck />
                </div>
                <p className="text-gray-300">
                  No complicated cancellation process
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-green-400 mt-1 mr-3">
                  <FaCheck />
                </div>
                <p className="text-gray-300">Full refund, no hidden fees</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-400 mt-1 mr-3">
                  <FaCheck />
                </div>
                <p className="text-gray-300">
                  Friendly support every step of the way
                </p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#pricing-plans"
              className="inline-block mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Choose Your Plan
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <svg
                className="w-full h-auto max-w-md"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="256"
                  cy="256"
                  r="248"
                  stroke="url(#paint0_linear)"
                  strokeWidth="16"
                />
                <path
                  d="M256 404C339.479 404 408 335.479 408 252C408 168.521 339.479 100 256 100C172.521 100 104 168.521 104 252C104 335.479 172.521 404 256 404Z"
                  fill="url(#paint1_radial)"
                  fillOpacity="0.2"
                />
                <path
                  d="M224 296L288 232"
                  stroke="url(#paint2_linear)"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                <path
                  d="M224 232L288 296"
                  stroke="url(#paint3_linear)"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="125"
                    y1="125"
                    x2="387"
                    y2="387"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(256 252) rotate(90) scale(152)"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </radialGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="224"
                    y1="296"
                    x2="288"
                    y2="232"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="224"
                    y1="232"
                    x2="288"
                    y2="296"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
