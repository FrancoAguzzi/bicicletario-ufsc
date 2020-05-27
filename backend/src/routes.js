const express = require('express');

const routes = express.Router();

// Importing Controllers
const UsersController = require('./controllers/UserController');

// Users Routes
routes.get('/users', UsersController.getUsers);
routes.post('/users', UsersController.createUsers);
routes.put('/users/:id?', UsersController.updateUsers);
routes.delete('/users/:id?', UsersController.deleteUsers);


module.exports = routes;