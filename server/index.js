require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();

//routers
const userRouter = require("./routes/user");

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/user", userRouter);

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
