const http = require('http');

//importing the app object
const app = require('./app');


const PORT = process.env.PORT || 8000;

//http server
const server = http.createServer(app);


//callback listening function
server.listen(PORT, () => {
   console.log(`Listening on port ${PORT}...`);
});

