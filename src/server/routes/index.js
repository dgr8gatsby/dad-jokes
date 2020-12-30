const router = require ('express').Router ();

routes.get ('/', (req, res) => {
  res.status (200).json ({message: 'Connected!'});
});
