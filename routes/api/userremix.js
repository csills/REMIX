var express = require('express');
var router = express.Router();
const models = require('../../models');

router.get('/', function(req, res, next) {
    models.Remixes.findAll({
        where: {
            UserId: req.user,
        }
    })
    .then(remixes => {
        res.json(remixes);
    })
});

module.exports = router;