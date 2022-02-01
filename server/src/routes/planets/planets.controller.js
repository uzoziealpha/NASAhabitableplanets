// node uses this require model function to process the model data
const { planets } = require('../../models/planets.model');
const planetsRouter = require('./planets.router');

//controller functions to get all planets request and response
function getAllPlanets(req, res ) {
  res.status(200).json(planets);
}

module.exports = {
    getAllPlanets,
}