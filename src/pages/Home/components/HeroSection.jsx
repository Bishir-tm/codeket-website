import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            <span className="block text-primary">Unlock Your Business's</span>
            <span className="block text-secondary mt-2">Full Potential</span>
          </h1>
          <p className="py-6">
            At Codeket, we craft bespoke software solutions that streamline your
            operations, enhance efficiency, and drive growth. From intuitive web
            applications to robust enterprise systems, we build the tools you
            need to succeed in a competitive digital landscape.
          </p>
          <Link to="/consultation" className="btn btn-primary btn-lg">
            Get a Free Consultation
          </Link>
          <div className="pt-8">
            <p className="text-sm font-medium mb-4 text-base-content/70">
              Trusted by businesses in diverse sectors:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                "Retail",
                "Education",
                "Real Estate",
                "Healthcare",
                "Logistics",
              ].map((client, i) => (
                <span key={i} className="badge badge-outline badge-lg">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
