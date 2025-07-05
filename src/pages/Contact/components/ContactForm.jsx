import React from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
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
    "Inventory Management System",
    "School Management System",
    "360° Virtual Tours",
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
    <div className="card bg-base-100 shadow-xl p-8" id="contact-form">
      <h2 className="card-title text-3xl mb-6">Send Us a Message</h2>

      {formStatus.submitted ? (
        <div
          className={`alert ${
            formStatus.isError ? "alert-error" : "alert-success"
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
        </div>
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
    </div>
  );
};

export default ContactForm;
