var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET all Gallery Images */
router.get('/gallery/filepath', function(req, res, next) {
    axios.get('gallery/filepath')
        .then(({data})=>{
            res.json(data);
        }).catch((error)=>{
        res.status(500).send(error)
      });
  
  });
  
  
  /* GET individual Gallery Image */
  /*
  router.get('/jobs/:id', function(req, res, next) {
    axios.get('http://jobs.github.com/positions/' + req.params.id + '.json')
        .then(({data})=>{
        res.json(data);
      }).catch((error)=>{
        res.status(500).send(error)
      });
  });
  */

module.exports = router;