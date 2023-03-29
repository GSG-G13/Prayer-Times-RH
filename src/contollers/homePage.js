const fetch = require('node-fetch');

const getData = (req, res) => {
  const city = 'New York';
  const method = '2'; // 2 for Islamic Society of North America (ISNA)
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${req.params.name}&country=A&method=${method}`;
  fetch(url)
    .then(res => res.json())
    .then(data => res.status(200).json(data))
    .catch(error => console.error(error));
};

module.exports = {getData};
