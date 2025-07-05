import React from "react";
import CallToAction from "../../components/Common/CallToAction";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/Stats";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ProjectShowcase from "./components/ProjectShowcase";

const ServicePage = () => {
  return (
    <div className="bg-base-200">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectShowcase />
      <CallToAction />
    </div>
  );
};

export default ServicePage;
