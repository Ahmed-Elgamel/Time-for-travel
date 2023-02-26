const userDAO = require('../models/userDao')

const addToWishList = (req, res) => {
    let user = req.session.user;
    userDAO.findUser(user.username).then((user) => {
        if(user.saved_places.includes(req.body.place)) {
            req.flash('savedPlaceError', 'Place is Already Saved')
        }
        else {
            let place = {saved_places: req.body.place};
            userDAO.updateUserSavedPlaces(user, place);
            res.locals.wishListMessage = "Added"
        }
        res.redirect(`/${req.body.place}`);
    })
}

module.exports = {addToWishList};
