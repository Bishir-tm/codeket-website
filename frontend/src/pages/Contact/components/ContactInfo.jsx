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
    <div className="space-y-8" id="contact-info">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-500 p-3 rounded-lg">
          <FaEnvelope className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Email Us</h3>

          <a
            href="mailto:contact@codeket.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            contact@codeket.com
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
            href="tel:+2349068149540"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            +(234) 9068-149-540
          </a>
          <p className="text-gray-300 mt-2 mb-2">Support Hotline (24/7)</p>
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
            href="https://twitter.com/codeketofficial"
            className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition-colors"
          >
            <FaTwitter className="text-white text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
