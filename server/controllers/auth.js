const passport = require('passport');
const graphHelper = require('../utils/graphHelper.js');

module.exports = {
    login(req, res) {
        passport.authenticate('azuread-openidconnect', { failureRedirect: '/login'}),
        (() => {
            res.send(req.user);
        })()
    },
    token(req, res) {
        passport.authenticate('azuread-openidconnect', { failureRedirect:'/login'}),
        graphHelper.getUserData(req.user.accessToken, (err, user) => {
            return res.status(200).send(JSON.stringify(res));
        });
    },
    disconnect(req, res) {
        req.session.destroy(() => {
            req.logOut();
            res.clearCookie('graphNodeCookie');
            res.status(200);
            res.redirect('/');
        });
    }
}