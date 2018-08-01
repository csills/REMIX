const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const dotenv = require('dotenv');

const LocalStrategy = require('passport-local').Strategy;

const models = require('./models');
dotenv.load();

const setupAuth = (app) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
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

    app.use(cookieParser());

    app.use(session({
        secret: 'secretserverword',
        resave: true,
        saveUninitialized: true,
    }));

    // add the local (user/pass) strategy
    passport.use(new LocalStrategy({
    }, (username, password, done) => {
        // check if there is a user with the username given
        models.Users.findOne({
            where: {
                'username': username
            }
        })
        .then((currentUser) => {
            // if there isn't a current User
            if (!currentUser) {
                // return an error
                return done(null, false, { message: 'Incorrect username' })
            }
            // If the password doesn't match
            if (!bcrypt.compareSync(password, currentUser.password)) {
                // return an error
                return done(null, false, { message: 'Incorrect password' })
            }
            // otherwise, return the user object
            return done(null, currentUser)
        })
        .catch(done);
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((userId, done) => {
        done(null, userId);
    })

    app.use(passport.initialize());

    app.use(passport.session());

    // this is a simple API to check if there is a user
    app.get('/api/user', (req, res, next) => {
        if (req.user) {
            return res.json({ user: req.user })
        } else {
            return res.json({ user: null })
        }
    })

    app.post('/auth/signup', (req, res) => {
        // destructure username and password off req.body into new constants
        const { email, username, password } = req.body;
        // Check if there is a user with the given username
        models.Users.findOne({
            where: {
                'username': username 
            }
        })
        .then((currentUser) => {
            // if there is a user already
            if (currentUser) {
                // return an error
                return res.json({
                    error: `Sorry, already a username '${username}' is already taken`
                });
            }
            // otherwise, create a new user and encrypt the password
            models.Users.create({
                'email': email,
                'username': username,
                'password': bcrypt.hashSync(password, 10)
            })
            .then((newUser) => {
                transporter.sendMail({
                    from: '"REMIX 👻" <87612cba05-066f0c@inbox.mailtrap.io>', // sender address
                    to: `"${newUser.username}" <${newUser.email}>`, // list of receivers
                    subject: `Hello ${newUser.username} ✔`, // Subject line
                    text: 'Thank you', // plain text body
                    template: 'registration',
                    context: {
                        ...newUser
                    }
                }, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    res.json({ 'status': info});
                    console.log('Message sent: %s', info.messageId);
                });
                // we don't want to return everything, so put all the fields into a new object
                const data = {
                    ...newUser.get()
                };
                // and then delete the password off that object
                delete data.password;
                // return the cleaned object
                return res.json(data);
            })
            .catch((err) => {
                // if there's an error, return that
                return res.json(err);
            });
        })
    })


    app.post('/auth/login',
        passport.authenticate('local'),
        (req, res) => {
            // req.user will have been deserialized at this point, so we need
            // to get the values and remove any sensitive ones
            const cleanUser = {...req.user.get()};
            if (cleanUser.password) {
                console.log(`Removing password from user:`, cleanUser.username);
                delete cleanUser.password
            }
            res.json({ user: cleanUser });
        }
    )

    app.get('/auth/logout', (req, res, next) => {
        if (req.user) {
            req.logout();
            return res.json({ msg: 'user logged out' });
        } else {
            return res.json({ msg: 'no user to log out' });
        }
    });
}

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;