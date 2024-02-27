const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    firstname : String,
    lastname : String,
    email : String,
    PhoneNo : Number
})

module.exports = mongoose.model('user', UserSchema);