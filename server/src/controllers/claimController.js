const Claim = require("../models/Claim");

/**
 * Get a claim by its ID.
 *
 * @param {import('express').Request} req - Express request object, expects req.params.id
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>} Sends JSON response with claim data or error message
 */
exports.getClaimById = async (req, res) => {
  try {
    const claim = await Claim.find({ id: req.params.id });

    if (!claim.length) {
      return res.status(404).json({
        message: "Claim not found",
      });
    }

    console.log("Claim found:", claim[0]);
    res.status(200).json(claim[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
