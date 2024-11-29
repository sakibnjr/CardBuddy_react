const express = require("express");
const User = require("../models/User"); // Assuming you have a User model
const router = express.Router();
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

//register a new user
router.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required." });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use." }); // Conflict status
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate random card details, balance, and transactions
    const randomCard = {
      number: faker.finance.creditCardNumber(),
      expiry: faker.date.future(5).toISOString().slice(0, 7), // Expiry date in YYYY-MM format
    };

    // const randomBalance = parseFloat(faker.finance.amount(100, 5000, 2)); // Random balance between 100 and 5000

    const randomBalance = 0; // Random balance between 100 and 5000

    const randomTransactions = Array.from({ length: 3 }).map(() => ({
      description: faker.commerce.productName(),
      amount: parseFloat(faker.finance.amount(-100, 100, 2)), // Random transaction amount (can be negative for expenses)
      date: faker.date.past(),
    }));

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      card: randomCard,
      balance: randomBalance,
      transactions: randomTransactions,
    });

    // Save the new user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

//login the user
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    // Send back the user data (excluding password) upon successful login
    const userData = {
      name: user.name,
      email: user.email,
      card: user.card,
      balance: user.balance,
      transactions: user.transactions,
    };

    res.status(200).json({ message: "Login successful", user: userData });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
