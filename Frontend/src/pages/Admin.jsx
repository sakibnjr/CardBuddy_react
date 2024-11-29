import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    balance: 0,
    card: {
      number: "",
      expiry: "",
    },
  });

  useEffect(() => {
    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        toast.error("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("User deleted successfully");
        setUsers(users.filter((user) => user._id !== userId)); // Remove from state
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the user.");
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userFormData),
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        toast.success("User updated successfully");

        // Update the user in the local state
        setUsers(
          users.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
          )
        );
        setSelectedUser(null); // Deselect user after update
      } else {
        toast.error("Failed to update user.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the user.");
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setUserFormData({
      name: user.name,
      email: user.email,
      balance: user.balance,
      card: user.card,
    });
  };

  return (
    <motion.div
      className="container mx-auto w-4/5 p-6 bg-gradient-to-br from-indigo-500 to-purple-500 my-4 rounded-md text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* User List */}
      <h2 className="text-2xl mb-4">Total Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="font-bold text-white">#</th>
              <th className="font-bold text-white">Name</th>
              <th className="font-bold text-white">Email</th>
              <th className="font-bold text-white">Balance</th>
              <th className="font-bold text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-50 transition-colors duration-200 rounded-lg`}
              >
                <td className="p-4 text-gray-800 text-center font-medium rounded-l-lg">
                  {index + 1}
                </td>
                <td className="p-4 text-gray-800">{user.name}</td>
                <td className="p-4 text-gray-800">{user.email}</td>
                <td className="p-4 text-green-600 font-semibold">
                  ${user.balance.toFixed(2)}
                </td>
                <td className="p-4 flex justify-center items-center gap-4 rounded-r-lg">
                  <button
                    onClick={() => handleUserSelect(user)}
                    className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-600 font-semibold rounded-md hover:bg-blue-200 transition"
                  >
                    <AiOutlineEdit size={20} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="flex items-center gap-1 px-3 py-2 bg-red-100 text-red-600 font-semibold rounded-md hover:bg-red-200 transition"
                  >
                    <AiOutlineDelete size={20} />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Update Form */}
      {selectedUser && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            Update User: {selectedUser.name}
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              value={userFormData.name}
              onChange={(e) =>
                setUserFormData({ ...userFormData, name: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500"
              placeholder="Name"
            />
            <input
              type="email"
              value={userFormData.email}
              onChange={(e) =>
                setUserFormData({ ...userFormData, email: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500"
              placeholder="Email"
            />
            <input
              type="number"
              value={userFormData.balance}
              onChange={(e) =>
                setUserFormData({ ...userFormData, balance: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500"
              placeholder="Balance"
            />
            <input
              type="text"
              value={userFormData.card.number}
              onChange={(e) =>
                setUserFormData({
                  ...userFormData,
                  card: { ...userFormData.card, number: e.target.value },
                })
              }
              className="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500"
              placeholder="Card Number"
            />
            <input
              type="text"
              value={userFormData.card.expiry}
              onChange={(e) =>
                setUserFormData({
                  ...userFormData,
                  card: { ...userFormData.card, expiry: e.target.value },
                })
              }
              className="w-full p-2 border border-gray-300 rounded-md text-black placeholder-gray-500"
              placeholder="Card Expiry"
            />
            <button
              onClick={handleUpdateUser}
              className="w-full bg-blue-600 text-white p-2 rounded-md"
            >
              Update User
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminPage;
