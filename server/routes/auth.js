const router = require('express').Router();
const authController = require('../controllers').auth;

router.get('/openid', authController.login);

router.get('/openid/return', authController.login);

router.post('/openid/return', authController.login);

router.get('/disconnect', authController.disconnect);

module.exports = router;