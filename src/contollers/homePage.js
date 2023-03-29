const fetch = require('node-fetch');

// handle '/fruit' get and post requests

const getData = (req, response) => {
  const city = 'New York';
  const method = '2'; // 2 for Islamic Society of North America (ISNA)
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=A&method=${method}`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  response.end();
};

module.exports = getData;
