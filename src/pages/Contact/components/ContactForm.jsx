import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = ({
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleSubmit,
  formStatus,
}) => {
  const serviceOptions = [
    "Custom Software Development",
    "AI & Machine Learning",
    "Cloud Infrastructure",
    "Mobile App Development",
    "UI/UX Design",
    "DevOps & Automation",
    "Cybersecurity",
    "Blockchain Solutions",
  ];

  return (
    <div
      className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl relative overflow-hidden"
      id="contact-form"
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>

      <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

      {formStatus.submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-900/30 border border-green-500 text-green-200 rounded-lg p-6 text-center"
        >
          <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
          <p>{formStatus.message}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="company" className="block text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              Services You're Interested In
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map((service, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-${index}`}
                    checked={formData.services.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="w-4 h-4 mr-2 accent-blue-500"
                  />
                  <label
                    htmlFor={`service-${index}`}
                    className="text-gray-300 text-sm"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
