const axios = require("axios");

async function getData(url, method, params) {
  const results = await axios({
    url: url,
    method: method || "get",
    data: params,
  });
  console.log(results.data);
  return await results.data;
}

// getData(
//   "https://api.unsplash.com/photos/random/?count=10&client_id=3af257b07441d67effd24006c78171e65265eab043e99bfcc30aead4b16f6db2"
// );

module.exports = getData;
