const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');


// Load env variables:
require ('dotenv').config ();
const mongo = require ('./mongo.config');


// TODO: Heather you can use local Mongo instead for now
const app = express ();
const PORT = process.env.PORT;

app.listen (PORT, err => {
  if (err) throw err;
  const hostname = 'localhost';
  console.log (`application listenting on http://${hostname}:${PORT}`);
});

const auth = require('./auth');
auth.setup(app);

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

// If user is currently logged in, continue with the next callback.
// Otherwise redirect to login page.
const checkLogin = (req, res, next) => {
  if (req.user) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

app.get('/user', checkLogin, (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;
  res.end(JSON.stringify(userProfile, null, 4));
});

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
