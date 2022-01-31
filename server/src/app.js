//***All express JS & Json middleware codes live here
//express object import 
const express = require('express');

//import cors middleware
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

//express route handlers
const app = express();



//JSON, CORS, EXPRESS middlewares 
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
//middleware to get planetRoutes
app.use(planetsRouter);

module.exports = app;