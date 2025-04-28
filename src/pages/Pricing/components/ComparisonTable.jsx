import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaChevronDown } from "react-icons/fa";

// Feature Comparison Table
const ComparisonTable = () => {
  const [expandedSection, setExpandedSection] = useState("core");

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const featureSections = [
    {
      id: "core",
      name: "Core Features",
      features: [
        {
          name: "AI-powered projects",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Team members",
          starter: "Up to 5",
          professional: "Up to 20",
          enterprise: "Unlimited",
        },
        {
          name: "Analytics dashboard",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Enterprise",
        },
        {
          name: "Uptime guarantee",
          starter: "99.5%",
          professional: "99.9%",
          enterprise: "99.99%",
        },
      ],
    },
    {
      id: "support",
      name: "Support & Services",
      features: [
        {
          name: "Customer support",
          starter: "Standard",
          professional: "Priority",
          enterprise: "24/7 Premium",
        },
        {
          name: "Onboarding session",
          starter: false,
          professional: "2 hours",
          enterprise: "8 hours",
        },
        {
          name: "Dedicated account manager",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Training sessions",
          starter: false,
          professional: "Monthly",
          enterprise: "Weekly",
        },
      ],
    },
    {
      id: "security",
      name: "Security & Compliance",
      features: [
        {
          name: "Data encryption",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Single sign-on (SSO)",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Role-based access",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Custom",
        },
        {
          name: "Compliance certifications",
          starter: "SOC 2",
          professional: "SOC 2, HIPAA",
          enterprise: "SOC 2, HIPAA, GDPR, Custom",
        },
      ],
    },
    {
      id: "integrations",
      name: "Integrations & API",
      features: [
        {
          name: "Pre-built integrations",
          starter: "5",
          professional: "20+",
          enterprise: "All",
        },
        {
          name: "Custom integrations",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "API access",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Custom workflows",
          starter: false,
          professional: "Basic",
          enterprise: "Advanced",
        },
      ],
    },
  ];

  return (
    <div className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Compare Plans</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See which plan has the features that are right for your business.
          </p>
        </motion.div>

        <div className="space-y-6">
          {featureSections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-800 hover:bg-gray-750 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold">{section.name}</h3>
                <motion.div
                  animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedSection === section.id ? "auto" : 0,
                  opacity: expandedSection === section.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="py-4 px-6 text-left text-gray-300 font-medium">
                          Feature
                        </th>
                        <th className="py-4 px-6 text-center text-gray-300 font-medium">
                          Starter
                        </th>
                        <th className="py-4 px-6 text-center text-gray-300 font-medium">
                          Professional
                        </th>
                        <th className="py-4 px-6 text-center text-gray-300 font-medium">
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {section.features.map((feature, idx) => (
                        <tr key={idx} className="hover:bg-gray-800/30">
                          <td className="py-4 px-6 text-left">
                            {feature.name}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <FaCheck className="mx-auto text-green-400" />
                              ) : (
                                <FaTimes className="mx-auto text-gray-500" />
                              )
                            ) : (
                              <span className="text-gray-300">
                                {feature.starter}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.professional === "boolean" ? (
                              feature.professional ? (
                                <FaCheck className="mx-auto text-green-400" />
                              ) : (
                                <FaTimes className="mx-auto text-gray-500" />
                              )
                            ) : (
                              <span className="text-gray-300">
                                {feature.professional}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-center">
                            {typeof feature.enterprise === "boolean" ? (
                              feature.enterprise ? (
                                <FaCheck className="mx-auto text-green-400" />
                              ) : (
                                <FaTimes className="mx-auto text-gray-500" />
                              )
                            ) : (
                              <span className="text-gray-300">
                                {feature.enterprise}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
