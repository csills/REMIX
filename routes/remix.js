var express = require('express');
var router = express.Router();

//this is where we need to GET POST ADD
//When someone clicks the Upload or Download button
//See Full-Stack Counter exercise Step 5 (#4-7) - Build out the counter API
router.get('/', function(req, res, next) {
    res.json({ 'status': 'success' });
  });


module.exports = router;