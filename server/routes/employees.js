const router = require('express').Router();
const employeesController = require('../controllers').employees;


router.get('/', employeesController.list);

router.post('/', employeesController.create);

module.exports = router;