import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-blue-50">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-200 -z-10"></div>

      {/* Content Container */}
      <div className="container w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-10 lg:py-20 relative z-10">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 lg:text-left text-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
            Your Virtual Card <br />
            <span className="text-purple-700">Instantly Accessible</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Get a virtual MasterCard or Visa instantly and top up with ease
            using Bkash, Nagad, or any mobile banking service. Enjoy secure and
            seamless online payments anytime, anywhere.
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            <NavLink
              to="/register"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 flex items-center justify-center"
            >
              Get Started <FiArrowRight className="ml-2" />
            </NavLink>
            <a
              href="#how-it-works"
              className="px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg shadow-lg hover:bg-gray-400 flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/svg/credit_card.svg"
            alt="Virtual Card Illustration"
            className="rounded-lg max-w-full animate-fade-in p-5"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
