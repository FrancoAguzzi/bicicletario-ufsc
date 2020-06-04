const fs = require('fs');
const { join } = require('path');
const filePath = join(__dirname, '../database/reports.json');

module.exports = {

    async getReports(request, response) {
        const data = fs.existsSync ? fs.readFileSync(filePath) : [];

        try {
            return response.send(data);
        } catch {
            return [];
        }
    },

    async createReport(request, response) {
        console.log('trying to create report')

        const reports = JSON.parse(fs.readFileSync(filePath));
        const { report_user } = request.body;
        const date = new Date();

        const report_id = date.getTime();
        const report_date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        const report_time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        reports.push({ report_id, report_user, report_date, report_time })

        fs.writeFileSync(filePath, JSON.stringify(reports, null, '\t'));
    
        return response.status(201);
    }
}