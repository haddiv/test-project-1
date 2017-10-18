// grab the mongoose module
var mongoose = require('mongoose');

module.exports = mongoose.model('Form', {
    name : {type : String, default: ''},
    age : {type : String, default: '15'},
    country : {type : String, default: 'Armenia'}
});