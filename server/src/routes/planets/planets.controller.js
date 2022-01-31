const planets = require('../../models/planets.model');

//controller functions to get all planets
function getAllPlanets(req, res ) {
  res.status(200).json(planets);
}

module.exports = {
  getAllPlanets
};