require ('dotenv').config (); // Load Application configuration environment variables
const mongo = require ('./mongo.config'); // Use Mongo db for data management
const mongoose = require ('mongoose'); // Use Mongoose for data schema
const express = require ('express');
const router = express.Router ();

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

module.exports = router;
