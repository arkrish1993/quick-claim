// claimRoutes.js - Express routes for claim-related endpoints
// Handles routing for claim retrieval and other claim operations

const router = require("express").Router();
const controller = require("../controllers/claimController");

router.get("/:id", controller.getClaimById);

module.exports = router;
