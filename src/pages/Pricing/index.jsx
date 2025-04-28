import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/Common/CallToAction";
import {
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaChevronDown,
  FaShieldAlt,
  FaHeadset,
  FaCode,
  FaCreditCard,
} from "react-icons/fa";
import HeroSection from "./components/HeroSection";
import PricingPlans from "./components/PricingPlans";
import FAQ from "./components/FAQ";
import ComparisonTable from "./components/ComparisonTable";
import CustomQuoteForm from "./components/CustomQuoteForm";
import PaymentOptions from "./components/PaymentOptions";

// Guarantee Section
const Guarantee = () => {
  return (
    <div className="py-24 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our 30-Day Money-Back Guarantee
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're confident you'll love our platform. If you're not completely
              satisfied within the first 30 days, we'll refund your payment in
              full—no questions asked.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-green-400 mt-1 mr-3">
                  <FaCheck />
                </div>
                <p className="text-gray-300">
                  No complicated cancellation process
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-green-400 mt-1 mr-3">
                  <FaCheck />
                </div>
                <p className="text-gray-300">Full refund, no hidden fees</p>
              </div>
              <div className="flex items-start">
                <div className="text-green-400 mt-1 mr-3">
                  <FaCheck />
                </div>
                <p className="text-gray-300">
                  Friendly support every step of the way
                </p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#pricing-plans"
              className="inline-block mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Choose Your Plan
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <svg
                className="w-full h-auto max-w-md"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="256"
                  cy="256"
                  r="248"
                  stroke="url(#paint0_linear)"
                  strokeWidth="16"
                />
                <path
                  d="M256 404C339.479 404 408 335.479 408 252C408 168.521 339.479 100 256 100C172.521 100 104 168.521 104 252C104 335.479 172.521 404 256 404Z"
                  fill="url(#paint1_radial)"
                  fillOpacity="0.2"
                />
                <path
                  d="M224 296L288 232"
                  stroke="url(#paint2_linear)"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                <path
                  d="M224 232L288 296"
                  stroke="url(#paint3_linear)"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="125"
                    y1="125"
                    x2="387"
                    y2="387"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(256 252) rotate(90) scale(152)"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </radialGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="224"
                    y1="296"
                    x2="288"
                    y2="232"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="224"
                    y1="232"
                    x2="288"
                    y2="296"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Client Logos Section
const ClientLogos = () => {
  const clientLogos = [
    { name: "Microsoft", logo: "/images/clients/microsoft.svg" },
    { name: "IBM", logo: "/images/clients/ibm.svg" },
    { name: "Amazon", logo: "/images/clients/amazon.svg" },
    { name: "Oracle", logo: "/images/clients/oracle.svg" },
    { name: "Google", logo: "/images/clients/google.svg" },
    { name: "Salesforce", logo: "/images/clients/salesforce.svg" },
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies that rely on CodeKet for their
            technology needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Pricing Component
const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      // Scroll to contact form or show modal
      document
        .getElementById("custom-quote")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPlan]);

  return (
    <div className="bg-black text-white">
      <Header />
      <div className="-mt-20">
        {" "}
        {/* Adjust for header height */}
        <HeroSection />
        <PricingPlans setSelectedPlan={setSelectedPlan} />
        <ComparisonTable />
        <Guarantee />
        <PaymentOptions />
        <ClientLogos />
        <FAQ />
        <CustomQuoteForm />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
