import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import CoreValues from "./components/CoreValues";
import Team from "./components/Team";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import CallToAction from "../../components/Common/CallToAction";

const About = () => {
  const { scrollYProgress } = useScroll();

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-base-100 text-base-content ">
      <HeroSection />
      <VisionMission />
      <CoreValues />
      <Team />
      <Timeline />
      <Testimonials
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <Stats />
      <CallToAction />
    </div>
  );
};

export default About;
