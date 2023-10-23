var express = require('express');
var router = express.Router();

const toyModel = require('../models/toyModel');
const gameModel = require('../models/gameModel');

// URL : localhost:3001/home ('../view/store/index')
router.get('/', async (req, res)=>{
    var store = await toyModel.find();
    var game = await gameModel.find();
    res.render('store/homepage', { CuaHang : store,  gamemode : game });
});

// router.get('/home', async (req, res)=>{
//     var store = await toyModel.find();
//     var game = await gameModel.find();
//     res.render('store/homepage', { CuaHang : store, gamemode : game });
// });


// router.get('/home2', async (req, res)=>{
//     var store = await toyModel.find();
//     var game = await gameModel.find();
//     res.render('store/homepage', { CuaHang : store, gamemode : game });
// });

module.exports = router;