import React from "react";
import { coreValues } from "../../../utils/coreValues";

const CoreValues = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Guiding Principles</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Our commitment to excellence is built upon a foundation of strong values that drive every aspect of our work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreValues.map((value, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-5xl mb-4 text-primary">{value.icon}</div>
              <h3 className="card-title text-2xl mb-2">{value.title}</h3>
              <p className="text-base-content/70">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
