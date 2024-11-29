import React from "react";
import { motion } from "framer-motion";

import card from "/svg/card.svg";
import secure from "/svg/shield-check.svg";
import global from "/svg/globe.svg";
import topUp from "/svg/currency-circle-dollar.svg";

const KeyBenefitsSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-10 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container w-4/5 mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-blue-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Key Benefits
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {/* Secure Transactions */}
          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105"
            variants={cardVariants}
          >
            <img
              src={secure}
              alt="Secure Transactions"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Secure Transactions
            </h3>
            <p className="text-gray-600">
              Your security is our priority. Enjoy safe online payments with
              advanced encryption.
            </p>
          </motion.div>

          {/* Instant Setup */}
          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105"
            variants={cardVariants}
          >
            <img src={card} alt="Instant Setup" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Instant Setup
            </h3>
            <p className="text-gray-600">
              Get your virtual card in minutes without any paperwork.
            </p>
          </motion.div>

          {/* Easy Top-Ups */}
          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105"
            variants={cardVariants}
          >
            <img src={topUp} alt="Easy Top-Ups" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Easy Top-Ups
            </h3>
            <p className="text-gray-600">
              Conveniently add funds using Bkash, Nagad, or other mobile banking
              options.
            </p>
          </motion.div>

          {/* Global Access */}
          <motion.div
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105"
            variants={cardVariants}
          >
            <img src={global} alt="Global Access" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Global Access
            </h3>
            <p className="text-gray-600">
              Make payments globally with a virtual MasterCard or Visa.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KeyBenefitsSection;
