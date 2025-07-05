import React from "react";
import { motion } from "framer-motion";

const FAQSection = ({ faqs }) => {
  return (
    <div className="mb-32">
      <h2 className="text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-base-content/80 text-center mb-16 max-w-3xl mx-auto">
        Get quick answers to common questions about working with us.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="collapse collapse-arrow bg-base-100 shadow-xl"
            >
              <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium text-primary">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
