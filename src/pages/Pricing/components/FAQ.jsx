import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

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

  const toggleQuestion = (id) => {
    if (openQuestion === id) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(id);
    }
  };

  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            Find answers to common questions about our pricing and plans.
          </p>
        </motion.div>

        <div className="space-y-4">
          {questions.map((qa) => (
            <motion.div
              key={qa.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: qa.id * 0.1 }}
              viewport={{ once: true }}
              className="border border-neutral-focus rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(qa.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-neutral hover:bg-neutral-focus transition-colors duration-300 text-left"
              >
                <h3 className="text-lg font-medium">{qa.question}</h3>
                <motion.div
                  animate={{ rotate: openQuestion === qa.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openQuestion === qa.id ? "auto" : 0,
                  opacity: openQuestion === qa.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-neutral/20">
                  <p className="text-base-content/80">{qa.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
