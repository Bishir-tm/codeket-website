import React from "react";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";

const PlanCard = ({ plan, isPopular }) => {
  const formatPrice = (price) => {
    if (price >= 1000) {
      return `${(price / 1000).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      })}k`;
    }
    return `${price.toLocaleString()}`;
  };

  return (
    <div className={`card bg-base-100 shadow-xl ${
      isPopular ? "border-2 border-primary" : ""
    }`}>
      {isPopular && (
        <div className="badge badge-primary absolute top-3 right-3 p-3">Most Popular</div>
      )}
      <div className="card-body items-center text-center">
        <div className="text-5xl mb-4 text-primary">{plan.icon}</div>
        <h3 className="card-title text-3xl mb-2">{plan.name}</h3>
        <p className="text-base-content/70 mb-4 h-12">{plan.description}</p>

        <div className="text-5xl font-bold mb-2">{formatPrice(plan.price)}</div>
        <div className="text-base-content/70 text-sm mb-8">One-time cost per project</div>

        <button className="btn btn-primary w-full mb-6">
          Get Started <FaArrowRight className="ml-2" />
        </button>

        <div className="space-y-3 w-full text-left">
          <p className="font-semibold text-lg mb-2">What's included:</p>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <FaCheck className="text-success mr-3" />
              <p className="text-base-content/80">{feature}</p>
            </div>
          ))}

          {plan.limitedFeatures &&
            plan.limitedFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center text-base-content/60">
                <FaTimes className="text-error mr-3" />
                <p>{feature}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
