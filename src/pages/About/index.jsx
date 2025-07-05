import React from "react";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import CoreValues from "./components/CoreValues";
import Team from "./components/Team";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import CallToAction from "../../components/Common/CallToAction";

const About = () => {
  return (
    <div className="bg-base-200">
      <HeroSection />
      <VisionMission />
      <CoreValues />
      <Team />
      <Timeline />
      <Testimonials />
      <Stats />
      <CallToAction />
    </div>
  );
};

export default About;
