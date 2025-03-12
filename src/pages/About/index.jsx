import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import CoreValues from "./components/CoreValues";
import Team from "./components/Team";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import OfficeLocations from "./components/OfficeLocations";
import CallToAction from "../../components/Common/CallToAction";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />
      <HeroSection y={y} />
      <VisionMission />
      <CoreValues />
      <Team />
      <Timeline />
      <Testimonials
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <Stats />s
      <OfficeLocations />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
