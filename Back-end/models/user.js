const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const Schema = mongoose.Schema
const userSchema = new Schema({

    first_Name: {
        type: String,
        required: true
    },

    last_Name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    user_password: {
        type: String,
        required: true
    },
    user_phoneNumber: {
        type: String,
        // required: true
    },
    user_token: {
        type: String,
        // required: true,
    }

}, { timestamp: true }
)
userSchema.pre("save", async function () {
    this.user_password = await bcrypt.hash(this.user_password, 10)
})

module.exports = mongoose.model("user", userSchema) 