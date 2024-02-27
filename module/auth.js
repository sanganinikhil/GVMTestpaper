const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthSchema = Schema({
    username : String,
    password : String
})

module.exports = mongoose.model('auth', AuthSchema);

