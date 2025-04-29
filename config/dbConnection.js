const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = "mongodb://127.0.0.1:27017/library"; // Use localhost for Compass
    await mongoose.connect(db);
    console.log("MongoDB connected to Compass...");
  } catch (err) {
    console.error("Error connecting to MongoDB Compass:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;