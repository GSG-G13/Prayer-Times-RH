const express = require('express');
const {getData} = require('../contollers/homePage')
const path = require('path');


const router = express.Router();

router.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '..', '..', 'public','index.html'));
});
router.get('/search/:name', getData); 

module.exports = router;
