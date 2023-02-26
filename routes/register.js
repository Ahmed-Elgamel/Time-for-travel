const router = require('express').Router();

const registeration = require('../controllers/registerController');

router.get('/registration', registeration.getRegistrationView);

router.post('/register', registeration.registerUser);
module.exports = router;