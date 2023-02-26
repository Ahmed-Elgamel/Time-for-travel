const router = require('express').Router()
const searchView  = require('../controllers/searchController');


router.get('/search', searchView);
router.post('/search', searchView);

module.exports = router;