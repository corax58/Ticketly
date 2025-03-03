const Ticket = require("../models/ticketModel");

const getStatusCount = async (req, res) => {
  try {
    const total = await Ticket.countDocuments();
    const openTickets = await Ticket.countDocuments({ status: "open" });
    const inProgressTickets = await Ticket.countDocuments({
      status: "inprogress",
    });
    const closedTickets = await Ticket.countDocuments({ status: "closed" });

    res
      .status(200)
      .json({ total, openTickets, inProgressTickets, closedTickets });
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

const getLatestTickets = async (req, res) => {
  try {
    const latestTickets = await Ticket.find().sort({ createdAt: -1 }).limit(5);
    res.status(200).json(latestTickets);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
module.exports = {
  getStatusCount,
  getLatestTickets,
};
