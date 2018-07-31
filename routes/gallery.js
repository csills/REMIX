const express = require('express');
const router = express.Router();
const axios = require('axios');
const models = require('./models');

/* GET Gallery Images */
router.get('/', function(req, res, next) {
  axios.get(/gallery/filepath)
  	.then(({data})=>{
  		res.json(data);
  	}).catch((error)=>{
      res.status(500).send(error)
    });

});

module.exports = router;