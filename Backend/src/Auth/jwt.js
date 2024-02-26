//Description: This file contains the code to generate a JWT token and send it to the client.

const jwt = require('jsonwebtoken');
const { readDB } = require("../db/MongoOperations.js")

function Login(req, res) {
    // console.log(req.body);
    const { Username, Password } = req.body;

    readDB("Main", "admins", { Username: Username, Password: Password }).then(response => {

        if (response.length) {

            const payload = response[0];
            console.log(payload)

            const secretKey = process.env.JWT_SECRET_KEY;
            const token = jwt.sign(payload, secretKey);

            // console.log('Generated Token:', token);

            res.status(200).cookie(`token`, token, {
                sameSite: 'none',
                secure: true,                   // Set to true to ensure the cookie is only sent over HTTPS
            }).json({
                success: true,
                message: "Login Successful",
            })

        }
        else {
            res.json({
                success: false,
                message: "Login failed, invalid credentials"
            })
        }
    }).catch(err => {
        console.log(err);
        res.json({
            success: false,
            message: `Error while logging in: ${err}`
        })
    })
}

module.exports = { Login }