var express = require('express');
var router = express.Router();

const gameModel = require('../models/gameModel');

// URL : localhost:3001/store ('../view/store/index')
router.get('/', async (req, res)=>{
    var store = await gameModel.find();
    res.render('game/index', { gamemode : store });
});

//see detail 
router.get('/detail/:id', async (req, res)=>{
    var id = req.params.id;
    var store = await gameModel.findById(id);
    res.render('game/detail', { gamemode : store });
});

router.get('/add', (req, res)=>{
    res.render('game/add');
});
router.post('/add', async (req, res)=>{
    var game = req.body;
    await gameModel.create(game);
    console.log('Add Toy succeed !');
   res.redirect('/game');
});

router.get('/delete/:id', async (req, res)=>{
    var id = req.params.id;
    await gameModel.findByIdAndDelete(id);
    console.log('Delete successful');
    res.redirect('/game');
});

router.get('/edit/:id', async (req, res)=>{
    var id = req.params.id;
    var game = await gameModel.findById(id);
    res.render('game/edit', { gamemode : game });
});
router.post('/edit/:id', async (req, res)=>{
    var id = req.params.id;
    var game = req.body;
    await gameModel.findByIdAndUpdate(id, game);
    console.log('Update Toy succeed !');
    res.redirect('/game');
});

router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    var game = await gameModel.find({ name: new RegExp(keyword, "i") });
    res.render('game/index', { gamemode: store });
 })


module.exports = router;
