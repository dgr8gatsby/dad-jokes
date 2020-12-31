require ('dotenv').config (); // Ensure all Application Environment Variables are configured

const express = require ('express'); // Use Express to help build server app
const path = require ('path'); // Use path to help with directory paths
const bodyParser = require ('body-parser'); // Use body-parser to help parse POST JSON objects
const api = require ('./src/server/api'); // Routes for base server API
const auth = require ('./src/server/site/auth'); // Use Auth0 for managing logins to website

const app = express ();
const PORT = process.env.PORT;

// Setup Auth0 for express app
auth.setup (app);

app.use (bodyParser.urlencoded ({extended: true})); // Used to parse POST body data
app.use (express.static (path.join (__dirname, 'public'))); // Create a public folder for client website content

// Routes are managed in their own files
app.use ('/api', api); // Use central router for cordinating website routes, and API routes

// If user is currently logged in, continue with the next callback.
// Otherwise redirect to login page.
const checkLogin = (req, res, next) => {
  if (req.user) {
    return next ();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect ('/login');
};

app.get ('/user', checkLogin, (req, res, next) => {
  const {_raw, _json, ...userProfile} = req.user;
  res.end (JSON.stringify (userProfile, null, 4));
});

// Start the server
app.listen (PORT, err => {
  if (err) throw err;
  const hostname = 'localhost';
  console.log (`application listenting on http://${hostname}:${PORT}`);
});
