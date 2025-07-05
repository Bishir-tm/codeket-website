import React from "react";
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
  return (
    <div className="bg-base-200">
      <HeroSection />
      <PricingPlans />
      <ComparisonTable />
      <Guarantee />
      <PaymentOptions />
      <ClientLogos />
      <FAQ />
      <CustomQuoteForm />
      <CallToAction />
    </div>
  );
};

export default Pricing;
