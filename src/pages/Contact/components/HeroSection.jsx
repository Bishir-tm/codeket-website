import React from "react";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Let's Build Something Amazing Together</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-base-content/80">
            Ready to transform your ideas into powerful software solutions? Whether you have a clear vision or need expert guidance, our team is here to help. Reach out today and let's start a conversation that drives innovation.
          </p>
          <a href="#contact-form" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
