import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineQuestionMarkCircle,
  HiOutlineLightBulb,
  HiOutlineCube,
  HiOutlineSparkles,
} from "react-icons/hi";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business goals and operational challenges to ensure our solution is a perfect fit.",
    icon: <HiOutlineQuestionMarkCircle className="text-blue-500 w-8 h-8" />,
  },
  {
    id: 2,
    title: "Design & Development",
    description:
      "We design and build intuitive, focused software that is easy to use and solves your specific problems.",
    icon: <HiOutlineLightBulb className="text-purple-500 w-8 h-8" />,
  },
  {
    id: 3,
    title: "Delivery & Onboarding",
    description:
      "We deliver your software quickly and provide seamless onboarding to get your team up and running in days, not months.",
    icon: <HiOutlineCube className="text-green-500 w-8 h-8" />,
  },
  {
    id: 4,
    title: "Support & Evolution",
    description:
      "We provide real, human support and continuously evolve our products to meet your changing needs.",
    icon: <HiOutlineSparkles className="text-cyan-500 w-8 h-8" />,
  },
];

const ProcessSection = () => {
  return (
    <div className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Approach
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            A simple, transparent process focused on delivering value quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={step.id}
              className="bg-base-100 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-6xl opacity-10">
                {step.id}
              </div>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
