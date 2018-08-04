var express = require('express');
var router = express.Router();
const models = require('../../models');

router.get('/:id', function(req, res, next) {
    models.Gallery.find({
        where: {
            id: req.params.id
        },
        include: [
            models.Remixes,
        ]
    })
    .then(gallery => {
        res.json(gallery);
    })
});


module.exports = router;
