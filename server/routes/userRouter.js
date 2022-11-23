const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const parser = require('../utils/requestParser');
const argon2 = require('argon2');
const mongoose = require('mongoose');
const { db } = require('../models/userModel');
const { parseString } = require('../utils/requestParser');

router.post('/register', async (req, res) => {

    // Check for valid inputs
    if(parser.parseString(req.body.userName, 20) &&
       parser.parseEmail(req.body.emailAddress, 50) &&
       parser.parseString(req.body.password, 50) &&
       parser.parseString(req.body.profilePicturePath, 50)) 
    {
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

        // Query collection for username requested
        let userExists = await db.collection("users").find({"userName": req.body.userName}).toArray();
        if(userExists.length > 0) {
            console.log('User already exists');
            return res.status(403).send({
                'message': 'User already exists'
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
            
            // Verify the password, incase of error send error message
            if(await argon2.verify(userExists[0].password, req.body.password)) {
                res.sendStatus(200);
            } else {
                console.log("Invalid password");
                return res.status(401).send({
                    'message': 'Invalid username or password'
                });
            }
        } catch (error) {
            return res.status(401).send({
                'message': 'Invalid username or password'
            });
        }
    } else {
        return res.status(404).send({
            'message': 'Invalid username or password format'
        });
    }
});

module.exports = router;