const express = require('express');
const path = require('path');


const router = express.Router();
const getData = require('./homePage');

router.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '..', '..', 'public','index.html'));
});
router.get('/search', getData);

module.exports = router;
