import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHeadset, FaCode, FaCreditCard } from "react-icons/fa";

// Enterprise Quote Form
const CustomQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        phone: "",
        message: "",
        newsletter: false,
      });
    }, 1500);
  };

  const employeeRanges = [
    { value: "", label: "Select company size" },
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501-1000", label: "501-1000 employees" },
    { value: "1000+", label: "1000+ employees" },
  ];

  return (
    <div id="custom-quote" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Get a Custom Quote
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Need a tailored solution for your business? Contact us for a
              custom quote that meets your specific requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-500/20 p-3 rounded-lg">
                  <FaShieldAlt className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-300">
                    Advanced security features designed for enterprise
                    compliance requirements, including SSO, role-based access
                    controls, and encrypted data storage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-purple-500/20 p-3 rounded-lg">
                  <FaHeadset className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-gray-300">
                    Get priority access to our expert support team with 24/7
                    availability and a dedicated account manager to ensure your
                    success.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-teal-500/20 p-3 rounded-lg">
                  <FaCode className="text-teal-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Development</h3>
                  <p className="text-gray-300">
                    Tailor our platform to your specific needs with custom
                    development services, integrations, and workflow
                    automations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl">
              <div className="flex items-center mb-4">
                <FaCreditCard className="text-blue-400 mr-3 text-xl" />
                <h3 className="text-xl font-bold">No commitment required</h3>
              </div>
              <p className="text-gray-300">
                Our custom quotes come with no obligation. We'll work with you
                to understand your needs and provide transparent pricing
                options.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
          >
            {formStatus.isSubmitted ? (
              <div className="text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 mb-6"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-300 mb-8">
                  We've received your request and our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() =>
                    setFormStatus((prev) => ({ ...prev, isSubmitted: false }))
                  }
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-gray-300 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="employees"
                      className="block text-gray-300 mb-2"
                    >
                      Company Size *
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                      {employeeRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Tell us about your needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your requirements and any specific features you're interested in..."
                  ></textarea>
                </div>

                <div className="mb-8">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded bg-gray-700 border-gray-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-300 text-sm">
                      I'd like to receive occasional updates about products,
                      features, and industry news via email.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span>Get Custom Quote</span>
                  )}
                </button>

                <p className="text-gray-400 text-sm text-center mt-4">
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CustomQuoteForm;
