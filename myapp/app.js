var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');
var mongoose = require('mongoose');

var app = express();

var db;
//connect mongoose db
mongoose.connect('mongodb://127.0.0.1:27017/Hackslash', function(err, database){
    if(err){
        console.log(err)
    }

db = database;
    console.log('Database connected !');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.login);
app.get('/index',routes.index);
app.post('/login',routes.loginPost);
app.post('/register',routes.register);
app.get('/editprofile',routes.editprofile);
//app.get('/user', user.list);
app.get('/chef',routes.chef);
app.get('/dashboard',routes.dashboard);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(8098, function () {
    console.log('app started on port 8098');
});
