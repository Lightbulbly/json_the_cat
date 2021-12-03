const request = require('request');
let searchEndpointBreedURL = "https://api.thecatapi.com/v1/breeds/search?q=";


const fetchBreedDescription = (nameOfbreed, callback) =>{
  let URL = searchEndpointBreedURL + nameOfbreed;
  console.log(nameOfbreed, URL);
  let description;

  //request logic
  request(URL, { json: true }, (err, data) => {
    // console.log(data.body[0]);
    if (err) {
      return err;
    }
    if (data.body[0] === undefined) {
      // console.log(data.body[0]);
      console.log("Breed is not found.");
    }  else {
      description =  data.body[0];
    }
    callback(err, description);
  });



};
  

module.exports = { fetchBreedDescription };