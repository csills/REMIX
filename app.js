const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.load();

const apiRemixRouter = require('./routes/api/remix');
const apiUserRemixRouter = require('./routes/api/userremix');
const apiGalleryRouter = require('./routes/api/gallery');
const apiGalleriesRouter = require('./routes/api/galleries');
const setupAuth = require('./auth');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));


setupAuth(app);

app.use('/api/remix', apiRemixRouter);
app.use('/api/userremix', apiUserRemixRouter);
app.use('/api/gallery', apiGalleryRouter);
app.use('/api/galleries', apiGalleriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
