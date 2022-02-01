//we need express framwork to get express router
const express = require('express');

//importing the controller into our routes file
const { 
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
} = require('./launches.controller');


//defining our launches routes to be an express.router object todefine a router
const launchesRouter = express.Router();

//express makes it easy in app.js to let us add '/' into the routes not the whole text
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

// this will match planets/ 


module.exports = launchesRouter;