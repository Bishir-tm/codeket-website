import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DrawParticles from "../utils/DrawParticles";
import technologies from "../utils/technologies";
import features from "../utils/features";
import Header from "./Header";
const Home = () => {
  // States
  const [activeSection, setActiveSection] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Refs
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const sectionRefs = useRef([]);

  // Code snippets
  const codeSnippets = [
    {
      language: "TypeScript",
      icon: "⚡",
      color: "from-blue-500 to-indigo-600",
      code: `// AI-powered development pipeline
import { AIModel, DevOps, CloudInfra } from '@codeket/core';

@Enterprise()
export class IntelligentPipeline implements Pipeline {
  private aiModel = new AIModel({
    learning: true,
    optimization: 'extreme'
  });
  
  async analyze(requirements: BusinessRequirement[]): Promise<Solution> {
    const analysis = await this.aiModel.process(requirements);
    return this.generateSolution(analysis);
  }
  
  @Performance(level: 'ultra')
  private generateSolution(analysis: Analysis): Solution {
    return {
      architecture: analysis.recommend(),
      timeline: analysis.estimateTime(),
      resources: analysis.optimizeResources(),
      cost: analysis.calculateTCO()
    };
  }
}`,
    },
    {
      language: "Python",
      icon: "🐍",
      color: "from-green-500 to-emerald-600",
      code: `# Advanced Data Processing System
from codeket.ai import NeuralProcessor
from codeket.cloud import DataPipeline
import numpy as np

class IntelligentDataSystem:
    def __init__(self, config):
        self.processor = NeuralProcessor(
            layers=8,
            learning_rate=0.002,
            activation='adaptive'
        )
        self.pipeline = DataPipeline(
            distributed=True,
            regions=config.regions
        )
    
    async def process_enterprise_data(self, data):
        cleaned_data = await self.pipeline.preprocess(data)
        insights = self.processor.extract_patterns(cleaned_data)
        
        return {
            'predictions': self.processor.forecast(insights),
            'recommendations': self.processor.suggest_actions(insights),
            'visualizations': self.generate_dashboards(insights)
        }`,
    },
    {
      language: "React",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-600",
      code: `// Advanced UI Component System
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCodeketAI } from '@codeket/react-hooks';

export function AdaptiveInterface({ userData, businessRules }) {
  const [layout, setLayout] = useState('default');
  const { suggestions, insights } = useCodeketAI(userData);
  
  const optimizeLayout = useCallback(() => {
    const newLayout = insights.recommendedLayout;
    setLayout(newLayout);
  }, [insights]);
  
  useEffect(() => {
    optimizeLayout();
    
    // Register real-time personalization
    return registerAdaptiveListener(userData.id, (data) => {
      updateUIElements(data.preferences);
    });
  }, [userData, optimizeLayout]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={layout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="adaptive-container"
      >
        {renderOptimizedComponents(layout, suggestions)}
      </motion.div>
    </AnimatePresence>
  );
}`,
    },
    {
      language: "Enterprise",
      icon: "🖥️",
      color: "from-purple-500 to-pink-600",
      code: `# Codeket Next-Gen Software Architecture
import { AI, Cloud, Analytics, Security } from '@codeket/enterprise';

@Injectable()
export class EnterpriseSystem {
  private readonly ai: AI.Engine;
  private readonly cloud: Cloud.Infrastructure;
  private readonly analytics: Analytics.Insights;
  private readonly security: Security.Protocol;

  constructor(config: SystemConfig) {
    this.ai = new AI.Engine({
      mode: 'proactive',
      learning: true
    });
    this.cloud = new Cloud.Infrastructure({
      scaling: 'auto',
      region: config.regions
    });
    this.analytics = new Analytics.Insights({
      realtime: true
    });
    this.security = new Security.Protocol({
      level: 'enterprise'
    });
  }

  async deploy(): Promise<DeploymentResult> {
    const optimized = await this.ai.optimize();
    const infrastructure = await this.cloud.provision();
    const monitoring = this.analytics.initialize();
    const secured = this.security.enforce();
    
    return { 
      success: true, 
      metrics: monitoring.data, 
      status: 'ready' 
    };
  }
}

// Initialize system for global deployment
const regions = ['Nigeria', 'Europe', 'Mediterranean', 'Middle East'];
const system = new EnterpriseSystem({ regions });
system.deploy().then(() => console.log('🚀 Next-gen enterprise system deployed successfully'));`,
    },
  ];

  // Project showcase data
  const projectShowcase = [
    {
      title: "Global Banking Platform",
      description:
        "AI-driven banking system serving 5M+ customers across 12 countries",
      icon: "🏦",
      stats: { development: "4 months", users: "5M+", satisfaction: "98%" },
      tech: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
      color: "from-blue-600 to-indigo-700",
    },
    {
      title: "Smart City Infrastructure",
      description:
        "IoT platform for managing urban infrastructure and services",
      icon: "🏙️",
      stats: { development: "6 months", devices: "50K+", efficiency: "+42%" },
      tech: ["Python", "React", "TensorFlow", "Azure", "MongoDB"],
      color: "from-emerald-600 to-green-700",
    },
    {
      title: "Healthcare Analytics Suite",
      description: "Predictive analytics platform for healthcare providers",
      icon: "🏥",
      stats: { development: "5 months", hospitals: "120+", accuracy: "99.2%" },
      tech: ["React", "Python", "AWS", "PostgreSQL", "Docker"],
      color: "from-red-600 to-pink-700",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, Enterprise One",
      company: "Enterprise One",
      quote:
        "Codeket delivered our banking platform in half the time we expected. The AI-driven development approach transformed our business.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Michael Chen",
      position: "Director of Innovation, TechGlobal",
      company: "TechGlobal",
      quote:
        "We've worked with many development partners, but none matched Codeket's speed and quality. Their intelligent systems are revolutionary.",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Aisha Kwame",
      position: "VP Product, InnovateCorp",
      company: "InnovateCorp",
      quote:
        "From concept to launch in just 12 weeks. Codeket's AI-powered development transformed how we build software.",
      image: "/images/testimonial-3.jpg",
    },
  ];

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Track scroll progress
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - winHeight;
      const scrollProgress = Math.min(scrollTop / totalScrollable, 1);
      setScrollProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Loading and rotation effects
  useEffect(() => {
    // Handle initial loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsVisible(true), 300);
    }, 500);

    // Rotate through code snippets
    const codeRotateInterval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % codeSnippets.length);
    }, 8000);

    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    // Auto-rotate code snippets
    const snippetInterval = setInterval(() => {
      setActiveSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(codeRotateInterval);
      clearInterval(featureInterval);
      clearInterval(snippetInterval);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-up");
              entry.target.classList.remove("opacity-0");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [isLoaded]);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-slate-900 to-indigo-950"
    >
      {/* Canvas background for particle animation */}
      {/* <DrawParticles /> */}

      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <Header />

      {/* Progressive scroll indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Main content container */}
      <div className="container relative mx-auto z-30 min-h-screen flex flex-col">
        {/* Hero Split Layout */}
        <div className="flex-1 grid md:grid-cols-2 items-center gap-8 py-12 px-6">
          {/* Left Column - Main Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
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
              Transform your business challenges into elegant software solutions
              with our cutting-edge AI technology that delivers enterprise
              software and SaaS platforms 3x faster, with unprecedented quality
              and precision.
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
                  onClick={() => {
                    setActiveTech(tech);
                    setShowModal(true);
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
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                <span>Start a Project</span>
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
              </button>
              <button
                className="px-8 py-4 bg-white/5 border border-blue-500/30 text-white font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <span>Watch Demo</span>
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
              </button>
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
                    <span className="text-4xl">
                      {features[activeFeature].icon}
                    </span>
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
                    <div className="text-lg font-bold text-white">
                      {stat.value}
                    </div>
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

        {/* Code Showcase Section */}
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className="py-24 opacity-0"
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Advanced Code Framework
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our AI-powered development framework gives you a head start with
              enterprise-grade code scaffolding for any technology stack.
            </motion.p>
          </div>

          {/* Code Tabs and Display */}
          <div className="grid md:grid-cols-5 gap-6 items-start">
            {/* Code language selector */}
            <div className="md:col-span-1 space-y-2">
              {codeSnippets.map((snippet, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                    activeSnippet === index
                      ? `bg-gradient-to-r ${snippet.color} text-white`
                      : "bg-white/5 hover:bg-white/10 text-gray-300"
                  }`}
                  onClick={() => setActiveSnippet(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <span className="text-2xl">{snippet.icon}</span>
                  <span className="font-mono font-medium">
                    {snippet.language}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Code display */}
            <div className="md:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSnippet}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={`relative bg-black rounded-xl border border-gray-800 shadow-xl overflow-hidden`}
                >
                  {/* Code header */}
                  <div
                    className={`px-4 py-3 bg-gradient-to-r ${codeSnippets[activeSnippet].color} flex justify-between items-center`}
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-2">
                        {codeSnippets[activeSnippet].icon}
                      </span>
                      <span className="font-medium text-white">
                        {codeSnippets[activeSnippet].language}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  {/* Code content */}
                  <pre className="p-6 text-sm md:text-base font-mono text-gray-300 overflow-x-auto">
                    <code>{codeSnippets[activeSnippet].code}</code>
                  </pre>

                  {/* Floating copy button */}
                  <button className="absolute top-14 right-4 bg-gray-800/80 backdrop-blur-sm p-2 rounded text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Project Showcase Section */}
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className="py-24 opacity-0"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Success Stories
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our AI-powered approach has delivered exceptional results for
              enterprise clients worldwide.
            </motion.p>
          </div>

          {/* Project cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {projectShowcase.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ translateY: -10 }}
              >
                {/* Project card glow effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r ${project.color}`}
                ></div>

                {/* Project icon */}
                <div
                  className={`w-20 h-20 flex items-center justify-center text-3xl bg-gradient-to-br ${project.color} rounded-br-xl`}
                >
                  {project.icon}
                </div>

                {/* Project content */}
                <div className="p-6 pt-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div
                        key={i}
                        className="text-center p-2 bg-white/5 rounded-lg"
                      >
                        <div className="text-blue-400 font-mono font-bold">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer with CTA */}
                <div className="p-4 border-t border-gray-800 flex justify-between items-center">
                  <span className="text-sm text-gray-400">Case Study</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center">
                    View details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span>View All Case Studies</span>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className="py-24 opacity-0"
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="text-[400px] font-bold text-blue-500">"</div>
            </div>

            <div className="relative z-10 text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Client Testimonials
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Don't take our word for it. Here's what our clients have to say
                about working with us.
              </motion.p>
            </div>

            {/* Testimonial cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 p-6 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Quotation mark */}
                  <div className="absolute top-4 right-4 text-5xl text-blue-500/20">
                    "
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 mb-6 relative z-10">
                    {testimonial.quote}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Integration Partners Section */}
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className="py-24 opacity-0"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Integration Partners
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our platform seamlessly integrates with all the tools you already
              use.
            </motion.p>
          </div>

          {/* Integration logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(12)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-gray-800 rounded-lg p-6 flex items-center justify-center h-24 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 5px 20px rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="text-white/50 text-lg font-semibold">
                  Partner {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI-Powered Process Section */}
        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className="py-24 opacity-0"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our AI-Powered Process
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Here's how we transform your business challenges into powerful
              software solutions 3x faster.
            </motion.p>
          </div>

          {/* Process timeline */}
          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Business Analysis",
                icon: "🔍",
                description:
                  "Our AI analyzes your business requirements and converts them into technical specifications.",
              },
              {
                title: "Architecture Design",
                icon: "🏗️",
                description:
                  "Intelligent systems design the optimal architecture considering scalability, performance, and security.",
              },
              {
                title: "Accelerated Development",
                icon: "⚡",
                description:
                  "AI-assisted development with pre-built components accelerates coding by 300%.",
              },
              {
                title: "Intelligent Testing",
                icon: "🧪",
                description:
                  "Automated test generation and execution with predictive issue detection.",
              },
              {
                title: "Continuous Optimization",
                icon: "📈",
                description:
                  "Real-time performance monitoring and AI-driven optimizations.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex relative pb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline connector */}
                {index < 4 && (
                  <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                    <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 pointer-events-none"></div>
                  </div>
                )}

                {/* Timeline node */}
                <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                  <span className="text-xl">{step.icon}</span>
                </div>

                {/* Content */}
                <div className="ml-6">
                  <h3 className="flex text-2xl font-bold text-white mb-2">
                    {step.title}
                    <span className="ml-2 text-gray-500 font-mono">
                      0{index + 1}
                    </span>
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div
          ref={(el) => (sectionRefs.current[5] = el)}
          className="py-24 opacity-0"
        >
          <motion.div
            className="bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 rounded-3xl border border-blue-500/20 p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>

              {/* Animated circles */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/20 animate-pulse"
                style={{ animationDelay: "500ms" }}
              ></div>
            </div>

            <div className="relative z-10">
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Transform Your <br />
                Software Development?
              </motion.h2>

              <motion.p
                className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let our AI-powered platform deliver enterprise-grade software 3x
                faster with exceptional quality and precision.
              </motion.p>

              <motion.div
                className="flex flex-col md:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-medium rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  <span>Start Your Project</span>
                  <svg
                    className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform"
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
                </button>

                <button className="px-10 py-5 bg-white/5 border border-blue-500/30 backdrop-blur-sm text-white text-xl font-medium rounded-xl hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
                  <span>Schedule Consultation</span>
                  <svg
                    className="w-6 h-6 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and info */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-px rounded-xl shadow-lg shadow-blue-500/20 inline-block mb-6">
                <div className="bg-black bg-opacity-30 backdrop-blur-sm px-6 py-3 rounded-xl">
                  <h3 className="text-xl font-mono font-medium text-white">
                    <span className="text-blue-400">&lt;</span>
                    <span className="text-white">code</span>
                    <span className="text-violet-400">ket</span>
                    <span className="text-blue-400">/&gt;</span>
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                AI-powered software development for enterprise solutions.
              </p>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "github", "youtube"].map(
                  (social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                        {social.charAt(0).toUpperCase()}
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Quick links */}
            {[
              {
                title: "Services",
                links: [
                  "AI Development",
                  "Enterprise SaaS",
                  "Digital Transformation",
                  "Cloud Solutions",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Contact"],
              },
              {
                title: "Resources",
                links: [
                  "Documentation",
                  "Case Studies",
                  "Help Center",
                  "Partners",
                ],
              },
            ].map((column, index) => (
              <div key={index} className="md:col-span-1">
                <h4 className="text-white font-bold text-lg mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Codeket. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </footer>
      </div>

      {/* Technology Modal */}
      <AnimatePresence>
        {showModal && activeTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{activeTech.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {activeTech.name}
                  </h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <p className="text-gray-300 mb-6">
                {activeTech.description ||
                  "Our AI-powered platform delivers exceptional results with this technology."}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-blue-400 font-medium mb-2">
                    Performance
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Optimized for high-speed processing and scalability.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-blue-400 font-medium mb-2">
                    Integration
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Seamlessly integrates with modern tech stacks.
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 bg-white/5 border border-gray-700 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Handle learn more action
                    setShowModal(false);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsDemoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Watch Demo</h3>
                <button
                  onClick={() => setIsDemoModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Video Player Placeholder */}
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-6">
                <video className="w-full h-full" controls autoPlay muted loop>
                  <source src="/vid.mp4" type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
              </div>

              <p className="text-gray-300 mb-6">
                See how our AI-powered platform can transform your software
                development process. Watch the demo to learn more about our
                features and capabilities.
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setIsDemoModalOpen(false)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
