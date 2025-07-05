import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Comprehensive Software Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-base-content/80">
            From custom enterprise applications to specialized SaaS products, Codeket offers a full spectrum of software development services designed to meet your unique business challenges and drive innovation.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
