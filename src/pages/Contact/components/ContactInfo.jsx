import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
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
          <p className="text-gray-300 mt-2 mb-2">Support Hotline (24/7):</p>
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
          <p className="text-gray-300">Saturday: 10AM - 2PM (By Appointment)</p>
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
  );
};

export default ContactInfo;
