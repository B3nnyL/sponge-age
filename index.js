const express = require("express");
const app = express();

const id = "zdIGTIdD1mi4";
const url = `https://media.giphy.com/media/${id}/giphy.gif`;
const pageTitle = `Sponge Time`;
app.get("*", (req, res) => {
  res.write(
    `<head>
      <meta name="viewport" content="width=device-width, minimum-scale=0.1">
      <meta property="og:title" content="${pageTitle}" />
      <meta property="og:image" content="${url}" />
      <title>${pageTitle}</title>
      </head>`
  );
  res.write(
    `<body style="margin: 0px; background: #0e0e0e;">
    <img src="${url}"></body>`
  );
  res.end();
});

module.exports = app;
