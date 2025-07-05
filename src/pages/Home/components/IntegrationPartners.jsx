import React from "react";
import { motion } from "framer-motion";

import { FaMicrosoft } from "react-icons/fa";

import {
  SiAmazonwebservices,
  SiGooglecloud,
  SiPostgresql,
  SiMysql,
  SiTensorflow,
  SiDocker,
  SiMongodb,
  SiKubernetes,
  SiStripe,
  SiTwilio,
} from "react-icons/si";

const integrationPartners = [
  {
    partner: "AWS",
    logo: <SiAmazonwebservices className="h-6 w-6 inline me-3" />,
  },
  {
    partner: "Google Cloud",
    logo: <SiGooglecloud className="h-6 w-6 inline me-3" />,
  },
  {
    partner: "Microsoft Azure",
    logo: <FaMicrosoft className="h-6 w-6 inline me-3" />,
  },
  {
    partner: "PostgreSQL",
    logo: <SiPostgresql className="h-6 w-6 inline me-3" />,
  },
  { partner: "MySQL", logo: <SiMysql className="h-6 w-6 inline me-3" /> },
  { partner: "MongoDB", logo: <SiMongodb className="h-6 w-6 inline me-3" /> },
  {
    partner: "TensorFlow",
    logo: <SiTensorflow className="h-6 w-6 inline me-3" />,
  },
  { partner: "Docker", logo: <SiDocker className="h-6 w-6 inline me-3" /> },
  {
    partner: "Kubernetes",
    logo: <SiKubernetes className="h-6 w-6 inline me-3" />,
  },
  { partner: "Stripe", logo: <SiStripe className="h-6 w-6 inline me-3" /> },
  { partner: "Twilio", logo: <SiTwilio className="h-6 w-6 inline me-3" /> },
];

const IntegrationPartners = () => {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Integration Partners
        </motion.h2>
        <motion.p
          className="text-base-content/80 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our platform seamlessly integrates with all the tools you already use.
        </motion.p>
      </div>

      {/* Integration logos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {integrationPartners.map((item, index) => (
          <motion.div
            key={index}
            className="bg-base-100/5 hover:bg-base-100/10 border border-neutral-focus rounded-lg p-6 flex items-center justify-center h-24 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              y: -5,
              boxShadow: "0 5px 20px rgba(var(--p), 0.1)",
            }}
          >
            <div className="text-base-content text-lg font-semibold">
              {item.logo}
              {item.partner}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationPartners;
