const express = require("express");
const User = require("../models/User"); // Assuming you have a User model
const router = express.Router();

// Get a list of all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Delete a user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId); // Delete user from DB
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// Update user details
router.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, balance, card } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, balance, card },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

module.exports = router;
