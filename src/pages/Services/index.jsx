// pages/ServicePage.js
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CallToAction from "../../components/Common/CallToAction";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/Stats";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ProjectShowcase from "./components/ProjectShowcase";

const ServicePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-base-100 text-base-content ">
      <HeroSection />
      <StatsSection />
      <ServicesSection setHoveredCard={setHoveredCard} />
      <ProcessSection />
      <ProjectShowcase />
      <CallToAction />
    </div>
  );
};

export default ServicePage;
