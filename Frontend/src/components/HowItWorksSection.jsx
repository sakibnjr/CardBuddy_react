import React from "react";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Register",
      description:
        "Sign up with your basic details to create your free account.",
    },
    {
      title: "Get Your Virtual Card",
      description:
        "Instantly receive a virtual MasterCard or Visa for your online payments.",
    },
    {
      title: "Top Up",
      description:
        "Easily top up your card using Bkash, Nagad, or other mobile banking services.",
    },
    {
      title: "Start Spending",
      description:
        "Use your virtual card for secure and hassle-free transactions anywhere, anytime.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container w-4/5 mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="card-body">
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
