const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to may API!");
});

app.get("/spinach", (req, res) => {
  res.json({
    name: "spinach",
    bestFood: true
  });
});

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});
