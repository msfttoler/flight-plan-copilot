var _ = require('lodash');

// Utility functions — intentionally old-style

// format currency with string concatenation
function formatPrice(amount) {
  return '$' + amount.toFixed(2);
}

// calculate distance between airports (fake lookup)
var airportCoords = {
  'JFK': { lat: 40.6413, lon: -73.7781 },
  'LAX': { lat: 33.9425, lon: -118.4081 },
  'SFO': { lat: 37.6213, lon: -122.3790 },
  'ORD': { lat: 41.9742, lon: -87.9073 },
  'ATL': { lat: 33.6407, lon: -84.4277 },
  'BOS': { lat: 42.3656, lon: -71.0096 },
  'DEN': { lat: 39.8561, lon: -104.6737 },
  'SEA': { lat: 47.4502, lon: -122.3088 },
  'MIA': { lat: 25.7959, lon: -80.2870 },
  'DFW': { lat: 32.8998, lon: -97.0403 }
};

// Haversine formula — using var and old math patterns
function calculateDistance(origin, destination) {
  var from = airportCoords[origin];
  var to = airportCoords[destination];
  if (!from || !to) return null;

  var R = 3959; // Earth radius in miles
  var dLat = (to.lat - from.lat) * Math.PI / 180;
  var dLon = (to.lon - from.lon) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(from.lat * Math.PI / 180) * Math.cos(to.lat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// validate email — hand-rolled regex (flawed)
function isValidEmail(email) {
  var re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  return re.test(email);
}

// generate seat map — deeply nested loops
function generateSeatMap(totalSeats, bookedSeats) {
  var rows = Math.ceil(totalSeats / 6);
  var seatLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  var seatMap = [];

  for (var row = 1; row <= rows; row++) {
    var rowData = { row: row, seats: [] };
    for (var s = 0; s < seatLetters.length; s++) {
      var seatId = row + seatLetters[s];
      var isBooked = false;
      for (var b = 0; b < bookedSeats.length; b++) {
        if (bookedSeats[b] === seatId) {
          isBooked = true;
          break;
        }
      }
      rowData.seats.push({
        id: seatId,
        available: !isBooked,
        type: (seatLetters[s] === 'A' || seatLetters[s] === 'F') ? 'window' :
              (seatLetters[s] === 'C' || seatLetters[s] === 'D') ? 'aisle' : 'middle'
      });
    }
    seatMap.push(rowData);
  }

  return seatMap;
}

module.exports = {
  formatPrice: formatPrice,
  calculateDistance: calculateDistance,
  isValidEmail: isValidEmail,
  generateSeatMap: generateSeatMap
};
