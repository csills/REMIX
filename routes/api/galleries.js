var express = require('express');
var router = express.Router();
const models = require('../../models');

router.get('/', function(req, res, next) {
    models.Gallery.findAll()
    .then(galleries => {
        res.json(galleries);
    })
});


module.exports = router;