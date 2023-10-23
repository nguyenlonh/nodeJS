var express = require('express');
var router = express.Router();

const toyModel = require('../models/toyModel');
const gameModel = require('../models/gameModel');

// URL : localhost:3001/store ('../view/store/index')
router.get('/manager', async (req, res)=>{
    var store = await toyModel.find();
    var game = await gameModel.find();
    res.render('store/index', { CuaHang : store, gamemode : game});
});

//see detail 
router.get('/detail/:id', async (req, res)=>{
    var id = req.params.id;
    var store = await toyModel.findById(id);
    res.render('store/detail', { CuaHang : store });
});

router.get('/add', (req, res)=>{
    res.render('store/add');
});
router.post('/add', async (req, res)=>{
    var store = req.body;
    await toyModel.create(store);
    console.log('Add Toy succeed !');
   res.redirect('/store');
});


router.get('/delete/:id', async (req, res)=>{
    var id = req.params.id;
    await toyModel.findByIdAndDelete(id);
    console.log('Delete successful');
    res.redirect('/store');
});

router.get('/edit/:id', async (req, res)=>{
    var id = req.params.id;
    var store = await toyModel.findById(id);
    res.render('store/edit', { CuaHang : store });
});
router.post('/edit/:id', async (req, res)=>{
    var id = req.params.id;
    var store = req.body;
    await toyModel.findByIdAndUpdate(id, store);
    console.log('Update Toy succeed !');
    res.redirect('/store');
});


router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    var store = await ToyModel.find({ name: new RegExp(keyword, "i") });
    res.render('store/index', { CuaHang: store });
 })


module.exports = router;








