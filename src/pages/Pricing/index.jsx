import React, { useState, useEffect, useRef } from "react";
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
    <div className="bg-base-100 text-base-content">
      <div className="">
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
    </div>
  );
};

export default Pricing;
