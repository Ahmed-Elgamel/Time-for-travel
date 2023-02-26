const router = require('express').Router();
const login = require('../controllers/loginController');

router.get('/', login.loginView);
router.post('/', login.logUserIn);


module.exports = router;