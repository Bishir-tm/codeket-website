import React from "react";
import {
  FaRocket,
  FaCode,
  FaLayerGroup,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaLaptopCode,
  FaChartLine,
  FaLock,
  FaTools,
  FaBrain,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    icon: <FaCode className="text-primary" />,
    description:
      "Tailored software solutions built from the ground up to perfectly match your unique business processes and requirements. From concept to deployment, we deliver robust, scalable, and efficient applications.",
    features: [
      "Bespoke web and mobile applications",
      "Enterprise software solutions",
      "Legacy system modernization",
      "API development and integration",
    ],
  },
  {
    id: 2,
    title: "Cloud Solutions & DevOps",
    icon: <FaCloud className="text-secondary" />,
    description:
      "Leverage the power of the cloud with our expert services. We design, implement, and manage scalable cloud infrastructures and streamline your development pipeline with advanced DevOps practices.",
    features: [
      "Cloud migration and infrastructure setup (AWS, Azure, GCP)",
      "CI/CD pipeline implementation",
      "Containerization (Docker, Kubernetes)",
      "Serverless architecture development",
    ],
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence",
    icon: <FaChartLine className="text-accent" />,
    description:
      "Transform raw data into actionable insights. Our data analytics and BI solutions help you make informed decisions, identify trends, and unlock new opportunities for growth.",
    features: [
      "Data warehousing and ETL processes",
      "Interactive dashboards and reporting",
      "Predictive analytics and machine learning integration",
      "Data visualization and interpretation",
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    icon: <FaMobile className="text-info" />,
    description:
      "Reach your customers wherever they are with intuitive and high-performing mobile applications. We develop native and cross-platform apps for iOS and Android that deliver exceptional user experiences.",
    features: [
      "Native iOS and Android app development",
      "Cross-platform development (React Native, Flutter)",
      "UI/UX design for mobile",
      "App store deployment and optimization",
    ],
  },
  {
    id: 5,
    title: "AI & Machine Learning Integration",
    icon: <FaBrain className="text-warning" />,
    description:
      "Integrate intelligent capabilities into your applications. From automation to predictive modeling, our AI/ML solutions enhance efficiency, personalize user experiences, and drive innovation.",
    features: [
      "Custom AI model development",
      "Machine learning pipeline implementation",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Solutions",
    icon: <FaLock className="text-error" />,
    description:
      "Protect your digital assets and sensitive data with our comprehensive cybersecurity services. We implement robust security measures and provide ongoing monitoring to safeguard your business from evolving threats.",
    features: [
      "Vulnerability assessments and penetration testing",
      "Security audits and compliance",
      "Incident response planning",
      "Data encryption and access control",
    ],
  },
];

const ServicesSection = () => {
  return (
    <div id="services" className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Comprehensive Service Offerings</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Codeket provides a full spectrum of software development and IT consulting services, designed to empower your business with cutting-edge technology and strategic insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="card-title text-2xl mb-2">{service.title}</h3>
              <p className="text-base-content/70">{service.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-base-content/70">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
