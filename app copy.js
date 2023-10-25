var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//KHAI BAO ROUTER
var storeRouter = require('./routes/store');
var homepageRouter = require('./routes/homepage');
var gameRouter = require('./routes/game');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Khai bao cau hinh thu vien cho equal
var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat')); 


//khai báo & cấu hình mongoose
var mongoose = require('mongoose');
//Note: cần khai báo tên db ở cuối uri của connection string
var uri = "mongodb+srv://longnbgch210038:a1234@cluster1.pie7nmu.mongodb.net/store";
mongoose.connect(uri)
  .then(() => console.log('connect to db ok'))
  .catch((err) => console.log('connect to db error'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ĐƯỜNG ĐẪN ĐẾN TRANG localhost:3001/store
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/store', storeRouter);
app.use('/homepage', homepageRouter);
app.use('/game', gameRouter);

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

// cấu hình port của server để deploy lên cloud
app.listen(process.env.PORT || 3001);

module.exports = app;
