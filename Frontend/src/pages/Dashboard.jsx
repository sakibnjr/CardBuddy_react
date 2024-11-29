import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { PuffLoader } from "react-spinners";
import { BsCreditCard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem("user");

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      toast.error("User not logged in. Please log in first.");
      navigate("/login");
    }

    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <PuffLoader size={60} color="#4A90E2" />
      </div>
    );
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="container mx-auto w-4/5 p-6 bg-gradient-to-br from-indigo-500 to-purple-500 text-white my-4 rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {userData?.userName}!</h1>
        <p className="text-lg mt-2">Here's your dashboard overview:</p>
      </div>

      {/* Card and Balance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Card Info */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 text-gray-800"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">Your Virtual Card</h2>
          <div className="flex items-center space-x-4">
            <BsCreditCard size={36} className="text-indigo-600" />
            <div>
              <p className="text-lg font-semibold">
                {userData?.card.number || "**** **** **** ****"}
              </p>
              <p className="text-sm text-gray-500">
                Expiry: {userData?.card.expiry || "MM/YY"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Balance Info */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 text-gray-800"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">Your Balance</h2>
          <p className="text-3xl font-semibold">
            ${userData?.balance?.toFixed(2) || "0.00"}
          </p>
        </motion.div>
      </div>

      {/* Transactions Section */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 text-gray-800"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        {userData?.transactions && userData.transactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {userData.transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{transaction.description}</td>
                    <td
                      className={`${
                        transaction.amount >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ${transaction.amount.toFixed(2)}
                    </td>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No recent transactions available.</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
