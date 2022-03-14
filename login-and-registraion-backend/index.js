// import {express} from 'express'  to use this command we have first set the "type":"module" in package.json file then and only then we can use this command
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const port = 9000
const host = 'http://localhost:'
const app = express()
const dbUrl = 'mongodb://127.0.0.1:27017/Mayur'


// Adding all the require package
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.listen(port, () => {
    console.log(`Server started on http:/localhost:${port}`)
})

// Connecting with database
// https://mongoosejs.com/docs/connections.html
mongoose.connect(
    dbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log(`Database Connected to ${dbUrl}`) }
)

const User = require('./models/userModel')
//Routes
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // checks the user with email is alredy exists or not
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            //406 StatusCode syas not acceptable 
            res.send({
                message: "User with this Email is already exists, Please Login Now",
            })
        } else {
            const user = new User({
                name: name,
                email: email,
                password: password,

                // 2nd type to write above code
                // name,
                // email,
                // password
            })
            try {
                user.save()
                res.status(200).send({ message: "Successfully Registered, Please Login Now" })
            } catch (err) {
                res.status(501).send(err)
            }
        }
    })

})
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // checks the user with this email is exists or not
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (user.password === password) {
                res.send({
                    message: "Login Succesfull",
                    user: user
                })
            } else {
                res.send({
                    message: "Password Did't Match",
                })
            }
        } else {
            res.send({
                message: "User not Registered",
            })
        }
    })
})