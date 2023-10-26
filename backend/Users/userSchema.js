const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    email: String,
    password: String,
    phone: Number,
    city: String
})

const usermodel = mongoose.model("Users",userSchema)

module.exports = usermodel