/* eslint-disable no-console */
const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'public')));

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port} `);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
