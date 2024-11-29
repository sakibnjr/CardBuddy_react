import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a virtual card?",
      answer:
        "A virtual card is a digital version of a credit or debit card that can be used for online transactions securely without using a physical card.",
    },
    {
      question: "How do I top up my virtual card?",
      answer:
        "You can easily top up your virtual card using popular mobile banking services like Bkash, Nagad, or other supported options.",
    },
    {
      question: "Is my virtual card secure?",
      answer:
        "Yes, your virtual card is equipped with advanced encryption and security measures to ensure safe and reliable transactions.",
    },
    {
      question: "Can I use the virtual card internationally?",
      answer:
        "Absolutely! Virtual cards can be used for global online payments wherever MasterCard or Visa is accepted.",
    },
    {
      question: "How quickly can I get my virtual card?",
      answer:
        "You can receive your virtual card instantly after signing up and completing the basic registration process.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container w-4/5 mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center text-blue-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {faq.question}
                </h3>
                <span className="text-blue-700">
                  {activeIndex === index ? (
                    <AiOutlineMinus size={20} />
                  ) : (
                    <AiOutlinePlus size={20} />
                  )}
                </span>
              </div>
              {activeIndex === index && (
                <motion.p
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
