const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const UserController = require('./src/controllers/UserController');
const ReportsController = require('./src/controllers/ReportsController');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server working on port ${port}`)
});

app.use(express.static(__dirname + '../../frontend'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "DELETE, PUT");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

app.use(routes);

module.exports = app;