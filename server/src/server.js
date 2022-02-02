const http = require('http');
const mongoose = require('mongoose');

//importing the app object
const app = require('./app');

//importing the data model into server
const {loadPlanetsData} = require('./models/planets.model'); 

const PORT = process.env.PORT || 4000;

//http server
const server = http.createServer(app);

//pasting mongoURL   changing the first name to whatever 
const MONGO_URL = 'mongodb+srv://nasa-api:9fmqWw4x4spsafaX@cluster0.ealox.mongodb.net/nasa?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
    console.log('MongoDB connecting ready!');
})

//declare mongoose error 
mongoose.connection.on('error', (err) => {
    console.error(err);
})




//must include await function inside async for mongoose and datas
async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
    //callback listening function
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
} 
startServer();



