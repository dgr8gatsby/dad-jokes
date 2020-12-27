const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

// Load env variables
require('dotenv').config();
const mongo = require ('./mongo.config.js');


// TODO: Heather you can use local Mongo instead for now
const app = express ();
const PORT = process.env.PORT;
const hostname = 'localhost';

app.listen (PORT, err => {
  if (err) throw err;
  console.log (`application listenting on http://${hostname}:${PORT}`);
});

// Used to parse POST body data
app.use (bodyParser.urlencoded ({extended: true}));

// Create a public folder for client
app.use (express.static (path.join (__dirname, 'public')));

// Default path for main application
app.get ('/', (req, res) => {
  res.sendFile (__dirname + '/index.html');
});

// Handle new jokes
app.post ('/jokes', (req, res) => {
  // Just loging requests from the client in the console
  console.log (req.body);

  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  const Joke = mongo.models.joke;

  const newJoke = new Joke ({
    type: req.body.type,
    headline: req.body.headline,
    punchline: req.body.punchline,
  });

  newJoke.save (error => {
    if (error) {
      console.error (error);
    } else {
      //res.end ('{"success" : "New joke added successfully", "status" : 200}');
    }
  });
});

// TODO: Make a path to return a test joke

// For testing purpose:
app.get ('/nani', (rq, res) => {
  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  const Joke = mongo.models.joke;

  const newJoke = new Joke ({
    type: 'question',
    headline: 'Where did captain hook find his hook?',
    punchline: 'A second-hand store!',
  });

  newJoke.save (error => {
    if (error) {
      console.error (error);
    } else {
      res.end ('{"success" : "New joke added successfully", "status" : 200}');
    }
  });
});
