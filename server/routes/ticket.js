const express = require("express");
const {
  createTicket,
  getAllTickets,
} = require("../controllers/ticketController");

const router = express.Router();

router.get("/", getAllAlbums);
router.post("/", createTicket);
