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

// Route to post Uploaded URLS to the filepath in Remix Table
// Also want to make note of the UserId creating the Upload
// And which GalleryId the remix is attached to:
router.post('/', function(req, res, next) {
    models.Remixes.create({
        where: {
            filepath: req.body.fileUrl,
            //GalleryID: 1,//req.params.galleryId, (not sure how to call galleryID)
            UserId: req.user,
        }
    })
    .then(remixes => {
        res.json(remixes);
    })
    



})

module.exports = router;