const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    nom: String,
    email: String,
    sujet: String,
    message: String
});
module.exports = contact;