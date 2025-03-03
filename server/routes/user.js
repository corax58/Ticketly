const express = require("express");
const {
  loginUser,
  signupUser,
  getUserTickets,
} = require("../controllers/userController");
const { authenticateUser } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/tickets", authenticateUser, getUserTickets);

module.exports = router;
