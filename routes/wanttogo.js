const router = require('express').Router()
const wantToGoView  = require('../controllers/wantToGoController');
const isAuth = require('../controllers/authController');

router.get('/wanttogo', isAuth, wantToGoView);

module.exports = router;