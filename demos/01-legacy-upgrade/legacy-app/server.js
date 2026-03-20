var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var _ = require('lodash');
var flightRoutes = require('./routes/flights');
var bookingRoutes = require('./routes/bookings');
var db = require('./db');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logging middleware
app.use(function(req, res, next) {
  var timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log('[' + timestamp + '] ' + req.method + ' ' + req.url);
  next();
});

// CORS — wide open (security issue)
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);

// health check
app.get('/health', function(req, res) {
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: moment().toISOString() });
});

// error handler — leaks stack traces
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error: err.message,
    stack: err.stack
  });
});

app.listen(PORT, function() {
  console.log('Flight Tracker API listening on port ' + PORT);
  console.log('Started at: ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
});

module.exports = app;
