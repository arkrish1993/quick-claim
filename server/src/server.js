// server.js - Entry point for the server application
// Loads environment variables, connects to the database, and starts the Express server.
require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
