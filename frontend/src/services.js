import axios from 'axios'

function getUser(id) {
    return axios.get(`http://localhost:3000/user/${id}`)
                .then(res => res)
                .catch(err => {
                    console.log(err)
                    return err.response.status
                })
}

function createUser(data) {
    return axios.post(`http://localhost:3000/user`, data)
                .then(res => res.status)
                .catch(err => {
                    console.log(err)
                    return err.response.status
                })
}

function updateUser(id, newData) {
    return axios.put(`http://localhost:3000/user/${id}`, newData)
                .then(res => res)
                .catch(err => {
                    console.log(err)
                    return err.response.status
                })
}

function deleteUser(id) {
    return axios.delete(`http://localhost:3000/user/${id}`)
                .then(res => res)
                .catch(err => {
                    console.log(err)
                    return err.response.status
                })
}

function getReports() {
    return axios.get(`http://localhost:3000/reports`)
                .then(res => res)
                .catch(err => {
                    console.log(err)
                    return err.response.status
                })
}

function postReport(data) {
    return axios.post('http://localhost:3000/reports', data)
                .then(res => res)
                .catch(err => {
                    console.log(err)
                    return err.response.status
                })
}

export { getUser, createUser, deleteUser, updateUser, getReports, postReport }