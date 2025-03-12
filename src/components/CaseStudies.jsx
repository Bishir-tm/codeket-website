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
  FaIndustry,
  FaHospital,
  FaShoppingCart,
  FaMoneyBillWave,
  FaGlobe,
  FaUserShield,
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
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineChevronDown,
  HiOutlineUser,
  HiOutlineChartBar,
} from "react-icons/hi";

const CaseStudiesPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedService, setSelectedService] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState("");
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

  // Industry categories
  const industries = [
    { id: "all", name: "All Industries" },
    { id: "finance", name: "Financial Services" },
    { id: "healthcare", name: "Healthcare" },
    { id: "retail", name: "Retail & E-commerce" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "logistics", name: "Logistics & Transportation" },
    { id: "technology", name: "Technology" },
  ];

  // Service categories
  const services = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Software Development" },
    { id: "cloud", name: "Cloud & AI" },
    { id: "automation", name: "Automation" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "security", name: "Cybersecurity" },
    { id: "analytics", name: "Data Analytics" },
  ];

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Inventory Management System",
      industry: "retail",
      services: ["development", "cloud", "automation"],
      clientName: "GlobalMart Retail Chain",
      clientDescription:
        "A multinational retail corporation with over 500 stores across 12 countries",
      challengeTitle: "Inventory Challenges at Scale",
      challengeDescription:
        "GlobalMart was struggling with significant inventory discrepancies across their stores, leading to stockouts, overstocking, and millions in lost revenue. Their legacy inventory system couldn't handle the scale of their operations, resulting in manual workarounds and critical data delays.",
      icon: <FaLayerGroup className="text-purple-500" />,
      bgColor: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      image: "/images/case-studies/retail.jpg",
      logo: "/images/clients/globalmart-logo.svg",
      stats: [
        { label: "Stockout Reduction", value: "78%" },
        { label: "Inventory Turn Increase", value: "24%" },
        { label: "Annual Savings", value: "$4.2M" },
        { label: "Implementation Time", value: "5 months" },
      ],
      solution: [
        "Developed a custom AI-powered inventory management system that integrates with existing POS and ERP systems",
        "Implemented predictive stock management using machine learning algorithms trained on historical sales data",
        "Created a real-time inventory tracking system with automated alerts and reordering capabilities",
        "Designed an intuitive dashboard for store managers with actionable insights and recommendations",
      ],
      technologies: [
        "React",
        "Node.js",
        "TensorFlow",
        "AWS",
        "MongoDB",
        "Python",
      ],
      testimonial: {
        quote:
          "The inventory management system CodeKet built has completely transformed our operations. We've seen dramatic improvements in stock accuracy and significant cost savings.",
        author: "Sarah Johnson",
        title: "CTO, GlobalMart",
      },
      results: [
        "Reduced stockouts by 78% within the first three months of deployment",
        "Increased inventory turn by 24%, freeing up $12M in working capital",
        "Cut manual inventory tasks by 92%, allowing staff to focus on customer service",
        "Improved forecast accuracy from 65% to 94% with predictive AI algorithms",
        "Achieved full ROI within 11 months of implementation",
      ],
    },
    {
      id: 2,
      title: "Secure Banking Platform Modernization",
      industry: "finance",
      services: ["development", "security", "cloud"],
      clientName: "International Banking Corporation",
      clientDescription:
        "A global financial institution serving over 25 million customers with operations in 40+ countries",
      challengeTitle: "Legacy System Limitations",
      challengeDescription:
        "IBC was operating on an outdated banking platform built 15+ years ago. The system was increasingly costly to maintain, lacked modern security features, and couldn't support the bank's digital transformation initiatives. Customer experience was suffering with slow transaction times and limited self-service capabilities.",
      icon: <FaLaptopCode className="text-teal-500" />,
      bgColor: "from-teal-500/20 to-cyan-500/20",
      accentColor: "teal",
      image: "/images/case-studies/banking.jpg",
      logo: "/images/clients/ibc-logo.svg",
      stats: [
        { label: "Uptime", value: "99.999%" },
        { label: "Transaction Cost Reduction", value: "42%" },
        { label: "Active Digital Users", value: "3.2M" },
        { label: "Security Incidents", value: "Zero" },
      ],
      solution: [
        "Architected a microservices-based banking platform with cloud-native technologies",
        "Implemented advanced security measures including biometric authentication and real-time fraud detection",
        "Developed a comprehensive API layer to enable fintech partnerships and service integrations",
        "Created responsive web and mobile interfaces with enhanced self-service capabilities",
      ],
      technologies: [
        "Angular",
        "Java Spring",
        "Kubernetes",
        "MongoDB",
        "AWS",
        "OAuth 2.0",
        "Kafka",
      ],
      testimonial: {
        quote:
          "CodeKet delivered a banking platform that not only addressed our security and performance needs but has become the foundation of our digital transformation. Their expertise in financial systems was evident throughout the project.",
        author: "Michael Chen",
        title: "CIO, International Banking Corporation",
      },
      results: [
        "Achieved 99.999% platform uptime since launch",
        "Reduced transaction processing costs by 42%",
        "Increased digital customer engagement by 87%",
        "Enabled rapid deployment of new features (from months to days)",
        "Maintained PCI-DSS Level 1 compliance with zero security incidents",
        "Onboarded 15 fintech partners within first year using new API ecosystem",
      ],
    },
    {
      id: 3,
      title: "Patient Data Platform & AI Diagnostics",
      industry: "healthcare",
      services: ["development", "cloud", "analytics"],
      clientName: "National Healthcare Network",
      clientDescription:
        "A leading healthcare provider with 12 hospitals and 30+ clinics serving over 2 million patients annually",
      challengeTitle: "Fragmented Patient Data",
      challengeDescription:
        "NHN was struggling with siloed patient data across different facilities and departments. This fragmentation led to delayed diagnoses, duplicate testing, and inefficient care coordination. Doctors lacked a unified view of patient history, and manually reviewing medical images was causing diagnostic bottlenecks.",
      icon: <FaHospital className="text-green-500" />,
      bgColor: "from-green-500/20 to-teal-500/20",
      accentColor: "green",
      image: "/images/case-studies/healthcare.jpg",
      logo: "/images/clients/nhn-logo.svg",
      stats: [
        { label: "Faster Diagnostics", value: "68%" },
        { label: "Improved Outcomes", value: "24%" },
        { label: "Patient Records", value: "1.2M+" },
        { label: "System Integrations", value: "15" },
      ],
      solution: [
        "Built a HIPAA-compliant unified patient data platform that integrates data from all facilities and departments",
        "Developed AI-assisted diagnostic tools for radiology and pathology using deep learning models",
        "Created a secure physician portal with comprehensive patient views and clinical decision support",
        "Implemented predictive analytics for patient risk stratification and preventive care recommendations",
      ],
      technologies: [
        "React",
        "Python",
        "TensorFlow",
        "Google Cloud",
        "FHIR API",
        "PostgreSQL",
        "Docker",
      ],
      testimonial: {
        quote:
          "The platform CodeKet developed has revolutionized how we deliver care. Our physicians now have instant access to complete patient histories, and the AI diagnostic tools have significantly improved both accuracy and efficiency.",
        author: "Dr. Lisa Rodriguez",
        title: "Chief Medical Officer, National Healthcare Network",
      },
      results: [
        "Accelerated diagnostic times by 68% through AI-assisted image analysis",
        "Improved treatment outcomes by 24% with comprehensive patient data access",
        "Reduced duplicate testing by 92%, saving an estimated $3.6M annually",
        "Decreased average hospital stay by 1.7 days through better care coordination",
        "Seamlessly integrated with 15 existing clinical and administrative systems",
        "Maintained 100% HIPAA compliance with zero data breaches",
      ],
    },
    {
      id: 4,
      title: "Smart Factory Automation System",
      industry: "manufacturing",
      services: ["automation", "cloud", "analytics"],
      clientName: "Advanced Manufacturing Group",
      clientDescription:
        "A global industrial manufacturer with 12 production facilities specializing in precision components",
      challengeTitle: "Production Inefficiencies and Quality Issues",
      challengeDescription:
        "AMG was experiencing high maintenance costs, production delays, and inconsistent product quality across their manufacturing facilities. Their existing systems couldn't provide real-time visibility into operations, and equipment failures were causing costly downtime. Manual quality inspection processes were time-consuming and error-prone.",
      icon: <FaIndustry className="text-amber-500" />,
      bgColor: "from-amber-500/20 to-orange-500/20",
      accentColor: "amber",
      image: "/images/case-studies/manufacturing.jpg",
      logo: "/images/clients/amg-logo.svg",
      stats: [
        { label: "Downtime Reduction", value: "63%" },
        { label: "Quality Improvement", value: "42%" },
        { label: "Production Increase", value: "28%" },
        { label: "Maintenance Cost Saving", value: "$2.8M" },
      ],
      solution: [
        "Implemented an IoT-based factory monitoring system with thousands of sensors across production lines",
        "Developed predictive maintenance algorithms to identify potential equipment failures before they occur",
        "Created an AI-powered quality inspection system using computer vision and deep learning",
        "Built a real-time analytics dashboard for production managers with actionable insights",
      ],
      technologies: [
        "Industrial IoT",
        "Microsoft Azure",
        "Python",
        "TensorFlow",
        "Power BI",
        "C#",
        "MQTT",
      ],
      testimonial: {
        quote:
          "The smart factory system that CodeKet designed has transformed our manufacturing operations. We've seen dramatic improvements in uptime, quality, and overall equipment effectiveness across all our facilities.",
        author: "James Wilson",
        title: "VP of Operations, Advanced Manufacturing Group",
      },
      results: [
        "Reduced unplanned downtime by 63% through predictive maintenance",
        "Improved product quality rates from 92% to 99.2% with AI-based inspection",
        "Increased overall production capacity by 28% without additional equipment",
        "Decreased maintenance costs by 42%, saving $2.8M annually",
        "Cut energy consumption by 18% through optimized equipment scheduling",
        "Reduced time-to-market for new products by 35% with improved production insights",
      ],
    },
    {
      id: 5,
      title: "Global Logistics Optimization Platform",
      industry: "logistics",
      services: ["development", "analytics", "automation"],
      clientName: "WorldWide Logistics Corporation",
      clientDescription:
        "A major international logistics provider handling over 5 million shipments annually across 60+ countries",
      challengeTitle: "Supply Chain Complexity and Visibility Gaps",
      challengeDescription:
        "WWLC was struggling with supply chain visibility, routing inefficiencies, and manual coordination processes across their global operations. Customers lacked real-time tracking capabilities, and route planning relied heavily on dispatcher experience rather than data-driven decision making.",
      icon: <FaGlobe className="text-blue-500" />,
      bgColor: "from-blue-500/20 to-indigo-500/20",
      accentColor: "blue",
      image: "/images/case-studies/logistics.jpg",
      logo: "/images/clients/wwlc-logo.svg",
      stats: [
        { label: "Operational Efficiency", value: "+42%" },
        { label: "Fuel Savings", value: "18%" },
        { label: "On-time Delivery", value: "97.5%" },
        { label: "Annual Savings", value: "$1.2M" },
      ],
      solution: [
        "Developed an end-to-end logistics management platform with real-time shipment tracking",
        "Implemented AI-driven route optimization algorithms considering multiple variables (traffic, weather, vehicle capacity)",
        "Created a driver mobile app with turn-by-turn navigation and electronic documentation",
        "Built a customer portal with real-time visibility and self-service capabilities",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "TensorFlow",
        "Redis",
        "AWS",
      ],
      testimonial: {
        quote:
          "CodeKet delivered a logistics platform that has completely transformed our operations. The real-time visibility and AI-powered routing have dramatically improved our efficiency and customer satisfaction.",
        author: "Robert Martinez",
        title: "CEO, WorldWide Logistics Corporation",
      },
      results: [
        "Increased operational efficiency by 42% through optimized routing and reduced manual processes",
        "Improved on-time delivery rates from 82% to 97.5%",
        "Reduced fuel consumption by 18% with AI-optimized routes",
        "Decreased administrative workload by 65% through automation",
        "Cut customer service calls by 72% with self-service tracking portal",
        "Achieved annual savings of $1.2M in operational costs",
      ],
    },
    {
      id: 6,
      title: "Secure Cloud Migration & DevOps Transformation",
      industry: "technology",
      services: ["cloud", "security", "automation"],
      clientName: "TechSolutions SaaS Platform",
      clientDescription:
        "A growing SaaS company providing enterprise workflow solutions to 500+ corporate clients",
      challengeTitle: "Scaling Challenges and Security Concerns",
      challengeDescription:
        "TechSolutions was experiencing performance issues during peak usage, deployment delays with their monolithic architecture, and increasing security concerns from enterprise clients. Their on-premises infrastructure was becoming a constraint to growth, and manual deployment processes were causing frequent release delays.",
      icon: <FaCloud className="text-cyan-500" />,
      bgColor: "from-cyan-500/20 to-blue-500/20",
      accentColor: "cyan",
      image: "/images/case-studies/cloud.jpg",
      logo: "/images/clients/techsolutions-logo.svg",
      stats: [
        { label: "Release Frequency", value: "10x" },
        { label: "Infrastructure Cost", value: "-35%" },
        { label: "Uptime", value: "99.99%" },
        { label: "Security Vulnerabilities", value: "-92%" },
      ],
      solution: [
        "Designed and implemented a secure cloud migration strategy to AWS",
        "Refactored monolithic application into microservices architecture",
        "Built comprehensive CI/CD pipelines with automated testing and security scanning",
        "Implemented infrastructure-as-code for consistent and repeatable deployments",
        "Developed a zero-trust security model with comprehensive monitoring and alerting",
      ],
      technologies: [
        "AWS",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Jenkins",
        "ELK Stack",
        "Prometheus",
        "Vault",
      ],
      testimonial: {
        quote:
          "The cloud migration and DevOps transformation that CodeKet implemented has been game-changing for our business. We've dramatically improved our release velocity while enhancing security and reducing costs.",
        author: "Alex Thompson",
        title: "CTO, TechSolutions",
      },
      results: [
        "Increased release frequency from monthly to multiple times daily",
        "Reduced infrastructure costs by 35% while improving performance",
        "Achieved 99.99% platform uptime (up from 98.5%)",
        "Decreased production issues by 78% through automated testing",
        "Reduced security vulnerabilities by 92% with automated scanning",
        "Improved developer productivity by 40% with streamlined workflows",
      ],
    },
    {
      id: 7,
      title: "E-commerce Personalization Engine",
      industry: "retail",
      services: ["development", "analytics", "cloud"],
      clientName: "Fashion Forward Retailers",
      clientDescription:
        "A multi-brand fashion retailer with 12M+ online customers and $500M+ in annual online sales",
      challengeTitle: "Generic Customer Experience and Conversion Challenges",
      challengeDescription:
        "FFR was struggling with low conversion rates, high cart abandonment, and an inability to deliver personalized shopping experiences at scale. Their existing recommendation system was based on simple rules rather than customer behavior and preferences, resulting in generic suggestions and missed sales opportunities.",
      icon: <FaShoppingCart className="text-pink-500" />,
      bgColor: "from-pink-500/20 to-purple-500/20",
      accentColor: "pink",
      image: "/images/case-studies/ecommerce.jpg",
      logo: "/images/clients/ffr-logo.svg",
      stats: [
        { label: "Conversion Rate", value: "+32%" },
        { label: "Average Order Value", value: "+18%" },
        { label: "Revenue Increase", value: "$38M" },
        { label: "Cart Abandonment", value: "-25%" },
      ],
      solution: [
        "Developed a real-time personalization engine using machine learning and behavioral analytics",
        "Implemented dynamic product recommendations based on browsing history, purchase patterns, and similar customer profiles",
        "Created personalized email marketing automation with individualized product suggestions",
        "Built a customer segmentation system for targeted promotions and messaging",
      ],
      technologies: [
        "React",
        "Python",
        "TensorFlow",
        "AWS",
        "Elasticsearch",
        "Redis",
        "Kafka",
      ],
      testimonial: {
        quote:
          "The personalization engine that CodeKet built has completely transformed our online shopping experience. Our customers now receive truly relevant recommendations, and the impact on our conversion rates and revenue has been substantial.",
        author: "Emily Chen",
        title: "Digital Director, Fashion Forward Retailers",
      },
      results: [
        "Increased conversion rates by 32% through personalized product recommendations",
        "Improved average order value by 18% with relevant cross-selling",
        "Reduced cart abandonment rates by 25% using targeted incentives",
        "Generated $38M in additional annual revenue through personalization",
        "Increased email marketing effectiveness by 85% with personalized content",
        "Improved customer retention rate by 28% year-over-year",
      ],
    },
    {
      id: 8,
      title: "Enterprise Security Operations Center",
      industry: "finance",
      services: ["security", "analytics", "automation"],
      clientName: "Capital Finance Group",
      clientDescription:
        "A financial services leader managing over $200B in assets with strict regulatory compliance requirements",
      challengeTitle: "Evolving Cyber Threats and Compliance Mandates",
      challengeDescription:
        "CFG was facing increasingly sophisticated cyber threats while struggling to maintain compliance with expanding financial regulations. Their security team was overwhelmed by alert fatigue, and manual threat investigation processes were too slow to effectively respond to advanced attacks.",
      icon: <FaUserShield className="text-red-500" />,
      bgColor: "from-red-500/20 to-rose-500/20",
      accentColor: "red",
      image: "/images/case-studies/security.jpg",
      logo: "/images/clients/cfg-logo.svg",
      stats: [
        { label: "Threat Detection", value: "4x faster" },
        { label: "False Positives", value: "-85%" },
        { label: "Compliance Costs", value: "-32%" },
        { label: "Security Incidents", value: "Zero" },
      ],
      solution: [
        "Designed and implemented a comprehensive Security Operations Center (SOC) with 24/7 monitoring",
        "Developed AI-powered threat detection and correlation engine to identify complex attack patterns",
        "Created automated incident response playbooks for common security scenarios",
        "Built a compliance automation system for continuous regulatory adherence",
        "Implemented a security awareness training platform for employees",
      ],
      technologies: [
        "Elastic SIEM",
        "Python",
        "AWS Security Hub",
        "Terraform",
        "Splunk",
        "Palo Alto Networks",
        "MITRE ATT&CK",
      ],
      testimonial: {
        quote:
          "CodeKet's Security Operations Center has dramatically improved our security posture while reducing operational burden. Their AI-powered threat detection helps us identify advanced attacks before they impact our business.",
        author: "Victoria Reynolds",
        title: "CISO, Capital Finance Group",
      },
      results: [
        "Accelerated threat detection and response times by 4x",
        "Reduced false positive alerts by 85%, focusing team on real threats",
        "Decreased security compliance costs by 32% through automation",
        "Maintained zero successful security breaches since implementation",
        "Improved regulatory audit outcomes with comprehensive security documentation",
        "Enhanced overall security posture with proactive threat hunting capabilities",
      ],
    },
  ];

  // Filter case studies based on selected industry, service, and search query
  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesIndustry =
      selectedIndustry === "all" || study.industry === selectedIndustry;
    const matchesService =
      selectedService === "all" || study.services.includes(selectedService);
    const matchesSearch =
      searchQuery === "" ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.clientName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesIndustry && matchesService && matchesSearch;
  });

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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm"></div>
          {/* Abstract background pattern - this would be replaced with your actual background image */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 pt-32 pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Our Success Stories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Explore how we've helped industry leaders solve complex challenges
              and achieve transformative results.
            </p>

            {/* Search bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-4 pl-12 bg-gray-900/70 backdrop-blur border border-gray-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Case Studies Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Categories */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Industry filter */}
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <HiOutlineFilter className="mr-2" /> Filter by Industry
              </h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <motion.button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                      selectedIndustry === industry.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {industry.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Service filter */}
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <HiOutlineFilter className="mr-2" /> Filter by Service
              </h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                      selectedService === service.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {service.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredCaseStudies.map((caseStudy) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    onMouseEnter={() => setHoveredCard(caseStudy.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`bg-gradient-to-br ${caseStudy.bgColor} p-1 rounded-2xl h-full`}
                  >
                    <div className="bg-gray-900 rounded-2xl h-full flex flex-col overflow-hidden">
                      {/* Image placeholder - would be replaced with actual images */}
                      <div className="h-48 bg-gray-800 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-400">Case Study Image</p>
                        </div>
                        <div className="absolute top-4 left-4 bg-black/70 rounded-full p-2">
                          <div className="text-2xl">{caseStudy.icon}</div>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          {/* Client industry badge */}
                          <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs mb-2">
                            {
                              industries.find(
                                (i) => i.id === caseStudy.industry
                              )?.name
                            }
                          </span>
                          <h3 className="text-xl font-bold mb-2">
                            {caseStudy.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {caseStudy.clientName}
                          </p>
                        </div>

                        {/* Key stats in grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {caseStudy.stats.slice(0, 2).map((stat, index) => (
                            <div
                              key={index}
                              className="bg-gray-800 rounded-lg p-3 text-center"
                            >
                              <div
                                className={`text-lg font-bold text-${caseStudy.accentColor}-500 mb-1`}
                              >
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-400">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex-grow">
                          <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                            {caseStudy.challengeDescription.substring(0, 120)}
                            ...
                          </p>
                        </div>

                        <motion.button
                          onClick={() => setActiveCaseStudy(caseStudy)}
                          className={`mt-auto w-full py-3 px-4 rounded-lg bg-${caseStudy.accentColor}-900/30 hover:bg-${caseStudy.accentColor}-800/50 border border-${caseStudy.accentColor}-500/30 text-${caseStudy.accentColor}-400 font-medium transition-all duration-300 flex items-center justify-center`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Case Study{" "}
                          <HiOutlineArrowRight className="ml-2" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <HiOutlineQuestionMarkCircle className="mx-auto text-5xl text-gray-500 mb-4" />
              <h3 className="text-xl font-medium text-gray-300 mb-2">
                No matching case studies
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Our Impact by the Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Results that speak for themselves across industries and
              technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
            >
              <FaRocket className="mx-auto text-blue-500 text-3xl mb-4" />
              <div className="text-4xl font-bold text-white mb-2">94%</div>
              <p className="text-gray-400">Projects Delivered On Time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
            >
              <FaChartLine className="mx-auto text-purple-500 text-3xl mb-4" />
              <div className="text-4xl font-bold text-white mb-2">$42M+</div>
              <p className="text-gray-400">Client Revenue Increased</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
            >
              <FaBrain className="mx-auto text-cyan-500 text-3xl mb-4" />
              <div className="text-4xl font-bold text-white mb-2">14</div>
              <p className="text-gray-400">Custom AI Solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center"
            >
              <FaServer className="mx-auto text-green-500 text-3xl mb-4" />
              <div className="text-4xl font-bold text-white mb-2">99.99%</div>
              <p className="text-gray-400">System Uptime</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear directly from the leaders who trusted us with their
              transformative projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial cards - sampling from the case studies */}
            {[2, 3, 5].map((id) => {
              const caseStudy = caseStudies.find((c) => c.id === id);
              if (!caseStudy) return null;

              return (
                <motion.div
                  key={`testimonial-${id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <HiOutlineUser className="text-2xl text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">
                        {caseStudy.testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {caseStudy.testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "{caseStudy.testimonial.quote}"
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-gradient-to-b from-black to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you overcome challenges and achieve
              breakthrough results with custom technology solutions.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveCaseStudy(null)}
            ></div>

            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10"
            >
              <div className="sticky top-0 z-20 bg-gray-900 p-6 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  {activeCaseStudy.title}
                </h3>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 md:p-8">
                {/* Client info */}
                <div className="mb-10">
                  <div className="bg-gray-800 w-20 h-20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-4xl">{activeCaseStudy.icon}</div>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">Client</p>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {activeCaseStudy.clientName}
                  </h4>
                  <p className="text-gray-400">
                    {activeCaseStudy.clientDescription}
                  </p>
                </div>

                {/* Challenge section */}
                <div className="mb-10">
                  <p className="text-purple-400 font-medium mb-2">
                    The Challenge
                  </p>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {activeCaseStudy.challengeTitle}
                  </h4>
                  <p className="text-gray-300">
                    {activeCaseStudy.challengeDescription}
                  </p>
                </div>

                {/* Key stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {activeCaseStudy.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-4 text-center"
                    >
                      <div
                        className={`text-xl md:text-2xl font-bold text-${activeCaseStudy.accentColor}-500 mb-1`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Solution section */}
                <div className="mb-10">
                  <p className="text-green-400 font-medium mb-2">
                    Our Solution
                  </p>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Custom-Built Technology Stack
                  </h4>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    {activeCaseStudy.solution.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3 text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies used */}
                  <div>
                    <p className="text-sm text-gray-400 mb-2">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeCaseStudy.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results section */}
                <div className="mb-10">
                  <p className="text-amber-400 font-medium mb-2">The Results</p>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Measurable Business Impact
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    {activeCaseStudy.results.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3 text-amber-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-800 rounded-xl p-6 mb-10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <HiOutlineUser className="text-2xl text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">
                        {activeCaseStudy.testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {activeCaseStudy.testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "{activeCaseStudy.testimonial.quote}"
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                    Start Your Success Story
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudiesPage;
