// Setup mock insurance claim data
// This script sets up mock insurance claim data in the MongoDB database.

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Claim = require("../src/models/Claim");

dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Claim.insertMany([
      {
        id: "CLM1001",
        policyNumber: "POL2003",
        amount: 15000,
        status: "APPROVED",
      },
      {
        id: "CLM1002",
        policyNumber: "POL1009",
        amount: 5200,
        status: "SUBMITTED",
      },
      {
        id: "CLM1003",
        policyNumber: "POL3005",
        amount: 8400,
        status: "REJECTED",
      },
    ]);
    console.log("Database setup completed");
    process.exit();
  } catch (err) {
    console.log(err);
  }
})();
