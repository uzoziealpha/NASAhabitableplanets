// node uses this require model function to process the model data
const { getAllPlanets } = require('../../models/planets.model');

//controller functions to get all planets request and response
function httpGetAllPlanets(req, res ) {
   return res.status(200).json(getAllPlanets());
}




module.exports = {
    httpGetAllPlanets,
};