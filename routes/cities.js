const router = require('express').Router();
const isAuth = require('../controllers/authController');
const cities = require('../controllers/citiesController');

router.get('/cities', isAuth, cities.getCitiesView);
router.get('/paris', isAuth, cities.getParisView);
router.get('/rome', isAuth, cities.getRomeView);



module.exports = router;