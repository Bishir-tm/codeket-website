import React from "react";
import HeroSection from "./components/HeroSection";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import FAQSection from "./components/FAQSection";

const Contact = () => {
  const faqs = [
    {
      question: "What kind of businesses do you work with?",
      answer:
        "We work with growing businesses that need operational control without the complexity of bloated ERP suites. Our focus is on retail, education, and service-driven businesses.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "We pride ourselves on a fast time to value. Setup typically takes days, not months, so your team can benefit from our software almost immediately.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer real, human support. When you need help, you talk to a human who can solve the problem. No ticket queues, no long waits.",
    },
    {
      question: "Is your software easy to use?",
      answer:
        "Absolutely. We believe that if your team needs training, we missed the mark. Our tools are designed to be simple, fast, and clear.",
    },
  ];

  return (
    <div className="bg-base-200">
      <HeroSection />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          <ContactInfo />
          <ContactForm />
        </div>
        
        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
};

export default Contact;
