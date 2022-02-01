// we have to store our lunch in an object then making individual variables to be turned into data
const launches = new Map();

//this will be equal to the latest last number 
let latestFlightNumber = 100;

//our map will use the map id to pass the ID as the key
const launch = {
    flightNumber: 100,
    mission: 'Keplar Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2035'),
    destination: 'Keplar-442 b',
    customer: ['NASA', 'ALPHAX'],
    upcoming: true,
    success: true,
};

//this will get each flight launcy by ID from the function launch above
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

//creating a POST for new lunches MODELS
function addNewLaunch(launch) {
    //to increase latest flightNo by 1
    latestFlightNumber++;
    //seekinging flight number keys 
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
    //we set these fields to make sure the user has a response after POSTing new launches
          success: true,
          upcoming: true,
          customers: ['Alpha', 'NASA'],  
          flightNumber: latestFlightNumber, 
        })
    );
}


module.exports = {
   getAllLaunches,
   addNewLaunch,
};