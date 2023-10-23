var express = require('express');
var router = express.Router();

const toyModel = require('../models/toyModel');

// URL : localhost:3001/store ('../view/store/index')
router.get('/', async (req, res)=>{
    var store = await toyModel.find();
    res.render('store/index', { CuaHang : store });
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


module.exports = router;








