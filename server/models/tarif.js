const mongoose = require('mongoose');

const tarif = new mongoose.Schema({
    prix : Number,
    typeService : String
});
module.exports = tarif;