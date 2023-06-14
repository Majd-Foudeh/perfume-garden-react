const user = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function jwttoken({ first_Name, last_Name, user_email }) {
    const userdata = { first_Name, last_Name, user_email }
    const token = jwt.sign(userdata, process.env.ACCESS_TOKEN_SECRET)
    return token;
}

const allusers = (req, res) => {
    user.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err);
        })


}


const adduser = async (req, res) => {
    try {

        const { fname, lname, email, password, phoneNumber } = req.body
        const token = jwttoken({
            first_Name: fname,
            last_Name: lname,
            user_email: email,
        })

        const isuserexist = await user.findOne({ user_email: email })
        if (isuserexist) {
            return res.json({ error: "this email is allready exists" })
        }
        const newaccount = new user({
            first_Name: fname,
            last_Name: lname,
            user_email: email,
            user_password: password,
            user_phoneNumber: phoneNumber,
            user_token: token,
        })
        const newuser = await newaccount.save()
        res.json({ message: "Signup successfuly" })
    } catch (error) {
        console.error('error in signup', error);
        res.json({ message: 'error in signup' })
    }
}

const login = async (req, res) => {

    try {
        // check if the user exists
        const { email, password } = req.body
        const isuser = await user.findOne({ user_email: email })
        if (!isuser) {
            return res.json({ error: "email is not found" })
        }
        // check if the password is correct 
        const checkpassword = await bcrypt.compare(password, isuser.user_password)
        if (!checkpassword) {
            return res.json({ error: "incorrect password" })
        }


        res.json(isuser.user_token)
    } catch (error) {
        console.error(error);
    }
}


module.exports = { allusers, adduser, login }