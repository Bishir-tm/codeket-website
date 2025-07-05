import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

// Feature Comparison Table
const ComparisonTable = () => {
  const featureSections = [
    {
      id: "core",
      name: "Core Features",
      features: [
        {
          name: "AI-powered project generation",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Dedicated team members",
          starter: "Up to 5",
          professional: "Up to 20",
          enterprise: "Unlimited",
        },
        {
          name: "Advanced analytics dashboard",
          starter: "Basic",
          professional: "Comprehensive",
          enterprise: "Customizable Enterprise-grade",
        },
        {
          name: "Guaranteed uptime SLA",
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
          name: "Customer support level",
          starter: "Standard Email",
          professional: "Priority Email & Chat",
          enterprise: "24/7 Dedicated Account Manager",
        },
        {
          name: "Onboarding and setup assistance",
          starter: false,
          professional: "2 hours guided",
          enterprise: "8 hours comprehensive",
        },
        {
          name: "Regular training sessions",
          starter: false,
          professional: "Monthly webinars",
          enterprise: "Weekly personalized",
        },
      ],
    },
    {
      id: "security",
      name: "Security & Compliance",
      features: [
        {
          name: "Data encryption (in-transit & at-rest)",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Single Sign-On (SSO) integration",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Role-based access control (RBAC)",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Highly Customizable",
        },
        {
          name: "Industry compliance certifications",
          starter: "SOC 2 Type 1",
          professional: "SOC 2 Type 2, HIPAA",
          enterprise: "SOC 2, HIPAA, GDPR, ISO 27001",
        },
      ],
    },
    {
      id: "integrations",
      name: "Integrations & API Access",
      features: [
        {
          name: "Pre-built third-party integrations",
          starter: "5 key integrations",
          professional: "20+ integrations",
          enterprise: "Unlimited & Custom",
        },
        {
          name: "Custom API access and development",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Automated workflow customization",
          starter: false,
          professional: "Basic automation",
          enterprise: "Advanced, AI-driven automation",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Detailed Plan Comparison</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Explore the comprehensive features offered across our Starter, Professional, and Enterprise plans to find the perfect fit for your business's scale and ambition.
        </p>
      </div>

      <div className="space-y-6">
        {featureSections.map((section) => (
          <div key={section.id} className="collapse collapse-arrow bg-base-100 shadow-xl">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {section.name}
            </div>
            <div className="collapse-content overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="text-center">Starter</th>
                    <th className="text-center">Professional</th>
                    <th className="text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {section.features.map((feature, idx) => (
                    <tr key={idx}>
                      <td>{feature.name}</td>
                      <td className="text-center">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <FaCheck className="mx-auto text-success" />
                          ) : (
                            <FaTimes className="mx-auto text-error" />
                          )
                        ) : (
                          feature.starter
                        )}
                      </td>
                      <td className="text-center">
                        {typeof feature.professional === "boolean" ? (
                          feature.professional ? (
                            <FaCheck className="mx-auto text-success" />
                          ) : (
                            <FaTimes className="mx-auto text-error" />
                          )
                        ) : (
                          feature.professional
                        )}
                      </td>
                      <td className="text-center">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <FaCheck className="mx-auto text-success" />
                          ) : (
                            <FaTimes className="mx-auto text-error" />
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
