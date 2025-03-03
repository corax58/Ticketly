const express = require("express");
const {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");
const {
  authenticateUser,
  authorizeRole,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authorizeRole("admin"), getAllTickets);
router.get("/:id", getTicketById);
router.patch("/:id", authorizeRole("admin"), updateTicket);
router.delete("/:id", deleteTicket);
router.post("/", createTicket);

module.exports = router;
