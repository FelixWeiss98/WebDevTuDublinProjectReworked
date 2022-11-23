const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: 'String',
    emailAddress: 'String',
    password: 'String',
    profilePicturePath: 'String',
});

let userData = mongoose.model('User', UserSchema);

module.exports = userData;