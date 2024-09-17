import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero min-h-screen bg-blue-50">
      <div className="container w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-4 lg:py-10">
        <div className="lg:w-1/2 lg:text-left">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-800 leading-tight mb-6">
            Get Your Virtual Card Instantly with Easy Top-Ups!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Access a virtual MasterCard or Visa instantly and top up using
            Bkash, Nagad, or other popular mobile banking services in
            Bangladesh. Enjoy secure, fast, and convenient online payments
            anytime, anywhere.
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            <NavLink to="/register" className="btn btn-primary md:btn-lg">
              Get Started
            </NavLink>

            <a href="#how-it-works" className="btn btn-secondary md:btn-lg">
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/svg/credit_card.svg"
            alt="Virtual Card Image"
            className="rounded-lg max-w-full animate-fade-in p-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
