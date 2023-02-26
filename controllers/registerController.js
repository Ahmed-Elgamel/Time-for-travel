const userDAO = require('../models/userDao');

let usernameMessage, passwordMessage;
getRegistrationView = (req, res) => {
    usernameMessage = req.flash('usernameError')
    passwordMessage = req.flash('passwordError')
    res.render("registration.ejs", {usernameError: usernameMessage, passwordError: passwordMessage});
}

registerUser = (req, res) => {
    const {username, password} = req.body;
    try{
        userDAO.findUser(username)
        .then((user) => {

            if(user) {
                req.flash('usernameError', "User Already Registered. Please try to Log In")
                res.redirect('/registration')
                return;
            }
            if(password.length <= 6){
                req.flash('passwordError', "Password must be longer than 6 characters")
                res.redirect('/registration')
                return;
            }
            if(password.length >= 20) {
                req.flash('passwordError', "Password must be less than 20 characters")
                res.redirect('/registration')
                return;
            }
            
            userDAO.registerUser(username, password);
            req.flash('registrationState', 'Registration is Successful !');
            res.redirect('/');
        });
        
    }catch(e) {
        console.error(e);
        res.status(500).json({error: e.message});
    }
}

module.exports = {getRegistrationView, registerUser};
