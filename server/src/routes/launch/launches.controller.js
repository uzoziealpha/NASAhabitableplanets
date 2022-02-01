//we declare a function for the controller to return and controll all launches 
// 
//   module.exports = {
//    launches,
//  }; we include {launches} that matches export from modelfile
const { 
    getAllLaunches,
    addNewLaunch,
} = require('../../models/launches.model');
const launchesRouter = require('./launches.router');

//the controller fetches the data and manipulates it to return json in the front end
function httpGetAllLaunches(req, res) {
   return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    // the date should be in this format to accept all dates
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunch(launch);
    //the controller withh return in the Network header 
    return res.status(201).json(launch);
}


module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
};

// we only use the HOOK function names to match the controller name