//we need express framwork to get express router
const express = require('express');

//importing the controller into our routes file
const { 
    getAllLaunches,
} = require('./launches.controller');


//defining our launches routes to be an express.router object todefine a router
const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);

module.exports = launchesRouter;