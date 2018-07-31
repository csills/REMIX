var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET Gallery Images*/
router.get('/jobs', function(req, res, next) {
  axios.get(//Get our Remix Database/Gallery Table by ID)
  	.then(({data})=>{
  		res.json(data);
  	}).catch((error)=>{
      res.status(500).send(error)
    });

});

/* GET Image Remix History Images */
router.get('/jobs/:id', function(req, res, next) {
  axios.get(//Get our Remix Database Remixes by Gallery Image ID?)
  	.then(({data})=>{
      res.json(data);
    }).catch((error)=>{
      res.status(500).send(error)
    });
});

/* GET User Remix Gallery Images */
router.get('/jobs/:id', function(req, res, next) {
    axios.get(//Get our Remix Database Remixes by User ID?)
        .then(({data})=>{
        res.json(data);
      }).catch((error)=>{
        res.status(500).send(error)
      });
  });

module.exports = router;