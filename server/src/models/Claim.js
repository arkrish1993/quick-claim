// Claim model schema for MongoDB using Mongoose
// Fields:
//   id: Unique identifier for the claim (String, required)
//   policyNumber: Associated policy number (String, required)
//   amount: Claim amount (Number)
//   status: Status of the claim (String, enum: APPROVED, SUBMITTED, REJECTED, default: SUBMITTED)
// Timestamps: createdAt, updatedAt

const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    policyNumber: {
      type: String,
      required: true,
    },
    amount: Number,
    status: {
      type: String,
      enum: ["APPROVED", "SUBMITTED", "REJECTED"],
      default: "SUBMITTED",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Claim", claimSchema);
