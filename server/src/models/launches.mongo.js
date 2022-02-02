//import mongoose
const mongoose = require('mongoose');


//making the first mongoose schema that will be modeled 
//** 1 - WE make the model of each property from planet.model.js
const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
       type: Date,
       required: true,
    },
    mission: {
       type: String,
       required: true, 
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },
    customers: [ String ],
    upcoming: {
        type: Boolean,
        required: true,
    },
    success: {
        type: Boolean,
        required: true, 
    
    },
});

//new schema for the targets planets that live in the planet collections of 8

// This model connects launches with the "launch" collection in Mongoose
mongoose.model = mongoose.model('Launch', launchesSchema);
// This object will allow us to read and write documets 