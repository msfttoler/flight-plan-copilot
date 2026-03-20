// In-memory "database" for demo purposes
var flights = [
  { id: 1, flightNumber: 'AA100', origin: 'JFK', destination: 'LAX', departureTime: '2024-01-15T08:00:00Z', arrivalTime: '2024-01-15T11:30:00Z', status: 'on-time', gate: 'B22', aircraft: 'Boeing 737', seats: 180, price: 299.99 },
  { id: 2, flightNumber: 'UA201', origin: 'SFO', destination: 'ORD', departureTime: '2024-01-15T09:15:00Z', arrivalTime: '2024-01-15T15:45:00Z', status: 'delayed', gate: 'A14', aircraft: 'Airbus A320', seats: 150, price: 249.99 },
  { id: 3, flightNumber: 'DL305', origin: 'ATL', destination: 'BOS', departureTime: '2024-01-15T10:30:00Z', arrivalTime: '2024-01-15T14:00:00Z', status: 'on-time', gate: 'C08', aircraft: 'Boeing 757', seats: 200, price: 199.99 },
  { id: 4, flightNumber: 'SW440', origin: 'DEN', destination: 'SEA', departureTime: '2024-01-15T12:00:00Z', arrivalTime: '2024-01-15T14:15:00Z', status: 'cancelled', gate: null, aircraft: 'Boeing 737 MAX', seats: 175, price: 179.99 },
  { id: 5, flightNumber: 'AA550', origin: 'MIA', destination: 'DFW', departureTime: '2024-01-15T14:30:00Z', arrivalTime: '2024-01-15T17:00:00Z', status: 'on-time', gate: 'D12', aircraft: 'Airbus A321', seats: 190, price: 229.99 }
];

var bookings = [
  { id: 1, flightId: 1, passengerName: 'John Smith', email: 'john@example.com', seatNumber: '14A', bookedAt: '2024-01-10T12:00:00Z', confirmationCode: 'ABC123' },
  { id: 2, flightId: 2, passengerName: 'Jane Doe', email: 'jane@example.com', seatNumber: '22C', bookedAt: '2024-01-11T09:30:00Z', confirmationCode: 'DEF456' },
  { id: 3, flightId: 3, passengerName: 'Bob Wilson', email: 'bob@example.com', seatNumber: '8F', bookedAt: '2024-01-12T16:00:00Z', confirmationCode: 'GHI789' }
];

var nextFlightId = 6;
var nextBookingId = 4;

module.exports = {
  flights: flights,
  bookings: bookings,
  getNextFlightId: function() { return nextFlightId++; },
  getNextBookingId: function() { return nextBookingId++; }
};
