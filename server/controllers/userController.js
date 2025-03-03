const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

const jwt = require("jsonwebtoken");

const createToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = createToken(user._id, user.role);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signup(name, email, password);

    const token = createToken(user._id, user.role);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,

      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserTickets = async (req, res) => {
  try {
    const { userId } = req.body;

    const tickets = await Ticket.find({ user: userId });

    return res.status(200).json(tickets);
  } catch (err) {
    console.error("Error fetching user's tickets:", err);
    return res.status(500).json({
      message: "Failed to fetch user's tickets",
      error: err.message,
    });
  }
};

module.exports = {
  loginUser,
  signupUser,
  getUserTickets,
};
