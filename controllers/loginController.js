const userDAO = require('../models/userDao');
const passError= "The password you entered is incorrect";
const UsernameError =  "Username is incorrect";
const bcrypt = require('bcryptjs');

let userMessage, passwordMessage, registrationMessage;

const loginView = (req, res) => {
    userMessage = req.flash('UsernameError')
    passwordMessage = req.flash('passError')
    registrationMessage = req.flash('registrationState')
    res.render('login.ejs', {passError: passwordMessage, UsernameError: userMessage, registrationState: registrationMessage});
}

const logUserIn = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    userDAO.findUser(username).then((user) => {
        if(! user) {
            req.flash('UsernameError', UsernameError)
            res.redirect('/')
            return;
        }
        let passMatch = bcrypt.compareSync(password, user.password);    
        if(! passMatch) {
            req.flash('passError', passError)
            res.redirect('/')
            return;
        }
        req.session.authenticated = true;
        req.session.user = user;
        res.redirect('/home');
    })
       
}


module.exports = { loginView, logUserIn };