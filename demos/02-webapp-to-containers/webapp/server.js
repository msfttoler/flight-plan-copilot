const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('combined'));

// In-memory flight data
const flights = [
  { id: 'AA100', origin: 'JFK', destination: 'LAX', departs: '08:00', arrives: '11:30', status: 'On Time',  gate: 'B22' },
  { id: 'UA201', origin: 'SFO', destination: 'ORD', departs: '09:15', arrives: '15:45', status: 'Delayed',  gate: 'A14' },
  { id: 'DL305', origin: 'ATL', destination: 'BOS', departs: '10:30', arrives: '14:00', status: 'On Time',  gate: 'C08' },
  { id: 'SW440', origin: 'DEN', destination: 'SEA', departs: '12:00', arrives: '14:15', status: 'Cancelled', gate: '—'  },
  { id: 'AA550', origin: 'MIA', destination: 'DFW', departs: '14:30', arrives: '17:00', status: 'Boarding', gate: 'D12' },
  { id: 'UA610', origin: 'ORD', destination: 'DEN', departs: '16:00', arrives: '18:00', status: 'On Time',  gate: 'F03' },
];

// Web UI
app.get('/', (req, res) => {
  res.render('dashboard', {
    flights,
    title: 'Flight Dashboard',
    lastUpdated: new Date().toLocaleTimeString()
  });
});

// API endpoints
app.get('/api/flights', (req, res) => {
  res.json(flights);
});

app.get('/api/flights/:id', (req, res) => {
  const flight = flights.find(f => f.id === req.params.id.toUpperCase());
  if (!flight) return res.status(404).json({ error: 'Flight not found' });
  res.json(flight);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    version: process.env.APP_VERSION || '1.0.0',
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`Flight Dashboard running on http://localhost:${PORT}`);
});
