const passport = require('passport');
const graphHelper = require('../utils/graphHelper.js');

module.exports = {
    login(req, res) {
        passport.authenticate('azuread-openidconnect', { failureRedirect: '/'}),
        res.redirect('/');
    },
    token(req, res) {
        passport.authenticate('azuread-openidconnect', { failureRedirect:'/'}),
        (req, res) => {
            graphHelper.getUserData(req.user.accessToken, (err, user) => {
                res.status(200).send(res);
            })
        }
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