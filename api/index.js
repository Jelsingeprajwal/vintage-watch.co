const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes.js");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

//middlewares
app.use(cookieParser()); // allows to parse cookies
app.use(express.json());
app.use(
  cors({
    credentials: true, //! allow to send cookies to Request Header ie frontend
    origin: "http://localhost:3000",
  })
);

//mongodb connection
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((er) => {
    console.log(er);
  });

app.get("/", (req, res) => {
  res.send("test");
});
app.use(authRoutes);

app.listen(3030, () => {
  console.log("listening to port 3030");
});
