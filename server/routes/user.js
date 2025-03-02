const express = require("express");
const {
  loginUser,
  signupUser,
  getUserTickets,
} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/tickets", getUserTickets);

module.exports = router;
