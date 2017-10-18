// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Geek = require('./models/geek');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err){
                    res.send(err);
                    console.log(err)
                }


                res.json(nerds); // return all nerds in JSON format
            });
        });
		
		
		
		 // route to handle creating goes here (app.post)
        app.post('/api/nerds', function(req, res) {		   
            var nerd = new Nerd(req.body);
			nerd.save(function(err) {
            if (err)
            res.send(err);
            res.json({ message: 'Nerd created!' });
    });
			
		        });
		// route to handle delete goes here (app.delete)
		  app.delete('/api/nerds/:nerd_id', function(req, res) {
		   Nerd.remove({_id: req.params.nerd_id
			}, function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
    });
	
	
    /* //Update
	app.put(function(req, res) {

    // use our bear model to find the bear we want
    Nerd.findById(req.params.nerd_id, function(err, nerd) {

        if (err)
            res.send(err);

        nerd.name = req.body.name;  // update the nerds info

        // save the nerd
        nerd.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'nerd updated!' });
        });

    });
})  */
		
		
		
		
		
		
		app.get('/api/geek', function(req, res) {
            // use mongoose to get all nerds in the database
            Geek.find(function(err, geek) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(geek); // return all nerds in JSON format
            });
        });

       
        

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };