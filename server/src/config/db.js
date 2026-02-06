/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * The MongoDB connection string is read from the MONGO_URL environment variable.
 * Logs a message to the console upon successful connection.
 * @module config/db
 * @returns {Promise<void>} Resolves when the database connection is established.
 */

const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
};
