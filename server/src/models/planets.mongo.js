const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
   keplerName: {
       type: String,
       required: true,
   } 
});


// This object will allow us to read and write documents 
module.exports = mongoose.model('Planet', planetSchema);
// This model connects launches with the "launch" collection in Mongoose

