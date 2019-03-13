const express = require("express");
const id = require("./api");
const app = express();

app.get("*", async (req, res) => {
  const pageTitle = `Sponge Time`;
  const _id = await id();
  const url = `https://media.giphy.com/media/${_id}/giphy.gif`;
  const downsized_url = `https://media.giphy.com/media/${_id}/200w_d.gif`;
  res.write(
    `<head>
      <meta name="viewport" content="width=device-width, minimum-scale=0.1">
      <meta property="og:title" content="${pageTitle}" />
      <meta property="og:image" content="${downsized_url}" />
      <title>${pageTitle}</title>
      </head>`
  );
  res.write(
    `<body style="margin: auto; background: #0e0e0e;">
    <img src="${url}"></body>`
  );
  res.end();
});

module.exports = app;
