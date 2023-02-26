getIslandsView = (req, res) => {
    res.render('islands.ejs', {});
}
const setButtonTitle = require('./commonPlacesController')
let savedPlaceError;

getBaliView = (req,res) => {
    let button_title = setButtonTitle('bali', req.session.user.saved_places)
    savedPlaceError = req.flash('savedPlaceError')
    res.render('bali.ejs',{wishListMessage: button_title, savedPlaceError: savedPlaceError});
}
getSantoriniView = (req,res) => {
    let button_title = setButtonTitle('santorini', req.session.user.saved_places)
    savedPlaceError = req.flash('savedPlaceError')
    res.render('santorini.ejs',{wishListMessage: button_title, savedPlaceError: savedPlaceError});
}

module.exports = {getIslandsView, getBaliView, getSantoriniView};
