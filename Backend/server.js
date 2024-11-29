// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/admin", adminRoutes);
app.use(userRoutes);

// MongoDB Connection
async function setupConnection() {
  try {
    // MongoDB Connection
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    // Start Server
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error(
      "Error occurred while connecting to the database or starting the server:",
      err
    );
  }
}

setupConnection();
