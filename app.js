"use strict";
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/assets/final.css", (req, res) => {
  return res.sendFile(path.join(__dirname, "./public/final.css"));
});

app.get("/assets/script.js", (req, res) => {
  return res.sendFile(path.join(__dirname, "./public/script.js"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is up and listening at port: ${PORT}`);
});
