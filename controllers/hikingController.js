
getHikingView = (req, res) => {
    res.render('hiking.ejs', {});
}

const setButtonTitle = require('./commonPlacesController')
let savedPlaceError;

getIncaView = (req,res) => {
    let button_title = setButtonTitle('inca', req.session.user.saved_places)
    savedPlaceError = req.flash('savedPlaceError')
    res.render('inca.ejs',{wishListMessage: button_title, savedPlaceError: savedPlaceError});
}
getAnnapurnaView = (req,res) => {
    let button_title = setButtonTitle('annapurna', req.session.user.saved_places)
    savedPlaceError = req.flash('savedPlaceError')
    res.render('annapurna.ejs',{wishListMessage: button_title, savedPlaceError: savedPlaceError});
}

module.exports = {getHikingView, getIncaView, getAnnapurnaView};
