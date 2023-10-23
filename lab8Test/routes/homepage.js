var express = require('express');
var router = express.Router();

const toyModel = require('../models/toyModel');
const gameModel = require('../models/gameModel');
const UserModel = require('../models/UserModel');

// URL : localhost:3001/home ('../view/store/index')
router.get('/home', async (req, res)=>{
    var store = await toyModel.find();
    var game = await gameModel.find();
    res.render('store/homepage', { CuaHang : store,  gamemode : game });
});

router.get('/login', async (req, res)=>{
    res.render('game/loginpage', { layout : false });
});

router.post('/login', async (req, res) => {
    // Cách 2: dùng hàm findOne của mongoose
    var login = await UserModel.findOne(
      {
        username: req.body.username,
        password: req.body.password
      }
    )
    //điều hướng web khi login succeed (vào trang admin) hoặc login fail (về lại trang login)
    if (login)  //login == true
      res.redirect('/store/manager')
    else
      res.redirect('/homepage/login');
  })

module.exports = router;