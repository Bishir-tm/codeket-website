import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Flexible Pricing for Every Business</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-base-content/80">
            At Codeket, we believe in transparent and adaptable pricing models that cater to your specific needs, ensuring you get maximum value without compromising on quality or features.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="#pricing-plans" className="btn btn-primary btn-lg">
              View Our Plans
            </Link>
            <Link to="#custom-quote" className="btn btn-outline btn-lg">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
