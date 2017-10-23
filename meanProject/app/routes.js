// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Categories = require('./models/categories');
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


             app.post('/api/news', function(req, res) {		   
            var news = new Categories(req.body);
			news.save(function(err) {
            if (err)
            res.send(err);
            res.json({ message: 'Category created!' });
    });

})
		
		 // route to handle creating goes here (app.post)
        app.post('/api/nerds', function(req, res) {		   
            var nerd = new Nerd();
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
	
	
     //Update
	/* app.put('/api/nerds/:nerd_id', function(req, rest){
        if(!req.body) { return res.send(400); } 

    Nerds.findById(req.params.nerd_id, function(e,data){  
        if(e) { return res.send(500, e); }
        if(!data) { return res.send(404); } 
        var update = { name : req.body.name, age : req.body.age, city : req.body.city,  }; 
        Nerds.updateById(req.params.nerd_id, update, function(err) {
            if(err) {
                return res.send(500, err);
            }
            res.json(data);
        });
    });
}); */
		
		
		
		
		
		
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