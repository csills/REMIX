const express = require('express');
const router = express.Router();
const models = require('../models');

/* Check to make sure router is set to render to localhost
router.get('/', function(req, res, next) {
    res.render('sceneItList', { title: 'Scene It Too?' });
  });
  */


// GET all of the Remixes for a Gallery Image
router.get('/', function(req, res, next) {
    models.Remixes.findAll({
        where: {
            GalleryId: req.galleryId,
        },
        include: [
            models.Galleries,
            models.Users,
        ]
    })

// RENDER the Remixes to ImageRemixHistory page
    .then(remixes => {
        res.render('remixes', {
            title: 'Image Remix History',
            remixes: remixes,
        });
    })
});

module.exports = router;