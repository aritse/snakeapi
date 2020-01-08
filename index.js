const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to may API!");
});

app.listen(port, function() {
  console.log("listening on port", port);
});
