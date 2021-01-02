const mongo = require ('./mongo.config'); // Use Mongo db for data management
const mongoose = require ('mongoose'); // Use Mongoose for data schema
const express = require ('express');
const router = express.Router ();
const data = require ('../data/jokes.json');

// Handle new jokes
router.post ('/jokes', (req, res) => {
  // Log requests from the client in the console for debugging
  console.log (req.body);

  // Connect to the Mongoose DB
  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  // Reference the schema for a Joke
  const Joke = mongo.models.joke;

  // Create a new Joke Object
  const newJoke = new Joke ({
    type: req.body.type,
    headline: req.body.headline,
    punchline: req.body.punchline,
  });

  // Try to save the new joke
  newJoke.save (error => {
    if (error) {
      console.error (error);
    } else {
      res.end ('{"success" : "New joke added successfully", "status" : 200}');
    }
  });
});

// Return one joke for quick testing
router.get ('/joke', (req, res) => {
  // Connect to the Mongoose DB
  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  // Reference the schema for a Joke
  const Joke = mongo.models.joke;

  Joke.findOne ({}, (err, data) => {
    if (err) {
      console.log (`Error : ${err}`);
    } else {
      res.send (data);
    }
  });
});

router.get ('/loaddata', (req, res) => {
  // Connect to the Mongoose DB
  mongoose.connect (
    mongo.config.URL + '/' + mongo.config.DB_NAME,
    mongo.config.OPTIONS
  );

  // Reference the schema for a Joke
  const Joke = mongo.models.joke;

  const bulkUpdate = data.map (doc => ({
    updateOne: {
      filter: {headline: doc.headline},
      update: doc,
      upsert: true,
    },
  }));

  Joke.bulkWrite (bulkUpdate)
    .then (result => console.log (`Bulk update ok: ${result}`))
    .catch (console.error.bind (console, `Bulk update error!`));
});

module.exports = router;
