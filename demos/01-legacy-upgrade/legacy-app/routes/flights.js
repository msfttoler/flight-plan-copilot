var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('lodash');
var db = require('../db');

// GET all flights — with filtering
router.get('/', function(req, res) {
  var results = db.flights;

  // filter by origin
  if (req.query.origin) {
    results = _.filter(results, function(f) {
      return f.origin === req.query.origin.toUpperCase();
    });
  }

  // filter by destination
  if (req.query.destination) {
    results = _.filter(results, function(f) {
      return f.destination === req.query.destination.toUpperCase();
    });
  }

  // filter by status
  if (req.query.status) {
    results = _.filter(results, function(f) {
      return f.status === req.query.status;
    });
  }

  // sort by departure
  results = _.sortBy(results, 'departureTime');

  // add formatted times using moment
  var formatted = _.map(results, function(flight) {
    var f = _.clone(flight);
    f.departureFormatted = moment(f.departureTime).format('h:mm A');
    f.arrivalFormatted = moment(f.arrivalTime).format('h:mm A');
    f.duration = moment(f.arrivalTime).diff(moment(f.departureTime), 'hours', true).toFixed(1) + ' hours';
    return f;
  });

  res.json({ count: formatted.length, flights: formatted });
});

// GET single flight
router.get('/:id', function(req, res) {
  var flight = _.find(db.flights, { id: parseInt(req.params.id) });
  if (!flight) {
    res.status(404).json({ error: 'Flight not found' });
    return;
  }
  var f = _.clone(flight);
  f.departureFormatted = moment(f.departureTime).format('dddd, MMMM Do YYYY, h:mm A');
  f.arrivalFormatted = moment(f.arrivalTime).format('dddd, MMMM Do YYYY, h:mm A');
  res.json(f);
});

// POST new flight — no input validation!
router.post('/', function(req, res) {
  var newFlight = {
    id: db.getNextFlightId(),
    flightNumber: req.body.flightNumber,
    origin: req.body.origin,
    destination: req.body.destination,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    status: req.body.status || 'on-time',
    gate: req.body.gate || null,
    aircraft: req.body.aircraft || 'Unknown',
    seats: req.body.seats || 0,
    price: req.body.price || 0
  };

  db.flights.push(newFlight);
  res.status(201).json(newFlight);
});

// PUT update flight — callback style error handling
router.put('/:id', function(req, res, next) {
  var flight = _.find(db.flights, { id: parseInt(req.params.id) });
  if (!flight) {
    res.status(404).json({ error: 'Flight not found' });
    return;
  }

  // manual field-by-field update
  if (req.body.flightNumber) flight.flightNumber = req.body.flightNumber;
  if (req.body.origin) flight.origin = req.body.origin;
  if (req.body.destination) flight.destination = req.body.destination;
  if (req.body.departureTime) flight.departureTime = req.body.departureTime;
  if (req.body.arrivalTime) flight.arrivalTime = req.body.arrivalTime;
  if (req.body.status) flight.status = req.body.status;
  if (req.body.gate !== undefined) flight.gate = req.body.gate;
  if (req.body.aircraft) flight.aircraft = req.body.aircraft;
  if (req.body.seats) flight.seats = req.body.seats;
  if (req.body.price) flight.price = req.body.price;

  flight.updatedAt = moment().toISOString();

  res.json(flight);
});

// DELETE flight
router.delete('/:id', function(req, res) {
  var index = _.findIndex(db.flights, { id: parseInt(req.params.id) });
  if (index === -1) {
    res.status(404).json({ error: 'Flight not found' });
    return;
  }

  // also remove related bookings — but using a loop instead of filter
  var toRemove = [];
  for (var i = 0; i < db.bookings.length; i++) {
    if (db.bookings[i].flightId === parseInt(req.params.id)) {
      toRemove.push(i);
    }
  }
  // BUG: removing by index in forward order shifts indices
  for (var j = 0; j < toRemove.length; j++) {
    db.bookings.splice(toRemove[j], 1);
  }

  db.flights.splice(index, 1);
  res.json({ message: 'Flight deleted' });
});

// Search flights — uses string concatenation for query building
router.get('/search/:term', function(req, res) {
  var term = req.params.term.toLowerCase();
  var results = [];
  for (var i = 0; i < db.flights.length; i++) {
    var f = db.flights[i];
    var searchable = f.flightNumber + ' ' + f.origin + ' ' + f.destination + ' ' + f.aircraft;
    if (searchable.toLowerCase().indexOf(term) !== -1) {
      results.push(f);
    }
  }
  res.json({ count: results.length, results: results });
});

module.exports = router;
