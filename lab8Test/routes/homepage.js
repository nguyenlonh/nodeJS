var express = require('express');
var router = express.Router();

const toyModel = require('../models/toyModel');

// URL : localhost:3001/home ('../view/store/index')
router.get('/', async (req, res)=>{
    var store = await toyModel.find();
    res.render('store/homepage', { CuaHang : store });
});


module.exports = router;