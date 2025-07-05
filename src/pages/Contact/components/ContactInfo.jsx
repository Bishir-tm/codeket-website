import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="card bg-base-100 shadow-xl p-8">
      <h2 className="card-title text-3xl mb-6">Get in Touch</h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="text-primary text-3xl">
            <FaEnvelope />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email Us</h3>
            <a
              href="mailto:contact@codeket.com"
              className="link link-hover text-base-content/80"
            >
              contact@codeket.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-secondary text-3xl">
            <FaPhoneAlt />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <a
              href="tel:+2349068149540"
              className="link link-hover text-base-content/80"
            >
              +(234) 9068-149-540
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-accent text-3xl">
            <FaClock />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Business Hours</h3>
            <p className="text-base-content/80">
              Monday - Friday: 9 AM - 5 PM (WAT)
            </p>
            <p className="text-base-content/80">Saturday: 10 AM - 2 PM (WAT)</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/company/codeket"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle text-primary"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/codeketofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle text-secondary"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
