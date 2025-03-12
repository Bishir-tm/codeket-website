import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import technologies from "../../utils/technologies";
import features from "../../utils/features";
import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import CodeShowcase from "./components/CodeShowcase";
import ProjectShowcase from "./components/ProjectShowcase";
import Testimonials from "./components/Testimonials";
import FinalCallToAction from "./components/FinalCallToAction";
import IntegrationPartners from "./components/IntegrationPartners";
import Process from "./components/Process";
import Footer from "../../components/Footer";
import codeSnippets from "../../utils/codeSnippets";
import { testimonials } from "../../utils/testimonials";
import { projectShowcase } from "../../utils/projectShowcase";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const sectionRefs = useRef([]);

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
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-slate-900 to-indigo-950"
    >
      <Header />
      <div className="container relative mx-auto z-30 min-h-screen flex flex-col">
        <HeroSection mousePosition={mousePosition} isLoaded={isLoaded} />
        <CodeShowcase codeSnippets={codeSnippets} />
        <ProjectShowcase projectShowcase={projectShowcase} />
        <Testimonials testimonials={testimonials} />
        <IntegrationPartners />
        <Process />
        <FinalCallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
