const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
require("./model/config");

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
