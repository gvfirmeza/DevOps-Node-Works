const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    dataCreated: {
        type: Date,
        default:() => new Date().getTime() - 3 * 60 * 60 * 1000
    }
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users