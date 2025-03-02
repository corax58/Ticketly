const Ticket = require("../models/ticketModel");
const mongoose = require("mongoose");

const createTicket = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    if (!title) throw new Error("Title is required.");

    const newTicket = await Ticket.create({
      title,
      description,
      user: userId,
    });

    return res.status(201).json({
      message: "Ticket created successfully",
      ticket,
    });
  } catch (err) {
    console.error("Error creating ticket:", err);
    return res.status(500).json({
      message: "Failed to create ticket",
      error: err.message,
    });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    return res.status(200).json(tickets);
  } catch (err) {
    console.error("Error fetching tickets:", err);
    return res.status(500).json({
      message: "Failed to fetch tickets",
      error: err.message,
    });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
};
