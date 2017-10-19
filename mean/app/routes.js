// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Geek = require('./models/geek');
var Category = require('./models/category');


module.exports = function (app) {
    app.get('/api/nerds', function (req, res) {
        Nerd.find(function (err, nerds) {
            if (err)
                res.send(err);
            res.json(nerds);
        });
    });
    app.get('/api/news', function (req, res) {
        Category.find(function (err, category) {
            if (err)
                res.send(err);
            res.json(category);
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
    app.post('/api/news', function (req, res) {
        var category = new Category(req.body);
        console.log(req.body);
        category.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Category created!'});
            console.log('Category created!');
        });
    });
    app.delete('/api/news/:id', function (req, res) {
        var id = req.params.id;
        Category.remove({_id: req.params.id}, function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'deleted' });
        });
    });
    /* app.delete('/api/nerds/:id', function (req, res) {
          var id = req.params.id;
          Nerd.remove({_id: req.params.id}, function(err) {
              if (err)
                  res.send(err);

              res.json({ message: 'deleted' });
          });
      });

          app.get('/api/nerd/:id', function (req, res) {
             var id = req.params.id;
             console.log(id);
             Nerd.get({_id: req.params.id}, function (err) {
                 if (err)
                     res.send(err);
                 res.json({ message: 'updated' });
             });
         });
         */

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};