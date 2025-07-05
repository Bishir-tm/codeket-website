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
        <footer className="footer p-10 bg-neutral text-neutral-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <nav className="flex flex-col items-start">
        <h6 className="footer-title">Company</h6>
        <Link to="/" className="link link-hover mb-4">
          <img
            src="./images/logo-silver-bg.png"
            className="max-w-[250px] md:max-w-[300px] h-auto"
            alt="Codeket Logo"
          />
        </Link>
        <p className="text-gray-400 border-y border-gray-700 py-4 mb-6 text-center max-w-md">
          Complex Challenges. Elegant Solutions. <br /> Limitless Potential.
        </p>
        <div className="grid grid-flow-col gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle text-white hover:bg-primary hover:text-white"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </nav>

      {quickLinks.map((column, index) => (
        <nav key={index} className="flex flex-col items-start">
          <h6 className="footer-title">{column.title}</h6>
          {column.links.map((link, i) => (
            <Link key={i} to={link.to} className="link link-hover text-gray-300 hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
      ))}

      <nav className="flex flex-col items-start">
        <h6 className="footer-title">Legal</h6>
        {legals.map((item, i) => (
          <Link key={i} to={item.link} className="link link-hover text-gray-300 hover:text-primary transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col items-start">
        <h6 className="footer-title">Contact Us</h6>
        <p className="text-gray-300 flex items-center gap-2 mb-2">
          <FaEnvelope className="text-primary" /> info@codeket.com
        </p>
        <p className="text-gray-300 flex items-center gap-2 mb-2">
          <FaPhoneAlt className="text-primary" /> +234 (0) 803 000 0000
        </p>
        <p className="text-gray-300 flex items-center gap-2">
          <FaClock className="text-primary" /> Mon - Fri: 9 AM - 5 PM
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
