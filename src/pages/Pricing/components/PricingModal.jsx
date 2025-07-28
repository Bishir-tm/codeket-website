import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const PricingModal = ({ plan, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: `Selected Plan: ${plan.name} (${plan.price})\n\n${formData.message}`,
    };

    emailjs
      .send(
       "service_iwxa8rc",
        "template_rwyciy9",
        templateParams,
        "IUJbFrZ9oGYqVff3D"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("success");
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("error");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-base-100 rounded-lg shadow-xl p-8 max-w-lg w-full relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <FaTimes />
          </button>
          <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
          {status === "success" ? (
            <div>
              <p className="text-green-500">Your request has been sent successfully!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="mb-4">You have selected the <strong>{plan.name}</strong> plan for <strong>${plan.price}</strong>.</p>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 border rounded mb-4"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded mb-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="w-full p-2 border rounded mb-4"
                rows="4"
                placeholder="Enter any additional message or questions here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Request"}
              </button>
              {status === "error" && (
                <p className="text-red-500 mt-2">Failed to send request. Please try again later.</p>
              )}
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PricingModal;
