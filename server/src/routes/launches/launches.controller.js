//we declare a function for the controller to return and controll all launches 
// 
//   module.exports = {
//    launches,
//  }; we include {launches} that matches export from modelfile
const { 
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
} = require('../../models/launches.model');

const launchesRouter = require('./launches.router');

//the controller fetches the data and manipulates it to return json in the front end
function httpGetAllLaunches(req, res) {
   return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;
    // the date should be in this format to accept all dates
    
 //******* How the API fixes missing data *_********
// the if statement states if launch mission is missing ||(or) ..... 
//then respond with a response of status 400.  
// ****SERVER COMPLAINS FOR BAD REQUEST
    if (!launch.mission || !launch.rocket || !launch.launchDate 
        || !launch.target) {
           return res.status(400).json({
               error: 'Missing required launch props',
           });
        }


    
    launch.launchDate = new Date(launch.launchDate);
    //***** This if statement function checks if the date is valid or not */
    //using isNan = not a number
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    addNewLaunch(launch);
    //the controller withh return in the Network header 
    return res.status(201).json(launch);
}


function httpAbortLaunch(req, res) {
   const launchId = Number(req.params.id);

   //telling user error message from delete
   if (!existsLaunchWithId(launchId)) {
     return res.status(404).json({
       error: 'Launch not found',
     });
    }

    const aborted = abortLaunchById(launchId);
   //if there is a launch date then we can delete 
   return res.status(200).json(aborted);
  
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};

// we only use the HOOK function names to match the controller name