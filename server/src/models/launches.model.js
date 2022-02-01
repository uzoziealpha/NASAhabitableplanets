// we have to store our lunch in an object then making individual variables to be turned into data
const launches = new Map();



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

module.exports = {
   launches,
};