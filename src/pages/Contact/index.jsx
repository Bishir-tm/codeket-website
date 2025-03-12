import React, { useState, useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "./components/HeroSection";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import OfficeLocations from "./components/OfficeLocations";
import CallToAction from "../../components/Common/CallToAction";
import FAQSection from "./components/FAQSection";

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

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

  const locations = [
    {
      city: "San Francisco",
      address: "101 Market Street, Suite 700, San Francisco, CA 94105",
      phone: "+1 (415) 555-1234",
      email: "sf@codeket.com",
      hours: "Monday - Friday: 9AM - 6PM PST",
      mapUrl: "/images/maps/sf-map.jpg",
      image: "/images/offices/sf.jpg",
    },
    {
      city: "Singapore",
      address: "80 Raffles Place, #43-01, Singapore 048624",
      phone: "+65 6123 4567",
      email: "sg@codeket.com",
      hours: "Monday - Friday: 9AM - 6PM SGT",
      mapUrl: "/images/maps/sg-map.jpg",
      image: "/images/offices/singapore.jpg",
    },
    {
      city: "Berlin",
      address: "Friedrichstraße 88, 10117 Berlin, Germany",
      phone: "+49 30 1234 5678",
      email: "berlin@codeket.com",
      hours: "Monday - Friday: 9AM - 6PM CET",
      mapUrl: "/images/maps/berlin-map.jpg",
      image: "/images/offices/berlin.jpg",
    },
  ];

  const faqs = [
    {
      question: "What information should I provide in my initial inquiry?",
      answer:
        "To help us respond effectively to your inquiry, please include details about your project scope, timeline, budget expectations, and any specific technical requirements or challenges you're facing.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate this in your message subject line.",
    },
    {
      question: "Do you offer consultations before committing to a project?",
      answer:
        "Yes, we offer free initial consultations to discuss your project needs and determine if we're the right fit for your requirements. This can be conducted via video call, phone, or in person at one of our offices.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. After our initial consultation, we'll provide a detailed project plan with milestones and expected delivery dates. We pride ourselves on transparent communication throughout the process.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "Absolutely! With offices in North America, Asia, and Europe, we serve clients globally. Our team is experienced in working across time zones and can adapt to your communication preferences.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />
      <HeroSection y={y} />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <ContactInfo />
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
            handleSubmit={handleSubmit}
            formStatus={formStatus}
          />
        </div>
        <OfficeLocations locations={locations} />
        <FAQSection faqs={faqs} />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
