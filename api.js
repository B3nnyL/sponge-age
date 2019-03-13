const fetch = require("node-fetch");

module.exports = async function id() {
  const promise = await fetch(
    `http://api.giphy.com/v1/gifs/random?tag=spongebob+squarepants&api_key=${
      process.env.API_KEY
    }&limit=1"`
  );
  let result = "";
  try {
    result = await promise.json();
    if (!result) throw "error";
  } catch (error) {
    console.error(error);
    return;
  }
  return result.data.id;
};
