import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const legals = [
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of Service", link: "/terms-of-service" },
  { name: "Cookie Policy", link: "/cookie-policy" },
];

const socials = [
  { name: "Twitter", link: "#" },
  { name: "LinkedIn", link: "#" },
  { name: "Instagram", link: "#" },
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
    <footer className="border-t mt-12 border-gray-800 flex items-center justify-around flex-col  pt-12">
      <div className="flex w-full justify-evenly gap-12">
        {/* Logo and info */}
        <div className="md:col-span-1">
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-px rounded-xl shadow-lg shadow-blue-500/20 inline-block mb-6">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm px-6 py-3 rounded-xl">
              <h3 className="text-xl font-mono font-medium text-white">
                <span className="text-blue-400">&lt;</span>
                <span className="text-white">code</span>
                <span className="text-violet-400">ket</span>
                <span className="text-blue-400">/&gt;</span>
              </h3>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            AI-powered software development for enterprise solutions.
          </p>
          <div className="flex space-x-4">
            {socials.map((social, i) => (
              <Link
                key={i}
                to={social.link}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">{social.name}</span>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  {social.name.charAt(0).toUpperCase()}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick links */}
        {quickLinks.map((column, index) => (
          <div key={index} className="md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">
              {column.title}
            </h4>
            <ul className="space-y-3">
              {column.links.map((link, i) => (
                <li key={i}>
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

      <div className="border-t w-full text-center border-gray-800 my-6 pt-8  justify-between items-center">
        <p className="text-gray-500 text-sm my-4 ">
          © 2025 Codeket. All rights reserved.
        </p>
        <div className="space-x-6 w-full">
          {legals.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="text-gray-500 text-center w-full hover:text-white text-sm transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
