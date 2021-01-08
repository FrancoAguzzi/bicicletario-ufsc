const fs = require('fs');
const { join } = require('path');
const filePath = join(__dirname, '../database/reports.json');

const { readReports, createReport } = require('../database/database')

module.exports = {

    async getReports(request, response) {
        readReports()
            .then(data => {
                if (!data) {
                    response.status(404).send({
                        message: `Couldn't find reports`
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

    async postReport(request, response) {
        createReport(request)
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
    }
}