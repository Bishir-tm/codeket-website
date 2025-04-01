import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const legals = [
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of Service", link: "/terms-of-service" },
  { name: "Cookie Policy", link: "/cookie-policy" },
];

const socials = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/company/codeket",
    icon: <FaLinkedin className="text-white text-xl" />,
  },
  {
    name: "Twitter/X",
    link: "https://x.com/codeketofficial",
    icon: <FaTwitter className="text-white text-xl" />,
  },
];

const quickLinks = [
  {
    title: "Services",
    links: [
      { name: "AI Development", to: "/services#services" },
      { name: "Enterprise SaaS", to: "/services#services" },
      {
        name: "Digital Transformation",
        to: "/services#digital-transformation",
      },
      { name: "Cloud Solutions", to: "/services#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", to: "/about" },
      { name: "Careers", to: "#" },
      { name: "Blog", to: "#" },
      { name: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", to: "#" },
      { name: "Case Studies", to: "/case-studies" },
      { name: "Help Center", to: "#" },
      { name: "Partners", to: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t mt-12 border-gray-800 flex items-center justify-around flex-col pt-12 px-4 md:px-6 lg:px-8">
      <div className="flex w-full flex-col md:flex-row justify-between gap-8">
        {/* Logo and info */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div>
            <img
              src="./images/logo-silver-bg.png"
              className="w-full max-w-[300px] md:max-w-[400px] h-auto"
            />
          </div>
          <p className="text-gray-400 mb-6 text-center md:text-left">
            AI-powered software development for enterprise solutions.
          </p>
          <div className="flex space-x-4">
            {socials.map((social, i) => (
              <div key={i} className="flex space-x-4">
                <a
                  href={social.link}
                  target="_blank"
                  className="bg-gray-800 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                >
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {quickLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-bold text-lg mb-4 text-center md:text-left">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i} className="text-center md:text-left">
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t w-full border-gray-800 my-6 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Codeket. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            {legals.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="text-gray-500 text-center hover:text-white text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
