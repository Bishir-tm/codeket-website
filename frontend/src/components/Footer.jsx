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
      { name: "Help Center", to: "/contact" },
      { name: "Pricing", to: "/pricing" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t mt-12 border-gray-800 flex flex-col pt-12 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col xl:flex-row xl:justify-around">
        {/* Logo and info */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div>
            <img
              src="./images/logo-silver-bg.png"
              className="max-w-[250px] md:max-w-[300px] h-auto"
              alt="Codeket Logo"
            />
          </div>
          <p className="text-gray-400 border-y mb-6 mx-0 px-0 max-w-md text-center ">
            Complex Challenges. Elegant Solutions. <br /> Limitless Potential.
          </p>
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
        <div className="flex justify-center">
          <div className="flex w-full justify-evenly ">
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
                        className="text-white hover:text-blue-400 transition-colors"
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
          <div className="flex flex-row w-full justify-between xl:justify-evenly ">
            {legals.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="text-white hover:text-blue-400 border-b text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-gray-500 my-12 text-sm text-center">
          © {new Date().getFullYear()} Codeket Ltd. - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
