//we import fs to fetch CSV
const fs = require("fs");
const path = require("path");
const  { parse } = require("csv-parse");

const planets = require('./planets.mongo');
const planetsRouter = require("../routes/planets/planets.router");


const habitablePlanets = [];

// to find habitable planets we make a function that renders T/F dependenting on criteria
function isHabitableplanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    // if confirmed then we check for the sunlight the planet gets
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    // and we check for the planets radius so its not like a gasoues planet
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  // the fs.createREadStream('kepler_csv) is the source telling node to process the files data
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      // meanwhile the pipe function converts the data to give it a destination
      // data coming will be readable and the data going is writable
      .pipe(
        parse({
          comment: "#",
          columns: true, // this will render an array in objects
        })
      )
      .on("data", async (data) => {
       //updating the data where mongoose wiull stay with await async function 
        if (isHabitableplanet(data)) {
          // insert + update = upsert 
         // await planets.create({
          //  keplerName: data.kepler_name,
         // });
        }
      }) //error handler to check if the csv name is correct
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} habitable planets found`);
        resolve();
      });
  });
}


//this will make mongo find the documents 
async function getAllPlanets() {
  return await planets.find({
    keplerName: 'Kepler-62 f',
  }, '');
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
  // getAllPlanets,
};
