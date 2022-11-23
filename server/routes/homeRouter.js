const express = require('express');
const router = express.Router();
const restaurantData = require('../models/homeModel');
const parser = require('../utils/requestParser');


// Get all the restaurants from the database
router.get('/', async (req, res) =>{
    try {
        await restaurantData.find()
        .then(data => res.json(data));
    } catch (error) {
        console.log(error);
        res.status(500).send({
            'message': 'Server error, please try again later'
        });
    }
});

module.exports = router;