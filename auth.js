const express = require('express');
const expressSession = require ('express-session');
const passport = require ('passport');
const Auth0Strategy = require ('passport-auth0');
const querystring = require('querystring');


const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

const strategy = new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  }, (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  });

const router = express.Router();

router.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile',
    failureFlash: true
  }), (req, res) => {
    res.redirect('/');
  }
);

router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login');
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      const returnTo = req.session.returnTo || '/';
      delete req.session.returnTo;
      res.redirect(returnTo);
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logOut();

  let returnTo = req.protocol + '://' + req.hostname;
  const port = req.connection.localPort;

  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo =
      process.env.NODE_ENV === 'production'
        ? `${returnTo}/`
        : `${returnTo}:${port}/`;
  }

  const logoutURL = new URL(
    `https://${process.env.AUTH0_DOMAIN}/v2/logout`
  );

  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo: returnTo
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL);
});


function setup(app) {
  if (process.env.NODE_ENV === 'production') {
    // Serve secure cookies, requires HTTPS.
    session.cookie.secure = true; 
  }

  app.use(expressSession(session));
  passport.use(strategy);
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  app.use('/', router);
}

module.exports = {
  setup: setup
};
