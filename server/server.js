const express = require ('express');
const bodyParser = require ('body-parser');
const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect ('mongodb-connection-string', (err, client) => {});
const app = express ();

app.listen (3000, () => {
  console.log ('application listenting on http://localhost:3000');
});

app.use (bodyParser.urlencoded ({extended: true}));

app.get ('/', (req, res) => {
  res.sendFile (__dirname + '/index.html');
});

app.post ('/jokes', (req, res) => {
  console.log (req.body);
});
