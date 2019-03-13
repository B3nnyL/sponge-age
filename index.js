const express = require("express");
const app = express();

const id = "zdIGTIdD1mi4";
const url = `https://media.giphy.com/media/${id}/giphy.gif`;

app.get("*", (req, res) => {
  res.write(`<body><img src="${url}"></body>`);
  res.end();
});

module.exports = app;
