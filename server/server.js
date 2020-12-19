const express = require ('express');
const app = express ();

app.listen (3000, function () {
  console.log ('application listenting on http://localhost:3000');
});

app.get ('/', function (req, res) {
  res.sendFile (__dirname + '/index.html');
});
