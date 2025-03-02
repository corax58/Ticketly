const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ticketSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["open", "inprogress", "closed"],
    required: true,
    default: "open",
  },
  timestamps: true,
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
