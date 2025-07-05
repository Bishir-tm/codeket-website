import React from "react";
import { motion } from "framer-motion";
import Gif from "../../../components/Common/Gif";

const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    client: "Retail Stores & Supermarkets",
    description:
      "A purpose-built inventory management system that provides real-time stock tracking, low-stock alerts, and supplier management.",
    gifSrc: "./images/ims.gif",
    staticSrc: "./images/1i.png",
  },
  {
    id: 2,
    title: "School Management System",
    client: "Private Schools",
    description:
      "An all-in-one solution for private schools to manage admissions, fees, and student records without the complexity of large-scale ERPs.",
    gifSrc: "./images/sms.gif",
    staticSrc: "./images/1l.png",
  },
  {
    id: 3,
    title: "360° Virtual Tours",
    client: "Real Estate Agencies",
    description:
      "Branded, interactive virtual tours for real estate agencies to showcase properties and engage clients.",
    gifSrc: "./images/vtu.gif",
    staticSrc: "./images/1v.png",
  },
];

const ProjectShowcase = () => {
  return (
    <div className="py-24 px-6 bg-base-200" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Work in Action
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            See how our focused software solutions are making a difference for businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-base-content/70 mb-2">Client: {project.client}</p>
                <p className="text-xl text-base-content/80 mb-6">
                  {project.description}
                </p>
              </div>

              <div
                className={`  overflow-hidden aspect-video flex items-center justify-center ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Gif
                  gifSrc={project.gifSrc}
                  staticSrc={project.staticSrc}
                  alt="Funny GIF"
                  className="rounded-2xl w-full h-full" // Adjust size with Tailwind or CSS
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
