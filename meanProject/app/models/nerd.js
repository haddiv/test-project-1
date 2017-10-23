// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

module.exports = mongoose.model('Nerd', {
    name : {type : String, default: 'Nrane'},
	age : {type : Number, default: 25},
	city:{type : String,default:"Gyumri"}
});



