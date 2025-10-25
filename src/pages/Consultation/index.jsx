import React, { useState, useEffect } from "react";
import ContactForm from "../Contact/components/ContactForm";
import ContactInfo from "../Contact/components/ContactInfo";

const index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    services: [],
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((item) => item !== service)
      : [...formData.services, service];

    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Thank you for reaching out! Our team will contact you within 24 hours.",
    });

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        services: [],
      });
    }, 5000);
  };

  return (
    <div className="bg-base-100 text-base-content ">
      <h1 className="my-12 font-bold text-center text-4xl lg:text-5xl">
        We reply within 2 minutes
      </h1>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default index;
