import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaCode,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import PlanCard from "./PlanCard";
import PricingToggle from "./PricingToggle";

const PricingPlans = ({ setSelectedPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [serviceType, setServiceType] = useState("custom");

  const customDevelopmentPlans = [
    {
      id: "essential",
      name: "Essential",
      description: "Core functionality for small businesses",
      monthlyPrice: 2499,
      annualPrice: 26989,
      icon: <FaCode className="text-2xl text-blue-400" />,
      iconBg: "bg-blue-900/30",
      features: [
        "Custom frontend & backend",
        "Admin dashboard",
        "Basic API integration",
        "Mobile-responsive design",
        "1-month support & bug fixes",
        "User documentation",
      ],
      limitedFeatures: [
        "AI-powered features",
        "Advanced reporting",
        "White-label option",
      ],
    },
    {
      id: "professional",
      name: "Advanced",
      description: "Comprehensive solution for growing organizations",
      monthlyPrice: 4999,
      annualPrice: 53989,
      icon: <FaLightbulb className="text-2xl text-purple-400" />,
      iconBg: "bg-purple-900/30",
      features: [
        "Everything in Essential",
        "Advanced API integrations",
        "Custom reporting & analytics",
        "Database optimization",
        "Basic AI features",
        "3-months support & updates",
        "Staff training sessions",
        "White-label option",
      ],
      limitedFeatures: [
        "Multi-tenant architecture",
        "Advanced AI capabilities",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Full-scale solution with advanced customization",
      monthlyPrice: 9999,
      annualPrice: 107989,
      icon: <FaUsers className="text-2xl text-teal-400" />,
      iconBg: "bg-teal-900/30",
      features: [
        "Everything in Advanced",
        "Multi-tenant architecture",
        "Advanced AI capabilities",
        "Custom integrations",
        "Scalable infrastructure",
        "Enhanced security features",
        "6-months support & updates",
        "Comprehensive documentation",
        "Priority support",
        "On-site staff training",
      ],
    },
  ];

  const saasPlans = [
    {
      id: "starter-saas",
      name: "Starter",
      description: "Basic access to our cloud platforms",
      monthlyPrice: 149,
      annualPrice: 1608,
      icon: <FaCloud className="text-2xl text-blue-400" />,
      iconBg: "bg-blue-900/30",
      features: [
        "Up to 5 team members",
        "Core platform features",
        "Basic reporting",
        "Mobile access",
        "Email support",
        "Regular updates",
      ],
      limitedFeatures: ["Custom branding", "API access", "Advanced analytics"],
    },
    {
      id: "business-saas",
      name: "Business",
      description: "Full access with premium features",
      monthlyPrice: 299,
      annualPrice: 3229,
      icon: <FaLightbulb className="text-2xl text-purple-400" />,
      iconBg: "bg-purple-900/30",
      features: [
        "Up to 20 team members",
        "Premium features",
        "Advanced reporting",
        "API access (limited)",
        "Priority support",
        "Regular updates",
        "Basic custom branding",
      ],
      limitedFeatures: ["Full API access", "White-labeling"],
    },
    {
      id: "premium-saas",
      name: "Premium",
      description: "White-label option with full customization",
      monthlyPrice: 599,
      annualPrice: 6469,
      icon: <FaUsers className="text-2xl text-teal-400" />,
      iconBg: "bg-teal-900/30",
      features: [
        "Unlimited team members",
        "All premium features",
        "Custom domain",
        "Full white-labeling",
        "Complete API access",
        "Priority support",
        "Regular updates",
        "Dedicated account manager",
        "Custom integrations",
      ],
    },
  ];

  const aiPlans = [
    {
      id: "starter-ai",
      name: "AI Starter",
      description: "Basic AI integration for your applications",
      monthlyPrice: 299,
      annualPrice: 3229,
      icon: <FaRobot className="text-2xl text-blue-400" />,
      iconBg: "bg-blue-900/30",
      features: [
        "Basic AI functionality",
        "GPT integration",
        "Automated reporting",
        "1,000 AI queries/month",
        "Standard response time",
        "Email support",
      ],
      limitedFeatures: [
        "Custom AI training",
        "Advanced AI features",
        "Unlimited queries",
      ],
    },
    {
      id: "professional-ai",
      name: "AI Professional",
      description: "Enhanced AI capabilities for business growth",
      monthlyPrice: 799,
      annualPrice: 8629,
      icon: <FaLightbulb className="text-2xl text-purple-400" />,
      iconBg: "bg-purple-900/30",
      features: [
        "Advanced AI capabilities",
        "Multiple AI model access",
        "5,000 AI queries/month",
        "Predictive analytics",
        "Custom dashboards",
        "Priority support",
        "API access",
      ],
      limitedFeatures: ["Custom AI model training", "Unlimited queries"],
    },
    {
      id: "enterprise-ai",
      name: "AI Enterprise",
      description: "Full AI solution with custom model training",
      monthlyPrice: 1999,
      annualPrice: 21589,
      icon: <FaRobot className="text-2xl text-teal-400" />,
      iconBg: "bg-teal-900/30",
      features: [
        "Unlimited AI queries",
        "Custom AI model training",
        "Full API access",
        "Data integration",
        "Advanced predictive modeling",
        "Custom workflows",
        "Dedicated AI specialist",
        "Premium support",
        "Quarterly strategy reviews",
      ],
    },
  ];

  const activePlans =
    serviceType === "custom"
      ? customDevelopmentPlans
      : serviceType === "saas"
      ? saasPlans
      : aiPlans;

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
            Solutions That Scale With Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect Codeket solution aligned with your business goals
            — from custom development to ready-made SaaS platforms.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setServiceType("custom")}
            className={`px-6 py-3 rounded-full transition-all ${
              serviceType === "custom"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <span className="flex items-center">
              <FaCode className="mr-2" /> Custom Development
            </span>
          </button>
          <button
            onClick={() => setServiceType("saas")}
            className={`px-6 py-3 rounded-full transition-all ${
              serviceType === "saas"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <span className="flex items-center">
              <FaCloud className="mr-2" /> SaaS Platforms
            </span>
          </button>
          <button
            onClick={() => setServiceType("ai")}
            className={`px-6 py-3 rounded-full transition-all ${
              serviceType === "ai"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <span className="flex items-center">
              <FaRobot className="mr-2" /> AI Solutions
            </span>
          </button>
        </div>

        {serviceType !== "custom" && (
          <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activePlans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              isPopular={index === 1}
              setSelectedPlan={setSelectedPlan}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Need a custom solution that doesn't fit these plans?
          </p>
          <a
            href="#custom-quote"
            className="inline-block px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPlans;
