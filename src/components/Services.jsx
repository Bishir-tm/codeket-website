import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
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
import {
  HiOutlineLightBulb,
  HiOutlineChip,
  HiOutlineGlobe,
  HiOutlineArrowRight,
  HiOutlineArrowDown,
  HiOutlineCube,
  HiOutlineQuestionMarkCircle,
  HiOutlineSparkles,
} from "react-icons/hi";

const ServicePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const servicesSectionRef = useRef(null);
  const cursorRef = useRef(null);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update cursor position
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x}px`;
      cursorRef.current.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  // Service categories
  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "cloud", name: "Cloud & AI" },
    { id: "automation", name: "Automation" },
    { id: "consulting", name: "Consulting" },
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: "Enterprise Software Development",
      category: "development",
      icon: <FaCode className="text-blue-500" />,
      bgColor: "from-blue-500/20 to-indigo-500/20",
      accentColor: "blue",
      description:
        "Custom enterprise-grade software solutions designed to automate processes, integrate systems, and scale with your business growth.",
      features: [
        "Custom Web Applications",
        "Legacy System Modernization",
        "Internal Tools & Dashboards",
        "API Development & Integration",
      ],
      caseStudy: {
        client: "Global Logistics Corporation",
        challenge: "Outdated systems causing operational delays",
        solution:
          "Custom logistics management platform with real-time tracking",
        result: "42% increase in operational efficiency, saving $1.2M annually",
        image: "/images/case-studies/logistics.jpg",
      },
    },
    {
      id: 2,
      title: "Inventory Management System",
      category: "development",
      icon: <FaLayerGroup className="text-purple-500" />,
      bgColor: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      description:
        "AI-powered inventory management system that predicts stock needs, automates ordering, and optimizes warehouse operations.",
      features: [
        "Real-time Inventory Tracking",
        "Predictive Stock Management",
        "Supplier Management Portal",
        "Multi-location Support",
      ],
      caseStudy: {
        client: "RetailMax Chain",
        challenge: "Inventory discrepancies costing millions",
        solution: "Implemented AI inventory forecasting and management",
        result: "Reduced stockouts by 78% and increased inventory turn by 24%",
        image: "/images/case-studies/retail.jpg",
      },
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "development",
      icon: <FaMobile className="text-green-500" />,
      bgColor: "from-green-500/20 to-teal-500/20",
      accentColor: "green",
      description:
        "Native and cross-platform mobile applications with stunning UIs, seamless performance, and robust backend integration.",
      features: [
        "iOS & Android Development",
        "React Native Solutions",
        "Mobile UX/UI Design",
        "App Store Optimization",
      ],
      caseStudy: {
        client: "HealthTrack",
        challenge: "Patients struggling to manage health data",
        solution: "Patient-centered mobile app with wearable integration",
        result:
          "125,000+ downloads with 4.8/5 rating and 32% improved outcomes",
        image: "/images/case-studies/mobile.jpg",
      },
    },
    {
      id: 4,
      title: "AI-Driven Cloud Solutions",
      category: "cloud",
      icon: <FaCloud className="text-cyan-500" />,
      bgColor: "from-cyan-500/20 to-blue-500/20",
      accentColor: "cyan",
      description:
        "Intelligent cloud architectures that leverage AI and machine learning to optimize costs, scale dynamically, and enhance security.",
      features: [
        "Cloud Migration Strategy",
        "Multi-cloud Optimization",
        "Serverless Architecture",
        "AI Resource Management",
      ],
      caseStudy: {
        client: "FinTech Innovations",
        challenge: "Scaling issues during high-transaction periods",
        solution:
          "AI-driven elastic cloud architecture with predictive scaling",
        result: "99.999% uptime with 45% reduced cloud costs",
        image: "/images/case-studies/cloud.jpg",
      },
    },
    {
      id: 5,
      title: "Data Analytics & BI",
      category: "cloud",
      icon: <FaChartLine className="text-amber-500" />,
      bgColor: "from-amber-500/20 to-orange-500/20",
      accentColor: "amber",
      description:
        "Transform your raw data into actionable insights with advanced analytics, interactive dashboards, and predictive modeling.",
      features: [
        "Business Intelligence Dashboards",
        "Predictive Analytics Models",
        "Data Warehouse Design",
        "Real-time Analytics Pipelines",
      ],
      caseStudy: {
        client: "Global Manufacturing Corp",
        challenge: "Inability to predict maintenance needs",
        solution: "Predictive maintenance analytics with IoT integration",
        result: "Reduced downtime by 63% and maintenance costs by 42%",
        image: "/images/case-studies/analytics.jpg",
      },
    },
    {
      id: 6,
      title: "Cybersecurity Services",
      category: "cloud",
      icon: <FaLock className="text-red-500" />,
      bgColor: "from-red-500/20 to-rose-500/20",
      accentColor: "red",
      description:
        "Comprehensive security solutions including threat detection, vulnerability assessments, and secure architecture design.",
      features: [
        "Security Architecture Design",
        "Penetration Testing",
        "Compliance Assessment",
        "Security Training & Awareness",
      ],
      caseStudy: {
        client: "Financial Services Provider",
        challenge: "Increasing threats to customer financial data",
        solution: "End-to-end security overhaul with AI threat detection",
        result: "Zero breaches for 36+ months and rapid threat response",
        image: "/images/case-studies/security.jpg",
      },
    },
    {
      id: 7,
      title: "Process Automation",
      category: "automation",
      icon: <FaTools className="text-indigo-500" />,
      bgColor: "from-indigo-500/20 to-violet-500/20",
      accentColor: "indigo",
      description:
        "Streamline operations with intelligent automation that eliminates repetitive tasks and optimizes complex business processes.",
      features: [
        "Robotic Process Automation (RPA)",
        "Workflow Optimization",
        "Document Processing Automation",
        "Business Process Modeling",
      ],
      caseStudy: {
        client: "Insurance Services Inc",
        challenge: "Manual claims processing causing delays",
        solution: "Automated claims processing with ML document analysis",
        result: "Processing time reduced from 7 days to 12 minutes on average",
        image: "/images/case-studies/automation.jpg",
      },
    },
    {
      id: 8,
      title: "AI & Machine Learning",
      category: "cloud",
      icon: <FaBrain className="text-fuchsia-500" />,
      bgColor: "from-fuchsia-500/20 to-purple-500/20",
      accentColor: "fuchsia",
      description:
        "Harness the power of artificial intelligence and machine learning to extract insights, automate decisions, and create intelligent products.",
      features: [
        "Predictive Modeling",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Recommendation Systems",
      ],
      caseStudy: {
        client: "AgriTech Innovations",
        challenge: "Inefficient crop management and yield prediction",
        solution: "ML-powered precision agriculture platform",
        result: "21% increase in crop yields with 30% reduced resource usage",
        image: "/images/case-studies/ai.jpg",
      },
    },
    {
      id: 9,
      title: "DevOps & Continuous Integration",
      category: "automation",
      icon: <FaServer className="text-emerald-500" />,
      bgColor: "from-emerald-500/20 to-green-500/20",
      accentColor: "emerald",
      description:
        "Accelerate your development cycle with streamlined CI/CD pipelines, infrastructure as code, and automated testing.",
      features: [
        "CI/CD Pipeline Implementation",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Alerting",
      ],
      caseStudy: {
        client: "SaaS Platform Provider",
        challenge: "Release delays and quality issues",
        solution: "Comprehensive DevOps transformation",
        result:
          "Release frequency increased 10x with 78% fewer production issues",
        image: "/images/case-studies/devops.jpg",
      },
    },
    {
      id: 10,
      title: "Digital Transformation Consulting",
      category: "consulting",
      icon: <FaRocket className="text-orange-500" />,
      bgColor: "from-orange-500/20 to-amber-500/20",
      accentColor: "orange",
      description:
        "Strategic guidance to navigate your organization's digital journey, from roadmap development to implementation and beyond.",
      features: [
        "Digital Strategy Development",
        "Technology Stack Assessment",
        "Implementation Roadmap",
        "Change Management",
      ],
      caseStudy: {
        client: "Regional Healthcare Network",
        challenge: "Fragmented digital ecosystem across 12 facilities",
        solution: "Comprehensive digital transformation strategy and execution",
        result:
          "Unified patient experience with $4.2M annual operational savings",
        image: "/images/case-studies/consulting.jpg",
      },
    },
    {
      id: 11,
      title: "Custom API Development",
      category: "development",
      icon: <FaLaptopCode className="text-teal-500" />,
      bgColor: "from-teal-500/20 to-cyan-500/20",
      accentColor: "teal",
      description:
        "Design and develop secure, high-performance APIs that connect your systems, services, and applications seamlessly.",
      features: [
        "RESTful API Design",
        "GraphQL Implementation",
        "API Gateway Development",
        "API Security & Authentication",
      ],
      caseStudy: {
        client: "Fintech Startup",
        challenge: "Legacy systems blocking integration with partners",
        solution: "Modern API layer with advanced security protocols",
        result: "Partnered with 25+ new platforms, increasing revenue by 140%",
        image: "/images/case-studies/api.jpg",
      },
    },
    {
      id: 12,
      title: "Technology Innovation Workshops",
      category: "consulting",
      icon: <HiOutlineLightBulb className="text-yellow-500" />,
      bgColor: "from-yellow-500/20 to-amber-500/20",
      accentColor: "yellow",
      description:
        "Collaborative workshops that help teams identify challenges, explore innovative solutions, and create action plans for implementation.",
      features: [
        "Design Thinking Sessions",
        "Innovation Sprints",
        "Technology Feasibility Analysis",
        "Prototype Development",
      ],
      caseStudy: {
        client: "Global Media Corporation",
        challenge: "Declining engagement in traditional channels",
        solution: "Innovation workshops leading to new digital products",
        result: "Three new revenue streams generating $9.5M in first year",
        image: "/images/case-studies/workshop.jpg",
      },
    },
  ];

  // Filter services based on selected category
  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  // Project showcase data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Inventory System",
      client: "Global Retail Chain",
      description:
        "Revolutionizing inventory management with predictive AI and real-time analytics.",
      technologies: ["React", "Node.js", "TensorFlow", "AWS"],
      image: "/images/projects/inventory.jpg",
      results: [
        "85% reduction in stockouts",
        "32% increase in inventory turnover",
        "12% overall revenue growth",
        "$4.2M in annual savings",
      ],
    },
    {
      id: 2,
      title: "Financial Services Platform",
      client: "International Banking Corporation",
      description:
        "Secure, scalable platform enabling next-generation financial services and transactions.",
      technologies: ["Angular", "Java Spring", "Kubernetes", "MongoDB"],
      image: "/images/projects/finance.jpg",
      results: [
        "99.999% uptime reliability",
        "3.2 million active users",
        "42% reduction in transaction costs",
        "PCI-DSS Level 1 compliance maintained",
      ],
    },
    {
      id: 3,
      title: "Healthcare Data Platform",
      client: "National Healthcare Provider",
      description:
        "HIPAA-compliant patient data management with AI-assisted diagnostics.",
      technologies: ["React", "Python", "TensorFlow", "Google Cloud"],
      image: "/images/projects/healthcare.jpg",
      results: [
        "68% faster diagnostic times",
        "24% improvement in treatment outcomes",
        "1.2M patient records securely managed",
        "Seamless integration with 15 existing systems",
      ],
    },
  ];

  // Process steps
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description:
        "We deeply analyze your business needs, technical environment, and user requirements to establish a solid foundation.",
      icon: <HiOutlineQuestionMarkCircle className="text-blue-500 w-8 h-8" />,
    },
    {
      id: 2,
      title: "Strategy",
      description:
        "Our team collaborates with you to develop a comprehensive roadmap and technical approach tailored to your goals.",
      icon: <HiOutlineLightBulb className="text-purple-500 w-8 h-8" />,
    },
    {
      id: 3,
      title: "Design",
      description:
        "We create detailed technical designs and architectures optimized for performance, security, and scalability.",
      icon: <HiOutlineCube className="text-green-500 w-8 h-8" />,
    },
    {
      id: 4,
      title: "Development",
      description:
        "Our engineering teams build your solution using modern technologies and best practices with regular feedback cycles.",
      icon: <FaCode className="text-amber-500 w-8 h-8" />,
    },
    {
      id: 5,
      title: "Testing",
      description:
        "Rigorous quality assurance processes ensure your solution is reliable, secure, and performs optimally.",
      icon: <FaTools className="text-red-500 w-8 h-8" />,
    },
    {
      id: 6,
      title: "Deployment",
      description:
        "We implement your solution with minimal disruption, ensuring seamless integration with existing systems.",
      icon: <FaRocket className="text-indigo-500 w-8 h-8" />,
    },
    {
      id: 7,
      title: "Support",
      description:
        "Our team provides ongoing maintenance, optimization, and support to ensure your solution evolves with your needs.",
      icon: <HiOutlineSparkles className="text-cyan-500 w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Custom cursor effect */}
      <div
        ref={cursorRef}
        className={`fixed w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-50 -ml-4 -mt-4 transition-transform duration-100 ${
          hoveredCard ? "scale-150 bg-blue-500/10" : "scale-100"
        }`}
      ></div>

      <Header />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Background gradient animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] bg-blue-600 rounded-full filter blur-[120px] opacity-20 animate-blob"></div>
          <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-teal-600 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Code-like patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[10%] left-[5%] text-xs md:text-sm font-mono text-blue-500 opacity-30">
            &lt;div className="services"&gt;
            <br />
            &nbsp;&nbsp;&lt;h1&gt;Enterprise Solutions&lt;/h1&gt;
            <br />
            &nbsp;&nbsp;&lt;p&gt;Transforming businesses through
            technology&lt;/p&gt;
            <br />
            &lt;/div&gt;
          </div>
          <div className="absolute bottom-[15%] right-[5%] text-xs md:text-sm font-mono text-purple-500 opacity-30">
            function optimizeBusiness() &#123;
            <br />
            &nbsp;&nbsp;const innovation = implement(cloud_solutions);
            <br />
            &nbsp;&nbsp;const efficiency = automate(processes);
            <br />
            &nbsp;&nbsp;return success;
            <br />
            &#125;
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Transforming businesses through cutting-edge technology,
              innovative automation, and strategic digital transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="#services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg mr-4"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-400 mb-2">Scroll down to discover &darr; </p>
            <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-2 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                250+
              </div>
              <p className="text-xl text-gray-300">Projects Delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent mb-2">
                12+
              </div>
              <p className="text-xl text-gray-300">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent mb-2">
                94%
              </div>
              <p className="text-xl text-gray-300">Client Retention</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent mb-2">
                $450M+
              </div>
              <p className="text-xl text-gray-300">Client Revenue Generated</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div id="services" ref={servicesSectionRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to transform your
              business operations, enhance efficiency, and drive growth in the
              digital age.
            </p>
          </motion.div>

          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`bg-gradient-to-br ${service.bgColor} p-1 rounded-2xl h-full`}
                >
                  <div className="bg-gray-900 rounded-2xl p-8 h-full flex flex-col">
                    <div className="text-4xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span
                            className={`text-${service.accentColor}-500 mr-2`}
                          >
                            •
                          </span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`text-${service.accentColor}-500 flex items-center font-semibold hover:underline mt-auto`}
                      onClick={() => setActiveProject(service)}
                    >
                      View Case Study
                      <HiOutlineArrowRight className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-gray-800 rounded-full p-2 z-10"
                onClick={() => setActiveProject(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto max-h-[80vh]">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 text-4xl">{activeProject?.icon}</div>
                    <h3 className="text-2xl font-bold">
                      {activeProject?.title}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Client</h4>
                    <p className="text-gray-300">
                      {activeProject?.caseStudy?.client}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300">
                      {activeProject?.caseStudy?.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300">
                      {activeProject?.caseStudy?.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">Results</h4>
                    <p className="text-gray-300">
                      {activeProject?.caseStudy?.result}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-400">Case Study Image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for
              our clients, ensuring transparency and collaboration at every
              stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={step.id}
                className="bg-gray-800 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-6xl opacity-10">
                  {step.id}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Project Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our recent enterprise solutions that have delivered
              transformative results for organizations across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-2">Client: {project.client}</p>
                  <p className="text-xl text-gray-300 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-gray-800 rounded-2xl overflow-hidden aspect-video flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-400">Project Image</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-5 h-full">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-5 h-full">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="border-b border-white/5 h-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to transform your business with cutting-edge technology?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how our enterprise solutions can drive efficiency,
              automation, and growth for your organization.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="#contact"
                className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to discuss your enterprise needs? Fill out the form, and
                our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-full mr-4">
                    <HiOutlineGlobe className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Headquarters</h3>
                    <p className="text-gray-300">
                      Lagos, Nigeria • London, UK • Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-full mr-4">
                    <HiOutlineChip className="text-purple-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Technology Partners
                    </h3>
                    <p className="text-gray-300">
                      AWS • Google Cloud • Microsoft Azure • IBM
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Our Global Presence</h3>
                <div className="bg-gray-800 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-gray-400">
                    World Map with Location Markers
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                      <option>Enterprise Software Development</option>
                      <option>Inventory Management System</option>
                      <option>Mobile App Development</option>
                      <option>AI-Driven Cloud Solutions</option>
                      <option>Data Analytics & BI</option>
                      <option>Cybersecurity Services</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white h-32"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg py-4"
                  >
                    Submit Request
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;
