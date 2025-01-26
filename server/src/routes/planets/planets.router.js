const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller'); // Correct import

const planetsRouter = express.Router();

// /planets and /planets/
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;