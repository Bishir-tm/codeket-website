import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

const PlanCard = ({ plan, isAnnual, isPopular, setSelectedPlan }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

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
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-400 ml-2">
              /{isAnnual ? "year" : "month"}
            </span>
          </div>
          {isAnnual && (
            <div className="text-green-400 text-sm mt-1">
              Save ${plan.monthlyPrice * 12 - plan.annualPrice} annually
            </div>
          )}
        </div>

        <button
          onClick={() => setSelectedPlan(plan)}
          className={`w-full py-3 px-6 rounded-lg font-medium mb-8 transition-all duration-300 ${
            isPopular
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Choose Plan
        </button>

        <div className="space-y-3">
          <p className="font-medium text-white mb-2">Features:</p>
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
