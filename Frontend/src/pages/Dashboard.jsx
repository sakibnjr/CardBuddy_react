import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Dashboard = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const user = localStorage.getItem("user");

    setIsLoggedIn(loggedIn === "true");
    setUserName(user || "User");
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container w-4/5 mx-auto px-4">
        {/* Animated Greeting Section */}
        <motion.p
          id="greeting"
          className="text-2xl text-center text-gray-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {`Hello, ${userName}! Welcome back to CardBuddy.`}
        </motion.p>

        <motion.h1
          className="text-4xl font-bold text-blue-800 m-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Virtual Card Information */}
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Your Virtual Card
            </h2>
            <ul className="text-gray-600 space-y-4 mb-2">
              <li>Card Number: 1234 5678 9012 3456</li>
              <li>Expiry Date: 12/24</li>
              <li>CVV: 214</li>
              <li>
                Card Status: <span className="text-green-600">Active</span>
              </li>
            </ul>
            <button className="btn btn-primary">Manage Card</button>
          </motion.div>

          {/* Balance Section */}
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Your Balance
            </h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">$0.00</p>
            <button className="btn btn-primary">Top Up Now</button>
          </motion.div>

          {/* Transaction History */}
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Transaction History
            </h2>
            <ul className="text-gray-600 space-y-2 mb-2">
              <li>
                Amazon - <strong>$20.00</strong> - 02/09/2024
              </li>
              <li>
                Spotify - <strong>$10.00</strong> - 01/09/2024
              </li>
              <li>
                Netflix - <strong>$15.00</strong> - 25/08/2024
              </li>
              <li>
                Apple Store - <strong>$50.00</strong> - 20/08/2024
              </li>
            </ul>
            <button className="btn btn-primary">View All Transactions</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
