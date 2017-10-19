// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var News = require('./models/new');
const fs = require('fs');
var multer = require('multer');
var upload = multer();

module.exports = function(app) {


    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all nerds in JSON format
        });
    });

app.post('/api/nerds',function(req, res) {
var obj=req.body;
        var a = new Nerd(obj);      // create a new instance of the Bear model
        console.log(obj);

        // save the bear and check for errors
        a.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'nerd created!' });
        });

    });

app.get('/api/nerds/:id', function(req, res) {
        Nerd.findById( req.params.id, function(err, data) {
            if (err)

                res.send(err);

            res.json(data);
        });
    });

app.put('/api/nerds/:id', function(req, res) {
   var q=req.body;

        // use our bear model to find the bear we want
        Nerd.findById(req.params.id, function(err,data) {
            console.log(req.body);

            data.name =q.name;
            data.age=q.age;
            data.country=q.country;

            if (err)
                res.send(err);

              // update the bears info

            // save the bear
            data.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'nerd updated!' });
            });

        });
    });








app.delete('/api/nerds/:id',function(req, res) {

        Nerd.remove({
            _id: req.params.id
        }, function(err, nerd) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });

    });


//news
    app.get('/api/news', function(req, res) {
        // use mongoose to get all nerds in the database
        News.find(function(err, data) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(data); // return all nerds in JSON format
        });
    });



    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)







    app.post('/api/news',upload.single('photo'), function(req, res) {
        var obj=req.body;
        var a = new News(obj);

console.log(req.file);
       // a.data = fs.readFileSync(req.file.path);
       //    a.contentType = req.file.mimetype;
        // create a new instance of the Bear model
        console.log(a);

        // save the bear and check for errors
        a.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'nerd created!' });
        });

    });

    app.get('/api/news/:id', function(req, res) {
        News.findById( req.params.id, function(err, data) {
            if (err)

                res.send(err);

            res.json(data);
        });
    });

    app.put('/api/news/:id', function(req, res) {
        var q=req.body;

        // use our bear model to find the bear we want
        News.findById(req.params.id, function(err,data) {
            console.log(req.body);

            data.data =q.data;
            data.description=q.description;
            data.category=q.category;

            if (err)
                res.send(err);

            // update the bears info

            // save the bear
            data.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'news updated!' });
            });

        });
    });








    app.delete('/api/news/:id',function(req, res) {

        News.remove({
            _id: req.params.id
        }, function(err, news) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });

    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });


};
