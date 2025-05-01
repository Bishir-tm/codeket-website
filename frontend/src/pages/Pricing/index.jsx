import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/Common/CallToAction";
import HeroSection from "./components/HeroSection";
import PricingPlans from "./components/PricingPlans";
import FAQ from "./components/FAQ";
import ComparisonTable from "./components/ComparisonTable";
import CustomQuoteForm from "./components/CustomQuoteForm";
import PaymentOptions from "./components/PaymentOptions";
import Guarantee from "./components/Guarantee";
import ClientLogos from "./components/ClientLogos";

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
