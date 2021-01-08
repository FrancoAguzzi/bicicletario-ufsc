const MongoClient = require('mongodb')

const DB_URL = 'mongodb+srv://francoaguzzi:francopatrickgustavogustavo@cluster0.c3dlo.mongodb.net/bicicletario?retryWrites=true&w=majority'
let client
let db

(async function () {
  try {
    client = await MongoClient.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    db = client.db()
    console.log('conected with database...')
    process.on('SIGINT', () => {
      client.close()
      console.log('disconnected from database...')
      process.exit()
    })
  } catch (e) {
    console.log(e)
    console.log('cannot connect with database')
    process.exit(1)
  }
})()

const COL_USERS = 'users'
const COL_REPORTS = 'reports'

const readUser = async (id) => {
  const col = db.collection(COL_USERS)
  const user = await col.findOne({ user_id: id })
  if (user) {
    return user
  } else {
    return null
  }
}

const createUser = async (req) => {
  const data = req.body
  const user = await readUser(data.user_id)
  if (user !== null) {
    return null
  } else {
    const col = db.collection(COL_USERS)
    const newUser = await col.insertOne(data)
    return newUser.insertedId
  }
}

const updateUser = async (req) => {
  const { id } = req.params
  const user = await readUser(id)
  if (user === null) {
      return false
  } else {
      const col = db.collection(COL_USERS)
      const query = { 'user_id': id }
      const update = {
          "$set": {
              ...user,
              ...req.body
          }
      }
      const options = { 'upsert': true };
      const updated = await col.updateOne(query, update, options)
      return user._id
  }
}

const deleteUser = async (req) => {
  const { id } = req.params
  const user = await readUser(id)
  if (user === null) {
      return false
  } else {
      const col = db.collection(COL_USERS)
      await col.deleteOne({ user_id: id })
      return user._id
  }
}

const readReports = async () => {
  const col = db.collection(COL_REPORTS)
  const result = await col.find()
  const reports = await result.toArray()
  return reports
}

const createReport = async (req) => {
  const currentDate = new Date()
  const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
  const time = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
  const data = {
    ...req.body,
    report_date: date,
    report_time: time
  }
  const col = db.collection(COL_REPORTS)
  const result = await col.insertOne(data)
  return result.insertedId
}

module.exports = { readUser, createUser, updateUser, deleteUser, readReports, createReport }