const express = require('express');
const router = express.Router();
const models = require('../../models');

router.get('/', (req, res, next) => {
    res.json({});
});

router.post('/upload', (req, res, next) => {
    models.Remix.findOrCreate(
        {
            where: {
                filepath: req.body.filepath,
            },
            defaults: {
                title: req.body.title,
                filepath: req.body.filepath,
            }
        }
    )
    .then(user => {
        console.log(user[0].id);
        models.Usermovie.findOrCreate({
            where: { 
                UserId: req.user,
            },
            defaults: {
                filepath: req.body.filepath,
                UserId: req.user,
            }
        })
        .then(remix => {
            remix[0].save().then( () => {
                res.json(remix);
            })
        });
    })
    .catch(err => {
        console.log('Could not find or create remix ' + err);
    });

  
})



module.exports = router;