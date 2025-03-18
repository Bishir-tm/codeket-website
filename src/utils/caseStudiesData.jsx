import {
  FaLayerGroup,
  FaCloud,
  FaLaptopCode,
  FaIndustry,
  FaHospital,
  FaShoppingCart,
  FaGlobe,
  FaUserShield,
} from "react-icons/fa";

// Industry categories
export const industries = [
  { id: "all", name: "All Industries" },
  // { id: "finance", name: "Financial Services" },
  { id: "healthcare", name: "Healthcare" },
  { id: "retail", name: "Retail & E-commerce" },
  { id: "education", name: "Education" },
  // { id: "manufacturing", name: "Manufacturing" },
  // { id: "logistics", name: "Logistics & Transportation" },
  { id: "technology", name: "Technology" },
];

export const services = [
  { id: "all", name: "All Services" },
  { id: "development", name: "Software Development" },
  { id: "cloud", name: "Cloud & AI" },
  { id: "automation", name: "Automation" },
  // { id: "mobile", name: "Mobile Apps" },
  // { id: "security", name: "Cybersecurity" },
  { id: "analytics", name: "Data Analytics" },
];

// Case studies data
export const caseStudies = [
  {
    id: 3,
    title: "Healthcare Management System & AI Diagnostics",
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
    link: "http://channeldata.com.ng",
    image: "/images/hms-zoomed.png",
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
    id: 9,
    title: "Seamless VTU Platform for Digital Transactions",
    industry: "technology",
    services: ["development", "automation", "cloud"],
    clientName: "Channel Telecommunication And Consultancy Services",
    clientDescription:
      "A modern VTU platform enabling seamless airtime, data, and utility bill payments.",
    challengeTitle: "Scalability & Transaction Efficiency",
    challengeDescription:
      "The client faced issues with slow transaction processing, payment failures, and inconsistent service delivery from third-party providers.",
    icon: <FaGlobe className="text-blue-500" />,
    bgColor: "from-blue-500/20 to-indigo-500/20",
    accentColor: "blue",
    link: "http://channeldata.com.ng",
    image: "/images/vtu-zoomed.png",
    logo: "/images/clients/vtu-logo.svg",
    stats: [
      { label: "Transaction Speed Increase", value: "80%" },
      { label: "Failed Transactions Reduction", value: "95%" },
      { label: "User Growth", value: "400%" },
      { label: "Operational Cost Savings", value: "$100K annually" },
    ],
    solution: [
      "Developed a robust VTU platform with direct API integrations for fast, real-time transactions",
      "Implemented automated error handling and fallback providers to reduce failed transactions",
      "Built a secure wallet system with transaction history, balance tracking, and automated reconciliations",
      "Integrated AI-powered fraud detection and customer support automation",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Gladtidings API",
      "AWS",
      "Redis",
    ],
    testimonial: {
      quote:
        "Codeket's VTU system transformed our platform with real-time transactions and high uptime. Our users love the reliability and speed!",
      author: "CEO, Channel Data",
    },
    results: [
      "Processed over 1 million successful transactions within the first year",
      "Achieved 99.99% uptime with server optimizations",
      "Expanded customer base by 400% due to improved reliability",
      "Reduced operational costs by automating transaction processing",
    ],
  },
  {
    id: 10,
    title: "AI-Powered Inventory Management System",
    industry: "retail",
    services: ["development", "automation", "analytics"],
    clientName: "Supermart Inventory Hub",
    clientDescription:
      "An advanced inventory solution for supermarkets and warehouses, ensuring optimal stock levels and reduced losses.",
    challengeTitle: "Stock Management & Loss Reduction",
    challengeDescription:
      "Supermarkets and warehouses faced issues with inaccurate stock tracking, overstocking, and product losses due to mismanagement.",
    icon: <FaLayerGroup className="text-purple-500" />,
    bgColor: "from-purple-500/20 to-pink-500/20",
    accentColor: "purple",
    link: "http://channeldata.com.ng",
    image: "/images/1i.png",
    logo: "/images/clients/supermart-logo.svg",
    stats: [
      { label: "Stock Accuracy", value: "98%" },
      { label: "Waste Reduction", value: "60%" },
      { label: "Operational Efficiency", value: "+75%" },
      { label: "Time Saved in Audits", value: "80%" },
    ],
    solution: [
      "Built an AI-powered inventory tracking system integrated with barcode and RFID scanning",
      "Automated stock alerts, reordering processes, and predictive demand analytics",
      "Designed an intuitive dashboard for real-time stock insights and analytics",
      "Integrated sales and supplier management for seamless inventory flow",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "TensorFlow",
      "AWS",
      "Barcode/RFID API",
    ],
    testimonial: {
      quote:
        "Codeket’s inventory system revolutionized our stock tracking. Now, we have complete visibility with AI-powered insights.",
      author: "Inventory Manager, Supermart",
    },
    results: [
      "Achieved 98% stock accuracy, reducing losses significantly",
      "Saved 80% of the time spent on manual inventory audits",
      "Decreased stock shortages and overstocking by implementing predictive analytics",
      "Increased operational efficiency by 75% with automation",
    ],
  },
  {
    id: 11,
    title: "Smart School Management System",
    industry: "education",
    services: ["development", "cloud", "automation"],
    clientName: "Edutech Academy",
    clientDescription:
      "A digital platform designed to automate administrative tasks, attendance tracking, and fee management for schools.",
    challengeTitle: "Administrative Bottlenecks & Student Tracking",
    challengeDescription:
      "Schools struggled with manual processes for attendance, fee collection, and student performance tracking, leading to inefficiencies.",
    icon: <FaLaptopCode className="text-teal-500" />,
    bgColor: "from-teal-500/20 to-cyan-500/20",
    accentColor: "teal",
    link: "http://channeldata.com.ng",
    image: "/images/1l.png",
    logo: "/images/clients/edutech-logo.svg",
    stats: [
      { label: "Time Saved on Admin Tasks", value: "85%" },
      { label: "Attendance Accuracy", value: "99%" },
      { label: "Fee Collection Efficiency", value: "+70%" },
      { label: "Parental Engagement", value: "+50%" },
    ],
    solution: [
      "Developed a cloud-based school management system with student, teacher, and parent portals",
      "Automated class attendance tracking using biometric and QR-based check-ins",
      "Integrated an AI-powered fee management system with automated reminders and online payment processing",
      "Created performance tracking dashboards for teachers and parents",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Biometric API",
      "QR Code Scanner",
    ],
    testimonial: {
      quote:
        "Codeket's school management system has been a game-changer. Our processes are now streamlined, and student management is effortless.",
      author: "Principal, Edutech Academy",
    },
    results: [
      "Reduced administrative workload by 85% through automation",
      "Achieved 99% attendance accuracy with digital tracking",
      "Improved fee collection by 70% with automated reminders",
      "Enhanced parental engagement with real-time student progress updates",
    ],
  },
];
