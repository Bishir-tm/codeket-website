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
    <div className="flex-1 grid md:grid-cols-2 items-center">
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
              Software Development
            </span>
            <span className="block text-base-content mt-2">
              At{" "}
              <span className="relative inline-block">
                Lightspeed
                <motion.div
                  className="absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full"
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                ></motion.div>
              </span>
            </span>
            <span className="block text-base-content mt-2">Powered by AI</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base-content/80 text-lg md:text-xl max-w-xl"
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
              className="bg-base-100/5 border border-base-content/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center space-x-2 hover:bg-base-100/10 transition-all"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-base-content text-sm">{tech.name}</span>
            </motion.button>
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
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
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
          className="pt-8 mb-10 lg:mb-0  "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <p className="text-base-content/70 text-sm font-medium mb-4">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {[
              "Channel Telecoms",
              "Global Systems Ltd",
              "Smart Analytics Inc.",
              "LeadingEdge",
            ].map((client, i) => (
              <div
                key={i}
                className="text-base-content/80 font-semibold text-lg flex items-center"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
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
        className=" h-full w-full object-cover xl:relative xl:  top-32"
      >
        <div className="bg-neutral/30 backdrop-blur-xl rounded-xl border border-primary/20 overflow-hidden shadow-2xl relative w-full shadow-primary/20">
          {/* Glowing corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-secondary rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-xl"></div>

          {/* Feature Tabs */}
          <div className="grid grid-cols-4 gap-1 p-1 border-b-2 border-primary ">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-primary to-accent text-base-content"
                    : "text-base-content/70 hover:text-base-content hover:bg-base-100/5"
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
          <div className="p-6 h-36 relative text-center ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeFeature === index ? 1 : 0,
                  y: activeFeature === index ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute flex flex-col items-center  inset-0 px-6 ${
                  activeFeature === index
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                } text-center`}
              >
                <h1 className="text2xl md:text-4xl font-bold text-base-content mb-2 tesxt-center">
                  <div className="mr-2 text-center">{feature.icon}</div>
                  {feature.title}
                </h1>
                <p className="text-base-content/80 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Feature stats */}
          {/* <div className="grid grid-cols-3 gap-px bg-blue-900/20">
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
          </div> */}
        </div>
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
              className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 rounded-lg p-3 text-center"
            >
              <div className="text-2xl font-bold text-base-content">
                {metric.value}
              </div>
              <div className="text-xs text-secondary flex items-center justify-center">
                <span className="mr-1">{metric.icon}</span>
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
