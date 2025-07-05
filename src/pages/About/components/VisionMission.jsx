import React, { useRef } from "react";
import { motion } from "framer-motion";

const VisionMission = () => {
  const videoRef = useRef(null);

  return (
    <div id="our-story" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-base-content/80 mb-8">
              To create a world where technology empowers every individual and
              organization to achieve their fullest potential.
            </p>

            <h2 className="text-4xl font-bold mb-6 mt-12">Our Mission</h2>
            <p className="text-xl text-base-content/80">
              To empower businesses with cutting-edge technology solutions that
              drive innovation, efficiency, and sustainable growth in an
              increasingly connected world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <video
              ref={videoRef}
              className="w-full h-auto rounded-xl shadow-2xl border border-neutral-focus"
              autoPlay
              loop
              muted
              playsInline
              poster="/images/office2.jpg"
            >
              <source src="/videos/about-us.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
