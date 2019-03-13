const API_KEY = "3ABkTp4vp1uBEi2PJxYEIezmWEVwfzff";
const fetch = require("node-fetch");

module.exports = async function id() {
  const promise = await fetch(
    `http://api.giphy.com/v1/gifs/random?tag=spongeBob&api_key=${API_KEY}&limit=1"`
  );
  let result = await promise.json();
  return result.data.id;
};
