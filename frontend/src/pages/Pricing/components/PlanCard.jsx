import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";

const PlanCard = ({ plan, isPopular, setSelectedPlan }) => {
  const formatPrice = (price) => {
    if (price >= 1000) {
      return `${(price / 1000).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      })}k`;
    }
    return price.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative bg-gray-800 rounded-2xl overflow-hidden border ${
        isPopular
          ? "border-blue-500 shadow-lg shadow-blue-500/20"
          : "border-gray-700"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold py-1 px-4 rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg ${plan.iconBg}`}>{plan.icon}</div>
        </div>
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-400 mb-6 h-12">{plan.description}</p>

        <div className="mb-8">
          <div className="flex items-end">
            <span className="text-sm text-gray-400 mr-2">Starting at</span>
            <span className="text-4xl font-bold">
              ${formatPrice(plan.price)}
            </span>
          </div>
          <div className="text-gray-400 text-sm mt-1">
            One-time project cost
          </div>
        </div>

        <button
          onClick={() => setSelectedPlan(plan)}
          className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-all duration-300 flex items-center justify-center ${
            isPopular
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Get Started <FaArrowRight className="ml-2" />
        </button>

        <div className="space-y-3">
          <p className="font-medium text-white mb-2">What's included:</p>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <div className="text-green-400 mt-1 mr-3">
                <FaCheck />
              </div>
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}

          {plan.limitedFeatures &&
            plan.limitedFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start text-gray-500">
                <div className="mt-1 mr-3">
                  <FaTimes />
                </div>
                <p>{feature}</p>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PlanCard;
