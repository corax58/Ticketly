const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ticketSchema = new Schema(
  {
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
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
