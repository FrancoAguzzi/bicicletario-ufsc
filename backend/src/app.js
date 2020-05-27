const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '../../frontend'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.use(routes);

module.exports = app;