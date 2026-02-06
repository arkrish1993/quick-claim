// Express app setup for Quick Claim server

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  }),
);

app.use("/api/claims", require("./routes/claimRoutes"));

module.exports = app;
