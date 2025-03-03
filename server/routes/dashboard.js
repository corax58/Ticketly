const express = require("express");
const {
  getStatusCount,
  getLatestTickets,
} = require("../controllers/dashboardController");
const router = express.Router();

router.get("/status-count", getStatusCount);
router.get("/latest-tickets", getLatestTickets);

module.exports = router;
