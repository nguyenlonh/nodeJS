var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/store');
});

router.get('/home', function(req, res, next) {
  res.redirect('/view/homepage');
});


module.exports = router;
