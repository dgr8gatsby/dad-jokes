const mongo = require ('./mongo.config'); // Use Mongo db for data management
const mongoose = require ('mongoose'); // Use Mongoose for data schema
const jokeSchema = require ('../models/joke.js');
const express = require ('express');
const router = express.Router ();
const data = require ('../data/jokes.json');

// End point for adding new Joke documents to the mongo Database
router.post ('/addjoke', (req, res) => {
  // Log requests from the client in the console for debugging
  console.log (req.body);

  // Connect to the Mongoose DB
  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  // Reference the schema for a Joke
  const Joke = jokeSchema;

  // Create a new Joke Object
  const newJoke = new Joke ({
    type: req.body.type,
    headline: req.body.headline,
    punchline: req.body.punchline,
    why: req.body.why,
  });

  // Try to save the new joke
  newJoke.updateOne (
    {
      headline: req.body.headline,
      punchline: req.body.punchline,
      type: req.body.type,
      why: req.body.why,
    },
    {upsert: true},
    error => {
      if (error) {
        console.error (error);
      } else {
        res.end ('{"success" : "New joke added successfully", "status" : 200}');
      }
    }
  );
});

// End point for returing one random joke from the Mongo database
router.get ('/random', (req, res) => {
  // Connect to the Mongoose DB
  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  // Reference the schema for a Joke
  const Joke = jokeSchema;
  let randomJoke = Joke.aggregate ([{$sample: {size: 1}}], (err, joke) => {
    if (err) {
      console.log (err);
    } else {
      res.send (joke[0]);
    }
  });
});
// End point to load sample jokes into the database
router.get ('/loaddata', (req, res) => {
  // Connect to the Mongoose DB
  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  // Reference the schema for a Joke
  const Joke = jokeSchema;

  const bulkUpdate = data.map (doc => ({
    updateOne: {
      filter: {headline: doc.headline},
      update: doc,
      upsert: true,
    },
  }));

  Joke.bulkWrite (bulkUpdate)
    .then (result => {
      console.log (`Bulk update ok: ${result}`);
      res.send (result);
    })
    .catch (console.error.bind (console, `Bulk update error!`));
});

module.exports = router;
