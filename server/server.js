const express = require ('express');
const bodyParser = require ('body-parser');
const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect ('mongodb-connection-string', (err, client) => {});
const app = express ();
const PORT = process.env.PORT || 3000;
const hostname = 'localhost'

app.listen (PORT, (err) => {
  if(err) throw err;
  console.log (`application listenting on http://${hostname}: ${PORT}`);
});

app.use (bodyParser.urlencoded ({extended: true}));

app.get ('/', (req, res) => {
  res.sendFile (__dirname + '/index.html');
});

app.post ('/jokes', (req, res) => {
  console.log (req.body);
});
