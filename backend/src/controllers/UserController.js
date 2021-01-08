const fs = require('fs');
const { join } = require('path');
const filePath = join(__dirname, '../database/users.json');

const { readUser, createUser, updateUser, deleteUser } = require('../database/database')

module.exports = {

    async getUser(request, response) {
        readUser(request.params.id)
            .then(data => {
                if (!data) {
                    response.status(404).send({
                        message: `Couldn't find user with id ${request.params.id}`
                    })
                } else {
                    response.send(data) 
                }
            })
            .catch(err => {
                console.log(err);
                response.status(500).send({
                    message: err.message
                })
            })
    },

    async postUser(request, response) {
        createUser(request)
            .then(data => {
                if (!data) {
                    response.status(409).send({
                        message: `User with id ${request.body.user_id} already exists.`
                    })
                } else {
                    response.send(data)
                }
            })
            .catch(err => {
                response.status(500).send({
                    message: err.message
                });
            });
    },

    async updateUser(request, response) {
        updateUser(request)
            .then(data => {
                if (!data) {
                    response.status(404).send({
                    message: `Cannot update user with id ${request.params.id}.`
                    })
                } else {
                    response.send(data)
                }
            })
            .catch(err => {
                response.status(500).send({
                    message: err.message
                });
            });
    },

    async deleteUser(request, response) {
        deleteUser(request)
            .then(data => {
                if (!data) {
                    response.status(404).send({
                        message: `Cannot delete user with id ${request.params.id}.`
                    });
                } else {
                    response.send(data);
                }
            })
            .catch(err => {
                response.status(500).send({
                    message: err.message
                });
            });
    }
}