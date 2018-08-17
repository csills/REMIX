var express = require('express');
var router = express.Router();
const models = require('../../models');

router.get('/', function(req, res, next) {
    models.Users.findAll({
        where: {
            username: req.user,
        }
    })
    .then(users => {
        res.json(users);
    })
});

module.exports = router;