// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  card: {
    number: String,
    expiry: String,
  },
  balance: Number,
  transactions: [
    {
      description: String,
      amount: Number,
      date: Date,
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
