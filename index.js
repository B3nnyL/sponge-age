const express = require("express");
const fetch = require("node-fetch");
const app = express();

const API_KEY = "3ABkTp4vp1uBEi2PJxYEIezmWEVwfzff";

async function id() {
  const promise = await fetch(
    `http://api.giphy.com/v1/gifs/random?tag=spongeBob&api_key=${API_KEY}&limit=1"`
  );
  let result = await promise.json();
  console.log(result.data);
  return result.data.id;
}

const _id = id();
const url = `https://media.giphy.com/media/${_id}/giphy.gif`;
const downsized_url = `https://media.giphy.com/media/${_id}/200w_d.gif`;
const pageTitle = `Sponge Time`;
app.get("*", (req, res) => {
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
