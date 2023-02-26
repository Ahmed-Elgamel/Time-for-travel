const isAuth = (req, res, next) => {
    if(req.session.authenticated) {
        next();
        return;
    }
    res.redirect('/')
}
module.exports = isAuth;