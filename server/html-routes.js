const router = require("express").Router();
const path = require("path");

router.get("/", (req,res) => {
  res.redirect("/jokes");
});

router.get ('/jokes', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  module.exports = router;