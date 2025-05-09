import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[999] bg-gradient-to-r from-purple-800/40 to-blue-600/40 backdrop-filter backdrop-blur-lg shadow-lg before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] before:bg-[size:10px_10px] before:pointer-events-none"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="./images/logo-white.png"
              alt="codeket-logo"
              className="w-[130px] h-auto"
            />
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
            to="/pricing"
            className="text-gray-200 hover:text-white transition duration-300"
          >
            Pricing
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
            to="/pricing"
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
        } md:hidden relative bg-gradient-to-r from-purple-700/80 to-blue-500/80 backdrop-filter backdrop-blur-lg py-4 px-6`}
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
          to="/pricing"
          className="text-gray-200 hover:text-white transition duration-300"
        >
          Pricing
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
          to="/pricing"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Get Quote
        </Link>
      </div>
    </header>
  );
};

export default Header;
