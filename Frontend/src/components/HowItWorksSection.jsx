import React from "react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-10 bg-white">
      <div className="container w-4/5 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          How It Works
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 justify-around items-center space-y-8 lg:space-y-0">
          <div className="card w-96 bg-blue-50 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-blue-700">
                Register
              </h3>
              <p className="text-gray-600">
                Sign up with your basic details to create your free account.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-blue-50 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-blue-700">
                Get Your Virtual Card
              </h3>
              <p className="text-gray-600">
                Instantly receive a virtual MasterCard or Visa for your online
                payments.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-blue-50 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-blue-700">
                Top Up
              </h3>
              <p className="text-gray-600">
                Easily top up your card using Bkash, Nagad, or other mobile
                banking services.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-blue-50 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-blue-700">
                Start Spending
              </h3>
              <p className="text-gray-600">
                Use your virtual card for secure and hassle-free transactions
                anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
