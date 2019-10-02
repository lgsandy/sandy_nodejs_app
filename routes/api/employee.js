const EmpModel = require('../../models/EmpModel');
const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
    const newEmp = new EmpModel({
        emp_name: req.body.emp_name,
        salaray: req.body.salaray,
        address: req.body.address
    });
    //save
    newEmp.save().then(result => {
        res.send(result);
    }).catch(err => {
        res.send(err);
    });
});
router.get('/', (req, res) => {
    EmpModel.find().then(emps => {
        res.send(emps);
    }).catch(err => {
        res.send(err);
    });
});

//export module
module.exports = router;