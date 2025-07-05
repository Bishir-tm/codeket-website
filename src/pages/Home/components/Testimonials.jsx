import React from "react";
import { testimonials } from "../../../utils/testimonials";

const Testimonials = () => (
  <div className="container mx-auto py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">What Our Valued Clients Say</h2>
      <p className="text-lg max-w-2xl mx-auto text-base-content/80">
        Hear directly from businesses that have transformed their operations and
        achieved remarkable success with Codeket's tailored software solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt="Avatar"
                />
              </div>
            </div>
            <h4 className="card-title mt-4">{testimonial.name}</h4>
            <p className="text-sm text-base-content/70">
              {testimonial.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
