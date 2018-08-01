const express = require('express');
const router = express.Router();
const models = require('../models');

/* Check to make sure router is set to render to localhost
router.get('/', function(req, res, next) {
    res.render('Remix', { title: 'Remix: a gallery' });
  });
  */


// GET all of the Remixes for a Gallery Image
router.get('/', function(req, res, next) {
    models.Galleries.findAll({
        where: {
            GalleryId: req.galleryId,
        },
        include: [
            models.Galleries,
        ]
    })

// RENDER the Remixes to ImageRemixHistory page
    .then(gallery => {
        res.render('gallery', {
            title: 'Gallery',
            gallery: gallery,
        });
    })
});

module.exports = router;