getCitiesView = (req, res) => {
    res.render('cities.ejs', {});
}

const setButtonTitle = require('./commonPlacesController')
let savedPlaceError;

getParisView = (req,res) => {
    let button_title = setButtonTitle('paris', req.session.user.saved_places)
    savedPlaceError = req.flash('savedPlaceError')
    res.render('paris.ejs', {wishListMessage: button_title, savedPlaceError: savedPlaceError});
}

getRomeView = (req,res) => {
    let button_title = setButtonTitle('rome', req.session.user.saved_places)
    savedPlaceError = req.flash('savedPlaceError')
    res.render('rome.ejs', {wishListMessage: button_title, savedPlaceError: savedPlaceError});
}



module.exports = {getCitiesView, getRomeView, getParisView};
