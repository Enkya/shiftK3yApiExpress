const router = require('express').Router();
const employeesController = require('../controllers').employees;


router.get('/', employeesController.fetch);

router.post('/', employeesController.create);

module.exports = router;