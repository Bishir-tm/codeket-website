import React from "react";
import { Link } from "react-router-dom";

const ProjectShowcase = ({ projectShowcase }) => {
  console.log(projectShowcase);
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Flagship Solutions</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Discover how our tailored software empowers businesses to achieve
          operational excellence and unlock new growth opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projectShowcase.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="./images/api-dev.jpg"
                alt="Project Thumbnail"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                {project.tech && project.tech.map((item, i) => (
                  <div key={i} className="badge badge-outline">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="btn btn-primary btn-lg">
          Explore All Our Services
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectShowcase;
