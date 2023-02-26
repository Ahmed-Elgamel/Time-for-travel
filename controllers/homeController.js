const userDAO = require('../models/userDao')
getHomeView = (req, res) => {
    res.render('home.ejs',{});
}
module.exports = {getHomeView};