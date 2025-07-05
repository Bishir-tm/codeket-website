import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaCreditCard } from "react-icons/fa";

const PaymentOptions = () => {
  const paymentMethods = [
    {
      icon: <FaCreditCard className="text-3xl text-blue-400" />,
      title: "Credit Card",
      description: "Secure payments via Stripe",
      brands: [
        "/images/payment/visa.svg",
        "/images/payment/mastercard.svg",
        "/images/payment/amex.svg",
        "/images/payment/discover.svg",
      ],
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.7998 5.90001L17.8398 7.80001C17.1998 7.80001 16.6198 7.90001 16.0598 8.10001C15.4998 8.30001 15.1198 8.50001 14.8598 8.80001C14.5998 9.10001 14.4198 9.40001 14.3598 9.80001H17.5998V11.7H14.2998C14.2998 11.8 14.2998 11.9 14.2998 12.1C14.2998 12.3 14.2998 12.4 14.2998 12.5V13H17.5998V14.9H14.4998C14.5598 15.2 14.7398 15.6 14.9998 15.9C15.2598 16.2 15.6398 16.5 16.1998 16.7C16.7598 16.9 17.3198 17.1 17.9598 17.1H17.9198L17.8798 19C17.1198 19 16.3598 18.9 15.5998 18.6C14.8398 18.3 14.1598 17.9 13.5998 17.5C13.0398 17 12.5998 16.4 12.2998 15.8C11.9998 15.2 11.8398 14.6 11.7598 14H9.93977V17.7H7.93977V14H3.93977V12.1H7.93977V9.90001H3.93977V8.00001H9.73977C9.79977 7.80001 9.89977 7.50001 9.97977 7.20001C10.0798 6.90001 10.1998 6.70001 10.3998 6.40001C10.5998 6.10001 10.8398 5.90001 11.1198 5.70001C11.3998 5.50001 11.7598 5.30001 12.0998 5.20001C12.4398 5.10001 12.8598 5.00001 13.3998 5.00001C13.9398 5.00001 14.4798 5.00001 15.1398 5.10001C15.7998 5.20001 16.4598 5.30001 17.1198 5.40001H17.8798" />
        </svg>
      ),
      title: "PayPal",
      description: "Fast and secure checkout",
      brands: [],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C351.7 381.7 368.3 381.7 380.5 369.5C392.7 357.3 392.7 340.7 380.5 328.5L266.5 214.5C263.5 211.5 259.1 209.9 256 209.9C252 209.9 248.5 211.5 245.5 214.5L131.5 328.5C119.3 340.7 119.3 357.3 131.5 369.5C143.7 381.7 160.3 381.7 172.5 369.5L242.4 292.5zM0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V96C464 87.16 456.8 80 448 80H64C55.16 80 48 87.16 48 96z" />
        </svg>
      ),
      title: "Bank Transfer",
      description: "For enterprise customers",
      brands: [],
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-400"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 414.4 0H97.6c-19.7 0-38 13.2-44.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V199.8c0-5.2-.9-10.3-2.5-15.2zM32 199.8c0-1.7 .3-3.4 .8-5.1L83.4 42.9C85.6 36.4 91.2 32 97.6 32H414.4c6.4 0 12 4.4 14.2 10.9l50.6 151.8c.5 1.6 .8 3.3 .8 5.1V464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V199.8zM423.4 124.8C419.3 111.6 406.6 102 392 102s-27.3 9.6-31.4 22.8c-2.3 7.5 2 15.5 9.5 17.8s15.5-2 17.8-9.5c.5-1.7 2-2.9 3.8-3s3.3 1 3.9 2.6l2.9 8.7c1 3.1 .5 6.4-1.4 9.1s-4.8 4.3-8 4.3H336c-22.1 0-40 17.9-40 40s17.9 40 40 40h48c39.7 0 72-32.3 72-72c0-21.1-9.1-40-23.8-53.3l-8.8-26.7zM336 168c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8H336zm32-24c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z" />
        </svg>
      ),
      title: "Crypto",
      description: "BTC & ETH accepted",
      brands: ["/images/payment/bitcoin.svg", "/images/payment/ethereum.svg"],
    },
  ];

  return (
    <div className="py-24 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible Payment Options
          </h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            Choose the payment method that works best for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-xl hover:border-primary transition-all duration-300"
            >
              <div className="card-body items-center">
                <div className="mb-6 flex justify-center">{method.icon}</div>
                <h3 className="card-title text-2xl mb-3">
                  {method.title}
                </h3>
                <p className="text-base-content/70 text-center mb-4">
                  {method.description}
                </p>

                {method.brands.length > 0 && (
                  <div className="flex justify-center gap-3 mt-6">
                    {method.brands.map((brand, idx) => (
                      <img
                        key={idx}
                        src={brand}
                        alt="Payment method"
                        className="h-8"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 card bg-base-100 shadow-xl p-6 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center mb-6 md:mb-0">
            <div className="p-3 bg-primary/20 rounded-full mr-4">
              <FaShieldAlt className="text-2xl text-primary" />
            </div>
            <p className="text-base-content/70 font-medium">
              All payments are securely processed and protected by
              industry-standard encryption.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/security"
            className="btn btn-ghost text-primary hover:text-primary-focus transition-colors"
          >
            <span className="mr-2">Learn more about our security</span>
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentOptions;
