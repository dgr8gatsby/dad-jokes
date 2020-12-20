const express = require ('express');
const bodyParser = require ('body-parser');
const MongoClient = require ('mongodb').MongoClient;

// TODO: Heather you can use local Mongo instead for now
MongoClient.connect ('mongodb-connection-string', (err, client) => {});
const app = express ();
const PORT = process.env.PORT || 3000;
const hostname = 'localhost'

app.listen (PORT, (err) => {
  if(err) throw err;
  console.log (`application listenting on http://${hostname}: ${PORT}`);
});

// Used to parse POST body data
app.use (bodyParser.urlencoded ({extended: true}));

// Default path for main application
app.get ('/', (req, res) => {
  res.sendFile (__dirname + '/index.html');
});

// Handle new jokes
app.post ('/jokes', (req, res) => {
  // Just loging requests from the client in the console
  console.log (req.body);
  // TODO: Save in a Database
});

// TODO: Make a path to return a test joke
