const express = require('express');

const router = express.Router();
const getData = require('./homePage');

router.get('/search', getData);

module.exports = router;
