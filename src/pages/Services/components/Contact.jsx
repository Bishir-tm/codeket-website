// components/ContactSection.js
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineGlobe, HiOutlineChip } from "react-icons/hi";

const ContactSection = () => {
  return (
    <div id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to discuss your enterprise needs? Fill out the form, and our
              team will get back to you within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <HiOutlineGlobe className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Headquarters</h3>
                  <p className="text-gray-300">
                    Lagos, Nigeria • London, UK • Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <HiOutlineChip className="text-purple-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Technology Partners
                  </h3>
                  <p className="text-gray-300">
                    AWS • Google Cloud • Microsoft Azure • IBM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Our Global Presence</h3>
              <div className="bg-gray-800 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-gray-400">World Map with Location Markers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                    <option>Enterprise Software Development</option>
                    <option>Inventory Management System</option>
                    <option>Mobile App Development</option>
                    <option>AI-Driven Cloud Solutions</option>
                    <option>Data Analytics & BI</option>
                    <option>Cybersecurity Services</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white h-32"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg py-4"
                >
                  Submit Request
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
