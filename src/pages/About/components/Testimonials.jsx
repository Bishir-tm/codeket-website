import React from "react";
import { testimonials } from "../../../utils/testimonials";

const Testimonials = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Hear From Our Satisfied Clients</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Our success is measured by the success of our clients. Read what they have to say about partnering with Codeket.
        </p>
      </div>

      <div className="carousel w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className="carousel-item w-full flex justify-center"
          >
            <div className="card w-3/4 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src={`https://picsum.photos/id/${200 + index}/800/400`}
                  alt="Testimonial Background"
                />
              </figure>
              <div className="card-body items-center text-center">
                <p className="text-xl italic mb-4 text-white">
                  "{testimonial.quote}"
                </p>
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={testimonial.image || `https://i.pravatar.cc/150?img=${index + 1}`}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <h4 className="card-title mt-4 text-white">{testimonial.name}</h4>
                <p className="text-sm text-white/80">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {testimonials.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
