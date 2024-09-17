import React from "react";

import card from "/svg/card.svg";
import secure from "/svg/shield-check.svg";
import global from "/svg/globe.svg";
import topUp from "/svg/currency-circle-dollar.svg";

const KeyBenefitsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container w-4/5 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={card} alt="Instant Setup" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Instant Setup
            </h3>
            <p className="text-gray-600">
              Get your virtual card in minutes without any paperwork.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={topUp} alt="Easy Top-Ups" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Easy Top-Ups
            </h3>
            <p className="text-gray-600">
              Conveniently add funds using Bkash, Nagad, or other mobile banking
              options.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={global} alt="Global Access" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Global Access
            </h3>
            <p className="text-gray-600">
              Make payments globally with a virtual MasterCard or Visa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
