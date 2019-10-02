const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
const EmpSchema = new Schema({
    emp_name: {
        type: String,
        required: true
    },
    salaray: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});
//export module
module.exports = mongoose.model('emp', EmpSchema);