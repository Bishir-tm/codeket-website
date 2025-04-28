import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import PlanCard from "./PlanCard";
import PricingToggle from "./PricingToggle";

const PricingPlans = ({ setSelectedPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 149,
      annualPrice: 1428,
      icon: <FaRocket className="text-2xl text-blue-400" />,
      iconBg: "bg-blue-900/30",
      features: [
        "Up to 5 team members",
        "3 AI-powered projects",
        "Basic analytics dashboard",
        "Standard support",
        "99.5% uptime guarantee",
      ],
      limitedFeatures: [
        "Advanced AI features",
        "Custom integrations",
        "Priority support",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      description: "Ideal for growing teams with expanding needs",
      monthlyPrice: 299,
      annualPrice: 2868,
      icon: <FaLightbulb className="text-2xl text-purple-400" />,
      iconBg: "bg-purple-900/30",
      features: [
        "Up to 20 team members",
        "10 AI-powered projects",
        "Advanced analytics dashboard",
        "Priority support",
        "99.9% uptime guarantee",
        "Custom integrations",
        "API access",
      ],
      limitedFeatures: [
        "Enterprise-grade security",
        "Dedicated account manager",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Complete solution for large organizations",
      monthlyPrice: 799,
      annualPrice: 7668,
      icon: <FaUsers className="text-2xl text-teal-400" />,
      iconBg: "bg-teal-900/30",
      features: [
        "Unlimited team members",
        "Unlimited AI-powered projects",
        "Enterprise analytics dashboard",
        "24/7 premium support",
        "99.99% uptime guarantee",
        "Advanced custom integrations",
        "Full API access",
        "Enterprise-grade security",
        "Dedicated account manager",
        "Custom AI model training",
      ],
    },
  ];

  return (
    <div id="pricing-plans" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan that aligns with your business goals and
            scale as you grow.
          </p>
        </motion.div>

        <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              isPopular={index === 1}
              setSelectedPlan={setSelectedPlan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
