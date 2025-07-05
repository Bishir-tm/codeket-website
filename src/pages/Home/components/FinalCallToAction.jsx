import React from "react";
import { Link } from "react-router-dom";

const FinalCallToAction = () => {
  return (
    <div className="hero bg-base-200 py-16">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Business with Custom Software?
          </h2>
          <p className="text-xl mb-12 text-base-content/80">
            Partner with Codeket to build innovative, scalable, and efficient
            software solutions tailored to your unique needs. Let's turn your
            vision into a powerful digital reality.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/consultation" className="btn btn-primary btn-lg">
              Get a Free Consultation
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCallToAction;
