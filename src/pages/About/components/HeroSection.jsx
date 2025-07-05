import React from "react";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Innovating the Future of Software</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-base-content/80">
            At Codeket, we are more than just developers; we are architects of digital transformation. We craft bespoke, high-performance software solutions that empower businesses to thrive in an ever-evolving technological landscape.
          </p>
          <a href="#vision-mission" className="btn btn-primary btn-lg">
            Discover Our Story
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
