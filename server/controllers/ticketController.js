const Ticket = require("../models/ticketModel");
const mongoose = require("mongoose");

const createTicket = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    if (!title) throw new Error("Title is required.");

    const ticket = await Ticket.create({
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
const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).json(ticket);
  } catch (err) {
    console.error("Error fetching ticket:", err);
    return res.status(500).json({
      message: "Failed to fetch ticket",
      error: err.message,
    });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).json(updatedTicket);
  } catch (err) {
    console.error("Error updating ticket:", err);
    return res.status(500).json({
      message: "Failed to update ticket",
      error: err.message,
    });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (err) {
    console.error("Error deleting ticket:", err);
    return res.status(500).json({
      message: "Failed to delete ticket",
      error: err.message,
    });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
