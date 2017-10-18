// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Geek = require('./models/geek');
var Form = require('./models/form');


module.exports = function (app) {

    app.get('/api/nerds', function (req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function (err, nerds) {
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });
    app.post('/api/form', function (req, res) {
        var nerd = new Nerd(req.body);
        // save the bear and check for errors
        nerd.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Nerd created!'});
            console.log('Nerd created!');
        });
    });

    app.delete('/api/nerds/:id', function (req, res) {
        var id = req.params.id;
        Nerd.remove({_id: req.params.id
        }, function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'deleted' });
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};