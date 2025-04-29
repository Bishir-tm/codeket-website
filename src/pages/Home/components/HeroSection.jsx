import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import features from "../../../utils/features";
import technologies from "../../../utils/technologies";
import { Link } from "react-router-dom";

const Hero = ({ mousePosition, isLoaded }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Add auto-carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length);
    }, 5000); // Change feature every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="flex-1 grid md:grid-cols-2 items-center gap-8 py-12 px-6">
      {/* Background gradient animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] bg-blue-800 rounded-full filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-800 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-teal-800 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Left Column - Main Content */}
      <div
        className={`space-y-8 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transitionDelay: "200ms",
          transform: `translateX(${mousePosition.x * -20}px) translateY(${
            mousePosition.y * -20
          }px)`,
        }}
      >
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Software Development
            </span>
            <span className="block text-white mt-2">
              At{" "}
              <span className="relative inline-block">
                Lightspeed
                <motion.div
                  className="absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                ></motion.div>
              </span>
            </span>
            <span className="block text-white mt-2">Powered by AI</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Turn business challenges into seamless software solutions with our
          advanced AI-driven technology. We build enterprise software and SaaS
          platforms 3x faster, ensuring top-tier quality and precision.
        </motion.p>

        {/* Technology mini cards */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {technologies.slice(0, 5).map((tech, index) => (
            <motion.button
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center space-x-2 hover:bg-white/10 transition-all"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-white text-sm">{tech.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          {[
            { value: "3x", label: "Faster Delivery", icon: "⚡" },
            { value: "40%", label: "Cost Reduction", icon: "💰" },
            { value: "99.9%", label: "Quality Rating", icon: "✅" },
          ].map((metric, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-lg p-3 text-center"
            >
              <div className="text-2xl font-bold text-white">
                {metric.value}
              </div>
              <div className="text-xs text-blue-300 flex items-center justify-center">
                <span className="mr-1">{metric.icon}</span>
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Area */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link
            to="consultation"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          >
            <span>Get Started</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </Link>
          {/* <button className="px-8 py-4 bg-white/5 border border-blue-500/30 text-white font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
            <span>See Codeket in Action</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button> */}
        </motion.div>

        {/* Clients section */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm font-medium mb-4">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {[
              "Enterprise One",
              "TechGlobal",
              "InnovateCorp",
              "LeadingEdge",
            ].map((client, i) => (
              <div
                key={i}
                className="text-white/50 font-semibold text-lg flex items-center"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                {client}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column - Feature Showcase */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative"
      >
        <div className="bg-black/30 backdrop-blur-xl rounded-xl border border-blue-500/20 overflow-hidden shadow-2xl relative">
          {/* Glowing corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-indigo-500 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-violet-500 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500 rounded-br-xl"></div>

          {/* Feature Tabs */}
          <div className="grid grid-cols-4 gap-1 p-1">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="block text-2xl mb-1">{feature.icon}</span>
                <span className="text-sm font-medium truncate block">
                  {feature.title}
                </span>
              </button>
            ))}
          </div>

          {/* Feature content */}
          <div className="p-6 h-36 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeFeature === index ? 1 : 0,
                  y: activeFeature === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 px-6 ${
                  activeFeature === index
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center">
                  <span className="mr-2">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated 3D visualizer */}
          <div className="p-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 h-56 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated rings */}
              <div className="absolute w-64 h-64 border border-blue-500/30 rounded-full animate-ping-slow opacity-20"></div>
              <div
                className="absolute w-48 h-48 border border-indigo-500/30 rounded-full animate-ping-slow opacity-40"
                style={{ animationDelay: "300ms" }}
              ></div>
              <div
                className="absolute w-32 h-32 border border-cyan-500/30 rounded-full animate-ping-slow opacity-60"
                style={{ animationDelay: "600ms" }}
              ></div>

              {/* Central icon with 3D effect */}
              <motion.div
                className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-5 rounded-xl shadow-lg shadow-blue-500/20 z-10"
                whileHover={{ scale: 1.1 }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(10px) rotateX(${
                    mousePosition.y * 20
                  }deg) rotateY(${mousePosition.x * -20}deg)`,
                }}
              >
                <span className="text-4xl">{features[activeFeature].icon}</span>
              </motion.div>
            </div>

            {/* Animated dots */}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
          </div>

          {/* Feature stats */}
          <div className="grid grid-cols-3 gap-px bg-blue-900/20">
            {[
              { label: "Efficiency", value: "+75%", icon: "⚡" },
              { label: "Accuracy", value: "99.9%", icon: "🎯" },
              { label: "Time Saved", value: "3x", icon: "⏱️" },
            ].map((stat, i) => (
              <div key={i} className="bg-black/30 p-3 text-center">
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-blue-300 flex items-center justify-center">
                  <span className="mr-1">{stat.icon}</span>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badges */}
        <motion.div
          className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-lg shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <span className="text-white font-bold flex items-center">
            <span className="mr-1">🔥</span> New Gen AI
          </span>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 rounded-lg shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8, type: "spring" }}
        >
          <span className="text-white font-bold flex items-center">
            <span className="mr-1">🚀</span> 3x Faster
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
