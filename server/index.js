require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();

//routers
const userRouter = require("./routes/user");
const ticketRouter = require("./routes/ticket");
const dashboardRouter = require("./routes/dashboard");
const {
  authorizeRole,
  authenticateUser,
} = require("./middlewares/authMiddleware");

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/user", userRouter);
app.use("/api/ticket", authenticateUser, ticketRouter);
app.use(
  "/api/dashboard",
  authenticateUser,
  authorizeRole("admin"),
  dashboardRouter
);
app.get("/api/ping", (req, res) => {
  res.status(200);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected");
    //starting server
    app.listen(PORT, () => {
      console.log("listening on http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
