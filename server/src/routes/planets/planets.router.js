const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller'); // Correct import

const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;