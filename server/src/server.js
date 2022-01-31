const http = require('http');

//importing the app object
const app = require('./app');

//importing the data model into server
const {loadPlanetsData} = require('./models/planets.model'); 

const PORT = process.env.PORT || 8000;

//http server
const server = http.createServer(app);


//must include await function inside async
async function startServer() {
    await loadPlanetsData();
    //callback listening function
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
} 
startServer();



