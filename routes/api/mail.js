const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');


let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        // user: process.env.MAIL_USER,
        // pass: process.env.MAIL_PASS,
        user: "9c8f36ba23dbe7",
        pass: "84876a08c2bfc2"
    },
    tls: {
        rejectUnauthorized: false
    }
}, () => {
});

transporter.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: 'views',
    extName: '.hbs',
}));

router.post('/', (req, res, next) => {
    transporter.sendMail({
        from: '"REMIX 👻" <87612cba05-066f0c@inbox.mailtrap.io>', // sender address
        to: `"${req.body.username}" <hyunjoooo.nam@gmail.com>`, // list of receivers
        subject: `Hello ${req.body.username} ✔`, // Subject line
        text: 'Thank you', // plain text body
        template: 'notification',
        context: {
            ...req.body
        }
    }, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.json({ 'status': info});
        console.log('Message sent: %s', info.messageId);
    });
});

module.exports = router;