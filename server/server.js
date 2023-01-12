const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Express is here");
});

const port = 5001;

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});
