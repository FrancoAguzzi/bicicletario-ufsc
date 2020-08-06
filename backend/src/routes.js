const express = require('express');

const routes = express.Router();

// Importing Controllers
const UsersController = require('./controllers/UserController');
const ReportsController = require('./controllers/ReportsController');

// Users Routes
routes.get('/users', UsersController.getUsers);
routes.post('/users', UsersController.createUsers);
routes.put('/users/:id?', UsersController.updateUsers);
routes.delete('/users/:id?', UsersController.deleteUsers);

// Reports Routes
routes.get('/reports', ReportsController.getReports);
routes.post('/reports', (req, res) => {
    ReportsController.createReport(req, res);
    res.sendStatus(200);
});

module.exports = routes;