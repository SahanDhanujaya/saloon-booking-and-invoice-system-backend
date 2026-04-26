import mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/salon_db";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };

