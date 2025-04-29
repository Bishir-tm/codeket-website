import React from "react";
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
      { name: "Cloud Solutions", to: "/services#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", to: "/about" },
      { name: "Services", to: "/services" },
      { name: "Blog", to: "#" },
      { name: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", to: "/case-studies" },
      { name: "Help Center", to: "#" },
      { name: "Partners", to: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t mt-12 border-gray-800 flex flex-col pt-12 px-4 md:px-6 lg:px-8">
      <div className="flex w-full flex-col md:flex-row justify-between gap-8">
        {/* Logo and info */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <div>
            <img
              src="./images/logo-silver-bg.png"
              className="w-full max-w-[250px] md:max-w-[300px] h-auto"
              alt="Codeket Logo"
            />
            <p className="text-gray-400 mb-6 mx-0 px-0  max-w-md text-center">
              AI-powered software development for enterprise solutions.
            </p>
          </div>
          <div className="flex space-x-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-700 p-3 rounded-lg transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links section - Forcing 2 columns with custom styling */}
        <div className="w-full ">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
            {quickLinks.map((column, index) => (
              <div key={index} className="min-w-[120px]">
                <h4 className="text-white font-bold text-lg mb-4 text-left">
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
        </div>
      </div>

      <div className="border-t w-full border-gray-800 my-6 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center">
            {legals.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="text-gray-500 hover:text-white border-b text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-gray-500 my-12 text-sm text-center">
          © {new Date().getFullYear()} Codeket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
