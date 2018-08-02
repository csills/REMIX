var express = require('express');
var router = express.Router();
const models = require('../../models');

//this is where we need to GET POST ADD
//When someone clicks the Upload or Download button
//See Full-Stack Counter exercise Step 5 (#4-7) - Build out the counter API


router.get('/', function(req, res, next) {
    models.Remix.findAll({
        where: {
            UserId: req.user,
        },
        include: [
            models.Remix,
        ]
    })

// RENDER the Users remixes
    .then(remixes => {
        res.render('remix', {
            title: 'Remixes',
            remixes: remixes,
        });
    })
});


module.exports = router;