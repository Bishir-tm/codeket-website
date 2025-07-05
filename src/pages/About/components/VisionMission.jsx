import React from "react";

const VisionMission = () => {
  return (
    <div id="vision-mission" className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src="/images/office1.jpg" alt="Our Vision" />
          </figure>
          <div className="card-body justify-center items-center text-center">
            <h2 className="card-title text-primary text-4xl">Our Vision</h2>
            <p className="text-lg text-white">
              To be the leading innovator in custom software development, empowering businesses worldwide with cutting-edge, scalable, and intuitive digital solutions that drive unparalleled growth and efficiency.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src="/images/office2.jpg" alt="Our Mission" />
          </figure>
          <div className="card-body justify-center items-center text-center">
            <h2 className="card-title text-secondary text-4xl">Our Mission</h2>
            <p className="text-lg text-white">
              To deliver exceptional value through meticulously crafted software, fostering long-term partnerships, and continuously pushing the boundaries of technological excellence to meet and exceed our clients' evolving needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
