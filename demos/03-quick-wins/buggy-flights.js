// ============================================================
//  FLIGHT BOOKING SYSTEM — INTENTIONALLY BUGGY
//  Use Copilot to find and fix all the bugs!
//  There are 7 bugs hiding in this code.
// ============================================================

// BUG 1: Off-by-one in boarding group assignment
function assignBoardingGroup(seatRow) {
  if (seatRow <= 5) return 'First Class';
  if (seatRow <= 10) return 'Priority';
  if (seatRow <= 20) return 'Group A';
  if (seatRow <= 30) return 'Group B';
  // BUG: rows 31+ fall through and return undefined
}

// BUG 2: Wrong comparison operator
function isFlightOnTime(scheduledTime, actualTime) {
  const scheduled = new Date(scheduledTime);
  const actual = new Date(actualTime);
  const diffMinutes = (actual - scheduled) / 1000 / 60;
  // BUG: should be diffMinutes <= 15, not diffMinutes < 15
  // Also: doesn't handle early arrivals correctly
  return diffMinutes = 15; // Assignment instead of comparison!
}

// BUG 3: Shallow copy issue with passenger manifest
function duplicateManifest(manifest) {
  const copy = [...manifest];
  // BUG: objects inside are still references, not deep copies
  return copy;
}

// BUG 4: Async booking that never resolves on error
async function bookFlight(flightId, passengers) {
  const results = [];
  for (const passenger of passengers) {
    try {
      const booking = await createBooking(flightId, passenger);
      results.push(booking);
    } catch (error) {
      console.log('Failed to book: ' + passenger.name);
      // BUG: doesn't push error or re-throw — silently loses failures
    }
  }
  return results;
}

// BUG 5: Incorrect fare calculation
function calculateFare(baseFare, passengers, taxRate) {
  let total = 0;
  for (let i = 0; i <= passengers.length; i++) { // BUG: <= should be <
    const passenger = passengers[i];
    const fare = passenger.isChild ? baseFare * 0.5 : baseFare;
    total += fare;
  }
  const tax = total * taxRate;
  return total + tax;
}

// BUG 6: Gate assignment race condition pattern
function findAvailableGate(gates) {
  let available = null;
  gates.forEach(function(gate) {
    if (gate.status === 'empty') {
      available = gate; // BUG: keeps overwriting — returns LAST empty, not first
      gate.status = 'assigned'; // Mutates during iteration
    }
  });
  return available;
}

// BUG 7: Seat selection with wrong data structure lookup
function isSeatAvailable(seatMap, seatId) {
  // seatMap is an object like { '14A': true, '14B': false }
  // true = occupied, false = available
  return seatMap[seatId]; // BUG: returns true for OCCUPIED seats
}


// ============================================================
//  MOCK HELPERS (for the functions above to reference)
// ============================================================
async function createBooking(flightId, passenger) {
  return { flightId, passenger: passenger.name, confirmed: true };
}

// Export for testing
module.exports = {
  assignBoardingGroup,
  isFlightOnTime,
  duplicateManifest,
  bookFlight,
  calculateFare,
  findAvailableGate,
  isSeatAvailable
};
