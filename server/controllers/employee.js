const employee = require('../models').employee;

module.exports = {
    create(req, res) {
        return employee
            .create({name: 'Bruce Bigirwenkya'})
            .then(employee => 
                res.status(200).send(employee)
            )
            .catch(error => res.status(400).send(error));
    }
}