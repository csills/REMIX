var express = require('express');
var router = express.Router();
const models = require('../../models');

router.get('/:galleryId', function(req, res, next) {
    models.Remixes.findAll({
        where: {
            GalleryId: req.params.galleryId,
        }
    })
    .then(remixes => {
        res.json(remixes);
    })
});

module.exports = router;