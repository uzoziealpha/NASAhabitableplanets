//***All express JS & Json middleware codes live here
//express object import 
const express = require('express');
// we need path to serve the express middlware that joins both client and sever together in the public so we can run server in root directory
const path = require('path');

//import cors middleware
const cors = require('cors');

//import planertouter
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');



//import morgan to handle logs
const morgan = require('morgan');
const { launches } = require('./models/launches.model');

//instatiating express route handlers
const app = express();


//JSON, CORS, EXPRESS middlewares 
app.use(cors({
    origin: 'http://localhost:3000',
}));
//morgan log middleware joining both client and server logs 
app.use(morgan('combined'));

//express middlewares => thr path.join will make express middleware work on localhost:8000
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));



//express middleware to get planetRoutes
app.use('/planets', planetsRouter);
//express middleware to get launchdates or ID
app.use('/launches', launchesRouter);


//middleware to make the indexpage directly route to the launch page when click
app.use('/*', (req, res) => {
//express use the * to make use of every route combining client and server
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})





module.exports = app;