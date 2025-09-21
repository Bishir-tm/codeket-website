import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="navbar bg-base-100/50 backdrop-blur-md shadow-xl sticky top-0 z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {/* <li><Link to="/pricing">Pricing</Link></li> */}
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            src={
              theme === "codeketdark"
                ? "./images/logo-white.png"
                : "./images/logo.png"
            }
            alt="codeket-logo"
            className="w-[130px] h-auto"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {/* <li><Link to="/pricing">Pricing</Link></li> */}
          <li>
            <Link to="/case-studies">Case Studies</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle hover:bg-base-200/50"
        >
          {theme === "codeketdark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <Link to="/consultation" className="btn btn-primary">
          Get Quote
        </Link>
      </div>
    </div>
  );
};

export default Header;
