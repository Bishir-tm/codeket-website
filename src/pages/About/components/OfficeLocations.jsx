import React from "react";
import { motion } from "framer-motion";
import { locations } from "../../../utils/officeLocations";

const OfficeLocations = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Global Presence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With offices across the globe, we're positioned to serve clients
            wherever they are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{location.city}</h3>
                <p className="text-gray-300 mt-4">{location.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;
