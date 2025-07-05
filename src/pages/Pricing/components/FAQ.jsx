import React, { useState } from "react";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "How does billing work?",
      answer:
        "For monthly plans, you'll be billed at the beginning of each month. For annual plans, you'll be billed once at the beginning of your subscription period. All plans are auto-renewing but can be canceled at any time.",
    },
    {
      id: 2,
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing period. When downgrading, changes will take effect at the start of your next billing cycle.",
    },
    {
      id: 3,
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for all plans. No credit card is required to start your trial, and you can upgrade to a paid plan at any time during or after your trial period.",
    },
    {
      id: 4,
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all plans. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for enterprise clients. All payments are securely processed through our payment provider.",
    },
    {
      id: 6,
      question:
        "Do you offer discounts for non-profits or educational institutions?",
      answer:
        "Yes, we offer special pricing for qualified non-profits, educational institutions, and startups. Please contact our sales team for more information and to apply for our special pricing programs.",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          Find quick answers to the most common questions about our pricing, services, and how we work.
        </p>
      </div>

      <div className="join join-vertical w-full">
        {questions.map((qa) => (
          <div key={qa.id} className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" id={`accordion-${qa.id}`} />
            <div className="collapse-title text-xl font-medium">
              {qa.question}
            </div>
            <div className="collapse-content">
              <p>{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
