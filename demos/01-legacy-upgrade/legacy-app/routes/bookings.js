var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('lodash');
var db = require('../db');

// GET all bookings
router.get('/', function(req, res) {
  var results = db.bookings;

  // join flight data manually with nested loops
  var enriched = [];
  for (var i = 0; i < results.length; i++) {
    var booking = _.clone(results[i]);
    for (var j = 0; j < db.flights.length; j++) {
      if (db.flights[j].id === booking.flightId) {
        booking.flight = db.flights[j];
        break;
      }
    }
    booking.bookedAgo = moment(booking.bookedAt).fromNow();
    enriched.push(booking);
  }

  res.json({ count: enriched.length, bookings: enriched });
});

// GET single booking by confirmation code
router.get('/confirm/:code', function(req, res) {
  var booking = null;
  for (var i = 0; i < db.bookings.length; i++) {
    if (db.bookings[i].confirmationCode === req.params.code) {
      booking = db.bookings[i];
      break;
    }
  }

  if (!booking) {
    res.status(404).json({ error: 'Booking not found' });
    return;
  }

  // find flight
  var flight = _.find(db.flights, { id: booking.flightId });
  booking.flight = flight;
  res.json(booking);
});

// POST create booking — no validation, generates confirmation code badly
router.post('/', function(req, res) {
  // check flight exists
  var flight = _.find(db.flights, { id: parseInt(req.body.flightId) });
  if (!flight) {
    res.status(404).json({ error: 'Flight not found' });
    return;
  }

  // check flight not cancelled
  if (flight.status === 'cancelled') {
    res.status(400).json({ error: 'Cannot book a cancelled flight' });
    return;
  }

  // generate confirmation code — weak randomness
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var code = '';
  for (var i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  var newBooking = {
    id: db.getNextBookingId(),
    flightId: parseInt(req.body.flightId),
    passengerName: req.body.passengerName,
    email: req.body.email,
    seatNumber: req.body.seatNumber || 'TBD',
    bookedAt: moment().toISOString(),
    confirmationCode: code
  };

  db.bookings.push(newBooking);

  // send confirmation — uses string concatenation for HTML email body
  var htmlBody = '<html><body>'
    + '<h1>Booking Confirmed!</h1>'
    + '<p>Dear ' + newBooking.passengerName + ',</p>'
    + '<p>Your flight ' + flight.flightNumber + ' from ' + flight.origin + ' to ' + flight.destination + ' is booked.</p>'
    + '<p>Confirmation Code: <strong>' + newBooking.confirmationCode + '</strong></p>'
    + '<p>Seat: ' + newBooking.seatNumber + '</p>'
    + '<p>Departure: ' + moment(flight.departureTime).format('MMMM Do YYYY, h:mm A') + '</p>'
    + '</body></html>';

  console.log('Would send email to: ' + newBooking.email);
  console.log('Email body: ' + htmlBody);

  res.status(201).json({
    booking: newBooking,
    flight: flight,
    message: 'Booking confirmed! Confirmation code: ' + code
  });
});

// DELETE cancel booking
router.delete('/:id', function(req, res) {
  var index = -1;
  for (var i = 0; i < db.bookings.length; i++) {
    if (db.bookings[i].id === parseInt(req.params.id)) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    res.status(404).json({ error: 'Booking not found' });
    return;
  }

  var cancelled = db.bookings.splice(index, 1)[0];
  res.json({ message: 'Booking ' + cancelled.confirmationCode + ' cancelled', booking: cancelled });
});

module.exports = router;
