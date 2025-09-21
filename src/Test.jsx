import React, { useState, useEffect, useRef } from "react";
import {
  ChefHat,
  GraduationCap,
  Package,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function SoftwareSuiteShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const suites = [
    {
      id: "restaurant",
      title: "Restaurant Management",
      tagline: "Culinary Excellence Redefined",
      description:
        "Revolutionary dining ecosystem that transforms every aspect of restaurant operations through intelligent automation and seamless integration.",
      icon: ChefHat,
      stats: [
        "40% Efficiency Boost",
        "Real-time Analytics",
        "Cloud-native Architecture",
      ],
      color: "#FF6B35",
      bgPattern: "M20,20 Q30,10 40,20 T60,20",
      features: [
        "AI-Powered Order Optimization",
        "Smart Kitchen Display Systems",
        "Integrated Payment Processing",
        "Advanced Customer Analytics",
      ],
    },
    {
      id: "education",
      title: "School Management",
      tagline: "Future of Educational Excellence",
      description:
        "Next-generation academic platform that empowers institutions with intelligent tools for comprehensive educational management and student success.",
      icon: GraduationCap,
      stats: [
        "500+ Schools Trust Us",
        "99.9% Uptime",
        "Multi-language Support",
      ],
      color: "#4F46E5",
      bgPattern: "M15,25 Q25,15 35,25 T55,25",
      features: [
        "Dynamic Learning Pathways",
        "Parent-Teacher Communication Hub",
        "Automated Grade Management",
        "Performance Analytics Dashboard",
      ],
    },
    {
      id: "inventory",
      title: "Inventory Management",
      tagline: "Intelligent Supply Chain Revolution",
      description:
        "Cutting-edge inventory intelligence that predicts, optimizes, and automates your entire supply chain with machine learning precision.",
      icon: Package,
      stats: [
        "35% Cost Reduction",
        "Predictive Analytics",
        "Multi-warehouse Support",
      ],
      color: "#10B981",
      bgPattern: "M10,30 Q20,20 30,30 T50,30",
      features: [
        "Predictive Stock Management",
        "Automated Reorder Points",
        "Real-time Warehouse Tracking",
        "Advanced Demand Forecasting",
      ],
    },
    {
      id: "tours",
      title: "Virtual Tours",
      tagline: "Immersive Reality Experiences",
      description:
        "Revolutionary 3D visualization platform that creates breathtaking virtual experiences, transforming how customers explore and engage with spaces.",
      icon: Camera,
      stats: [
        "8K Resolution Support",
        "VR/AR Compatible",
        "Global CDN Delivery",
      ],
      color: "#8B5CF6",
      bgPattern: "M25,15 Q35,5 45,15 T65,15",
      features: [
        "Ultra-HD 360° Capture",
        "Interactive Spatial Audio",
        "Custom Branded Experiences",
        "Advanced Analytics Insights",
      ],
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % suites.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
          mousePosition.y * 100
        }%, rgba(79, 70, 229, 0.15) 0%, rgba(0, 0, 0, 0.95) 70%)`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">
                Award-Winning Software Solutions
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              NEXT-GEN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                SOFTWARE
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionary platforms that don't just meet industry
              standards—they redefine them. Experience the future of business
              technology today.
            </p>
          </div>

          {/* Main Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Active Feature Display */}
            <div className="relative">
              <div
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${suites[activeIndex].color}15 0%, rgba(0,0,0,0.8) 100%)`,
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div
                      className="p-4 rounded-2xl mr-6 relative"
                      style={{ backgroundColor: suites[activeIndex].color }}
                    >
                      {React.createElement(suites[activeIndex].icon, {
                        size: 40,
                        className: "text-white",
                      })}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold mb-2">
                        {suites[activeIndex].title}
                      </h2>
                      <p
                        className="text-lg"
                        style={{ color: suites[activeIndex].color }}
                      >
                        {suites[activeIndex].tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {suites[activeIndex].description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {suites[activeIndex].stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div
                          className="text-sm font-bold"
                          style={{ color: suites[activeIndex].color }}
                        >
                          {stat}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {suites[activeIndex].features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-200 group"
                      >
                        <div
                          className="w-2 h-2 rounded-full mr-4"
                          style={{ backgroundColor: suites[activeIndex].color }}
                        />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated SVG Background */}
                <svg
                  className="absolute top-0 right-0 w-64 h-64 opacity-10"
                  viewBox="0 0 100 100"
                >
                  <path
                    d={suites[activeIndex].bgPattern}
                    stroke={suites[activeIndex].color}
                    strokeWidth="0.5"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>

            {/* Suite Navigation */}
            <div className="space-y-4">
              {suites.map((suite, index) => {
                const IconComponent = suite.icon;
                return (
                  <div
                    key={suite.id}
                    className={`cursor-pointer transition-all duration-500 transform ${
                      index === activeIndex
                        ? "scale-105"
                        : "hover:scale-102 opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border rounded-2xl p-6 relative overflow-hidden ${
                        index === activeIndex
                          ? "border-white/30 shadow-2xl"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`p-3 rounded-xl mr-4 ${
                              index === activeIndex ? "scale-110" : ""
                            } transition-transform duration-300`}
                            style={{
                              backgroundColor: `${suite.color}20`,
                              border: `1px solid ${suite.color}40`,
                            }}
                          >
                            <IconComponent
                              size={24}
                              style={{ color: suite.color }}
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {suite.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {suite.tagline}
                            </p>
                          </div>
                        </div>
                        <ArrowRight
                          className={`w-5 h-5 transition-all duration-300 ${
                            index === activeIndex
                              ? "translate-x-2 opacity-100"
                              : "opacity-40"
                          }`}
                          style={{ color: suite.color }}
                        />
                      </div>

                      {/* Progress Bar */}
                      {index === activeIndex && (
                        <div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent w-full animate-pulse"
                          style={{ color: suite.color }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Experience the Revolution
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join industry leaders who've already transformed their
                  operations with our cutting-edge solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                    <span className="relative z-10">Start Your Journey</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                  <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
