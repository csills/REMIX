var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET all Gallery Images */
//Not sure about this code??
router.get('/', function(req, res, next) {
    axios.get('routes/gallery')
        .then(({data})=>{
            res.json(data);
        }).catch((error)=>{
        res.status(500).send(error)
      });
  
  });
  
  
  /* GET individual Gallery Image */
  /*
  router.get('/gallery/filepath', function(req, res, next) {
    axios.get('???' + req.params.id + '.json')
        .then(({data})=>{
        res.json(data);
      }).catch((error)=>{
        res.status(500).send(error)
      });
  });
  */

module.exports = router;