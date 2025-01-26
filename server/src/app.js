const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
  }));
app.use(morgan('combined'));

// Parse incoming JSON from the body of incoming requests
app.use(express.json()); 

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Use the planets router
app.use('/planets', planetsRouter);
// Use the launches router
app.use('/launches', launchesRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;