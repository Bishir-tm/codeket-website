import React, { useState, useRef, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

const ContactPage = () => {
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

  const [activeLocation, setActiveLocation] = useState(0);
  const mapRef = useRef(null);

  // Office locations data
  const locations = [
    {
      city: "San Francisco",
      address: "101 Market Street, Suite 700, San Francisco, CA 94105",
      phone: "+1 (415) 555-1234",
      email: "sf@codeket.com",
      hours: "Monday - Friday: 9AM - 6PM PST",
      mapUrl: "/images/maps/sf-map.jpg", // Replace with actual map image
      image: "/images/offices/sf.jpg",
    },
    {
      city: "Singapore",
      address: "80 Raffles Place, #43-01, Singapore 048624",
      phone: "+65 6123 4567",
      email: "sg@codeket.com",
      hours: "Monday - Friday: 9AM - 6PM SGT",
      mapUrl: "/images/maps/sg-map.jpg", // Replace with actual map image
      image: "/images/offices/singapore.jpg",
    },
    {
      city: "Berlin",
      address: "Friedrichstraße 88, 10117 Berlin, Germany",
      phone: "+49 30 1234 5678",
      email: "berlin@codeket.com",
      hours: "Monday - Friday: 9AM - 6PM CET",
      mapUrl: "/images/maps/berlin-map.jpg", // Replace with actual map image
      image: "/images/offices/berlin.jpg",
    },
  ];

  // Service options
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

  // FAQ data
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

  // Section variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center opacity-50"
        ></motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Ready to transform your ideas into reality? Reach out to our team of
            experts and let's start building the future together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="#locations"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              Visit Our Offices
            </a>
          </div>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Contact Info + Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-300 mb-2">For general inquiries:</p>
                  <a
                    href="mailto:info@codeket.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    info@codeket.com
                  </a>
                  <p className="text-gray-300 mt-2 mb-2">For support:</p>
                  <a
                    href="mailto:support@codeket.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    support@codeket.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-300 mb-2">Main Office:</p>
                  <a
                    href="tel:+14155551234"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +1 (415) 555-1234
                  </a>
                  <p className="text-gray-300 mt-2 mb-2">
                    Support Hotline (24/7):
                  </p>
                  <a
                    href="tel:+18005551234"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9AM - 6PM (Local Time)
                  </p>
                  <p className="text-gray-300">
                    Saturday: 10AM - 2PM (By Appointment)
                  </p>
                  <p className="text-gray-300">Support Team: 24/7</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/codeket"
                    className="bg-gray-800 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                  <a
                    href="https://twitter.com/codeket"
                    className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition-colors"
                  >
                    <FaTwitter className="text-white text-xl" />
                  </a>
                  <a
                    href="https://github.com/codeket"
                    className="bg-gray-800 hover:bg-gray-600 p-3 rounded-lg transition-colors"
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                  <a
                    href="https://instagram.com/codeket"
                    className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-colors"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            id="contact-form"
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
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
                      <label
                        htmlFor="name"
                        className="block text-gray-300 mb-2"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-gray-300 mb-2"
                      >
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
                      <label
                        htmlFor="company"
                        className="block text-gray-300 mb-2"
                      >
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
                      <label
                        htmlFor="subject"
                        className="block text-gray-300 mb-2"
                      >
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
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2"
                    >
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
          </motion.div>
        </div>

        {/* Office Locations Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          id="locations"
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-center mb-4">Our Offices</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Visit us at one of our global offices. We'd love to meet you in
            person and discuss how we can work together.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {locations.map((location, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveLocation(index)}
                className={`p-6 rounded-xl text-left transition-all ${
                  activeLocation === index
                    ? "bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
                <p className="text-gray-300">{location.address}</p>
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-900 p-8 rounded-2xl border border-gray-800">
            {/* Map or Office Image */}
            <div className="relative h-80 lg:h-auto overflow-hidden rounded-xl">
              <img
                ref={mapRef}
                src={locations[activeLocation].image}
                alt={`${locations[activeLocation].city} Office`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-blue-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="font-bold text-lg">
                  {locations[activeLocation].city}
                </h3>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">
                    {locations[activeLocation].address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-900 p-3 rounded-lg flex-shrink-0">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <a
                    href={`tel:${locations[activeLocation].phone}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {locations[activeLocation].phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-900 p-3 rounded-lg flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a
                    href={`mailto:${locations[activeLocation].email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {locations[activeLocation].email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-900 p-3 rounded-lg flex-shrink-0">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-300">
                    {locations[activeLocation].hours}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    locations[activeLocation].address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-32"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Get quick answers to common questions about working with us.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Whether you're looking to build a new product, enhance an existing
            system, or explore cutting-edge technologies, our team is here to
            help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg"
            >
              Contact Us Today
            </a>
            <a
              href="/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors shadow-lg"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
