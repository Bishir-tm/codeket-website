import React from "react";
import { motion } from "framer-motion";

// Pricing Toggle Component
const PricingToggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      <span
        className={`text-lg font-medium ${
          !isAnnual ? "text-base-content" : "text-base-content/70"
        }`}
      >
        Monthly
      </span>
      <button
        onClick={() => setIsAnnual(!isAnnual)}
        className="relative w-16 h-8 bg-neutral-focus rounded-full p-1 transition-colors duration-300"
      >
        <motion.div
          className="w-6 h-6 bg-primary rounded-full"
          animate={{ x: isAnnual ? 32 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      <div className="flex items-center">
        <span
          className={`text-lg font-medium ${
            isAnnual ? "text-base-content" : "text-base-content/70"
          }`}
        >
          Annual
        </span>
        <span className="ml-2 bg-success text-base-content text-xs px-2 py-1 rounded-full">
          Save 20%
        </span>
      </div>
    </div>
  );
};

export default PricingToggle;
