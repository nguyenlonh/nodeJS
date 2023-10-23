var express = require('express');
const UserModel = require('../models/UserModel');
const toyModel = require('../models/toyModel');
const gameModel = require('../models/gameModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var store = await toyModel.find();
  var game = await gameModel.find();
  res.render('store/homepage', { CuaHang : store,  gamemode : game });
});

router.get('/home', function(req, res, next) {
  res.redirect('/view/homepage');
});


module.exports = router;



