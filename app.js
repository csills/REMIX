const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

dotenv.load();

// const apiRemixRouter = require('./routes/api/remix');
const apiMailRouter = require('./routes/api/mail');
//const api = require('./routes/api');
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
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'client/build')));

setupAuth(app);

app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;
  imageFile.mv(`${__dirname}/client/build/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    // res.send('File uploaded!');
    res.json({file: `upload/${req.body.filename}.jpg`});
  });

})

// app.use('/api/remix', apiRemixRouter);
app.use('/api/mail', apiMailRouter);

//app.use('/api', api);

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
