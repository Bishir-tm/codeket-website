import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Solutions", path: "/solutions" },
  { name: "Technology", path: "/technology" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "About", path: "/about" },
];
const Navbar = () => {
  return (
    <div className=" top-0 z-50 bg-opacity-20 backdrop-filter backdrop-blur-xl">
      {/* Navigation bar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-between sticky top-0 items-center py-6 px-4"
      >
        {/* Logo */}
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-px rounded-xl shadow-lg shadow-blue-500/30">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm px-6 py-3 rounded-xl">
            <h3 className="text-lg font-mono font-medium text-white">
              <span className="text-blue-400">&lt;</span>
              <span className="text-white">code</span>
              <span className="text-violet-400">ket</span>
              <span className="text-blue-400">/&gt;</span>
            </h3>
          </div>
        </div>

        {/* Nav links - desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {console.log(navLinks)}
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
