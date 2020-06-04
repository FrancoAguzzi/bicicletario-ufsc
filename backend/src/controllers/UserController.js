const fs = require('fs');
const { join } = require('path');
const filePath = join(__dirname, '../database/users.json');

module.exports = {

    async getUsers(request, response) {
        const data = fs.existsSync ? fs.readFileSync(filePath) : [];

        try {
            return response.send(data);
        } catch {
            return [];
        }
    },

    async createUsers(request, response) {
        const users = JSON.parse(fs.readFileSync(filePath));
        const { user_name, user_id, user_password, user_type } = request.body;

        if (users.some(user => user.user_id === user_id)) {
            return response.status(406).send('User ID already registered')
        }

        users.push({ user_name, user_id, user_password, user_type })

        fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));
    
        return response.status(201).send('New user registered successfully');
    },

    async updateUsers(request, response) {
        const users = JSON.parse(fs.readFileSync(filePath));

        const updatedUsers = users.map(user => {
            if (user.user_id === request.params.id) {
                return ({
                    ...user,
                    ...request.body,
                })
            }

            return user;
        })
        
        fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, '\t'));

        return response.status(200).send('User updated successfully');
    },

    async deleteUsers(request, response) {
        const users = JSON.parse(fs.readFileSync(filePath));

        if (users.every(user => user.user_id !== request.params.id)) {
            response.status(406).send('User ID not found')
        }

        const updatedUsers = users.filter(user => {
            return user.user_id !== request.params.id;
        })

        fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, '\t'));

        return response.status(200).send('User deleted successfully');
    }
}