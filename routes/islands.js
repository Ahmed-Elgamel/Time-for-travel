const router = require('express').Router();
const isAuth = require('../controllers/authController');
const islands = require('../controllers/islandsController');

router.get('/islands', isAuth, islands.getIslandsView);
router.get('/bali', isAuth, islands.getBaliView);
router.get('/santorini', isAuth, islands.getSantoriniView);



module.exports = router;