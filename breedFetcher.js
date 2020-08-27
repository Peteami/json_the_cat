const request = require('request');


const fetchBreedInfo = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (body === "[]") {
      callback(error, null);
    } else {
      
      let description = (JSON.parse(body))[0].description;
      console.log(description);
      // callback(error,description);
    }
  });
};

module.exports = {fetchBreedInfo};

fetchBreedInfo("siberian");