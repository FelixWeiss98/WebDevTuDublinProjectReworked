const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restaurantSchema = new Schema({
    restaurantName: 'String',
    rating: 'Number',
    description: 'String',
    imagePath: 'String'
});

let restaurantData = mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantData