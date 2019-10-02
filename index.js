const employeeRouter = require('./routes/api/employee');
const router = require('./routes/router');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Middleware 
app.use(express.json());


//call router
app.use('/', router);
//call employee router
app.use('/api/employees', employeeRouter);

//get connection
mongoose.connect('mongodb+srv://nooortest:krishna2016@cluster0-k5hl9.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log('Connection Success full');
}).catch(err => {
    console.log(err);
});
//create server
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server Started in port:${port}`));