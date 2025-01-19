const express = require('express');

const planetsController = require('./planets.controller'); // Correct import

const planetsRouter = express.Router();

planetsRouter.get('/planets', planetsController.getAllPlanets);

module.exports = planetsRouter;