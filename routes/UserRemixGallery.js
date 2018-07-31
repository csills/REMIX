const express = require('express');
const router = express.Router();
const axios = require('axios');
const models = require('./models');

/* GET User Remix Images */
router.get('/jobs/:id', function(req, res, next) {
    axios.get('http://jobs.github.com/positions/' + req.params.id + '.json')
        .then(({data})=>{
        res.json(data);
      }).catch((error)=>{
        res.status(500).send(error)
      });
  });

  module.exports = router;