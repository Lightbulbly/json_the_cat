const request = require('request');
let content;
let searchEndpointBreedURL = "https://api.thecatapi.com/v1/breeds/search?q=";
const clientQuery = process.argv[2];
let query = searchEndpointBreedURL += clientQuery;

content = request(query, { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  if (body[0] == undefined) {
    console.log("Breed is not found.");
  }  else {
    console.log(body[0]);
  }
});
 