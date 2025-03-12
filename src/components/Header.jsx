import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="z-50 bg-opacity-20 backdrop-filter backdrop-blur-xl bg-gradient-to-r from-purple-800 to-blue-600 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span className="text-xl font-semibold text-white">DevCraft</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/case-studies"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/quote"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
          >
            Get Quote
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-opacity-70 backdrop-filter backdrop-blur-lg bg-gradient-to-r from-purple-700 to-blue-500 py-4 px-6`}
      >
        <Link
          to="/"
          className="block py-2 text-gray-200 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="block py-2 text-gray-200 hover:text-white transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/case-studies"
          className="block py-2 text-gray-200 hover:text-white transition duration-300"
        >
          Case Studies
        </Link>
        <Link
          to="/about"
          className="block py-2 text-gray-200 hover:text-white transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 text-gray-200 hover:text-white transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/quote"
          className="block py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded-full transition duration-300"
        >
          Get Quote
        </Link>
      </div>

      <style jsx>{`
        header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 10px 10px;
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
    </header>
  );
};

export default Header;
