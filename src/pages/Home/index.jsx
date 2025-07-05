import React from "react";
import HeroSection from "./components/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase";
import Testimonials from "./components/Testimonials";
import FinalCallToAction from "./components/FinalCallToAction";
import Process from "./components/Process";
import { testimonials } from "../../utils/testimonials";
import { projectShowcase } from "../../utils/projectShowcase";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <HeroSection />
      <ProjectShowcase projectShowcase={projectShowcase} />
      <Testimonials testimonials={testimonials} />
      <Process />
      <FinalCallToAction />
    </div>
  );
};

export default Home;
