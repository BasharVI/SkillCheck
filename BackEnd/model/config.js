const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", () => {
  console.error("connection error");
});
db.once("open", () => {
  console.log("connected to mongoDB");
});
