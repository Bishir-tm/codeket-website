import React, { useState, useEffect, useRef } from "react";
import CallToAction from "../../components/Common/CallToAction";
import HeroSection from "./components/HeroSection";
import PricingPlans from "./components/PricingPlans";
import FAQ from "./components/FAQ";
import ComparisonTable from "./components/ComparisonTable";
import Consultation from "../Consultation";
import PaymentOptions from "./components/PaymentOptions";
import Guarantee from "./components/Guarantee";
import ClientLogos from "./components/ClientLogos";
import PricingModal from "./components/PricingModal";

// Main Pricing Component
const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

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
        <Consultation />
        <CallToAction />
        {selectedPlan && (
          <PricingModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </div>
    </div>
  );
};

export default Pricing;
