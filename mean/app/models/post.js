var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    category : {type : Array, default: ''},
    title : {type : String, default: '25'},
    content : {type : String, default: 'Armenia'},
    images:{ofBuffer: [Buffer], default: ''},
});