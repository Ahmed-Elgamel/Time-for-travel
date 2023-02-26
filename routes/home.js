const router = require('express').Router();
const home = require('../controllers/homeController');
const isAuth = require('../controllers/authController');

router.get('/home', isAuth, home.getHomeView);


module.exports = router;