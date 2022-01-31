//***All express JS & Json middleware codes live here
//express object import 
const express = require('express');
// we need path to serve the express middlware that joins both client and sever together in the public so we can run server in root directory
const path = require('path');

//import cors middleware

const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

//express route handlers
const app = express();



//JSON, CORS, EXPRESS middlewares 
app.use(cors({
    origin: 'http://localhost:3000',
}));
//express middlewares => thr path.join will make express middleware work on localhost:8000
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));



//middleware to get planetRoutes
app.use(planetsRouter);






module.exports = app;