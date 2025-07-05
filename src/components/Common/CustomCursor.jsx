// components/CaseStudies/CustomCursor.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ hoveredCard }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-50 -ml-4 -mt-4 transition-transform duration-100 ${
        hoveredCard ? "scale-150 bg-blue-500/10" : "scale-100"
      }`}
    ></div>
  );
};

export default CustomCursor;
