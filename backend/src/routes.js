const express = require('express');

const routes = express.Router();

// Importing Controllers
const UserController = require('./controllers/UserController');
const ReportsController = require('./controllers/ReportsController');

// Users Routes
routes.get('/user/:id?', UserController.getUser);
routes.post('/user', UserController.postUser);
routes.put('/user/:id?', UserController.updateUser);
routes.delete('/user/:id?', UserController.deleteUser);

// Reports Routes
routes.get('/reports', ReportsController.getReports);
routes.post('/reports', ReportsController.postReport);
// routes.post('/reports', (req, res) => {
//     ReportsController.postReport(req, res);
//     res.send(res);
// });

module.exports = routes;