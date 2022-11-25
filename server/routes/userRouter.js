const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const parser = require('../utils/requestParser');
const argon2 = require('argon2');
const mongoose = require('mongoose');
const { db } = require('../models/userModel');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/authentication');


router.post('/register', async (req, res) => {
    console.log(req.body);
    // Check for valid inputs
    if(parser.parseString(req.body.userName, 20) &&
       parser.parseEmail(req.body.emailAddress, 50) &&
       parser.parseString(req.body.password, 50))
    {
        
        // Query collection for username requested
        let userExists = await db.collection("users").find({"userName": req.body.userName}).toArray();
        if(userExists.length > 0) {
            console.log('User already exists');
            return res.status(403).send({
                'message': 'User already exists'
            });
        }
        
        let hashedPassword;

        // Make hashed password
        try {
            hashedPassword = await argon2.hash(req.body.password);
        } catch (error) {
            console.log(error);
            return res.status(400).send({
                'message': 'Error with password format'
            });
        }

        // Add id and the hashed password to the user object
        let newUser = new User(req.body);
        newUser.password = hashedPassword;
        newUser._id = mongoose.Types.ObjectId();

        // Save the user data
        newUser.save((error) => {
            if (error) {
                console.log(error);
                return res.status(400).send({
                    'message': 'User not saved'
                });
            } else {
                return res.status(200).send({
                    id: newUser._id
                });
            }
        });
    } else {
        return res.status(400).send({
            'message': 'Incorrect input data'
        })
    }
});

router.post('/login', async (req, res) => {

    // Check for valid inputs
    if(parser.parseString(req.body.userName, 20) &&
       parser.parseString(req.body.password, 50))
    {
        try {
            // Search for the user by username if not found send error message
            let userExists = await db.collection("users").find({"userName": req.body.userName}).toArray();
            let uname = userExists[0].userName;
            // Verify the password, incase of error send error message
            if(await argon2.verify(userExists[0].password, req.body.password)) {
                
                // Generate jwt token for username
                let token = jwt.sign({ uname },
                    process.env.SECRET_TOKEN,
                    { expiresIn: process.env.TOKEN_EXPIRE }
                );
                return res.status(200).json({ uname, token, message: "Login successful" });
            } else {
                return res.status(401).send({
                    'message': 'Invalid username and password'
                });
            }
        } catch (error) {
            return res.status(401).send({
                'message': 'Invalid username and password'
            });
        }
    } else {
        console.log("error");
        return res.status(404).send({
            'message': 'Invalid username or password format'
        });
    }
});

router.delete('/', auth, async (req, res) => {
    console.log(req.headers.userdata);
    let parsedData = JSON.parse(req.headers.userdata);
    let uname = parsedData.uname;
    if(parser.parseString(uname, 20)) {
        try {
            let results = await db.collection('users').deleteOne({"userName": uname});
            console.log(results);
            return res.status(200).send({
                'message': 'Account deleted successfully'
            });
        } catch (error) {
            return res.status(500).send({
                'message': 'There was a server error'
            });
        }
    } else {
        return res.status(404).send({
            'message': 'There was an error in input format'
        });
    }
});

router.put('/', auth, async (req, res) => {
    console.log(req.headers.userdata);
    let parsedData = JSON.parse(req.headers.userdata);
    let uname = parsedData.uname;
    if(parser.parseEmail(req.body.email, 50) &&
       parser.parseString(req.body.password, 50))
    {
        // Make hashed password
        let hashedPassword;
        try {
            hashedPassword = await argon2.hash(req.body.password);
        } catch (error) {
            console.log(error);
            return res.status(400).send({
                'message': 'Error with password format'
            });
        }
        try {
            let results = await db.collection('users').updateOne({
                userName: uname
            },
            {
                $set: { emailAddress: req.body.email, password: hashedPassword }
            });
            console.log(results);
            return res.status(200).send({
                'message': 'Account updated successfully'
            });
        } catch (error) {
            return res.status(500).send({
                'message': 'There was a server error'
            });
        }
    } else {
        return res.status(404).send({
            'message': 'There was an error in input format'
        });
    }
});

module.exports = router;