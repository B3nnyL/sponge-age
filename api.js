const fetch = require("node-fetch");

module.exports = async function id() {
  const promise = await fetch(
    `http://api.giphy.com/v1/gifs/random?tag=spongebob+squarepants&api_key=${
      process.env.API_KEY
    }&limit=1"`
  );
  let result = await promise.json();
  return result.data.id;
};
