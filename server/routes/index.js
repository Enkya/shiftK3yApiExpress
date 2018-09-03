const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Welcome to the ShiftK3y Api');
})
router.use('/employees', require('./employees'));

module.exports = router;