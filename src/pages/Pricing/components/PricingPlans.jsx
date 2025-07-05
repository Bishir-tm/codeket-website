import React, { useState } from "react";
import {
  FaCode,
  FaRobot,
  FaMobile,
  FaShieldAlt,
  FaChartLine,
  FaRegLightbulb,
} from "react-icons/fa";
import PlanCard from "./PlanCard";

const PricingPlans = () => {
  const [serviceType, setServiceType] = useState("development");

  const developmentPlans = [
    {
      id: "starter",
      name: "Starter",
      description: "Core functionality for startups and small businesses",
      price: 8999,
      icon: <FaCode className="text-2xl" />,
      features: [
        "Full-stack development",
        "Responsive design",
        "Admin dashboard",
        "Basic API integration",
        "2-month support & maintenance",
        "Weekly progress updates",
        "User documentation",
      ],
      limitedFeatures: [
        "Custom integrations",
        "Advanced analytics",
        "AI-powered features",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      description: "Comprehensive solution for scaling businesses",
      price: 19999,
      icon: <FaChartLine className="text-2xl" />,
      features: [
        "Everything in Starter",
        "Multiple platform deployment",
        "Advanced API integrations",
        "Custom reporting & analytics",
        "Database optimization",
        "Basic AI features",
        "4-months support & maintenance",
        "Staff training sessions",
        "Technical documentation",
      ],
      limitedFeatures: [
        "Microservices architecture",
        "Advanced security features",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Tailored solutions for large-scale business needs",
      price: 39999,
      icon: <FaRegLightbulb className="text-2xl" />,
      features: [
        "Everything in Growth",
        "Microservices architecture",
        "Advanced security features",
        "Custom integrations",
        "Scalable infrastructure",
        "Load testing & optimization",
        "6-months support & maintenance",
        "Comprehensive documentation",
        "Priority support",
        "Remote team training",
        "Dedicated project manager",
      ],
    },
  ];

  const mobileAppPlans = [
    {
      id: "basic-mobile",
      name: "Basic App",
      description: "Essential mobile app development for single platform",
      price: 12999,
      icon: <FaMobile className="text-2xl" />,
      features: [
        "Single platform (Android or iOS)",
        "User authentication",
        "Core app functionality",
        "Basic API integration",
        "App store submission",
        "3-month support",
        "Bug fixes & maintenance",
      ],
      limitedFeatures: [
        "Cross-platform development",
        "Advanced features",
        "Analytics integration",
      ],
    },
    {
      id: "premium-mobile",
      name: "Premium App",
      description: "Cross-platform app with advanced features",
      price: 24999,
      icon: <FaMobile className="text-2xl" />,
      features: [
        "Cross-platform (Android & iOS)",
        "Advanced user interface",
        "Push notifications",
        "Payment integration",
        "Analytics dashboard",
        "Offline functionality",
        "4-month support",
        "Performance optimization",
        "App store optimization",
      ],
      limitedFeatures: ["AI features", "AR/VR capabilities"],
    },
    {
      id: "enterprise-mobile",
      name: "Enterprise App",
      description: "Full-featured app solution with custom integrations",
      price: 45999,
      icon: <FaMobile className="text-2xl" />,
      features: [
        "Everything in Premium App",
        "AI-powered features",
        "AR/VR capabilities (if needed)",
        "Custom enterprise integrations",
        "Advanced security features",
        "High-performance optimization",
        "Scalable backend architecture",
        "White-label option",
        "6-month support & updates",
        "Dedicated project manager",
        "Complete app analytics",
      ],
    },
  ];

  const aiSolutionsPlans = [
    {
      id: "ai-starter",
      name: "AI Starter",
      description: "Basic AI integration for existing applications",
      price: 14999,
      icon: <FaRobot className="text-2xl" />,
      features: [
        "AI model integration",
        "Basic data processing",
        "Simple predictive features",
        "Chatbot implementation",
        "Standard API connections",
        "3-month support",
        "Basic documentation",
      ],
      limitedFeatures: [
        "Custom AI model training",
        "Advanced analytics",
        "Real-time processing",
      ],
    },
    {
      id: "ai-advanced",
      name: "AI Advanced",
      description: "Enhanced AI capabilities for business optimization",
      price: 29999,
      icon: <FaRobot className="text-2xl" />,
      features: [
        "Advanced AI implementation",
        "Multiple AI model integration",
        "Predictive analytics dashboard",
        "Natural language processing",
        "Computer vision capabilities",
        "Data pipeline setup",
        "4-month support & maintenance",
        "Technical documentation",
        "Team training sessions",
      ],
      limitedFeatures: [
        "Custom AI model development",
        "Real-time processing at scale",
      ],
    },
    {
      id: "ai-premium",
      name: "AI Premium",
      description: "Custom AI solution with specialized model development",
      price: 59999,
      icon: <FaRobot className="text-2xl" />,
      features: [
        "Custom AI model development",
        "Large-scale data processing",
        "Real-time AI processing",
        "Advanced analytics dashboard",
        "API development for AI services",
        "Complete system integration",
        "Continuous model improvement",
        "6-month support & maintenance",
        "Dedicated AI specialist",
        "Comprehensive documentation",
        "Knowledge transfer sessions",
      ],
    },
  ];

  const securityPlans = [
    {
      id: "security-basic",
      name: "Security Basic",
      description: "Essential security assessment and implementation",
      price: 9999,
      icon: <FaShieldAlt className="text-2xl" />,
      features: [
        "Security assessment",
        "Vulnerability scanning",
        "Basic penetration testing",
        "Security patches implementation",
        "User authentication review",
        "Data protection assessment",
        "Basic security documentation",
      ],
      limitedFeatures: [
        "Advanced penetration testing",
        "Continuous monitoring",
        "Security architecture redesign",
      ],
    },
    {
      id: "security-advanced",
      name: "Security Advanced",
      description: "Comprehensive security solution for sensitive applications",
      price: 19999,
      icon: <FaShieldAlt className="text-2xl" />,
      features: [
        "Everything in Security Basic",
        "Advanced penetration testing",
        "Security architecture review",
        "Encryption implementation",
        "Compliance assessment (GDPR, CCPA)",
        "Secure code review",
        "Security training for team",
        "Incident response planning",
        "3-month security monitoring",
      ],
      limitedFeatures: [
        "24/7 security monitoring",
        "Custom security architecture",
      ],
    },
    {
      id: "security-premium",
      name: "Security Premium",
      description: "Enterprise-grade security with continuous protection",
      price: 34999,
      icon: <FaShieldAlt className="text-2xl" />,
      features: [
        "Everything in Security Advanced",
        "Custom security architecture",
        "Advanced threat modeling",
        "24/7 security monitoring",
        "Full compliance implementation",
        "Security DevOps integration",
        "Regular security audits",
        "Advanced authentication system",
        "Comprehensive security documentation",
        "6-month ongoing support",
        "Security incident response team",
      ],
    },
  ];

  const activePlans =
    serviceType === "development"
      ? developmentPlans
      : serviceType === "mobile"
      ? mobileAppPlans
      : serviceType === "ai"
      ? aiSolutionsPlans
      : securityPlans;

  return (
    <div id="pricing-plans" className="container mx-auto py-16">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Flexible Pricing, Unmatched Value</h2>
          <p className="text-lg max-w-2xl mx-auto text-base-content/80">
            Choose the plan that best fits your business needs. All our solutions are designed for scalability and performance.
          </p>
        </div>

      <div role="tablist" className="tabs tabs-boxed mb-12 justify-center">
        <a
          role="tab"
          className={`tab ${serviceType === "development" ? "tab-active" : ""}`}
          onClick={() => setServiceType("development")}
        >
          <span className="flex items-center">
            <FaCode className="mr-2" /> Custom Development
          </span>
        </a>
        <a
          role="tab"
          className={`tab ${serviceType === "mobile" ? "tab-active" : ""}`}
          onClick={() => setServiceType("mobile")}
        >
          <span className="flex items-center">
            <FaMobile className="mr-2" /> Mobile Apps
          </span>
        </a>
        <a
          role="tab"
          className={`tab ${serviceType === "ai" ? "tab-active" : ""}`}
          onClick={() => setServiceType("ai")}
        >
          <span className="flex items-center">
            <FaRobot className="mr-2" /> AI Solutions
          </span>
        </a>
        <a
          role="tab"
          className={`tab ${serviceType === "security" ? "tab-active" : ""}`}
          onClick={() => setServiceType("security")}
        >
          <span className="flex items-center">
            <FaShieldAlt className="mr-2" /> Security Services
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activePlans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isPopular={index === 1}
          />
        ))}
      </div>

      <div className="hero bg-base-100 rounded-box shadow-xl mt-16">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Looking for a Tailored Solution?
            </h3>
            <p className="text-lg mb-6 text-base-content/80">
              Our pricing is flexible and designed to align with your project's unique requirements. Contact us for a personalized quote.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#custom-quote" className="btn btn-primary btn-lg">
                Get a Custom Quote
              </a>
              <a href="/contact" className="btn btn-outline btn-lg">
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-16">
        
      </div>
    </div>
  );
};

export default PricingPlans;
