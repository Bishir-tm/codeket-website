import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHeadset, FaCode, FaCreditCard } from "react-icons/fa";

// Enterprise Quote Form
const CustomQuoteForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    services: [],
    message: "",
  });

  const [formStatus, setFormStatus] = React.useState({
    submitted: false,
    isError: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleCheckboxChange = (service) => {
    setFormData((prevData) => {
      const updatedServices = prevData.services.includes(service)
        ? prevData.services.filter((s) => s !== service)
        : [...prevData.services, service];

      return {
        ...prevData,
        services: updatedServices,
      };
    });
  };

  // Client-side validation before submission
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email";
      }
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Form data before sending:", formData);
      // Send email via API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response from server:", response);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      // Successfully sent
      setFormStatus({
        submitted: true,
        isError: false,
        message: "Thanks for your message! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        services: [],
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        submitted: true,
        isError: true,
        message:
          error.message || "Unable to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormStatus({
      submitted: false,
      isError: false,
      message: "",
    });
    setFormErrors({});
  };

  return (
    <div id="custom-quote" className="py-24 px-6 bg-neutral">
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
            <p className="text-xl text-base-content/80 mb-8">
              Need a tailored solution for your business? Contact us for a
              custom quote that meets your specific requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/20 p-3 rounded-lg">
                  <FaShieldAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-base-content/80">
                    Advanced security features designed for enterprise
                    compliance requirements, including SSO, role-based access
                    controls, and encrypted data storage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-accent/20 p-3 rounded-lg">
                  <FaHeadset className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-base-content/80">
                    Get priority access to our expert support team with 24/7
                    availability and a dedicated account manager to ensure your
                    success.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-secondary/20 p-3 rounded-lg">
                  <FaCode className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Development</h3>
                  <p className="text-base-content/80">
                    Tailor our platform to your specific needs with custom
                    development services, integrations, and workflow
                    automations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/20 border border-primary/30 rounded-xl">
              <div className="flex items-center mb-4">
                <FaCreditCard className="text-primary mr-3 text-xl" />
                <h3 className="text-xl font-bold">No commitment required</h3>
              </div>
              <p className="text-base-content/80">
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
            className="bg-neutral-focus rounded-xl p-8 border border-neutral"
          >
            {formStatus.submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`${
                  formStatus.isError
                    ? "bg-error/30 border-error text-error-content"
                    : "bg-success/30 border-success text-success-content"
                } border rounded-lg p-6 text-center`}
              >
                {formStatus.isError ? (
                  <FaExclamationTriangle className="text-error text-5xl mx-auto mb-4" />
                ) : (
                  <FaCheckCircle className="text-success text-5xl mx-auto mb-4" />
                )}
                <h3 className="text-2xl font-semibold mb-2">
                  {formStatus.isError ? "Error" : "Message Sent!"}
                </h3>
                <p>{formStatus.message}</p>
                {formStatus.isError && (
                  <button
                    onClick={resetForm}
                    className="mt-4 px-6 py-2 bg-error text-white rounded-lg hover:bg-error-focus transition-colors"
                  >
                    Try Again
                  </button>
                )}
                {!formStatus.isError && (
                  <button
                    onClick={resetForm}
                    className="mt-4 px-6 py-2 bg-success text-white rounded-lg hover:bg-success-focus transition-colors"
                  >
                    Send Another Message
                  </button>
                )}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-base-content/80 mb-2">
                      Your Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-neutral-focus border ${
                        formErrors.name ? "border-error" : "border-neutral"
                      } rounded-lg focus:outline-none focus:border-primary transition-colors`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <p className="text-error text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base-content/80 mb-2">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-neutral-focus border ${
                        formErrors.email ? "border-error" : "border-neutral"
                      } rounded-lg focus:outline-none focus:border-primary transition-colors`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-error text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-base-content/80 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-focus border border-neutral rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-base-content/80 mb-2"
                    >
                      Subject <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-neutral-focus border ${
                        formErrors.subject
                          ? "border-error"
                          : "border-neutral"
                      } rounded-lg focus:outline-none focus:border-primary transition-colors`}
                      placeholder="Project Inquiry"
                    />
                    {formErrors.subject && (
                      <p className="text-error text-sm mt-1">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-base-content/80 mb-2">
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
                          className="w-4 h-4 mr-2 accent-primary"
                        />
                        <label
                          htmlFor={`service-${index}`}
                          className="text-base-content/80 text-sm"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-base-content/80 mb-2">
                    Your Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-neutral-focus border ${
                      formErrors.message ? "border-error" : "border-neutral"
                    } rounded-lg focus:outline-none focus:border-primary transition-colors resize-none`}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-error text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-primary to-accent text-base-content font-semibold rounded-lg transition-all duration-300 shadow-lg ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:from-primary-focus hover:to-accent-focus"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-base-content"
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
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CustomQuoteForm;
