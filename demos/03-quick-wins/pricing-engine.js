// ============================================================
//  FLIGHT PRICING ENGINE — For /tests and /doc demo
//  Ask Copilot to: generate tests, add JSDoc, find edge cases
// ============================================================

/**
 * Calculate the total price for a flight booking.
 */
export function calculateFlightPrice(flight, passengers, options = {}) {
  if (!flight || !flight.basePrice) {
    throw new Error('Invalid flight data');
  }
  if (!Array.isArray(passengers) || passengers.length === 0) {
    throw new Error('At least one passenger is required');
  }

  let totalBase = 0;

  for (const pax of passengers) {
    let fare = flight.basePrice;

    // Age-based pricing
    if (pax.age < 2) {
      fare = 0; // Infants fly free (lap child)
    } else if (pax.age < 12) {
      fare *= 0.75; // Children get 25% off
    } else if (pax.age >= 65) {
      fare *= 0.90; // Seniors get 10% off
    }

    // Cabin class multiplier
    if (pax.cabin === 'business') {
      fare *= 2.5;
    } else if (pax.cabin === 'first') {
      fare *= 4.0;
    }

    // Checked bags
    const bags = pax.checkedBags || 0;
    if (bags > 0) fare += 35; // first bag
    if (bags > 1) fare += 45; // second bag
    if (bags > 2) fare += 100 * (bags - 2); // additional bags $100 each

    totalBase += fare;
  }

  // Taxes and fees
  const taxRate = options.taxRate ?? 0.075;
  const securityFee = 5.60 * passengers.length;
  const facilityCharge = 4.50 * passengers.length;

  const taxes = totalBase * taxRate;
  const subtotal = totalBase + taxes + securityFee + facilityCharge;

  // Discount codes
  let discount = 0;
  if (options.discountCode === 'FLY20') {
    discount = subtotal * 0.20;
  } else if (options.discountCode === 'EARLYBIRD') {
    discount = subtotal * 0.10;
  } else if (options.discountCode === 'COMPANION') {
    // Second passenger flies at 50% off base fare
    if (passengers.length >= 2) {
      discount = flight.basePrice * 0.5;
    }
  }

  const total = Math.max(subtotal - discount, 0);

  return {
    passengers: passengers.length,
    baseTotal: round(totalBase),
    taxes: round(taxes),
    fees: round(securityFee + facilityCharge),
    discount: round(discount),
    total: round(total),
    perPerson: round(total / passengers.length),
  };
}

/**
 * Determine the dynamic pricing tier based on how full the flight is
 * and how close the departure date is.
 */
export function getDynamicPricingMultiplier(flight) {
  const now = new Date();
  const departure = new Date(flight.departureDate);
  const daysUntil = (departure - now) / (1000 * 60 * 60 * 24);
  const occupancyRate = flight.bookedSeats / flight.totalSeats;

  // Last-minute premium
  if (daysUntil <= 3) return 2.5;
  if (daysUntil <= 7) return 1.8;
  if (daysUntil <= 14) return 1.4;

  // High demand premium
  if (occupancyRate > 0.9) return 1.6;
  if (occupancyRate > 0.75) return 1.3;

  // Low demand discount
  if (daysUntil > 60 && occupancyRate < 0.3) return 0.8;

  return 1.0;
}

function round(n) {
  return Math.round(n * 100) / 100;
}
