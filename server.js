const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');

const sequelize = require('./util/database')

const app = express();
const port = 4000;

app.use(cors());

const expenseRoutes = require('./routes/expenseRoutes');


app.use(bodyParser.json());

app.use(expenseRoutes);

sequelize
.sync()
.then(user => {
    console.log(user);
    app.listen(4000);

})
.catch( err => {
    console.log(err);
})