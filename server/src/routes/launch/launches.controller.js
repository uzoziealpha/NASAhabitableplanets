//we declare a function for the controller to return and controll all launches 
// 
//   module.exports = {
//    launches,
//  }; we include {launches} that matches export from modelfile

const { launches } = require('../../models/launches.model');

//the controller fetches the data and manipulates it to return json in the front end
function getAllLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
    getAllLaunches,
}    