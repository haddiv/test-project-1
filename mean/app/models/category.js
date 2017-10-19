var mongoose = require('mongoose');

module.exports = mongoose.model('Category', {
    name : {type : String, default: 'some category'},
    orderd : {type : String, default: 'some category'}
});