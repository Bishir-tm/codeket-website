import React from "react";
import { timeline } from "../../../utils/timeline";

const Timeline = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Journey Through Innovation</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Explore the key milestones and achievements that have shaped Codeket into a leader in custom software development.
        </p>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timeline.map((item, index) => (
          <li key={index}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${
                index % 2 === 0 ? "start md:text-end" : "end"
              } mb-10`}
            >
              <time className="font-mono italic text-primary">{item.year}</time>
              <div className="text-lg font-black">{item.event}</div>
              <p className="text-base-content/70">{item.description}</p>
            </div>
            {index < timeline.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
