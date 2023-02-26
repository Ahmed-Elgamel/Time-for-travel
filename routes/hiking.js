const router = require('express').Router();
const isAuth = require('../controllers/authController');
const hiking = require('../controllers/hikingController');

router.get('/hiking', isAuth, hiking.getHikingView);
router.get('/inca', isAuth, hiking.getIncaView);
router.get('/annapurna', isAuth, hiking.getAnnapurnaView);



module.exports = router;