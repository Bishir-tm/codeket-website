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
    <div id="custom-quote" className="py-24 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
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
                  <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                  <p className="text-base-content/70">
                    Advanced security features designed for enterprise
                    compliance requirements, including SSO, role-based access
                    controls, and encrypted data storage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-secondary/20 p-3 rounded-lg">
                  <FaHeadset className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-base-content/70">
                    Get priority access to our expert support team with 24/7
                    availability and a dedicated account manager to ensure your
                    success.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-accent/20 p-3 rounded-lg">
                  <FaCode className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Development</h3>
                  <p className="text-base-content/70">
                    Tailor our platform to your specific needs with custom
                    development services, integrations, and workflow
                    automations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-base-100 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <FaCreditCard className="text-primary mr-3 text-xl" />
                <h3 className="text-xl font-bold">No commitment required</h3>
              </div>
              <p className="text-base-content/70">
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
            className="card bg-base-100 shadow-xl p-8"
          >
            {formStatus.submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`alert ${
                  formStatus.isError
                    ? "alert-error"
                    : "alert-success"
                }`}
              >
                {formStatus.isError ? (
                  <FaExclamationTriangle className="text-2xl" />
                ) : (
                  <FaCheckCircle className="text-2xl" />
                )}
                <span>{formStatus.message}</span>
                <div>
                  <button onClick={resetForm} className="btn btn-sm btn-primary">
                    {formStatus.isError ? "Try Again" : "Send Another Message"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Your Name <span className="text-error">*</span></span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className={`input input-bordered w-full ${
                        formErrors.name ? "input-error" : ""
                      }`}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.name && (
                      <div className="label">
                        <span className="label-text-alt text-error">{formErrors.name}</span>
                      </div>
                    )}
                  </label>

                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Email Address <span className="text-error">*</span></span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className={`input input-bordered w-full ${
                        formErrors.email ? "input-error" : ""
                      }`}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.email && (
                      <div className="label">
                        <span className="label-text-alt text-error">{formErrors.email}</span>
                      </div>
                    )}
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Company</span>
                    </div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company"
                      className="input input-bordered w-full"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Subject <span className="text-error">*</span></span>
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      className={`input input-bordered w-full ${
                        formErrors.subject ? "input-error" : ""
                      }`}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.subject && (
                      <div className="label">
                        <span className="label-text-alt text-error">{formErrors.subject}</span>
                      </div>
                    )}
                  </label>
                </div>

                <div className="mb-6">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Services You're Interested In</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((service, index) => (
                        <label key={index} className="label cursor-pointer">
                          <span className="label-text">{service}</span>
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            className="checkbox checkbox-primary"
                          />
                        </label>
                      ))}
                    </div>
                  </label>
                </div>

                <label className="form-control w-full mb-6">
                  <div className="label">
                    <span className="label-text">Your Message <span className="text-error">*</span></span>
                  </div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    className={`textarea textarea-bordered h-24 ${
                      formErrors.message ? "textarea-error" : ""
                    }`}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {formErrors.message && (
                    <div className="label">
                      <span className="label-text-alt text-error">{formErrors.message}</span>
                    </div>
                  )}
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner"></span>
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
